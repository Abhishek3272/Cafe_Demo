export default function ModalShell({ isOpen, onClose, title, children, maxWidth }) {
  return (
    <div
      className={`modal-overlay${isOpen ? ' active' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="modal-container" style={maxWidth ? { maxWidth } : undefined}>
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <button className="modal-close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  )
}
