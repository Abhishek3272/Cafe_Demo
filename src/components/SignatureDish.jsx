import { useCart } from '../context/CartContext.jsx'

const highlights = [
  {
    label: 'Ingredients',
    text: 'Prepared exclusively using hand-selected farm-fresh vegetables, proprietary house spices, and pure golden Amul butter.',
  },
  {
    label: 'Traditional Preparation',
    text: 'Slow-simmered on a classic heavy cast-iron tawa to lock in rich, authentic smoky flavors.',
  },
  {
    label: 'Fresh Vegetables',
    text: 'Made with daily harvested potatoes, vine-ripened tomatoes, sweet green peas, and crisp capsicum.',
  },
  {
    label: 'Pure Butter',
    text: 'Folded with generous slabs of creamy Amul butter for an irresistible glossy texture and rich mouthfeel.',
  },
  {
    label: 'Authentic Spices',
    text: 'Infused with our house-ground spice masala crafted from an ancestral Maharashtrian recipe.',
  },
  {
    label: 'Unmatched Flavor',
    text: 'A tantalizing harmony of savory richness, vibrant tanginess, and subtle aromatic spice warmth.',
  },
  {
    label: 'Exclusive House Recipe',
    text: 'Signature small-batch cooking technique developed exclusively by Chef Samadhan Patil.',
  },
  {
    label: 'Café Tradition',
    text: 'Upholding years of culinary passion, home-style comfort, and authentic street-food heritage.',
  },
  {
    label: 'Customer Experience',
    text: 'Served steaming hot with butter-toasted pav rolls, freshly chopped red onions, and crisp lime.',
  },
  {
    label: 'Customer Satisfaction',
    text: 'Cooked fresh to order to ensure complete delight and heartwarming happiness in every single bite.',
  },
]

const IMAGE = '/images/hero_pav_bhaji_1786784364993.jpg'

export default function SignatureDish() {
  const { addToCart } = useCart()

  return (
    <section className="signature-section" id="signature">
      <div className="container signature-grid">
        <div className="signature-image-container">
          <div className="signature-image-frame">
            <img src={IMAGE} alt="Our Signature Special Pav Bhaji" />
          </div>
        </div>

        <div className="signature-content">
          <div className="section-badge">Our Signature Pav Bhaji</div>
          <h2 className="signature-title">Special Pav Bhaji</h2>

          <div
            style={{
              fontSize: '0.98rem',
              color: 'var(--text-muted)',
              lineHeight: 1.8,
              marginBottom: '28px',
              background: 'var(--bg-card)',
              padding: '24px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)',
            }}
          >
            {highlights.map((item, index) => (
              <p
                key={item.label}
                style={{ marginBottom: index === highlights.length - 1 ? 0 : '10px' }}
              >
                • <strong>{item.label}:</strong> {item.text}
              </p>
            ))}
          </div>

          <div className="signature-buttons">
            <button
              className="btn btn-pista add-to-cart-btn"
              onClick={() =>
                addToCart({ name: 'Special Pav Bhaji', price: 220, image: IMAGE })
              }
            >
              Order Special Pav Bhaji (₹220)
            </button>
            <a href="#menu" className="btn btn-outline">
              Explore Full Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
