import { useState } from 'react'
import './Header.css'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions', dropdown: true },
  { label: 'Industries', href: '/industries', dropdown: true },
  { label: 'About Us', href: '/about' },
  { label: 'Blogs', href: '/blogs', dropdown: true },
  { label: 'Our Works', href: '/works' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [active, setActive] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-inner">
        <a className="logo" href="#">
          <img src="/highshine/Highshine-logo-2.svg" alt="Highshine" className="logo-img" />
        </a>

        <nav className={`nav${menuOpen ? ' nav--open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`nav-link${active === item.label ? ' active' : ''}`}
              onClick={(e) => { e.preventDefault(); setActive(item.label); setMenuOpen(false) }}
            >
              {item.label}
              {item.dropdown && (
                <svg className="chevron" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </a>
          ))}
        </nav>

        <button className="contact-btn desktop-only"><span>Contact Us</span></button>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`ham-line${menuOpen ? ' open' : ''}`} />
          <span className={`ham-line${menuOpen ? ' open' : ''}`} />
          <span className={`ham-line${menuOpen ? ' open' : ''}`} />
        </button>
      </div>
    </header>
  )
}
