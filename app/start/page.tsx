import Image from 'next/image'
import Link from 'next/link'
import AppDemo from '@/components/app-demo'
import { StartPageViewTracker, TrackedAppLink } from '@/components/landing-tracking'

const APP_URL = process.env.NEXT_PUBLIC_STEADY_APP_URL || 'http://localhost:3000'

export const metadata = {
  title: 'Steady — Planning for the day you actually have',
  description: 'A daily planning app for women with changing capacity. Free for the first 100 users.',
}

export default function StartPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#FAFAF7', fontFamily: 'var(--font-public-sans)' }}>
      <StartPageViewTracker />

      {/* Header */}
      <header style={{ padding: '20px 24px' }}>
        <div style={{ maxWidth: '36rem', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Image src="/icon.svg" alt="" width={20} height={20} />
            <span className="font-display" style={{ fontSize: '1.375rem', color: '#2B2F2A' }}>Steady</span>
          </div>
          <TrackedAppLink href={APP_URL} event="landing_signin_clicked" location="header" style={{ fontSize: '0.875rem', fontWeight: 600, color: '#5C4A5E', textDecoration: 'none' }}>
            Sign in
          </TrackedAppLink>
        </div>
      </header>

      <div style={{ maxWidth: '36rem', margin: '0 auto', padding: '0 24px 80px' }}>

        {/* Hero */}
        <section style={{ paddingTop: '40px', paddingBottom: '48px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', borderRadius: '9999px', padding: '6px 12px', marginBottom: '20px', background: 'rgba(92,74,94,0.08)', border: '1px solid rgba(92,74,94,0.12)', color: '#5C4A5E', fontSize: '0.8125rem', fontWeight: 600 }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '9999px', background: '#5C4A5E' }} />
            Free for the first 100 users
          </div>

          <h1 className="font-display" style={{ fontSize: 'clamp(2.6rem, 8vw, 4rem)', lineHeight: 0.96, color: '#2B2F2A', marginBottom: '16px' }}>
            Planning for the day you actually have.
          </h1>

          <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#4A4E47', margin: '0 0 28px', maxWidth: '32rem' }}>
            Most planning apps assume your brain shows up the same way every morning. Steady starts with how you&apos;re actually arriving, and plans around that.
          </p>

          <TrackedAppLink
            href={APP_URL}
            event="landing_start_signup_clicked"
            location="hero"
            style={{ display: 'inline-block', padding: '14px 24px', borderRadius: '14px', background: '#5C4A5E', color: '#FFF', textDecoration: 'none', fontSize: '1rem', fontWeight: 600 }}
          >
            Get started free
          </TrackedAppLink>
        </section>

        {/* Feel seen */}
        <section style={{ paddingBottom: '48px' }}>
          <div style={{ borderRadius: '20px', padding: '24px', background: 'rgba(243,240,244,0.7)', border: '1px solid rgba(92,74,94,0.1)' }}>
            <p className="font-display" style={{ fontSize: '1.25rem', lineHeight: 1.4, color: '#2B2F2A', margin: '0 0 12px' }}>
              You know what you need to do. But the gap between knowing and starting? That&apos;s executive dysfunction, and it&apos;s real.
            </p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: '#6A6F68', margin: 0 }}>
              Steady doesn&apos;t try to close that gap by telling you to try harder. It plans around what&apos;s real, tracks what actually affects your capacity, and over time shows you why some days are harder than they should be. The longer you use it, the clearer the picture gets.
            </p>
          </div>
        </section>

        {/* See it in action */}
        <section style={{ paddingBottom: '48px' }}>
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8A8F86', marginBottom: '20px' }}>
            See it in action
          </div>
          <AppDemo />
        </section>

        {/* Four sections */}
        <section style={{ paddingBottom: '48px' }}>
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8A8F86', marginBottom: '16px' }}>
            Your Today screen has four sections
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {[
              { label: 'Non-Negotiables', desc: 'Fixed commitments that still need to happen today. Memory support, not pressure.' },
              { label: 'Basics', desc: 'The everyday things that keep life moving. Reset fresh each day, never a debt.' },
              { label: 'Today', desc: 'Up to three things to attempt. The cap is the point: a short list is easier to start from.' },
              { label: 'Later', desc: 'Tasks that arrive while you\'re mid-something else. Parked so you can stay focused.' },
            ].map(({ label, desc }, i) => (
              <div key={label} style={{
                padding: '16px 20px',
                background: 'rgba(255,255,255,0.8)',
                border: '1px solid rgba(229,224,232,0.9)',
                borderRadius: i === 0 ? '16px 16px 4px 4px' : i === 3 ? '4px 4px 16px 16px' : '4px',
              }}>
                <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#5C4A5E', marginBottom: '4px' }}>{label}</div>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#6A6F68', margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: '#6A6F68', textAlign: 'center', margin: '24px auto 0', maxWidth: '32rem' }}>
            Every check-in you do teaches you something. Over time, Steady shows you what actually affects your capacity, not what you think affects it.
          </p>
        </section>

        {/* CTA */}
        <section>
          <div style={{ borderRadius: '20px', padding: '28px 24px', background: 'rgba(255,255,255,0.85)', border: '1px solid rgba(229,224,232,0.9)', textAlign: 'center' }}>
            <h2 className="font-display" style={{ fontSize: '1.5rem', color: '#2B2F2A', marginBottom: '10px' }}>
              Built for the days your brain says no.
            </h2>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: '#6A6F68', margin: '0 0 20px' }}>
              Free for the first 100 users in exchange for honest feedback.
            </p>
            <TrackedAppLink
              href={APP_URL}
              event="landing_start_signup_clicked"
              location="final_cta"
              style={{ display: 'inline-block', padding: '14px 24px', borderRadius: '14px', background: '#5C4A5E', color: '#FFF', textDecoration: 'none', fontSize: '1rem', fontWeight: 600 }}
            >
              Get started free
            </TrackedAppLink>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer style={{ padding: '0 24px 48px' }}>
        <div style={{ maxWidth: '36rem', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '10px' }}>
            {([['Privacy', '/privacy'], ['Terms', '/terms'], ['Cookies', '/cookies'], ['Refunds', '/refunds'], ['Why Steady exists', '/why'], ['Full site', '/']] as const).map(([label, href]) => (
              <Link key={href} href={href} style={{ fontSize: '0.8125rem', color: '#9A9E96', textDecoration: 'none' }}>
                {label}
              </Link>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: '#9A9E96', textAlign: 'center', margin: 0 }}>
            Questions?{' '}
            <a href="mailto:hello@capablemind.app" style={{ color: '#9A9E96', textDecoration: 'underline' }}>hello@capablemind.app</a>
          </p>
        </div>
      </footer>

    </main>
  )
}
