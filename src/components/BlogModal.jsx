import ModalShell from './ModalShell.jsx'
import { useModal } from '../context/ModalContext.jsx'

export default function BlogModal() {
  const { activeModal, activeBlogPost, closeAllModals } = useModal()

  if (!activeBlogPost) return null

  return (
    <ModalShell
      isOpen={activeModal === 'blog'}
      onClose={closeAllModals}
      title={activeBlogPost.title}
      maxWidth="720px"
    >
      <div
        style={{
          fontSize: '0.9rem',
          color: 'var(--accent-sage)',
          fontWeight: 600,
          marginBottom: '16px',
        }}
      >
        By {activeBlogPost.author} • Published {activeBlogPost.date}
      </div>
      <div
        style={{
          fontSize: '1rem',
          lineHeight: 1.8,
          color: 'var(--text-main)',
          fontFamily: 'var(--font-sans)',
        }}
      >
        {activeBlogPost.content.map((paragraph, index) => (
          <p key={index} style={{ marginBottom: index === activeBlogPost.content.length - 1 ? 0 : '16px' }}>
            {index + 1}. {paragraph}
          </p>
        ))}
      </div>
    </ModalShell>
  )
}
