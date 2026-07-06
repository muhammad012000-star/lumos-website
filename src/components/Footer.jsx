import { Link } from 'react-router-dom'
import { useContact } from '../context/ContactContext.jsx'
import './Footer.css'

export default function Footer() {
  const { openContact } = useContact()
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <h2 className="footer-tagline">Minimal by Design.<br />Memorable by Nature.</h2>
      </div>

      <div className="footer-grid">
        <div className="footer-col">
          <span className="footer-heading">Navigate</span>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <button onClick={openContact}>Contact</button>
        </div>
        <div className="footer-col">
          <span className="footer-heading">Services</span>
          <Link to="/services/launch-kits">Launch Kits</Link>
          <Link to="/services/monthly-retainers">Growth Plans</Link>
          <Link to="/services">FAQ</Link>
        </div>
        <div className="footer-col">
          <span className="footer-heading">Social</span>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">Youtube ↗</a>
          <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">Tik Tok ↗</a>
        </div>
        <div className="footer-col">
          <span className="footer-heading">Legal</span>
          <Link to="/legal">Legal</Link>
        </div>
        <a href="mailto:hello@lumosstudios.ca" className="footer-email">hello@lumosstudios.ca</a>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Lumos Studios® | All rights reserved</span>
        <span>Website by — <Link to="/">Lumos Studios®</Link></span>
      </div>
    </footer>
  )
}
