import { useEffect, useRef, useState } from 'react'
import './StickyCounterSteps.css'

// Left counter stays sticky beside a normally-flowing stack of sections
// (Overview / Approach / Challenges / Solutions), each fading + sliding
// into view as it scrolls into the middle of the viewport — matching the
// original case-study page's actual grid structure (confirmed by
// inspecting its live CSS grid, not a full-screen pinned slideshow).
export default function StickyCounterSteps({ steps }) {
  const [active, setActive] = useState(0)
  const stepRefs = useRef([])

  useEffect(() => {
    const observers = stepRefs.current.map((el, i) => {
      if (!el) return null
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(i)
          el.classList.toggle('is-revealed', entry.isIntersecting || entry.boundingClientRect.top < 0)
        },
        { rootMargin: '-45% 0px -45% 0px' },
      )
      io.observe(el)
      return io
    })

    const revealObservers = stepRefs.current.map((el) => {
      if (!el) return null
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('is-revealed')
            io.disconnect()
          }
        },
        { threshold: 0.2 },
      )
      io.observe(el)
      return io
    })

    return () => {
      observers.forEach((io) => io && io.disconnect())
      revealObservers.forEach((io) => io && io.disconnect())
    }
  }, [steps.length])

  return (
    <div className="sticky-steps">
      <div className="sticky-steps-counter-col">
        <div className="sticky-steps-counter">{String(active).padStart(2, '0')}</div>
      </div>
      <div className="sticky-steps-content">
        {steps.map((step, i) => (
          <div
            key={step.title}
            ref={(el) => (stepRefs.current[i] = el)}
            className="sticky-step"
          >
            <h3>{step.title}</h3>
            <div className="sticky-step-body">{step.body}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
