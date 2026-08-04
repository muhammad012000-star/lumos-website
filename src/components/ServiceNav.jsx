import { useEffect, useState } from 'react'
import './ServiceNav.css'

export default function ServiceNav({ items }) {
  const [active, setActive] = useState(items[0]?.id)

  useEffect(() => {
    const sections = items.map((i) => document.getElementById(i.id)).filter(Boolean)

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [items])

  const handleClick = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    if (window.lenis) window.lenis.scrollTo(el)
    else el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="service-nav-wrap">
      <nav className="service-nav" aria-label="Service categories">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={active === item.id ? 'is-active' : ''}
            aria-current={active === item.id ? 'true' : undefined}
            onClick={(e) => handleClick(e, item.id)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  )
}
