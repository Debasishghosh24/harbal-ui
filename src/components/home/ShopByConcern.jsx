import { useState } from 'react'
import { Sparkles, ShieldCheck, Leaf, Droplets, Coffee, ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import SectionHeading from '../ui/SectionHeading.jsx'
import MotionReveal from '../ui/MotionReveal.jsx'
import { concerns } from '../../data/concerns.js'
import { products } from '../../data/products.js'
import { EASING } from '../../utils/motion.js'

const ICONS = {
  Sparkles,
  ShieldCheck,
  Leaf,
  Droplets,
  Coffee,
}

export default function ShopByConcern({ onAddToCart, onQuickView }) {
  const [activeConcernId, setActiveConcernId] = useState(concerns[0].id)
  const shouldReduceMotion = useReducedMotion()

  const activeConcern = concerns.find((c) => c.id === activeConcernId) || concerns[0]
  const matchedProduct = products.find((p) => p.id === activeConcern.productId)

  return (
    <section id="concerns" aria-labelledby="concerns-heading" className="py-14 sm:py-20 bg-[#FAF7F2] border-b border-[#30451F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal delay={0.08} direction="up" distance={16}>
          <SectionHeading
            title="Shop by Wellness Concern"
            description="Targeted botanical formulations tailored to your daily health and skincare rituals."
            className="mb-8 sm:mb-12"
          />
        </MotionReveal>

        {/* Concern Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 scrollbar-none">
          {concerns.map((concern) => {
            const IconComponent = ICONS[concern.iconName] || Leaf
            const isActive = concern.id === activeConcernId
            return (
              <button
                key={concern.id}
                type="button"
                onClick={() => setActiveConcernId(concern.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#30451F] ${
                  isActive
                    ? 'bg-[#30451F] text-[#F7F3EB] shadow-md'
                    : 'bg-[#F7F3EB] text-[#30451F]/80 hover:bg-[#DDE4CF]/50 border border-[#30451F]/15'
                }`}
              >
                <IconComponent className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{concern.title}</span>
              </button>
            )
          })}
        </div>

        {/* Featured Solution Card */}
        {matchedProduct && (
          <div className="mt-8 max-w-4xl mx-auto">
            <motion.div
              key={matchedProduct.id}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: EASING.botanical }}
              className="bg-[#F7F3EB] rounded-3xl p-6 sm:p-8 border border-[#30451F]/15 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center text-left"
            >
              <div className="md:col-span-5 aspect-4/3 sm:aspect-square rounded-2xl overflow-hidden bg-[#EFE9DC]">
                <img src={matchedProduct.image} alt={matchedProduct.name} className="w-full h-full object-cover" />
              </div>

              <div className="md:col-span-7 flex flex-col justify-between space-y-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DDE4CF]/60 text-[#30451F] text-[11px] font-semibold tracking-wider uppercase mb-2">
                    <Leaf className="w-3 h-3" />
                    <span>Recommended Remedy</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#30451F]">{matchedProduct.name}</h3>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-[#6F7652]">{activeConcern.subtitle}</p>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">{matchedProduct.description}</p>

                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-lg font-serif font-bold text-[#30451F]">${matchedProduct.price.toFixed(2)}</span>
                    <span className="text-xs text-stone-500 font-medium">({matchedProduct.reviewsCount} verified reviews)</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => onAddToCart && onAddToCart(matchedProduct)}
                    className="px-6 py-2.5 rounded-xl bg-[#30451F] hover:bg-[#243517] text-[#F7F3EB] text-xs font-semibold shadow-xs transition-colors"
                  >
                    Add to Cart
                  </button>

                  {onQuickView && (
                    <button
                      type="button"
                      onClick={() => onQuickView(matchedProduct)}
                      className="px-5 py-2.5 rounded-xl bg-transparent border border-[#30451F]/30 hover:bg-[#DDE4CF]/40 text-[#30451F] text-xs font-semibold transition-colors"
                    >
                      Quick View
                    </button>
                  )}

                  <a href="#products" className="inline-flex items-center gap-1 text-xs font-semibold text-[#30451F] hover:underline underline-offset-4 ml-auto">
                    <span>View all remedies</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}
