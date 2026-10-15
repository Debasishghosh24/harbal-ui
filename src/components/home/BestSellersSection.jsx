import { useState } from 'react'
import SectionHeading from '../ui/SectionHeading.jsx'
import MotionReveal from '../ui/MotionReveal.jsx'
import ProductGrid from '../catalogue/ProductGrid.jsx'
import CategoryFilter from '../catalogue/CategoryFilter.jsx'
import ProductSearch from '../catalogue/ProductSearch.jsx'
import { products } from '../../data/products.js'
import { categories } from '../../data/categories.js'

export default function BestSellersSection({ onViewDetails, activeCategory = 'all', onSelectCategory }) {
  const [internalCategory, setInternalCategory] = useState(activeCategory)
  const [searchQuery, setSearchQuery] = useState('')

  const currentCategory = onSelectCategory ? activeCategory : internalCategory
  const handleCategorySelect = (cat) => {
    if (onSelectCategory) onSelectCategory(cat)
    setInternalCategory(cat)
  }

  // Filter products by category and search query
  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      currentCategory === 'all' ||
      p.category.toLowerCase() === currentCategory.toLowerCase() ||
      (currentCategory === 'supplements' && p.category === 'Supplements') ||
      (currentCategory === 'herbal-powders' && p.category === 'Herbal Powders') ||
      (currentCategory === 'essential-oils' && p.category === 'Essential Oils') ||
      (currentCategory === 'herbal-teas' && p.category === 'Herbal Teas') ||
      (currentCategory === 'personal-care' && p.category === 'Personal Care')

    const q = searchQuery.toLowerCase().trim()
    const matchesSearch =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      (p.keyIngredient && p.keyIngredient.toLowerCase().includes(q)) ||
      (p.description && p.description.toLowerCase().includes(q))

    return matchesCategory && matchesSearch
  })

  return (
    <section
      id="catalogue"
      aria-labelledby="catalogue-heading"
      className="py-14 sm:py-20 bg-white border-b border-[#30451F]/10 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal delay={0.08} direction="up" distance={16}>
          <SectionHeading
            title="Herbal Product Catalogue"
            description="Explore whole-spectrum Ayurvedic remedies, single-origin powders, and cold-pressed botanical oils."
            className="mb-8 sm:mb-10"
          />
        </MotionReveal>

        {/* Search & Category Filter Controls */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <CategoryFilter
            categories={categories}
            selectedCategory={currentCategory}
            onSelectCategory={handleCategorySelect}
            className="w-full md:w-auto"
          />

          <ProductSearch
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onClear={() => setSearchQuery('')}
            className="w-full md:max-w-xs"
          />
        </div>

        {/* Results Count Summary */}
        <div className="mb-6 flex items-center justify-between text-xs text-stone-500 border-b border-stone-100 pb-2">
          <span>Showing {filteredProducts.length} of {products.length} botanical formulations</span>
          {currentCategory !== 'all' && (
            <button
              type="button"
              onClick={() => handleCategorySelect('all')}
              className="text-[#30451F] font-semibold hover:underline"
            >
              Reset filter
            </button>
          )}
        </div>

        {/* Reusable Catalogue Product Grid */}
        <ProductGrid
          products={filteredProducts}
          onViewDetails={onViewDetails}
          emptyMessage={
            searchQuery
              ? `No botanical remedies found matching "${searchQuery}". Try searching for another herb or category.`
              : 'No formulations found in this category.'
          }
        />
      </div>
    </section>
  )
}
