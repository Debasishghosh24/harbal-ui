import { useState } from 'react'
import AnnouncementBar from './components/layout/AnnouncementBar.jsx'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import QuickViewModal from './components/ui/QuickViewModal.jsx'
import Home from './pages/Home.jsx'

export default function App() {
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [quickViewProduct, setQuickViewProduct] = useState(null)

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product])
  }

  const handleToggleFavorite = (product) => {
    setWishlist((prev) =>
      prev.some((p) => p.id === product.id)
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product],
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#30451F] selection:bg-[#DDE4CF] selection:text-[#30451F]">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Responsive Navbar with Live Search and Counter Badges */}
      <Navbar
        cartCount={cart.length}
        wishlistCount={wishlist.length}
        onSelectProduct={(p) => setQuickViewProduct(p)}
      />

      {/* Main Content Flow */}
      <div className="grow">
        <Home
          onAddToCart={handleAddToCart}
          onToggleFavorite={handleToggleFavorite}
          onQuickView={(p) => setQuickViewProduct(p)}
        />
      </div>

      {/* Footer */}
      <Footer />

      {/* Global Quick View Modal Dialog */}
      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          onAddToCart={handleAddToCart}
          onToggleFavorite={handleToggleFavorite}
          isFavorite={wishlist.some((p) => p.id === quickViewProduct.id)}
        />
      )}
    </div>
  )
}
