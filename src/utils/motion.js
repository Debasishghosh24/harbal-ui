// Consistent motion timing, easing curves, and reusable variants for Amiaveda

export const DURATION = {
  fast: 0.25,
  normal: 0.5,
  slow: 0.75,
  cinematic: 0.9,
}

// Elegant cubic-bezier curves for botanical luxury feel
export const EASING = {
  botanical: [0.22, 1, 0.36, 1], // Smooth organic deceleration
  subtle: [0.4, 0, 0.2, 1],
  spring: { type: 'spring', stiffness: 380, damping: 26 },
}

export const VIEWPORT = {
  once: true,
  margin: '-40px',
}

// Standardized reusable animation variants
export const VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 22 },
    visible: (custom = {}) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: custom.duration || DURATION.normal,
        delay: custom.delay || 0,
        ease: EASING.botanical,
      },
    }),
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: (custom = {}) => ({
      opacity: 1,
      transition: {
        duration: custom.duration || DURATION.normal,
        delay: custom.delay || 0,
        ease: 'easeOut',
      },
    }),
  },
  imageReveal: {
    hidden: { opacity: 0, scale: 1.05 },
    visible: (custom = {}) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: custom.duration || DURATION.cinematic,
        delay: custom.delay || 0,
        ease: EASING.botanical,
      },
    }),
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: (custom = {}) => ({
      opacity: 1,
      transition: {
        staggerChildren: custom.stagger || 0.08,
        delayChildren: custom.delayChildren || 0.1,
      },
    }),
  },
}

// Fallback variants for users who prefer reduced motion
export const REDUCED_VARIANTS = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
}
