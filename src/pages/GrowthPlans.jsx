import { Link } from 'react-router-dom'
import { useContact } from '../context/ContactContext.jsx'
import './Pricing.css'

const plans = [
  {
    name: 'Momentum',
    price: '$750/mo',
    desc: 'Perfect for brands who need consistent, reliable creative support.',
    img: '/assets/images/essentialPackage-DYvrU941.jpg',
  },
  {
    name: 'Alliance',
    price: '$1750/mo',
    desc: 'Ideal for scaling brands looking to elevate their marketing, fast.',
    img: '/assets/images/elitePackage-HRrhzzEY.jpg',
  },
  {
    name: 'Partnership',
    price: '$3500+/mo',
    desc: 'Built for long-term growth. A collaborative, full-service relationship.',
    img: '/assets/images/ultimatePackage-BKKjcYFv.jpg',
  },
]

export default function GrowthPlans() {
  const { openContact } = useContact()
  return (
    <>
      <section className="pricing-hero">
        <div className="container">
          <h1>Momentum Driven by Strategy.</h1>
          <p>More than design — we craft campaigns that convert and content that drives growth.</p>
          <button onClick={openContact} className="btn btn-solid">Book a Discovery Call</button>
        </div>
      </section>

      <section className="pricing-grid-section">
        <div className="container">
          <div className="pricing-grid-head">
            <h2>Our plans. <span>Value driven.</span></h2>
          </div>
          <div className="pricing-grid">
            {plans.map((p) => (
              <div className="pricing-card" key={p.name}>
                <div className="pricing-card-img" style={{ backgroundImage: `url(${p.img})` }} />
                <div className="pricing-card-body">
                  <h3>{p.name}</h3>
                  <div className="pricing-card-price">{p.price}</div>
                  <p>{p.desc}</p>
                  <div className="pricing-card-actions">
                    <button onClick={openContact}>Learn more</button>
                    <button onClick={openContact}>Get Started →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pricing-bottom">
            <div className="pricing-bottom-card">
              <h3>Can't decide? <span style={{ color: 'var(--ash)' }}>Start here.</span></h3>
              <p>Book a free 30-minute discovery call with our team to find the perfect fit. We accommodate all project sizes and budgets.</p>
              <button onClick={openContact} className="btn btn-solid">Get Started →</button>
            </div>
            <div className="pricing-bottom-card">
              <h3>Referrals.</h3>
              <p>Interested in joining our referral program? Connect with us and earn up to 10% on each successful sale.</p>
              <Link to="/services" className="btn">Learn more</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
