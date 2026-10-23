import { useNavigation } from '../context/NavigationContext.jsx'
import { useCart } from '../context/CartContext.jsx'

export default function BottomNav({ onOpenMobileMenu }) {
  const { currentPage, navigateTo } = useNavigation()
  const { totalCount, openCart } = useCart()

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile Navigation Bar" id="mobileBottomNav">
      <button
        type="button"
        className={`bottom-nav-item${currentPage === 'home' ? ' active' : ''}`}
        onClick={() => navigateTo('home')}
        aria-label="Home"
      >
        <span className="bottom-nav-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </span>
        <span className="bottom-nav-label">Home</span>
      </button>

      <button
        type="button"
        className={`bottom-nav-item${currentPage === 'menu' ? ' active' : ''}`}
        onClick={() => navigateTo('menu')}
        aria-label="Menu"
      >
        <span className="bottom-nav-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
            <line x1="6" y1="1" x2="6" y2="4"></line>
            <line x1="10" y1="1" x2="10" y2="4"></line>
            <line x1="14" y1="1" x2="14" y2="4"></line>
          </svg>
        </span>
        <span className="bottom-nav-label">Menu</span>
      </button>

      <button
        type="button"
        className={`bottom-nav-item${currentPage === 'reservation' ? ' active' : ''}`}
        onClick={() => navigateTo('reservation')}
        aria-label="Reservation"
      >
        <span className="bottom-nav-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        </span>
        <span className="bottom-nav-label">Reserve</span>
      </button>

      <button
        type="button"
        className="bottom-nav-item bottom-nav-cart-item"
        onClick={openCart}
        aria-label={`Cart with ${totalCount} items`}
      >
        <span className="bottom-nav-icon" style={{ position: 'relative' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          {totalCount > 0 && <span className="bottom-nav-badge">{totalCount}</span>}
        </span>
        <span className="bottom-nav-label">Cart</span>
      </button>

      <button
        type="button"
        className="bottom-nav-item"
        onClick={onOpenMobileMenu}
        aria-label="More Pages and Options"
      >
        <span className="bottom-nav-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </span>
        <span className="bottom-nav-label">More</span>
      </button>
    </nav>
  )
}
