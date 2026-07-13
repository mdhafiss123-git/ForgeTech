const express = require('express');
const router = express.Router();
const {
  getAllProgress,
  getContinueLearning,
  markLessonComplete,
} = require('../controllers/progressController');
const { protect } = require('../middleware/auth');

router.use(protect); // every progress route requires a logged-in student

router.get('/', getAllProgress);
router.get('/continue', getContinueLearning);
router.post('/:courseId/lessons/:lessonId/complete', markLessonComplete);

module.exports = router;
