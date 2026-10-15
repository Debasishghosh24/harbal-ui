import SectionHeading from '../ui/SectionHeading.jsx'
import MotionReveal from '../ui/MotionReveal.jsx'
import { categories } from '../../data/categories.js'
import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { EASING } from '../../utils/motion.js'

export default function CategorySection({ onSelectCategory }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="categories"
      aria-labelledby="category-section-heading"
      className="py-14 sm:py-18 bg-[#FAF7F2] border-b border-[#30451F]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal delay={0.08} direction="up" distance={16}>
          <SectionHeading
            title="Botanical Categories"
            description="Explore our compendium organized by preparation method and herbal tradition."
            className="mb-10 sm:mb-12"
          />
        </MotionReveal>

        {/* Responsive Grid with Staggered Entrance */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <MotionReveal
              key={category.id}
              delay={0.1 + index * 0.05}
              direction="up"
              distance={16}
              className="h-full"
            >
              <motion.a
                href="#catalogue"
                onClick={() => onSelectCategory && onSelectCategory(category.slug || category.name)}
                whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                transition={{ duration: 0.25, ease: EASING.botanical }}
                className="group relative hover:z-10 focus-within:z-10 flex flex-col h-full bg-[#F7F3EB] rounded-2xl overflow-hidden border border-[#30451F]/10 shadow-2xs [@media(hover:hover)]:hover:bg-[#F2ECE0] [@media(hover:hover)]:hover:border-[#30451F]/25 [@media(hover:hover)]:hover:shadow-md transition-[background-color,border-color,box-shadow] duration-300 p-3 text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#30451F] focus-visible:-translate-y-1 focus-visible:border-[#30451F]/30"
              >
                {/* Image Frame with Restrained Smooth Zoom */}
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#EFE9DC]">
                  <img
                    src={category.image}
                    alt={category.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center [@media(hover:hover)]:group-hover:scale-106 group-focus-visible:scale-106 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Card Content */}
                <div className="pt-3 pb-1 flex flex-col items-center justify-between grow">
                  <h3 className="font-serif font-semibold text-sm sm:text-base text-[#30451F] group-hover:text-[#243517] transition-colors line-clamp-1">
                    {category.name}
                  </h3>

                  <span className="mt-1.5 inline-flex items-center gap-1 text-xs font-medium text-[#30451F]/80 group-hover:text-[#30451F] transition-colors">
                    <span>Explore Category</span>
                    <ArrowRight
                      className="w-3 h-3 [@media(hover:hover)]:group-hover:translate-x-1 group-focus-visible:translate-x-1 transition-transform duration-200"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </motion.a>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
