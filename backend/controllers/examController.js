const Course = require('../models/Course');
const UserProgress = require('../models/UserProgress');
const Certificate = require('../models/Certificate');
const asyncHandler = require('../utils/asyncHandler');

const PASS_THRESHOLD_PERCENT = 70;

/**
 * GET /api/exams/:slug
 * Returns the exam question pool for a course, with correctAnswer and
 * explanation stripped — this is the ONLY place exam questions are ever
 * sent to a client, and they're always sanitized. Requires the student to
 * have completed 100% of the course's lessons first, so the exam can't be
 * attempted before the material has actually been covered.
 */
const getExam = asyncHandler(async (req, res) => {
  const course = await Course.findOne({ slug: req.params.slug, isPublished: true });

  if (!course) {
    res.statusCode = 404;
    throw new Error('Course not found');
  }

  if (!course.finalAssessment || course.finalAssessment.length === 0) {
    res.statusCode = 404;
    throw new Error('This course does not have a certification exam yet');
  }

  const progress = await UserProgress.findOne({ user: req.user._id, course: course._id });
  if (!progress || progress.completionPercent < 100) {
    res.statusCode = 403;
    throw new Error('Complete all lessons before attempting the certification exam');
  }

  const sanitizedQuestions = course.finalAssessment.map((q) => ({
    _id: q._id,
    question: q.question,
    options: q.options,
    // correctAnswer and explanation are deliberately omitted here
  }));

  res.json({
    success: true,
    data: {
      courseId: course._id,
      courseTitle: course.title,
      totalQuestions: sanitizedQuestions.length,
      passThreshold: PASS_THRESHOLD_PERCENT,
      alreadyPassed: progress.examPassed,
      previousAttempts: progress.examAttempts.length,
      questions: sanitizedQuestions,
    },
  });
});

/**
 * POST /api/exams/:slug/submit
 * Grades a submitted set of answers SERVER-SIDE against the stored
 * correctAnswer values (never trust a client-computed score), records
 * the attempt, and issues a Certificate on first passing attempt.
 *
 * Expected body: { answers: [{ questionId, answer }] }
 */
const submitExam = asyncHandler(async (req, res) => {
  const { answers } = req.body;

  if (!Array.isArray(answers) || answers.length === 0) {
    res.statusCode = 400;
    throw new Error('answers must be a non-empty array');
  }

  const course = await Course.findOne({ slug: req.params.slug, isPublished: true });
  if (!course || !course.finalAssessment || course.finalAssessment.length === 0) {
    res.statusCode = 404;
    throw new Error('Exam not found for this course');
  }

  let progress = await UserProgress.findOne({ user: req.user._id, course: course._id });
  if (!progress || progress.completionPercent < 100) {
    res.statusCode = 403;
    throw new Error('Complete all lessons before attempting the certification exam');
  }

  // Grade against the authoritative question pool — a submitted answer for
  // a questionId not in the pool, or a missing answer, simply counts wrong.
  const answerMap = new Map(answers.map((a) => [String(a.questionId), a.answer]));

  let correctCount = 0;
  const results = course.finalAssessment.map((q) => {
    const submitted = answerMap.get(String(q._id));
    const isCorrect = submitted === q.correctAnswer;
    if (isCorrect) correctCount++;
    return {
      questionId: q._id,
      question: q.question,
      submittedAnswer: submitted || null,
      correctAnswer: q.correctAnswer,
      isCorrect,
      explanation: q.explanation,
    };
  });

  const score = Math.round((correctCount / course.finalAssessment.length) * 100);
  const passed = score >= PASS_THRESHOLD_PERCENT;

  progress.examAttempts.push({ score, passed });
  let certificate = null;

  if (passed) {
    progress.examPassed = true;

    // A user only ever gets ONE certificate per course — look up an
    // existing one before creating, so repeat passes don't duplicate it.
    certificate = await Certificate.findOne({ user: req.user._id, course: course._id });
    if (!certificate) {
      certificate = await Certificate.create({
        user: req.user._id,
        course: course._id,
        userName: req.user.name,
        courseTitle: course.title,
        score,
      });
      progress.certificateId = certificate.certificateId;
    }
  }

  await progress.save();

  res.json({
    success: true,
    data: {
      score,
      passed,
      passThreshold: PASS_THRESHOLD_PERCENT,
      correctCount,
      totalQuestions: course.finalAssessment.length,
      results,
      certificate: certificate
        ? { certificateId: certificate.certificateId, issuedAt: certificate.issuedAt }
        : null,
    },
  });
});

/**
 * GET /api/certificates/:certificateId
 * Public — anyone with the link can verify a certificate is genuine,
 * without needing to be logged in. This is the whole point of a
 * certificate: a third party (employer, etc.) should be able to check it.
 */
const getCertificateById = asyncHandler(async (req, res) => {
  const certificate = await Certificate.findOne({ certificateId: req.params.certificateId });

  if (!certificate) {
    res.statusCode = 404;
    throw new Error('Certificate not found');
  }

  res.json({ success: true, data: certificate });
});

module.exports = { getExam, submitExam, getCertificateById };
