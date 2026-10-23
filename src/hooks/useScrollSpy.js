import { useEffect, useState } from 'react'

// Tracks header scroll state (for the shrink/blur effect) and which
// section is currently in view (for nav-link highlighting), mirroring
// the original vanilla-JS scroll spy behavior.
export function useScrollSpy() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 30)

      const sections = document.querySelectorAll('section[id]')
      const scrollY = window.pageYOffset

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 110
        const sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { scrolled, activeSection }
}
