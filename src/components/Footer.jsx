import './Footer.css'

const links = {
  Company:  ['About Us', 'Our Team', 'Careers', 'News'],
  Services: ['SAP Implementation', 'ERP Consulting', 'Support & Maintenance', 'Training'],
  Connect:  ['Contact Us', 'Schedule a Demo', 'Partner With Us', 'Blog'],
}

export default function Footer() {
  return (
    <>
      {/* ── CTA Banner ── */}
      <section className="cta-wrap">
        <div className="cta-box">
          <div className="cta-glow" />
          <h2 className="cta-heading">Empower your digital transformation today</h2>
          <p className="cta-sub">Join 100+ companies already transforming with Highshine</p>
          <a href="#" className="cta-btn">
            Schedule a free consultation
            <svg viewBox="0 0 20 20" fill="none">
              <path d="M7 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-inner">

          {/* Brand col */}
          <div className="footer-brand">
            <img src="/highshine/Highshine-logo-2.svg" alt="Highshine" className="footer-logo" />
            <p className="footer-tagline">
              Your lifelong ERP partner — delivering transformation that lasts beyond go-live.
            </p>
            <div className="footer-socials">
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="footer-social">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              {/* Twitter/X */}
              <a href="#" aria-label="Twitter" className="footer-social">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="footer-social">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(links).map(([heading, items]) => (
            <div className="footer-col" key={heading}>
              <h4 className="footer-col-heading">{heading}</h4>
              <ul>
                {items.map(item => (
                  <li key={item}><a href="#">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}

          {/* Head Office col */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Head Office</h4>
            <a
              href="https://maps.google.com/?q=No+50+Eswaran+Koil+Street+Zamin+Pallavaram+Chennai+600117"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-map-card"
            >
              <div className="footer-map-preview">
                <iframe
                  title="Highshine Head Office"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d80.1948!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d6e9b5b5b5b%3A0x0!2sNo+50+Eswaran+Koil+Street+Zamin+Pallavaram+Chennai+600117!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="footer-map-iframe"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="footer-map-body">
                <div className="footer-map-country">
                  <span>🇮🇳</span> India
                </div>
                <p className="footer-map-addr">
                  No: 50, Eswaran Koil Street,<br />
                  Zamin Pallavaram,<br />
                  Chennai 600117.
                </p>
                <span className="footer-map-link">
                  View on Maps
                  <svg viewBox="0 0 20 20" fill="none">
                    <path d="M7 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Highshine Technologies. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  )
}
