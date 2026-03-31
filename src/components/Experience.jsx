import { motion } from 'framer-motion'

const roles = [
  {
    period: '2023 - Now',
    title: 'Software Developer',
    company: 'Nexcode',
    achievements: [
      'Built and supported software features tied to business workflows and client delivery.',
      'Worked across implementation, debugging, and release support to keep projects moving.',
    ],
  },
  {
    period: '2023 - 2024',
    title: 'Software Developer',
    company: 'IDA',
    achievements: [
      'Delivered application functionality with attention to maintainability and practical user needs.',
      'Contributed to integrations and problem solving in active project environments.',
    ],
  },
  {
    period: '2022 - 2024',
    title: 'Full Stack Developer',
    company: 'Rwanda Special Materials',
    achievements: [
      'Built the factory management system covering orders, payments, production, and inventory.',
      'Supported real operational users and translated factory processes into working software.',
    ],
  },
]

function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
    >
      <div className="max-w-3xl">
        <p className="section-label">Experience</p>
        <h2 className="section-title">A track record of shipping systems and supporting them in real environments.</h2>
      </div>
      <div className="mt-10 space-y-6">
        {roles.map((role) => (
          <article key={`${role.company}-${role.period}`} className="panel grid gap-5 lg:grid-cols-[220px_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-300">{role.period}</p>
            </div>
            <div>
              <h3 className="card-title">{role.title} - {role.company}</h3>
              <ul className="mt-4 grid gap-3">
                {role.achievements.map((item) => (
                  <li key={item} className="text-sm leading-7 text-slate-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  )
}

export default Experience
