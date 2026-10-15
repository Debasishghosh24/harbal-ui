
import { useState, useEffect } from 'react'
import { Search, Menu, X, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import BrandLogo from '../ui/BrandLogo.jsx'
import { products } from '../../data/products.js'

const JOIN_PORTAL_URL = 'https://amiaveda.com:97/amv_portal/'

export default function Navbar({ onSelectProduct }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15)

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const searchResults = query.trim()
    ? products.filter(
      (p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        (p.keyIngredient &&
          p.keyIngredient.toLowerCase().includes(query.toLowerCase())),
    )
    : []

  const navLinks = [
    { name: 'Catalogue', href: '#catalogue' },
    { name: 'Categories', href: '#categories' },
    { name: 'Ingredients', href: '#ingredients' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Sourcing', href: '#sourcing' },
  ]

  const handleProductSelect = (item) => {
    if (onSelectProduct) onSelectProduct(item)

    setSearchOpen(false)
    setQuery('')
  }

  const joinButtonClass =
    'inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#30451F] text-[#F7F3EB] text-xs font-semibold tracking-wide transition-all duration-200 hover:bg-[#243517] focus-visible:outline-2 focus-visible:outline-[#30451F]'

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-[#F7F3EB]/95 backdrop-blur-md transition-all duration-300 ${isScrolled
        ? 'border-[#30451F]/15 shadow-sm py-0'
        : 'border-[#30451F]/10 py-1'
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            aria-label="AMIAVEDA Homepage"
            className="group rounded-lg p-1 focus-visible:outline-2 focus-visible:outline-[#30451F]"
          >
            <BrandLogo />
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Catalogue Navigation"
            className="hidden items-center gap-7 md:flex lg:gap-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative rounded-md py-1 text-xs font-semibold uppercase tracking-wider text-[#30451F]/80 transition-colors hover:text-[#30451F] focus-visible:outline-2 focus-visible:outline-[#30451F] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#30451F] after:transition-all after:duration-200 hover:after:w-full lg:text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Search, Join Us and Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setSearchOpen((prev) => !prev)}
              aria-label="Search herbal catalogue"
              aria-expanded={searchOpen}
              className={`cursor-pointer rounded-full p-2 transition-colors focus-visible:outline-2 focus-visible:outline-[#30451F] ${searchOpen
                ? 'bg-[#30451F] text-[#F7F3EB]'
                : 'text-[#30451F]/80 hover:bg-[#DDE4CF]/40'
                }`}
            >
              <Search className="h-5 w-5" aria-hidden="true" />
            </button>

            {/* Desktop Join Us: Opens Company Portal */}
            <a
              href={JOIN_PORTAL_URL}
              aria-label="Join Amiaveda Company Portal"
              className={`${joinButtonClass} px-4 py-2 shadow-sm hover:shadow-md`}
            >
              <Sparkles
                className="h-3.5 w-3.5 text-[#DDE4CF]"
                aria-hidden="true"
              />
              <span>Join Us</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={
                mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
              }
              aria-expanded={mobileMenuOpen}
              className="cursor-pointer rounded-lg p-2 text-[#30451F] hover:bg-[#DDE4CF]/40 focus-visible:outline-2 focus-visible:outline-[#30451F] md:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Live Search Overlay */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden pb-4 pt-1"
            >
              <div className="relative mx-auto max-w-lg">
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search remedies by botanical name, category, or herb..."
                  aria-label="Search products"
                  autoFocus
                  className="w-full rounded-xl border border-[#30451F]/20 bg-white px-4 py-2.5 pl-10 text-xs text-[#30451F] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#30451F] sm:text-sm"
                />

                <Search
                  className="absolute left-3.5 top-3.5 h-4 w-4 text-[#30451F]/60"
                  aria-hidden="true"
                />

                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery('')}
                    aria-label="Clear search"
                    className="absolute right-3 top-3 cursor-pointer text-stone-400 hover:text-stone-700"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                )}

                {query.trim() && (
                  <div className="absolute left-0 right-0 top-full z-50 mt-1.5 max-h-60 overflow-y-auto rounded-xl border border-[#30451F]/15 bg-white shadow-xl">
                    {searchResults.length > 0 ? (
                      searchResults.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => handleProductSelect(item)}
                          className="flex w-full cursor-pointer items-center justify-between border-b border-stone-100 p-3 text-left last:border-0 hover:bg-[#FAF7F2]"
                        >
                          <span className="flex items-center gap-3">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-9 w-9 rounded-lg bg-[#EFE9DC] object-cover"
                            />
                            <span>
                              <span className="block text-xs font-bold text-[#30451F]">
                                {item.name}
                              </span>
                              <span className="block text-[10px] text-stone-500">
                                {item.category} • {item.tag}
                              </span>
                            </span>
                          </span>

                          <span className="text-[11px] font-semibold text-[#6F7652]">
                            View Details →
                          </span>
                        </button>
                      ))
                    ) : (
                      <p className="p-3 text-center text-xs text-stone-500">
                        No botanical remedies found for &ldquo;{query}&rdquo;
                      </p>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-2 overflow-hidden border-t border-[#30451F]/10 bg-[#F7F3EB] px-4 pb-6 pt-3 shadow-lg md:hidden"
          >
            <nav
              aria-label="Mobile Catalogue Navigation"
              className="flex flex-col"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-semibold uppercase tracking-wider text-[#30451F] transition-colors hover:bg-[#DDE4CF]/50"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="border-t border-[#30451F]/10 px-1 pt-3">
              {/* Mobile Join Us: Opens the Same Company Portal */}
              <a
                href={JOIN_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Join Amiaveda Company Portal"
                className={`${joinButtonClass} w-full px-4 py-2.5 uppercase tracking-wider shadow-sm`}
              >
                <Sparkles
                  className="h-4 w-4 text-[#DDE4CF]"
                  aria-hidden="true"
                />
                <span>Join Us</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
