import { motion } from 'framer-motion'
import { projects } from '../data/projects'

function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55 }}
    >
      <div className="max-w-3xl">
        <p className="section-label">Projects</p>
        <h2 className="section-title">Real systems that show business impact, versatility, and production thinking.</h2>
      </div>
      <div className="mt-10 grid gap-6 xl:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 220, damping: 20 }}
            className={`panel overflow-hidden ${index === 0 ? 'xl:col-span-2' : ''}`}
          >
            <div className={`grid gap-6 ${index === 0 ? 'lg:grid-cols-[0.95fr_1.05fr]' : ''}`}>
              <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(99,102,241,0.18),rgba(15,23,42,0.6),rgba(139,92,246,0.15))] p-6">
                <div className="flex h-full min-h-56 flex-col justify-between rounded-[1.25rem] border border-white/10 bg-slate-950/40 p-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">{project.category}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm text-slate-300 sm:grid-cols-4">
                    {project.stack.slice(0, 4).map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-3 text-center">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <p className="text-base leading-8 text-slate-300">{project.problem}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 px-3 py-2 text-sm text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
                <ul className="mt-6 grid gap-3">
                  {project.features.map((feature) => (
                    <li key={feature} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-slate-300">
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a href={project.links.demo} className="rounded-full bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400">
                    Live Demo
                  </a>
                  <a href={project.links.github} className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-indigo-300 hover:text-white">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}

export default Projects
