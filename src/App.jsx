import { useState } from 'react'
import AnnouncementBar from './components/layout/AnnouncementBar.jsx'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import ProductDetailsModal from './components/catalogue/ProductDetailsModal.jsx'
import JoinUsModal from './components/ui/JoinUsModal.jsx'
import Home from './pages/Home.jsx'

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isJoinOpen, setIsJoinOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#30451F] selection:bg-[#DDE4CF] selection:text-[#30451F]">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Responsive Navbar with Custom Brand Logo, Live Search, & Join Us */}
      <Navbar
        onSelectProduct={(p) => setSelectedProduct(p)}
        onJoinUs={() => setIsJoinOpen(true)}
      />

      {/* Main Content Flow: Sections 3 to 10 */}
      <div className="grow">
        <Home onViewDetails={(p) => setSelectedProduct(p)} />
      </div>

      {/* 11. Footer with Contact Information and Botanical Resources */}
      <Footer />

      {/* Dedicated Botanical Product Details View */}
      {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* Join Amiaveda Botanical Circle Modal */}
      {isJoinOpen && (
        <JoinUsModal
          isOpen={isJoinOpen}
          onClose={() => setIsJoinOpen(false)}
        />
      )}
    </div>
  )
}
