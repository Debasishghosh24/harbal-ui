import { Sparkles, ShieldCheck, Leaf } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'

export default function AnnouncementBar() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.aside
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      aria-label="Botanical quality and catalogue announcements"
      className="bg-[#1D301B] text-[#F7F3EB] text-xs py-2 px-4 border-b border-[#30451F]/40 transition-colors"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-center sm:text-left">
        {/* Main Botanical Announcement */}
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <span className="inline-flex items-center justify-center p-1 rounded-full bg-[#DDE4CF]/20 text-[#DDE4CF]">
            <Leaf className="w-3 h-3" aria-hidden="true" />
          </span>
          <span className="font-medium tracking-wide">
            Amiaveda — Pure Ayurvedic Product Catalogue &amp; Botanical Compendium
          </span>
        </div>

        {/* Quality Standards */}
        <div className="flex items-center justify-center gap-3 text-[11px] text-[#DDE4CF]/90">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#DDE4CF]" aria-hidden="true" />
            <span>Ethically Harvested</span>
          </div>

          <span className="w-px h-3 bg-[#DDE4CF]/30" aria-hidden="true" />

          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#DDE4CF]" aria-hidden="true" />
            <span>Small-Batch Apothecary Blends</span>
          </div>
        </div>
      </div>
    </motion.aside>
  )
}
