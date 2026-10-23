import { createContext, useContext, useState, useCallback } from 'react'

const ModalContext = createContext(null)

export function ModalProvider({ children }) {
  const [activeModal, setActiveModal] = useState(null) // 'birthday' | 'reserve' | 'blog' | null
  const [birthdayPackage, setBirthdayPackage] = useState('')
  const [activeBlogPost, setActiveBlogPost] = useState(null)

  const openBirthdayModal = useCallback((packageName) => {
    setBirthdayPackage(packageName)
    setActiveModal('birthday')
  }, [])

  const openReserveModal = useCallback(() => setActiveModal('reserve'), [])

  const openBlogModal = useCallback((post) => {
    setActiveBlogPost(post)
    setActiveModal('blog')
  }, [])

  const closeAllModals = useCallback(() => setActiveModal(null), [])

  const value = {
    activeModal,
    birthdayPackage,
    activeBlogPost,
    openBirthdayModal,
    openReserveModal,
    openBlogModal,
    closeAllModals,
  }

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

export function useModal() {
  const ctx = useContext(ModalContext)
  if (!ctx) throw new Error('useModal must be used within a ModalProvider')
  return ctx
}
