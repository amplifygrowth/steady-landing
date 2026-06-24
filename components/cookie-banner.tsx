'use client'

import { useEffect, useState } from 'react'

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('cookie_consent')
    if (stored === 'accepted') {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ cookie_consent: 'accepted' })
    } else if (!stored) {
      setVisible(true)
    }
  }, [])

  function handleAccept() {
    localStorage.setItem('cookie_consent', 'accepted')
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: 'cookie_consent_accepted', cookie_consent: 'accepted' })
    setVisible(false)
  }

  function handleDecline() {
    localStorage.setItem('cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: '#5C4A5E',
        color: '#FFF',
        padding: '16px 20px',
      }}
    >
      <div
        style={{
          maxWidth: '74rem',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '14px',
        }}
      >
        <p style={{ flex: '1 1 280px', margin: 0, fontSize: '0.9375rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.92)' }}>
          We use a small number of cookies to understand how people find Steady, so we can keep improving it.{' '}
          <a
            href="https://capablemind.app/cookies"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#FFF', textDecoration: 'underline', textUnderlineOffset: '2px' }}
          >
            Cookie policy
          </a>
        </p>
        <div style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
          <button
            onClick={handleDecline}
            style={{
              padding: '10px 18px',
              borderRadius: '12px',
              border: '1.5px solid rgba(255,255,255,0.45)',
              background: 'transparent',
              color: '#FFF',
              fontSize: '0.9375rem',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            style={{
              padding: '10px 18px',
              borderRadius: '12px',
              border: 'none',
              background: '#FFF',
              color: '#5C4A5E',
              fontSize: '0.9375rem',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
