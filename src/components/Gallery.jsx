import { galleryItems } from '../data/galleryData.js'

export default function Gallery({ onOpenLightbox }) {
  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="text-center">
          <div className="section-badge">📸 Real Café Experience In Akluj</div>
          <h2 className="section-title">Café Gallery</h2>
          <p className="section-subtitle">
            Discover our warm interior, family dining, birthday celebrations, and Akluj customers
            enjoying food.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div className="gallery-item" key={item.title} onClick={() => onOpenLightbox(item.image)}>
              <img src={item.image} alt={item.alt} />
              <div className="gallery-overlay">
                <div className="gallery-item-title">{item.title}</div>
                <div className="gallery-item-cat">{item.category}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
