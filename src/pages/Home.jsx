import { useEffect, useState } from 'react'
import About from '../components/About'
import Certifications from '../components/Certifications'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import SectionDivider from '../components/SectionDivider'
import Skills from '../components/Skills'

function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 160)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="site-page">
      <div className="meteor-layer" aria-hidden="true">
        <span className="meteor meteor-one" />
        <span className="meteor meteor-two" />
        <span className="meteor meteor-three" />
        <span className="meteor meteor-four" />
      </div>
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <div className="divider-spacer-after-projects">
          <SectionDivider />
        </div>
        <Experience />
        <SectionDivider />
        <Certifications />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
      <a
        href="/#home"
        className={`floating-top-link ${showBackToTop ? 'is-visible' : ''}`}
        aria-label="Back to top"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 18V6" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
          <path d="m7.5 10.5 4.5-4.5 4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  )
}

export default Home
