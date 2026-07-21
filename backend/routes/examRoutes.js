const express = require('express');
const router = express.Router();
const { getExam, submitExam } = require('../controllers/examController');
const { protect } = require('../middleware/auth');

// Taking an exam requires auth — you must be enrolled and have completed
// the course's lessons (enforced in the controller).
router.get('/:slug', protect, getExam);
router.post('/:slug/submit', protect, submitExam);

module.exports = router;
