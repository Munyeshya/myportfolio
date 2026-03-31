import About from '../components/About'
import Certifications from '../components/Certifications'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <Navbar />
        <main className="space-y-24 pb-16 sm:space-y-28 sm:pb-24">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Home
