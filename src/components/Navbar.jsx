import { motion } from 'framer-motion'
import { profile } from '../data/profile'

const navItems = [
  ['Home', '/#home'],
  ['About', '/#about'],
  ['Skills', '/#skills'],
  ['Projects', '/#projects'],
  ['Resume', '/#experience'],
  ['Contact', '/#contact'],
]

function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="site-header"
    >
      <div className="container">
        <div className="site-navbar d-flex align-items-center justify-content-between">
          <a href="/#home" className="site-logo text-decoration-none">
            <span className="site-logo-mark">B</span>
            <span>{profile.name.split(' ')[1]} {profile.name.split(' ')[2]}</span>
          </a>

          <nav className="d-none d-lg-flex align-items-center gap-4">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="nav-item-link text-uppercase text-decoration-none">
                {label}
              </a>
            ))}
          </nav>

          <a href="/#contact" className="talk-button text-decoration-none">
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </motion.header>
  )
}

export default Navbar
