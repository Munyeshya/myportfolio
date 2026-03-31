import { motion } from 'framer-motion'
import { experience, profile } from '../data/profile'

function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="section-split"
    >
      <div>
        <p className="section-kicker">Experience</p>
        <h2 className="section-heading">Built through delivery, debugging, and supporting software once users depend on it.</h2>
        <div className="panel-card mt-card">
          <p className="mini-kicker">Based In</p>
          <p className="body-copy compact">{profile.address}</p>
        </div>
      </div>
      <div className="timeline-wrap">
        {experience.map((item) => (
          <article key={`${item.company}-${item.period}`} className="timeline-card">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <p className="timeline-period">{item.period}</p>
              <h3>{item.title}</h3>
              <span>{item.company}</span>
              <ul>
                {item.achievements.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  )
}

export default Experience
