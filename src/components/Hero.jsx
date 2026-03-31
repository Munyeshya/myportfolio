import { motion } from 'framer-motion'
import { profile } from '../data/profile'

function Hero() {
  return (
    <section id="home" className="portfolio-section hero-section">
      <div className="container section-frame hero-frame">
        <div className="row g-4 align-items-center h-100 hero-row">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
            className="col-lg-6"
          >
            <div className="hero-copy hero-copy-shift pe-lg-4">
              <h1 className="hero-title">Hey, I&apos;m Beni</h1>
              <div className="hero-role-box">Software Engineer</div>
              <p className="hero-text">
                I build reliable full-stack systems, integrate real APIs, deploy production software, and support users when the work becomes operational.
              </p>
              <div className="d-flex flex-wrap gap-3 align-items-center">
                <a href="#projects" className="split-button text-decoration-none">View My Work</a>
                <a href={profile.resume} className="icon-circle text-decoration-none">CV</a>
                <a href={`mailto:${profile.email}`} className="icon-circle text-decoration-none">@</a>
                <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="icon-circle text-decoration-none">Call</a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
            className="col-lg-5 offset-lg-1"
          >
            <div className="hero-visual-shell">
              <span className="hero-spark spark-top" />
              <span className="hero-spark spark-right" />
              <div className="hero-visual-card">
                <img src={profile.photo} alt={profile.name} className="hero-portrait" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
