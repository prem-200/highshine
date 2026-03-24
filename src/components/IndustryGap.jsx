import { useEffect, useRef, useState } from 'react'
import './IndustryGap.css'

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '10+', label: 'Years Experience' },
]

const pills = [
  { icon: '⚡', text: 'Post Go-Live Support' },
  { icon: '🔗', text: 'ERP Integration' },
  { icon: '📊', text: 'Data Analytics' },
  { icon: '🛡️', text: 'System Security' },
]

export default function IndustryGap() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={`gap-section ${visible ? 'visible' : ''}`} ref={ref}>

      {/* background decorations */}
      <div className="gap-blob gap-blob-1" />
      <div className="gap-blob gap-blob-2" />

      <div className="gap-inner">

        {/* ── Left ── */}
        <div className="gap-left">
          <div className="gap-label-wrap">
            <span className="gap-label-dot" />
            <span className="gap-label">The Problem</span>
          </div>

          <h2 className="gap-title">
            The Industry<br />
            <span className="gap-title-accent">Gap</span>
          </h2>

          <p className="gap-text">
            While most ERP providers emphasize implementation as the key phase,
            we see the real work beginning after that. When a business starts using
            the software day-to-day, that's when the transformation truly unfolds.
          </p>
          <p className="gap-text">
            This is the moment Highshine steps in as a committed partner, ensuring
            our clients realize the full value of their ERP investment.
          </p>

          {/* feature pills */}
          <div className="gap-pills">
            {pills.map((p, i) => (
              <span key={i} className="gap-pill" style={{ transitionDelay: `${0.4 + i * 0.08}s` }}>
                <span className="gap-pill-icon">{p.icon}</span>
                {p.text}
              </span>
            ))}
          </div>

          {/* quote */}
          <blockquote className="gap-quote">
            <div className="gap-quote-bar" />
            <p>"The real transformation begins after go-live."</p>
          </blockquote>
        </div>

        {/* ── Right ── */}
        <div className="gap-right">
          <div className="gap-img-wrap">

            {/* corner accent */}
            <div className="gap-corner gap-corner-tl" />
            <div className="gap-corner gap-corner-br" />

            <img
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=900&q=80"
              alt="Team reviewing ERP dashboard"
              className="gap-img"
            />

            {/* overlay gradient on image */}
            <div className="gap-img-overlay" />

            {/* stats row */}
            <div className="gap-stats">
              {stats.map((s, i) => (
                <div key={i} className="gap-stat">
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>

            {/* floating badge */}
            <div className="gap-badge">
              <div className="gap-badge-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    fill="#c9a227" stroke="#c9a227" strokeWidth="1" />
                </svg>
              </div>
              <div>
                <strong>Trusted Partner</strong>
                <span>Since 2014</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
