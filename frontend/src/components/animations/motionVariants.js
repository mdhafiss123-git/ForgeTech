export const fadeInDown = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

export const staggerContainer = (stagger = 0.08, delayChildren = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
});

export const slideInLeft = {
  hidden: { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

// Applied via whileHover={cardHover} directly (not a variants object).
export const cardHover = { y: -6, scale: 1.015, transition: { duration: 0.25, ease: 'easeOut' } };

// Spread directly onto a <motion.button {...buttonTap}>.
export const buttonTap = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.97 },
  transition: { duration: 0.15 },
};

export const cardEnter = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

export const slideDown = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: 'easeInOut' } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.2, ease: 'easeInOut' } },
};

export const testimonialSlide = {
  enter: { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, x: -40, transition: { duration: 0.3, ease: 'easeIn' } },
};

export const pageTransition = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease: 'easeIn' } },
};
