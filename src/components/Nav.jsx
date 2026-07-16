import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useContact } from '../context/ContactContext.jsx'
import './Nav.css'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Shop', href: '/shop' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { openContact } = useContact()
  const location = useLocation()

  const handleContact = () => {
    setOpen(false)
    openContact()
  }

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          lumos
        </Link>
        <div className="nav-right">
          <nav className="nav-links">
            {links.map((l) => (
              <Link key={l.label} to={l.href}>{l.label}</Link>
            ))}
            <button onClick={handleContact}>Contact</button>
          </nav>
          <div className="nav-actions">
            <button className="btn btn-solid nav-cta" onClick={handleContact}>Book a Call →</button>
            <button className="nav-burger" onClick={() => setOpen((v) => !v)} aria-label="Menu">
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="nav-mobile">
          <button className="nav-mobile-close" onClick={() => setOpen(false)} aria-label="Close menu">
            ×
          </button>
          <nav className="nav-mobile-links">
            {links.map((l) => {
              const isActive = location.pathname === l.href
              return (
                <Link
                  key={l.label}
                  to={l.href}
                  className={isActive ? 'is-active' : ''}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              )
            })}
            <button onClick={handleContact}>Contact</button>
          </nav>
        </div>
      )}
    </header>
  )
}
