import { GraduationCap, BookMarked, Flame } from 'lucide-react';

export default function ProgressStats({ stats }) {
  const items = [
    { label: 'Courses completed', value: stats?.coursesCompleted ?? 0, icon: GraduationCap, accent: 'text-emerald-600 bg-emerald-50' },
    { label: 'Lessons completed', value: stats?.lessonsCompleted ?? 0, icon: BookMarked, accent: 'text-accent-indigo bg-accent-indigoSoft' },
    { label: 'Day streak', value: stats?.currentStreakDays ?? 0, icon: Flame, accent: 'text-amber-600 bg-amber-50' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {items.map(({ label, value, icon: Icon, accent }) => (
        <div key={label} className="rounded-2xl border border-surface-border bg-white p-5 flex items-center gap-4 shadow-soft">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${accent}`}>
            <Icon size={18} />
          </div>
          <div>
            <p className="text-2xl font-display font-semibold text-ink leading-none">{value}</p>
            <p className="text-xs text-ink-secondary mt-1">{label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
