import { motion } from 'framer-motion'

function SectionDivider({ label = 'Explore More' }) {
  return (
    <div className="section-divider-wrap" aria-hidden="true">
      <div className="container">
        <div className="section-divider">
          <span className="divider-line" />
          <motion.div
            className="divider-chip"
            animate={{ y: [0, -4, 0], boxShadow: ['0 0 0 rgba(255,140,0,0)', '0 0 18px rgba(255,140,0,0.18)', '0 0 0 rgba(255,140,0,0)'] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="divider-chip-text">{label}</span>
            <span className="divider-chip-icon" />
          </motion.div>
          <span className="divider-line" />
        </div>
      </div>
    </div>
  )
}

export default SectionDivider
