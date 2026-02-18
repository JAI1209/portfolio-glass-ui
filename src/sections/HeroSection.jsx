import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import MagneticButton from '../components/MagneticButton'
import { revealUp, staggerChildren } from '../animations/variants'
import { socialLinks } from '../data/socials'

const words = ['Creative', 'Systematic', 'Scalable', 'Performance-first']
const profileSrc = '/assets/images/profile1.png'

export default function HeroSection() {
  const [idx, setIdx] = useState(0)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [imageFailed, setImageFailed] = useState(false)

  useEffect(() => {
    const id = setInterval(() => setIdx((v) => (v + 1) % words.length), 1800)
    return () => clearInterval(id)
  }, [])

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: x * 7, y: y * -7 })
  }

  const onLeave = () => setTilt({ x: 0, y: 0 })

  return (
    <section id="hero" className="section-shell min-h-screen pt-36">
      <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div variants={staggerChildren} initial="hidden" animate="show">
          <motion.p variants={revealUp} className="mb-6 text-xs uppercase tracking-[0.24em] text-accent/80">
            Creative Developer Portfolio
          </motion.p>
          <motion.h1 variants={revealUp} className="hero-title max-w-3xl text-balance">
            Crafting Immersive Digital Systems.
          </motion.h1>
          <motion.p variants={revealUp} className="mt-7 max-w-2xl text-lg text-muted md:text-2xl">
            Full-stack creative developer building scalable, performance-first web architecture.
          </motion.p>

          <motion.div variants={revealUp} className="mt-7 h-8 overflow-hidden text-accent">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[idx]}
                initial={{ y: 30, opacity: 0, filter: 'blur(6px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                exit={{ y: -30, opacity: 0, filter: 'blur(6px)' }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block text-xl font-medium"
              >
                {words[idx]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.div variants={revealUp} className="mt-10 flex flex-wrap gap-4">
            <MagneticButton className="bg-accent text-bg">Explore Work</MagneticButton>
            <MagneticButton className="border border-white/20 bg-transparent text-text">View Case Studies</MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          onPointerMove={onMove}
          onPointerLeave={onLeave}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 32 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[540px]"
          style={{ perspective: 1200 }}
        >
          <div
            className="glass-card relative rounded-3xl border border-white/15 p-6 md:p-8"
            style={{ transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` }}
          >
            <div className="mb-6 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
            </div>

            <div className="profile-stage" style={{ transform: `translate3d(${tilt.x * 1.1}px, ${tilt.y * -1.1}px, 0)` }}>
              <div className="profile-edge" aria-hidden="true" />
              <div className="profile-shimmer" aria-hidden="true" />

              {!imageFailed ? (
                <img
                  src={profileSrc}
                  alt="Jai Mehta profile"
                  onError={() => setImageFailed(true)}
                  className="profile-image"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  width={960}
                  height={1200}
                />
              ) : (
                <div className="profile-fallback">
                  <span className="text-6xl font-semibold tracking-tight text-text/90">JM</span>
                </div>
              )}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-bg/40 p-5">
              <p className="text-3xl font-semibold tracking-tight">Jai Mehta</p>
              <p className="mt-2 text-base text-muted">Full-Stack Developer | UI Engineer</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {socialLinks.map((social) => (
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
