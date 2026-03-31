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
        <SectionDivider label="My Expertise" />
        <About />
        <SectionDivider label="Core Services" />
        <Skills />
        <SectionDivider label="Portfolio Highlights" />
        <Projects />
        <SectionDivider label="Experience & Education" />
        <Experience />
        <SectionDivider label="Documents" />
        <Certifications />
        <SectionDivider label="Let's Connect" />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home
