import { useLayoutEffect, useRef, useState } from 'react'
import './FitText.css'

const BASE = 100

// Scales font-size so the text exactly fills the width of its container,
// matching the original site's edge-to-edge hero headline regardless of
// how long the replacement brand name is. Measurement happens on a hidden
// clone (same font/weight/letter-spacing via the shared "fit-text" class)
// so it never mutates the visible element's own style — mutating the
// visible node directly fights with React's render and can get stuck.
export default function FitText({ as: Tag = 'h1', className = '', children }) {
  const wrapRef = useRef(null)
  const measureRef = useRef(null)
  const [fontSize, setFontSize] = useState(null)

  useLayoutEffect(() => {
    const wrap = wrapRef.current
    const measure = measureRef.current
    if (!wrap || !measure) return

    const fit = () => {
      const containerWidth = wrap.getBoundingClientRect().width
      const textWidth = measure.scrollWidth
      if (!textWidth || !containerWidth) return
      setFontSize((containerWidth / textWidth) * BASE)
    }

    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(wrap)

    let cancelled = false
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        if (!cancelled) fit()
      })
      document.fonts.addEventListener('loadingdone', fit)
    }

    return () => {
      cancelled = true
      ro.disconnect()
      if (document.fonts) document.fonts.removeEventListener('loadingdone', fit)
    }
  }, [children])

  return (
    <div ref={wrapRef} className={`fit-text-wrap ${className}`}>
      <Tag className="fit-text" style={{ fontSize: fontSize ? `${fontSize}px` : undefined }}>
        {children}
      </Tag>
      <Tag ref={measureRef} className="fit-text fit-text-measure" style={{ fontSize: `${BASE}px` }} aria-hidden="true">
        {children}
      </Tag>
    </div>
  )
}
