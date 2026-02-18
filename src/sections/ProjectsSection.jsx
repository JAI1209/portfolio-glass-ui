import { useLayoutEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const projects = [
  {
    title: 'Pulse CRM',
    summary: 'Scalable CRM architecture with automation and analytics at enterprise velocity.',
    stack: ['Next.js', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Shopwave',
    summary: 'Performance-first commerce platform with premium conversion flow and clean interactions.',
    stack: ['React', 'Stripe', 'GraphQL'],
  },
  {
    title: 'Compass Hiring',
    summary: 'Hiring intelligence system with interview orchestration and secure candidate pipeline.',
    stack: ['TypeScript', 'Express', 'AWS'],
  },
]

export default function ProjectsSection() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const section = sectionRef.current
      const track = trackRef.current
      if (!section || !track) return

      const distance = Math.max(0, track.scrollWidth - section.clientWidth)

      gsap.to(track, {
        x: -distance,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: `+=${distance + 500}`,
          onUpdate: (self) => setProgress(self.progress),
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="section-shell min-h-screen">
      <p className="section-kicker">Projects</p>
      <h2 className="section-title">Horizontal Storytelling</h2>

      <div className="relative mt-10">
        <div className="fixed right-5 top-1/2 z-20 hidden h-40 w-[3px] -translate-y-1/2 rounded-full bg-white/10 md:block">
          <span className="absolute left-0 top-0 h-full w-full rounded-full bg-accent/60" style={{ transform: `scaleY(${progress})`, transformOrigin: 'top' }} />
        </div>

        <div ref={trackRef} className="flex w-max gap-6 pb-4">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="project-card group h-[62vh] w-[min(82vw,540px)]"
            >
              <div className="project-border" />
              <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">{project.title}</h3>
              <p className="mt-4 max-w-md text-muted">{project.summary}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/15 px-3 py-1 text-xs text-text/85">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
