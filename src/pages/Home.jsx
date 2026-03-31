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
    </div>
  )
}

export default Home
