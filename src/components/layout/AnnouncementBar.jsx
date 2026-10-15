import { Sparkles, ShieldCheck, Truck } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'

export default function AnnouncementBar() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.aside
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      aria-label="Promotional and trust announcements"
      className="bg-[#30451F] text-[#F7F3EB] text-xs py-2 px-4 border-b border-[#243517] transition-colors"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-center sm:text-left">
        {/* Main Promo Message */}
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <span className="inline-flex items-center justify-center p-1 rounded-full bg-[#DDE4CF]/20 text-[#DDE4CF]">
            <Truck className="w-3.5 h-3.5" aria-hidden="true" />
          </span>
          <span className="font-medium tracking-wide">
            Free Shipping on Orders Over $50
          </span>
        </div>

        {/* Secondary Trust & Promotion Messages separated by subtle dividers */}
        <div className="flex items-center justify-center gap-3 text-[11px] text-[#DDE4CF]/90">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#DDE4CF]" aria-hidden="true" />
            <span>100% Certified Organic</span>
          </div>

          <span
            className="w-px h-3 bg-[#DDE4CF]/30"
            aria-hidden="true"
          />

          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#DDE4CF]" aria-hidden="true" />
            <span>Use Code <strong className="font-semibold text-white">HERB15</strong> for 15% Off</span>
          </div>
        </div>
      </div>
    </motion.aside>
  )
}
