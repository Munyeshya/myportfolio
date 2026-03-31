import { motion } from 'framer-motion'
import { useState } from 'react'

function SectionDivider() {
  const [hovered, setHovered] = useState(false)
  const [position, setPosition] = useState(50)

  const handleMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const next = ((event.clientX - bounds.left) / bounds.width) * 100
    setPosition(Math.max(0, Math.min(100, next)))
  }

  return (
    <div className="section-divider-wrap" aria-hidden="true">
      <div className="container">
        <div
          className={`section-divider-line ${hovered ? 'is-hovered' : ''}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onMouseMove={handleMove}
        >
          <motion.span
            className="divider-line-glow"
            animate={{ opacity: hovered ? 1 : 0, left: `${position}%` }}
            transition={{ type: 'spring', stiffness: 220, damping: 24, opacity: { duration: 0.18 } }}
          />
        </div>
      </div>
    </div>
  )
}

export default SectionDivider
