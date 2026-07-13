const jwt = require('jsonwebtoken');
const asyncHandler = require('../utils/asyncHandler');
const User = require('../models/User');

// Verifies the Bearer token and attaches the authenticated user to req.user.
const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization?.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    res.statusCode = 401;
    throw new Error('Not authorized — no token provided');
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decoded.id);

  if (!req.user) {
    res.statusCode = 401;
    throw new Error('Not authorized — user no longer exists');
  }

  next();
});

module.exports = { protect };
