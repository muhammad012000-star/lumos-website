import { useLayoutEffect, useRef, useState } from 'react'
import './ScrollRevealText.css'

// Reveals text word-by-word (dim -> bright) as the block scrolls through
// the middle of the viewport, matching the original site's scroll-linked
// text animation on the "Driven by design..." statement section.
// When maxLines is set, the font-size is shrunk until the text wraps
// into that many lines or fewer, at any container width.
export default function ScrollRevealText({ text, as: Tag = 'h2', maxLines }) {
  const containerRef = useRef(null)
  const wordRefs = useRef([])
  const words = text.trim().split(/\s+/)
  const [fontSize, setFontSize] = useState(null)

  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container || !maxLines) return

    const countLines = () => {
      const tops = new Set()
      wordRefs.current.forEach((el) => {
        if (el) tops.add(Math.round(el.offsetTop))
      })
      return tops.size
    }

    const fit = () => {
      container.style.fontSize = ''
      let size = parseFloat(getComputedStyle(container).fontSize)
      let lines = countLines()
      let guard = 0
      while (lines > maxLines && size > 10 && guard < 60) {
        size -= size > 60 ? 2 : 1
        container.style.fontSize = `${size}px`
        lines = countLines()
        guard += 1
      }
      setFontSize(size)
    }

    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(container)
    return () => ro.disconnect()
  }, [words.length, maxLines])

  return (
    <Tag
      ref={containerRef}
      className="reveal-text"
      style={fontSize ? { fontSize: `${fontSize}px` } : undefined}
    >
      {words.map((w, i) => (
        <span key={i} ref={(el) => (wordRefs.current[i] = el)} className="reveal-word">
          {w}{' '}
        </span>
      ))}
    </Tag>
  )
}
