export default function ProgressBar({ percent = 0, accent = 'indigo', showLabel = false }) {
  const clamped = Math.min(100, Math.max(0, percent));
  const barColor = accent === 'emerald' ? 'bg-emerald-600' : 'bg-accent-indigo';

  return (
    <div className="w-full">
      <div className="h-1.5 w-full bg-surface-muted rounded-full overflow-hidden">
        <div
          className={`h-full ${barColor} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${clamped}%` }}
        />
      </div>
      {showLabel && <span className="mt-1 block text-xs text-ink-secondary">{clamped}% complete</span>}
    </div>
  );
}
