import { createContext, useContext, useState, useEffect } from 'react'

const NavigationContext = createContext()

// Map hash to page IDs
function getPageFromHash() {
  const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase()
  if (!hash || hash === 'hero' || hash === 'home') return 'home'
  if (hash === 'menu' || hash.startsWith('menu/')) return 'menu'
  if (hash === 'signature') return 'signature'
  if (hash === 'birthday') return 'birthday'
  if (hash === 'gallery') return 'gallery'
  if (hash === 'about') return 'about'
  if (hash === 'blog' || hash === 'blogs') return 'blogs'
  if (hash === 'reservation' || hash === 'contact') return 'reservation'
  return 'home'
}

export function NavigationProvider({ children }) {
  const [currentPage, setCurrentPage] = useState(getPageFromHash)

  useEffect(() => {
    function handleHashChange() {
      const page = getPageFromHash()
      setCurrentPage(page)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  function navigateTo(pageId, options = {}) {
    setCurrentPage(pageId)
    window.location.hash = `#/${pageId}`
    if (!options.preserveScroll) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <NavigationContext.Provider value={{ currentPage, navigateTo }}>
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavigation() {
  const context = useContext(NavigationContext)
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider')
  }
  return context
}
