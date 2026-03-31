import { motion } from 'framer-motion'

const badges = ['React', 'Django', 'Node', 'SQL']

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16 sm:pt-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.18),transparent_28%)]" />
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.38em] text-indigo-300">
            Software Engineer | Full Stack Developer
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
            Beni Obed
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            I build reliable web and mobile systems, solve real business problems, and support software in production.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400">
              View Projects
            </a>
            <a href="/Beni-Obed-CV.pdf" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-indigo-300 hover:text-white">
              Download CV
            </a>
            <a href="#contact" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-indigo-300 hover:text-white">
              Contact Me
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span key={badge} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                {badge}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.55)]"
        >
          <div className="rounded-[1.5rem] border border-indigo-400/20 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">What I deliver</p>
            <div className="mt-6 space-y-4">
              {[
                'Production-ready business systems',
                'API integrations with real-world constraints',
                'Deployment support and issue resolution',
                'Clean interfaces backed by practical engineering',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-4">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-400" />
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
