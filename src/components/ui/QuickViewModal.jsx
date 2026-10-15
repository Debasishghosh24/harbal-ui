import ProductDetailsModal from '../catalogue/ProductDetailsModal.jsx'

/**
 * Backward compatibility alias for ProductDetailsModal.
 * The website is now a pure product catalogue with detailed botanical views.
 */
export default function QuickViewModal(props) {
  return <ProductDetailsModal {...props} />
}
