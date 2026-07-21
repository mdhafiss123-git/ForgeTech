import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, XCircle, Award, RotateCcw } from 'lucide-react';
import { fetchExam, submitExam } from '../services/api';
import Button from '../components/ui/Button';
import { fadeUp } from '../animations/motionVariants';

export default function ExamPage() {
  const { slug } = useParams();

  const [exam, setExam] = useState(null);
  const [answers, setAnswers] = useState({}); // questionId -> 'A'|'B'|'C'|'D'
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchExam(slug)
      .then(({ data }) => setExam(data))
      .catch((err) => setError(err.response?.data?.message || 'Could not load the exam.'))
      .finally(() => setLoading(false));
  }, [slug]);

  const handleSelect = (questionId, letter) => {
    setAnswers((prev) => ({ ...prev, [questionId]: letter }));
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError('');
    try {
      const payload = Object.entries(answers).map(([questionId, answer]) => ({ questionId, answer }));
      const { data } = await submitExam(slug, payload);
      setResult(data);
    } catch (err) {
      setError(err.response?.data?.message || 'Could not submit the exam. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleRetake = () => {
    setResult(null);
    setAnswers({});
  };

  if (loading) {
    return <div className="min-h-screen bg-surface flex items-center justify-center text-ink-secondary">Loading exam…</div>;
  }

  if (error && !exam) {
    return (
      <div className="min-h-screen bg-surface flex flex-col items-center justify-center text-center px-4">
        <p className="text-ink font-medium mb-2">{error}</p>
        <Link to={`/courses/${slug}`} className="text-sm text-accent-indigo hover:text-indigo-700">
          Back to course
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      <header className="sticky top-0 z-10 border-b border-surface-border bg-white/90 backdrop-blur-lg">
        <div className="max-w-3xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <Link to={`/courses/${slug}`} className="flex items-center gap-1.5 text-sm text-ink-secondary hover:text-ink transition-colors">
            <ArrowLeft size={14} /> Back to course
          </Link>
          <span className="text-sm font-medium text-ink">{exam.courseTitle} — Final Exam</span>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 md:px-8 py-10">
        {result ? (
          <ExamResult result={result} slug={slug} onRetake={handleRetake} />
        ) : (
          <>
            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-8">
              <h1 className="font-display text-2xl font-semibold text-ink mb-2">Certification Exam</h1>
              <p className="text-ink-secondary text-sm">
                {exam.totalQuestions} questions · Pass with {exam.passThreshold}% or higher to earn your Course
                Completion Certificate.
                {exam.previousAttempts > 0 && !exam.alreadyPassed && (
                  <span className="block mt-1 text-amber-700">
                    You've attempted this exam {exam.previousAttempts} time{exam.previousAttempts !== 1 && 's'} before.
                  </span>
                )}
                {exam.alreadyPassed && (
                  <span className="block mt-1 text-emerald-700 font-medium">
                    You've already passed this exam — retaking it won't affect your certificate.
                  </span>
                )}
              </p>
            </motion.div>

            <div className="space-y-5">
              {exam.questions.map((q, index) => (
                <motion.div
                  key={q._id}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: Math.min(index * 0.02, 0.4) }}
                  className="rounded-2xl border border-surface-border bg-white p-5 shadow-soft"
                >
                  <p className="text-sm font-medium text-ink mb-4">
                    <span className="text-ink-faint mr-2">{index + 1}.</span>
                    {q.question}
                  </p>
                  <div className="space-y-2">
                    {Object.entries(q.options).map(([letter, text]) => (
                      <label
                        key={letter}
                        className={`flex items-start gap-3 p-3 rounded-xl border text-sm cursor-pointer transition-colors ${
                          answers[q._id] === letter
                            ? 'border-indigo-300 bg-accent-indigoSoft text-ink'
                            : 'border-surface-border hover:bg-surface-muted text-ink-secondary'
                        }`}
                      >
                        <input
                          type="radio"
                          name={q._id}
                          value={letter}
                          checked={answers[q._id] === letter}
                          onChange={() => handleSelect(q._id, letter)}
                          className="mt-0.5"
                        />
                        <span>
                          <span className="font-medium mr-1.5">{letter}.</span>
                          {text}
                        </span>
                      </label>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {error && <p className="text-sm text-rose-600 mt-4">{error}</p>}

            <div className="mt-8 flex items-center justify-between">
              <p className="text-sm text-ink-faint">
                {Object.keys(answers).length} / {exam.totalQuestions} answered
              </p>
              <Button
                variant="emerald"
                onClick={handleSubmit}
                disabled={submitting || Object.keys(answers).length === 0}
              >
                {submitting ? 'Grading…' : 'Submit exam'}
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function ExamResult({ result, slug, onRetake }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" animate="visible">
      <div className={`rounded-2xl border p-8 text-center mb-8 ${
        result.passed ? 'border-emerald-200 bg-accent-emeraldSoft' : 'border-rose-200 bg-rose-50'
      }`}>
        {result.passed ? (
          <Award size={40} className="mx-auto text-emerald-600 mb-3" />
        ) : (
          <XCircle size={40} className="mx-auto text-rose-500 mb-3" />
        )}
        <h2 className="font-display text-2xl font-semibold text-ink mb-1">
          {result.passed ? 'You passed! 🎉' : 'Not quite — try again'}
        </h2>
        <p className="text-ink-secondary text-sm">
          You scored <span className="font-semibold text-ink">{result.score}%</span> ({result.correctCount}/
          {result.totalQuestions} correct) — passing score is {result.passThreshold}%.
        </p>

        {result.passed && result.certificate && (
          <Link to={`/certificate/${result.certificate.certificateId}`}>
            <Button variant="emerald" className="mt-5">
              View your certificate
            </Button>
          </Link>
        )}

        {!result.passed && (
          <Button variant="primary" icon={RotateCcw} className="mt-5" onClick={onRetake}>
            Retake exam
          </Button>
        )}
      </div>

      <h3 className="font-display text-lg font-semibold text-ink mb-4">Review your answers</h3>
      <div className="space-y-3">
        {result.results.map((r, index) => (
          <div
            key={r.questionId}
            className={`rounded-xl border p-4 text-sm ${
              r.isCorrect ? 'border-surface-border bg-white' : 'border-rose-200 bg-rose-50/50'
            }`}
          >
            <div className="flex items-start gap-2.5">
              {r.isCorrect ? (
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
              ) : (
                <XCircle size={16} className="text-rose-500 shrink-0 mt-0.5" />
              )}
              <div>
                <p className="text-ink font-medium">
                  {index + 1}. {r.question}
                </p>
                {!r.isCorrect && (
                  <p className="text-ink-secondary mt-1">
                    Your answer: <span className="font-medium">{r.submittedAnswer || 'None'}</span> · Correct:{' '}
                    <span className="font-medium text-emerald-700">{r.correctAnswer}</span>
                  </p>
                )}
                {r.explanation && <p className="text-ink-faint mt-1 text-xs">{r.explanation}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link to={`/courses/${slug}`} className="mt-8 inline-flex items-center gap-1.5 text-sm text-ink-secondary hover:text-ink transition-colors">
        <ArrowLeft size={14} /> Back to course
      </Link>
    </motion.div>
  );
}
