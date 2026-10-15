export default function SectionHeading({
  badge,
  title,
  description,
  align = 'center',
  className = '',
}) {
  const isCenter = align === 'center'

  return (
    <div
      className={`max-w-2xl ${
        isCenter ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-100/80 text-emerald-800 mb-3 border border-emerald-200">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
          {badge}
        </span>
      )}

      {title && (
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
          {title}
        </h2>
      )}

      {description && (
        <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
