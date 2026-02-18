import { motion } from 'framer-motion'

const items = [
  {
    institute: 'Internshala Trainings',
    course: 'Full Stack Development with AI',
    period: 'Jan 2026 - Jun 2026',
  },
  {
    institute: 'Kalinga University, Raipur',
    course: 'B.Tech, Computer Science',
    period: 'May 2020 - Jan 2024',
  },
  {
    institute: 'FX School',
    course: 'Diploma in Computer Graphics and Animation',
    period: 'Jan 2019 - Feb 2020',
  },
  {
    institute: 'Magadh University',
    course: 'B.Sc, Physics',
    period: 'Apr 2016 - May 2019',
  },
]

export default function EducationSection() {
  return (
    <section id="education" className="section-shell">
      <p className="section-kicker">Education</p>
      <h2 className="section-title">Professional Learning Timeline</h2>

      <div className="relative mt-10 border-l border-white/15 pl-7">
        {items.map((item, index) => (
          <motion.article
            key={item.institute}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
            className="relative mb-6 rounded-2xl border border-white/10 bg-bg2/60 p-5"
          >
            <span className="absolute -left-[2.05rem] top-6 h-2.5 w-2.5 rounded-full bg-accent" />
            <h3 className="text-lg font-semibold">{item.institute}</h3>
            <p className="mt-1 text-muted">{item.course}</p>
            <p className="mt-2 text-sm text-text/80">{item.period}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
