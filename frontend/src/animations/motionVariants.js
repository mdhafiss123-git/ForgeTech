/**
 * Shared Framer Motion variants. Import what you need rather than
 * redefining animation timing/easing per component, so motion feels
 * consistent across the whole platform.
 *
 * All variants are intentionally subtle — short durations, small
 * distances — per the "premium, not flashy" direction. Framer Motion
 * respects `prefers-reduced-motion` automatically when `useReducedMotion()`
 * is used to gate distance/duration, which the components below do.
 */

export const EASE = [0.22, 1, 0.36, 1]; // smooth, premium ease-out

// Hero headline: fade in, slight downward settle
export const fadeInDown = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

// Generic fade-up, used for section headers and one-off reveals
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

// Parent wrapper for staggered children (stats, feature grids)
export const staggerContainer = (staggerDelay = 0.08, initialDelay = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: staggerDelay, delayChildren: initialDelay },
  },
});

// Child item for staggerContainer — bottom-to-top reveal
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
};

// Course cards entering the viewport
export const cardEnter = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};

// Course card hover — lift + gentle scale (apply via whileHover)
export const cardHover = {
  y: -6,
  scale: 1.015,
  transition: { duration: 0.25, ease: EASE },
};

// Category filter pills sliding in left-to-right
export const slideInLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: EASE } },
};

// Trending/featured sections revealing right-to-left
export const slideInRight = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: EASE } },
};

// Accordion panel open/close (height must be "auto" via measured wrapper)
export const accordionPanel = {
  collapsed: { height: 0, opacity: 0 },
  open: { height: 'auto', opacity: 1, transition: { duration: 0.3, ease: EASE } },
};

// Mobile nav menu sliding down
export const slideDown = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: EASE } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.2, ease: EASE } },
};

// Testimonial slide transition
export const testimonialSlide = {
  enter: { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE } },
  exit: { opacity: 0, x: -40, transition: { duration: 0.3, ease: EASE } },
};

// Button micro-interaction — spread onto <motion.button whileHover whileTap>
export const buttonTap = {
  whileHover: { y: -1 },
  whileTap: { scale: 0.97 },
  transition: { duration: 0.15, ease: EASE },
};

// Full-page route transition wrapper
export const pageTransition = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.25, ease: EASE } },
};

// Standard viewport trigger options for scroll-reveal (`whileInView`)
export const viewportOnce = { once: true, amount: 0.2 };
