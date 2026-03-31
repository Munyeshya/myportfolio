import { motion } from 'framer-motion'
import { profile } from '../data/profile'

function Contact() {
  return (
    <section id="contact" className="portfolio-section contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
            className="contact-frame"
        >
          <div className="contact-outline">CONTACT ME</div>
          <div className="row g-4 align-items-center h-100 position-relative">
            <div className="col-lg-6">
              <div className="contact-form-wrap">
                <div className="section-pill contact-pill">Contact</div>
                <h2 className="section-title contact-title">Let&apos;s Connect</h2>
                <p className="section-subtitle contact-subtitle">
                  Reach me directly by email or use this form layout as the next step for your Formspree setup.
                </p>
                <input className="form-control custom-control mb-3" placeholder="Name" />
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <input className="form-control custom-control" placeholder="Email" />
                  </div>
                  <div className="col-md-6">
                    <input className="form-control custom-control" placeholder="Phone" defaultValue={profile.phone} />
                  </div>
                </div>
                <textarea className="form-control custom-control custom-textarea mb-3" placeholder="Tell us about project or opportunity" />
                <div className="d-flex flex-wrap gap-3 align-items-center">
                  <a href={`mailto:${profile.email}`} className="split-button text-decoration-none">Get In Touch</a>
                  <a href={profile.resume} className="project-link text-decoration-none">Download CV</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-visual text-center">
                <div className="contact-glow" />
                <img src={profile.photo} alt={profile.name} className="contact-portrait" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
