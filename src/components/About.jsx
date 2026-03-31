import { motion } from 'framer-motion'
import { profile } from '../data/profile'

function About() {
  return (
    <section id="about" className="portfolio-section">
      <div className="container section-frame d-flex flex-column justify-content-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center section-heading-wrap mb-5"
        >
          <div className="section-pill mx-auto">About</div>
          <h2 className="section-title centered-title">I build software that solves operational problems.</h2>
          <p className="section-subtitle centered-subtitle">
            Engineering, support, and delivery all matter when software is used by real teams.
          </p>
          <p className="section-copy centered-subtitle mx-auto">
            {profile.summary}
          </p>
        </motion.div>

        <div className="row g-4 w-100">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="col-lg-4"
          >
            <div className="dark-card stat-card h-100">
              <h3>Strengths</h3>
              <ul className="plain-list">
                {profile.strengths.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="col-lg-4"
          >
            <div className="dark-card stat-card h-100">
              <h3>Details</h3>
              <ul className="plain-list">
                <li>{profile.location}</li>
                <li>{profile.address}</li>
                <li>{profile.email}</li>
                <li>{profile.phone}</li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="col-lg-4"
          >
            <div className="dark-card stat-card h-100">
              <h3>Industry Exposure</h3>
              <div className="d-flex flex-wrap gap-2 mt-3">
                {profile.industries.map((item) => (
                  <span key={item} className="skill-badge">{item}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
