import { useState } from 'react'
import { galleryItems } from '../data/galleryData.js'

export default function GalleryPage({ onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'Ambience', label: 'Café Ambience' },
    { id: 'Food', label: 'Food & Signature Dishes' },
    { id: 'Celebrations', label: 'Birthday & Events' },
    { id: 'Dining', label: 'Guest Moments' },
  ]

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === 'all') return true
    return item.category.toLowerCase().includes(activeCategory.toLowerCase())
  })

  return (
    <div className="page-content gallery-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <div className="section-badge">📸 Real Café Moments In Akluj</div>
          <h1 className="page-title">Cafe Nova Visual Gallery</h1>
          <p className="page-subtitle">
            Immerse yourself in our plush pista-green interior, appetizing artisanal dishes, cozy seating corners, and lively birthday party setups.
          </p>
        </div>
      </div>

      <div className="container page-body-container">
        {/* Category Filters */}
        <div className="menu-filter-tabs" style={{ marginBottom: '36px' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`tab-btn${activeCategory === cat.id ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div
              className="gallery-item"
              key={item.title}
              onClick={() => onOpenLightbox(item.image)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null
                  e.currentTarget.src = '/images/hero_cafe_ambience_1786792106662.jpg'
                }}
              />
              <div className="gallery-overlay">
                <div className="gallery-item-title">{item.title}</div>
                <div className="gallery-item-cat">{item.category} • Tap to view</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '60px', textAlign: 'center', padding: '32px', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>Tag us in your photos!</h3>
          <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto 16px auto' }}>Share your wonderful dining memories at Cafe Nova on Instagram with <strong>#CafeNovaAkluj</strong> to be featured on our page.</p>
          <span style={{ fontSize: '1.4rem' }}>📸 ☕ 🍽️ 🎉</span>
        </div>
      </div>
    </div>
  )
}
