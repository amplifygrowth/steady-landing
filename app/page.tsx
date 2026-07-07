import Image from 'next/image'
import Link from 'next/link'
import HowSteadyWorks from '@/components/how-steady-works'
import { StartPageViewTracker, TrackedAppLink } from '@/components/landing-tracking'
import { APP_URL } from '@/lib/app-url'

const CAP_COLOR: Record<string, string> = { green: '#4A7B5C', amber: '#6B83A0', red: '#B96A6A' }

const CAP28 = [
  'red','amber','amber','green','amber','red','amber',
  'green','green','amber','red','amber','green','amber',
  'amber','red','green','amber','amber','green','red',
  'amber','green','green','amber','amber','red','amber',
] as const

const CP_ROWS = [
  { label: 'Momentum',    color: '#4A7B5C', textColor: '#2D5A3D', pct: 87, planned: 3.2, done: 2.8, days: 12 },
  { label: 'Steady',      color: '#6B83A0', textColor: '#3A506B', pct: 67, planned: 3.1, done: 2.1, days: 9  },
  { label: 'Low Battery', color: '#B96A6A', textColor: '#7A3030', pct: 48, planned: 3.0, done: 1.4, days: 7  },
]

const FOUR_SECTIONS = [
  {
    label: 'Non-Negotiables',
    accent: '#5C4A5E',
    bg: '#F3F0F4',
    border: '#D8D2D9',
    purpose: 'Already in the diary',
    desc: 'Work, appointments, school run. These are the fixed points that already own part of your day. Steady keeps them visible as commitments, not as another set of tasks to achieve.',
    items: ['Work 9–5', 'GP appointment 2pm', 'School pickup 3:30pm'],
  },
  {
    label: 'Daily Basics',
    accent: '#3A7A50',
    bg: '#EAF4EE',
    border: '#B8D9C4',
    purpose: 'Life ticking over',
    desc: 'The everyday things that keep life functioning. Washing up, medication, dinner, walking the dog. They reset fresh each day, without turning yesterday into a debt.',
    items: ['Reset the kitchen', 'Take medication', 'Move your body'],
  },
  {
    label: 'Today',
    accent: '#5C4A5E',
    bg: '#F3F0F4',
    border: '#D8D2D9',
    purpose: 'In focus today',
    desc: 'Up to three things you would like to get done today. The cap is deliberate. It is not about doing less. It is about reducing the overwhelm of a long open list.',
    items: ['Make GP appointment', 'Send clothes order back', 'Reply to that email'],
  },
  {
    label: 'Later',
    accent: '#4A6A8A',
    bg: '#E4EAF0',
    border: '#B8C8D9',
    purpose: 'Can safely wait',
    desc: 'For the tasks that arrive while you are supposed to be doing something else. Out of your head, not lost, and not asking to be dealt with today.',
    items: ['Sort the kitchen cupboards', 'Research new phone contract', 'Check holiday dates'],
  },
  {
    label: 'Ideas',
    accent: '#7A5D3A',
    bg: '#F5EFE4',
    border: '#E4D2B8',
    purpose: 'Worth keeping',
    desc: 'Ideas need somewhere to land before they disappear. Steady gives them a home without pretending they belong in today\'s plan.',
    items: ['Birthday present idea', 'Weekend trip thought', 'Thing to ask at work'],
  },
  {
    label: 'Worry Jar',
    accent: '#7A5368',
    bg: '#F4E8EF',
    border: '#DEC4D2',
    purpose: 'Not today\'s plan',
    desc: 'Worries can take up as much room as tasks. The Worry Jar gives them somewhere to go so they do not have to compete with what needs your attention today.',
    items: ['Money thing to think about', 'Health worry', 'Message I keep replaying'],
  },
]

const WHO_FOR = [
  {
    heading: 'Busy midlife women',
    body: 'Work, home, family, admin, appointments, dinner, messages, things to remember and things you are worried about. Steady is for the days when too much is being carried in your head at once.',
  },
  {
    heading: 'Changing capacity',
    body: 'Some days you have more energy and focus than others. Steady starts from that reality instead of asking you to plan as if every day is the same.',
  },
  {
    heading: 'Neurodiversity, menopause and more',
    body: 'Some users are neurodivergent. Some are peri or post menopausal. Some simply feel overwhelmed by everything they are carrying. None of those things are requirements.',
  },
  {
    heading: 'People failed by ordinary planners',
    body: 'Most planning tools flatten everything into one long list. Steady gives different kinds of mental load different places, so everything has a home without everything demanding attention today.',
  },
]

