import { useNavigation } from '../context/NavigationContext.jsx'

export default function Footer() {
  const { navigateTo } = useNavigation()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div
              className="brand-logo"
              style={{ color: '#ffffff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}
              onClick={() => navigateTo('home')}
            >
              <img
                src="/images/cafe-nova-logo.png"
                alt="Cafe Nova - The Celebration House"
                style={{
                  width: '56px',
                  height: '56px',
                  aspectRatio: '1 / 1',
                  objectFit: 'contain',
                  borderRadius: '50%',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                  flexShrink: 0,
                }}
                onError={(e) => {
                  if (!e.currentTarget.src.includes('cafe-nova-logo.svg')) {
                    e.currentTarget.src = '/images/cafe-nova-logo.svg'
                  }
                }}
              />
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.1 }}>
                  Cafe Nova
                </div>
                <div style={{ fontSize: '0.68rem', letterSpacing: '2px', color: 'var(--accent-pista-light)', textTransform: 'uppercase', marginTop: '3px', fontWeight: 600 }}>
                  The Celebration House • Akluj
                </div>
              </div>
            </div>
            <p>
              An elegant, warm, and family-friendly café in Akluj famous for Special Pav Bhaji,
              fresh gourmet food, artisanal coffee, and birthday celebration setups.
            </p>
          </div>

          <div>
            <h4 className="footer-title">Pages &amp; Navigation</h4>
            <ul className="footer-links">
              <li><button onClick={() => navigateTo('home')} style={{ color: 'inherit' }}>Home</button></li>
              <li><button onClick={() => navigateTo('menu')} style={{ color: 'inherit' }}>Café Menu (49 Items)</button></li>
              <li><button onClick={() => navigateTo('signature')} style={{ color: 'inherit' }}>Signature Pav Bhaji</button></li>
              <li><button onClick={() => navigateTo('birthday')} style={{ color: 'inherit' }}>Birthday &amp; Events</button></li>
              <li><button onClick={() => navigateTo('gallery')} style={{ color: 'inherit' }}>Photo Gallery</button></li>
              <li><button onClick={() => navigateTo('about')} style={{ color: 'inherit' }}>About Us &amp; Founder</button></li>
              <li><button onClick={() => navigateTo('blogs')} style={{ color: 'inherit' }}>Blogs &amp; News</button></li>
              <li><button onClick={() => navigateTo('reservation')} style={{ color: 'inherit' }}>Table Reservation</button></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Menu Categories</h4>
            <ul className="footer-links">
              <li><button onClick={() => navigateTo('menu')} style={{ color: 'inherit' }}>Signature Pav Bhaji</button></li>
              <li><button onClick={() => navigateTo('menu')} style={{ color: 'inherit' }}>Artisanal Coffee &amp; Beverages</button></li>
              <li><button onClick={() => navigateTo('menu')} style={{ color: 'inherit' }}>Decadent Desserts</button></li>
              <li><button onClick={() => navigateTo('menu')} style={{ color: 'inherit' }}>Gourmet Sandwiches &amp; Burgers</button></li>
              <li><button onClick={() => navigateTo('menu')} style={{ color: 'inherit' }}>Crispy Fries &amp; Momos</button></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Visit Us In Akluj</h4>
            <p style={{ color: '#a3b0a7', fontSize: '0.92rem', lineHeight: 1.6 }}>
              Main Road, Near City Center, Akluj, Maharashtra
              <br />
              <strong>Open 7 Days:</strong> 11:00 AM – 11:00 PM
              <br />
              <strong>Phone:</strong> +91 98765 43210
            </p>
            <div style={{ marginTop: '16px' }}>
              <button
                className="btn btn-pista"
                style={{ padding: '8px 20px', fontSize: '0.88rem' }}
                onClick={() => navigateTo('reservation')}
              >
                Book Table
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 Cafe Nova Akluj. All rights reserved. Founder Shubham Ghadage.</div>
          <div>Elegant • Warm • Family-Friendly • Pista Theme</div>
        </div>
      </div>
    </footer>
  )
}
