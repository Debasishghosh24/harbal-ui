import logoClean from '../../assets/amiaveda-logo-clean.png'
import logoFull from '../../assets/Amiaveda Natural Wellness Logo.png'

export default function BrandLogo({
  variant = 'default',
  size = 'default',
  className = '',
  alt = 'Amiaveda Natural Wellness Logo',
}) {
  const isFull = variant === 'banner' || variant === 'full'
  const logoSrc = isFull ? logoFull : logoClean

  const sizeClasses =
    {
      sm: 'h-9 sm:h-10',
      compact: 'h-9 sm:h-10',
      default: 'h-11 sm:h-13',
      md: 'h-13 sm:h-15',
      lg: 'h-16 sm:h-20',
    }[size] || 'h-11 sm:h-13'

  return (
    <div
      className={`inline-flex items-center select-none transition-transform duration-300 group-hover:scale-102 ${className}`}
    >
      <img
        src={logoSrc}
        alt={alt}
        loading="eager"
        decoding="async"
        className={`${sizeClasses} w-auto object-contain mix-blend-multiply drop-shadow-2xs`}
      />
    </div>
  )
}
