import { ArrowUpRight, Leaf, Eye } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { EASING } from '../../utils/motion.js'

export default function ProductCard({ product, onViewDetails }) {
  const shouldReduceMotion = useReducedMotion()

  if (!product) return null

  const { name, category, tag, image, alt, description, keyIngredient, origin } = product

  return (
    <motion.article
      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
      transition={{ duration: 0.25, ease: EASING.botanical }}
      className="group relative hover:z-10 focus-within:z-10 bg-[#F7F3EB] rounded-2xl overflow-hidden border border-[#30451F]/15 shadow-2xs [@media(hover:hover)]:hover:shadow-md [@media(hover:hover)]:hover:border-[#30451F]/30 transition-all duration-300 flex flex-col justify-between h-full text-left"
    >
      {/* Product Image Frame */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-[#EFE9DC]">
        <img
          src={image}
          alt={alt || name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center [@media(hover:hover)]:group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Botanical Formulation Tag */}
        {tag && (
          <div className="absolute top-3 left-3 z-10 pointer-events-none">
            <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider rounded-md bg-[#30451F] text-[#F7F3EB] shadow-xs uppercase">
              {tag}
            </span>
          </div>
        )}

        {/* Quick View Details Button on Image */}
        {onViewDetails && (
          <button
            type="button"
            onClick={() => onViewDetails(product)}
            aria-label={`View full details for ${name}`}
            className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-10 px-3 py-1.5 rounded-lg bg-white/95 hover:bg-white text-[#30451F] text-[11px] font-semibold tracking-wide shadow-md opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-all duration-200 backdrop-blur-xs flex items-center gap-1.5 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#30451F]"
          >
            <Eye className="w-3.5 h-3.5" aria-hidden="true" />
            <span>View Details</span>
          </button>
        )}
      </div>

      {/* Product Information */}
      <div className="p-4 sm:p-5 flex flex-col grow justify-between">
        <div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] uppercase tracking-widest font-semibold text-[#6F7652]">
              {category}
            </span>
            {origin && (
              <span className="text-[10px] text-stone-500 font-medium truncate max-w-[120px]">
                {origin}
              </span>
            )}
          </div>

          <h3
            onClick={onViewDetails ? () => onViewDetails(product) : undefined}
            className={`mt-1 text-base sm:text-lg font-serif font-bold text-[#30451F] group-hover:text-[#243517] transition-colors line-clamp-1 ${
              onViewDetails ? 'cursor-pointer' : ''
            }`}
          >
            {name}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-2">
            {description}
          </p>

          {/* Key Botanical Callout */}
          {keyIngredient && (
            <div className="mt-3 flex items-center gap-1.5 text-[11px] text-[#30451F] bg-[#DDE4CF]/40 px-2 py-1 rounded-md border border-[#30451F]/10">
              <Leaf className="w-3 h-3 text-[#6F7652] shrink-0" aria-hidden="true" />
              <span className="truncate font-medium">{keyIngredient}</span>
            </div>
          )}
        </div>

        {/* Action: View Botanical Profile */}
        <div className="mt-4 pt-3 border-t border-[#30451F]/10 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onViewDetails && onViewDetails(product)}
            className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-[#30451F] hover:bg-[#243517] text-[#F7F3EB] text-xs font-semibold shadow-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#30451F]"
          >
            <span>View Botanical Details</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </motion.article>
  )
}
