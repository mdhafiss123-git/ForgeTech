import { NavLink } from 'react-router-dom';
import {
  LayoutGrid, Code2, Server, Smartphone, Cpu, Cloud, Sparkles, Settings, LogOut,
} from 'lucide-react';

const DOMAIN_LINKS = [
  { to: '/dashboard?category=Frontend%20Development', label: 'Frontend Dev', icon: Code2 },
  { to: '/dashboard?category=Backend%20%26%20Databases', label: 'Backend & DB', icon: Server },
  { to: '/dashboard?category=Mobile%20Development', label: 'Mobile Dev', icon: Smartphone },
  { to: '/dashboard?category=CS%20Core%20%26%20DSA', label: 'CS Core & DSA', icon: Cpu },
  { to: '/dashboard?category=Cloud%2C%20DevOps%20%26%20Security', label: 'Cloud & DevOps', icon: Cloud },
  { to: '/dashboard?category=AI%20%26%20Data%20Science', label: 'AI & Data Science', icon: Sparkles },
];

export default function Sidebar({ user }) {
  return (
    <aside className="hidden lg:flex flex-col w-64 shrink-0 h-screen sticky top-0 border-r border-surface-border bg-white">
      <div className="px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-emerald-500" />
          <span className="font-display font-semibold text-lg tracking-tight text-ink">TechForge</span>
        </div>
      </div>

      <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
        <SidebarLink to="/dashboard" label="Overview" icon={LayoutGrid} end />
        <p className="px-3 pt-5 pb-2 text-xs font-semibold uppercase tracking-wider text-ink-faint">Domains</p>
        {DOMAIN_LINKS.map((link) => (
          <SidebarLink key={link.label} {...link} />
        ))}
      </nav>

      <div className="px-3 pb-4 space-y-1 border-t border-surface-border pt-3">
        <SidebarLink to="/settings" label="Settings" icon={Settings} />
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-ink-secondary hover:text-rose-600 hover:bg-rose-50 transition-colors">
          <LogOut size={16} />
          Log out
        </button>

        <div className="flex items-center gap-3 px-3 pt-3">
          <div className="w-8 h-8 rounded-full bg-surface-muted flex items-center justify-center text-xs font-medium text-ink">
            {user?.name?.[0]?.toUpperCase() || 'U'}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-ink truncate">{user?.name || 'Student'}</p>
            <p className="text-xs text-ink-faint truncate">{user?.email || ''}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

function SidebarLink({ to, label, icon: Icon, end = false }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
          isActive
            ? 'bg-accent-indigoSoft text-accent-indigo border border-indigo-200'
            : 'text-ink-secondary hover:text-ink hover:bg-surface-muted border border-transparent'
        }`
      }
    >
      <Icon size={16} />
      {label}
    </NavLink>
  );
}
