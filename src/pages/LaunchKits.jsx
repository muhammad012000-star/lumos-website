import { Link } from 'react-router-dom'
import { useContact } from '../context/ContactContext.jsx'
import { asset } from '../utils/asset.js'
import './Pricing.css'

const kits = [
  {
    name: 'Essential',
    price: '$3000',
    desc: 'For startups or personal brands needing to get online, fast.',
    img: asset('/assets/images/launchKit-essential-B8WwJ_5T.png'),
  },
  {
    name: 'Elite',
    price: '$5500',
    desc: 'For founders ready to launch with content, clarity, and a solid foundation.',
    img: asset('/assets/images/launchKit-elite-B08ij3UA.png'),
  },
  {
    name: 'Ultimate',
    price: '$8500+',
    desc: 'For brands that want it all — a complete launch suite with a mini content library.',
    img: asset('/assets/images/launchKit-ultimate-FP3b8sPb.png'),
  },
]

export default function LaunchKits() {
  const { openContact } = useContact()
  return (
    <>
      <section className="pricing-hero">
        <div className="container">
          <h1>Launch your brand in 30-days.</h1>
          <p>Everything you need to go from idea to launch — fast, focused, and built to scale.</p>
          <button onClick={openContact} className="btn btn-solid">Book a Discovery Call</button>
        </div>
      </section>

      <section className="pricing-grid-section">
        <div className="container">
          <div className="pricing-grid-head">
            <h2>Our Kits. <span>Take your pick.</span></h2>
          </div>
          <div className="pricing-grid">
            {kits.map((k) => (
              <div className="pricing-card" key={k.name}>
                <div className="pricing-card-img" style={{ backgroundImage: `url(${k.img})` }} />
                <div className="pricing-card-body">
                  <h3>{k.name}</h3>
                  <div className="pricing-card-price">{k.price}</div>
                  <p>{k.desc}</p>
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
