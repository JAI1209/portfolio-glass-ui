import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import useActiveSection from '../hooks/useActiveSection'

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const active = useActiveSection(links.map((l) => l.id))
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
      <nav className={`mx-auto flex max-w-content items-center justify-between rounded-2xl border px-5 md:px-7 ${scrolled ? 'border-white/15 bg-bg2/70 backdrop-blur-xl' : 'border-transparent bg-transparent'}`}>
        <a href="#hero" className="logo logo-mark py-3 text-text">
          JAI MEHTA
        </a>

        <button
          className="md:hidden rounded-xl border border-white/20 px-3 py-2 text-xs"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          Menu
        </button>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`nav-link text-sm ${active === link.id ? 'text-text' : 'text-muted'}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-3 grid max-w-content gap-2 rounded-2xl border border-white/15 bg-bg2/90 p-4 backdrop-blur-xl md:hidden"
          >
            {links.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="rounded-lg px-3 py-2 text-sm text-text/90" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}


