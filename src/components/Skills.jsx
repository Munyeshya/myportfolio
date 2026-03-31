import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills'

function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
    >
      <div className="max-w-3xl">
        <p className="section-label">Skills</p>
        <h2 className="section-title">A practical stack for building, shipping, and supporting applications.</h2>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {skillGroups.map((group) => (
          <article key={group.title} className="panel">
            <h3 className="card-title">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span key={item} className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-100">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  )
}

export default Skills
