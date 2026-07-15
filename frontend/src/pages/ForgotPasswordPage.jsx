import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, CheckCircle2 } from 'lucide-react';
import Button from '../components/ui/Button';
import { forgotPasswordRequest } from '../services/api';
import { fadeUp } from '../animations/motionVariants';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      // The backend always returns the same generic success message,
      // whether or not the email exists — this is intentional (prevents
      // attackers from using this form to discover registered emails),
      // so the UI shows the same "check your inbox" state either way.
      await forgotPasswordRequest(email);
      setSubmitted(true);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface px-4 relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-indigo-200/40 blur-[130px] rounded-full" />

      <motion.div variants={fadeUp} initial="hidden" animate="visible" className="w-full max-w-sm relative">
        <Link to="/" className="flex items-center gap-2 justify-center mb-8">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-emerald-500" />
          <span className="font-display font-semibold text-lg tracking-tight text-ink">TechForge</span>
        </Link>

        <div className="rounded-2xl border border-surface-border bg-white shadow-card p-6">
          {submitted ? (
            <div className="text-center py-2">
              <div className="w-12 h-12 rounded-full bg-accent-emeraldSoft text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={22} />
              </div>
              <h1 className="font-display text-lg font-semibold text-ink mb-1.5">Check your inbox</h1>
              <p className="text-sm text-ink-secondary">
                If an account exists for <span className="font-medium text-ink">{email}</span>, we've sent
                a link to reset your password. It expires in 15 minutes.
              </p>
            </div>
          ) : (
            <>
              <div className="w-10 h-10 rounded-xl bg-accent-indigoSoft text-accent-indigo flex items-center justify-center mb-4">
                <Mail size={18} />
              </div>
              <h1 className="font-display text-xl font-semibold text-ink mb-1.5">Forgot your password?</h1>
              <p className="text-sm text-ink-secondary mb-6">
                Enter the email on your account and we'll send you a link to reset it.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <label className="block">
                  <span className="text-xs font-medium text-ink-secondary mb-1.5 block">Email</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-white border border-surface-border rounded-xl px-3.5 py-2.5
                      text-sm text-ink placeholder:text-ink-faint focus:border-indigo-300 transition-colors"
                    placeholder="you@example.com"
                  />
                </label>

                {error && <p className="text-sm text-rose-600">{error}</p>}

                <Button type="submit" variant="primary" className="w-full" disabled={submitting}>
                  {submitting ? 'Sending…' : 'Send reset link'}
                </Button>
              </form>
            </>
          )}
        </div>

        <Link
          to="/login"
          className="mt-6 flex items-center justify-center gap-1.5 text-sm text-ink-secondary hover:text-ink transition-colors"
        >
          <ArrowLeft size={14} /> Back to login
        </Link>
      </motion.div>
    </div>
  );
}
