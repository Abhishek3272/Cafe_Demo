import { useState } from 'react'
import { useToast } from '../context/ToastContext.jsx'

const initialForm = {
  name: '',
  phone: '',
  date: '',
  time: '12:00 PM (Lunch)',
  guests: '4',
  foodPreOrder: false,
}

export default function Reservation() {
  const { showToast } = useToast()
  const [form, setForm] = useState(initialForm)

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleExploreMenuClick(e) {
    e.preventDefault()
    const menuSection = document.querySelector('#menu')
    if (menuSection) {
      const headerOffset = 90
      const elementPosition = menuSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    showToast(`✨ Reservation confirmed for ${form.name || 'Guest'} on ${form.date || 'Selected Date'}!`)
    setForm(initialForm)
  }

  return (
    <section className="reservation-section" id="reservation">
      <div className="container reservation-container">
        <div className="reservation-form-card">
          <div className="section-badge">Reserve Your Experience</div>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '8px' }}>Book A Table In Akluj</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
            Reserve a cozy table for family dining or pre-order food in advance.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Rahul Sharma"
                  required
                  value={form.name}
                  onChange={(e) => updateField('name', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-input"
                  placeholder="+91 98765 43210"
                  required
                  value={form.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Date</label>
                <input
                  type="date"
                  className="form-input"
                  required
                  value={form.date}
                  onChange={(e) => updateField('date', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Time</label>
                <select
                  className="form-select"
                  value={form.time}
                  onChange={(e) => updateField('time', e.target.value)}
                >
                  <option>12:00 PM (Lunch)</option>
                  <option>02:00 PM</option>
                  <option>05:00 PM (High Tea)</option>
                  <option>07:30 PM (Dinner)</option>
                  <option>09:00 PM</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Number of Guests</label>
              <select
                className="form-select"
                value={form.guests}
                onChange={(e) => updateField('guests', e.target.value)}
              >
                <option value="2">2 Guests (Couple)</option>
                <option value="4">4 Guests (Family)</option>
                <option value="6">6 Guests (Small Party)</option>
                <option value="10">10+ Guests (Group Gathering)</option>
              </select>
            </div>

            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="rFoodCheck"
                checked={form.foodPreOrder}
                onChange={(e) => updateField('foodPreOrder', e.target.checked)}
              />
              <label
                htmlFor="rFoodCheck"
                style={{
                  fontSize: '0.92rem',
                  color: 'var(--text-main)',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Reserve Table with Food Pre-Order
              </label>
            </div>

            <div className={`explore-menu-wrapper${form.foodPreOrder ? ' active' : ''}`}>
              <a href="#menu" className="btn-explore-menu" onClick={handleExploreMenuClick}>
                <span>🍽️ Explore Menu</span>
              </a>
            </div>

            <button type="submit" className="btn btn-pista" style={{ width: '100%', marginTop: '16px' }}>
              Confirm Reservation
            </button>
          </form>
        </div>

        <div className="location-info">
          <div className="section-badge">📍 Visit Cafe Nova Akluj</div>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '24px' }}>Location &amp; Hours</h2>

          <div className="info-card">
            <div className="info-icon">📍</div>
            <div className="info-details">
              <h4>Café Address</h4>
              <p>Cafe Nova, Main Road, Near City Center, Akluj, Maharashtra</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">⏰</div>
            <div className="info-details">
              <h4>Opening Hours</h4>
              <p>
                Monday – Sunday: 11:00 AM – 11:00 PM
                <br />
                Special Pav Bhaji served all day!
              </p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">📞</div>
            <div className="info-details">
              <h4>Contact &amp; Orders</h4>
              <p>
                Phone: +91 98765 43210 / +91 98220 11223
                <br />
                Email: hello@cafenova.in
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
