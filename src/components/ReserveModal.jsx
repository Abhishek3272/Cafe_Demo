import ModalShell from './ModalShell.jsx'
import { useModal } from '../context/ModalContext.jsx'

export default function ReserveModal() {
  const { activeModal, closeAllModals } = useModal()

  return (
    <ModalShell isOpen={activeModal === 'reserve'} onClose={closeAllModals} title="Table Reservation">
      <p style={{ color: 'var(--text-muted)', marginBottom: '20px', fontSize: '0.95rem' }}>
        Reserve your table at Cafe Nova Akluj to enjoy fresh Pav Bhaji and artisanal coffee with
        zero wait time.
      </p>
      <a
        href="#reservation"
        className="btn btn-pista"
        style={{ width: '100%' }}
        onClick={closeAllModals}
      >
        Go to Reservation Form
      </a>
    </ModalShell>
  )
}
