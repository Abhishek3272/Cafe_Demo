import { useState } from 'react'
import { packages } from '../data/packagesData.js'
import { useModal } from '../context/ModalContext.jsx'
import { useToast } from '../context/ToastContext.jsx'

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px', color: 'var(--accent-sage)', flexShrink: 0 }}>
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  )
}

export default function BirthdayPage() {
  const { openBirthdayModal } = useModal()
  const { showToast } = useToast()
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    phone: '',
    eventType: 'Birthday Party',
    date: '',
    guests: '15-20 Guests',
    selectedPackage: 'Medium Birthday Setup',
    specialRequests: '',
  })

  function handleInquirySubmit(e) {
    e.preventDefault()
    showToast(`🎉 Event inquiry received for ${inquiryForm.name}! Our team will call you within 2 hours.`)
    setInquiryForm({
      name: '',
      phone: '',
      eventType: 'Birthday Party',
      date: '',
      guests: '15-20 Guests',
      selectedPackage: 'Medium Birthday Setup',
      specialRequests: '',
    })
  }

  return (
    <div className="page-content birthday-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <div className="section-badge">🎉 Celebrate Life's Milestones</div>
          <h1 className="page-title">Birthday &amp; Private Event Setups</h1>
          <p className="page-subtitle">
            Host memorable birthdays, anniversaries, kitty parties, and family gatherings in Akluj with personalized ambient decor, music, and gourmet food.
          </p>
        </div>
      </div>

      <div className="container page-body-container">
        {/* Packages Grid */}
        <div className="packages-grid">
          {packages.map((pkg) => (
            <div className="package-card" key={pkg.name}>
              <div className="package-card-header">
                <img src={pkg.image} alt={pkg.alt} />
                <span className="package-tag">{pkg.tag}</span>
              </div>
              <div className="package-card-body">
                <h3 className="package-name">{pkg.name}</h3>
                <ul className="package-features-list">
                  {pkg.features.map((feature) => (
                    <li className="package-feature-item" key={feature}>
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="package-card-footer">
                  <button
                    className="btn btn-pista book-package-btn"
                    onClick={() => openBirthdayModal(pkg.name)}
                  >
                    {pkg.buttonLabel}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Celebrate at Cafe Nova */}
        <div className="why-choose-card">
          <div className="text-center" style={{ marginBottom: '32px' }}>
            <div className="section-badge">✨ The Cafe Nova Celebration Standard</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.2rem)', marginBottom: '12px' }}>Why Choose Us For Your Party?</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto' }}>
              We take care of every detail from customized aesthetic decor to fresh food, allowing you to relax and enjoy the moment with your loved ones.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '20px' }}>
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '12px' }}>🎈</div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '8px' }}>Custom Balloon &amp; Backdrop Themes</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>Choose your favorite color palette, neon LED signage, fairy light rings, and photo-ready cake tables.</p>
            </div>
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '12px' }}>🎵</div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '8px' }}>Music &amp; Acoustic Ambience</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>Enjoy your customized playlist on our background audio system with festive party lighting.</p>
            </div>
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '12px' }}>🎂</div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '8px' }}>Gourmet Party Food &amp; Desserts</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>Special Pav Bhaji, fries, burgers, artisanal coffee, shakes, and freshly baked celebration cakes.</p>
            </div>
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '12px' }}>⭐</div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '8px' }}>Dedicated Party Host Service</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>Our warm, attentive staff ensures prompt serving, photo-taking assistance, and hassle-free hosting.</p>
            </div>
          </div>
        </div>

        {/* Custom Event Inquiry Form */}
        <div className="event-inquiry-card" style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div className="text-center" style={{ marginBottom: '28px' }}>
            <div className="section-badge">📋 Plan Your Event</div>
            <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>Reserve Your Celebration Slot</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Fill out the inquiry form below and our celebration manager will coordinate everything with you.</p>
          </div>

          <form onSubmit={handleInquirySubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Pooja Deshmukh"
                  required
                  value={inquiryForm.name}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-input"
                  placeholder="+91 98765 43210"
                  required
                  value={inquiryForm.phone}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Event Date</label>
                <input
                  type="date"
                  className="form-input"
                  required
                  value={inquiryForm.date}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, date: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Selected Package</label>
                <select
                  className="form-select"
                  value={inquiryForm.selectedPackage}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, selectedPackage: e.target.value })}
                >
                  <option>Casual Birthday Setup</option>
                  <option>Medium Birthday Setup</option>
                  <option>Premium Birthday Setup</option>
                  <option>Custom Theme Request</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Estimated Guest Count</label>
              <select
                className="form-select"
                value={inquiryForm.guests}
                onChange={(e) => setInquiryForm({ ...inquiryForm, guests: e.target.value })}
              >
                <option>5-10 Guests</option>
                <option>10-20 Guests</option>
                <option>20-35 Guests</option>
                <option>35+ Guests (Full Café Booking)</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Special Requests / Themes / Cake Preference (Optional)</label>
              <textarea
                className="form-input"
                rows="3"
                placeholder="Let us know if you need specific balloon colors, chocolate truffle cake, or custom music..."
                value={inquiryForm.specialRequests}
                onChange={(e) => setInquiryForm({ ...inquiryForm, specialRequests: e.target.value })}
              />
            </div>

            <button type="submit" className="btn btn-pista" style={{ width: '100%', marginTop: '12px', padding: '14px' }}>
              Send Event Inquiry 🎉
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
