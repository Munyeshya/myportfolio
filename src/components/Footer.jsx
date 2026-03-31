import { profile } from '../data/profile'

function Footer() {
  return (
    <footer className="footer-shell">
      <p>{profile.name} - Software Engineer focused on practical systems that work in production.</p>
    </footer>
  )
}

export default Footer
