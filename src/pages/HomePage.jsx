import { useNavigation } from '../context/NavigationContext.jsx'
import { useCart } from '../context/CartContext.jsx'
import { menuItems } from '../data/menuData.js'
import { packages } from '../data/packagesData.js'

export default function HomePage({ onOpenLightbox }) {
  const { navigateTo } = useNavigation()
  const { addToCart } = useCart()

  // Featured top picks
  const featuredDishes = menuItems.filter((item) => item.ribbon || item.id === 1 || item.id === 3 || item.id === 9 || item.id === 15 || item.id === 29 || item.id === 43).slice(0, 4)

  return (
    <div className="page-content home-page">
      {/* Hero Section */}
      <section className="hero-section" id="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="section-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <img
                src="/images/cafe-nova-logo.png"
                alt="Cafe Nova Logo"
                style={{ width: '24px', height: '24px', aspectRatio: '1 / 1', objectFit: 'contain', borderRadius: '50%' }}
                onError={(e) => {
                  if (!e.currentTarget.src.includes('cafe-nova-logo.svg')) {
                    e.currentTarget.src = '/images/cafe-nova-logo.svg'
                  }
                }}
              />
              <span>The Celebration House • Akluj</span>
            </div>
            <h1 className="hero-headline">
              Experience Warm Café Ambience, Great Food &amp;{' '}
              <span className="text-gradient">Family Dining</span>
            </h1>
            <p className="hero-description">
              Welcome to Cafe Nova Akluj — where elegant interior design, comfortable plush
              seating, artisanal coffee, signature Pav Bhaji, and unforgettable birthday
              celebrations come together in a warm, welcoming atmosphere.
            </p>
            <div className="hero-buttons">
              <button
                className="btn btn-pista"
                onClick={() => navigateTo('signature')}
              >
                Explore Special Pav Bhaji
              </button>
              <button
                className="btn btn-outline"
                onClick={() => navigateTo('menu')}
              >
                View Full Menu
              </button>
              <button
                className="btn btn-dark"
                onClick={() => navigateTo('reservation')}
              >
                Reserve A Table
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-icon">☕</div>
                <div>
                  <div className="stat-text">Artisanal Coffee &amp; Food</div>
                  <div className="stat-subtext">Freshly prepared to order</div>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">🎉</div>
                <div>
                  <div className="stat-text">Birthday Celebrations</div>
                  <div className="stat-subtext">Custom setup designs</div>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">👨‍👩‍👧‍👦</div>
                <div>
                  <div className="stat-text">Family Dining</div>
                  <div className="stat-subtext">Comfortable warm space</div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-image-card" style={{ position: 'relative' }}>
              <img
                src="/images/WhatsApp Image 2026-09-16 at 12.30.57 PM.jpeg"
                alt="Cafe Nova Interior Ambience"
                style={{ cursor: 'pointer', transition: 'opacity 0.3s ease' }}
                onClick={() => onOpenLightbox && onOpenLightbox('/images/WhatsApp Image 2026-09-16 at 12.30.57 PM.jpeg')}
                onError={(e) => {
                  e.currentTarget.onerror = null
                  e.currentTarget.src = '/images/nova_interior_ambience.jpg'
                }}
              />

              {/* Ambience Control: Interior Lounge & View */}
              <div className="hero-ambience-switcher" style={{ position: 'absolute', top: '14px', left: '14px', right: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 3, pointerEvents: 'auto' }}>
                <div style={{ display: 'inline-flex', background: 'rgba(255, 255, 255, 0.94)', backdropFilter: 'blur(8px)', padding: '4px', borderRadius: 'var(--radius-full)', border: '1px solid rgba(210, 232, 216, 0.8)', boxShadow: 'var(--shadow-sm)' }}>
                  <div
                    className="hero-ambience-badge"
                    style={{
                      padding: '6px 14px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      background: 'var(--accent-sage-dark)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span>🌿</span> Interior Lounge
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenLightbox && onOpenLightbox('/images/WhatsApp Image 2026-09-16 at 12.30.57 PM.jpeg')}
                  style={{
                    background: 'rgba(0, 0, 0, 0.55)',
                    backdropFilter: 'blur(6px)',
                    color: '#ffffff',
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    border: 'none',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                  title="Click to view in lightbox"
                >
                  <span>🔍</span> View
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Highlight Banner */}
      <section className="signature-highlight-banner">
        <div className="container">
          <div className="signature-grid" style={{ alignItems: 'center' }}>
            <div className="signature-image-container">
              <div className="signature-image-frame" style={{ boxShadow: 'var(--shadow-lg)' }}>
                <img src="/images/hero_pav_bhaji_1786784364993.jpg" alt="Special Pav Bhaji Cafe Nova" />
              </div>
            </div>
            <div className="signature-content">
              <div className="section-badge">⭐ Crown Specialty</div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Our Famous Signature Pav Bhaji</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '20px' }}>
                Hand-mashed on a traditional cast-iron tawa with farm-fresh vegetables, secret 14-herb Maharashtrian spices, and generous slabs of golden Amul butter. Served steaming hot with fluffy butter pav.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
                <span style={{ padding: '6px 14px', background: '#ffffff', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-color)', fontSize: '0.88rem', fontWeight: 600, color: 'var(--accent-sage-dark)' }}>
                  🧈 Pure Amul Butter
                </span>
                <span style={{ padding: '6px 14px', background: '#ffffff', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-color)', fontSize: '0.88rem', fontWeight: 600, color: 'var(--accent-sage-dark)' }}>
                  🌿 100% Pure Veg
                </span>
                <span style={{ padding: '6px 14px', background: '#ffffff', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-color)', fontSize: '0.88rem', fontWeight: 600, color: 'var(--accent-sage-dark)' }}>
                  🔥 Cast-Iron Tawa Simmered
                </span>
              </div>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button
                  className="btn btn-pista"
                  onClick={() => addToCart({ name: 'Classic Pav Bhaji', price: 180, image: '/images/hero_pav_bhaji_1786784364993.jpg' })}
                >
                  Order Now (₹180)
                </button>
                <button
                  className="btn btn-outline"
                  onClick={() => navigateTo('signature')}
                >
                  Learn Our Recipe Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Café Ambience Showcase Section */}
      <section className="ambience-section" id="ambience">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '780px', margin: '0 auto 40px auto' }}>
            <div className="section-badge">✨ Iconic Akluj Ambience</div>
            <h2 className="section-title">Step Inside Cafe Nova: The Celebration House</h2>
            <p className="section-subtitle">
              From our illuminated two-storey architectural facade to our lush pistachio-green dining lounge under romantic floral chandeliers, experience a destination crafted for delightful conversations and celebrations.
            </p>
          </div>

          <div className="ambience-grid">
            {/* Ambience Card 1: Exterior Facade */}
            <div className="ambience-card">
              <div
                style={{ position: 'relative', height: '300px', cursor: 'pointer', overflow: 'hidden' }}
                onClick={() => onOpenLightbox && onOpenLightbox('/images/IMG-20260912-WA0000.jpg')}
              >
                <img
                  src="/images/IMG-20260912-WA0000.jpg"
                  alt="Cafe Nova Celebration House Exterior Facade in Akluj"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onError={(e) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src = '/images/setup_medium_decor_1786793077823.jpg'
                  }}
                />
                <span style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(14, 24, 15, 0.85)', backdropFilter: 'blur(8px)', color: '#ffffff', padding: '5px 14px', borderRadius: 'var(--radius-full)', fontSize: '0.82rem', fontWeight: 600 }}>
                  🏛️ Exterior Facade &amp; Terrace
                </span>
                <span style={{ position: 'absolute', bottom: '16px', right: '16px', background: 'rgba(255, 255, 255, 0.92)', color: 'var(--text-main)', padding: '6px 14px', borderRadius: 'var(--radius-full)', fontSize: '0.78rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', boxShadow: 'var(--shadow-sm)' }}>
                  🔍 View Full Photo
                </span>
              </div>
              <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.45rem', marginBottom: '10px' }}>
                    Two-Storey Celebration House &amp; Balcony
                  </h3>
                  <p style={{ fontSize: '0.96rem', lineHeight: '1.7', marginBottom: '20px' }}>
                    A landmark modern structure in Akluj adorned with illuminated 3D branding, dedicated food icon signs, embedded ambient step lighting, and an open second-floor terrace balcony for fresh-air evenings.
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                    <span className="ambience-tag">✨ Glowing 3D Neon Signage</span>
                    <span className="ambience-tag">🌙 Open Terrace Balcony</span>
                    <span className="ambience-tag">📍 City Center Akluj</span>
                  </div>
                </div>
                <div className="ambience-card-actions" style={{ display: 'flex', gap: '12px' }}>
                  <button
                    className="btn btn-pista"
                    style={{ flex: 1 }}
                    onClick={() => navigateTo('reservation')}
                  >
                    Reserve Table
                  </button>
                  <button
                    className="btn btn-outline"
                    style={{ borderColor: 'rgba(255, 255, 255, 0.35)', color: '#ffffff' }}
                    onClick={() => onOpenLightbox && onOpenLightbox('/images/IMG-20260912-WA0000.jpg')}
                  >
                    Enlarge Photo
                  </button>
                </div>
              </div>
            </div>

            {/* Ambience Card 2: Interior Dining */}
            <div className="ambience-card">
              <div
                style={{ position: 'relative', height: '300px', cursor: 'pointer', overflow: 'hidden' }}
                onClick={() => onOpenLightbox && onOpenLightbox('/images/WhatsApp Image 2026-09-16 at 12.30.57 PM.jpeg')}
              >
                <img
                  src="/images/WhatsApp Image 2026-09-16 at 12.30.57 PM.jpeg"
                  alt="Cafe Nova Interior Dining and Floral Chandeliers in Akluj"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onError={(e) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src = '/images/nova_interior_ambience.jpg'
                  }}
                />
                <span style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(14, 24, 15, 0.85)', backdropFilter: 'blur(8px)', color: '#ffffff', padding: '5px 14px', borderRadius: 'var(--radius-full)', fontSize: '0.82rem', fontWeight: 600 }}>
                  🌿 Interior Lounge &amp; Dining
                </span>
                <span style={{ position: 'absolute', bottom: '16px', right: '16px', background: 'rgba(255, 255, 255, 0.92)', color: 'var(--text-main)', padding: '6px 14px', borderRadius: 'var(--radius-full)', fontSize: '0.78rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', boxShadow: 'var(--shadow-sm)' }}>
                  🔍 View Full Photo
                </span>
              </div>
              <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.45rem', marginBottom: '10px' }}>
                    Plush Velvet Seating &amp; Floral Trellis
                  </h3>
                  <p style={{ fontSize: '0.96rem', lineHeight: '1.7', marginBottom: '20px' }}>
                    Step into an enchanting pastel green haven styled with cascading floral chandeliers, plush pistachio-green velvet banquet sofas, marble-topped tables, and our illuminated gourmet cake &amp; pastry display.
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                    <span className="ambience-tag">🌸 Floral Chandelier Ceiling</span>
                    <span className="ambience-tag">🛋️ Velvet Booths &amp; Sofas</span>
                    <span className="ambience-tag">🍰 Gourmet Cake Counter</span>
                  </div>
                </div>
                <div className="ambience-card-actions" style={{ display: 'flex', gap: '12px' }}>
                  <button
                    className="btn btn-pista"
                    style={{ flex: 1 }}
                    onClick={() => navigateTo('reservation')}
                  >
                    Reserve Booth
                  </button>
                  <button
                    className="btn btn-outline"
                    style={{ borderColor: 'rgba(255, 255, 255, 0.35)', color: '#ffffff' }}
                    onClick={() => onOpenLightbox && onOpenLightbox('/images/WhatsApp Image 2026-09-16 at 12.30.57 PM.jpeg')}
                  >
                    Enlarge Photo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Picks */}
      <section className="section-padding menu-section">
        <div className="container">
          <div className="text-center">
            <div className="section-badge">🍽️ Chef's Top Picks</div>
            <h2 className="section-title">Popular Favorites</h2>
            <p className="section-subtitle">
              A curated preview of our guests' most beloved dishes across our 7 gourmet categories.
            </p>
          </div>

          <div className="menu-grid">
            {featuredDishes.map((item) => (
              <div className="menu-card" key={item.id}>
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
                      onClick={() => addToCart({ name: item.name, price: item.price, image: item.image })}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '36px' }}>
            <button
              className="btn btn-outline"
              style={{ padding: '12px 32px', fontSize: '0.96rem' }}
              onClick={() => navigateTo('menu')}
            >
              Explore Full 49-Dish Menu →
            </button>
          </div>
        </div>
      </section>

      {/* Birthday Celebration Teaser */}
      <section className="birthday-section">
        <div className="container">
          <div className="text-center">
            <div className="section-badge">🎉 Celebrate With Us</div>
            <h2 className="section-title">Birthday &amp; Event Setups</h2>
            <p className="section-subtitle">
              Transform your special days into unforgettable memories with our bespoke ambient setups.
            </p>
          </div>

          <div className="packages-grid">
            {packages.slice(0, 3).map((pkg) => (
              <div className="package-card" key={pkg.name}>
                <div className="package-card-header">
                  <img src={pkg.image} alt={pkg.alt} />
                  <span className="package-tag">{pkg.tag}</span>
                </div>
                <div className="package-card-body">
                  <h3 className="package-name">{pkg.name}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '16px' }}>
                    {pkg.features.slice(0, 3).join(' • ')}
                  </p>
                  <div className="package-card-footer">
                    <button
                      className="btn btn-pista"
                      style={{ width: '100%' }}
                      onClick={() => navigateTo('birthday')}
                    >
                      View Package Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Reservation Callout */}
      <section className="cta-section">
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', position: 'relative', zIndex: 2 }}>
          <span style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.22)', borderRadius: 'var(--radius-full)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px', color: '#e5f3e8', backdropFilter: 'blur(8px)' }}>
            📍 Visit Us in Akluj
          </span>
          <h2 style={{ color: '#ffffff', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '16px', textShadow: '0 2px 14px rgba(0,0,0,0.3)' }}>
            Book Your Table For An Unforgettable Dining Experience
          </h2>
          <p style={{ color: '#d8edd9', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '32px' }}>
            Join us for artisanal coffee, delicious Pav Bhaji, fresh sandwiches, and delightful desserts in our cozy, family-friendly ambience.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              className="btn btn-pista"
              style={{ padding: '14px 32px' }}
              onClick={() => navigateTo('reservation')}
            >
              Reserve Table Now
            </button>
            <button
              className="btn btn-outline"
              style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#ffffff', padding: '14px 32px' }}
              onClick={() => navigateTo('about')}
            >
              Learn About Cafe Nova
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
