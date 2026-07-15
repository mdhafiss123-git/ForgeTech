import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { KeyRound } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';
import { resetPasswordRequest } from '../services/api';
import { fadeUp } from '../animations/motionVariants';

export default function ResetPasswordPage() {
  const { token } = useParams();
  const navigate = useNavigate();
  const { setSessionFromToken } = useAuth();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await resetPasswordRequest(token, password);
      // Reset succeeds with a fresh login token, so the user lands
      // signed in immediately rather than having to log in again.
      setSessionFromToken(res.token, res.data);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'This reset link is invalid or has expired.');
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
          <div className="w-10 h-10 rounded-xl bg-accent-indigoSoft text-accent-indigo flex items-center justify-center mb-4">
            <KeyRound size={18} />
          </div>
          <h1 className="font-display text-xl font-semibold text-ink mb-1.5">Set a new password</h1>
          <p className="text-sm text-ink-secondary mb-6">Choose a new password for your account.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
              <span className="text-xs font-medium text-ink-secondary mb-1.5 block">New password</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                className="w-full bg-white border border-surface-border rounded-xl px-3.5 py-2.5
                  text-sm text-ink placeholder:text-ink-faint focus:border-indigo-300 transition-colors"
              />
            </label>

            <label className="block">
              <span className="text-xs font-medium text-ink-secondary mb-1.5 block">Confirm new password</span>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={8}
                className="w-full bg-white border border-surface-border rounded-xl px-3.5 py-2.5
                  text-sm text-ink placeholder:text-ink-faint focus:border-indigo-300 transition-colors"
              />
            </label>

            {error && (
              <div className="text-sm text-rose-600">
                {error}
                {error.includes('expired') && (
                  <>
                    {' '}
                    <Link to="/forgot-password" className="text-accent-indigo hover:text-indigo-700 font-medium">
                      Request a new link
                    </Link>
                  </>
                )}
              </div>
            )}

            <Button type="submit" variant="primary" className="w-full" disabled={submitting}>
              {submitting ? 'Updating…' : 'Reset password'}
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
