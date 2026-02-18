import { motion } from 'framer-motion'
import { revealUp, staggerChildren } from '../animations/variants'

export default function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-2">
        <motion.div variants={staggerChildren} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }}>
          <motion.p variants={revealUp} className="section-kicker">About</motion.p>
          <motion.h2 variants={revealUp} className="section-title max-w-xl">Built for precision, made for impact.</motion.h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg leading-relaxed text-muted md:text-xl"
        >
          I design and engineer premium web systems where motion, architecture, and performance work together.
          My focus is scalable frontend and backend foundations, with interfaces tuned for clarity and speed.
        </motion.p>
      </div>
    </section>
  )
}
