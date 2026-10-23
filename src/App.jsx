import { useState, useEffect } from 'react'
import { ToastProvider } from './context/ToastContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { ModalProvider } from './context/ModalContext.jsx'
import { NavigationProvider, useNavigation } from './context/NavigationContext.jsx'

import Header from './components/Header.jsx'
import MobileDrawer from './components/MobileDrawer.jsx'
import BottomNav from './components/BottomNav.jsx'
import Footer from './components/Footer.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import BirthdayModal from './components/BirthdayModal.jsx'
import BlogModal from './components/BlogModal.jsx'
import Lightbox from './components/Lightbox.jsx'
import ToastContainer from './components/ToastContainer.jsx'
import CinematicIntro from './components/CinematicIntro.jsx'

// Pages
import HomePage from './pages/HomePage.jsx'
import MenuPage from './pages/MenuPage.jsx'
import SignaturePage from './pages/SignaturePage.jsx'
import BirthdayPage from './pages/BirthdayPage.jsx'
import GalleryPage from './pages/GalleryPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import ReservationPage from './pages/ReservationPage.jsx'

function MainContent({ onOpenLightbox }) {
  const { currentPage } = useNavigation()

  switch (currentPage) {
    case 'menu':
      return <MenuPage />
    case 'signature':
      return <SignaturePage />
    case 'birthday':
      return <BirthdayPage />
    case 'gallery':
      return <GalleryPage onOpenLightbox={onOpenLightbox} />
    case 'about':
      return <AboutPage onOpenLightbox={onOpenLightbox} />
    case 'blogs':
      return <BlogPage />
    case 'reservation':
      return <ReservationPage />
    case 'home':
    default:
      return <HomePage onOpenLightbox={onOpenLightbox} />
  }
}

function AppShell() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState(null)
  const [homepageRevealed, setHomepageRevealed] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* 1. Cinematic Intro rendered first */}
      <CinematicIntro
        onTransitionStart={() => setHomepageRevealed(true)}
        onIntroFinish={() => setHomepageRevealed(true)}
      />

      {/* 2. Existing Website Shell - hidden initially, then smoothly fades in as intro transitions */}
      <div className={`site-wrapper-fade ${homepageRevealed ? 'site-revealed' : 'site-hidden'}`}>
        <Header
          scrolled={scrolled}
          onOpenMobileMenu={() => setMobileMenuOpen(true)}
        />
        {mobileMenuOpen && (
          <div
            className="drawer-backdrop menu-backdrop"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
        <MobileDrawer
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />

        <main id="main-content" className="site-main">
          <MainContent onOpenLightbox={setLightboxImage} />
        </main>

        <Footer />

        <BottomNav onOpenMobileMenu={() => setMobileMenuOpen(true)} />

        <CartDrawer />
        <BirthdayModal />
        <BlogModal />
        <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
        <ToastContainer />
      </div>
    </>
  )
}

export default function App() {
  return (
    <ToastProvider>
      <CartProvider>
        <ModalProvider>
          <NavigationProvider>
            <AppShell />
          </NavigationProvider>
        </ModalProvider>
      </CartProvider>
    </ToastProvider>
  )
}
