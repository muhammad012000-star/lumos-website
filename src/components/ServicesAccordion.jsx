import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ServicesAccordion.css'

export default function ServicesAccordion({ items }) {
  const [openId, setOpenId] = useState(null)

  return (
    <div className="services-accordion">
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <div className={`accordion-row ${isOpen ? 'is-open' : ''}`} key={item.id}>
            <button
              type="button"
              className="accordion-trigger"
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${item.id}`}
              onClick={() => setOpenId(isOpen ? null : item.id)}
            >
              <span className="accordion-label">{item.label}</span>
              <span className="accordion-plus" aria-hidden="true" />
            </button>
            <div className="accordion-panel-wrap">
              <div className="accordion-panel-inner">
                <div className="accordion-panel" id={`accordion-panel-${item.id}`}>
                  <p>{item.desc}</p>
                  <div className="accordion-pills">
                    {item.pills.map((p) => <span key={p}>{p}</span>)}
                  </div>
                  <Link to={`/services#${item.id}`} className="accordion-link">Learn more →</Link>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
