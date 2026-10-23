import { useState } from 'react'
import ModalShell from './ModalShell.jsx'
import { useModal } from '../context/ModalContext.jsx'
import { useToast } from '../context/ToastContext.jsx'

const initialForm = {
  name: '',
  phone: '',
  guests: '15',
  date: '',
  time: '04:00 PM - 07:00 PM',
  notes: '',
}

export default function BirthdayModal() {
  const { activeModal, birthdayPackage, closeAllModals } = useModal()
  const { showToast } = useToast()
  const [form, setForm] = useState(initialForm)

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    showToast(`🎉 Birthday setup booked for ${form.name || 'Guest'}!`)
    closeAllModals()
    setForm(initialForm)
  }

  return (
    <ModalShell
      isOpen={activeModal === 'birthday'}
      onClose={closeAllModals}
      title={`Book ${birthdayPackage || 'Birthday Setup'}`}
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Host / Celebrant Name</label>
          <input
            type="text"
            className="form-input"
            placeholder="e.g. Ananya Patil"
            required
            value={form.name}
            onChange={(e) => updateField('name', e.target.value)}
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Contact Phone</label>
            <input
              type="tel"
              className="form-input"
              placeholder="+91 98765 43210"
              required
              value={form.phone}
              onChange={(e) => updateField('phone', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Estimated Guests</label>
            <input
              type="number"
              className="form-input"
              min="5"
              max="100"
              value={form.guests}
              onChange={(e) => updateField('guests', e.target.value)}
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
              value={form.date}
              onChange={(e) => updateField('date', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Preferred Time Slot</label>
            <select
              className="form-select"
              value={form.time}
              onChange={(e) => updateField('time', e.target.value)}
            >
              <option>04:00 PM - 07:00 PM</option>
              <option>07:00 PM - 10:00 PM</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Decoration &amp; Theme Notes</label>
          <textarea
            className="form-textarea"
            rows="3"
            placeholder="Specify balloon colors, neon sign text, or special food pre-orders..."
            value={form.notes}
            onChange={(e) => updateField('notes', e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-pista" style={{ width: '100%' }}>
          Confirm Birthday Setup Booking
        </button>
      </form>
    </ModalShell>
  )
}
