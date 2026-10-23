export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="section-badge">🌿 Akluj's Favorite Family Café</div>
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
            <a href="#signature" className="btn btn-pista">
              Explore Special Pav Bhaji
            </a>
            <a href="#birthday" className="btn btn-outline">
              View Birthday Setups
            </a>
            <a
              href="#reservation"
              className="btn btn-dark"
            >
              Reserve A Table
            </a>
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
          <div className="hero-image-card">
            <img src="/images/hero_cafe_ambience_1786792106662.jpg" alt="Cafe Nova Akluj Premium Ambience" />
          </div>
        </div>
      </div>
    </section>
  )
}
