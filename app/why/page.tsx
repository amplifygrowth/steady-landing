import Link from 'next/link'

export default function WhyPage() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '28rem', margin: '0 auto', padding: '20px 20px 64px' }}>
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 0',
            marginBottom: '20px',
            fontSize: '0.875rem',
            color: '#8A8F86',
            textDecoration: 'none',
          }}
        >
          ← Back
        </Link>

        <h1 className="font-display" style={{ fontSize: '1.75rem', color: '#2B2F2A', marginBottom: '28px', lineHeight: 1.2 }}>
          Why this exists
        </h1>

        <div style={{ fontSize: '0.9375rem', color: '#2B2F2A', lineHeight: 1.75, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p>I built this because I needed it myself.</p>

          <p>
            I&apos;m a 49-year-old woman whose capacity changes from day to day. Most days I&apos;m completely
            capable. Some days my brain just says no, to filling or emptying the dishwasher, to
            mopping the floors, to resetting the house, to the inbox, to all of it, and no amount of
            willpower changes that. Some days it&apos;s smaller than that, walking into a room and
            forgetting why, losing a word mid-sentence, reading the same paragraph three times. I live
            alone, so there&apos;s nobody to notice, nobody to nudge me, nobody to pick up the slack on
            the days it all feels like too much. Whatever gets done, I&apos;m the one who has to decide to
            do it.
          </p>

          <p>
            But this isn&apos;t an app that needs a diagnosis or a particular life stage to make sense. If
            &ldquo;I&apos;m capable, it&apos;s just my brain saying no today&rdquo; sounds familiar, whatever the reason,
            neurodiversity, perimenopause, menopause, burnout, bad sleep, or just life being a lot
            some weeks, this is for you.
            Your life might look completely different from mine, kids, a partner, a job with no
            flexibility, all of it at once. But the thing that&apos;s true either way is this: life
            doesn&apos;t stop because you&apos;re having a bad day. The school run still happens. The work
            still needs doing. The dog still needs walking. A &ldquo;low battery&rdquo; day isn&apos;t an empty
            day, it&apos;s a full day on top of feeling rubbish, and most apps don&apos;t seem to know that.
          </p>

          <p>
            That&apos;s the whole idea. Every morning, this app asks how you are before it asks what
            you&apos;ll do, then sizes the day around what&apos;s actually on it. Some things already own your
            day. Some things keep life ticking over. Some are jobs you would like to get done. Some
            are ideas, worries, or things that can safely wait. Steady gives each of those a proper
            place. Nothing rolls over without you deciding what happens to it. Nothing keeps score
            with streaks, because a broken streak on a bad week just turns a hard day into a failure
            too.
          </p>

          <p>
            This isn&apos;t a medical app, and it doesn&apos;t try to predict your cycle, your mood, or your
            health. What it does do is notice patterns over time, so ordinary days start to tell a
            clearer story, and so you&apos;ve got something real to reflect on or share if you want to.
          </p>

          <p>
            If any of this sounds like you, you&apos;re not the only one, that&apos;s most of why I built it.
          </p>

          <p>
            You&apos;re capable. It&apos;s just your brain saying no sometimes. This is for those days,
            whatever else is on them.
          </p>
        </div>

        <hr style={{ margin: '32px 0', border: 'none', borderTop: '1px solid #E8E9E3' }} />

        <div style={{ display: 'grid', gap: '12px' }}>
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8A8F86' }}>
            Important
          </div>
          <p style={{ fontSize: '0.875rem', color: '#6A6F68', lineHeight: 1.7, margin: 0 }}>
            Steady is a planning and reflection tool. It is not a medical device and does not provide medical advice, diagnosis or treatment.
          </p>
          <p style={{ fontSize: '0.875rem', color: '#6A6F68', lineHeight: 1.7, margin: 0 }}>
            The insights and patterns shown in the app are designed to support self-awareness and everyday planning. They should not be used to diagnose medical conditions or replace professional healthcare advice.
          </p>
          <p style={{ fontSize: '0.875rem', color: '#6A6F68', lineHeight: 1.7, margin: 0 }}>
            If you have concerns about your physical or mental health, please speak to a qualified healthcare professional.
          </p>
        </div>
      </div>
    </div>
  )
}
