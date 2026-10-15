import { Search, X } from 'lucide-react'

export default function ProductSearch({
  searchQuery = '',
  onSearchChange,
  onClear,
  placeholder = 'Search herbal remedies, powders, botanicals...',
  className = '',
}) {
  return (
    <div className={`relative w-full max-w-md ${className}`}>
      <label htmlFor="catalogue-search-input" className="sr-only">
        Search product catalogue
      </label>
      <div className="relative">
        <Search
          className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#30451F]/60 pointer-events-none"
          aria-hidden="true"
        />
        <input
          id="catalogue-search-input"
          type="search"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-white border border-[#30451F]/15 text-xs sm:text-sm text-[#30451F] placeholder:text-[#30451F]/50 focus:outline-none focus:ring-2 focus:ring-[#30451F] shadow-2xs transition-all"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={onClear}
            aria-label="Clear search input"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-700 transition-colors focus-visible:outline-2 focus-visible:outline-[#30451F] rounded"
          >
            <X className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  )
}
