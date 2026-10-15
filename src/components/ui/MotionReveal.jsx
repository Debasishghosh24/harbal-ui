import { motion, useReducedMotion } from 'motion/react'
import { DURATION, EASING, VIEWPORT, VARIANTS } from '../../utils/motion.js'

export default function MotionReveal({
  children,
  delay = 0,
  direction = 'up',
  distance = 16,
  duration = DURATION.normal,
  variant,
  className = '',
  viewportMargin = VIEWPORT.margin,
}) {
  const shouldReduceMotion = useReducedMotion()

  // Reduced motion: content renders immediately and statically without hidden states
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  // Predefined variant mode (e.g. 'imageReveal', 'fadeIn', 'fadeUp')
  if (variant && VARIANTS[variant]) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: viewportMargin }}
        variants={VARIANTS[variant]}
        custom={{ delay, duration }}
        className={className}
      >
        {children}
      </motion.div>
    )
  }

  // Dynamic directional reveal mode (supports 'up', 'down', 'left', 'right', 'none')
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance }
      case 'down':
        return { y: -distance }
      case 'left':
        return { x: distance }
      case 'right':
        return { x: -distance }
      default:
        return {}
    }
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...getInitialPosition(),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: viewportMargin }}
      transition={{
        duration,
        delay,
        ease: EASING.botanical,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Reusable stagger container for lists and grids
export function MotionStagger({
  children,
  stagger = 0.08,
  delayChildren = 0.1,
  className = '',
  viewportMargin = VIEWPORT.margin,
}) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin }}
      variants={VARIANTS.staggerContainer}
      custom={{ stagger, delayChildren }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
