import { useRef } from 'react'
import './MagneticButton.css'

// Subtle cursor-follow effect for premium CTAs — the element leans toward
// the pointer within its bounds, then eases back to rest on mouse leave.
export default function MagneticButton({ as: Tag = 'button', className = '', children, strength = 16, ...props }) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${(x / rect.width) * strength}px, ${(y / rect.height) * strength}px)`
  }

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0, 0)'
  }

  return (
    <Tag
      ref={ref}
      className={`magnetic ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...props}
    >
      {children}
    </Tag>
  )
}
