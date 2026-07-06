import { Link } from 'react-router-dom'
import { useContact } from '../context/ContactContext.jsx'
import './Services.css'

const tags = ['Web Development', 'Video Production', 'Photography', 'Branding', 'Marketing', 'Audio']

export default function Services() {
  const { openContact } = useContact()
  return (
    <>
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Tailored solutions for ambitious brands who need specific, high-impact services, precise, on-demand, and expertly executed.</p>
          <div className="services-hero-tags">
            {tags.map((t) => <span key={t} className="pill">{t}</span>)}
          </div>
          <button onClick={openContact} className="btn">Contact Us ↗</button>
        </div>
      </section>

      <section className="offer-block">
        <div className="container offer-grid">
          <div>
            <h2>LANDR</h2>
            <p>A quick turnaround custom landing page service for brands needing to launch fast. Perfect for events, product drops, and campaigns.</p>
            <div className="offer-tags">
              {['Landing Pages', 'Marketing', 'Analytics & Reporting', 'Conversion Optimization', 'React', 'Funnel Design'].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <a href="https://landr.lumosstudios.ca/" className="btn btn-solid">Open LANDR →</a>
          </div>
        </div>
      </section>

      <section className="offer-block alt">
        <div className="container offer-grid">
          <div>
            <h2>Launch Kits</h2>
            <p>Everything you need to bring your brand to life—fast. A streamlined, strategic approach for building your presence from the ground up.</p>
            <div className="offer-tags">
              {['Landing Page', 'Brand Identity', 'Business Cards', 'Marketing Assets', 'Social Media Starter Kit'].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <Link to="/services/launch-kits" className="btn btn-solid">Explore Options →</Link>
          </div>
        </div>
      </section>

      <section className="offer-block">
        <div className="container offer-grid">
          <div>
            <h2>Marketing Retainers</h2>
            <p>Ongoing creative and strategic support for brands ready to scale. Think of us as your embedded design and marketing team.</p>
            <div className="offer-tags">
              {['Strategy', 'Content Creation', 'Analytics & Reporting', 'Meta Ads', 'Social Media Management', 'Email Marketing'].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <Link to="/services/monthly-retainers" className="btn btn-solid">View our Plans →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
