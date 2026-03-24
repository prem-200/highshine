import { useEffect, useRef, useState } from 'react'
import './LeadershipCulture.css'

const stats = [
  { value: '50+', label: 'Team Members' },
  { value: '98%', label: 'Retention Rate' },
  { value: '4.9★', label: 'Culture Score' },
  { value: '12+', label: 'Nationalities' },
]

const pillars = [
  'Continuous Learning',
  'Collaborative Culture',
  'Growth Mindset',
  'Innovation First',
]

export default function LeadershipCulture() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={`lc-section ${visible ? 'visible' : ''}`} ref={ref}>
      <div className="lc-blob lc-blob-1" />
      <div className="lc-blob lc-blob-2" />

      <div className="lc-inner">

        {/* ── Left: Team Photo ── */}
        <div className="lc-left">
          <div className="lc-photo-frame">
            <img src="/meet.jpg" alt="Highshine Team" className="lc-photo" />
            <div className="lc-photo-overlay" />
            <div className="lc-photo-badge">
              <span className="lc-badge-dot" />
              <span>Highshine Family</span>
            </div>
          </div>

          {/* Stats row */}
          <div className="lc-stats">
            {stats.map((s) => (
              <div className="lc-stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Content ── */}
        <div className="lc-right">
          <div className="lc-label-wrap">
            <span className="lc-label-dot" />
            <span className="lc-label">Leadership &amp; Culture</span>
          </div>

          {/* Block 1 */}
          <div className="lc-block">
            <h2 className="lc-title">The <span className="lc-accent">Leadership</span></h2>
            <p className="lc-text">
              Highshine is a labor of love for the founders, and we envision building it
              more like a family than an organization. To the leadership, the welfare of
              employees is of utmost importance.
            </p>
          </div>

          {/* Divider */}
          <div className="lc-divider" />

          {/* Block 2 */}
          <div className="lc-block">
            <h2 className="lc-title">Cultivating <span className="lc-accent">Growth</span></h2>
            <p className="lc-text">
              At Highshine, we believe that a thriving team creates exceptional results
              for clients. We've built an employee-first culture where every voice matters
              and ideas shape our policies.
            </p>
            <p className="lc-text">
              Our commitment to learning and development ensures our team stays ahead of
              industry trends — equipped with the latest skills to serve you better.
            </p>
          </div>

          {/* Culture pillars */}
          <div className="lc-pillars">
            {pillars.map((p) => (
              <span className="lc-pillar" key={p}>{p}</span>
            ))}
          </div>

          <a href="#" className="lc-cta">
            Meet Our Team
            <svg viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
