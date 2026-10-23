import { useCart } from '../context/CartContext.jsx'
import { useNavigation } from '../context/NavigationContext.jsx'
import { menuItems } from '../data/menuData.js'

const highlights = [
  {
    label: '100% Farm-Fresh Ingredients',
    text: 'Prepared exclusively using hand-selected fresh vegetables, proprietary house-ground spices, and pure golden Amul butter.',
    icon: '🥦',
  },
  {
    label: 'Cast-Iron Tawa Simmering',
    text: 'Slow-simmered on a classic heavy cast-iron tawa to lock in rich, authentic smoky Maharashtrian flavors.',
    icon: '🍳',
  },
  {
    label: 'Pure Golden Amul Butter',
    text: 'Folded with generous slabs of creamy Amul butter for an irresistible glossy texture and mouthwatering richness.',
    icon: '🧈',
  },
  {
    label: 'Ancestral 14-Herb Masala',
    text: 'Infused with our signature house spice masala blend formulated and perfected over years by Founder Samadhan Patil.',
    icon: '🌶️',
  },
  {
    label: 'Toasted Fluffy Pavs',
    text: 'Served steaming hot with ultra-soft pav buns toasted on tawa with sizzling butter, chopped red onions, and fresh lime.',
    icon: '🍞',
  },
  {
    label: 'Made Fresh To Order',
    text: 'Cooked fresh on the spot upon every single order to ensure unmatched aroma, temperature, and heartwarming satisfaction.',
    icon: '✨',
  },
]

export default function SignaturePage() {
  const { addToCart } = useCart()
  const { navigateTo } = useNavigation()

  // Get all Pav Bhaji items
  const pavBhajiItems = menuItems.filter((item) => item.category === 'pav-bhaji')

  return (
    <div className="page-content signature-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <div className="section-badge">⭐ Our Culinary Pride</div>
          <h1 className="page-title">The Legend of Cafe Nova Special Pav Bhaji</h1>
          <p className="page-subtitle">
            Akluj's most celebrated Pav Bhaji, crafted with authentic heritage recipe, pure golden butter, and slow-tawa simmering technique.
          </p>
        </div>
      </div>

      <div className="container page-body-container">
        {/* Main Feature Grid */}
        <div className="signature-grid">
          <div className="signature-image-container">
            <div className="signature-image-frame" style={{ boxShadow: 'var(--shadow-lg)' }}>
              <img src="/images/hero_pav_bhaji_1786784364993.jpg" alt="Our Signature Special Pav Bhaji" />
            </div>
            <div style={{ marginTop: '20px', padding: '16px 20px', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '2rem' }}>👨‍🍳</span>
              <div>
                <strong style={{ display: 'block', color: 'var(--accent-sage-dark)' }}>Crafted by Chef Samadhan Patil</strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Mastered recipe served to over 25,000+ happy patrons</span>
              </div>
            </div>
          </div>

          <div className="signature-content">
            <div className="section-badge">🧈 The Secret Behind The Taste</div>
            <h2 className="signature-title">Why Everyone in Akluj Loves It</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.02rem', marginBottom: '24px' }}>
              At Cafe Nova, our Pav Bhaji is not just a dish—it is an art form. We start with farm-picked potatoes, vine-ripened tomatoes, sweet green peas, and fresh bell peppers. Every batch is slow-simmered on a sizzling heavy cast-iron tawa with rich Amul butter and our proprietary spice masala until it achieves the perfect velvety consistency.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '32px' }}>
              {highlights.map((h) => (
                <div key={h.label} style={{ background: 'var(--bg-card)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '1.4rem', marginBottom: '6px' }}>{h.icon}</div>
                  <h4 style={{ fontSize: '0.98rem', marginBottom: '4px', color: 'var(--text-main)' }}>{h.label}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{h.text}</p>
                </div>
              ))}
            </div>

            <div className="signature-buttons">
              <button
                className="btn btn-pista add-to-cart-btn"
                onClick={() =>
                  addToCart({ name: 'Classic Pav Bhaji', price: 180, image: '/images/hero_pav_bhaji_1786784364993.jpg' })
                }
              >
                Order Classic Pav Bhaji (₹180)
              </button>
              <button
                className="btn btn-outline"
                onClick={() => navigateTo('menu')}
              >
                Explore Full Menu
              </button>
            </div>
          </div>
        </div>

        {/* All Pav Bhaji Varieties Section */}
        <div style={{ marginTop: '40px' }}>
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <div className="section-badge">🔥 Complete Pav Bhaji Lineup</div>
            <h2 className="section-title">Explore All 7 Pav Bhaji Varieties</h2>
            <p className="section-subtitle">
              From cheesy indulgence to smoky tandoori flavors, discover your favorite style.
            </p>
          </div>

          <div className="menu-grid">
            {pavBhajiItems.map((item) => (
              <div
                className="menu-card"
                key={item.id}
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  window.location.hash = `#/menu/dish-${item.id}`
                  navigateTo('menu')
                }}
              >
                <div className="menu-card-img-wrapper">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
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
        </div>
      </div>
    </div>
  )
}
