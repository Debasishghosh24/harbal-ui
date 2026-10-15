import ProductCard from '../catalogue/ProductCard.jsx'

export default function LegacyProductCard({
  product,
  onViewDetails,
  onQuickView,
}) {
  return (
    <ProductCard
      product={product}
      onViewDetails={onViewDetails || onQuickView}
    />
  )
}
