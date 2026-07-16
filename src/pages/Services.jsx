import { Link } from 'react-router-dom'
import { useContact } from '../context/ContactContext.jsx'
import FadeIn from '../components/FadeIn.jsx'
import MagneticButton from '../components/MagneticButton.jsx'
import ServiceNav from '../components/ServiceNav.jsx'
import ServiceVisual from '../components/ServiceVisual.jsx'
import './Services.css'

const categories = [
  {
    id: 'web-development',
    label: 'Web Development',
    title: 'Web Development',
    desc: 'Fast, resilient, and visually striking websites engineered for performance. We build custom interfaces that load instantly, animate beautifully, and scale with your business.',
    pills: ['React & Vite', 'Motion Design', 'Headless CMS', 'SEO Foundations', 'API Integrations', 'Performance Audits'],
    visual: 'web',
  },
  {
    id: 'video-production',
    label: 'Video Production',
    title: 'Video Production',
    desc: 'Cinematic storytelling from concept to color grade. We produce brand films, product videos, and social-first content built to hold attention.',
    pills: ['Cinematography', 'Story & Script', 'Color Grading', 'Motion Graphics', 'Drone Footage', 'Sound Mixing'],
    visual: 'video',
  },
  {
    id: 'photography',
    label: 'Photography',
    title: 'Photography',
    desc: 'Studio and on-location photography that captures your brand’s texture, product, and people with precision lighting and composition.',
    pills: ['Product Photography', 'Lifestyle Shoots', 'Studio Lighting', 'Retouching', 'Art Direction', 'Editorial Sets'],
    visual: 'photo',
  },
  {
    id: 'branding',
    label: 'Branding',
    title: 'Branding',
    desc: 'Identity systems built to last — logo, typography, color, and voice, unified into a brand that’s instantly recognizable at every touchpoint.',
    pills: ['Logo & Mark', 'Visual Identity', 'Typography Systems', 'Brand Guidelines', 'Packaging', 'Naming & Voice'],
    visual: 'branding',
  },
  {
    id: 'marketing',
    label: 'Marketing',
    title: 'Marketing',
    desc: 'Data-informed campaigns that turn attention into growth. We plan, launch, and optimize marketing across every channel that matters.',
    pills: ['Paid Media', 'Content Strategy', 'Email Campaigns', 'Social Management', 'Analytics & Reporting', 'Conversion Testing'],
    visual: 'marketing',
  },
  {
    id: 'audio',
    label: 'Audio',
    title: 'Audio',
    desc: 'Sound design and production that gives your brand its voice — from podcasts to product audio to original scoring.',
    pills: ['Sound Design', 'Mixing & Mastering', 'Voiceover Direction', 'Podcast Production', 'Original Scoring', 'Audio Branding'],
    visual: 'audio',
  },
]

const offers = [
  {
    id: 'launch-kits',
    eyebrow: 'Ground Zero',
    title: 'Launch Kits',
    desc: 'Everything you need to bring your brand to life, fast. A streamlined, strategic approach for building your presence from the ground up.',
    tags: ['Landing Page', 'Brand Identity', 'Business Cards', 'Marketing Assets', 'Social Media Starter Kit'],
    cta: { label: 'Explore Options →', href: '/services/launch-kits' },
  },
]

export default function Services() {
  const { openContact } = useContact()

  return (
    <>
      <section className="services-hero">
        <div className="services-hero-bg" aria-hidden="true">
          <span className="blob blob-a" />
          <span className="blob blob-b" />
          <span className="blob blob-c" />
        </div>
        <div className="container services-hero-inner">
          <FadeIn as="h1">Our Services</FadeIn>
          <FadeIn as="p" delay={100} className="services-hero-lede">
            A multidisciplinary studio built for ambitious brands — from first frame to final
            launch, we handle every layer of your presence with precision and craft.
          </FadeIn>
          <FadeIn delay={200}>
            <MagneticButton as="button" onClick={openContact} className="btn btn-solid">
              Start a Project →
            </MagneticButton>
          </FadeIn>
        </div>
      </section>

      <div className="service-sections">
        <ServiceNav items={categories.map((c) => ({ id: c.id, label: c.label }))} />

        {categories.map((c, i) => (
          <section id={c.id} className="service-block" key={c.id}>
            <div className={`container service-grid ${i % 2 === 1 ? 'is-reversed' : ''}`}>
              <FadeIn className="service-copy">
                <span className="eyebrow">{`0${i + 1} — ${c.label}`}</span>
                <h2>{c.title}</h2>
                <p>{c.desc}</p>
                <div className="service-pills">
                  {c.pills.map((p, pi) => (
                    <FadeIn as="span" key={p} delay={pi * 60} className="pill">{p}</FadeIn>
                  ))}
                </div>
                <MagneticButton as="button" onClick={openContact} className="btn">
                  Get a Quote →
                </MagneticButton>
              </FadeIn>
              <FadeIn delay={120} className="service-visual-wrap">
                <ServiceVisual variant={c.visual} />
              </FadeIn>
            </div>
          </section>
        ))}
      </div>

      {offers.map((o, i) => (
        <section className={`offer-block ${i % 2 === 1 ? 'alt' : ''}`} key={o.id}>
          <div className="container">
            <FadeIn className="offer-card">
              <span className="eyebrow">{o.eyebrow}</span>
              <h2>{o.title}</h2>
              <p>{o.desc}</p>
              <div className="offer-tags">
                {o.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
              {o.cta.external ? (
                <MagneticButton as="a" href={o.cta.href} target="_blank" rel="noreferrer" className="btn btn-solid">
                  {o.cta.label}
                </MagneticButton>
              ) : (
                <MagneticButton as={Link} to={o.cta.href} className="btn btn-solid">
                  {o.cta.label}
                </MagneticButton>
              )}
            </FadeIn>
          </div>
        </section>
      ))}

      <section className="services-cta">
        <div className="container services-cta-inner">
          <FadeIn as="h2">Have a project in mind?</FadeIn>
          <FadeIn as="p" delay={80}>
            Tell us where you want your brand to go — we'll map out exactly how to get it there.
          </FadeIn>
          <FadeIn delay={160}>
            <MagneticButton as="button" onClick={openContact} className="btn btn-solid services-cta-btn">
              Book a Discovery Call →
            </MagneticButton>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
