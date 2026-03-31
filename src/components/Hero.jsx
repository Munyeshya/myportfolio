import { motion } from 'framer-motion'
import { profile } from '../data/profile'

function Hero() {
  return (
    <section id="home" className="hero-wrap">
      <div className="hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="hero-copy"
        >
          <p className="eyebrow">Available for junior roles, internships, and freelance work</p>
          <h1 className="hero-title">
            {profile.name}
            <span>{profile.title}</span>
          </h1>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              View Projects
            </a>
            <a href={profile.resume} className="secondary-button">
              Download CV
            </a>
            <a href="#contact" className="ghost-button">
              Contact Me
            </a>
          </div>
          <div className="hero-points">
            {profile.strengths.map((item) => (
              <div key={item} className="info-pill">
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="hero-visual"
        >
          <div className="portrait-card">
            <div className="portrait-frame">
              <img src={profile.photo} alt={profile.name} className="portrait-image" />
            </div>
            <div className="portrait-meta">
              <div>
                <p className="meta-label">Location</p>
                <p className="meta-value">{profile.location}</p>
              </div>
              <div>
                <p className="meta-label">Focus</p>
                <p className="meta-value">Production-ready systems</p>
              </div>
            </div>
          </div>
          <div className="metric-grid">
            {profile.metrics.map((item) => (
              <div key={item.label} className="metric-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
