import { motion } from 'framer-motion'

const certifications = [
  {
    name: 'Professional Scrum Master I',
    organization: 'Scrum.org',
    year: '2025',
  },
  {
    name: 'ICDL',
    organization: 'ICDL Africa',
    year: '2024',
  },
  {
    name: 'More certificates can be added here',
    organization: 'Ready for uploaded credentials',
    year: 'Pending',
  },
]

function Certifications() {
  return (
    <motion.section
      id="certifications"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
    >
      <div className="max-w-3xl">
        <p className="section-label">Certifications</p>
        <h2 className="section-title">Proof of continued learning, with room to add more credentials as they are organized.</h2>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {certifications.map((certificate) => (
          <article key={certificate.name} className="panel">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-300">{certificate.year}</p>
            <h3 className="mt-4 text-xl font-semibold text-white">{certificate.name}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{certificate.organization}</p>
          </article>
        ))}
      </div>
    </motion.section>
  )
}

export default Certifications
