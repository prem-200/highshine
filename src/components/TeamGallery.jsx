import { useEffect, useRef, useState, useCallback } from 'react'
import './TeamGallery.css'

const images = [
  { src: '/meet.jpg',  alt: 'Highshine Team' },
  { src: '/meet1.jpg', alt: 'Team Gathering' },
  { src: '/meet.jpg',  alt: 'Office Moments' },
  { src: '/meet1.jpg', alt: 'Team Activity' },
  { src: '/meet.jpg',  alt: 'Highshine Family' },
]

const INTERVAL = 3000

export default function TeamGallery() {
  const [active, setActive] = useState(0)
  const timerRef = useRef(null)
  const total = images.length

  const next = useCallback(() => setActive(c => (c + 1) % total), [total])
  const prev = useCallback(() => setActive(c => (c - 1 + total) % total), [total])

  const resetTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(next, INTERVAL)
  }

  useEffect(() => {
    timerRef.current = setInterval(next, INTERVAL)
    return () => clearInterval(timerRef.current)
  }, [next])

  const handlePrev = () => { prev(); resetTimer() }
  const handleNext = () => { next(); resetTimer() }

  // compute position offset relative to active: -2,-1,0,1,2
  const getPos = (i) => {
    let d = i - active
    if (d > total / 2)  d -= total
    if (d < -total / 2) d += total
    return d
  }

  const posConfig = {
    '-2': { cls: 'pos-far-left' },
    '-1': { cls: 'pos-left' },
     '0': { cls: 'pos-center' },
     '1': { cls: 'pos-right' },
     '2': { cls: 'pos-far-right' },
  }

  return (
    <section className="tg-section">
      <div className="tg-bg-glow" />

      <div className="tg-header">
        <h2 className="tg-title">
          Inside the World of <span className="tg-accent">Highshine</span>
        </h2>
        <p className="tg-sub">Our People, Our Story</p>
      </div>

      <div className="tg-stage">
        <button className="tg-arrow tg-arrow--prev" onClick={handlePrev} aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="tg-track">
          {images.map((img, i) => {
            const d = getPos(i)
            if (!posConfig[d]) return null
            return (
              <div
                key={i}
                className={`tg-card ${posConfig[d].cls}`}
                onClick={() => { setActive(i); resetTimer() }}
              >
                <img src={img.src} alt={img.alt} />
                <div className="tg-card-overlay" />
              </div>
            )
          })}
        </div>

        <button className="tg-arrow tg-arrow--next" onClick={handleNext} aria-label="Next">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="tg-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`tg-dot ${i === active ? 'active' : ''}`}
            onClick={() => { setActive(i); resetTimer() }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
