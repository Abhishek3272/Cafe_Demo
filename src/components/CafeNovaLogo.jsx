export default function CafeNovaLogo({
  size = 44,
  variant = 'emblem',
  className = '',
  style = {},
  alt = 'Cafe Nova - The Celebration House',
  showTagline = false,
}) {
  const logoSrc = '/images/cafe-nova-logo.png'

  if (variant === 'badge') {
    return (
      <div
        className={`cafe-nova-logo-badge ${className}`}
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          background: '#ffffff',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 14px rgba(30, 50, 28, 0.12)',
          border: '1px solid var(--border-color)',
          padding: Math.max(2, Math.round(size * 0.05)),
          flexShrink: 0,
          overflow: 'hidden',
          ...style,
        }}
      >
        <img
          src={logoSrc}
          alt={alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            display: 'block',
          }}
          onError={(e) => {
            // Fallback to public root if needed
            if (!e.currentTarget.src.endsWith('/cafe_nova_logo.svg')) {
              e.currentTarget.src = '/cafe_nova_logo.svg'
            }
          }}
        />
      </div>
    )
  }

  if (variant === 'full') {
    return (
      <div
        className={`cafe-nova-logo-full ${className}`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          ...style,
        }}
      >
        <img
          src={logoSrc}
          alt={alt}
          style={{
            width: size,
            height: size,
            objectFit: 'contain',
            filter: 'drop-shadow(0 6px 18px rgba(30, 50, 28, 0.15))',
          }}
        />
        {showTagline && (
          <div style={{ marginTop: '8px' }}>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--accent-sage-dark)',
                display: 'block',
              }}
            >
              Cafe Nova
            </span>
            <span
              style={{
                fontSize: '0.72rem',
                letterSpacing: '2px',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              The Celebration House • Akluj
            </span>
          </div>
        )}
      </div>
    )
  }

  // Default 'emblem'
  return (
    <img
      src={logoSrc}
      alt={alt}
      className={`cafe-nova-logo ${className}`}
      style={{
        width: size,
        height: size,
        objectFit: 'contain',
        display: 'inline-block',
        ...style,
      }}
      onError={(e) => {
        if (!e.currentTarget.src.endsWith('/cafe_nova_logo.svg')) {
          e.currentTarget.src = '/cafe_nova_logo.svg'
        }
      }}
    />
  )
}