export default function LandingPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#FAFAF7' }}>
      <StartPageViewTracker page="home" />
      <style>{`
        .ls { max-width: 74rem; margin: 0 auto; }
        .hero-grid { display: grid; gap: 32px; align-items: center; }
        .four-grid { display: grid; gap: 14px; }
        .cp-track { position: relative; height: 10px; background: #F0F1EC; border-radius: 5px; margin-bottom: 5px; }
        .cp-fill { position: absolute; inset: 0 auto 0 0; border-radius: 5px; opacity: 0.85; }
        .who-grid { display: grid; gap: 16px; }
        .help-grid { display: grid; gap: 14px; }
        @media (min-width: 860px) {
          .hero-grid { grid-template-columns: minmax(0, 1.1fr) minmax(340px, 0.9fr); gap: 48px; }
          .four-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .who-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .help-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        @media (min-width: 1100px) {
          .four-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        }
      `}</style>

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <header style={{ padding: '20px 20px 0' }}>
        <div className="ls" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Image src="/icon.svg" alt="" width={22} height={22} style={{ width: '22px', height: '22px', flexShrink: 0 }} />
            <span className="font-display" style={{ fontSize: '1.5rem', color: '#2B2F2A' }}>Steady</span>
          </div>
          <TrackedAppLink
            href={APP_URL}
            event="landing_signin_clicked"
            location="header"
            page="home"
            style={{ padding: '10px 14px', borderRadius: '12px', border: '1.5px solid #D8D2D9', color: '#5C4A5E', textDecoration: 'none', fontSize: '0.9375rem', fontWeight: 600 }}
          >
            Sign in
          </TrackedAppLink>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section style={{ padding: '24px 20px 48px' }}>
        <div className="ls">
          <div style={{
            borderRadius: '32px',
            background: 'linear-gradient(135deg, rgba(244,239,247,0.95) 0%, rgba(255,255,255,0.85) 42%, rgba(249,247,242,0.92) 100%)',
            border: '1px solid rgba(229,224,232,0.92)',
            boxShadow: '0 24px 68px rgba(92,74,94,0.12)',
            overflow: 'hidden',
          }}>
            <div className="hero-grid" style={{ padding: '36px 28px' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', borderRadius: '9999px', padding: '7px 12px', marginBottom: '20px', background: 'rgba(92,74,94,0.08)', border: '1px solid rgba(92,74,94,0.12)', color: '#5C4A5E', fontSize: '0.8125rem', fontWeight: 600 }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '9999px', background: '#5C4A5E' }} />
                  Free for the first 100 users
                </div>

                <h1 className="font-display" style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5rem)', lineHeight: 0.96, color: '#2B2F2A', marginBottom: '16px' }}>
                  Steady
                </h1>
                <p className="font-display" style={{ fontSize: 'clamp(1.4rem, 3.2vw, 2.3rem)', lineHeight: 1.1, color: '#2B2F2A', margin: '0 0 20px' }}>
                  Planning for the day you actually have.
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#4A4E47', margin: '0 0 24px', maxWidth: '40rem' }}>
                  Steady helps overwhelmed midlife women organise what is already in the diary, what keeps life ticking over, what they would like to get done today, and what can safely wait.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
                  <TrackedAppLink
                    href={APP_URL}
                    event="landing_start_signup_clicked"
                    location="hero"
                    page="home"
                    style={{ padding: '13px 20px', borderRadius: '14px', background: '#5C4A5E', color: '#FFF', textDecoration: 'none', fontSize: '1rem', fontWeight: 600 }}
                  >
                    Get started free
                  </TrackedAppLink>
                  <Link
                    href="/why"
                    style={{ padding: '13px 20px', borderRadius: '14px', border: '1.5px solid #D8D2D9', color: '#5C4A5E', textDecoration: 'none', fontSize: '1rem', fontWeight: 600 }}
                  >
                    Why this exists
                  </Link>
                </div>
              </div>

              {/* Hero mock — Today screen */}
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', inset: '6% -6% auto 14%', height: '70%', borderRadius: '9999px', background: 'radial-gradient(circle, rgba(92,74,94,0.15) 0%, transparent 70%)', filter: 'blur(12px)', pointerEvents: 'none' }} />
                <div style={{ position: 'relative', zIndex: 1, borderRadius: '28px', padding: '20px', background: 'rgba(255,255,255,0.92)', border: '1px solid rgba(92,74,94,0.10)', boxShadow: '0 20px 50px rgba(92,74,94,0.15)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Image src="/icon.svg" alt="" width={16} height={16} style={{ width: '16px', height: '16px' }} />
                      <span style={{ fontSize: '0.875rem', color: '#5C4A5E', fontWeight: 600 }}>Steady</span>
                    </div>
                    <span style={{ fontSize: '0.6875rem', color: '#9A9E96' }}>Wednesday · Steady day</span>
                  </div>

                  <div style={{ borderRadius: '18px', padding: '14px 16px', background: '#E4EAF0', border: '1px solid rgba(107,131,160,0.2)', marginBottom: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '6px' }}>
                      <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#6B83A0', display: 'inline-block' }} />
                      <span style={{ fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6B83A0', fontWeight: 700 }}>Steady day</span>
                    </div>
                    <p className="font-display" style={{ fontSize: '1.1rem', lineHeight: 1.2, color: '#2B2F2A', margin: '0 0 4px' }}>Two real things done beats three half-started.</p>
                  </div>

                  {[
                    { label: 'Non-Negotiables', items: ['Work 9–5', 'School pickup 3:30'] },
                    { label: 'Daily Basics', items: ['Reset the kitchen ✓', 'Take medication'] },
                    { label: 'Today', items: ['Make GP appointment', 'Send clothes order back'] },
                    { label: 'Later', items: ['Research new phone contract', 'Look into that course'] },
                  ].map(({ label, items }) => (
                    <div key={label} style={{ borderRadius: '14px', padding: '12px 14px', background: '#FAFAF7', border: '1px solid #ECE8EE', marginBottom: '8px' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#5C4A5E', marginBottom: '7px' }}>{label}</div>
                      {items.map(item => (
                        <div key={item} style={{ fontSize: '0.875rem', color: '#2B2F2A', paddingBottom: '4px' }}>{item}</div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The question ────────────────────────────────────────────────── */}
      <section style={{ padding: '0 20px 72px' }}>
        <div className="ls">
          <div style={{ maxWidth: '54rem', margin: '0 auto' }}>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8A8F86', marginBottom: '16px' }}>
              Why ordinary planning can fall apart
            </div>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', lineHeight: 1.05, color: '#2B2F2A', marginBottom: '24px' }}>
              Life isn&apos;t one long to-do list.
            </h2>
            <div style={{ display: 'grid', gap: '16px' }}>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#4A4E47', margin: 0 }}>
                Some things already own your day. Some things happen every day. Some are jobs you would like to get done. Some are ideas. Some are worries. Some can safely wait.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#4A4E47', margin: 0 }}>
                Most planners fail because they flatten every kind of thought into the same list. Steady does something calmer: it gives different kinds of mental load different places.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#4A4E47', margin: 0 }}>
                Everything in your head deserves a home. Not everything deserves your attention today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Four kinds of support ────────────────────────────────────────── */}
      <section style={{ padding: '0 20px 72px' }}>
        <div className="ls">
          <div style={{ maxWidth: '40rem', marginBottom: '32px' }}>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8A8F86', marginBottom: '10px' }}>
              How the Today screen works
            </div>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.08, color: '#2B2F2A', marginBottom: '12px' }}>
              Steady gives each kind of mental load a proper place.
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#6A6F68', margin: 0 }}>
              The Today screen is not one long list. It separates what is already happening, what keeps life ticking over, what is in focus, and what can wait.
            </p>
          </div>

          <div className="four-grid">
            {FOUR_SECTIONS.map((s) => (
              <div key={s.label} style={{ borderRadius: '22px', padding: '22px', background: s.bg, border: `1.5px solid ${s.border}` }}>
                <div style={{ fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.07em', color: s.accent, fontWeight: 700, marginBottom: '6px' }}>
                  {s.purpose}
                </div>
                <div style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#2B2F2A', marginBottom: '10px' }}>
                  {s.label}
                </div>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.65, color: '#4A4E47', margin: '0 0 14px' }}>
                  {s.desc}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {s.items.map(item => (
                    <div key={item} style={{ fontSize: '0.8125rem', color: '#5A5E56', padding: '7px 10px', borderRadius: '9px', background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.9)' }}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How a day works (interactive walkthrough) ────────────────────── */}
      <HowSteadyWorks />

      {/* ── What you learn over time (Patterns) ─────────────────────────── */}
      <section style={{ padding: '0 20px 72px' }}>
        <div className="ls">
          <div style={{ maxWidth: '40rem', marginBottom: '36px' }}>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8A8F86', marginBottom: '10px' }}>
              What you learn over time
            </div>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.08, color: '#2B2F2A', marginBottom: '12px' }}>
              Ordinary days, added over time, start to tell a story.
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#4A4E47', margin: 0 }}>
              One day tells you very little. Patterns help you understand how mornings compare with evenings, what affects energy and focus, what helps you recover, and how your capacity changes over time.
            </p>
          </div>

          <div style={{ display: 'grid', gap: '20px' }}>
            {/* Capacity bar — 28 days */}
            <div style={{ borderRadius: '22px', padding: '24px', background: 'rgba(255,255,255,0.82)', border: '1px solid rgba(229,224,232,0.9)', boxShadow: '0 6px 24px rgba(92,74,94,0.06)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#8A8F86', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '14px' }}>
                Last 28 days
              </div>
              <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '12px' }}>
                {CAP28.map((cap, i) => (
                  <div key={i} style={{ width: '22px', height: '22px', borderRadius: '6px', background: CAP_COLOR[cap], opacity: 0.85, flexShrink: 0 }} />
                ))}
              </div>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                {(['green','amber','red'] as const).map(cap => {
                  const count = CAP28.filter(c => c === cap).length
                  const labels = { green: 'Momentum', amber: 'Steady', red: 'Low Battery' }
                  return (
                    <div key={cap} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <div style={{ width: '10px', height: '10px', borderRadius: '3px', background: CAP_COLOR[cap] }} />
                      <span style={{ fontSize: '0.8125rem', color: '#7A7E76' }}>{labels[cap]} · {count} days</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Capacity & Progress — seeded */}
            <div style={{ borderRadius: '22px', padding: '24px', background: 'rgba(255,255,255,0.82)', border: '1px solid rgba(229,224,232,0.9)', boxShadow: '0 6px 24px rgba(92,74,94,0.06)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#8A8F86', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '16px' }}>
                Capacity &amp; Progress
              </div>

              <p className="font-display" style={{ fontSize: '1.35rem', lineHeight: 1.25, color: '#2B2F2A', margin: '0 0 20px' }}>
                Capacity changes the shape of the day.
              </p>

              <div style={{ display: 'grid', gap: '18px', marginBottom: '20px' }}>
                {CP_ROWS.map(row => (
                  <div key={row.label}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                        <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: row.color, flexShrink: 0 }} />
                        <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#2B2F2A' }}>{row.label}</span>
                      </div>
                      <span style={{ fontSize: '0.875rem', fontWeight: 700, color: row.textColor }}>{row.pct}%</span>
                    </div>
                    <div className="cp-track">
                      <div className="cp-fill" style={{ width: `${row.pct}%`, background: row.color }} />
                    </div>
                    <p style={{ fontSize: '0.75rem', color: '#9A9E96', margin: 0, lineHeight: 1.4 }}>
                      {row.planned.toFixed(1)} planned · {row.done.toFixed(1)} done · {row.days} days
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: '1px solid #F0F1EC', paddingTop: '16px', display: 'grid', gap: '12px' }}>
                <p style={{ fontSize: '0.9375rem', color: '#2B2F2A', lineHeight: 1.55, margin: 0 }}>
                  You planned a similar number of tasks regardless of battery level, around 3 each day. On Low Battery days, fewer were completed. On Momentum days, more were completed. The pattern helps show what was realistic, not what you should have forced.
                </p>
                <p style={{ fontSize: '0.9375rem', color: '#2B2F2A', lineHeight: 1.55, margin: 0 }}>
                  Daily Basics stayed more consistent across capacity levels than planned tasks did.
                </p>
              </div>
            </div>

            {/* What I've learned */}
            <div style={{ borderRadius: '22px', padding: '24px', background: '#F3F0F4', border: '1.5px solid rgba(92,74,94,0.12)', boxShadow: '0 6px 24px rgba(92,74,94,0.06)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#5C4A5E', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '14px' }}>
                What I&apos;ve learned
              </div>
              <div style={{ display: 'grid', gap: '12px' }}>
                {[
                  'Low sleep and difficult mornings often show up together.',
                  'Low Battery mornings recover to Steady by end of day around 40% of the time.',
                  'You started Steady but finished Low Battery on 4 of the last 7 days, usually after 2pm.',
                ].map((obs, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#5C4A5E', flexShrink: 0, marginTop: '6px' }} />
                    <p style={{ fontSize: '0.9375rem', color: '#2B2F2A', lineHeight: 1.5, margin: 0 }}>{obs}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Daily Reflection ─────────────────────────────────────────────── */}
      <section style={{ padding: '0 20px 72px' }}>
        <div className="ls">
          <div style={{ display: 'grid', gap: '32px', alignItems: 'center' }}>
            <div style={{ maxWidth: '38rem' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8A8F86', marginBottom: '10px' }}>
                Daily Reflection
              </div>
              <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.08, color: '#2B2F2A', marginBottom: '16px' }}>
                At the end of the day, one honest observation.
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#4A4E47', margin: '0 0 14px' }}>
                After your evening close, Steady looks at what actually happened and offers a single sentence based on your own entries. Not encouragement. Not a score. Just a real observation.
              </p>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.8, color: '#6A6F68', margin: 0 }}>
                On a Low Battery day where you completed more tasks than usual, it notices. On a day where your Daily Basics held steady even when everything else fell away, it notices that too. It only says something when there is something real to say.
              </p>
            </div>

            <div style={{ display: 'grid', gap: '10px', maxWidth: '26rem' }}>
              {[
                { cap: 'amber', obs: 'You completed more tasks than usual for a Steady day.' },
                { cap: 'red',   obs: 'Your basics stayed consistent even on a Low Battery day.' },
                { cap: 'red',   obs: 'You started Low Battery and finished Steady.' },
              ].map((ex, i) => (
                <div key={i} style={{ borderRadius: '18px', padding: '16px 18px', background: 'rgba(255,255,255,0.88)', border: '1px solid rgba(229,224,232,0.9)', boxShadow: '0 4px 16px rgba(92,74,94,0.06)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                    <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: CAP_COLOR[ex.cap], flexShrink: 0 }} />
                    <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#8A8F86', textTransform: 'uppercase', letterSpacing: '0.07em' }}>Today&apos;s pattern</span>
                  </div>
                  <p style={{ fontSize: '0.9375rem', color: '#2B2F2A', lineHeight: 1.55, margin: 0 }}>{ex.obs}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Who it's for ─────────────────────────────────────────────────── */}
      <section style={{ padding: '0 20px 72px' }}>
        <div className="ls">
          <div style={{ maxWidth: '38rem', marginBottom: '32px' }}>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8A8F86', marginBottom: '10px' }}>
              Who Steady is for
            </div>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.08, color: '#2B2F2A', marginBottom: '12px' }}>
              Built for busy women whose capacity does not stay consistent.
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#6A6F68', margin: 0 }}>
              You do not need a diagnosis or a particular life stage for Steady to make sense. It is for women who need the plan to fit the day they actually have.
            </p>
          </div>

          <div className="who-grid">
            {WHO_FOR.map((item) => (
              <div key={item.heading} style={{ borderRadius: '22px', padding: '22px', background: 'rgba(255,255,255,0.72)', border: '1px solid rgba(229,224,232,0.9)', boxShadow: '0 6px 20px rgba(92,74,94,0.05)' }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#2B2F2A', marginBottom: '10px', lineHeight: 1.3 }}>
                  {item.heading}
                </div>
                <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: '#6A6F68', margin: 0 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Steady isn't ───────────────────────────────────────────── */}
      <section style={{ padding: '0 20px 72px' }}>
        <div className="ls">
          <div style={{ maxWidth: '54rem', margin: '0 auto', borderRadius: '24px', padding: '28px', background: 'rgba(243,240,244,0.6)', border: '1px solid rgba(92,74,94,0.12)' }}>
            <h3 className="font-display" style={{ fontSize: '1.5rem', color: '#2B2F2A', marginBottom: '16px' }}>
              What Steady is not
            </h3>
            <div className="help-grid">
              {[
                ['Not a productivity app', 'Steady is not about endless output. It helps you make today\'s plan fit today\'s reality.'],
                ['Not a habit tracker', 'There are no streaks. Missing a day doesn\'t create a debt. Your Daily Basics reset fresh each morning.'],
                ['Not medical advice', 'Steady is a planning and reflection tool. It helps you notice patterns. It doesn\'t diagnose, treat or replace conversations with your GP, psychiatrist or specialist.'],
              ].map(([title, body]) => (
                <div key={title as string} style={{ borderRadius: '16px', padding: '18px', background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(229,224,232,0.8)' }}>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#2B2F2A', marginBottom: '8px' }}>{title}</div>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: '#6A6F68', margin: 0 }}>{body as string}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section style={{ padding: '0 20px 72px' }}>
        <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ borderRadius: '28px', padding: '40px 28px', background: 'rgba(255,255,255,0.82)', border: '1px solid rgba(229,224,232,0.9)', boxShadow: '0 10px 32px rgba(92,74,94,0.08)' }}>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.08, color: '#2B2F2A', marginBottom: '14px' }}>
              You don&apos;t have to sort everything out today.
            </h2>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: '#4A4E47', margin: '0 auto 24px', maxWidth: '38rem' }}>
              Just start with today. The first 100 users get free access in exchange for honest feedback.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
              <TrackedAppLink
                href={APP_URL}
                event="landing_start_signup_clicked"
                location="final_cta"
                page="home"
                style={{ padding: '14px 22px', borderRadius: '14px', background: '#5C4A5E', color: '#FFF', textDecoration: 'none', fontSize: '1rem', fontWeight: 600 }}
              >
                Get started free
              </TrackedAppLink>
              <Link
                href="/why"
                style={{ padding: '14px 22px', borderRadius: '14px', border: '1.5px solid #D8D2D9', color: '#5C4A5E', textDecoration: 'none', fontSize: '1rem', fontWeight: 600 }}
              >
                Why this exists
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer style={{ padding: '0 20px 72px' }}>
        <div style={{ maxWidth: '52rem', margin: '0 auto', borderRadius: '24px', padding: '24px', background: 'rgba(255,255,255,0.62)', border: '1px solid rgba(229,224,232,0.9)' }}>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: '#6A6F68', margin: '0 0 16px' }}>
            Need help or have a question?{' '}
            <a href="mailto:hello@capablemind.app" style={{ color: '#5C4A5E', fontWeight: 600, textDecoration: 'none' }}>hello@capablemind.app</a>
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
            {([['Privacy Policy', '/privacy'], ['Terms of Service', '/terms'], ['Cookie Policy', '/cookies'], ['Refund Policy', '/refunds'], ['Why Steady exists', '/why']] as const).map(([label, href]) => (
              <Link key={href} href={href} style={{ padding: '10px 14px', borderRadius: '12px', border: '1.5px solid #D8D2D9', color: '#5C4A5E', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 600 }}>
                {label}
              </Link>
            ))}
          </div>
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8A8F86', marginBottom: '10px' }}>Important</div>
          <div style={{ display: 'grid', gap: '10px', fontSize: '0.875rem', lineHeight: 1.7, color: '#6A6F68' }}>
            <p style={{ margin: 0 }}>Steady is a planning and reflection tool. It is not a medical device and does not provide medical advice, diagnosis or treatment.</p>
            <p style={{ margin: 0 }}>The insights and patterns shown in the app are designed to support self-awareness and everyday planning. They should not be used to diagnose medical conditions or replace professional healthcare advice. If you have concerns about your health, please speak to a qualified healthcare professional.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
