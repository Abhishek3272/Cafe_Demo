export default function Lightbox({ image, onClose }) {
  return (
    <div
      className={`lightbox-modal${image ? ' active' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <span className="lightbox-close" onClick={onClose}>
        &times;
      </span>
      <img src={image || ''} className="lightbox-img" alt="Gallery Preview" />
    </div>
  )
}
