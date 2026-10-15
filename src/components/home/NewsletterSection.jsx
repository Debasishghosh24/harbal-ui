import { useState } from 'react'
import { Leaf, Mail, CheckCircle2, AlertCircle } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import MotionReveal from '../ui/MotionReveal.jsx'
import { EASING } from '../../utils/motion.js'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // 'idle' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('')
  const shouldReduceMotion = useReducedMotion()

  const validateEmail = (value) => {
    const trimmed = value.trim()
    if (!trimmed) return 'Please enter your email address.'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(trimmed)) return 'Please enter a valid email address (e.g. name@example.com).'
    return ''
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const error = validateEmail(email)
    if (error) {
      setStatus('error')
      setErrorMessage(error)
      return
    }
    setStatus('success')
    setErrorMessage('')
  }

  const handleReset = () => {
    setEmail('')
    setStatus('idle')
    setErrorMessage('')
  }

  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-heading"
      className="py-14 sm:py-20 bg-[#30451F] text-[#F7F3EB] relative overflow-hidden"
    >
      {/* Subtle Botanical Leaf Watermark Accent with Gentle Ambient Float */}
      <div
        className="absolute -right-12 -bottom-12 text-[#DDE4CF]/5 pointer-events-none select-none animate-botanical-float"
        aria-hidden="true"
      >
        <Leaf className="w-80 h-80" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <MotionReveal delay={0.08} direction="up" distance={14}>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DDE4CF]/15 text-[#DDE4CF] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#DDE4CF]/20">
            <Leaf className="w-3.5 h-3.5 text-[#DDE4CF]" aria-hidden="true" />
            <span>Herbal Community</span>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.16} direction="up" distance={16}>
          <h2
            id="newsletter-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#F7F3EB] tracking-tight leading-tight"
          >
            Get Exclusive Offers &amp; Wellness Tips
          </h2>
        </MotionReveal>

        <MotionReveal delay={0.24} direction="up" distance={14}>
          <p className="mt-3 text-sm sm:text-base text-[#DDE4CF]/85 leading-relaxed max-w-xl mx-auto">
            Receive product updates, seasonal herbal remedies, and thoughtful self-care
            guidance delivered directly to your inbox.
          </p>
        </MotionReveal>

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success-alert"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25, ease: EASING.botanical }}
              role="alert"
              className="mt-8 p-5 rounded-2xl bg-[#DDE4CF]/15 border border-[#DDE4CF]/30 max-w-md mx-auto text-left space-y-2"
            >
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#DDE4CF] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold text-[#F7F3EB]">Thank you for your interest!</p>
                  <p className="text-xs text-[#DDE4CF]/90 leading-relaxed mt-1">
                    (Demo Mode): This is an offline client-side demonstration. No email was stored or transmitted to an external server.
                  </p>
                </div>
              </div>
              <div className="pt-2 text-right">
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs font-semibold text-[#DDE4CF] hover:text-white underline underline-offset-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DDE4CF]"
                >
                  Enter another email
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="newsletter-form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onSubmit={handleSubmit}
              noValidate
              className="mt-8 max-w-md mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-2.5">
                <div className="relative grow text-left">
                  <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#30451F]/60 pointer-events-none" aria-hidden="true" />
                    <input
                      id="newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        if (status === 'error') setStatus('idle')
                      }}
                      placeholder="Enter your email address"
                      aria-invalid={status === 'error'}
                      aria-describedby={status === 'error' ? 'newsletter-error' : undefined}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F7F3EB] text-[#30451F] placeholder:text-[#30451F]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#DDE4CF] border border-transparent shadow-xs transition-colors duration-200"
                    />
                  </div>
                </div>

                <motion.button
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#DDE4CF] hover:bg-[#c9d4b5] text-[#30451F] font-semibold text-sm shadow-xs transition-colors duration-200 shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DDE4CF]"
                >
                  Subscribe
                </motion.button>
              </div>

              {status === 'error' && (
                <motion.div
                  id="newsletter-error"
                  role="alert"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="mt-2.5 flex items-center justify-center gap-1.5 text-xs text-rose-300 font-medium"
                >
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{errorMessage}</span>
                </motion.div>
              )}
            </motion.form>
          )}
        </AnimatePresence>

        <p className="mt-4 text-[11px] text-[#DDE4CF]/70">
          We respect your privacy. Unsubscribe at any time with one click. Zero spam.
        </p>
      </div>
    </section>
  )
}
