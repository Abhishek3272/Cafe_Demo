import { navLinks } from '../data/navLinks.js'
import { useCart } from '../context/CartContext.jsx'
import { useNavigation } from '../context/NavigationContext.jsx'

export default function Header({ scrolled, onOpenMobileMenu }) {
  const { totalCount, openCart } = useCart()
  const { currentPage, navigateTo } = useNavigation()

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="header">
      <div className="container header-container">
        <a
          href="#/"
          className="brand-logo"
          onClick={(e) => {
            e.preventDefault()
            navigateTo('home')
          }}
          aria-label="Cafe Nova Home"
        >
          <img
            src="/images/cafe-nova-logo.png"
            alt="Cafe Nova - The Celebration House"
            className="brand-logo-img"
            width="52"
            height="52"
            onError={(e) => {
              if (!e.currentTarget.src.includes('cafe-nova-logo.svg')) {
                e.currentTarget.src = '/images/cafe-nova-logo.svg'
              }
            }}
          />
          <div className="brand-logo-text">
            <span className="brand-name">Cafe Nova</span>
            <span className="brand-tagline">THE CELEBRATION HOUSE • AKLUJ</span>
          </div>
        </a>

        <nav className="desktop-nav">
          <ul className="nav-links">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id
              return (
                <li key={link.id}>
                  <a
                    href={link.path}
                    className={`nav-link${isActive ? ' active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault()
                      navigateTo(link.id)
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="header-actions">
          <button className="cart-trigger-btn" aria-label="Shopping Cart" onClick={openCart}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span className="cart-count-badge">{totalCount}</span>
          </button>

          <button
            className="btn btn-outline desktop-only-action"
            onClick={() => navigateTo('reservation')}
          >
            Reserve Table
          </button>
          <button
            className="btn btn-pista desktop-only-action"
            onClick={() => navigateTo('menu')}
          >
            Order Online
          </button>

          <button className="mobile-menu-toggle" aria-label="Toggle Navigation" onClick={onOpenMobileMenu}>
            ☰
          </button>
        </div>
      </div>
    </header>
  )
}
