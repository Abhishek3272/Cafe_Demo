import { navLinks } from '../data/navLinks.js'
import { useNavigation } from '../context/NavigationContext.jsx'

export default function MobileDrawer({ open, onClose }) {
  const { currentPage, navigateTo } = useNavigation()

  function handleLinkClick(pageId) {
    onClose()
    navigateTo(pageId)
  }

  return (
    <div className={`mobile-menu-drawer${open ? ' active' : ''}`} id="mobileDrawer">
      <div className="mobile-drawer-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img
            src="/images/cafe-nova-logo.png"
            alt="Cafe Nova - The Celebration House"
            style={{
              width: '46px',
              height: '46px',
              aspectRatio: '1 / 1',
              objectFit: 'contain',
              borderRadius: '50%',
              boxShadow: '0 2px 8px rgba(34, 56, 32, 0.15)',
              flexShrink: 0,
            }}
            onError={(e) => {
              if (!e.currentTarget.src.includes('cafe-nova-logo.svg')) {
                e.currentTarget.src = '/images/cafe-nova-logo.svg'
              }
            }}
          />
          <div>
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.4rem',
                fontWeight: 700,
                color: 'var(--accent-sage-dark)',
                lineHeight: 1.2,
              }}
            >
              Cafe Nova
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.6px', textTransform: 'uppercase', marginTop: '2px' }}>
              The Celebration House • Akluj
            </div>
          </div>
        </div>
        <button
          className="mobile-menu-close"
          onClick={onClose}
          aria-label="Close Navigation Menu"
          style={{ width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', cursor: 'pointer' }}
        >
          &times;
        </button>
      </div>

      <ul className="mobile-nav-links">
        {navLinks.map((link) => {
          const isActive = currentPage === link.id
          return (
            <li key={link.id}>
              <a
                href={link.path}
                className={`mobile-nav-link${isActive ? ' active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick(link.id)
                }}
                style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', borderRadius: 'var(--radius-sm)' }}
              >
                <span style={{ fontSize: '1.25rem', width: '28px', textAlign: 'center' }}>{link.icon}</span>
                <span style={{ fontWeight: isActive ? '700' : '500', fontSize: '1rem' }}>{link.label}</span>
                {isActive && (
                  <span style={{ marginLeft: 'auto', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-sage)' }}></span>
                )}
              </a>
            </li>
          )
        })}
      </ul>

      {/* Quick Info Badge */}
      <div style={{ padding: '14px', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', margin: '16px 0 20px 0', border: '1px solid var(--border-color)', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', color: 'var(--text-main)', fontWeight: 600 }}>
          <span>📍</span> Main Road, Near City Center, Akluj
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>⏰</span> Open Daily: 11:00 AM – 11:00 PM
        </div>
      </div>

      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button
          className="btn btn-outline"
          style={{ width: '100%', padding: '12px', minHeight: '44px' }}
          onClick={() => handleLinkClick('reservation')}
        >
          📅 Reserve Table
        </button>
        <button
          className="btn btn-pista"
          style={{ width: '100%', padding: '12px', minHeight: '44px' }}
          onClick={() => handleLinkClick('menu')}
        >
          🍽️ Order Online
        </button>
      </div>
    </div>
  )
}
