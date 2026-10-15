import { Leaf, Mail, Phone, MapPin } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import MotionReveal from '../ui/MotionReveal.jsx'

const QUICK_LINKS = [
  { name: 'Shop All', href: '#products' },
  { name: 'Best Sellers', href: '#products' },
  { name: 'Shop by Concern', href: '#concerns' },
  { name: 'Botanical Ingredients', href: '#ingredients' },
  { name: 'Categories', href: '#categories' },
  { name: 'Our Philosophy', href: '#why-us' },
]

const CUSTOMER_SERVICE_LINKS = [
  { name: 'My Account', href: '#' },
  { name: 'Track Order', href: '#' },
  { name: 'Shipping Policy', href: '#' },
  { name: 'Returns & Refunds', href: '#' },
  { name: 'FAQs', href: '#' },
  { name: 'Support', href: '#' },
]

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    href: '#',
    svgPath:
      'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    name: 'Facebook',
    href: '#',
    svgPath:
      'M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z',
  },
  {
    name: 'X (Twitter)',
    href: '#',
    svgPath:
      'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    name: 'Pinterest',
    href: '#',
    svgPath:
      'M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.357-.057.238-.188.288-.434.174-1.621-.754-2.634-3.12-2.634-5.022 0-4.088 2.971-7.844 8.566-7.844 4.498 0 7.994 3.206 7.994 7.49 0 4.469-2.817 8.064-6.729 8.064-1.314 0-2.549-.683-2.973-1.492l-.809 3.087c-.293 1.121-1.087 2.527-1.618 3.393 1.187.366 2.449.566 3.758.566 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z',
  },
]

export default function Footer() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <footer className="bg-[#F7F3EB] text-[#30451F] pt-14 pb-10 sm:pt-18 sm:pb-12 border-t border-[#30451F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal variant="fadeIn" delay={0.04} duration={0.35}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-12">
            {/* Column 1: Brand Info */}
            <div className="space-y-4 text-left">
              <a
                href="#"
                className="inline-flex items-center gap-2 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#30451F] rounded-md"
                aria-label="HERBORA NATURALS Homepage"
              >
                <div className="w-8 h-8 rounded-full bg-[#30451F] text-[#F7F3EB] flex items-center justify-center shadow-2xs group-hover:bg-[#243517] transition-transform duration-200 group-hover:scale-105">
                  <Leaf className="w-4 h-4 text-[#DDE4CF]" aria-hidden="true" />
                </div>
                <span className="font-serif text-lg font-bold tracking-wider text-[#30451F] uppercase leading-none">
                  HERBORA NATURALS
                </span>
              </a>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-xs">
                Thoughtfully curated botanical essentials and herbal remedies handcrafted for
                your everyday wellness and natural self-care rituals.
              </p>
              <div className="flex items-center gap-2.5 pt-1">
                {SOCIAL_LINKS.map((s) => (
                  <motion.a
                    key={s.name}
                    href={s.href}
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.08, y: -1 }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.92 }}
                    transition={{ duration: 0.15 }}
                    aria-label={`Herbora Naturals on ${s.name}`}
                    className="w-8 h-8 rounded-full bg-[#DDE4CF]/50 text-[#30451F] hover:bg-[#30451F] hover:text-[#F7F3EB] flex items-center justify-center transition-colors duration-200 border border-[#30451F]/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#30451F]"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d={s.svgPath} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="text-left">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#30451F] mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600">
                {QUICK_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:text-[#30451F] hover:underline underline-offset-4 decoration-[#30451F]/30 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#30451F]"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Customer Service */}
            <div className="text-left">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#30451F] mb-4">
                Customer Service
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600">
                {CUSTOMER_SERVICE_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:text-[#30451F] hover:underline underline-offset-4 decoration-[#30451F]/30 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#30451F]"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="text-left space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#30451F] mb-4">
                Contact Us
              </h3>
              <div className="space-y-2.5 text-xs sm:text-sm text-stone-600">
                <a
                  href="mailto:care@herboranaturals.com"
                  className="flex items-start gap-2 hover:text-[#30451F] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#30451F]"
                >
                  <Mail className="w-4 h-4 text-[#30451F] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>care@herboranaturals.com</span>
                </a>
                <a
                  href="tel:18005550199"
                  className="flex items-start gap-2 hover:text-[#30451F] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#30451F]"
                >
                  <Phone className="w-4 h-4 text-[#30451F] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>+1 (800) 555-0199</span>
                </a>
                <p className="flex items-start gap-2 text-stone-600">
                  <MapPin className="w-4 h-4 text-[#30451F] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>108 Botanical Way, Suite 400, Portland, OR 97201</span>
                </p>
              </div>
            </div>
          </div>
        </MotionReveal>

        {/* Bottom Bar: Copyright & Legal Links */}
        <div className="pt-8 border-t border-[#30451F]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-600 gap-4">
          <p>© 2026 HERBORA NATURALS. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5 sm:gap-6">
            <a
              href="#"
              className="hover:text-[#30451F] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#30451F]"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-[#30451F] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#30451F]"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-[#30451F] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#30451F]"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
