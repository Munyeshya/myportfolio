import { motion } from 'framer-motion'
import { projects } from '../data/projects'

function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55 }}
    >
      <div className="section-head-row">
        <div>
          <p className="section-kicker">Featured Projects</p>
          <h2 className="section-heading">The work recruiters should notice first: shipped systems, secure integrations, and practical delivery.</h2>
        </div>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 220, damping: 22 }}
            className={`project-card ${index === 0 ? 'project-card-large' : ''}`}
          >
            <div className="project-visual">
              <span className="badge-chip">{project.badge}</span>
              <h3>{project.title}</h3>
              <p>{project.category}</p>
              <div className="project-stack">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div className="project-copy">
              <p className="mini-kicker">Problem Solved</p>
              <p className="body-copy compact">{project.problem}</p>
              <p className="mini-kicker">What It Demonstrates</p>
              <p className="body-copy compact">{project.outcome}</p>
              <ul className="feature-list">
                {project.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="link-row">
                {project.links.map((link) =>
                  link.href ? (
                    <a key={link.label} href={link.href} className="small-action">
                      {link.label}
                    </a>
                  ) : (
                    <span key={link.label} className="muted-pill">
                      {link.label}
                    </span>
                  ),
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}

export default Projects
