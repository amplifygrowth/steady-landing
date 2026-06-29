'use client'

import { useEffect, useRef } from 'react'

const IFRAME_W = 422
const IFRAME_H = 950

export default function AppDemo() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const update = () => {
      if (!wrapperRef.current || !iframeRef.current) return
      const w = wrapperRef.current.offsetWidth
      const scale = Math.min(1, w / IFRAME_W)
      iframeRef.current.style.width = `${IFRAME_W}px`
      iframeRef.current.style.height = `${IFRAME_H}px`
      iframeRef.current.style.transform = `scale(${scale})`
      iframeRef.current.style.transformOrigin = 'top left'
      wrapperRef.current.style.height = `${Math.round(IFRAME_H * scale)}px`
    }
    update()
    const ro = new ResizeObserver(update)
    if (wrapperRef.current) ro.observe(wrapperRef.current)
    return () => ro.disconnect()
  }, [])

  return (
    <div
      ref={wrapperRef}
      style={{ width: '100%', maxWidth: `${IFRAME_W}px`, margin: '0 auto', overflow: 'hidden' }}
    >
      <iframe
        ref={iframeRef}
        src="/demo-frame"
        title="See Steady in action"
        scrolling="no"
        style={{ border: 'none', display: 'block' }}
      />
    </div>
  )
}
