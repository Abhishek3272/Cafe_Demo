import { useCart } from '../context/CartContext.jsx'

export default function CartDrawer() {
  const {
    cart,
    activeOrder,
    cartOpen,
    closeCart,
    adjustQty,
    totalPrice,
    checkout,
    trackOrder,
    continueShopping,
  } = useCart()

  return (
    <>
      {cartOpen && (
        <div
          className="drawer-backdrop cart-backdrop"
          onClick={closeCart}
          aria-hidden="true"
        />
      )}
      <div className={`cart-drawer${cartOpen ? ' active' : ''}`} id="cartDrawer">
      <div className="cart-header">
        <h3 style={{ fontSize: '1.3rem' }}>Your Order Cart</h3>
        <button className="modal-close-btn" onClick={closeCart}>
          &times;
        </button>
      </div>

      <div className="cart-body" id="cartItemsContainer">
        {activeOrder ? (
          <div className="order-confirmation-card">
            <div className="success-icon-badge">✓</div>
            <h3 className="order-confirmed-title">Order Confirmed</h3>
            <div className="order-id-tag">Order ID: #{activeOrder.orderId}</div>

            <div className="order-summary-section">
              <div className="order-summary-label">Items Ordered:</div>
              <ul className="order-items-list">
                {activeOrder.items.map((item) => (
                  <li className="order-item-line" key={item.name}>
                    <span>• {item.name} × {item.quantity}</span>
                    <span>₹{item.price * item.quantity}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="order-total-row">
              <span>Total Amount:</span>
              <span className="order-total-price">₹{activeOrder.totalAmount}</span>
            </div>

            <div className="order-status-box">
              <span>Order Status:</span>
              <span className="status-dot-animated"></span>
              <strong style={{ color: '#e76f51' }}>Preparing</strong>
            </div>

            <div className="order-action-buttons">
              <button type="button" className="btn btn-pista" onClick={trackOrder}>
                Track Order
              </button>
              <button type="button" className="btn btn-outline" onClick={continueShopping}>
                Continue Shopping
              </button>
            </div>
          </div>
        ) : cart.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty-icon">🛒</div>
            <p>Your cart is empty.</p>
            <p style={{ fontSize: '0.85rem', marginTop: '8px' }}>
              Explore our menu categories to add fresh treats!
            </p>
          </div>
        ) : (
          cart.map((item, index) => (
            <div className="cart-item" key={item.name}>
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-item-info">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-price">
                  ₹{item.price} × {item.quantity}
                </div>
              </div>
              <div className="qty-control">
                <button className="qty-btn" onClick={() => adjustQty(index, -1)}>
                  -
                </button>
                <span className="qty-val">{item.quantity}</span>
                <button className="qty-btn" onClick={() => adjustQty(index, 1)}>
                  +
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {!activeOrder && (
        <div className="cart-footer">
          <div className="cart-total-row">
            <span>Total Amount:</span>
            <span style={{ color: 'var(--accent-sage-dark)' }}>₹{totalPrice}</span>
          </div>
          <button className="btn btn-pista" style={{ width: '100%' }} onClick={checkout}>
            Place Online Order
          </button>
        </div>
      )}
    </div>
    </>
  )
}
