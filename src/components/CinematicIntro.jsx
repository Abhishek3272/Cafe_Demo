import { useState, useEffect, useRef } from 'react'

export default function CinematicIntro({ onIntroFinish, onTransitionStart }) {
  // CRITICAL: Intro is active on EVERY page load / refresh for preview/development
  // No sessionStorage, no localStorage, no auto-skipping.
  const [introState, setIntroState] = useState('playing') // 'playing' | 'transitioning' | 'finished'
  const timerTransitionRef = useRef(null)
  const timerFinishRef = useRef(null)

  useEffect(() => {
    // Lock scrollbar while intro is running
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // At 2600ms: Begin cinematic transition to homepage (scale up & fade out intro)
    timerTransitionRef.current = setTimeout(() => {
      setIntroState('transitioning')
      if (onTransitionStart) onTransitionStart()
    }, 2600)

    // At 3300ms: Transition is complete, unmount / reveal homepage fully
    timerFinishRef.current = setTimeout(() => {
      setIntroState('finished')
      document.body.style.overflow = prevOverflow
      if (onIntroFinish) onIntroFinish()
    }, 3300)

    return () => {
      document.body.style.overflow = prevOverflow
      if (timerTransitionRef.current) clearTimeout(timerTransitionRef.current)
      if (timerFinishRef.current) clearTimeout(timerFinishRef.current)
    }
  }, [onIntroFinish, onTransitionStart])

  const handleSkip = () => {
    if (timerTransitionRef.current) clearTimeout(timerTransitionRef.current)
    if (timerFinishRef.current) clearTimeout(timerFinishRef.current)
    setIntroState('transitioning')
    if (onTransitionStart) onTransitionStart()

    setTimeout(() => {
      setIntroState('finished')
      document.body.style.overflow = ''
      if (onIntroFinish) onIntroFinish()
    }, 180)
  }

  if (introState === 'finished') {
    return null
  }

  return (
    <div
      id="cinematic-intro-fullscreen"
      className={`cinematic-intro-wrapper ${introState === 'transitioning' ? 'intro-transitioning-out' : ''}`}
      aria-label="Cafe Nova Cinematic Intro"
      role="banner"
    >
      {/* Deep elegant green / warm dark café atmospheric lighting background */}
      <div className="cinematic-intro-bg" aria-hidden="true" />
      <div className="cinematic-intro-glow" aria-hidden="true" />

      {/* Centered cinematic stage */}
      <div className="cinematic-intro-stage">
        {/* 400ms – 1000ms: Cafe Nova circular logo reveal */}
        <div className="cinematic-intro-logo-box">
          <div className="cinematic-logo-ambient-aura" aria-hidden="true" />
          <img
            src="/images/cafe-nova-logo.png"
            alt="Cafe Nova Logo"
            className="cinematic-intro-logo-img"
            onError={(e) => {
              if (!e.currentTarget.src.includes('cafe-nova-logo.svg')) {
                e.currentTarget.src = '/images/cafe-nova-logo.svg'
              }
            }}
          />
        </div>

        {/* 1000ms – 1500ms: "Cafe Nova" primary serif title */}
        <h1 className="cinematic-intro-title">
          Cafe Nova
        </h1>

        {/* 1500ms – 1800ms: "Akluj" */}
        <div className="cinematic-intro-location">
          <span className="cinematic-intro-sparkle" aria-hidden="true">✦</span>
          <span>Akluj</span>
          <span className="cinematic-intro-sparkle" aria-hidden="true">✦</span>
        </div>

        {/* 1800ms – 2100ms: "THE CELEBRATION HOUSE" */}
        <div className="cinematic-intro-tagline-row">
          <div className="cinematic-intro-flourish-line" aria-hidden="true" />
          <p className="cinematic-intro-tagline">
            THE CELEBRATION HOUSE
          </p>
          <div className="cinematic-intro-flourish-line" aria-hidden="true" />
        </div>
      </div>

      {/* Skip Intro button in bottom-right corner */}
      <button
        type="button"
        id="btn-skip-intro"
        className="cinematic-skip-intro-button"
        onClick={handleSkip}
        aria-label="Skip Intro"
      >
        <span>Skip Intro</span>
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polygon points="5 4 15 12 5 20 5 4" />
          <line x1="19" y1="5" x2="19" y2="19" />
        </svg>
      </button>
    </div>
  )
}
