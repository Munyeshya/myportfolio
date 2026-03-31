import { motion } from 'framer-motion'
import { profile } from '../data/profile'

const detailItems = [
  {
    label: 'Address',
    value: profile.address,
    href: null,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 9.5 12 4l8 5.5V20H4V9.5Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 20v-5h5v5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
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
  {
    label: 'LinkedIn',
    value: 'LinkedIn profile available on request',
    href: null,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.6 8.2a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2Zm-1.4 2.1h2.8V19H5.2v-8.7Zm4.5 0h2.68v1.19h.04c.37-.7 1.28-1.44 2.64-1.44 2.82 0 3.34 1.86 3.34 4.28V19h-2.79v-4.1c0-.98-.02-2.24-1.36-2.24-1.37 0-1.58 1.07-1.58 2.17V19H9.7v-8.7Z" fill="currentColor" />
      </svg>
    ),
  },
]

function About() {
  return (
    <section id="about" className="portfolio-section">
      <div className="container section-frame d-flex align-items-center">
        <div className="row g-4 align-items-center w-100">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="col-lg-5"
          >
            <div className="section-pill">About</div>
            <h2 className="section-title">Operational Software</h2>
            <p className="section-subtitle">
              I care about engineering, delivery, and support because software has to work for real teams in real environments every day, under pressure, consistently.
            </p>
            <p className="section-copy">
              {profile.summary}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="col-lg-7"
          >
            <div className="row g-4">
              <div className="col-md-6">
                <div className="dark-card stat-card h-100">
                  <h3>Strengths</h3>
                  <ul className="plain-list">
                    {profile.strengths.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="dark-card stat-card h-100">
                  <h3>Details</h3>
                  <ul className="details-list">
                    {detailItems.map((item) => (
                      <li key={item.label} className="details-item">
                        <span className="details-icon">{item.icon}</span>
                        <div>
                          <span className="details-label">{item.label}</span>
                          {item.href ? (
                            <a className="details-link" href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                              {item.value}
                            </a>
                          ) : (
                            <span className="details-value">{item.value}</span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-12">
                <div className="dark-card stat-card">
                  <h3>Industry Exposure</h3>
                  <div className="d-flex flex-wrap gap-2 mt-3">
                    {profile.industries.map((item) => (
                      <span key={item} className="skill-badge">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
