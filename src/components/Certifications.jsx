import { motion } from 'framer-motion'
import { certifications } from '../data/profile'

function Certifications() {
  return (
    <motion.section
      id="certifications"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
    >
      <div className="section-head-row">
        <div>
          <p className="section-kicker">Documents & Certifications</p>
          <h2 className="section-heading">Real files included so recruiters can review both credentials and experience quickly.</h2>
        </div>
      </div>
      <div className="cert-grid">
        {certifications.map((item) => (
          <article key={item.title} className="panel-card cert-card">
            <p className="mini-kicker">{item.year}</p>
            <h3>{item.title}</h3>
            <p className="body-copy compact">{item.organization}</p>
            <a href={item.file} className="small-action">
              Open PDF
            </a>
          </article>
        ))}
      </div>
    </motion.section>
  )
}

export default Certifications
