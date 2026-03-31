import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills'

const serviceDescriptions = [
  'I build backend systems and API logic for production workflows.',
  'I create responsive interfaces for admin panels and data-heavy applications.',
  'I handle secure integrations with external services and government APIs.',
  'I support deployment, debugging, and issue resolution after launch.',
]

function Skills() {
  return (
    <section id="skills" className="portfolio-section">
      <div className="container section-frame d-flex flex-column justify-content-center">
        <div className="text-center section-heading-wrap mb-5">
          <div className="section-pill mx-auto">Services</div>
          <h2 className="section-title centered-title">Core Services</h2>
          <p className="section-subtitle centered-subtitle">
            My work combines backend delivery, interface building, integrations, and production support.
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="col-md-6 col-xl-3"
            >
              <div className="service-card h-100">
                <div className="service-icon">0{index + 1}</div>
                <h3>{group.title}</h3>
                <p>{serviceDescriptions[index]}</p>
                <div className="mini-tag-list">
                  {group.items.slice(0, 4).map((item) => (
                    <span key={item.name}>{item.name}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
