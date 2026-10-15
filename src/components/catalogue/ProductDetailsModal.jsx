import { useEffect } from 'react'
import { X, Leaf, Info, AlertCircle, Compass, Package, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { EASING } from '../../utils/motion.js'

export default function ProductDetailsModal({ product, onClose }) {
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

  const {
    name,
    category,
    tag,
    image,
    alt,
    description,
    keyIngredient,
    ingredients,
    directions,
    availableSizes,
    precautions,
    origin,
    harvestMethod,
  } = product

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-product-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1D301B]/60 backdrop-blur-xs"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.25, ease: EASING.botanical }}
          className="relative w-full max-w-3xl bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#30451F]/20 overflow-hidden z-10 max-h-[92vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#F7F3EB] border-b border-[#30451F]/10 shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#6F7652]">
                {category}
              </span>
              {tag && (
                <span className="px-2 py-0.5 rounded-full bg-[#30451F] text-[#F7F3EB] text-[9px] font-bold uppercase tracking-wider">
                  {tag}
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close details"
              className="p-1.5 rounded-full text-[#30451F] hover:bg-[#DDE4CF]/50 transition-colors focus-visible:outline-2 focus-visible:outline-[#30451F]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Image Frame */}
              <div className="md:col-span-5 relative aspect-square rounded-2xl overflow-hidden bg-[#EFE9DC] border border-[#30451F]/15">
                <img src={image} alt={alt || name} className="w-full h-full object-cover" />
              </div>

              {/* Overview Details */}
              <div className="md:col-span-7 space-y-3">
                <h2 id="modal-product-title" className="text-2xl sm:text-3xl font-serif font-bold text-[#30451F]">
                  {name}
                </h2>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {description}
                </p>

                {keyIngredient && (
                  <div className="p-3 rounded-xl bg-[#DDE4CF]/40 border border-[#30451F]/10 flex items-start gap-2.5">
                    <Leaf className="w-4 h-4 text-[#30451F] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#30451F]">Key Botanical</p>
                      <p className="text-xs text-[#30451F]/90 font-medium">{keyIngredient}</p>
                    </div>
                  </div>
                )}

                {/* Sourcing & Harvest Meta */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-stone-600">
                  {origin && (
                    <div className="flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-[#6F7652]" />
                      <span><strong>Origin:</strong> {origin}</span>
                    </div>
                  )}
                  {availableSizes && (
                    <div className="flex items-center gap-1.5">
                      <Package className="w-3.5 h-3.5 text-[#6F7652]" />
                      <span><strong>Packaging:</strong> {availableSizes}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* In-depth Botanical Profile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[#30451F]/10">
              {ingredients && (
                <div className="p-4 rounded-2xl bg-[#F7F3EB] border border-[#30451F]/10 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#30451F] uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-[#6F7652]" />
                    <span>Ingredients</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">{ingredients}</p>
                </div>
              )}

              {directions && (
                <div className="p-4 rounded-2xl bg-[#F7F3EB] border border-[#30451F]/10 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#30451F] uppercase tracking-wider">
                    <Info className="w-3.5 h-3.5 text-[#6F7652]" />
                    <span>Directions for Use</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">{directions}</p>
                </div>
              )}
            </div>

            {/* Precautions & Botanical Sourcing Note */}
            {precautions && (
              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/60 flex items-start gap-2.5 text-left">
                <AlertCircle className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-amber-900 uppercase tracking-wider">Storage &amp; Precautions</p>
                  <p className="text-xs text-amber-800/90 leading-relaxed mt-0.5">{precautions}</p>
                </div>
              </div>
            )}

            {harvestMethod && (
              <p className="text-[11px] text-stone-500 italic text-center">
                * Crafting method: {harvestMethod}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
