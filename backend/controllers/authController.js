const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const User = require('../models/User');
const asyncHandler = require('../utils/asyncHandler');
const sendEmail = require('../utils/sendEmail');

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });

// POST /api/auth/register
const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const existing = await User.findOne({ email });
  if (existing) {
    res.statusCode = 400;
    throw new Error('An account with this email already exists');
  }

  const user = await User.create({ name, email, password });

  res.status(201).json({
    success: true,
    token: signToken(user._id),
    data: { id: user._id, name: user.name, email: user.email },
  });
});

// POST /api/auth/login
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.comparePassword(password))) {
    res.statusCode = 401;
    throw new Error('Invalid email or password');
  }

  res.json({
    success: true,
    token: signToken(user._id),
    data: { id: user._id, name: user.name, email: user.email, stats: user.stats },
  });
});

// GET /api/auth/me
const getMe = asyncHandler(async (req, res) => {
  res.json({ success: true, data: req.user });
});

// POST /api/auth/forgot-password
// Always responds with the same generic success message, whether or not
// the email exists — this prevents attackers from using this endpoint to
// discover which emails are registered (a real, common enumeration attack).
const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const genericResponse = {
    success: true,
    message: 'If an account with that email exists, a password reset link has been sent.',
  };

  const user = await User.findOne({ email });
  if (!user) {
    return res.json(genericResponse); // don't reveal whether the email exists
  }

  const rawToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  const resetUrl = `${process.env.CLIENT_URL}/reset-password/${rawToken}`;

  try {
    await sendEmail({
      to: user.email,
      subject: 'Reset your TechForge password',
      html: `
        <p>Hi ${user.name},</p>
        <p>You requested a password reset. Click the link below to set a new password. This link expires in 15 minutes.</p>
        <p><a href="${resetUrl}">${resetUrl}</a></p>
        <p>If you didn't request this, you can safely ignore this email — your password won't be changed.</p>
      `,
      text: `Reset your password: ${resetUrl} (expires in 15 minutes). If you didn't request this, ignore this email.`,
    });
  } catch (err) {
    // Roll back the token if the email genuinely fails to send, so the
    // user isn't left with a valid-but-undeliverable reset link.
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save({ validateBeforeSave: false });
    res.statusCode = 500;
    throw new Error('Could not send reset email. Please try again shortly.');
  }

  res.json(genericResponse);
});

// POST /api/auth/reset-password/:token
const resetPassword = asyncHandler(async (req, res) => {
  const { password } = req.body;
  const hashedToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

  const user = await User.findOne({
    resetPasswordToken: hashedToken,
    resetPasswordExpires: { $gt: Date.now() },
  }).select('+resetPasswordToken +resetPasswordExpires');

  if (!user) {
    res.statusCode = 400;
    throw new Error('This reset link is invalid or has expired. Please request a new one.');
  }

  user.password = password; // re-hashed automatically by the pre('save') hook
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;
  await user.save();

  res.json({
    success: true,
    token: signToken(user._id),
    data: { id: user._id, name: user.name, email: user.email },
  });
});

module.exports = { register, login, getMe, forgotPassword, resetPassword };
