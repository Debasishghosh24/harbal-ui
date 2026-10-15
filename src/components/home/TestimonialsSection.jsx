import SectionHeading from '../ui/SectionHeading.jsx'
import MotionReveal from '../ui/MotionReveal.jsx'
import { Star, CheckCircle2, Quote } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { EASING } from '../../utils/motion.js'

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Dr. Evelyn Martinez',
    title: 'Integrative Wellness Practitioner',
    comment:
      'Herbora Naturals sets a high benchmark for botanical purity. Their Ashwagandha root extract has become a staple recommendation for patients seeking natural daily balance.',
    rating: 5,
    product: 'Ashwagandha Capsules',
    verified: true,
  },
  {
    id: 2,
    name: 'Julianne Vance',
    title: 'Verified Customer, 2 Years',
    comment:
      'The Cold-Pressed Neem Oil completely transformed my evening routine. My skin has never felt this calm, clear, and nourished without needing synthetic creams.',
    rating: 5,
    product: 'Neem Oil',
    verified: true,
  },
  {
    id: 3,
    name: 'Marcus Sterling',
    title: 'Mindfulness & Yoga Instructor',
    comment:
      'I start every morning with the Detox Herbal Tea blend. The clean botanical taste is so refreshing and gentle on the stomach. Truly an essential everyday ritual.',
    rating: 5,
    product: 'Detox Herbal Tea',
    verified: true,
  },
]

export default function TestimonialsSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-14 sm:py-20 bg-[#FAF7F2] border-b border-[#30451F]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal delay={0.08} direction="up" distance={16}>
          <SectionHeading
            title="Loved by Our Community"
            description="Read experiences from people who have made Herbora Naturals part of their daily wellness rituals."
            className="mb-10 sm:mb-14"
          />
        </MotionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item, index) => (
            <MotionReveal
              key={item.id}
              delay={0.14 + index * 0.08}
              direction="up"
              distance={18}
              className="h-full"
            >
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
                transition={{ duration: 0.25, ease: EASING.botanical }}
                className="bg-[#F7F3EB] rounded-2xl p-6 sm:p-8 border border-[#30451F]/15 shadow-2xs [@media(hover:hover)]:hover:shadow-md [@media(hover:hover)]:hover:border-[#30451F]/30 transition-[box-shadow,border-color] duration-300 flex flex-col justify-between text-left relative h-full group"
              >
                <div>
                  <Quote
                    className="w-8 h-8 text-[#DDE4CF] mb-4 [@media(hover:hover)]:group-hover:scale-105 transition-transform duration-300"
                    aria-hidden="true"
                  />

                  {/* Rating Stars */}
                  <div className="flex items-center text-amber-500 mb-3" aria-hidden="true">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-stone-700 text-sm sm:text-base leading-relaxed italic">
                    &ldquo;{item.comment}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#30451F]/10 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#30451F]">{item.name}</h4>
                    <p className="text-xs text-stone-500">{item.title}</p>
                  </div>

                  {item.verified && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#30451F] bg-[#DDE4CF]/60 px-2 py-0.5 rounded-md border border-[#30451F]/15">
                      <CheckCircle2 className="w-3 h-3 text-[#30451F]" aria-hidden="true" />
                      Verified
                    </span>
                  )}
                </div>
              </motion.div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
