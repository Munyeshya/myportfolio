import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills'

function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
    >
      <div className="section-head-row">
        <div>
          <p className="section-kicker">Core Skills</p>
          <h2 className="section-heading">A practical stack for backend work, interfaces, deployments, and support.</h2>
        </div>
      </div>
      <div className="skills-layout">
        {skillGroups.map((group) => (
          <article key={group.title} className="panel-card">
            <div className="skill-header">
              <h3>{group.title}</h3>
            </div>
            <div className="skill-list">
              {group.items.map((item) => (
                <div key={item.name} className="skill-row">
                  <span>{item.name}</span>
                  <small>{item.level}</small>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  )
}

export default Skills
