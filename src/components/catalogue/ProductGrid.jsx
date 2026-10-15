import ProductCard from './ProductCard.jsx'
import MotionReveal from '../ui/MotionReveal.jsx'

export default function ProductGrid({
  products = [],
  onViewDetails,
  columns = 'default',
  emptyMessage = 'No botanical remedies found matching your criteria.',
}) {
  if (products.length === 0) {
    return (
      <div className="py-12 text-center text-stone-500 bg-[#FAF7F2] rounded-2xl border border-[#30451F]/10 p-6">
        <p className="text-sm font-medium">{emptyMessage}</p>
      </div>
    )
  }

  const gridClass =
    columns === 'compact'
      ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6'
      : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6'

  return (
    <div className={gridClass}>
      {products.map((product, index) => (
        <MotionReveal
          key={product.id}
          delay={0.06 + index * 0.05}
          direction="up"
          distance={16}
          className="h-full"
        >
          <ProductCard
            product={product}
            onViewDetails={onViewDetails}
          />
        </MotionReveal>
      ))}
    </div>
  )
}
