'use client'

import { useState } from 'react'

const steps = [
  {
    id: 1,
    label: 'Morning check-in',
    heading: "Start with the day you've actually got.",
    copy: 'Rate your energy, focus and mood, then choose your capacity: Momentum, Steady or Low Battery. Add anything already affecting you — poor sleep, brain fog, a hard morning. Honest beats optimistic. The plan adjusts either way.',
  },
  {
    id: 2,
    label: 'Plan the day',
    heading: 'Four sections. Four different kinds of support.',
    copy: 'Non-Negotiables are memory support: fixed commitments that need reminding. Basics are your maintenance tasks, which reset fresh each day. Today holds up to three things you want to attempt. The cap exists because executive dysfunction makes a long open list harder to start from. Later is for tasks that arrive while you\'re mid-something else, so you can park them without switching.',
  },
  {
    id: 3,
    label: 'Midday check-in',
    heading: 'An optional nudge around midday.',
    copy: "Around midday, Steady sends an optional check-in to see how you're getting on. If your battery has shifted since morning, you can update it here. Your plan adjusts around whatever is real now. You don't have to respond — it's just there if things have changed.",
  },
  {
    id: 4,
    label: 'Evening close',
    heading: 'Record what actually happened.',
    copy: 'A quick reflection at the end of the day. How did it go? Any symptoms worth noting? How did your capacity finish compared to how it started? This is the data that builds your patterns over time.',
  },
  {
    id: 5,
    label: 'Daily Reflection',
    heading: 'One honest observation, based on your data.',
    copy: 'After your evening close, Steady looks at what actually happened and offers a single sentence grounded in your history. Not encouragement. Not a score. Just a real observation, like "You completed more tasks than usual for a Low Battery day" or "Your basics held steady even when everything else fell away."',
  },
  {
    id: 6,
    label: 'Patterns',
    heading: 'Learn from the difference.',
    copy: "After about a week, Patterns starts showing you how your capacity affects what actually gets done. You'll see whether you plan the same amount regardless of battery level, whether Momentum days genuinely translate into more done, and what tends to affect your harder days. Understanding your patterns is more useful than trying to override them.",
  },
] as const

