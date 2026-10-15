import { useState, useEffect } from 'react'
import { Search, Menu, X, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import BrandLogo from '../ui/BrandLogo.jsx'
import { products } from '../../data/products.js'

export default function Navbar({ onSelectProduct, onJoinUs }) {
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
          (p.keyIngredient && p.keyIngredient.toLowerCase().includes(query.toLowerCase())),
      )
    : []

  const navLinks = [
    { name: 'Catalogue', href: '#catalogue' },
    { name: 'Categories', href: '#categories' },
    { name: 'Ingredients', href: '#ingredients' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Sourcing', href: '#sourcing' },
  ]

  return (
    <header
      className={`sticky top-0 z-40 bg-[#F7F3EB]/95 backdrop-blur-md border-b transition-all duration-300 ${
        isScrolled ? 'border-[#30451F]/15 shadow-sm py-0' : 'border-[#30451F]/10 py-1'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Custom Brand Logo */}
          <a
            href="#"
            aria-label="AMIAVEDA Homepage"
            className="group focus-visible:outline-2 focus-visible:outline-[#30451F] rounded-lg p-1"
          >
            <BrandLogo />
          </a>

          {/* Catalogue Navigation Links */}
          <nav aria-label="Main Catalogue Navigation" className="hidden md:flex items-center gap-7 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs lg:text-sm font-semibold uppercase tracking-wider text-[#30451F]/80 hover:text-[#30451F] transition-colors relative py-1 focus-visible:outline-2 focus-visible:outline-[#30451F] rounded-md after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#30451F] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Catalogue Search & Join Us */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setSearchOpen((prev) => !prev)}
              aria-label="Search herbal catalogue"
              aria-expanded={searchOpen}
              className={`p-2 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-[#30451F] cursor-pointer ${
                searchOpen ? 'bg-[#30451F] text-[#F7F3EB]' : 'text-[#30451F]/80 hover:bg-[#DDE4CF]/40'
              }`}
            >
              <Search className="w-5 h-5" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={onJoinUs}
              aria-label="Join Amiaveda Botanical Circle"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#30451F] hover:bg-[#243517] text-[#F7F3EB] text-xs font-semibold tracking-wide shadow-2xs hover:shadow-xs transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#30451F] cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#DDE4CF]" aria-hidden="true" />
              <span>Join Us</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((p) => !p)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 text-[#30451F] hover:bg-[#DDE4CF]/40 rounded-lg focus-visible:outline-2 focus-visible:outline-[#30451F] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Live Search Overlay */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="pb-4 pt-1 overflow-hidden">
              <div className="relative max-w-lg mx-auto">
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search remedies by botanical name, category, or herb..."
                  autoFocus
                  className="w-full px-4 py-2.5 pl-10 rounded-xl bg-white border border-[#30451F]/20 text-xs sm:text-sm text-[#30451F] focus:outline-none focus:ring-2 focus:ring-[#30451F] shadow-sm"
                />
                <Search className="w-4 h-4 text-[#30451F]/60 absolute left-3.5 top-3.5" aria-hidden="true" />
                {query && (
                  <button type="button" onClick={() => setQuery('')} className="absolute right-3 top-3 text-stone-400 hover:text-stone-700">
                    <X className="w-4 h-4" />
                  </button>
                )}
                {query.trim() && (
                  <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-xl shadow-xl border border-[#30451F]/15 overflow-hidden z-50 max-h-60 overflow-y-auto">
                    {searchResults.length > 0 ? (
                      searchResults.map((item) => (
                        <div
                          key={item.id}
                          onClick={() => {
                            if (onSelectProduct) onSelectProduct(item)
                            setSearchOpen(false)
                            setQuery('')
                          }}
                          className="p-3 hover:bg-[#FAF7F2] cursor-pointer flex items-center justify-between border-b border-stone-100 last:border-0"
                        >
                          <div className="flex items-center gap-3 text-left">
                            <img src={item.image} alt={item.name} className="w-9 h-9 object-cover rounded-lg bg-[#EFE9DC]" />
                            <div>
                              <p className="text-xs font-bold text-[#30451F]">{item.name}</p>
                              <p className="text-[10px] text-stone-500">{item.category} • {item.tag}</p>
                            </div>
                          </div>
                          <span className="text-[11px] font-semibold text-[#6F7652]">View Details →</span>
                        </div>
                      ))
                    ) : (
                      <p className="p-3 text-xs text-stone-500 text-center">No botanical remedies found for &ldquo;{query}&rdquo;</p>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden overflow-hidden bg-[#F7F3EB] border-t border-[#30451F]/10 px-4 pt-3 pb-6 space-y-2 shadow-lg">
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold uppercase tracking-wider text-[#30451F] hover:bg-[#DDE4CF]/50 px-3 py-2.5 rounded-lg transition-colors">
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="pt-2 px-1 border-t border-[#30451F]/10">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false)
                  if (onJoinUs) onJoinUs()
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#30451F] text-[#F7F3EB] text-xs font-semibold uppercase tracking-wider shadow-xs cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#DDE4CF]" aria-hidden="true" />
                <span>Join Us</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
