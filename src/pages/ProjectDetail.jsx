import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { projects } from '../data/projects'

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [slug])

  if (!project) {
    return (
      <div className="site-page">
        <Navbar />
        <main className="project-detail-page">
          <div className="container">
            <div className="project-detail-card">
              <h1 className="project-detail-title">Project Not Found</h1>
              <p className="project-detail-copy">
                The project you are looking for is not available.
              </p>
              <a href="/#projects" className="split-button text-decoration-none">Back to Selected Work</a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="site-page">
      <Navbar />
      <main className="project-detail-page">
        <div className="container">
          <div className="project-detail-card">
            <div className="d-flex flex-wrap gap-3 align-items-center justify-content-between">
              <div>
                <div className="section-pill">Project Detail</div>
                <h1 className="project-detail-title">{project.title}</h1>
                <p className="project-detail-subtitle">{project.category}</p>
              </div>
              <a href="/#projects" className="project-link text-decoration-none">Back to Selected Work</a>
            </div>

            <div className="project-detail-preview">
              <span className="project-status">{project.badge}</span>
            </div>

            <div className="row g-4 mt-1">
              <div className="col-lg-6">
                <div className="dark-card h-100">
                  <h3>Overview</h3>
                  <p className="project-detail-copy">{project.problem}</p>
                  <p className="project-detail-copy mt-3">{project.outcome}</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="dark-card h-100">
                  <h3>Highlights</h3>
                  <ul className="plain-list compact-list mb-0">
                    {project.details.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="row g-4 mt-1">
              <div className="col-lg-6">
                <div className="dark-card h-100">
                  <h3>Tech Stack</h3>
                  <div className="d-flex flex-wrap gap-2 mt-3">
                    {project.stack.map((item) => (
                      <span key={item} className="skill-badge">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="dark-card h-100">
                  <h3>Features</h3>
                  <ul className="plain-list compact-list mb-0">
                    {project.features.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="d-flex flex-wrap gap-3 mt-4">
              {project.links.map((link) =>
                link.href ? (
                  <a
                    key={link.label}
                    href={link.href.startsWith('#') ? `/${link.href}` : link.href}
                    className="split-button text-decoration-none"
                  >
                    {link.label}
                  </a>
                ) : (
                  <span key={link.label} className="private-chip">{link.label}</span>
                ),
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ProjectDetail
