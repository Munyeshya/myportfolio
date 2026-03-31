import { motion } from 'framer-motion'
import { profile } from '../data/profile'

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="section-split"
    >
      <div>
        <p className="section-kicker">About Me</p>
        <h2 className="section-heading">I build systems that handle real business pressure and still stay understandable.</h2>
      </div>
      <div className="content-grid two-up">
        <article className="panel-card span-two">
          <p className="body-copy">
            My work combines engineering, API integration, deployment support, and user communication. I enjoy building software that solves operational problems and remains maintainable after launch. That means clear architecture, practical interfaces, and support-minded delivery when issues show up in production.
          </p>
        </article>
        <article className="panel-card">
          <p className="mini-kicker">Industries</p>
          <div className="tag-cloud">
            {profile.industries.map((item) => (
              <span key={item} className="soft-tag">
                {item}
              </span>
            ))}
          </div>
        </article>
        <article className="panel-card">
          <p className="mini-kicker">Education</p>
          <div className="stack-list">
            {profile.education.map((item) => (
              <div key={item.school} className="stack-row">
                <strong>{item.award}</strong>
                <span>{item.school}</span>
                <small>{item.period}</small>
              </div>
            ))}
          </div>
        </article>
      </div>
    </motion.section>
  )
}

export default About
