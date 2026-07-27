import { useState } from 'react'
import { Link } from 'react-router-dom'
import { asset } from '../utils/asset.js'
import './Portfolio.css'

const categories = ['All', 'Web Development', 'Branding', 'Photography', 'Video', 'Motion', 'Audio', 'Marketing']

const projects = [
  { name: 'Nine Pilates', type: 'Launch Kit', img: asset('/assets/images/launchKit-elite-B08ij3UA.png'), href: '/portfolio/nine-pilates-launchkit' },
  { name: 'Nine Pilates', type: 'Branding', img: asset('/assets/images/ninePilates-CMncnx6x.jpg'), href: '/portfolio/nine-pilates' },
  { name: 'BeugLab', type: 'Web Development', img: asset('/assets/images/webdev-BJFsUdj3.png'), href: '/portfolio/beuglab' },
  { name: 'Uncle Phils', type: 'Branding', img: asset('/assets/portfolio/lumos-projects/uncle-phils.jpg'), href: '/portfolio/uncle-phils' },
  { name: 'Heavenly Desserts', type: 'Photography', img: asset('/assets/portfolio/lumos-projects/heavenly-desserts-food.jpg'), href: '/portfolio/heavenly-desserts' },
  { name: 'Abdul Islam', type: 'Marketing', img: asset('/assets/portfolio/lumos-projects/abdul-islam-1.jpg'), href: '/portfolio/abdul-islam' },
  { name: 'Wings n Thingz', type: 'Branding', img: asset('/assets/portfolio/lumos-projects/wings-n-thingz.jpg'), href: '/portfolio/wings-n-thingz' },
  { name: 'Chai Factory', type: 'Branding', img: asset('/assets/portfolio/lumos-projects/chai-factory.jpg'), href: '/portfolio/chai-factory' },
  { name: 'FLOW', type: 'Branding', img: asset('/assets/portfolio/lumos-projects/flow.jpg'), href: '/portfolio/flow' },
  { name: 'Juci', type: 'Branding', img: asset('/assets/portfolio/lumos-projects/juci.jpg'), href: '/portfolio/juci' },
  { name: 'House of Customs', type: 'Branding', img: asset('/assets/portfolio/lumos-projects/house-of-customs.jpg'), href: '/portfolio/house-of-customs' },
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
