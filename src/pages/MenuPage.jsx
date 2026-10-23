import { useState, useRef, useEffect } from 'react'
import { categories, menuItems } from '../data/menuData.js'
import { useCart } from '../context/CartContext.jsx'
import { useNavigation } from '../context/NavigationContext.jsx'
import DishDetail from '../components/DishDetail.jsx'

export default function MenuPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDish, setSelectedDish] = useState(null)
  const savedScrollY = useRef(0)
  const { addToCart } = useCart()
  const { navigateTo } = useNavigation()

  // Support deep-linking or browser back/forward buttons for dishes
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash
      const match = hash.match(/dish[=-](\d+)/i)
      if (match) {
        const dishId = parseInt(match[1], 10)
        const found = menuItems.find((i) => i.id === dishId)
        if (found) {
          setSelectedDish(found)
        }
      } else if (selectedDish && !hash.includes('dish')) {
        setSelectedDish(null)
      }
    }

    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [selectedDish])

  const handleOpenDish = (dish) => {
    savedScrollY.current = window.scrollY
    setSelectedDish(dish)
    window.location.hash = `#/menu/dish-${dish.id}`
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const handleBackToMenu = () => {
    setSelectedDish(null)
    window.location.hash = '#/menu'
    setTimeout(() => {
      window.scrollTo({ top: savedScrollY.current, behavior: 'instant' })
    }, 15)
  }

  const allCategories = [{ id: 'all', label: 'All Items (49)' }, ...categories]

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeFilter === 'all' || item.category === activeFilter
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Full-screen dedicated Dish Detail View
  if (selectedDish) {
    return (
      <div className="page-content menu-page dish-detail-page-wrapper">
        <DishDetail
          dish={selectedDish}
          onBack={handleBackToMenu}
          onSelectDish={handleOpenDish}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
      </div>
    )
  }

  return (
    <div className="page-content menu-page">
      {/* Page Banner Header */}
      <div className="page-header">
        <div className="container">
          <div className="section-badge">🍽️ Freshly Prepared Every Day</div>
          <h1 className="page-title">Our Complete Café Menu</h1>
          <p className="page-subtitle">
            Explore all 7 handcrafted categories featuring our signature Pav Bhaji, fresh brews, gourmet sandwiches, burgers, crispy fries, and momos.
          </p>

          {/* Search & Filter bar */}
          <div className="menu-search-wrapper" style={{ maxWidth: '540px', margin: '0 auto 24px auto', position: 'relative' }}>
            <input
              type="text"
              className="form-input"
              placeholder="🔍 Search dishes (e.g. Cheese Pav Bhaji, Cold Coffee, Peri-Peri Fries)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                padding: '14px 20px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: '#ffffff',
                border: '1.5px solid var(--border-color)',
                boxShadow: 'var(--shadow-sm)',
                fontSize: '0.96rem',
                width: '100%',
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  fontSize: '1.2rem',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                }}
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="container page-body-container">
        {/* Category Tabs */}
        <div className="menu-filter-tabs" style={{ marginBottom: '36px', overflowX: 'auto', paddingBottom: '8px' }}>
          {allCategories.map((cat) => (
            <button
              key={cat.id}
              className={`tab-btn${activeFilter === cat.id ? ' active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
              style={{ whiteSpace: 'nowrap' }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Results Counter */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          <span>Showing <strong>{filteredItems.length}</strong> delicious item{filteredItems.length === 1 ? '' : 's'}</span>
          {activeFilter !== 'all' && (
            <button
              onClick={() => setActiveFilter('all')}
              style={{ color: 'var(--accent-sage)', fontWeight: 600, fontSize: '0.9rem' }}
            >
              Reset Category Filter ↺
            </button>
          )}
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '1px dashed var(--border-color)' }}>
            <span style={{ fontSize: '3rem', display: 'block', marginBottom: '12px' }}>🍽️</span>
            <h3 style={{ marginBottom: '8px' }}>No matching dishes found</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>Try searching with a different keyword or select another category tab.</p>
            <button className="btn btn-pista" onClick={() => { setSearchQuery(''); setActiveFilter('all'); }}>
              Clear Search &amp; Filters
            </button>
          </div>
        ) : (
          <div className="menu-grid" id="menuGrid">
            {filteredItems.map((item) => (
              <div
                className="menu-card"
                style={{ animation: 'fadeIn 0.3s ease forwards', cursor: 'pointer' }}
                key={item.id || item.name}
                onClick={() => handleOpenDish(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleOpenDish(item)
                  }
                }}
              >
                <div className="menu-card-img-wrapper">
                  <img
                    src={item.image}
                    alt={item.alt || item.name}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.onerror = null
                      e.currentTarget.src = '/images/hero_pav_bhaji_1786784364993.jpg'
                    }}
                  />
                  {item.ribbon && <span className="signature-ribbon">{item.ribbon}</span>}
                </div>
                <div className="menu-card-content">
                  <div className="menu-card-title-row">
                    <h3 className="menu-card-name">{item.name}</h3>
                    <span className="menu-card-price">₹{item.price}</span>
                  </div>
                  <p className="menu-card-desc">{item.desc}</p>
                  <div className="menu-card-action">
                    <button
                      className="btn btn-pista add-to-cart-btn"
                      onClick={(e) => {
                        e.stopPropagation()
                        addToCart({ name: item.name, price: item.price, image: item.image })
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quick bottom callout */}
        <div style={{ marginTop: '60px', padding: '32px', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '6px' }}>Planning a group visit or family lunch?</h3>
            <p style={{ color: 'var(--text-muted)' }}>Pre-book your favorite table in advance and get food served fresh on arrival.</p>
          </div>
          <button className="btn btn-dark" onClick={() => navigateTo('reservation')}>
            Reserve Table with Pre-Order
          </button>
        </div>
      </div>
    </div>
  )
}
