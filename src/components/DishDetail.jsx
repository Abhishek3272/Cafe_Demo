import { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowLeft, Plus, Minus, ShoppingBag, Sparkles, Check, Flame, Award, Clock } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import { categories, menuItems } from '../data/menuData.js'

export default function DishDetail({
  dish,
  onBack,
  onSelectDish,
  searchQuery = '',
  onSearchChange,
}) {
  const { addToCart, updateDishQty, getDishQty, openCart } = useCart()
  const [localQty, setLocalQty] = useState(1)
  const [addedAnimation, setAddedAnimation] = useState(false)

  if (!dish) return null

  const currentCartQty = getDishQty(dish.name)

  // Map category id to readable label
  const categoryObj = categories.find((c) => c.id === dish.category)
  const categoryLabel = categoryObj ? categoryObj.label : dish.category

  // Related dishes from the same category (excluding current dish)
  const relatedDishes = menuItems
    .filter((item) => item.category === dish.category && item.id !== dish.id)
    .slice(0, 4)

  const handleAddToCart = () => {
    addToCart(
      {
        name: dish.name,
        price: dish.price,
        image: dish.image,
      },
      localQty
    )
    setAddedAnimation(true)
    setTimeout(() => setAddedAnimation(false), 1600)
  }

  const handleIncrement = () => {
    if (currentCartQty > 0) {
      updateDishQty(dish.name, 1)
    } else {
      setLocalQty((prev) => prev + 1)
    }
  }

  const handleDecrement = () => {
    if (currentCartQty > 0) {
      updateDishQty(dish.name, -1)
    } else {
      setLocalQty((prev) => (prev > 1 ? prev - 1 : 1))
    }
  }

  // Pure veg check
  const isVeg = dish.isVegetarian !== false

  return (
    <motion.div
      id="dish-detail-container"
      className="dish-detail-view"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.24, ease: 'easeOut' }}
    >
      {/* Top Bar Area */}
      <div className="dish-detail-topbar">
        <div className="container dish-detail-topbar-inner">
          <button
            id="dish-detail-back-btn"
            type="button"
            className="dish-back-btn"
            onClick={onBack}
            aria-label="Back to Menu"
          >
            <ArrowLeft size={22} className="back-icon" />
            <span className="back-btn-text">Back to Menu</span>
          </button>

          {/* Search bar integration if handler is provided */}
          {onSearchChange && (
            <div className="dish-detail-search-wrap">
              <input
                type="text"
                id="dish-detail-search-input"
                className="dish-detail-search-input"
                placeholder="Search other dishes..."
                value={searchQuery}
                onChange={(e) => {
                  onSearchChange(e.target.value)
                  onBack() // Returning to filtered menu search
                }}
              />
            </div>
          )}

          <div className="dish-detail-top-crumbs">
            <span className="crumb-tag">Cafe Nova Menu</span>
            <span className="crumb-divider">/</span>
            <span className="crumb-active">{categoryLabel}</span>
          </div>
        </div>
      </div>

      <div className="container dish-detail-body">
        <div className="dish-detail-grid">
          {/* LEFT COLUMN: Main Food Image */}
          <div className="dish-detail-media-col">
            <div className="dish-image-card">
              <motion.div
                className="dish-image-wrapper"
                initial={{ scale: 0.97, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <img
                  id="dish-detail-main-img"
                  src={dish.image}
                  alt={dish.alt || dish.name}
                  className="dish-main-image"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src = '/images/hero_pav_bhaji_1786784364993.jpg'
                  }}
                />

                {/* Badges on the image */}
                <div className="dish-img-badges">
                  {/* Vegetarian Symbol */}
                  {isVeg && (
                    <span className="veg-badge" title="100% Pure Vegetarian">
                      <span className="veg-dot" />
                      <span className="veg-text">Pure Veg</span>
                    </span>
                  )}

                  {/* Ribbon Badges */}
                  {dish.ribbon && (
                    <span className={`dish-ribbon-badge ${dish.ribbon.toLowerCase().replace(/\s+/g, '-')}`}>
                      {dish.ribbon === 'Chef Special' && <Award size={13} />}
                      {dish.ribbon === 'Popular' && <Flame size={13} />}
                      {dish.ribbon === 'Signature' && <Sparkles size={13} />}
                      {dish.ribbon}
                    </span>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Quick Kitchen Highlights */}
            <div className="dish-quick-highlights">
              <div className="highlight-pill">
                <span className="highlight-icon">🔥</span>
                <span>Freshly Cooked to Order</span>
              </div>
              <div className="highlight-pill">
                <span className="highlight-icon">🧈</span>
                <span>Pure Amul Butter &amp; Premium Herbs</span>
              </div>
              <div className="highlight-pill">
                <Clock size={14} className="highlight-lucide" />
                <span>Prep time: 10–15 mins</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Dish Information & Actions */}
          <div className="dish-detail-info-col">
            <div className="dish-info-card">
              {/* Category Breadcrumb & Tag */}
              <div className="dish-meta-header">
                <span className="dish-category-badge">{categoryLabel}</span>
                {dish.ribbon && (
                  <span className="dish-sub-badge">
                    ⭐ {dish.ribbon} Selection
                  </span>
                )}
              </div>

              {/* Dish Name */}
              <h1 id="dish-detail-name" className="dish-title">
                {dish.name}
              </h1>

              {/* Price Row */}
              <div className="dish-price-row">
                <div className="price-tag">
                  <span className="currency-symbol">₹</span>
                  <span className="price-amount">{dish.price}</span>
                </div>
                <span className="tax-inclusive-note">Taxes &amp; freshly prepared packaging included</span>
              </div>

              {/* Dish Description */}
              <div className="dish-desc-block">
                <h2 className="dish-desc-heading">Description</h2>
                <p className="dish-description-text">{dish.desc}</p>
              </div>

              {/* Portion & Café Quality Assurance */}
              <div className="dish-quality-box">
                <div className="quality-item">
                  <span className="quality-check">✓</span>
                  <span>100% Hygienic &amp; Sanitized Kitchen</span>
                </div>
                <div className="quality-item">
                  <span className="quality-check">✓</span>
                  <span>Served piping hot with complimentary sides</span>
                </div>
              </div>

              {/* Interactive Order Action Section */}
              <div className="dish-action-panel">
                <div className="dish-action-row">
                  {/* Quantity Controller */}
                  <div className="dish-qty-control" aria-label="Quantity selector">
                    <button
                      type="button"
                      id="dish-qty-minus"
                      className="qty-btn-stepper"
                      onClick={handleDecrement}
                      disabled={currentCartQty === 0 && localQty <= 1}
                      aria-label="Decrease quantity"
                    >
                      <Minus size={16} />
                    </button>
                    <span id="dish-qty-display" className="qty-number-stepper">
                      {currentCartQty > 0 ? currentCartQty : localQty}
                    </span>
                    <button
                      type="button"
                      id="dish-qty-plus"
                      className="qty-btn-stepper"
                      onClick={handleIncrement}
                      aria-label="Increase quantity"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* Primary Add to Cart Button */}
                  <button
                    type="button"
                    id="dish-detail-add-cart-btn"
                    className={`btn btn-pista dish-add-cart-btn ${addedAnimation ? 'btn-added-state' : ''}`}
                    onClick={handleAddToCart}
                  >
                    {addedAnimation ? (
                      <>
                        <Check size={20} className="action-btn-icon check-pop" />
                        <span>Added to Cart!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag size={20} className="action-btn-icon" />
                        <span>
                          {currentCartQty > 0
                            ? `Add More (₹${dish.price * (currentCartQty > 0 ? localQty : 1)})`
                            : `Add to Cart • ₹${dish.price * localQty}`}
                        </span>
                      </>
                    )}
                  </button>
                </div>

                {/* Status message if already in cart */}
                {currentCartQty > 0 && (
                  <div className="dish-cart-status">
                    <span className="status-dot-active" />
                    <span>
                      Currently <strong>{currentCartQty}</strong> in your cart (₹{dish.price * currentCartQty})
                    </span>
                    <button
                      type="button"
                      className="view-cart-link"
                      onClick={openCart}
                    >
                      View Cart →
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Dishes From Same Category */}
        {relatedDishes.length > 0 && (
          <div className="dish-related-section">
            <div className="related-section-header">
              <h3 className="related-title">More From {categoryLabel}</h3>
              <p className="related-subtitle">Pairs wonderfully with your selection</p>
            </div>

            <div className="related-grid">
              {relatedDishes.map((item) => (
                <div
                  key={item.id}
                  className="related-dish-card"
                  onClick={() => onSelectDish && onSelectDish(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      onSelectDish && onSelectDish(item)
                    }
                  }}
                >
                  <div className="related-dish-img-wrap">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null
                        e.currentTarget.src = '/images/hero_pav_bhaji_1786784364993.jpg'
                      }}
                    />
                    {item.ribbon && <span className="related-ribbon">{item.ribbon}</span>}
                  </div>
                  <div className="related-dish-info">
                    <h4 className="related-dish-name">{item.name}</h4>
                    <span className="related-dish-price">₹{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sticky Mobile Order Bar */}
      <div className="dish-mobile-sticky-bar">
        <div className="mobile-bar-price">
          <span className="mobile-bar-label">Total</span>
          <span className="mobile-bar-amount">
            ₹{dish.price * (currentCartQty > 0 ? currentCartQty : localQty)}
          </span>
        </div>

        <div className="mobile-bar-actions">
          {currentCartQty > 0 ? (
            <div className="mobile-qty-stepper">
              <button
                type="button"
                className="qty-btn-mobile"
                onClick={handleDecrement}
                aria-label="Decrease quantity"
              >
                <Minus size={16} />
              </button>
              <span className="qty-val-mobile">{currentCartQty} in cart</span>
              <button
                type="button"
                className="qty-btn-mobile"
                onClick={handleIncrement}
                aria-label="Increase quantity"
              >
                <Plus size={16} />
              </button>
            </div>
          ) : (
            <button
              type="button"
              id="mobile-add-cart-btn"
              className="btn btn-pista mobile-add-btn"
              onClick={handleAddToCart}
            >
              <ShoppingBag size={18} />
              <span>Add to Cart</span>
            </button>
          )}
        </div>
      </div>
    </motion.div>
  )
}
