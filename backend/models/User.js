const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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

module.exports = mongoose.model('User', UserSchema);
