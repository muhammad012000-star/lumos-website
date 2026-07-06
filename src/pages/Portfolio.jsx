import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Portfolio.css'

const categories = ['All', 'Web Development', 'Branding', 'Photography', 'Video', 'Motion', 'Audio', 'Marketing']

const projects = [
  { name: 'Nine Pilates', type: 'Launch Kit', img: '/assets/images/launchKit-elite-B08ij3UA.png', href: '/portfolio/nine-pilates-launchkit' },
  { name: 'Nine Pilates', type: 'Branding', img: '/assets/images/ninePilates-CMncnx6x.jpg', href: '/portfolio/nine-pilates' },
  { name: 'BeugLab', type: 'Web Development', img: '/assets/images/webdev-BJFsUdj3.png', href: '/portfolio/beuglab' },
]

export default function Portfolio() {
  const [filter, setFilter] = useState('All')
  const visible = filter === 'All' ? projects : projects.filter((p) => p.type === filter)

  return (
    <section className="portfolio-page">
      <div className="container">
        <div className="portfolio-hero-text">
          <h1>Portfolio.</h1>
          <p>A curated selection of work, crafted to elevate brands and drive measurable results. Each project reflects our commitment to design excellence, strategic thinking, and unforgettable execution.</p>
        </div>

        <div className="portfolio-filters">
          {categories.map((c) => (
            <button
              key={c}
              className={`pill ${filter === c ? 'active' : ''}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {visible.map((p, i) => (
            <Link to={p.href} className="portfolio-card" key={i}>
              <div className="portfolio-card-img-wrap">
                <div className="portfolio-card-img" style={{ backgroundImage: `url(${p.img})` }} />
              </div>
              <div className="portfolio-card-meta">
                <h3>{p.name}</h3>
                <span>{p.type}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