function StepScreen({ step }: { step: number }) {
  const shellStyle: React.CSSProperties = {
    borderRadius: '24px',
    background: 'rgba(255,255,255,0.74)',
    border: '1px solid rgba(229,224,232,0.9)',
    boxShadow: '0 10px 30px rgba(92,74,94,0.10)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    overflow: 'hidden',
  }
  const surfaceStyle: React.CSSProperties = {
    borderRadius: '16px',
    background: 'rgba(255,255,255,0.88)',
    border: '1px solid #ECE8EE',
  }

  if (step === 1) {
    return (
      <div style={shellStyle}>
        <div style={{ padding: '18px 18px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '0.75rem', color: '#8A8F86', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Morning check-in</div>
          <div style={{ fontSize: '0.75rem', color: '#9A9E96' }}>7:32am</div>
        </div>
        <div style={{ padding: '18px' }}>
          <div style={{ ...surfaceStyle, padding: '16px' }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#2B2F2A', marginBottom: '10px' }}>How are you arriving today?</div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
              {([['Momentum', false], ['Steady', true], ['Low Battery', false]] as const).map(([label, active]) => (
                <div key={label} style={{ flex: 1, padding: '10px 6px', borderRadius: '12px', textAlign: 'center', fontSize: '0.8125rem', fontWeight: active ? 600 : 500, background: active ? '#F3F0F4' : '#FAFAF7', border: `1.5px solid ${active ? '#5C4A5E' : '#E3E4DE'}`, color: active ? '#5C4A5E' : '#6E726B' }}>
                  {label}
                </div>
              ))}
            </div>
            <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#2B2F2A', marginBottom: '8px' }}>What&apos;s influencing your battery?</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {['Poor sleep', 'Woke multiple times', 'Brain fog'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 12px', borderRadius: '10px', background: '#F3F0F4', border: '1px solid #D8D2D9', color: '#5C4A5E', fontSize: '0.875rem' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.75rem' }}>✓</span> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (step === 2) {
    return (
      <div style={shellStyle}>
        <div style={{ padding: '18px 18px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '0.75rem', color: '#8A8F86', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Today</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#6B83A0', display: 'inline-block' }} />
            <div style={{ fontSize: '0.75rem', color: '#9A9E96' }}>Steady day</div>
          </div>
        </div>
        <div style={{ padding: '12px 18px 18px', display: 'grid', gap: '8px' }}>
          {([
            { title: 'Non-Negotiables', color: '#5C4A5E', items: ['Work 9–5', 'School pickup 3:30'], note: 'memory support' },
            { title: 'Basics', color: '#3A7A50', items: ['Reset the kitchen', 'Take medication'], note: 'maintenance' },
            { title: 'Today', color: '#5C4A5E', items: ['Make GP appointment', 'Send clothes order back'], note: 'up to 3' },
            { title: 'Later', color: '#4A6A8A', items: ['Research new phone contract'], note: 'capture' },
          ] as const).map(({ title, color, items, note }) => (
            <div key={title} style={{ ...surfaceStyle, padding: '10px 12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <div style={{ fontSize: '0.8125rem', fontWeight: 700, color }}>{title}</div>
                <div style={{ fontSize: '0.6875rem', color: '#9A9E96' }}>{note}</div>
              </div>
              {items.map(item => (
                <div key={item} style={{ fontSize: '0.8125rem', color: '#4A4E47', paddingBottom: '3px' }}>{item}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (step === 3) {
    return (
      <div style={shellStyle}>
        <div style={{ padding: '18px 18px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '0.75rem', color: '#8A8F86', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Midday check-in</div>
          <div style={{ fontSize: '0.75rem', color: '#9A9E96' }}>12:30pm</div>
        </div>
        <div style={{ padding: '18px' }}>
          <div style={{ ...surfaceStyle, padding: '16px', marginBottom: '12px' }}>
            <div style={{ fontSize: '0.9375rem', color: '#2B2F2A', marginBottom: '6px' }}>Brain fog arrives.</div>
            <div style={{ fontSize: '0.9375rem', color: '#2B2F2A' }}>Energy drops.</div>
          </div>
          <div style={{ ...surfaceStyle, padding: '16px' }}>
            <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#2B2F2A', marginBottom: '10px' }}>Capacity update</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9375rem', color: '#2B2F2A' }}>
              <span style={{ padding: '7px 12px', borderRadius: '9999px', background: '#E4EAF0', color: '#6B83A0', border: '1px solid #B8C8D9', fontWeight: 600, fontSize: '0.875rem' }}>Steady</span>
              <span style={{ color: '#8A8F86' }}>→</span>
              <span style={{ padding: '7px 12px', borderRadius: '9999px', background: '#F2E0E0', color: '#B96A6A', border: '1px solid #E5C9C9', fontWeight: 600, fontSize: '0.875rem' }}>Low Battery</span>
            </div>
            <p style={{ fontSize: '0.8125rem', color: '#8A8F86', margin: '10px 0 0', lineHeight: 1.5 }}>Changing capacity isn&apos;t failure. It&apos;s the app adapting to reality.</p>
          </div>
        </div>
      </div>
    )
  }

  if (step === 4) {
    return (
      <div style={shellStyle}>
        <div style={{ padding: '18px 18px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '0.75rem', color: '#8A8F86', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Evening close</div>
          <div style={{ fontSize: '0.75rem', color: '#9A9E96' }}>8:47pm</div>
        </div>
        <div style={{ padding: '18px', display: 'grid', gap: '10px' }}>
          <div style={{ ...surfaceStyle, padding: '14px' }}>
            <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#2B2F2A', marginBottom: '8px' }}>How did the day go?</div>
            <div style={{ display: 'flex', gap: '7px' }}>
              {(['Fine', 'Hard', 'Write-off'] as const).map((label, i) => (
                <div key={label} style={{ flex: 1, padding: '9px 6px', borderRadius: '10px', textAlign: 'center', fontSize: '0.8125rem', fontWeight: i === 1 ? 600 : 400, background: i === 1 ? '#F3F0F4' : '#FAFAF7', border: `1.5px solid ${i === 1 ? '#5C4A5E' : '#E3E4DE'}`, color: i === 1 ? '#5C4A5E' : '#6E726B' }}>
                  {label}
                </div>
              ))}
            </div>
          </div>
          <div style={{ ...surfaceStyle, padding: '14px' }}>
            <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#2B2F2A', marginBottom: '8px' }}>Evening symptoms</div>
            <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap' }}>
              {['Brain fog', 'Overwhelm', 'Low mood'].map(item => (
                <div key={item} style={{ padding: '6px 10px', borderRadius: '9999px', background: '#F3F0F4', border: '1px solid #D8D2D9', color: '#5C4A5E', fontSize: '0.8125rem' }}>✓ {item}</div>
              ))}
            </div>
          </div>
          <div style={{ ...surfaceStyle, padding: '14px' }}>
            <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#2B2F2A', marginBottom: '8px' }}>Finished the day at</div>
            <div style={{ display: 'inline-flex', padding: '7px 12px', borderRadius: '9999px', background: '#F2E0E0', color: '#B96A6A', border: '1px solid #E5C9C9', fontSize: '0.875rem', fontWeight: 600 }}>
              Low Battery
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (step === 5) {
    return (
      <div style={shellStyle}>
        <div style={{ padding: '18px 18px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '0.75rem', color: '#8A8F86', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Daily Reflection</div>
          <div style={{ fontSize: '0.75rem', color: '#9A9E96' }}>After close</div>
        </div>
        <div style={{ padding: '18px', display: 'grid', gap: '10px' }}>
          <div style={{ ...surfaceStyle, padding: '14px 16px' }}>
            <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#8A8F86', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '7px' }}>Today&apos;s pattern</div>
            <p style={{ fontSize: '0.9375rem', color: '#2B2F2A', lineHeight: 1.55, margin: 0 }}>
              Your basics stayed consistent even on a Low Battery day.
            </p>
          </div>
          <div style={{ ...surfaceStyle, padding: '14px 16px' }}>
            <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#8A8F86', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '7px' }}>Today&apos;s pattern</div>
            <p style={{ fontSize: '0.9375rem', color: '#2B2F2A', lineHeight: 1.55, margin: 0 }}>
              You started Low Battery and finished Steady.
            </p>
          </div>
          <p style={{ fontSize: '0.8125rem', color: '#9A9E96', margin: 0, lineHeight: 1.5, padding: '0 4px' }}>
            Based on your data. Only appears when there&apos;s something real to say.
          </p>
        </div>
      </div>
    )
  }

  // Step 6 — Patterns
  const CP_ROWS = [
    { label: 'Momentum',    color: '#4A7B5C', textColor: '#2D5A3D', pct: 87, planned: 3.2, done: 2.8, days: 12 },
    { label: 'Steady',      color: '#6B83A0', textColor: '#3A506B', pct: 67, planned: 3.1, done: 2.1, days: 9  },
    { label: 'Low Battery', color: '#B96A6A', textColor: '#7A3030', pct: 48, planned: 3.0, done: 1.4, days: 7  },
  ]

  return (
    <div style={shellStyle}>
      <div style={{ padding: '18px 18px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '0.75rem', color: '#8A8F86', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Patterns</div>
        <div style={{ fontSize: '0.75rem', color: '#9A9E96' }}>Last 28 days</div>
      </div>
      <div style={{ padding: '14px 18px 18px', display: 'grid', gap: '10px' }}>
        <div style={{ ...surfaceStyle, padding: '14px 16px' }}>
          <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#2B2F2A', margin: '0 0 12px', lineHeight: 1.3 }}>
            Planning stayed consistent. Completion didn&apos;t.
          </p>
          <div style={{ display: 'grid', gap: '12px' }}>
            {CP_ROWS.map(row => (
              <div key={row.label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: row.color, flexShrink: 0 }} />
                    <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#2B2F2A' }}>{row.label}</span>
                  </div>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: row.textColor }}>{row.pct}%</span>
                </div>
                <div style={{ height: '7px', background: '#F0F1EC', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${row.pct}%`, background: row.color, borderRadius: '4px', opacity: 0.85 }} />
                </div>
                <p style={{ fontSize: '0.6875rem', color: '#9A9E96', margin: '3px 0 0', lineHeight: 1.4 }}>
                  {row.planned.toFixed(1)} planned · {row.done.toFixed(1)} done · {row.days} days
                </p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ ...surfaceStyle, padding: '12px 14px', background: '#F3F0F4' }}>
          <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#5C4A5E', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>What I&apos;ve learned</div>
          {['Brain fog appears more often after disturbed sleep.', 'Low Battery mornings recover 40% of the time.'].map((obs, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '7px', paddingTop: i === 0 ? 0 : '7px', marginTop: i === 0 ? 0 : '7px', borderTop: i === 0 ? 'none' : '1px solid rgba(92,74,94,0.1)' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#5C4A5E', flexShrink: 0, marginTop: '5px' }} />
              <p style={{ fontSize: '0.8125rem', color: '#2B2F2A', lineHeight: 1.5, margin: 0 }}>{obs}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function HowSteadyWorks() {
  const [currentStep, setCurrentStep] = useState(1)
  const current = steps[currentStep - 1]

  return (
    <section id="how-it-works" style={{ padding: '72px 20px' }}>
      <style>{`
        .how-steady-grid {
          display: grid;
          gap: 28px;
          align-items: start;
        }
        .how-steady-step {
          display: grid;
          gap: 20px;
        }
        .how-steady-screen {
          max-width: 23rem;
        }
        .how-steady-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          max-width: 23rem;
        }
        @media (min-width: 960px) {
          .how-steady-grid {
            grid-template-columns: minmax(320px, 0.9fr) minmax(420px, 0.95fr);
            gap: 42px;
          }
          .how-steady-step {
            min-height: 100%;
            align-content: start;
            padding-top: 8px;
          }
          .how-steady-screen,
          .how-steady-controls {
            max-width: none;
          }
        }
      `}</style>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <div className="how-steady-grid">
          <div className="how-steady-step">
            <div style={{ maxWidth: '34rem' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8A8F86', marginBottom: '10px' }}>
                Why Steady is different
              </div>
              <h2 className="font-display" style={{ fontSize: '2.15rem', lineHeight: 1.08, color: '#2B2F2A', marginBottom: '10px' }}>
                How Steady Works
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#4A4E47', margin: '0 0 10px' }}>
                It doesn&apos;t assume every day starts from the same place, and it doesn&apos;t treat changing capacity as failure.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#6A6F68', margin: 0 }}>
                Steady helps you plan around your real capacity, understand what each kind of day actually produces, and stop blaming yourself for the difference.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap' }}>
              {steps.map((step) => {
                const active = step.id === currentStep
                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => setCurrentStep(step.id)}
                    style={{
                      flex: '0 0 auto',
                      padding: '9px 13px',
                      borderRadius: '9999px',
                      border: `1.5px solid ${active ? '#5C4A5E' : '#E3E4DE'}`,
                      background: active ? '#5C4A5E' : 'rgba(255,255,255,0.7)',
                      color: active ? '#FFF' : '#6E726B',
                      fontSize: '0.8125rem',
                      fontWeight: active ? 600 : 500,
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {step.id}. {step.label}
                  </button>
                )
              })}
            </div>

            <div style={{ maxWidth: '34rem' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8A8F86', marginBottom: '8px' }}>
                Step {current.id} of {steps.length}
              </div>
              <h3 className="font-display" style={{ fontSize: '1.6rem', lineHeight: 1.15, color: '#2B2F2A', marginBottom: '12px' }}>
                {current.heading}
              </h3>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#4A4E47', margin: 0 }}>
                {current.copy}
              </p>
            </div>

            <div className="how-steady-controls">
              <button
                type="button"
                onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
                disabled={currentStep === 1}
                style={{ padding: '10px 14px', borderRadius: '12px', background: 'transparent', color: currentStep === 1 ? '#B9BCB6' : '#5C4A5E', border: '1.5px solid #D8D2D9', cursor: currentStep === 1 ? 'default' : 'pointer', fontSize: '0.9375rem', fontWeight: 600, fontFamily: 'inherit' }}
              >
                Back
              </button>
              <div style={{ fontSize: '0.8125rem', color: '#8A8F86' }}>{currentStep} of {steps.length}</div>
              <button
                type="button"
                onClick={() => setCurrentStep((prev) => Math.min(steps.length, prev + 1))}
                disabled={currentStep === steps.length}
                style={{ padding: '10px 14px', borderRadius: '12px', background: '#5C4A5E', color: '#FFF', border: 'none', cursor: currentStep === steps.length ? 'default' : 'pointer', opacity: currentStep === steps.length ? 0.45 : 1, fontSize: '0.9375rem', fontWeight: 600, fontFamily: 'inherit' }}
              >
                Next
              </button>
            </div>
          </div>

          <div>
            <div className="how-steady-screen">
              <StepScreen step={currentStep} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
