import { motion } from 'framer-motion'
import { certifications } from '../data/profile'

function Certifications() {
  return (
    <section id="certifications" className="portfolio-section">
      <div className="container section-frame d-flex flex-column justify-content-center">
        <div className="text-center mb-5">
          <div className="section-pill mx-auto">Documents</div>
          <h2 className="section-title centered-title">Resume And Certification Files Ready To Review</h2>
        </div>
        <div className="row g-4 justify-content-center">
          {certifications.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="col-md-6 col-xl-5"
            >
              <div className="pricing-card h-100">
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.organization}</p>
                  </div>
                  <span className="doc-mark">PDF</span>
                </div>
                <div className="price-copy">{item.year}</div>
                <ul className="plain-list compact-list mt-3">
                  <li>Recruiter-ready document access</li>
                  <li>Attached directly inside the portfolio</li>
                  <li>Useful for quick review and follow-up</li>
                </ul>
                <div className="mt-4">
                  <a href={item.file} className="split-button text-decoration-none">Open Document</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
