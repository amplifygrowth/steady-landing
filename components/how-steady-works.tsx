'use client'

import { useState } from 'react'

const steps = [
  {
    id: 1,
    label: 'Morning check-in',
    heading: "Start with the day you've actually got.",
    copy: 'Rate your energy, focus, mood, and sleep on a quick five-point scale. Add anything already affecting your battery: poor sleep, hormones, stress. The plan starts from reality, not assumption.',
  },
  {
    id: 2,
    label: 'Plan the day',
    heading: 'Separate commitments from everything else.',
    copy: "Not everything belongs on one giant to-do list. Non-negotiables stay fixed. Basics handle the recurring life load. Today holds up to three chosen tasks. When executive function is stretched, choosing from an open list is often harder than doing the actual task. Everything else goes to Later, Ideas, or the Worry jar.",
  },
  {
    id: 3,
    label: 'Reality changes',
    heading: 'Adjust when the day changes.',
    copy: "Capacity shifts mid-day. Brain fog appears. Energy drops. Steady lets you update your capacity so the rest of the day adjusts with you. Changing capacity is not failure. It is the app adapting to reality.",
  },
  {
    id: 4,
    label: 'Evening reflection',
    heading: 'Record what actually happened.',
    copy: 'Rate how the day ended: Fine, Hard, or Write-off. Log anything that came up in the evening. Capture what you want to carry into tomorrow. A quick close is enough.',
  },
  {
    id: 5,
    label: 'Patterns',
    heading: 'Learn from the difference.',
    copy: 'Patterns shows you 28 days of capacity, morning factors, and evening symptoms in one view. See when harder days cluster, what tends to precede them, and how your capacity shifts around health changes or life events.',
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
        <div style={{ padding: '18px', display: 'grid', gap: '12px' }}>
          <div style={{ ...surfaceStyle, padding: '16px' }}>
            <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#2B2F2A', marginBottom: '10px' }}>How are you arriving today?</div>
            {([
              ['Energy', 4],
              ['Focus', 3],
            ] as const).map(([label, active]) => (
              <div key={label} style={{ marginBottom: '10px' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#4A4E47', marginBottom: '6px' }}>{label}</div>
                <div style={{ display: 'flex', gap: '6px' }}>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <div
                      key={n}
                      style={{
                        flex: 1,
                        height: '36px',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        background: n === active ? '#5C4A5E' : '#FAFAF7',
                        color: n === active ? '#FFF' : '#8A8F86',
                        border: `1.5px solid ${n === active ? '#5C4A5E' : '#E3E4DE'}`,
                      }}
                    >
                      {n}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ ...surfaceStyle, padding: '14px' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#4A4E47', marginBottom: '8px' }}>What is influencing your battery?</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {(['Poor sleep', 'Woke multiple times', 'Hormones'] as const).map((item, i) => (
                <div
                  key={item}
                  style={{
                    padding: '6px 10px',
                    borderRadius: '9999px',
                    fontSize: '0.8125rem',
                    background: i < 2 ? '#F3F0F4' : '#FFFFFF',
                    color: i < 2 ? '#5C4A5E' : '#4A4E47',
                    border: `1.5px solid ${i < 2 ? '#5C4A5E' : '#E3E4DE'}`,
                  }}
                >
                  {item}
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
          <div style={{ fontSize: '0.75rem', color: '#9A9E96' }}>Steady day</div>
        </div>
        <div style={{ padding: '18px', display: 'grid', gap: '10px' }}>
          {([
            ['Non-Negotiables', ['Work 9-5', 'School run 3:30pm'], null],
            ['Basics', ['Walk dog', 'Plan dinner'], null],
            ['Today', ['Book the HRT review', 'Chase the insurance'], 'Make smaller →'],
            ['Later / Ideas / Worries', ['Look into therapy options', 'Whether I said the wrong thing'], null],
          ] as const).map(([title, items, extra]) => (
            <div key={title} style={{ ...surfaceStyle, padding: '12px 14px' }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#5C4A5E', marginBottom: '6px' }}>{title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {items.map((item, i) => (
                  <div key={item} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '0.9rem', color: '#2B2F2A' }}>{item}</div>
                    {extra && i === 0 && (
                      <div style={{ fontSize: '0.75rem', color: '#8A8F86', whiteSpace: 'nowrap' }}>{extra}</div>
                    )}
                  </div>
                ))}
              </div>
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
          <div style={{ fontSize: '0.75rem', color: '#8A8F86', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Reality changes</div>
          <div style={{ fontSize: '0.75rem', color: '#9A9E96' }}>2:15pm</div>
        </div>
        <div style={{ padding: '18px' }}>
          <div style={{ ...surfaceStyle, padding: '16px', marginBottom: '12px' }}>
            <div style={{ fontSize: '1rem', color: '#2B2F2A', marginBottom: '10px' }}>Brain fog appears.</div>
            <div style={{ fontSize: '1rem', color: '#2B2F2A' }}>Energy drops.</div>
          </div>
          <div style={{ ...surfaceStyle, padding: '16px' }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#2B2F2A', marginBottom: '10px' }}>Capacity changes</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem', color: '#2B2F2A' }}>
              <span style={{ padding: '8px 12px', borderRadius: '9999px', background: '#F3F0F4', color: '#5C4A5E', border: '1px solid #D8D2D9' }}>Steady</span>
              <span style={{ color: '#8A8F86' }}>→</span>
              <span style={{ padding: '8px 12px', borderRadius: '9999px', background: '#F2E0E0', color: '#B96A6A', border: '1px solid #E5C9C9' }}>Low Battery</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (step === 4) {
    return (
      <div style={shellStyle}>
        <div style={{ padding: '18px 18px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '0.75rem', color: '#8A8F86', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Evening reflection</div>
          <div style={{ fontSize: '0.75rem', color: '#9A9E96' }}>8:47pm</div>
        </div>
        <div style={{ padding: '18px', display: 'grid', gap: '12px' }}>
          <div style={{ ...surfaceStyle, padding: '16px' }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#2B2F2A', marginBottom: '10px' }}>How did the day end?</div>
            <div style={{ display: 'flex', gap: '8px' }}>
              {(['Fine', 'Hard', 'Write-off'] as const).map((label) => (
                <div
                  key={label}
                  style={{
                    flex: 1,
                    padding: '9px 8px',
                    borderRadius: '12px',
                    textAlign: 'center',
                    fontSize: '0.875rem',
                    fontWeight: label === 'Hard' ? 600 : 500,
                    background: label === 'Hard' ? '#F3F0F4' : '#FAFAF7',
                    border: `1.5px solid ${label === 'Hard' ? '#5C4A5E' : '#E3E4DE'}`,
                    color: label === 'Hard' ? '#5C4A5E' : '#6E726B',
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
          <div style={{ ...surfaceStyle, padding: '16px' }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#2B2F2A', marginBottom: '8px' }}>What came up this evening?</div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {(['Brain fog', 'Overwhelm'] as const).map((item) => (
                <div
                  key={item}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '9999px',
                    background: '#F3F0F4',
                    border: '1px solid #D8D2D9',
                    color: '#5C4A5E',
                    fontSize: '0.875rem',
                  }}
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={shellStyle}>
      <div style={{ padding: '18px 18px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '0.75rem', color: '#8A8F86', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Patterns</div>
        <div style={{ fontSize: '0.75rem', color: '#9A9E96' }}>Last 28 days</div>
      </div>
      <div style={{ padding: '18px', display: 'grid', gap: '12px' }}>
        {[
          'You started Steady but finished Low Battery on 4 of the last 7 days.',
          'Brain fog appears more often after disturbed sleep.',
          'Low Battery mornings recover to Steady 40% of the time.',
        ].map((item) => (
          <div key={item} style={{ ...surfaceStyle, padding: '14px 16px', fontSize: '0.9375rem', color: '#2B2F2A', lineHeight: 1.55 }}>
            &ldquo;{item}&rdquo;
          </div>
        ))}
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
                It doesn&apos;t assume every day starts from scratch, and it doesn&apos;t treat changing capacity like failure.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#6A6F68', margin: 0 }}>
                Steady helps you plan around your real capacity, not an ideal version of yourself.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '2px' }}>
              {steps.map((step) => {
                const active = step.id === currentStep
                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => setCurrentStep(step.id)}
                    style={{
                      flex: '0 0 auto',
                      padding: '10px 14px',
                      borderRadius: '9999px',
                      border: `1.5px solid ${active ? '#5C4A5E' : '#E3E4DE'}`,
                      background: active ? '#5C4A5E' : 'rgba(255,255,255,0.7)',
                      color: active ? '#FFF' : '#6E726B',
                      fontSize: '0.875rem',
                      fontWeight: active ? 600 : 500,
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                      whiteSpace: 'nowrap',
                      touchAction: 'manipulation',
                    }}
                  >
                    {step.id}. {step.label}
                  </button>
                )
              })}
            </div>

            <div style={{ maxWidth: '34rem' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8A8F86', marginBottom: '8px' }}>
                Step {current.id}
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
                style={{
                  padding: '10px 14px',
                  borderRadius: '12px',
                  background: 'transparent',
                  color: currentStep === 1 ? '#B9BCB6' : '#5C4A5E',
                  border: '1.5px solid #D8D2D9',
                  cursor: currentStep === 1 ? 'default' : 'pointer',
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  fontFamily: 'inherit',
                  touchAction: 'manipulation',
                }}
              >
                Back
              </button>
              <div style={{ fontSize: '0.8125rem', color: '#8A8F86' }}>{currentStep} of {steps.length}</div>
              <button
                type="button"
                onClick={() => setCurrentStep((prev) => Math.min(steps.length, prev + 1))}
                disabled={currentStep === steps.length}
                style={{
                  padding: '10px 14px',
                  borderRadius: '12px',
                  background: '#5C4A5E',
                  color: '#FFF',
                  border: 'none',
                  cursor: currentStep === steps.length ? 'default' : 'pointer',
                  opacity: currentStep === steps.length ? 0.45 : 1,
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  fontFamily: 'inherit',
                  touchAction: 'manipulation',
                }}
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
