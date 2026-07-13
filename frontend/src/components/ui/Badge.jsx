const DIFFICULTY_STYLES = {
  Beginner: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Intermediate: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  Advanced: 'bg-rose-50 text-rose-700 border-rose-200',
};

export default function Badge({ children, difficulty, className = '' }) {
  const styles = difficulty
    ? DIFFICULTY_STYLES[difficulty] || 'bg-slate-100 text-slate-600 border-slate-200'
    : 'bg-slate-100 text-slate-600 border-slate-200';

  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border ${styles} ${className}`}>
      {children}
    </span>
  );
}
