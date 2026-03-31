import { profile } from '../data/profile'

const footerLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact', href: '/#contact' },
]

const contactItems = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="m5.5 8 6.5 5 6.5-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, '')}`,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.8 4.8h2.6l1.2 3.2-1.6 1.6a14.8 14.8 0 0 0 4.4 4.4l1.6-1.6 3.2 1.2v2.6a1.8 1.8 0 0 1-2 1.8A15.4 15.4 0 0 1 5.9 6.8a1.8 1.8 0 0 1 1.9-2Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/Munyeshya',
    href: profile.github,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.8a8.2 8.2 0 0 0-2.6 15.98c.4.07.55-.17.55-.39v-1.5c-2.26.5-2.74-.96-2.74-.96-.37-.94-.9-1.18-.9-1.18-.73-.5.06-.5.06-.5.8.06 1.23.83 1.23.83.72 1.22 1.88.87 2.34.67.07-.52.28-.87.5-1.07-1.8-.2-3.7-.9-3.7-4.03 0-.9.33-1.64.84-2.22-.08-.2-.36-1.03.08-2.15 0 0 .69-.22 2.26.85a7.78 7.78 0 0 1 4.12 0c1.57-1.07 2.26-.85 2.26-.85.44 1.12.16 1.95.08 2.15.52.58.84 1.32.84 2.22 0 3.14-1.9 3.83-3.7 4.03.29.25.55.74.55 1.49v2.2c0 .22.15.47.55.39A8.2 8.2 0 0 0 12 3.8Z" fill="currentColor" />
      </svg>
    ),
  },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-shell">
          <div className="row g-4 align-items-start">
            <div className="col-lg-5">
              <div className="footer-brand">
                <a href="/#home" className="site-logo footer-logo">
                  <span className="site-logo-mark">A</span>ntux
                </a>
                <p className="footer-kicker">Software Engineer</p>
                <h3>Building practical systems that teams can rely on.</h3>
                <p className="footer-copy">
                  I design, build, deploy, and support software for real operational environments, with a strong focus on reliability, clarity, and production readiness.
                </p>
                <a href={profile.resume} className="split-button text-decoration-none footer-cta">
                  Download Resume
                </a>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="footer-block">
                <h4>Navigate</h4>
                <div className="footer-link-list">
                  {footerLinks.map((item) => (
                    <a key={item.label} href={item.href} className="footer-link">
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="footer-block">
                <h4>Connect</h4>
                <div className="footer-contact-list">
                  {contactItems.map((item) => (
                    <a key={item.label} href={item.href} className="footer-contact-item" target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                      <span className="footer-contact-icon">{item.icon}</span>
                      <span>
                        <small>{item.label}</small>
                        <strong>{item.value}</strong>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="mb-0">
              {new Date().getFullYear()} Munyeshya Beni Obed. Designed to present production-ready software work clearly and professionally.
            </p>
            <a href="/#home" className="footer-top-link">Back to top</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
