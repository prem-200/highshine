import { useEffect, useRef, useState } from 'react'
import './GrowthJourney.css'

const milestones = [
  { year: '2022', title: 'Company Started',    desc: '5 employees',   color: '#7c5cbf' },
  { year: '2023', title: 'Team Expansion',     desc: '15 employees',  color: '#8b6fd4' },
  { year: '2024', title: 'Growth Phase',       desc: '23 employees',  color: '#9d82e8' },
  { year: '2025', title: 'Scaling Operations', desc: '34 employees',  color: '#b49af0' },
  { year: '2026', title: 'Future Vision',      desc: '45+ employees', color: '#c9a227', upcoming: true },
]

export default function GrowthJourney() {
  const headerRef = useRef(null)
  const sectionRef = useRef(null)
  const [headerVisible, setHeaderVisible] = useState(false)
  const [revealed, setRevealed] = useState(0)
  const hasStarted = useRef(false)

  // Header observer
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setHeaderVisible(true) },
      { threshold: 0.3 }
    )
    if (headerRef.current) obs.observe(headerRef.current)
    return () => obs.disconnect()
  }, [])

  // Trigger sequential reveal when section enters viewport
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !hasStarted.current) {
          hasStarted.current = true
          let i = 0
          const tick = () => {
            i++
            setRevealed(i)
            if (i < milestones.length) setTimeout(tick, 600)
          }
          setTimeout(tick, 300)
        }
      },
      { threshold: 0.25 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  const linePercent = revealed === 0 ? 0 : ((revealed - 1) / (milestones.length - 1)) * 100

  return (
    <section className="journey-section" ref={sectionRef}>
      <div className="journey-bg-glow" />

      {/* header */}
      <div className={`journey-header ${headerVisible ? 'visible' : ''}`} ref={headerRef}>
        <span className="journey-label">Milestones</span>
        <h2 className="journey-title">Our Growth Journey</h2>
        <p className="journey-subtitle">
          From a bold idea to a global ERP partner — every year a new chapter.
        </p>
      </div>

      {/* timeline */}
      <div className="journey-track-wrap">
        <div className="journey-line-bg" />
        <div className="journey-line-fill" style={{ width: `${linePercent}%` }} />

        <div className="journey-milestones">
          {milestones.map((m, i) => (
            <div key={i} className={`journey-item ${i < revealed ? 'visible' : ''}`}>
              <div className="journey-dot-wrap">
                <div className="journey-dot" style={{ '--c': m.color, background: i < revealed ? m.color : 'rgba(255,255,255,0.1)' }}>
                  {i < revealed && <span className="journey-dot-ring" style={{ borderColor: m.color }} />}
                  {i === revealed - 1 && <span className="journey-dot-pulse" style={{ background: m.color }} />}
                </div>
              </div>

              <div className={`journey-card${m.upcoming ? ' upcoming' : ''}`} style={{ '--accent': m.color }}>
                <span className="journey-year" style={{ color: m.color }}>{m.year}</span>
                <strong className="journey-card-title">{m.title}</strong>
                <span className="journey-card-desc">{m.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
