import { BookOpen, ArrowRight, Compass } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import MotionReveal from '../ui/MotionReveal.jsx'
import { EASING } from '../../utils/motion.js'

export default function CatalogueCtaSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="catalogue-cta"
      aria-labelledby="catalogue-cta-heading"
      className="py-16 sm:py-24 bg-[#1D301B] text-[#F7F3EB] relative overflow-hidden"
    >
      {/* Decorative botanical background gradient */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 80% 20%, #DDE4CF 0%, transparent 40%), radial-gradient(circle at 10% 80%, #6F7652 0%, transparent 40%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <MotionReveal delay={0.08} direction="up" distance={14}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#30451F] border border-[#DDE4CF]/20 text-[#DDE4CF] text-xs font-semibold uppercase tracking-widest mb-6">
            <Compass className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Botanical Compendium</span>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.16} direction="up" distance={16}>
          <h2
            id="catalogue-cta-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F7F3EB] tracking-tight leading-tight max-w-3xl mx-auto"
          >
            Explore our curated archive of pure herbal remedies
          </h2>
        </MotionReveal>

        <MotionReveal delay={0.24} direction="up" distance={16}>
          <p className="mt-4 sm:mt-6 text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Discover detailed profiles, botanical origins, traditional harvesting methods, and complete ingredient transparency for every formulation in our collection.
          </p>
        </MotionReveal>

        <MotionReveal delay={0.32} direction="up" distance={14}>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#catalogue"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.02, y: -1 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              transition={{ duration: 0.2, ease: EASING.botanical }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#DDE4CF] hover:bg-white text-[#1D301B] font-semibold text-sm shadow-md transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#DDE4CF]"
            >
              <BookOpen className="w-4 h-4" aria-hidden="true" />
              <span>Browse All Formulations</span>
            </motion.a>

            <motion.a
              href="#ingredients"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.02, y: -1 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              transition={{ duration: 0.2, ease: EASING.botanical }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-transparent hover:bg-[#30451F]/80 text-[#F7F3EB] border border-[#DDE4CF]/30 font-semibold text-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#DDE4CF]"
            >
              <span>View Botanical Ingredients</span>
              <ArrowRight className="w-4 h-4 text-[#DDE4CF]" aria-hidden="true" />
            </motion.a>
          </div>
        </MotionReveal>
      </div>
    </section>
  )
}
