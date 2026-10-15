import { useState, useEffect } from 'react'
import { X, Sparkles, CheckCircle2, Leaf, Mail, User } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { EASING } from '../../utils/motion.js'

const INTERESTS = [
  { id: 'harvests', label: 'Seasonal Harvests' },
  { id: 'ayurveda', label: 'Ayurvedic Wisdom' },
  { id: 'oils', label: 'Cold-Pressed Oils' },
  { id: 'teas', label: 'Herbal Infusions' },
]

export default function JoinUsModal({ isOpen = true, onClose }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [interests, setInterests] = useState(['harvests'])
  const [submitted, setSubmitted] = useState(false)
  const shouldReduceMotion = useReducedMotion()

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

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

  const toggleInterest = (id) => {
    setInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    )
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="join-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1D301B]/60 backdrop-blur-xs"
            aria-hidden="true"
          />

          {/* Modal Panel */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 15 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: EASING.botanical }}
            className="relative w-full max-w-lg bg-[#FAF7F2] rounded-3xl border border-[#30451F]/15 shadow-2xl z-10 p-6 sm:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close Join Us modal"
              className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-[#30451F] hover:bg-[#DDE4CF]/50 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>

            {submitted ? (
              <div className="py-6 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#DDE4CF] text-[#30451F] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#30451F]">Welcome to the Circle</h3>
                <p className="text-sm text-stone-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-[#30451F]">{name || 'herbal seeker'}</span>. Your welcome monograph and seasonal compendium have been sent to <span className="font-medium text-[#30451F]">{email}</span>.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-[#30451F] hover:bg-[#243517] text-[#F7F3EB] text-xs font-semibold cursor-pointer"
                >
                  Return to Catalogue
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DDE4CF]/70 text-[#30451F] text-xs font-semibold uppercase tracking-wider mb-2 border border-[#30451F]/15">
                    <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Herbal Community</span>
                  </div>
                  <h2 id="join-modal-title" className="font-serif text-2xl sm:text-3xl font-bold text-[#30451F]">
                    Join the Amiaveda Circle
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Connect with our apothecary collective for seasonal harvest notes, monographs, and botanical updates.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label htmlFor="join-name" className="block text-xs font-semibold uppercase text-[#30451F] mb-1">
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        id="join-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full px-4 py-2.5 pl-10 rounded-xl bg-white border border-[#30451F]/20 text-xs sm:text-sm text-[#30451F] focus:outline-none focus:ring-2 focus:ring-[#30451F]"
                      />
                      <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" aria-hidden="true" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="join-email" className="block text-xs font-semibold uppercase text-[#30451F] mb-1">
                      Email Address <span className="text-amber-700">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="join-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full px-4 py-2.5 pl-10 rounded-xl bg-white border border-[#30451F]/20 text-xs sm:text-sm text-[#30451F] focus:outline-none focus:ring-2 focus:ring-[#30451F]"
                      />
                      <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" aria-hidden="true" />
                    </div>
                  </div>

                  <div>
                    <span className="block text-xs font-semibold uppercase text-[#30451F] mb-1.5">
                      Botanical Interests
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {INTERESTS.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => toggleInterest(item.id)}
                          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-left border transition-colors cursor-pointer ${
                            interests.includes(item.id)
                              ? 'bg-[#DDE4CF] border-[#30451F]/30 text-[#30451F] font-semibold'
                              : 'bg-white border-stone-200 text-stone-600 hover:bg-[#FAF7F2]'
                          }`}
                        >
                          <Leaf className="w-3 h-3 text-[#30451F]" />
                          <span>{item.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#30451F] hover:bg-[#243517] text-[#F7F3EB] font-semibold text-xs sm:text-sm shadow-md transition-colors cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4 text-[#DDE4CF]" aria-hidden="true" />
                      <span>Join Botanical Circle</span>
                    </button>
                    <p className="mt-1.5 text-[11px] text-stone-500 text-center">
                      Non-commercial botanical updates. Unsubscribe anytime.
                    </p>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
