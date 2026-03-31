import { motion } from 'framer-motion'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-4 z-50"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-slate-950/75 px-4 py-3 shadow-[0_20px_50px_rgba(15,23,42,0.45)] backdrop-blur xl:px-6">
        <a href="#home" className="text-sm font-semibold uppercase tracking-[0.35em] text-white">
          Beni Obed
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-indigo-400/40 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-200 transition hover:border-indigo-300 hover:text-white"
        >
          Let&apos;s Talk
        </a>
      </div>
    </motion.header>
  )
}

export default Navbar
