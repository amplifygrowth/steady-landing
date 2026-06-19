import Image from 'next/image'
import Link from 'next/link'
import HowSteadyWorks from '@/components/how-steady-works'

const APP_URL = process.env.NEXT_PUBLIC_STEADY_APP_URL || 'http://localhost:3000'

const helpCards = [
  {
    title: 'Plan around real capacity',
    body: 'Start with how you actually are, then separate what still has to happen from what can wait.',
  },
  {
    title: 'Notice the patterns',
    body: 'See when brain fog, overwhelm, poor sleep and low battery days tend to show up.',
  },
  {
    title: 'Use support gently',
    body: 'Optional nudges and evening reflection help you stay in touch with your day without adding more noise.',
  },
]

export default function LandingPage() {
  return (
    <main style={{ minHeight: '100vh' }}>
      <style>{`
        .landing-shell {
          max-width: 74rem;
          margin: 0 auto;
        }

        .hero-panel {
          border-radius: 32px;
          border: 1px solid rgba(229, 224, 232, 0.92);
          background:
            linear-gradient(135deg, rgba(244,239,247,0.92) 0%, rgba(255,255,255,0.82) 42%, rgba(249,247,242,0.9) 100%),
            radial-gradient(circle at top left, rgba(92,74,94,0.18), transparent 40%),
            radial-gradient(circle at 82% 20%, rgba(107,131,160,0.18), transparent 34%),
            radial-gradient(circle at bottom right, rgba(232, 240, 234, 0.92), transparent 42%);
          box-shadow: 0 24px 68px rgba(92, 74, 94, 0.13);
          overflow: hidden;
        }

        .hero-grid {
          display: grid;
          gap: 28px;
          align-items: center;
        }

        .hero-mock-wrap {
          position: relative;
          min-height: 0;
        }

        .hero-mock-wrap::before {
          content: "";
          position: absolute;
          inset: 8% -4% auto 18%;
          height: 72%;
          border-radius: 9999px;
          background: radial-gradient(circle, rgba(92,74,94,0.18) 0%, rgba(107,131,160,0.12) 38%, rgba(255,255,255,0) 72%);
          filter: blur(10px);
          pointer-events: none;
        }

        .help-grid {
          display: grid;
          gap: 16px;
        }

        .hero-inner {
          padding: 28px 20px;
        }

        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: minmax(0, 1.1fr) minmax(360px, 0.9fr);
            gap: 40px;
          }

          .help-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .hero-inner {
            padding: 40px 36px;
          }
        }
      `}</style>

      <section style={{ padding: '24px 20px 56px' }}>
        <div className="landing-shell">
          <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Image src="/icon.svg" alt="" width={24} height={24} style={{ width: '24px', height: '24px', flexShrink: 0 }} />
              <span className="font-display" style={{ fontSize: '1.6rem', color: '#2B2F2A' }}>Steady</span>
            </div>
            <Link
              href={APP_URL}
              style={{
                padding: '10px 14px',
                borderRadius: '12px',
                border: '1.5px solid #D8D2D9',
                color: '#5C4A5E',
                textDecoration: 'none',
                fontSize: '0.9375rem',
                fontWeight: 600,
              }}
            >
              Sign in
            </Link>
          </header>

          <div className="hero-panel">
            <div className="hero-grid hero-inner">
              <div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8A8F86', marginBottom: '14px' }}>
                  capablemind.app
                </div>

                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderRadius: '9999px',
                  padding: '8px 12px',
                  marginBottom: '18px',
                  background: 'rgba(92,74,94,0.08)',
                  border: '1px solid rgba(92,74,94,0.12)',
                  color: '#5C4A5E',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '9999px', background: '#5C4A5E' }} />
                  Daily planning for changing capacity
                </div>

                <h1 className="font-display" style={{ fontSize: 'clamp(3rem, 7vw, 5.2rem)', lineHeight: 0.96, color: '#2B2F2A', marginBottom: '16px' }}>
                  Steady
                </h1>

                <p className="font-display" style={{ fontSize: 'clamp(1.5rem, 3.4vw, 2.45rem)', lineHeight: 1.08, color: '#2B2F2A', margin: '0 0 18px', maxWidth: '13ch' }}>
                  For midlife women whose capacity changes from day to day.
                </p>

                <p style={{ fontSize: '1.08rem', lineHeight: 1.85, color: '#4A4E47', margin: '0 0 28px', maxWidth: '38rem' }}>
                  Some days you have energy, focus and momentum. Other days you&apos;re running on poor sleep, brain fog, overwhelm, hormone changes, stress, or simply too much life. Steady helps you plan around the capacity you actually have, notice the patterns behind harder days, and adjust when reality changes.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#6A6F68', margin: '0 0 28px', maxWidth: '37rem' }}>
                  Whether that&apos;s ADHD, perimenopause, menopause, poor sleep or everyday life pressures, Steady helps you work with your day instead of fighting it.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
                  <Link
                    href={APP_URL}
                    style={{
                      padding: '14px 18px',
                      borderRadius: '14px',
                      background: '#5C4A5E',
                      color: '#FFF',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      fontWeight: 600,
                    }}
                  >
                    Get started
                  </Link>
                  <Link
                    href="/why"
                    style={{
                      padding: '14px 18px',
                      borderRadius: '14px',
                      border: '1.5px solid #D8D2D9',
                      color: '#5C4A5E',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      fontWeight: 600,
                    }}
                  >
                    Why this exists
                  </Link>
                </div>

                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderRadius: '9999px',
                  padding: '10px 14px',
                  background: 'rgba(92,74,94,0.08)',
                  border: '1px solid rgba(92,74,94,0.14)',
                  color: '#4A4E47',
                  fontSize: '0.9375rem',
                  marginBottom: '32px',
                }}>
                  <span style={{ color: '#5C4A5E', fontWeight: 700 }}>•</span>
                  Free for the first 100 users in exchange for honest feedback.
                </div>

                <div style={{
                  maxWidth: '34rem',
                  paddingLeft: '14px',
                  borderLeft: '3px solid rgba(92,74,94,0.18)',
                }}>
                  <p className="font-display" style={{ fontSize: '1.16rem', lineHeight: 1.5, color: '#2B2F2A', margin: '0 0 8px' }}>
                    Plan around the capacity you have, not the capacity you wish you had.
                  </p>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: '#6A6F68', margin: 0 }}>
                    &ldquo;I didn&apos;t need another to-do app. I needed something that could work with a changing brain and a full life.&rdquo;
                  </p>
                </div>
              </div>

              <div className="hero-mock-wrap">
                <div style={{
                  borderRadius: '32px',
                  padding: '18px',
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.92), rgba(255,255,255,0.84))',
                  border: '1px solid rgba(92,74,94,0.12)',
                  boxShadow: '0 22px 48px rgba(92,74,94,0.16)',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  <div style={{ padding: '6px 4px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Image src="/icon.svg" alt="" width={18} height={18} style={{ width: '18px', height: '18px' }} />
                      <span style={{ fontSize: '0.95rem', color: '#5C4A5E', fontWeight: 600 }}>Steady</span>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#9A9E96' }}>Thursday 18 June</span>
                  </div>

                  <div style={{ display: 'grid', gap: '12px' }}>
                    <div style={{
                      borderRadius: '22px',
                      padding: '18px',
                      background: '#E4EAF0',
                      border: '1px solid rgba(107,131,160,0.18)',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '9999px', background: '#6B83A0' }} />
                        <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6B83A0', fontWeight: 700 }}>
                          Steady day
                        </span>
                      </div>
                      <div className="font-display" style={{ fontSize: '1.9rem', lineHeight: 1.15, color: '#2B2F2A', marginBottom: '10px' }}>
                        Two real things done beats three half-started.
                      </div>
                      <div style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#6B83A0' }}>
                        Capacity can change. Adjust today if reality has shifted.
                      </div>
                    </div>

                    <div style={{
                      borderRadius: '22px',
                      padding: '16px',
                      background: 'rgba(255,255,255,0.90)',
                      border: '1px solid #ECE8EE',
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', marginBottom: '12px' }}>
                        <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#5C4A5E' }}>Non-Negotiables</span>
                        <span style={{ fontSize: '0.75rem', color: '#9A9E96' }}>still happening</span>
                      </div>
                      <div style={{ display: 'grid', gap: '8px', marginBottom: '14px' }}>
                        {['Work 9-5', 'Client meeting at 2pm'].map((item) => (
                          <div key={item} style={{ fontSize: '0.95rem', color: '#2B2F2A' }}>{item}</div>
                        ))}
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', marginBottom: '12px' }}>
                        <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#5C4A5E' }}>Today</span>
                        <span style={{ fontSize: '0.75rem', color: '#9A9E96' }}>2 of 3 chosen</span>
                      </div>
                      <div style={{ display: 'grid', gap: '10px' }}>
                        {['Make GP appointment', 'Send clothes order back'].map((item) => (
                          <div
                            key={item}
                            style={{
                              borderRadius: '14px',
                              padding: '12px 14px',
                              background: '#FFFFFF',
                              border: '1px solid #ECE8EE',
                              fontSize: '0.95rem',
                              color: '#2B2F2A',
                            }}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{
                      display: 'grid',
                      gap: '10px',
                      gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
                    }}>
                      <div style={{
                        borderRadius: '18px',
                        padding: '14px',
                        background: 'rgba(255,255,255,0.82)',
                        border: '1px solid rgba(229,224,232,0.92)',
                      }}>
                        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8A8F86', marginBottom: '8px' }}>
                          Patterns
                        </div>
                        <div style={{ fontSize: '0.9rem', lineHeight: 1.55, color: '#4A4E47' }}>
                          Brain fog shows up more often after poor sleep.
                        </div>
                      </div>

                      <div style={{
                        borderRadius: '18px',
                        padding: '14px',
                        background: 'rgba(255,255,255,0.82)',
                        border: '1px solid rgba(229,224,232,0.92)',
                      }}>
                        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8A8F86', marginBottom: '8px' }}>
                          Nudges
                        </div>
                        <div style={{ fontSize: '0.9rem', lineHeight: 1.55, color: '#4A4E47' }}>
                          Gentle reminders, only if you want them.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '56px 20px 72px' }}>
        <div className="landing-shell">
          <div style={{ maxWidth: '36rem', marginBottom: '22px' }}>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8A8F86', marginBottom: '10px' }}>
              What Steady helps with
            </div>
            <h2 className="font-display" style={{ fontSize: '2.15rem', lineHeight: 1.08, color: '#2B2F2A', marginBottom: '10px' }}>
              A calmer way to hold a full day.
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#4A4E47', margin: 0, maxWidth: '34rem' }}>
              Steady is for the days when your head is busy, your battery is mixed, and one giant list makes everything feel worse.
            </p>
          </div>

          <div className="help-grid">
            {helpCards.map((item) => (
              <div
                key={item.title}
                style={{
                  borderRadius: '22px',
                  padding: '20px',
                  background: 'rgba(255,255,255,0.66)',
                  border: '1px solid rgba(229,224,232,0.9)',
                  boxShadow: '0 8px 24px rgba(92,74,94,0.06)',
                }}
              >
                <div style={{ fontSize: '1rem', fontWeight: 600, color: '#2B2F2A', marginBottom: '8px' }}>
                  {item.title}
                </div>
                <div style={{ fontSize: '0.95rem', lineHeight: 1.7, color: '#6A6F68' }}>
                  {item.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowSteadyWorks />

      <section style={{ padding: '0 20px 72px' }}>
        <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            borderRadius: '28px',
            padding: '34px 24px',
            background: 'rgba(255,255,255,0.72)',
            border: '1px solid rgba(229,224,232,0.9)',
            boxShadow: '0 10px 30px rgba(92,74,94,0.08)',
          }}>
            <h2 className="font-display" style={{ fontSize: '2.1rem', lineHeight: 1.08, color: '#2B2F2A', marginBottom: '12px' }}>
              Built for the days your brain says no.
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#4A4E47', margin: '0 auto 20px', maxWidth: '36rem' }}>
              Start with a quick check-in, plan around what&apos;s already real, and stop expecting a hard day to behave like an easy one.
            </p>
            <Link
              href={APP_URL}
              style={{
                display: 'inline-block',
                padding: '14px 18px',
                borderRadius: '14px',
                background: '#5C4A5E',
                color: '#FFF',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 600,
              }}
            >
              Try Steady
            </Link>
          </div>
        </div>
      </section>

      <footer style={{ padding: '0 20px 72px' }}>
        <div style={{
          maxWidth: '52rem',
          margin: '0 auto',
          borderRadius: '24px',
          padding: '24px',
          background: 'rgba(255,255,255,0.62)',
          border: '1px solid rgba(229,224,232,0.9)',
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '18px' }}>
            <Link
              href="/privacy"
              style={{
                padding: '10px 14px',
                borderRadius: '12px',
                border: '1.5px solid #D8D2D9',
                color: '#5C4A5E',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: 600,
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              style={{
                padding: '10px 14px',
                borderRadius: '12px',
                border: '1.5px solid #D8D2D9',
                color: '#5C4A5E',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: 600,
              }}
            >
              Terms of Service
            </Link>
          </div>

          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8A8F86', marginBottom: '10px' }}>
            Important
          </div>
          <div style={{ display: 'grid', gap: '12px', fontSize: '0.9375rem', lineHeight: 1.7, color: '#6A6F68' }}>
            <p style={{ margin: 0 }}>
              Steady is a planning and reflection tool. It is not a medical device and does not provide medical advice, diagnosis or treatment.
            </p>
            <p style={{ margin: 0 }}>
              The insights and patterns shown in the app are designed to support self-awareness and everyday planning. They should not be used to diagnose medical conditions or replace professional healthcare advice.
            </p>
            <p style={{ margin: 0 }}>
              If you have concerns about your physical or mental health, please speak to a qualified healthcare professional.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
