import { motion } from 'framer-motion'
import { profile } from '../data/profile'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-5 z-50"
    >
      <div className="shell flex items-center justify-between rounded-full px-4 py-3 sm:px-6">
        <a href="#home" className="brand-mark">
          {profile.name}
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>
        <a href={profile.resume} className="primary-chip">
          Download CV
        </a>
      </div>
    </motion.header>
  )
}

export default Navbar
