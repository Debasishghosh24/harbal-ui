import { Leaf, Sparkles, ShieldCheck, Heart } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import MotionReveal from '../ui/MotionReveal.jsx'
import { EASING } from '../../utils/motion.js'

const DEFAULT_BENEFITS = [
  {
    icon: Leaf,
    title: '100% Natural',
    description: 'Pure plant-based ingredients',
  },
  {
    icon: Sparkles,
    title: 'Herbal Expertise',
    description: 'Thoughtfully crafted botanicals',
  },
  {
    icon: ShieldCheck,
    title: 'No Unnecessary Chemicals',
    description: 'Zero artificial additives or fillers',
  },
  {
    icon: Heart,
    title: 'Cruelty-Free',
    description: 'Never tested on animals',
  },
]

export default function TrustBar({ benefits = DEFAULT_BENEFITS }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      aria-label="Amiaveda Core Values"
      className="bg-[#F7F3EB] py-8 sm:py-10 border-b border-[#30451F]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <MotionReveal
                key={benefit.title}
                delay={0.06 + index * 0.07}
                direction="up"
                distance={12}
              >
                <div
                  className={`flex items-center gap-3.5 p-3 rounded-xl transition-colors group ${
                    index !== benefits.length - 1
                      ? 'lg:border-r lg:border-[#30451F]/10 lg:pr-6'
                      : ''
                  }`}
                >
                  <motion.div
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                    transition={{ duration: 0.2, ease: EASING.botanical }}
                    className="w-10 h-10 rounded-full bg-[#DDE4CF]/60 text-[#30451F] border border-[#30451F]/15 flex items-center justify-center shrink-0 shadow-2xs [@media(hover:hover)]:group-hover:bg-[#DDE4CF] transition-colors"
                    aria-hidden="true"
                  >
                    <Icon className="w-5 h-5 text-[#30451F]" />
                  </motion.div>
                  <div className="text-left">
                    <h3 className="text-sm font-semibold text-[#30451F] tracking-tight group-hover:text-[#243517] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-stone-600 mt-0.5 leading-snug">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </MotionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
