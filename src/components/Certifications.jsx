import { motion } from 'framer-motion'
import { useState } from 'react'
import { certifications } from '../data/profile'

function Certifications() {
  const [activeDocument, setActiveDocument] = useState(null)

  return (
    <>
      <section id="certifications" className="portfolio-section">
        <div className="container section-frame d-flex flex-column justify-content-center">
          <div className="text-center section-heading-wrap mb-5">
            <div className="section-pill mx-auto">Documents</div>
            <h2 className="section-title centered-title">Documents Ready</h2>
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
                    <li>Available for quick review during screening</li>
                    <li>Included directly in my portfolio for easy access</li>
                    <li>Useful for follow-up conversations and shortlisting</li>
                  </ul>
                  <div className="mt-4 d-flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveDocument(item)}
                      className="split-button doc-button"
                    >
                      View In App
                    </button>
                    <a href={item.file} target="_blank" rel="noreferrer" className="project-link text-decoration-none">
                      Open PDF
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {activeDocument ? (
        <div className="document-modal-backdrop" onClick={() => setActiveDocument(null)}>
          <div className="document-modal-card" onClick={(event) => event.stopPropagation()}>
            <div className="document-modal-head">
              <div>
                <div className="section-pill">Document</div>
                <h3 className="document-modal-title">{activeDocument.title}</h3>
              </div>
              <button type="button" className="document-close-button" onClick={() => setActiveDocument(null)}>
                Close
              </button>
            </div>
            <div className="document-modal-body">
              <iframe src={activeDocument.file} title={activeDocument.title} className="document-frame" />
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Certifications
