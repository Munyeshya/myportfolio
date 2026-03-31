import { motion } from 'framer-motion'
import { profile } from '../data/profile'

function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="contact-layout"
    >
      <div className="contact-panel">
        <p className="section-kicker">Contact</p>
        <h2 className="section-heading">Open to internships, junior software roles, and freelance collaboration.</h2>
        <p className="body-copy">
          If you are hiring someone who can build, support, and keep improving real systems, I would love to talk.
        </p>
        <div className="contact-list">
          {profile.contactLinks.map((item) => (
            <a key={item.label} href={item.href} className="contact-item">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </a>
          ))}
        </div>
      </div>
      <form className="panel-card form-card" action="https://formspree.io/f/your-form-id" method="POST">
        <div className="form-grid">
          <label>
            <span>Name</span>
            <input className="input" type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            <span>Email</span>
            <input className="input" type="email" name="email" placeholder="you@example.com" />
          </label>
        </div>
        <label>
          <span>Message</span>
          <textarea className="input textarea" name="message" placeholder="Tell me about the role, project, or opportunity" />
        </label>
        <div className="form-actions">
          <button className="primary-button" type="submit">
            Send Message
          </button>
          <small>Replace the Formspree form ID when you are ready to receive submissions.</small>
        </div>
      </form>
    </motion.section>
  )
}

export default Contact
