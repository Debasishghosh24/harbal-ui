import { useState } from 'react'
import SectionHeading from '../ui/SectionHeading.jsx'
import ProductCard from '../ui/ProductCard.jsx'
import MotionReveal from '../ui/MotionReveal.jsx'
import { products } from '../../data/products.js'

const FILTER_TABS = [
  { id: 'all', label: 'All Remedies' },
  { id: 'Supplements', label: 'Supplements' },
  { id: 'Herbal Powders', label: 'Powders' },
  { id: 'Essential Oils', label: 'Oils' },
  { id: 'Herbal Teas', label: 'Teas' },
  { id: 'Personal Care', label: 'Personal Care' },
]

export default function BestSellersSection({ onAddToCart, onToggleFavorite, onQuickView }) {
  const [selectedFilter, setSelectedFilter] = useState('all')

  const filteredProducts =
    selectedFilter === 'all'
      ? products
      : products.filter((p) => p.category === selectedFilter)

  return (
    <section
      id="products"
      aria-labelledby="best-sellers-heading"
      className="py-14 sm:py-20 bg-white border-b border-[#30451F]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal delay={0.08} direction="up" distance={16}>
          <SectionHeading
            title="Best Sellers"
            description="Our most-loved herbal essentials and apothecary staples."
            className="mb-8 sm:mb-10"
          />
        </MotionReveal>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-6 scrollbar-none">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#30451F] ${
                selectedFilter === tab.id
                  ? 'bg-[#30451F] text-[#F7F3EB] shadow-xs'
                  : 'bg-[#F7F3EB] text-[#30451F]/70 hover:bg-[#DDE4CF]/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Responsive Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
          {filteredProducts.map((product, index) => (
            <MotionReveal
              key={product.id}
              delay={0.1 + index * 0.06}
              direction="up"
              distance={18}
              className="h-full"
            >
              <ProductCard
                product={product}
                onAddToCart={onAddToCart}
                onToggleFavorite={onToggleFavorite}
                onQuickView={onQuickView}
              />
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
