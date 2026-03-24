import { useEffect, useRef, useState } from 'react'
import './AboutFounders.css'

export default function AboutFounders() {
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
    <section className={`founders-section ${visible ? 'visible' : ''}`} ref={ref}>
      <div className="founders-blob founders-blob-1" />
      <div className="founders-blob founders-blob-2" />

      <div className="founders-inner">

        {/* ── Left: two portrait cards side by side ── */}
        <div className="founders-left">
          <div className="founders-portraits">

            <div className="founders-portrait founders-portrait--1">
              <img src="/highshine/owner.jpg" alt="Hari Gautham" />
              <div className="founders-portrait-overlay" />
              <div className="founders-portrait-info">
                <span className="founders-portrait-role">Founder & CEO</span>
                <strong className="founders-portrait-name">Hari Gautham</strong>
              </div>
              <span className="f-corner f-tl" />
            </div>

            <div className="founders-portrait founders-portrait--2">
              <img src="/highshine/owner2.jpg" alt="Surendar" />
              <div className="founders-portrait-overlay" />
              <div className="founders-portrait-info">
                <span className="founders-portrait-role">Co-Founder & CTO</span>
                <strong className="founders-portrait-name">Surendar</strong>
              </div>
              <span className="f-corner f-br" />
            </div>

          </div>

          {/* floating stat badge */}
        
        </div>

        {/* ── Right: content ── */}
        <div className="founders-right">
          <div className="founders-label-wrap">
            <span className="founders-label-dot" />
            <span className="founders-label">Our Story</span>
          </div>

          <h2 className="founders-title">
            The Visionaries<br />
            Behind <span className="founders-title-accent">Highshine</span>
          </h2>

          <p className="founders-text">
            Our founder, <strong>Mr. Hari Gautham</strong>, is creating a community of
            experts dedicated to viewing each implementation as a lifelong commitment
            to our clients' success.
          </p>
          <p className="founders-text">
            Our co-founder, <strong>Mr. Surendar</strong>, identified this gap repeatedly
            during his extensive global experience in ERP transformations. From Asia to the
            Americas, he recognized the need for a provider who remains committed to clients
            long after go-live, ensuring they unlock the full potential of ERP.
          </p>
          <p className="founders-text">
            This unwavering approach has driven Highshine to achieve an extraordinary
            <strong> 300% year-over-year growth</strong> since its inception. However,
            our success isn't just about numbers — it reflects our steadfast dedication
            to our clients and our team.
          </p>

          {/* quote */}
          <blockquote className="founders-quote">
            <div className="founders-quote-bar" />
            <div>
              <p>"We believe ERP success is a lifelong partnership."</p>
              <cite>— Hari Gautham &amp; Surendar, Co-Founders</cite>
            </div>
          </blockquote>

          {/* CTA */}
          <a href="#" className="founders-cta">
            Meet Our Team
            <svg viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
