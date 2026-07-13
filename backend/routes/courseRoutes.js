const express = require('express');
const router = express.Router();
const {
  getCourses,
  getCourseBySlug,
  getLessonContent,
  getCategoryCounts,
} = require('../controllers/courseController');
const { protect } = require('../middleware/auth');

// Public catalog listing — filter by ?category=&level=&search=
router.get('/', getCourses);
router.get('/meta/categories', getCategoryCounts);

// Optional-auth: attaches progress if a valid token is present.
router.get('/:slug', softProtect, getCourseBySlug);
router.get('/:slug/lessons/:lessonId', getLessonContent);

// Middleware that attaches req.user if a valid token exists, but doesn't block.
function softProtect(req, res, next) {
  if (!req.headers.authorization?.startsWith('Bearer')) return next();
  return protect(req, res, next);
}

module.exports = router;
