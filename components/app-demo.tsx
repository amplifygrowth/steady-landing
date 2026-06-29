'use client'

import { useEffect, useRef } from 'react'
import DEMO_HTML from './app-demo-html'

const FRAME_W = 422
const FRAME_H = 950

// Parse the demo HTML string into three parts at module load time
const rawCss      = DEMO_HTML.match(/<style>([\s\S]*?)<\/style>/)?.[1] ?? ''
const bodyHtml    = DEMO_HTML.match(/<body>([\s\S]*?)<script>/)?.[1] ?? ''
const scriptCode  = DEMO_HTML.match(/<script>([\s\S]*?)<\/script>/)?.[1] ?? ''

// Scope the CSS so body/reset rules don't bleed into the landing page
const scopedCss = rawCss
  .replace(/^\s*\*\s*,\s*\*::before\s*,\s*\*::after\s*\{/m,
    '.demo-root *, .demo-root *::before, .demo-root *::after {')
  .replace(/^\s*body\s*\{/m, '.demo-root {')
  .replace(/min-height:\s*100vh;?/g, '')

export default function AppDemo() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const rootRef    = useRef<HTMLDivElement>(null)

  // Scale the demo to fit its container width
  useEffect(() => {
    const update = () => {
      if (!wrapperRef.current || !rootRef.current) return
      const w     = wrapperRef.current.offsetWidth
      const scale = Math.min(1, w / FRAME_W)
      rootRef.current.style.transform       = `scale(${scale})`
      rootRef.current.style.transformOrigin = 'top left'
      wrapperRef.current.style.height       = `${Math.round(FRAME_H * scale)}px`
    }
    update()
    const ro = new ResizeObserver(update)
    if (wrapperRef.current) ro.observe(wrapperRef.current)
    return () => ro.disconnect()
  }, [])

  // Inject Fraunces font and run the demo script after the DOM is ready
  useEffect(() => {
    if (!document.querySelector('link[href*="Fraunces"]')) {
      const link = document.createElement('link')
      link.rel  = 'stylesheet'
      link.href = 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300;1,9..144,400&display=swap'
      document.head.appendChild(link)
    }
    const script = document.createElement('script')
    script.textContent = scriptCode
    document.body.appendChild(script)
    document.body.removeChild(script)
  }, [])

  return (
    <div
      ref={wrapperRef}
      style={{ width: '100%', maxWidth: `${FRAME_W}px`, margin: '0 auto', overflow: 'hidden' }}
    >
      <style dangerouslySetInnerHTML={{ __html: scopedCss }} />
      <div
        ref={rootRef}
        className="demo-root"
        style={{ width: `${FRAME_W}px`, height: `${FRAME_H}px` }}
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </div>
  )
}
