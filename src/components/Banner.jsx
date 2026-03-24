import { useState, useEffect } from 'react'
import './Banner.css'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80',
    tag: 'Welcome to Highshine',
    title: 'Transforming Business',
    accent: 'Through Smart ERP Solutions',
    desc: 'We help organizations unlock the full potential of ERP — not just as a system, but as a strategic engine that reshapes how your business operates and grows.',
  },
  {
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80',
    tag: 'Our Expertise',
    title: 'End-to-End IT',
    accent: 'Implementation & Support',
    desc: 'From planning to deployment and beyond, our team delivers seamless IT solutions tailored to your industry — ensuring every phase is executed with precision.',
  },
  {
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&q=80',
    tag: 'Innovation First',
    title: 'Future-Ready',
    accent: 'Digital Transformation',
    desc: 'Embrace the future with confidence. Highshine bridges the gap between technology and business strategy, empowering teams to collaborate and make smarter decisions.',
  },
]

export default function Banner() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = (index) => {
    if (animating || index === current) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setAnimating(false)
    }, 400)
  }

  const prev = () => goTo((current - 1 + slides.length) % slides.length)
  const next = () => goTo((current + 1) % slides.length)

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [current, animating])

  const slide = slides[current]

  return (
    <section className="banner">
      {/* background images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`banner-bg ${i === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${s.image})` }}
        />
      ))}

      <div className="banner-overlay" />

      {/* content */}
      <div className={`banner-content ${animating ? 'fade-out' : 'fade-in'}`}>
        <span className="banner-tag">{slide.tag}</span>
        <h1 className="banner-title">
          {slide.title}<br />
          <span className="banner-title-accent">{slide.accent}</span>
        </h1>
        <p className="banner-desc">{slide.desc}</p>
        <div className="banner-actions">
          <a href="#" className="btn-primary">Get Started</a>
          <a href="#" className="btn-outline">Learn More</a>
        </div>
      </div>

      {/* arrows */}
      <button className="carousel-arrow left" onClick={prev} aria-label="Previous">
        <svg viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <button className="carousel-arrow right" onClick={next} aria-label="Next">
        <svg viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>

      {/* dots */}
      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
