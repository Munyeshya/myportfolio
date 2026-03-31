import { motion } from 'framer-motion'

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
    >
      <div>
        <p className="section-label">About Me</p>
        <h2 className="section-title">I build software that solves operational problems, not just screens.</h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <article className="panel sm:col-span-2">
          <p className="text-base leading-8 text-slate-300">
            I am a software engineer focused on building practical systems for organizations that need reliability, visibility, and support after launch. My work spans web applications, mobile apps, integrations, and deployment environments where software has to keep working for real users.
          </p>
        </article>
        <article className="panel">
          <h3 className="card-title">Strengths</h3>
          <p className="card-copy">Full stack delivery, debugging, API integration, production support, and translating business workflows into software teams can trust.</p>
        </article>
        <article className="panel">
          <h3 className="card-title">Industries Worked With</h3>
          <p className="card-copy">Manufacturing, public-sector integration, education systems, and internal management platforms.</p>
        </article>
      </div>
    </motion.section>
  )
}

export default About
