import { motion } from 'framer-motion'

function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]"
    >
      <div className="panel">
        <p className="section-label">Contact</p>
        <h2 className="section-title">Open to internships, junior roles, and freelance opportunities.</h2>
        <div className="mt-8 space-y-4 text-sm text-slate-300">
          <p>Email: <a className="text-white" href="mailto:beniobed@example.com">beniobed@example.com</a></p>
          <p>Phone: <a className="text-white" href="tel:+250700000000">+250 700 000 000</a></p>
          <p>LinkedIn: <a className="text-white" href="https://www.linkedin.com" target="_blank" rel="noreferrer">linkedin.com/in/beniobed</a></p>
          <p>GitHub: <a className="text-white" href="https://github.com" target="_blank" rel="noreferrer">github.com/beniobed</a></p>
        </div>
      </div>
      <form className="panel grid gap-4" action="https://formspree.io/f/your-form-id" method="POST">
        <label className="grid gap-2 text-sm text-slate-300">
          Name
          <input className="input" type="text" name="name" placeholder="Your name" />
        </label>
        <label className="grid gap-2 text-sm text-slate-300">
          Email
          <input className="input" type="email" name="email" placeholder="you@example.com" />
        </label>
        <label className="grid gap-2 text-sm text-slate-300">
          Message
          <textarea className="input min-h-36 resize-y" name="message" placeholder="Tell me about your project or opportunity" />
        </label>
        <button className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400" type="submit">
          Send Message
        </button>
        <p className="text-xs leading-6 text-slate-400">
          Replace the Formspree endpoint with your real form ID when you are ready to receive messages.
        </p>
      </form>
    </motion.section>
  )
}

export default Contact
