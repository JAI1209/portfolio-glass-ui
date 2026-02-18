import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = [
  { label: 'Frontend Systems', value: 94 },
  { label: 'Backend Architecture', value: 88 },
  { label: 'Performance Engineering', value: 91 },
  { label: 'Motion & Interaction', value: 86 },
]

function SkillRow({ skill }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20% 0px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return undefined
    let raf = 0
    const start = performance.now()

    const animate = (time) => {
      const t = Math.min((time - start) / 1100, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setCount(Math.round(skill.value * eased))
      if (t < 1) raf = requestAnimationFrame(animate)
    }

    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [inView, skill.value])

  return (
    <div ref={ref} className="rounded-2xl border border-white/10 bg-bg2/60 p-5">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-base font-medium tracking-wide text-text">{skill.label}</h3>
        <span className="text-sm text-muted">{count}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.value}%` : 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-accent"
        />
      </div>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <p className="section-kicker">Skills</p>
      <h2 className="section-title">Performance-first capability</h2>
      <div className="mt-10 grid gap-4">
        {skills.map((skill) => (
          <SkillRow key={skill.label} skill={skill} />
        ))}
      </div>
    </section>
  )
}
