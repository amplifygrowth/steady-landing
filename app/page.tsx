import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { TrackedAppLink } from '@/components/landing-tracking'
import { APP_URL } from '@/lib/app-url'

export const metadata: Metadata = {
  title: 'Steady by Capable Mind',
  description: 'Capacity-aware planning and personal patterns for midlife women living with changing capacity and executive dysfunction.',
  alternates: { canonical: 'https://capablemind.app/' },
  robots: { index: true, follow: true },
}

const questions = [
  ['Why only three Today tasks?', 'Because Today protects your focus. Work, appointments, Non-negotiables, Daily Basics and Keeping up with can still be visible without using those three spaces.'],
  ['Do tasks have to be small?', 'No. A Today task might be writing a report, returning a clothes order or doing the pile of ironing. Make it smaller is optional help for the tasks that will not start.'],
  ['What is Keeping up with?', 'It is for things you are trying to keep going, such as walking three miles a day, cutting down on wine or strength training three times a week. A gap stays a gap. It does not become overdue work.'],
  ['What if I miss a few days?', 'Nothing needs repairing. Missing days do not erase what you have already recorded. Return with whatever is true today.'],
]

export default function WebsitePage() {
  return (
    <main className="ws">
      <style>{`
        .ws{--ink:#342C3C;--plum:#5C4A5E;--teal:#176F70;--rose:#934B5B;--paper:#F8F7FA;--line:rgba(92,74,94,.15);min-height:100vh;color:var(--ink);background:radial-gradient(circle at 90% 5%,rgba(23,111,112,.1),transparent 29rem),var(--paper);font-family:var(--font-public-sans)}
        .ws *{box-sizing:border-box}.ws-shell{width:min(1120px,calc(100% - 40px));margin:0 auto}.ws-header{display:flex;align-items:center;justify-content:space-between;min-height:76px}.ws-brand{display:flex;align-items:center;gap:10px;color:var(--ink);text-decoration:none}.ws-brand span{font-family:var(--font-fraunces);font-size:1.45rem}.ws-nav{display:flex;align-items:center;gap:24px}.ws-nav a{color:#665D6B;font-size:.87rem;font-weight:650;text-decoration:none}.ws-pill{padding:9px 14px;border:1px solid var(--line);border-radius:999px}.ws-hero{display:grid;grid-template-columns:1.08fr .92fr;gap:80px;align-items:center;padding:100px 0 120px}.ws-kicker{margin-bottom:20px;color:var(--plum);font-size:.76rem;font-weight:750;letter-spacing:.1em;text-transform:uppercase}.ws h1,.ws h2,.ws h3{font-family:var(--font-fraunces);font-weight:400}.ws h1{max-width:690px;margin:0 0 25px;font-size:clamp(3.6rem,7.2vw,7rem);line-height:.92;letter-spacing:-.055em}.ws-hero p{max-width:620px;margin:0 0 28px;color:#615865;font-size:1.16rem;line-height:1.72}.ws-actions{display:flex;gap:12px;flex-wrap:wrap}.ws-primary,.ws-secondary{display:inline-flex;align-items:center;justify-content:center;min-height:50px;padding:0 22px;border-radius:14px;font-weight:750;text-decoration:none}.ws-primary{color:#fff;background:var(--plum);box-shadow:0 14px 30px rgba(92,74,94,.2)}.ws-secondary{color:var(--plum);background:#fff;border:1px solid var(--line)}.ws-hero-card{padding:32px;border:1px solid var(--line);border-radius:28px;background:rgba(255,255,255,.75);box-shadow:0 24px 65px rgba(52,44,60,.1)}.ws-hero-card h2{margin:0 0 22px;font-size:2rem}.ws-day{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:18px 0}.ws-day span{display:grid;place-items:center;min-height:74px;padding:10px;border:1.5px solid rgba(92,74,94,.28);border-radius:13px;color:var(--plum);background:#fff;text-align:center;font-size:.78rem;font-weight:700}.ws-already{display:flex;gap:7px;flex-wrap:wrap}.ws-already span{padding:7px 9px;border-radius:999px;color:#655D69;background:#F0ECF1;font-size:.7rem}.ws-note{margin:18px 0 0;padding:14px;border-left:3px solid var(--teal);color:#625A66;background:rgba(23,111,112,.06);font-size:.82rem;line-height:1.55}.ws-section{padding:105px 0;border-top:1px solid var(--line)}.ws-head{display:grid;grid-template-columns:.42fr 1fr;gap:60px;margin-bottom:50px}.ws-eyebrow{color:var(--plum);font-size:.74rem;font-weight:750;letter-spacing:.1em;text-transform:uppercase}.ws h2{max-width:820px;margin:0;font-size:clamp(2.5rem,5vw,4.8rem);line-height:.98;letter-spacing:-.045em}.ws-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.ws-card{padding:27px;border:1px solid var(--line);border-radius:21px;background:rgba(255,255,255,.7)}.ws-card b{display:grid;place-items:center;width:34px;height:34px;margin-bottom:46px;border-radius:50%;color:#fff;background:var(--plum);font-size:.75rem}.ws-card:nth-child(2) b{background:var(--teal)}.ws-card:nth-child(3) b{background:var(--rose)}.ws-card h3{margin:0 0 12px;font-size:1.55rem;line-height:1.15}.ws-card p,.ws-copy p{margin:0;color:#6B636F;line-height:1.72}.ws-systems{display:grid;grid-template-columns:1fr 1fr;gap:16px}.ws-system{padding:34px;border:1px solid var(--line);border-radius:24px;background:#fff}.ws-system small{color:var(--teal);font-weight:750;letter-spacing:.08em;text-transform:uppercase}.ws-system:first-child small{color:var(--plum)}.ws-system h3{margin:32px 0 12px;font-size:2rem}.ws-system p{color:#6B636F;line-height:1.72}.ws-examples{display:flex;gap:7px;flex-wrap:wrap;margin-top:22px}.ws-examples span{padding:8px 10px;border:1px solid var(--line);border-radius:999px;font-size:.72rem}.ws-return{display:grid;grid-template-columns:.82fr 1.18fr;gap:70px;align-items:center}.ws-copy h2{margin-bottom:24px}.ws-flow{padding:35px;border-radius:26px;color:#fff;background:var(--plum);box-shadow:0 24px 55px rgba(92,74,94,.21)}.ws-flow-row{display:grid;grid-template-columns:34px 1fr;gap:13px;padding:18px 0;border-bottom:1px solid rgba(255,255,255,.15)}.ws-flow-row:last-child{border-bottom:0}.ws-flow-row span{display:grid;place-items:center;width:28px;height:28px;border-radius:50%;color:var(--plum);background:#fff;font-size:.72rem;font-weight:800}.ws-flow-row strong{display:block;margin-bottom:5px}.ws-flow-row p{margin:0;color:rgba(255,255,255,.75);font-size:.82rem;line-height:1.55}.ws-quote{margin-top:24px;padding:22px;border:1px solid rgba(255,255,255,.18);border-radius:16px;background:rgba(255,255,255,.08);font-family:var(--font-fraunces);font-size:1.35rem;line-height:1.4}.ws-faq{display:grid;grid-template-columns:1fr 1fr;gap:12px}.ws-faq details{padding:22px;border:1px solid var(--line);border-radius:16px;background:#fff}.ws-faq summary{cursor:pointer;font-weight:750}.ws-faq p{margin:14px 0 0;color:#6B636F;line-height:1.65}.ws-final{padding:120px 0;text-align:center}.ws-final h2{margin:0 auto 24px}.ws-final p{max-width:620px;margin:0 auto 28px;color:#6B636F;line-height:1.7}.ws-footer{padding:28px 0 40px;border-top:1px solid var(--line);color:#8B838E;font-size:.78rem}
        .ws a:focus-visible,.ws summary:focus-visible{outline:3px solid rgba(23,111,112,.4);outline-offset:3px}
        @media(max-width:850px){.ws-nav a:not(.ws-pill){display:none}.ws-hero,.ws-head,.ws-return{grid-template-columns:1fr;gap:38px}.ws-hero{padding:65px 0 90px}.ws-grid{grid-template-columns:1fr}.ws-card b{margin-bottom:28px}.ws-systems,.ws-faq{grid-template-columns:1fr}}
        @media(max-width:520px){.ws-shell{width:calc(100% - 28px)}.ws h1{font-size:3.4rem}.ws-section{padding:78px 0}.ws-hero-card{padding:22px}.ws-day span{min-height:66px}}
      `}</style>

      <header className="ws-shell ws-header">
        <Link href="/" className="ws-brand"><Image src="/icon.svg" alt="" width={22} height={22} /><span>Steady</span></Link>
        <nav className="ws-nav" aria-label="Main navigation">
          <a href="#how">How it works</a><a href="#today">Today and Keeping up with</a><a href="#patterns">Patterns</a>
          <TrackedAppLink href={APP_URL} event="landing_signin_clicked" location="website_header" page="home" style={{}}><span className="ws-pill">Sign in</span></TrackedAppLink>
        </nav>
      </header>

      <section className="ws-shell ws-hero">
        <div>
          <div className="ws-kicker">Steady by Capable Mind</div>
          <h1>Your capacity changes. Your plan should too.</h1>
          <p>Steady is a capacity tracker and task planner for midlife women living with executive dysfunction, changing energy and days that are already full before the to-do list begins.</p>
          <div className="ws-actions">
            <TrackedAppLink href={APP_URL} event="landing_start_signup_clicked" location="website_hero" page="home" style={{}}><span className="ws-primary">Try Steady free</span></TrackedAppLink>
            <a className="ws-secondary" href="https://steady.capablemind.app/#demo">Try the interactive demo</a>
          </div>
        </div>
        <aside className="ws-hero-card">
          <div className="ws-eyebrow">A Steady day</div>
          <h2>Three protected spaces for the tasks that matter today.</h2>
          <div className="ws-day"><span>Write the report</span><span>Return the clothes order</span><span>Do the pile of ironing</span></div>
          <div className="ws-already"><span>Work</span><span>Appointment</span><span>Take HRT</span><span>Daily Basics</span></div>
          <p className="ws-note">The existing load is visible, but it does not quietly steal one of your three Today spaces.</p>
        </aside>
      </section>

      <section className="ws-section" id="how"><div className="ws-shell">
        <div className="ws-head"><div className="ws-eyebrow">Why Steady exists</div><h2>Most planners record intention. Steady also records capacity and reality.</h2></div>
        <div className="ws-grid">
          <article className="ws-card"><b>1</b><h3>Start with the day you have.</h3><p>A short morning check-in looks at energy, focus, mood, sleep and what may be influencing your battery.</p></article>
          <article className="ws-card"><b>2</b><h3>Plan around the load already there.</h3><p>Work, caring, appointments, Non-negotiables and Daily Basics are part of the day, even when they never appear on a normal task list.</p></article>
          <article className="ws-card"><b>3</b><h3>Close the day without judging it.</h3><p>Evening Close records how the day actually felt and ended. That gives Patterns something real to learn from.</p></article>
        </div>
      </div></section>

      <section className="ws-section" id="today"><div className="ws-shell">
        <div className="ws-head"><div className="ws-eyebrow">Two different jobs</div><h2>Today protects your focus. Keeping up with protects continuity.</h2></div>
        <div className="ws-systems">
          <article className="ws-system"><small>Today</small><h3>Choose what fits now.</h3><p>Use up to three spaces for the tasks you want to focus on today. They can be small or substantial. If one will not start, Make it smaller is there when you need it, not as compulsory homework.</p><div className="ws-examples"><span>Write the report</span><span>Return an order</span><span>Do the pile of ironing</span></div></article>
          <article className="ws-system"><small>Keeping up with</small><h3>Keep sight of what you are trying to sustain.</h3><p>Log the things you are trying to keep going when they happen. A missed day stays a gap. It does not become debt, a failed streak or another task demanding attention.</p><div className="ws-examples"><span>Walk 3 miles a day</span><span>Cut down on wine</span><span>Strength train 3 times a week</span></div></article>
        </div>
      </div></section>

      <section className="ws-section" id="patterns"><div className="ws-shell ws-return">
        <div className="ws-copy"><div className="ws-eyebrow">Why return</div><h2>Today helps now. Returning builds the picture.</h2><p>One check-in can help you make a more realistic plan. A few ordinary days begin to show how capacity, influences, plans and follow-through fit together. That evidence can replace some of the guilt and the feeling that you simply failed again.</p></div>
        <div className="ws-flow">
          <div className="ws-flow-row"><span>1</span><div><strong>Morning Check-in</strong><p>Record the capacity and influences you are starting with.</p></div></div>
          <div className="ws-flow-row"><span>2</span><div><strong>Today</strong><p>Choose what fits and use task support only when it helps.</p></div></div>
          <div className="ws-flow-row"><span>3</span><div><strong>Evening Close</strong><p>Record what actually happened, not what the plan said should happen.</p></div></div>
          <div className="ws-flow-row"><span>4</span><div><strong>Patterns</strong><p>See your own days as evidence, without having to diagnose or defend yourself.</p></div></div>
          <div className="ws-quote">Some days the report fits. Some days the pile of ironing is enough.</div>
        </div>
      </div></section>

      <section className="ws-section"><div className="ws-shell">
        <div className="ws-head"><div className="ws-eyebrow">Questions</div><h2>Built for real days, including the days you do not use it.</h2></div>
        <div className="ws-faq">{questions.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
      </div></section>

      <section className="ws-shell ws-final"><h2>Make today more realistic. Let ordinary days teach you something useful.</h2><p>Steady helps you decide what fits now and understand what tends to help over time.</p><TrackedAppLink href={APP_URL} event="landing_start_signup_clicked" location="website_final" page="home" style={{}}><span className="ws-primary">Try Steady free</span></TrackedAppLink></section>
      <section className="ws-shell" style={{ padding: '0 0 64px' }} aria-label="Also from Capable Mind">
        <p style={{ margin: '0 0 14px', color: '#8B838E', fontSize: '.74rem', fontWeight: 750, letterSpacing: '.1em', textTransform: 'uppercase' }}>Also from Capable Mind</p>
        <a href="https://loop.capablemind.app" target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '22px 24px', border: '1px solid var(--line)', borderRadius: 21, textDecoration: 'none', color: 'inherit', background: 'rgba(255,255,255,.7)' }}>
          <svg width="44" height="44" viewBox="0 0 512 512" aria-hidden="true" style={{ flex: 'none' }}>
            <rect width="512" height="512" rx="140" fill="#6c5b8f" />
            <path d="M181 181 A106 106 0 1 1 181 331" fill="none" stroke="#fff" strokeWidth="30" strokeLinecap="round" />
            <path d="M135 196 L135 272 L211 272" fill="none" stroke="#fff" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" transform="rotate(18 165.5 241.5)" />
          </svg>
          <span style={{ flex: 1, minWidth: 0 }}>
            <strong style={{ display: 'block', fontFamily: 'var(--font-fraunces)', fontSize: '1.35rem', fontWeight: 400 }}>Loop</strong>
            <small style={{ display: 'block', color: '#6B636F', fontSize: '.92rem', marginTop: 3 }}>Keep on top of everything that’s easy to forget.</small>
          </span>
          <span aria-hidden="true" style={{ color: 'var(--plum)', fontSize: '1.3rem' }}>&rarr;</span>
        </a>
      </section>

      <footer className="ws-footer"><div className="ws-shell">Steady is a Capable Mind product.</div></footer>
    </main>
  )
}
