const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: 60,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Enter a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: 8,
      select: false, // never returned by default queries
    },
    avatarUrl: {
      type: String,
      default: '',
    },
    role: {
      type: String,
      enum: ['student', 'instructor', 'admin'],
      default: 'student',
    },
    enrolledCourses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
      },
    ],
    // Denormalized quick-access stats, refreshed whenever UserProgress changes.
    stats: {
      coursesCompleted: { type: Number, default: 0 },
      lessonsCompleted: { type: Number, default: 0 },
      currentStreakDays: { type: Number, default: 0 },
      lastActiveAt: { type: Date, default: Date.now },
    },
    // Password reset flow — store a HASH of the token, never the raw token,
    // the same way passwords are hashed. The raw token only ever exists in
    // the emailed link and the request body; the DB only ever sees the hash.
    resetPasswordToken: { type: String, select: false },
    resetPasswordExpires: { type: Date, select: false },
  },
  { timestamps: true }
);

UserSchema.pre('save', async function hashPassword(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.comparePassword = function comparePassword(candidate) {
  return bcrypt.compare(candidate, this.password);
};

// Generates a random reset token, stores its HASH + a 15-minute expiry on
// the user document, and returns the RAW token (only this raw value goes
// into the emailed link — the DB never stores it in plaintext).
UserSchema.methods.createPasswordResetToken = function createPasswordResetToken() {
  const rawToken = crypto.randomBytes(32).toString('hex');

  this.resetPasswordToken = crypto.createHash('sha256').update(rawToken).digest('hex');
  this.resetPasswordExpires = Date.now() + 15 * 60 * 1000; // 15 minutes

  return rawToken;
};

module.exports = mongoose.model('User', UserSchema);
