import Image from 'next/image'
import Link from 'next/link'
import type { LegalDocument } from '@/lib/legal-content'

const APP_URL = process.env.NEXT_PUBLIC_STEADY_APP_URL || 'http://localhost:3000'

export default function LegalPage({
  document,
}: {
  document: LegalDocument
}) {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <section style={{ padding: '20px 20px 72px' }}>
        <div style={{ maxWidth: '46rem', margin: '0 auto' }}>
          <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '28px' }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
              <Image src="/icon.svg" alt="" width={22} height={22} style={{ width: '22px', height: '22px', flexShrink: 0 }} />
              <span className="font-display" style={{ fontSize: '1.5rem', color: '#2B2F2A' }}>Steady</span>
            </Link>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              <Link
                href="/"
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
                Back to site
              </Link>
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
            </div>
          </header>

          <div style={{
            borderRadius: '32px',
            padding: '28px 24px',
            background: 'rgba(255,255,255,0.72)',
            border: '1px solid rgba(229,224,232,0.92)',
            boxShadow: '0 14px 40px rgba(92,74,94,0.08)',
          }}>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8A8F86', marginBottom: '10px' }}>
              Legal
            </div>
            <h1 className="font-display" style={{ fontSize: '2.35rem', lineHeight: 1.08, color: '#2B2F2A', marginBottom: '10px' }}>
              {document.title}
            </h1>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: '#8A8F86', margin: '0 0 20px' }}>
              Last updated: {document.lastUpdated}
            </p>
            <div style={{ display: 'grid', gap: '12px', fontSize: '1rem', lineHeight: 1.8, color: '#4A4E47', marginBottom: '8px' }}>
              {document.intro.map((paragraph) => (
                <p key={paragraph} style={{ margin: 0 }}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gap: '18px', marginTop: '22px' }}>
            {document.sections.map((section) => (
              <section
                key={section.title}
                style={{
                  borderRadius: '24px',
                  padding: '22px 24px',
                  background: 'rgba(255,255,255,0.62)',
                  border: '1px solid rgba(229,224,232,0.9)',
                }}
              >
                <h2 className="font-display" style={{ fontSize: '1.45rem', lineHeight: 1.2, color: '#2B2F2A', marginBottom: '12px' }}>
                  {section.title}
                </h2>

                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} style={{ fontSize: '0.975rem', lineHeight: 1.8, color: '#4A4E47', margin: '0 0 12px' }}>
                    {paragraph}
                  </p>
                ))}

                {section.bullets && (
                  <ul style={{ margin: '0 0 0 18px', padding: 0, display: 'grid', gap: '10px', color: '#4A4E47' }}>
                    {section.bullets.map((bullet) => (
                      <li key={bullet} style={{ fontSize: '0.975rem', lineHeight: 1.75 }}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
