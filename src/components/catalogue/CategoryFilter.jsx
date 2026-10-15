export default function CategoryFilter({
  categories = [],
  selectedCategory = 'all',
  onSelectCategory,
  className = '',
}) {
  return (
    <div
      role="tablist"
      aria-label="Filter products by category"
      className={`flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none ${className}`}
    >
      <button
        type="button"
        role="tab"
        aria-selected={selectedCategory === 'all'}
        onClick={() => onSelectCategory('all')}
        className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#30451F] ${
          selectedCategory === 'all'
            ? 'bg-[#30451F] text-[#F7F3EB] shadow-xs'
            : 'bg-[#F7F3EB] text-[#30451F]/70 hover:bg-[#DDE4CF]/50 border border-[#30451F]/15'
        }`}
      >
        All Categories
      </button>

      {categories.map((cat) => {
        const catId = cat.slug || cat.id || cat.name
        const isSelected = selectedCategory === catId
        return (
          <button
            key={catId}
            type="button"
            role="tab"
            aria-selected={isSelected}
            onClick={() => onSelectCategory(catId)}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#30451F] ${
              isSelected
                ? 'bg-[#30451F] text-[#F7F3EB] shadow-xs'
                : 'bg-[#F7F3EB] text-[#30451F]/70 hover:bg-[#DDE4CF]/50 border border-[#30451F]/15'
            }`}
          >
            {cat.name}
          </button>
        )
      })}
    </div>
  )
}
