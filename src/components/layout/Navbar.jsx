import { useState, useEffect } from 'react'
import { Leaf, Search, User, ShoppingBag, Heart, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { products } from '../../data/products.js'

export default function Navbar({ cartCount = 0, wishlistCount = 0, onSelectProduct }) {
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
    { name: 'Shop', href: '#products' },
    { name: 'Best Sellers', href: '#products' },
    { name: 'Concerns', href: '#concerns' },
    { name: 'Ingredients', href: '#ingredients' },
    { name: 'Categories', href: '#categories' },
    { name: 'About Us', href: '#why-us' },
  ]

  return (
    <header
      className={`sticky top-0 z-40 bg-[#F7F3EB]/95 backdrop-blur-md border-b transition-all duration-300 ${
        isScrolled ? 'border-[#30451F]/15 shadow-sm py-0' : 'border-[#30451F]/10 py-0.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <a
            href="#"
            aria-label="HERBORA NATURALS Homepage"
            className="flex items-center gap-2.5 group focus-visible:outline-2 focus-visible:outline-[#30451F] rounded-lg p-1"
          >
            <div className="w-8 h-8 rounded-full bg-[#30451F] text-[#F7F3EB] flex items-center justify-center shadow-xs group-hover:bg-[#243517] transition-transform duration-300 group-hover:scale-105">
              <Leaf className="w-4 h-4 text-[#DDE4CF]" aria-hidden="true" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-[#30451F] uppercase leading-none">
                HERBORA NATURALS
              </span>
              <span className="text-[9px] tracking-widest font-medium uppercase text-[#30451F]/70 mt-0.5">
                Botanical Apothecary
              </span>
            </div>
          </a>

          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-6 lg:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#30451F]/80 hover:text-[#30451F] transition-colors relative py-1 focus-visible:outline-2 focus-visible:outline-[#30451F] rounded-md after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#30451F] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen((prev) => !prev)}
              aria-label="Toggle search bar"
              aria-expanded={searchOpen}
              className={`p-2 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-[#30451F] ${
                searchOpen ? 'bg-[#30451F] text-[#F7F3EB]' : 'text-[#30451F]/80 hover:bg-[#DDE4CF]/40'
              }`}
            >
              <Search className="w-5 h-5" aria-hidden="true" />
            </button>

            <button type="button" aria-label="Account" className="p-2 text-[#30451F]/80 hover:bg-[#DDE4CF]/40 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-[#30451F]">
              <User className="w-5 h-5" aria-hidden="true" />
            </button>

            <button type="button" aria-label={`Wishlist (${wishlistCount})`} className="relative p-2 text-[#30451F]/80 hover:bg-[#DDE4CF]/40 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-[#30451F]">
              <Heart className={`w-5 h-5 ${wishlistCount > 0 ? 'text-rose-600 fill-rose-600/20' : ''}`} aria-hidden="true" />
              <AnimatePresence>
                {wishlistCount > 0 && (
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="absolute top-1 right-1 min-w-4 h-4 px-1 rounded-full bg-rose-600 text-white text-[10px] font-bold flex items-center justify-center leading-none border border-[#F7F3EB]">
                    {wishlistCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <button type="button" aria-label={`Cart (${cartCount})`} className="relative p-2 text-[#30451F]/80 hover:bg-[#DDE4CF]/40 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-[#30451F]">
              <ShoppingBag className="w-5 h-5" aria-hidden="true" />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="absolute top-1 right-1 min-w-4 h-4 px-1 rounded-full bg-[#30451F] text-[#F7F3EB] text-[10px] font-bold flex items-center justify-center leading-none border border-[#F7F3EB]">
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <button type="button" onClick={() => setMobileMenuOpen((p) => !p)} aria-label="Toggle navigation menu" className="md:hidden p-2 text-[#30451F] hover:bg-[#DDE4CF]/40 rounded-lg focus-visible:outline-2 focus-visible:outline-[#30451F]">
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
                  placeholder="Search remedies, oils, powders, concerns..."
                  autoFocus
                  className="w-full px-4 py-2.5 pl-10 rounded-xl bg-white border border-[#30451F]/20 text-sm text-[#30451F] focus:outline-none focus:ring-2 focus:ring-[#30451F] shadow-sm"
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
                          className="p-2.5 hover:bg-[#FAF7F2] cursor-pointer flex items-center justify-between border-b border-stone-100 last:border-0"
                        >
                          <div className="flex items-center gap-2.5 text-left">
                            <img src={item.image} alt={item.name} className="w-9 h-9 object-cover rounded-lg bg-[#EFE9DC]" />
                            <div>
                              <p className="text-xs font-bold text-[#30451F]">{item.name}</p>
                              <p className="text-[10px] text-stone-500">{item.category}</p>
                            </div>
                          </div>
                          <span className="text-xs font-serif font-bold text-[#30451F]">${item.price.toFixed(2)}</span>
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
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden overflow-hidden bg-[#F7F3EB] border-t border-[#30451F]/10 px-4 pt-3 pb-6 space-y-1 shadow-lg">
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-[#30451F] hover:bg-[#DDE4CF]/50 px-3 py-2.5 rounded-lg transition-colors">
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
