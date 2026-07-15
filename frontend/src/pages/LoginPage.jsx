import { useState, useMemo } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';
import { fadeUp } from '../animations/motionVariants';

const RETURNING_GREETINGS = [
  { title: 'Welcome back, Future Developer! ✨', subtitle: 'Ready to unlock your next tech skill?' },
  { title: 'Great to see you again 👋', subtitle: "Let's resume building your project." },
  { title: 'Your next breakthrough is one login away 🚀', subtitle: 'Pick up right where you left off.' },
];

const NEW_GREETINGS = [
  { title: 'Welcome to TechForge! ✨', subtitle: 'Your first course is just $1 away.' },
  { title: "Let's build your tech career 🚀", subtitle: 'Create an account to get started.' },
];

const CHECKOUT_GREETING = {
  title: 'Almost there! ✨',
  subtitle: 'Sign in to complete your $1 enrollment and start learning today.',
};

export default function LoginPage() {
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.redirectTo || '/dashboard';
  const isCheckoutFlow = redirectTo.startsWith('/checkout');

  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const greeting = useMemo(() => {
    if (isCheckoutFlow) return CHECKOUT_GREETING;
    const pool = mode === 'login' ? RETURNING_GREETINGS : NEW_GREETINGS;
    return pool[Math.floor(Math.random() * pool.length)];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      if (mode === 'login') await login(form.email, form.password);
      else await register(form.name, form.email, form.password);
      navigate(redirectTo);
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
          {isCheckoutFlow && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-emeraldSoft
              text-emerald-700 text-xs font-semibold mb-4 border border-emerald-200">
              <Sparkles size={12} /> $1 enrollment in progress
            </div>
          )}

          <h1 className="font-display text-xl font-semibold text-ink mb-1.5 leading-snug">{greeting.title}</h1>
          <p className="text-sm text-ink-secondary mb-6">{greeting.subtitle}</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'register' && (
              <Field label="Full name" name="name" value={form.name} onChange={handleChange} />
            )}
            <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
            <div>
              <Field label="Password" name="password" type="password" value={form.password} onChange={handleChange} />
              {mode === 'login' && (
                <Link
                  to="/forgot-password"
                  className="mt-1.5 inline-block text-xs text-accent-indigo hover:text-indigo-700 font-medium"
                >
                  Forgot password?
                </Link>
              )}
            </div>

            {error && <p className="text-sm text-rose-600">{error}</p>}

            <Button type="submit" variant="primary" className="w-full" disabled={submitting}>
              {submitting
                ? 'Please wait…'
                : mode === 'login'
                ? 'Sign in'
                : isCheckoutFlow
                ? 'Create account & continue'
                : 'Create account'}
            </Button>
          </form>

          <p className="text-sm text-ink-secondary text-center mt-5">
            {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
            <button
              onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
              className="text-accent-indigo hover:text-indigo-700 font-medium"
            >
              {mode === 'login' ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>

        <p className="text-center text-xs text-ink-faint mt-6">
          <Link to="/courses" className="hover:text-ink-secondary transition-colors">
            ← Keep browsing courses without an account
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

function Field({ label, name, type = 'text', value, onChange }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-ink-secondary mb-1.5 block">{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required
        className="w-full bg-white border border-surface-border rounded-xl px-3.5 py-2.5
          text-sm text-ink placeholder:text-ink-faint focus:border-indigo-300 transition-colors"
      />
    </label>
  );
}
