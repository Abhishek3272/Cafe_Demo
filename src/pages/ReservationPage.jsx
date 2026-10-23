import { useState } from 'react'
import { useToast } from '../context/ToastContext.jsx'
import { useNavigation } from '../context/NavigationContext.jsx'

const initialForm = {
  name: '',
  phone: '',
  email: '',
  date: '',
  time: '12:00 PM (Lunch)',
  guests: '4',
  seatingArea: 'Indoor AC Seating',
  foodPreOrder: false,
  notes: '',
}

export default function ReservationPage() {
  const { showToast } = useToast()
  const { navigateTo } = useNavigation()
  const [form, setForm] = useState(initialForm)

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    showToast(`✨ Table reservation confirmed for ${form.name || 'Guest'} on ${form.date || 'Selected Date'} at ${form.time}!`)
    setForm(initialForm)
  }

  return (
    <div className="page-content reservation-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <div className="section-badge">📅 Effortless Table Booking</div>
          <h1 className="page-title">Table Reservation &amp; Contact</h1>
          <p className="page-subtitle">
            Secure your preferred seating in advance for family dining, date nights, or celebrations. We'll have your table primed and ready.
          </p>
        </div>
      </div>

      <div className="container page-body-container">
        <div className="reservation-container">
          {/* Reservation Form Card */}
          <div className="reservation-form-card">
            <div className="section-badge" style={{ marginBottom: '12px' }}>Book Your Table</div>
            <h2 style={{ fontSize: '1.9rem', marginBottom: '8px' }}>Instant Table Reservation</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '0.95rem' }}>
              Fill in your details below. Confirmation is instant with SMS/WhatsApp notification.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
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
                  <label className="form-label">Phone Number *</label>
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
                  <label className="form-label">Reservation Date *</label>
                  <input
                    type="date"
                    className="form-input"
                    required
                    value={form.date}
                    onChange={(e) => updateField('date', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Preferred Time *</label>
                  <select
                    className="form-select"
                    value={form.time}
                    onChange={(e) => updateField('time', e.target.value)}
                  >
                    <option>11:30 AM (Early Lunch)</option>
                    <option>12:30 PM (Lunch)</option>
                    <option>02:00 PM (Afternoon)</option>
                    <option>05:00 PM (High Tea &amp; Coffee)</option>
                    <option>07:00 PM (Early Dinner)</option>
                    <option>08:30 PM (Dinner Rush)</option>
                    <option>09:45 PM (Late Evening)</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Number of Guests</label>
                  <select
                    className="form-select"
                    value={form.guests}
                    onChange={(e) => updateField('guests', e.target.value)}
                  >
                    <option value="2">2 Guests (Couple Table)</option>
                    <option value="4">4 Guests (Standard Family Table)</option>
                    <option value="6">6 Guests (Large Booth)</option>
                    <option value="8">8 Guests (Celebration Table)</option>
                    <option value="12">10+ Guests (Group Gathering)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Seating Preference</label>
                  <select
                    className="form-select"
                    value={form.seatingArea}
                    onChange={(e) => updateField('seatingArea', e.target.value)}
                  >
                    <option>Indoor AC Seating</option>
                    <option>Plush Sofa Corner</option>
                    <option>Cozy Window Table</option>
                    <option>Quiet Corner</option>
                  </select>
                </div>
              </div>

              <div className="form-group checkbox-group" style={{ margin: '16px 0' }}>
                <input
                  type="checkbox"
                  id="pageFoodCheck"
                  checked={form.foodPreOrder}
                  onChange={(e) => updateField('foodPreOrder', e.target.checked)}
                />
                <label
                  htmlFor="pageFoodCheck"
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--text-main)',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Pre-order food in advance (Faster service on arrival)
                </label>
              </div>

              {form.foodPreOrder && (
                <div style={{ padding: '16px', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Browse our menu and add items to your cart!</span>
                  <button type="button" className="btn btn-pista" style={{ padding: '6px 16px', fontSize: '0.85rem' }} onClick={() => navigateTo('menu')}>
                    Open Menu 🍽️
                  </button>
                </div>
              )}

              <div className="form-group">
                <label className="form-label">Special Requests (Optional)</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Baby chair, high table, anniversary wish..."
                  value={form.notes}
                  onChange={(e) => updateField('notes', e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-pista" style={{ width: '100%', marginTop: '16px', padding: '14px' }}>
                Confirm Table Reservation ✨
              </button>
            </form>
          </div>

          {/* Location & Details Card */}
          <div className="location-info">
            <div className="section-badge">📍 Visit Cafe Nova Akluj</div>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Location &amp; Contact</h2>

            <div className="info-card" style={{ background: 'var(--bg-card)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', marginBottom: '16px', display: 'flex', gap: '16px' }}>
              <div className="info-icon" style={{ fontSize: '1.8rem' }}>📍</div>
              <div className="info-details">
                <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Café Address</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  Cafe Nova, Main Road, Near City Center, Akluj, Maharashtra 413101
                </p>
              </div>
            </div>

            <div className="info-card" style={{ background: 'var(--bg-card)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', marginBottom: '16px', display: 'flex', gap: '16px' }}>
              <div className="info-icon" style={{ fontSize: '1.8rem' }}>⏰</div>
              <div className="info-details">
                <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Opening Hours</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  Monday – Sunday: 11:00 AM – 11:00 PM
                  <br />
                  <span style={{ color: 'var(--accent-sage)', fontWeight: 600 }}>Open 7 Days a week</span> (All kitchen stations operational)
                </p>
              </div>
            </div>

            <div className="info-card" style={{ background: 'var(--bg-card)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', marginBottom: '24px', display: 'flex', gap: '16px' }}>
              <div className="info-icon" style={{ fontSize: '1.8rem' }}>📞</div>
              <div className="info-details">
                <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Phone &amp; Email</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  Direct Calls: +91 98765 43210 / +91 98220 11223
                  <br />
                  Email: hello@cafenova.in
                </p>
              </div>
            </div>

            {/* Quick Amenities */}
            <div style={{ background: 'var(--bg-secondary)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <h4 style={{ fontSize: '1rem', marginBottom: '12px', color: 'var(--text-main)' }}>Café Amenities</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                <div>✓ Free High-Speed WiFi</div>
                <div>✓ Air Conditioned Dining</div>
                <div>✓ Dedicated Two-Wheeler / Car Parking</div>
                <div>✓ Card, UPI &amp; Cash Accepted</div>
                <div>✓ Wheelchair Accessible</div>
                <div>✓ Takeaway &amp; Parcel Counter</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
