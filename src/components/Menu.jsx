import { useState } from 'react'
import { categories, menuItems } from '../data/menuData.js'
import { useCart } from '../context/CartContext.jsx'

export default function Menu() {
  const [activeFilter, setActiveFilter] = useState('pav-bhaji')
  const { addToCart } = useCart()

  const visibleItems = menuItems.filter((item) => item.category === activeFilter)

  return (
    <section className="menu-section" id="menu">
      <div className="container">
        <div className="text-center">
          <div className="section-badge">🍽️ Explore Our Categories</div>
          <h2 className="section-title">Café Menu</h2>
          <p className="section-subtitle">
            Select a category tab to view up to 7 signature items per category.
          </p>
        </div>

        <div className="menu-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`tab-btn${activeFilter === cat.id ? ' active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="menu-grid" id="menuGrid">
          {visibleItems.map((item) => (
            <div className="menu-card" style={{ animation: 'fadeIn 0.3s ease forwards' }} key={item.id || item.name}>
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
                    onClick={() =>
                      addToCart({ name: item.name, price: item.price, image: item.image })
                    }
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
