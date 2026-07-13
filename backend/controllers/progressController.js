const mongoose = require('mongoose');
const Course = require('../models/Course');
const UserProgress = require('../models/UserProgress');
const User = require('../models/User');
const asyncHandler = require('../utils/asyncHandler');

/**
 * GET /api/progress
 * Returns every in-progress/completed course for the logged-in student,
 * used to render dashboard completion rings and the course grid overlay.
 */
const getAllProgress = asyncHandler(async (req, res) => {
  const progress = await UserProgress.find({ user: req.user._id })
    .populate('course', 'title slug thumbnailUrl domain difficulty')
    .sort({ updatedAt: -1 });

  res.json({ success: true, data: progress });
});

/**
 * GET /api/progress/continue
 * Returns the single most-recently-touched, not-yet-completed course,
 * powering the "Continue Learning" dashboard hero.
 */
const getContinueLearning = asyncHandler(async (req, res) => {
  const progress = await UserProgress.findOne({
    user: req.user._id,
    status: { $ne: 'completed' },
  })
    .sort({ updatedAt: -1 })
    .populate('course', 'title slug thumbnailUrl domain difficulty modules');

  res.json({ success: true, data: progress });
});

/**
 * POST /api/progress/:courseId/lessons/:lessonId/complete
 * Idempotently marks a lesson complete, recalculates completion %,
 * and auto-creates the progress doc on first interaction.
 */
const markLessonComplete = asyncHandler(async (req, res) => {
  const { courseId, lessonId } = req.params;

  const course = await Course.findById(courseId);
  if (!course) {
    res.statusCode = 404;
    throw new Error('Course not found');
  }

  const totalLessons = course.modules.reduce((sum, m) => sum + m.lessons.length, 0);

  let progress = await UserProgress.findOne({ user: req.user._id, course: courseId });

  if (!progress) {
    progress = await UserProgress.create({
      user: req.user._id,
      course: courseId,
      status: 'in-progress',
    });
  }

  const alreadyCompleted = progress.completedLessons.some(
    (l) => l.lessonId.toString() === lessonId
  );

  if (!alreadyCompleted) {
    progress.completedLessons.push({ lessonId: new mongoose.Types.ObjectId(lessonId) });
  }

  progress.lastVisitedLessonId = lessonId;
  progress.completionPercent = totalLessons
    ? Math.round((progress.completedLessons.length / totalLessons) * 100)
    : 0;
  progress.status = progress.completionPercent >= 100 ? 'completed' : 'in-progress';
  progress.completedAt = progress.status === 'completed' ? new Date() : null;

  await progress.save();

  // Keep the denormalized user stats fresh for quick dashboard reads.
  if (!alreadyCompleted) {
    await User.findByIdAndUpdate(req.user._id, {
      $inc: { 'stats.lessonsCompleted': 1 },
      $set: { 'stats.lastActiveAt': new Date() },
    });
  }

  res.json({ success: true, data: progress });
});

module.exports = { getAllProgress, getContinueLearning, markLessonComplete };
