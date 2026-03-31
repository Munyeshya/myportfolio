import { motion } from 'framer-motion'
import { profile } from '../data/profile'

function Icon({ name }) {
  if (name === 'download') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4v9m0 0 3.5-3.5M12 13 8.5 9.5M5 18h14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if (name === 'mail') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 7.5h16v9H4z" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="m5 8 7 5 7-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.5 4.5h3l1.1 3.6-1.6 1.3a14.5 14.5 0 0 0 5.6 5.6l1.3-1.6 3.6 1.1v3A1.5 1.5 0 0 1 18 19 15 15 0 0 1 5 6a1.5 1.5 0 0 1 1.5-1.5Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Hero() {
  return (
    <section id="home" className="portfolio-section hero-section">
      <div className="container section-frame hero-frame">
        <div className="row g-4 align-items-center h-100 hero-row">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
            className="col-lg-6"
          >
            <div className="hero-copy hero-copy-shift pe-lg-4">
              <h1 className="hero-title">Hey, I&apos;m Beni</h1>
              <div className="hero-role-box">Software Engineer</div>
              <p className="hero-text">
                I build reliable full-stack systems, integrate real APIs, deploy production software, and support users once the work is live.
                My experience covers dashboards, mobile workflows, deployment, and troubleshooting, with a strong focus on software that remains useful in real working environments.
              </p>
              <div className="hero-actions-wrap">
                <a href="#projects" className="split-button text-decoration-none">View My Work</a>
                <div className="hero-icon-actions">
                  <a href={profile.resume} className="icon-circle text-decoration-none" aria-label="Download resume">
                    <Icon name="download" />
                  </a>
                  <a href={`mailto:${profile.email}`} className="icon-circle text-decoration-none" aria-label="Send email">
                    <Icon name="mail" />
                  </a>
                  <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="icon-circle text-decoration-none" aria-label="Call phone number">
                    <Icon name="phone" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
            className="col-lg-5 offset-lg-1"
          >
            <div className="hero-visual-shell">
              <span className="hero-spark spark-top" />
              <span className="hero-spark spark-right" />
              <div className="hero-visual-card">
                <img src={profile.photo} alt={profile.name} className="hero-portrait" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
