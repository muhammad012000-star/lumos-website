import { useEffect, useRef } from 'react'
import './Parallax.css'

// Subtle scroll-linked vertical drift on an image, matching the original
// site's "parallax-img" effect.
export default function Parallax({ children, strength = 40, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let ticking = false

    const update = () => {
      ticking = false
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const center = rect.top + rect.height / 2
      const progress = (vh / 2 - center) / vh
      el.style.transform = `translateY(${progress * strength}px)`
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [strength])

  return (
    <div ref={ref} className={`parallax-wrap ${className}`}>
      {children}
    </div>
  )
}
