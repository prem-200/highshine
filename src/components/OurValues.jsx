import { useEffect, useRef, useState } from 'react'
import './OurValues.css'

const values = [
  {
    num: '01',
    title: 'Commitment to Excellence',
    desc: 'We only deliver what we feel is the most effective solution for your needs — no shortcuts, no compromises.',
  },
  {
    num: '02',
    title: 'Innovation & Learning',
    desc: 'Finding the best ways to learn and develop the tools to your success, staying ahead of every industry shift.',
  },
  {
    num: '03',
    title: 'Integrity & Transparency',
    desc: 'We give you a bird\'s eye view of every step in the implementation process — full visibility, always.',
  },
  {
    num: '04',
    title: 'Customer-Centricity',
    desc: 'Keeping customer needs as the core outcome of all our internal processes and decisions.',
  },
  {
    num: '05',
    title: 'Collaborative Growth',
    desc: 'Your step-ups are our step-ups. We deeply imbibe this in every relationship, internal and external.',
  },
  {
    num: '06',
    title: 'Ethics Above All',
    desc: 'We conduct business with integrity, honesty, and full legal compliance — for a brighter, sustainable future.',
  },
]

function ValueItem({ v, i, alwaysVisible }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(alwaysVisible)

  useEffect(() => {
    if (alwaysVisible) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [alwaysVisible])

  return (
    <div
      className={`ov-item ${visible ? 'visible' : ''}`}
      ref={ref}
      style={{ transitionDelay: alwaysVisible ? `${i * 0.08}s` : '0s' }}
    >
      <span className="ov-num">{v.num}</span>
      <div className="ov-line" />
      <div className="ov-content">
        <h3 className="ov-item-title">{v.title}</h3>
        <p className="ov-item-desc">{v.desc}</p>
      </div>
    </div>
  )
}

export default function OurValues() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className={`ov-section ${visible ? 'visible' : ''}`} ref={ref}>
      <div className="ov-bg-word">VALUES</div>
      <div className="ov-bg-glow" />

      <div className="ov-inner">
        <div className="ov-left">
          <span className="ov-label">What We Stand For</span>
          <h2 className="ov-title">Our<br /><span className="ov-accent">Core Values</span></h2>
          <p className="ov-desc">
            Six principles that guide every decision, every relationship, and every line of code we deliver.
          </p>
          <div className="ov-divider" />
          <div className="ov-count">
            <strong>6</strong>
            <span>Core principles driving everything we do</span>
          </div>
        </div>

        <div className="ov-right">
          {values.map((v, i) => (
            <ValueItem key={i} v={v} i={i} alwaysVisible={i < 3} />
          ))}
        </div>
      </div>
    </section>
  )
}
