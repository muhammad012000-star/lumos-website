import { Link, Navigate, useParams } from 'react-router-dom'
import FadeIn from '../components/FadeIn.jsx'
import Parallax from '../components/Parallax.jsx'
import ScrollRevealText from '../components/ScrollRevealText.jsx'
import StickyCounterSteps from '../components/StickyCounterSteps.jsx'
import { useContact } from '../context/ContactContext.jsx'
import { getProject } from '../data/projects.js'
import './ProjectPage.css'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = getProject(slug)
  const { openContact } = useContact()

  if (!project) return <Navigate to="/portfolio" replace />

  const steps = project.steps?.map((step) => ({
    title: step.title,
    body: step.body.map((paragraph, i) => <p key={i}>{paragraph}</p>),
  }))

  return (
    <article className="project-page">
      <section className="project-hero">
        <div className="container">
          <FadeIn className="project-meta-row">
            <span>{project.year}</span>
            <span>{project.type}</span>
            <span>{project.location}</span>
          </FadeIn>

          <h1 className="project-title">{project.name}</h1>

          <FadeIn className="project-tags">
            {project.tags.map((t) => (
              <span key={t} className="pill">{t}</span>
            ))}
          </FadeIn>

          <FadeIn as="p" className="project-intro">
            {project.intro}
          </FadeIn>

          {project.websiteLink && (
            <FadeIn className="project-link-card">
              <div>
                <h3>{project.websiteLink.label}</h3>
                <p>{project.websiteLink.description}</p>
              </div>
              <a href={project.websiteLink.url} target="_blank" rel="noreferrer" className="btn btn-solid">
                View now →
              </a>
            </FadeIn>
          )}
        </div>

        {project.coverVideo && (
          <FadeIn className="project-cover">
            <video autoPlay muted loop playsInline poster={project.coverPoster}>
              <source src={project.coverVideo} type="video/mp4" />
            </video>
          </FadeIn>
        )}
        {!project.coverVideo && project.coverImage && (
          <FadeIn className="project-cover">
            <img src={project.coverImage} alt={`${project.name} cover`} />
          </FadeIn>
        )}
      </section>

      {steps && (
        <section className="project-copy">
          <div className="project-copy-inner">
            <StickyCounterSteps steps={steps} />
          </div>
        </section>
      )}

      {project.about && (
        <section className="project-about">
          <div className="container project-about-grid">
            <span className="eyebrow">About</span>
            <FadeIn className="project-about-text">
              {(Array.isArray(project.about) ? project.about : [project.about]).map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </FadeIn>
          </div>
        </section>
      )}

      {project.images?.map((img, i) => (
        <FadeIn key={img.src} className={`project-image project-image-${img.variant || 'wide'}`} delay={i * 80}>
          {img.parallax ? (
            <Parallax strength={img.parallax}>
              <img src={img.src} alt={img.alt} />
            </Parallax>
          ) : (
            <img src={img.src} alt={img.alt} />
          )}
        </FadeIn>
      ))}

      {project.testimonial && (
        <section className="project-testimonial">
          <div className="container project-testimonial-grid">
            <FadeIn className="project-image project-image-legs">
              <Parallax strength={30}>
                <img src={project.testimonial.image} alt={`${project.name} testimonial`} />
              </Parallax>
            </FadeIn>
            <FadeIn as="div">
              <span className="eyebrow">Testimonial</span>
              <p className="project-testimonial-quote">{project.testimonial.quote}</p>
              <p className="project-testimonial-name">{project.testimonial.name}</p>
              <span className="project-testimonial-role">{project.testimonial.role}</span>
            </FadeIn>
          </div>
        </section>
      )}

      {project.credits && (
        <section className="project-credits">
          <div className="container project-credits-grid">
            <span className="eyebrow">Credits</span>
            <div className="project-credits-list">
              {project.credits.map((c) => (
                <div key={c.role + c.name} className="project-credit">
                  <span className="project-credit-role">{c.role}</span>
                  <span className="project-credit-name">{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {project.highlight && (
        <section className="project-beyond">
          <div className="container">
            <div className="project-beyond-head">
              <FadeIn as="h2">{project.highlight.heading}</FadeIn>
              <FadeIn as="p">{project.highlight.body}</FadeIn>
            </div>
            <div className="project-beyond-grid">
              {project.highlight.images.map((src, i) => (
                <FadeIn key={`${src}-${i}`} className="project-image" delay={i * 120}>
                  <Parallax strength={25}>
                    <img src={src} alt={`${project.highlight.heading} ${i + 1}`} />
                  </Parallax>
                </FadeIn>
              ))}
            </div>
            <FadeIn className="project-beyond-footer">
              <h3>{project.highlight.footerHeading}</h3>
              <button onClick={openContact} className="btn btn-solid">{project.highlight.ctaLabel}</button>
              <span className="eyebrow">{project.highlight.footerNote}</span>
            </FadeIn>
          </div>
        </section>
      )}

      {project.results && (
        <section className="project-results">
          <div className="container">
            <ScrollRevealText as="h2" maxLines={3} text={project.results.text} />
            <FadeIn className="project-image project-image-results">
              <img src={project.results.image} alt={`${project.name} results`} />
            </FadeIn>
            <FadeIn className="project-results-actions">
              {project.results.viewUrl && (
                <a href={project.results.viewUrl} target="_blank" rel="noreferrer" className="btn btn-solid">View project →</a>
              )}
              <button onClick={openContact} className="btn">Get in touch</button>
            </FadeIn>
          </div>
        </section>
      )}

      <section className="project-next">
        <div className="container">
          <span className="eyebrow">Next project</span>
          <Link to={`/portfolio/${project.nextProject.slug}`} className="project-next-link">
            {project.nextProject.label} →
          </Link>
        </div>
      </section>
    </article>
  )
}
