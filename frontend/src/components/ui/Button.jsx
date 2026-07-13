import { motion } from 'framer-motion';
import { buttonTap } from '../../animations/motionVariants';

const VARIANTS = {
  primary: 'bg-accent-indigo hover:bg-indigo-700 text-white shadow-glow',
  emerald: 'bg-emerald-600 hover:bg-emerald-700 text-white font-semibold',
  ghost: 'bg-transparent hover:bg-surface-muted text-ink-secondary border border-surface-border',
  subtle: 'bg-surface-muted hover:bg-slate-200 text-ink',
};

export default function Button({ children, variant = 'primary', className = '', icon: Icon, ...props }) {
  return (
    <motion.button
      variants={buttonTap}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium
        transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none
        ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {Icon && <Icon size={16} />}
      {children}
    </motion.button>
  );
}
