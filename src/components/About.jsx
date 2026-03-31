import { motion } from 'framer-motion'
import { profile } from '../data/profile'

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
              I care about engineering, delivery, and support because software has to work for real teams.
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
                  <ul className="plain-list">
                    <li>{profile.location}</li>
                    <li>{profile.address}</li>
                    <li>{profile.email}</li>
                    <li>{profile.phone}</li>
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
