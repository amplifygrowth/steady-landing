'use client'

import Link from 'next/link'
import { useEffect, type ReactNode } from 'react'

type LandingTrackingEvent =
  | 'landing_page_viewed'
  | 'landing_signin_clicked'
  | 'landing_start_signup_clicked'
  | 'landing_demo_viewed'
  | 'landing_demo_interacted'

type TrackingPayload = Record<string, string | number | boolean | null | undefined>

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

export function trackLandingEvent(event: LandingTrackingEvent, payload: TrackingPayload = {}) {
  if (typeof window === 'undefined') return
  const hasConsent = window.localStorage.getItem('cookie_consent') === 'accepted'

  const cleanPayload = Object.fromEntries(
    Object.entries(payload).filter(([, value]) => value !== undefined)
  )

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...cleanPayload })
  if (!hasConsent) return

  window.gtag?.('event', event, cleanPayload)
  window.fbq?.('trackCustom', event, cleanPayload)
}

export function StartPageViewTracker({ page = 'start' }: { page?: string }) {
  useEffect(() => {
    trackLandingEvent('landing_page_viewed', { page })
  }, [page])

  return null
}

export function TrackedAppLink({
  href,
  event,
  location,
  page = 'start',
  children,
  style,
}: {
  href: string
  event: Extract<LandingTrackingEvent, 'landing_signin_clicked' | 'landing_start_signup_clicked'>
  location: string
  page?: string
  children: ReactNode
  style?: React.CSSProperties
}) {
  return (
    <Link
      href={href}
      onClick={() => trackLandingEvent(event, { page, link_location: location })}
      style={style}
    >
      {children}
    </Link>
  )
}
