import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useContact } from '../context/ContactContext.jsx'
import FitText from '../components/FitText.jsx'
import ScrollRevealText from '../components/ScrollRevealText.jsx'
import './Home.css'

const services = [
  {
    title: 'Web Dev',
    since: 'Since 2023',
    img: '/assets/images/webdev-BJFsUdj3.png',
    desc: 'Using technologies like React, GSAP, Lenis, and WebGL, we create high-performance websites with unforgettable design and seamless user experiences. Every build is optimized for speed, responsiveness, and visual impact.',
  },
  {
    title: 'Video',
    since: 'Since 2020',
    img: '/assets/images/videoServices-CqotOEUF.jpg',
    desc: 'Using cinematic techniques, bold storytelling, and sharp editing, we produce compelling video content that captures attention and drives engagement. From concept to final cut, every frame is crafted to reflect your brand.',
  },
  {
    title: 'Branding',
    since: 'Since 2024',
    img: '/assets/images/branding-CHpeN_2S.png',
    desc: 'Through thoughtful strategy and refined design, we build brand identities that resonate across every touchpoint. From logos and typography to voice and visuals, we shape brands with clarity, distinction, and lasting impact.',
  },
  {
    title: 'Marketing',
    since: 'Since 2025',
    img: '/assets/images/marketing-DHeevqBI.jpg',
    desc: 'We develop strategic campaigns that connect with your audience and convert with purpose. Blending creative direction, content strategy, and performance insights, we help brands grow with confidence across digital platforms.',
  },
]

const works = [
  {
    tag: 'ninepilates.com',
    year: '2025',
    type: 'Launch Kit',
    client: 'Nine Pilates',
    img: '/assets/images/launchKit-elite-B08ij3UA.png',
    href: '/portfolio',
  },
  {
    tag: 'Nine Pilates',
    year: '2025',
    type: 'Branding',
    client: 'Nine Pilates',
    img: '/assets/images/ninePilates-CMncnx6x.jpg',
    href: '/portfolio',
  },
  {
    tag: 'BeugLab.ca',
    year: '2025',
    type: 'Web Dev',
    client: 'BeugLab',
    img: '/assets/images/webdev-BJFsUdj3.png',
    href: '/portfolio',
  },
]

const process = [
  {
    numeral: 'I',
    title: 'Discovery',
    tags: ['Research', 'Strategy', 'Insights', 'Alignment', 'Planning'],
    img: '/assets/images/discovery-Bk_QTs9n.jpg',
    desc: 'Every great project begins with clarity. We dive deep into your brand, market, and audience to uncover the insights that shape a winning strategy.',
  },
  {
    numeral: 'II',
    title: 'Creative Direction',
    tags: ['Concept', 'Vision', 'Storytelling', 'Strategy'],
    img: '/assets/images/process-dev-Cupn64M9.jpg',
    desc: 'This is where the vision comes alive. We define the creative narrative, establishing tone, style, and direction for everything that follows.',
  },
  {
    numeral: 'III',
    title: 'Design Execution',
    tags: ['Branding', 'UI/UX', 'Visual Identity', 'Prototyping', 'Production'],
    img: '/assets/images/branding-CHpeN_2S.png',
    desc: 'Our design process is both aesthetic and strategic. We craft bold, memorable visuals and seamless user experiences at every touchpoint.',
  },
  {
    numeral: 'IV',
    title: 'Development',
    tags: ['Web', 'Motion', 'Interaction', 'Performance'],
    img: '/assets/images/process-dev-Cupn64M9.jpg',
    desc: 'Designs become reality through precision development. From advanced animations to high-performance builds, we bring every detail to life.',
  },
  {
    numeral: 'V',
    title: 'Delivery',
    tags: ['Delivery', 'Optimization', 'Support', 'Growth'],
    img: '/assets/images/discovery-Bk_QTs9n.jpg',
    desc: "A launch isn't the end—it's the beginning of momentum. We manage the rollout with care, optimize for performance, and support you as you grow.",
  },
]

