import { motion } from 'framer-motion'
import { experience, profile } from '../data/profile'

function Experience() {
  return (
    <section id="experience" className="portfolio-section">
      <div className="container section-frame d-flex align-items-center">
        <div className="row g-4 w-100">
          <div className="col-lg-6">
            <div className="timeline-heading">My Expertise</div>
            <div className="timeline-column">
              {experience.map((item, index) => (
                <motion.div
                  key={`${item.company}-${item.period}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="timeline-item"
                >
                  <span className="timeline-node" />
                  <div className="timeline-box">
                    <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-3">
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.company}</p>
                      </div>
                      <span className="time-pill">{item.period}</span>
                    </div>
                    <ul className="plain-list compact-list mb-0">
                      {item.achievements.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="timeline-heading">Education Background</div>
            <div className="timeline-column">
              {profile.education.map((item, index) => (
                <motion.div
                  key={item.school}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="timeline-item"
                >
                  <span className="timeline-node" />
                  <div className="timeline-box">
                    <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-3">
                      <div>
                        <h3>{item.award}</h3>
                        <p>{item.school}</p>
                      </div>
                      <span className="time-pill">{item.period}</span>
                    </div>
                    <p className="mb-0 timeline-text">
                      Focused on software engineering fundamentals, application development, and the practical skills needed to build and support production-ready systems.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
