import { useState } from 'react'
import { Star, ShoppingBag, Heart, Check, Eye } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { EASING } from '../../utils/motion.js'

export default function ProductCard({
  product,
  onAddToCart,
  onToggleFavorite,
  onQuickView,
  isFavorite: initialFavorite = false,
}) {
  const [isWishlisted, setIsWishlisted] = useState(initialFavorite)
  const [isAdded, setIsAdded] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  if (!product) return null

  const { name, price, originalPrice, rating, reviewsCount, badge, image, alt, category, inStock = true } = product

  const handleAddToCart = () => {
    if (!inStock) return
    if (onAddToCart) onAddToCart(product)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 1400)
  }

  const handleWishlistToggle = () => {
    const nextState = !isWishlisted
    setIsWishlisted(nextState)
    if (onToggleFavorite) onToggleFavorite(product)
  }

  return (
    <motion.article
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.25, ease: EASING.botanical }}
      className="group relative hover:z-10 focus-within:z-10 bg-[#F7F3EB] rounded-2xl overflow-hidden border border-[#30451F]/15 shadow-2xs [@media(hover:hover)]:hover:shadow-lg [@media(hover:hover)]:hover:border-[#30451F]/30 transition-[box-shadow,border-color] duration-300 flex flex-col justify-between h-full"
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

        {badge && (
          <div className="absolute top-3 left-3 z-10 pointer-events-none">
            <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider rounded-md bg-[#30451F] text-[#F7F3EB] shadow-xs uppercase">
              {badge}
            </span>
          </div>
        )}

        {/* Quick View Button on Hover */}
        {onQuickView && (
          <button
            type="button"
            onClick={() => onQuickView(product)}
            aria-label={`Quick view ${name}`}
            className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-10 px-3 py-1.5 rounded-lg bg-white/95 hover:bg-white text-[#30451F] text-[11px] font-semibold tracking-wide shadow-md opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-all duration-200 backdrop-blur-xs flex items-center gap-1.5 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#30451F]"
          >
            <Eye className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Quick View</span>
          </button>
        )}

        {/* Wishlist Button */}
        <motion.button
          type="button"
          whileHover={shouldReduceMotion ? undefined : { scale: 1.08 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
          transition={{ duration: 0.15 }}
          onClick={handleWishlistToggle}
          aria-label={isWishlisted ? `Remove ${name} from wishlist` : `Add ${name} to wishlist`}
          aria-pressed={isWishlisted}
          className={`absolute top-3 right-3 z-10 p-2 rounded-full backdrop-blur-md shadow-xs transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#30451F] ${
            isWishlisted
              ? 'bg-rose-50 text-rose-600 border border-rose-200'
              : 'bg-white/90 text-stone-600 hover:text-rose-600 hover:bg-white border border-stone-200/50'
          }`}
        >
          <motion.span
            animate={shouldReduceMotion ? {} : isWishlisted ? { scale: [1, 1.25, 1], transition: { duration: 0.28, ease: 'easeOut' } } : { scale: 1 }}
            className="block"
          >
            <Heart className={`w-4 h-4 transition-colors duration-200 ${isWishlisted ? 'fill-current' : ''}`} aria-hidden="true" />
          </motion.span>
        </motion.button>
      </div>

      {/* Product Details */}
      <div className="p-4 sm:p-5 flex flex-col grow justify-between">
        <div>
          {category && (
            <span className="text-[10px] uppercase tracking-widest font-semibold text-[#30451F]/70">
              {category}
            </span>
          )}

          <h3
            onClick={onQuickView ? () => onQuickView(product) : undefined}
            className={`mt-1 text-sm sm:text-base font-serif font-bold text-[#30451F] group-hover:text-[#243517] transition-colors line-clamp-1 ${onQuickView ? 'cursor-pointer' : ''}`}
          >
            {name}
          </h3>

          <div className="mt-2 flex items-center gap-1.5 text-xs text-stone-600">
            <div className="flex items-center text-amber-500" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${i < Math.floor(rating) ? 'fill-current' : 'text-stone-300 fill-stone-200'}`}
                />
              ))}
            </div>
            <span className="font-semibold text-[#30451F]">{rating}</span>
            <span className="text-stone-400">({reviewsCount})</span>
          </div>
        </div>

        {/* Price & Add to Cart */}
        <div className="mt-4 pt-3 border-t border-[#30451F]/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
          <div className="flex items-baseline gap-2">
            <span className="text-base sm:text-lg font-serif font-bold text-[#30451F]">
              ${price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-xs text-stone-400 line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <motion.button
            type="button"
            disabled={!inStock}
            whileHover={shouldReduceMotion || !inStock ? undefined : { scale: 1.02 }}
            whileTap={shouldReduceMotion || !inStock ? undefined : { scale: 0.96 }}
            transition={{ duration: 0.15 }}
            onClick={handleAddToCart}
            aria-label={`Add ${name} to cart`}
            className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold shadow-xs transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#30451F] ${
              isAdded ? 'bg-[#244A29] text-white ring-2 ring-[#244A29]/20' : 'bg-[#30451F] hover:bg-[#243517] text-[#F7F3EB]'
            } disabled:bg-stone-300 disabled:cursor-not-allowed`}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isAdded ? (
                <motion.span
                  key="added"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.2, ease: EASING.botanical }}
                  className="inline-flex items-center gap-1"
                >
                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Added!</span>
                </motion.span>
              ) : (
                <motion.span
                  key="cart"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="inline-flex items-center gap-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Add to Cart</span>
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.article>
  )
}
