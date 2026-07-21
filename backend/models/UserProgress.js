const mongoose = require('mongoose');

// One document per (user, course) pair. Keeps a set of completed lesson IDs
// plus the last lesson visited, so "Continue Learning" can resume instantly.
const UserProgressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      required: true,
      index: true,
    },
    completedLessons: [
      {
        lessonId: { type: mongoose.Schema.Types.ObjectId, required: true },
        completedAt: { type: Date, default: Date.now },
      },
    ],
    lastVisitedLessonId: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },
    completionPercent: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
    status: {
      type: String,
      enum: ['not-started', 'in-progress', 'completed'],
      default: 'not-started',
    },
    startedAt: { type: Date, default: Date.now },
    completedAt: { type: Date, default: null },
    // Certification exam tracking — separate from lesson completion, since
    // a student can finish every lesson (completionPercent: 100) without
    // yet having passed the exam required for the certificate.
    examAttempts: [
      {
        score: { type: Number, required: true }, // percent, 0-100
        passed: { type: Boolean, required: true },
        attemptedAt: { type: Date, default: Date.now },
      },
    ],
    examPassed: { type: Boolean, default: false },
    certificateId: { type: String, default: null }, // set once, on first pass
  },
  { timestamps: true }
);

// A user can only have one progress document per course.
UserProgressSchema.index({ user: 1, course: 1 }, { unique: true });

module.exports = mongoose.model('UserProgress', UserProgressSchema);
