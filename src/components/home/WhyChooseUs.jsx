import { Leaf, Sparkles, Heart, Package } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import MotionReveal from '../ui/MotionReveal.jsx'
import { EASING } from '../../utils/motion.js'

const BENEFITS = [
  {
    icon: Leaf,
    title: 'Carefully Sourced Ingredients',
    description:
      'Harvested responsibly from trusted growers who prioritize ethical botanical cultivation.',
  },
  {
    icon: Sparkles,
    title: 'Quality Focus',
    description:
      'Carefully inspected to preserve natural botanical potency and freshness in every batch.',
  },
  {
    icon: Heart,
    title: 'Made with Care',
    description:
      'Formulated in small, thoughtful batches with genuine reverence for traditional herbal wisdom.',
  },
  {
    icon: Package,
    title: 'Mindful Packaging',
    description:
      'Protected in UV-resistant amber bottles and recyclable materials designed for everyday living.',
  },
]

export default function WhyChooseUs() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="sourcing"
      aria-labelledby="why-choose-heading"
      className="py-14 sm:py-20 bg-[#F7F3EB] border-b border-[#30451F]/10 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Introduction */}
          <div className="lg:col-span-5 text-left space-y-4">
            <MotionReveal delay={0.08} direction="up" distance={14}>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DDE4CF]/70 text-[#30451F] text-xs font-semibold uppercase tracking-wider border border-[#30451F]/15">
                <Leaf className="w-3.5 h-3.5 text-[#30451F]" aria-hidden="true" />
                WHY CHOOSE AMIAVEDA
              </span>
            </MotionReveal>

            <MotionReveal delay={0.16} direction="up" distance={16}>
              <h2
                id="why-choose-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#30451F] tracking-tight leading-tight"
              >
                Pure. Thoughtful. Natural.
              </h2>
            </MotionReveal>

            <MotionReveal delay={0.24} direction="up" distance={16}>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed max-w-lg">
                We focus on carefully selected botanical ingredients and thoughtful everyday
                self-care.
              </p>
            </MotionReveal>

            <MotionReveal delay={0.32} direction="up" distance={12}>
              <div className="pt-2">
                <a
                  href="#catalogue"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#30451F] hover:text-[#243517] underline underline-offset-4 decoration-[#30451F]/30 hover:decoration-[#30451F] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#30451F]"
                >
                  Explore our verified botanical catalogue
                </a>
              </div>
            </MotionReveal>
          </div>

          {/* Right Column: 4 Benefit Cards with Restrained Entrance */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {BENEFITS.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <MotionReveal
                  key={benefit.title}
                  delay={0.2 + index * 0.08}
                  direction="up"
                  distance={16}
                  className="h-full"
                >
                  <motion.article
                    whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
                    transition={{ duration: 0.25, ease: EASING.botanical }}
                    className="bg-[#FAF7F2] p-5 sm:p-6 rounded-2xl border border-[#30451F]/15 shadow-2xs [@media(hover:hover)]:hover:shadow-md [@media(hover:hover)]:hover:border-[#30451F]/30 transition-[box-shadow,border-color] duration-300 text-left flex flex-col justify-between h-full group"
                  >
                    <div>
                      <div
                        className="w-10 h-10 rounded-xl bg-[#DDE4CF]/60 text-[#30451F] border border-[#30451F]/15 flex items-center justify-center mb-3.5 [@media(hover:hover)]:group-hover:scale-105 transition-transform duration-300"
                        aria-hidden="true"
                      >
                        <Icon className="w-5 h-5 text-[#30451F]" />
                      </div>

                      <h3 className="font-serif font-bold text-base sm:text-lg text-[#30451F] leading-snug">
                        {benefit.title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.article>
                </MotionReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
