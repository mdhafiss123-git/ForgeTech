import { Search, Bell } from 'lucide-react';

export default function Topbar({ user }) {
  return (
    <header className="lg:hidden sticky top-0 z-10 flex items-center justify-between gap-3 px-4 py-3 border-b border-surface-border bg-white/90 backdrop-blur">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-600 to-emerald-500" />
        <span className="font-display font-semibold text-ink">TechForge</span>
      </div>

      <div className="flex items-center gap-3">
        <button className="text-ink-secondary hover:text-ink transition-colors">
          <Search size={18} />
        </button>
        <button className="text-ink-secondary hover:text-ink transition-colors relative">
          <Bell size={18} />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-accent-indigo rounded-full" />
        </button>
        <div className="w-7 h-7 rounded-full bg-surface-muted flex items-center justify-center text-xs font-medium text-ink">
          {user?.name?.[0]?.toUpperCase() || 'U'}
        </div>
      </div>
    </header>
  );
}