export default function Home() {
  const { openContact } = useContact()
  const [activeProcess, setActiveProcess] = useState(0)
  const processStepRefs = useRef([])

  useEffect(() => {
    const observers = processStepRefs.current.map((el, i) => {
      if (!el) return null
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveProcess(i)
        },
        { rootMargin: '-40% 0px -40% 0px' },
      )
      io.observe(el)
      return io
    })
    return () => observers.forEach((io) => io && io.disconnect())
  }, [])

  return (
    <>
      <section className="hero">
        <video className="hero-bg" autoPlay muted loop playsInline>
          <source src="/assets/video/flowerBackground-C4Y651BM.mp4" type="video/mp4" />
        </video>
        <div className="hero-inner">
          <FitText as="h1" className="hero-title">"Lumos Studios."</FitText>
          <p className="hero-sub">
            We are an experience-driven creative-tech studio that fuses design and strategy
            to shape bold, meaningful brands across multiple mediums.
          </p>
          <button onClick={openContact} className="btn hero-cta">Book a Discovery Call</button>
        </div>
        <div className="hero-social">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">Tiktok ↗</a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">Youtube ↗</a>
        </div>
        <div className="scroll-hint">
          <svg viewBox="0 0 100 100" className="scroll-hint-ring">
            <defs>
              <path id="scrollCirclePath" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
            </defs>
            <text fontSize="7.2" letterSpacing="1.5" fill="var(--ash)">
              <textPath href="#scrollCirclePath" startOffset="0%">
                scroll down + scroll down + scroll down +&#160;
              </textPath>
            </text>
          </svg>
          <span className="scroll-hint-arrow">↓</span>
        </div>
      </section>

      <section className="statement">
        <div className="container statement-inner">
          <ScrollRevealText
            as="h2"
            maxLines={4}
            text="Driven by design that connects, stories that resonate, and strategy that scales. We build digital experiences that captivate, connect, and convert."
          />
          <div className="statement-cta">
            <button onClick={openContact} className="btn btn-solid">Connect with us.</button>
            <button onClick={openContact} className="statement-arrow" aria-label="Connect with us">→</button>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Our<br />Services.</h2>
              <p>A full spectrum of creative solutions, built to elevate your brand at every touchpoint.</p>
            </div>
            <div className="section-head-cta">
              <Link to="/services" className="pill">Let's get results.</Link>
              <Link to="/services" className="section-head-arrow" aria-label="Let's get results">→</Link>
            </div>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <Link
                to="/services"
                key={s.title}
                className="service-card"
                style={{ '--service-img': `url(${s.img})` }}
              >
                <span className="service-arrow">↗</span>
                <span className="service-since">{s.since}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="works">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">[ Selected Work ]</span>
            <h2>Selected<br />Works.</h2>
          </div>
          <div className="works-grid">
            {works.map((w) => (
              <Link to={w.href} key={w.tag} className="work-card">
                <div className="work-img" style={{ backgroundImage: `url(${w.img})` }} />
                <div className="work-meta">
                  <span>"{w.tag}"</span>
                  <span>{w.year}</span>
                  <span>{w.type}</span>
                </div>
                <span className="work-view">View Project →</span>
              </Link>
            ))}
          </div>
          <Link to="/portfolio" className="portfolio-banner">
            <span>[ See our portfolio ]</span>
          </Link>
        </div>
      </section>

      <section className="process">
        <div className="container">
          <div className="section-head">
            <h2>The<br />Process.</h2>
            <p>We follow a systematic process that's flexible and adaptive, allowing us to meet the unique needs of every brand.</p>
          </div>
          <div className="process-list">
            <div className="process-steps-col">
              {process.map((p, i) => (
                <div className="process-step" key={p.numeral} ref={(el) => (processStepRefs.current[i] = el)}>
                  <div className="process-info">
                    <span className="process-numeral">{p.numeral}</span>
                    <h3 className="process-title">{p.title}</h3>
                    <div className="process-tags">
                      {p.tags.map((t) => <span key={t}>{t}</span>)}
                    </div>
                    <p className="process-desc">{p.desc}</p>
                  </div>
                  <div className="process-img process-img-mobile" style={{ backgroundImage: `url(${p.img})` }} />
                </div>
              ))}
            </div>
            <div className="process-media-col">
              <div className="process-media-sticky">
                {process.map((p, i) => (
                  <div
                    key={p.numeral}
                    className={`process-media-img ${i === activeProcess ? 'is-active' : ''}`}
                    style={{ backgroundImage: `url(${p.img})` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-grid">
          <div>
            <p className="contact-lede">Partnering with brands, founders and startups to build impactful identities that drive growth and deliver results.</p>
            <span className="eyebrow">Let's talk</span>
            <h2>Contact us.</h2>
            <a href="mailto:hello@lumosstudios.ca">hello@lumosstudios.co.uk</a>
            <span className="eyebrow" style={{ marginTop: 40 }}>Join our team.</span>
            <a href="mailto:hello@lumosstudios.ca">hello@lumosstudios.co.uk</a>
            <div className="contact-cols">
              <div>
                <span className="eyebrow">Birmingham, United Kingdom</span>
                <p>The Kaizen<br />B70 </p>
              </div>
              <div>
                <span className="eyebrow">Hours.</span>
                <p>Monday – Friday<br />EST 09:00 – 17:00</p>
              </div>
            </div>
          </div>
          <div className="contact-visual">
            <img src="/assets/images/982studios-Billboard-NvFQz9Y4.jpg" alt="Lumos Studios billboard" />
            <h3>Let's get in touch.</h3>
          </div>
        </div>
      </section>
    </>
  )
}
