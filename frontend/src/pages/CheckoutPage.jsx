import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowLeft, Lock } from 'lucide-react';
import { getCourseBySlug } from '../services/courseService';
import Button from '../components/ui/Button';
import { fadeUp } from '../animations/motionVariants';

/**
 * Minimal $1 checkout confirmation. Wire the `handlePay` function to your
 * payment provider (Stripe Checkout / Payment Element is the natural fit
 * for a $1 one-time charge) — this component owns the UI and course lookup,
 * intentionally leaving the charge call as a single integration point.
 */
export default function CheckoutPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState(null);
  const [paying, setPaying] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    getCourseBySlug(slug)
      .then(({ data }) => setCourse(data))
      .catch(() => setError('We could not load that course.'));
  }, [slug]);

  const handlePay = async () => {
    setPaying(true);
    setError('');
    try {
      // TODO: replace with a real charge, e.g.
      // await api.post(`/payments/checkout`, { courseId: course._id });
      await new Promise((r) => setTimeout(r, 900));
      navigate(`/courses/${slug}`);
    } catch {
      setError('Payment failed. Please try again.');
    } finally {
      setPaying(false);
    }
  };

  if (!course && !error) {
    return <div className="min-h-screen bg-surface flex items-center justify-center text-ink-secondary">Loading…</div>;
  }

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-4 py-12">
      <motion.div variants={fadeUp} initial="hidden" animate="visible" className="w-full max-w-md">
        <Link to="/" className="flex items-center gap-1.5 text-sm text-ink-secondary hover:text-ink mb-6 transition-colors">
          <ArrowLeft size={14} /> Back to browsing
        </Link>

        <div className="rounded-3xl border border-emerald-200 bg-white shadow-card p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2">Confirm enrollment</p>

          {error ? (
            <p className="text-sm text-rose-600">{error}</p>
          ) : (
            <>
              <h1 className="font-display text-xl font-semibold text-ink mb-1">{course.title}</h1>
              <p className="text-sm text-ink-secondary mb-6">{course.shortDescription}</p>

              <div className="flex items-end justify-between border-t border-b border-surface-border py-4 mb-6">
                <span className="text-sm text-ink-secondary">Total due today</span>
                <span className="font-display text-3xl font-bold text-ink">${(course.price ?? 1).toFixed(2)}</span>
              </div>

              <ul className="space-y-2.5 mb-8">
                {['Lifetime access to this course', 'Full syllabus & projects unlocked', 'No subscription, ever'].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-ink">
                    <span className="w-4 h-4 rounded-full bg-accent-emeraldSoft text-emerald-700 flex items-center justify-center">
                      <Check size={10} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <Button variant="emerald" className="w-full" disabled={paying} onClick={handlePay}>
                {paying ? 'Processing…' : `Pay $${(course.price ?? 1).toFixed(2)} & start learning`}
              </Button>

              <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-ink-faint">
                <Lock size={12} /> Secure checkout
              </p>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}
