const Course = require('../models/Course');
const UserProgress = require('../models/UserProgress');
const asyncHandler = require('../utils/asyncHandler');

/**
 * GET /api/courses
 * Query params: category, level, search, page, limit
 * Public — returns a lightweight list (module/lesson titles only, no lesson
 * `content`) so the catalog grid is fast and never leaks paid content.
 */
const getCourses = asyncHandler(async (req, res) => {
  const { category, level, search, page = 1, limit = 60 } = req.query;

  const filter = { isPublished: true };
  if (category && category !== 'all') filter.category = category;
  if (level && level !== 'all') filter.level = level;
  if (search) filter.$text = { $search: search };

  const courses = await Course.find(filter)
    .select(
      'title slug shortDescription category level price thumbnail instructor duration lessonsCount rating studentsCount tags modules.title'
    )
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(Number(limit));

  const total = await Course.countDocuments(filter);

  res.json({
    success: true,
    total,
    page: Number(page),
    pages: Math.ceil(total / limit),
    data: courses,
  });
});

/**
 * GET /api/courses/:slug
 * Public — full course document including all modules/lessons. Lesson
 * `content` IS included here (that's what makes syllabus preview possible),
 * but the frontend must only render `content` for lessons where
 * `isPreview: true` or the visitor is enrolled — see CourseDetails.jsx.
 * If the request is authenticated, also attaches the user's progress doc.
 */
const getCourseBySlug = asyncHandler(async (req, res) => {
  const course = await Course.findOne({ slug: req.params.slug, isPublished: true });

  if (!course) {
    res.statusCode = 404;
    throw new Error('Course not found');
  }

  let progress = null;
  if (req.user) {
    progress = await UserProgress.findOne({ user: req.user._id, course: course._id });
  }

  res.json({ success: true, data: course, progress });
});

/**
 * GET /api/courses/:slug/lessons/:lessonId
 * Returns a single lesson's content — used by the protected Course Viewer
 * to lazy-load one lesson at a time instead of shipping the whole course.
 */
const getLessonContent = asyncHandler(async (req, res) => {
  const course = await Course.findOne({ slug: req.params.slug });

  if (!course) {
    res.statusCode = 404;
    throw new Error('Course not found');
  }

  let foundLesson = null;
  let parentModule = null;

  for (const mod of course.modules) {
    const lesson = mod.lessons.id(req.params.lessonId);
    if (lesson) {
      foundLesson = lesson;
      parentModule = mod;
      break;
    }
  }

  if (!foundLesson) {
    res.statusCode = 404;
    throw new Error('Lesson not found');
  }

  res.json({
    success: true,
    data: {
      lesson: foundLesson,
      moduleTitle: parentModule.title,
      courseTitle: course.title,
    },
  });
});

/**
 * GET /api/courses/meta/categories
 * Returns each category with a live course count — powers the landing
 * page's "Explore by category" cards without hardcoding numbers.
 */
const getCategoryCounts = asyncHandler(async (req, res) => {
  const counts = await Course.aggregate([
    { $match: { isPublished: true } },
    { $group: { _id: '$category', count: { $sum: 1 } } },
  ]);

  res.json({ success: true, data: counts });
});

module.exports = { getCourses, getCourseBySlug, getLessonContent, getCategoryCounts };
