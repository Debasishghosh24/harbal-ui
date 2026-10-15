import SectionHeading from '../ui/SectionHeading.jsx'
import MotionReveal from '../ui/MotionReveal.jsx'
import { ingredients } from '../../data/ingredients.js'
import { products } from '../../data/products.js'
import { Leaf, ArrowUpRight } from 'lucide-react'

export default function IngredientStorytelling({ onViewDetails, onQuickView }) {
  const handleView = onViewDetails || onQuickView

  return (
    <section
      id="ingredients"
      aria-labelledby="ingredients-heading"
      className="py-14 sm:py-20 bg-[#F7F3EB] border-b border-[#30451F]/10 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal delay={0.08} direction="up" distance={16}>
          <SectionHeading
            title="Sourced from the Earth"
            description="Pure, whole-plant botanicals harvested with integrity and formulated with reverence for traditional herbal wisdom."
            className="mb-10 sm:mb-14"
          />
        </MotionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ingredients.map((item, index) => {
            const relatedProduct = products.find((p) => p.id === item.relatedProductId)
            return (
              <MotionReveal
                key={item.id}
                delay={0.12 + index * 0.07}
                direction="up"
                distance={18}
                className="h-full"
              >
                <article className="group h-full bg-[#FAF7F2] rounded-2xl overflow-hidden border border-[#30451F]/15 shadow-2xs hover:shadow-md hover:border-[#30451F]/30 transition-all duration-300 flex flex-col justify-between text-left p-5">
                  <div>
                    {/* Botanical Photo Frame */}
                    <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden bg-[#EFE9DC] mb-4">
                      <img
                        src={item.image}
                        alt={item.alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-[#30451F]/80 backdrop-blur-xs text-[10px] font-medium text-[#F7F3EB]">
                        {item.partUsed}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-serif font-bold text-lg text-[#30451F]">
                          {item.name}
                        </h3>
                        <Leaf className="w-3.5 h-3.5 text-[#6F7652]" aria-hidden="true" />
                      </div>
                      <p className="text-xs font-serif italic text-[#6F7652]">
                        {item.botanicalName}
                      </p>
                    </div>

                    <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Related Product Link */}
                  <div className="mt-5 pt-3 border-t border-[#30451F]/10">
                    <button
                      type="button"
                      onClick={() => {
                        if (relatedProduct && handleView) handleView(relatedProduct)
                      }}
                      className="w-full inline-flex items-center justify-between px-3 py-2 rounded-xl bg-[#DDE4CF]/40 hover:bg-[#DDE4CF] text-[#30451F] text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-[#30451F] cursor-pointer"
                    >
                      <span className="truncate">View in: {item.relatedProductName}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              </MotionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
