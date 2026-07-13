import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#F8FAFC', // slate-50 — warm off-white, eye-comfort base
          raised: '#FFFFFF',
          card: '#FFFFFF',
          border: '#E2E8F0', // slate-200
          muted: '#F1F5F9', // slate-100, section alternation
        },
        ink: {
          DEFAULT: '#0F172A', // slate-900 — primary text, not pure black
          secondary: '#64748B', // slate-500
          faint: '#94A3B8', // slate-400
        },
        accent: {
          indigo: '#4F46E5', // indigo-600 — primary CTA
          indigoSoft: '#EEF2FF',
          emerald: '#059669', // emerald-600 — pricing/savings
          emeraldSoft: '#ECFDF5',
          amber: '#D97706',
        },
      },
      fontFamily: {
        display: ['"Cal Sans"', '"Inter"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        soft: '0 1px 2px 0 rgba(15,23,42,0.04), 0 1px 3px 0 rgba(15,23,42,0.06)',
        card: '0 4px 16px -4px rgba(15,23,42,0.08), 0 2px 4px -2px rgba(15,23,42,0.04)',
        lift: '0 16px 40px -12px rgba(79,70,229,0.18)',
        glow: '0 0 0 1px rgba(79,70,229,0.12), 0 8px 24px -8px rgba(79,70,229,0.25)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.4s ease-out',
      },
    },
  },
  plugins: [typography],
};
