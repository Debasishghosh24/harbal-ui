import { ArrowRight, Leaf, Shield, Sparkles } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import MotionReveal from '../ui/MotionReveal.jsx'
import { DURATION, EASING } from '../../utils/motion.js'

const DEFAULT_BANNER_IMAGE =
  'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'

export default function WellnessBanner({ image = DEFAULT_BANNER_IMAGE }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="philosophy" aria-labelledby="wellness-banner-heading" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] scroll-mt-20">
      <div className="max-w-7xl mx-auto rounded-3xl bg-[#F7F3EB] border border-[#30451F]/15 overflow-hidden shadow-xs group">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 text-left space-y-4 sm:space-y-5">
            <MotionReveal delay={0.08} direction="up" distance={12}>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DDE4CF]/70 text-[#30451F] text-xs font-semibold uppercase tracking-wider border border-[#30451F]/15">
                <Leaf className="w-3.5 h-3.5 text-[#30451F]" aria-hidden="true" />
                <span>Our Botanical Philosophy</span>
              </div>
            </MotionReveal>

            <MotionReveal delay={0.16} direction="up" distance={14}>
              <h2
                id="wellness-banner-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#30451F] tracking-tight leading-tight"
              >
                Apothecary Heritage, Handcrafted for Modern Living
              </h2>
            </MotionReveal>

            <MotionReveal delay={0.24} direction="up" distance={14}>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed max-w-xl">
                We believe everyday self-care should be grounded in authentic plant wisdom.
                Every Amiaveda formulation is blended in small, thoughtful batches using time-tested
                botanicals, packaged in UV-protective amber glass to preserve raw phytopotency.
              </p>
            </MotionReveal>

            <MotionReveal delay={0.3} direction="up" distance={12}>
              <div className="grid grid-cols-2 gap-3 pt-1 text-xs text-[#30451F]">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#6F7652] shrink-0" />
                  <span>Zero Artificial Fragrance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#6F7652] shrink-0" />
                  <span>Pure Whole-Plant Extracts</span>
                </div>
              </div>
            </MotionReveal>

            <MotionReveal delay={0.36} direction="up" distance={12}>
              <div className="pt-2">
                <motion.a
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.02, y: -1 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  transition={{ duration: 0.2, ease: EASING.botanical }}
                  href="#catalogue"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#30451F] hover:bg-[#243517] text-[#F7F3EB] font-semibold text-xs sm:text-sm shadow-xs transition-shadow duration-200 focus-visible:outline-2 focus-visible:outline-[#30451F]"
                >
                  <span>Explore Botanical Catalogue</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </motion.a>
              </div>
            </MotionReveal>
          </div>

          <div className="lg:col-span-5 h-64 sm:h-72 lg:h-full min-h-[300px] lg:min-h-[380px] relative overflow-hidden bg-[#EFE9DC]">
            <MotionReveal variant="imageReveal" delay={0.15} duration={DURATION.cinematic} className="w-full h-full">
              <img
                src={image}
                alt="Herbal apothecary bottles, fresh botanical leaves, and mortar with pestle on warm limestone"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center [@media(hover:hover)]:group-hover:scale-104 transition-transform duration-700 ease-out"
              />
            </MotionReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
