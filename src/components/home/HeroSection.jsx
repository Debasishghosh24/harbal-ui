import { ArrowRight, Leaf, Sparkles } from 'lucide-react'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import MotionReveal from '../ui/MotionReveal.jsx'
import heroImage from '../../assets/hero-herbal.jpg'
import { DURATION, EASING } from '../../utils/motion.js'

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion()
  const { scrollY } = useScroll()

  // Subtle GPU-accelerated scroll parallax for botanical background accents
  const bgLeafY1 = useTransform(scrollY, [0, 600], [0, shouldReduceMotion ? 0 : 35])
  const bgLeafY2 = useTransform(scrollY, [0, 600], [0, shouldReduceMotion ? 0 : -25])
  const heroOpacity = useTransform(scrollY, [0, 750], [1, shouldReduceMotion ? 1 : 0.95])

  return (
    <motion.section
      style={{ opacity: heroOpacity }}
      aria-labelledby="hero-heading"
      className="relative bg-[#F7F3EB] text-[#30451F] py-14 sm:py-18 lg:py-22 border-b border-[#30451F]/10 overflow-hidden"
    >
      {/* Decorative Botanical Foliage Accents */}
      <motion.div
        style={{ y: bgLeafY1 }}
        className="absolute -top-10 left-[5%] text-[#30451F]/5 pointer-events-none select-none animate-botanical-float hidden md:block"
        aria-hidden="true"
      >
        <Leaf className="w-40 h-40 transform -rotate-45" />
      </motion.div>

      <motion.div
        style={{ y: bgLeafY2 }}
        className="absolute top-1/2 right-[2%] text-[#DDE4CF]/30 pointer-events-none select-none animate-botanical-float hidden lg:block"
        aria-hidden="true"
      >
        <Leaf className="w-56 h-56 transform rotate-12" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Botanical Catalogue Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
            <MotionReveal delay={0.08} direction="up" distance={12} viewportMargin="0px">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDE4CF]/70 border border-[#30451F]/15 text-[#30451F] text-xs font-semibold tracking-wider uppercase shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#30451F]" aria-hidden="true" />
                <span>BOTANICAL COMPENDIUM &amp; APOTHECARY</span>
              </div>
            </MotionReveal>

            <MotionReveal delay={0.16} direction="up" distance={14} duration={DURATION.normal} viewportMargin="0px">
              <h1
                id="hero-heading"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif font-bold text-[#30451F] tracking-tight leading-[1.16]"
              >
                Nature&apos;s Purest Remedies, Carefully Catalogued
              </h1>
            </MotionReveal>

            <MotionReveal delay={0.24} direction="up" distance={14} viewportMargin="0px">
              <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-xl">
                Explore our curated compendium of traditional Ayurvedic remedies, single-origin botanical extracts, and restorative herbal formulations crafted for mindful daily living.
              </p>
            </MotionReveal>

            {/* Catalogue CTAs */}
            <MotionReveal delay={0.32} direction="up" distance={12} viewportMargin="0px">
              <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
                <motion.a
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.02, y: -1 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  href="#catalogue"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#30451F] hover:bg-[#243517] text-[#F7F3EB] font-semibold text-sm sm:text-base shadow-xs hover:shadow-md transition-shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#30451F]"
                >
                  <span>Explore Product Catalogue</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </motion.a>

                <motion.a
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.02, y: -1 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  href="#ingredients"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-transparent hover:bg-[#DDE4CF]/50 text-[#30451F] font-semibold text-sm sm:text-base border border-[#30451F]/30 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#30451F]"
                >
                  Botanical Ingredients
                </motion.a>
              </div>
            </MotionReveal>

            {/* Sourcing Quality Badges */}
            <MotionReveal delay={0.4} direction="up" distance={10} viewportMargin="0px">
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#30451F]/80">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#30451F]" aria-hidden="true" />
                  100% Whole-Plant Extracts
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#30451F]" aria-hidden="true" />
                  Zero Synthetic Additives
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#30451F]" aria-hidden="true" />
                  Ethical Botanical Cultivation
                </span>
              </div>
            </MotionReveal>
          </div>

          {/* Right Column: Premium Photography Reveal */}
          <div className="lg:col-span-6 w-full">
            <MotionReveal delay={0.2} direction="none" viewportMargin="0px" className="relative mx-auto max-w-lg lg:max-w-none">
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.03 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '0px' }}
                transition={{ duration: DURATION.cinematic, ease: EASING.botanical }}
                className="relative overflow-hidden rounded-3xl bg-[#EFE9DC] border border-[#30451F]/15 shadow-xl aspect-4/3 sm:aspect-16/11 lg:aspect-4/3 group"
              >
                <img
                  src={heroImage}
                  alt="Amiaveda botanical remedies including herbal supplement bottles, neem oil, organic tulsi powder, and fresh green leaves on warm natural stone"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover object-center [@media(hover:hover)]:group-hover:scale-103 transition-transform duration-700 ease-out"
                />
              </motion.div>

              {/* Floating Apothecary Badge */}
              <div className="absolute -bottom-3 right-4 sm:bottom-4 sm:right-4 bg-[#F7F3EB]/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-md border border-[#30451F]/15 flex items-center gap-2.5 text-xs font-semibold text-[#30451F] animate-botanical-float">
                <Leaf className="w-4 h-4 text-[#30451F]" aria-hidden="true" />
                <span>Handcrafted Apothecary Formulations</span>
              </div>
            </MotionReveal>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
