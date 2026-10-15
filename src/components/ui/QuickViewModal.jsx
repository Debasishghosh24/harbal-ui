import { useState, useEffect } from 'react'
import { X, Star, Heart, Check, ShoppingBag, ShieldCheck, Truck } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { EASING } from '../../utils/motion.js'

export default function QuickViewModal({
  product,
  onClose,
  onAddToCart,
  onToggleFavorite,
  isFavorite = false,
}) {
  const [quantity, setQuantity] = useState(1)
  const [isAdded, setIsAdded] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  if (!product) return null

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) onAddToCart(product)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 1400)
  }

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Quick View: ${product.name}`}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1D301B]/60 backdrop-blur-xs"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.25, ease: EASING.botanical }}
          className="relative w-full max-w-2xl bg-[#F7F3EB] rounded-2xl shadow-2xl border border-[#30451F]/20 overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-3 right-3 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-[#30451F] transition-colors focus-visible:outline-2 focus-visible:outline-[#30451F]"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative aspect-square bg-[#EFE9DC] overflow-hidden">
              <img src={product.image} alt={product.alt || product.name} className="w-full h-full object-cover" />
              {product.badge && (
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold tracking-wider rounded-md bg-[#30451F] text-[#F7F3EB] uppercase">
                  {product.badge}
                </span>
              )}
            </div>

            <div className="p-6 flex flex-col justify-between text-left">
              <div>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-[#30451F]/70">{product.category}</span>
                <h3 className="mt-1 text-xl font-serif font-bold text-[#30451F]">{product.name}</h3>

                <div className="mt-2 flex items-center gap-1.5 text-xs text-stone-600">
                  <div className="flex items-center text-amber-500" aria-hidden="true">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-stone-300'}`} />
                    ))}
                  </div>
                  <span className="font-semibold text-[#30451F]">{product.rating}</span>
                  <span className="text-stone-400">({product.reviewsCount} reviews)</span>
                </div>

                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-xl font-serif font-bold text-[#30451F]">${product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="text-xs text-stone-400 line-through">${product.originalPrice.toFixed(2)}</span>
                  )}
                </div>

                {product.keyIngredient && (
                  <div className="mt-3 py-1 px-2.5 rounded-lg bg-[#DDE4CF]/50 border border-[#30451F]/10 text-xs text-[#30451F]">
                    <span className="font-semibold">Key Botanic: </span>
                    <span>{product.keyIngredient}</span>
                  </div>
                )}
                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">{product.description}</p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#30451F]/10 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-[#30451F]/20 rounded-xl bg-white px-2 py-1">
                    <button type="button" onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="px-2 py-0.5 text-sm font-bold text-[#30451F]">-</button>
                    <span className="px-2 text-sm font-semibold text-[#30451F]">{quantity}</span>
                    <button type="button" onClick={() => setQuantity((q) => q + 1)} className="px-2 py-0.5 text-sm font-bold text-[#30451F]">+</button>
                  </div>

                  <button
                    type="button"
                    onClick={handleAdd}
                    className={`grow flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold shadow-xs transition-colors ${
                      isAdded ? 'bg-[#244A29] text-white' : 'bg-[#30451F] hover:bg-[#243517] text-[#F7F3EB]'
                    }`}
                  >
                    {isAdded ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
                    <span>{isAdded ? 'Added to Cart!' : `Add (${quantity}) to Cart`}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onToggleFavorite(product)}
                    aria-label={isFavorite ? 'Remove from wishlist' : 'Add to wishlist'}
                    className={`p-2.5 rounded-xl border transition-colors ${
                      isFavorite ? 'bg-rose-50 border-rose-200 text-rose-600' : 'border-[#30451F]/20 text-stone-600 bg-white'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
                  </button>
                </div>

                <div className="flex items-center justify-between text-[11px] text-stone-500 pt-1">
                  <span className="flex items-center gap-1"><Truck className="w-3 h-3 text-[#30451F]" /> Free shipping $50+</span>
                  <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-[#30451F]" /> 100% Herbal Purity</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
