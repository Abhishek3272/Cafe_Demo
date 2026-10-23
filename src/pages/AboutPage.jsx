import { useNavigation } from '../context/NavigationContext.jsx'

export default function AboutPage({ onOpenLightbox }) {
  const { navigateTo } = useNavigation()

  const values = [
    {
      icon: '🌱',
      title: 'Farm-Fresh Quality',
      desc: 'We procure daily-harvested vegetables, fresh dairy, and top-tier ingredients to ensure uncompromised freshness in every bite.',
    },
    {
      icon: '✨',
      title: 'Flawless Hygiene',
      desc: 'Our open kitchen follows strict cleanliness protocols, sanitized cookware, and purified water for food and beverage preparation.',
    },
    {
      icon: '🤝',
      title: 'Warm Hospitality',
      desc: 'We treat every guest like family, providing prompt service, comfortable plush seating, and a heartwarming ambiance.',
    },
    {
      icon: '❤️',
      title: 'Community Heart in Akluj',
      desc: 'Created as a welcoming social haven for local families, college youth, couples, and celebration gatherings in Akluj.',
    },
  ]

  const stats = [
    { number: '25,000+', label: 'Happy Guests Served' },
    { number: '49', label: 'Artisanal Dishes & Brews' },
    { number: '350+', label: 'Birthday & Event Setups' },
    { number: '4.9 ★', label: 'Average Customer Rating' },
  ]

  return (
    <div className="page-content about-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <div className="section-badge">🌿 Our Story &amp; Passion</div>
          <h1 className="page-title">About Cafe Nova Akluj</h1>
          <p className="page-subtitle">
            A homegrown café born from a passion for authentic Maharashtrian street food elevated with modern culinary flair and welcoming hospitality.
          </p>
        </div>
      </div>

      <div className="container page-body-container">
        {/* Founder & Story Section - Editorial Centered Layout */}
        <div className="founder-story-card page-section-block">
          <div className="founder-story-inner">
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <img
                src="/images/cafe-nova-logo.png"
                alt="Cafe Nova - The Celebration House Official Emblem"
                style={{
                  width: '120px',
                  height: '120px',
                  aspectRatio: '1 / 1',
                  objectFit: 'contain',
                  borderRadius: '50%',
                  boxShadow: '0 8px 24px rgba(30, 50, 28, 0.14)',
                }}
                onError={(e) => {
                  if (!e.currentTarget.src.includes('cafe-nova-logo.svg')) {
                    e.currentTarget.src = '/images/cafe-nova-logo.svg'
                  }
                }}
              />
            </div>

            <div className="section-badge" style={{ display: 'inline-flex', marginBottom: '20px' }}>
              👨‍🍳 The Founder's Journey
            </div>
            
            <h2 className="founder-story-quote">
              "Food brings people together; great taste keeps them connected."
            </h2>

            <div className="founder-story-divider" aria-hidden="true">
              <span className="founder-divider-line"></span>
              <span className="founder-divider-icon">☕</span>
              <span className="founder-divider-line"></span>
            </div>

            <div className="founder-story-body">
              <p>
                Cafe Nova was founded by Shubham Ghadage with a singular vision: to give Akluj a premier dining destination where families, friends, and food lovers could enjoy restaurant-grade cleanliness, luxurious comfortable seating, and heartwarming comfort dishes.
              </p>
              <p>
                Having spent years perfecting secret spice blends, particularly the iconic Special Pav Bhaji recipe that has become synonymous with Akluj, our culinary team continues to oversee daily kitchen operations ensuring every plate meets the highest standard.
              </p>
            </div>

            <div className="founder-signature-block">
              <div className="founder-name">Shubham Ghadage</div>
              <div className="founder-role">Founder of Cafe Nova</div>
            </div>

            <div className="founder-actions">
              <button className="btn btn-pista" onClick={() => navigateTo('menu')}>
                Explore Our Menu
              </button>
              <button className="btn btn-outline" onClick={() => navigateTo('reservation')}>
                Book A Table
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="about-stats-card page-section-block">
          <div className="about-stats-grid" style={{ textAlign: 'center' }}>
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--accent-sage-dark)', marginBottom: '4px' }}>
                  {s.number}
                </div>
                <div style={{ fontSize: '0.92rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="page-section-block">
          <div className="text-center" style={{ marginBottom: '32px' }}>
            <div className="section-badge">⭐ Our Core Principles</div>
            <h2 className="section-title">The Four Pillars of Cafe Nova</h2>
            <p className="section-subtitle">
              Every dish we serve and every guest we welcome is guided by these unwavering standards.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '20px' }}>
            {values.map((v) => (
              <div key={v.title} style={{ background: 'var(--bg-card)', padding: '28px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '2.4rem', marginBottom: '12px' }}>{v.icon}</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-main)' }}>{v.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Café Ambience & Spaces Section */}
        <div className="page-section-block">
          <div className="text-center" style={{ marginBottom: '32px' }}>
            <div className="section-badge">✨ Architectural Spaces &amp; Atmosphere</div>
            <h2 className="section-title">Experience The Ambience of Cafe Nova</h2>
            <p className="section-subtitle">
              Designed from the ground up as Akluj's premier Celebration House — harmonizing modern outdoor architecture with a floral botanical dining interior.
            </p>
          </div>

          <div className="ambience-grid">
            <div
              style={{ background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', overflow: 'hidden', cursor: 'pointer' }}
              onClick={() => onOpenLightbox && onOpenLightbox('/images/IMG-20260912-WA0000.jpg')}
            >
              <div style={{ position: 'relative', height: '260px' }}>
                <img
                  src="/images/IMG-20260912-WA0000.jpg"
                  alt="Cafe Nova Exterior Facade & Celebration House in Akluj"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src = '/images/setup_medium_decor_1786793077823.jpg'
                  }}
                />
                <span style={{ position: 'absolute', bottom: '12px', right: '12px', background: 'rgba(255,255,255,0.92)', color: 'var(--text-main)', padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 600 }}>
                  🔍 View Facade
                </span>
              </div>
              <div style={{ padding: '24px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent-sage-dark)', letterSpacing: '0.5px' }}>Exterior &amp; Terrace</span>
                <h3 style={{ fontSize: '1.25rem', marginTop: '4px', marginBottom: '8px', color: 'var(--text-main)' }}>The Celebration House Facade</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                  Two storeys of modern architecture featuring warm step lights, illuminated 3D food emblems, and an open-air balcony terrace overlooking Akluj.
                </p>
              </div>
            </div>

            <div
              style={{ background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', overflow: 'hidden', cursor: 'pointer' }}
              onClick={() => onOpenLightbox && onOpenLightbox('/images/IMG-20260912-WA0001.jpg')}
            >
              <div style={{ position: 'relative', height: '260px' }}>
                <img
                  src="/images/IMG-20260912-WA0001.jpg"
                  alt="Cafe Nova Dining Lounge & Floral Chandeliers in Akluj"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src = '/images/hero_cafe_ambience_1786792106662.jpg'
                  }}
                />
                <span style={{ position: 'absolute', bottom: '12px', right: '12px', background: 'rgba(255,255,255,0.92)', color: 'var(--text-main)', padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 600 }}>
                  🔍 View Interior
                </span>
              </div>
              <div style={{ padding: '24px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent-sage-dark)', letterSpacing: '0.5px' }}>Interior Dining</span>
                <h3 style={{ fontSize: '1.25rem', marginTop: '4px', marginBottom: '8px', color: 'var(--text-main)' }}>Plush Velvet Seating &amp; Floral Trellis</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                  A soothing pistachio-green dining lounge with romantic cascading floral chandeliers, plush velvet banquettes, and an artisanal cake counter.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Location snippet */}
        <div style={{ background: 'linear-gradient(135deg, var(--bg-card) 0%, #eaf4ed 100%)', padding: '40px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <span style={{ fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent-sage)', letterSpacing: '0.5px' }}>Visit Us Today</span>
            <h3 style={{ fontSize: '1.6rem', marginTop: '4px', marginBottom: '8px' }}>Experience Cafe Nova in Person</h3>
            <p style={{ color: 'var(--text-muted)' }}>Main Road, Near City Center, Akluj, Maharashtra • Open 11:00 AM – 11:00 PM Daily</p>
          </div>
          <button className="btn btn-pista" onClick={() => navigateTo('reservation')}>
            Reserve Your Table
          </button>
        </div>
      </div>
    </div>
  )
}
