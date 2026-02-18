import { motion } from 'framer-motion'
import MagneticButton from '../components/MagneticButton'

const socials = [
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'X', href: 'https://x.com/' },
  { label: 'Instagram', href: 'https://www.instagram.com/' },
]

export default function ContactSection() {
  return (
    <section id="contact" className="section-shell pb-24">
      <div className="rounded-[2rem] border border-white/12 bg-bg2/65 p-8 shadow-soft backdrop-blur-xl md:p-12">
        <p className="section-kicker">Contact</p>
        <h2 className="section-title max-w-3xl">Let us build products that move people.</h2>

        <div className="mt-6 flex flex-wrap gap-2">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="social-chip"
            >
              {social.label}
            </a>
          ))}
        </div>

        <form className="mt-10 grid gap-5 md:grid-cols-2">
          <label className="floating-label">
            <input type="text" placeholder=" " className="input-field" required />
            <span>Name</span>
          </label>
          <label className="floating-label">
            <input type="email" placeholder=" " className="input-field" required />
            <span>Email</span>
          </label>
          <label className="floating-label md:col-span-2">
            <textarea rows="5" placeholder=" " className="input-field resize-none" required />
            <span>Project Details</span>
          </label>

          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.99 }} className="md:col-span-2">
            <MagneticButton type="submit" className="w-full bg-gradient-to-r from-[#00F5D4]/85 to-[#3db9ff]/75 text-bg">
              Send Inquiry
            </MagneticButton>
          </motion.div>
        </form>
      </div>
    </section>
  )
}
