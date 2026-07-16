import './ServiceVisual.css'

// Abstract, original CSS/SVG motif per service category — stands in for a
// photograph without reproducing any actual imagery.
export default function ServiceVisual({ variant }) {
  return (
    <div className={`service-visual sv-${variant}`} aria-hidden="true">
      {variant === 'web' && (
        <div className="sv-web">
          <div className="sv-web-grid" />
          <span className="sv-web-dot" />
        </div>
      )}

      {variant === 'video' && (
        <div className="sv-video">
          <span className="sv-video-frame f1" />
          <span className="sv-video-frame f2" />
          <span className="sv-video-frame f3" />
        </div>
      )}

      {variant === 'photo' && (
        <div className="sv-photo">
          <span className="sv-photo-ring r1" />
          <span className="sv-photo-ring r2" />
          <span className="sv-photo-ring r3" />
        </div>
      )}

      {variant === 'branding' && (
        <div className="sv-branding">
          <span className="sv-branding-circle c1" />
          <span className="sv-branding-circle c2" />
          <span className="sv-branding-circle c3" />
        </div>
      )}

      {variant === 'marketing' && (
        <div className="sv-marketing">
          <span className="sv-bar b1" />
          <span className="sv-bar b2" />
          <span className="sv-bar b3" />
          <span className="sv-bar b4" />
          <span className="sv-bar b5" />
        </div>
      )}

      {variant === 'audio' && (
        <div className="sv-audio">
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} className="sv-wave" style={{ animationDelay: `${i * 0.08}s` }} />
          ))}
        </div>
      )}
    </div>
  )
}
