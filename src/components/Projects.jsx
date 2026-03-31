import { motion } from 'framer-motion'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="portfolio-section">
      <div className="container section-frame d-flex flex-column justify-content-center">
        <div className="text-center section-heading-wrap mb-5">
          <div className="section-pill mx-auto">Portfolio</div>
          <h2 className="section-title centered-title">Selected Work</h2>
          <p className="section-subtitle centered-subtitle">
            These projects show system thinking, practical execution, and the ability to support software in production.
          </p>
        </div>
        <div className="row g-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="col-lg-6"
            >
              <div className="project-card h-100">
                <div className={`project-preview preview-${index + 1}`}>
                  <span className="project-status">{project.badge}</span>
                </div>
                <div className="d-flex flex-wrap gap-2 mt-3 mb-3">
                  {project.stack.slice(0, 3).map((item) => (
                    <span key={item} className="skill-badge">{item}</span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p>{project.problem}</p>
                <div className="d-flex flex-wrap gap-3 align-items-center mt-3">
                  {project.links.map((link) =>
                    link.href ? (
                      <a key={link.label} href={link.href} className="project-link text-decoration-none">
                        {link.label}
                      </a>
                    ) : (
                      <span key={link.label} className="private-chip">{link.label}</span>
                    ),
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
