import { useEffect, useState } from "react"
import "./App.css"

const projects = [
  {
    title: "Pulse CRM",
    status: "Live",
    timeline: "Q1 2026",
    description:
      "Full-stack CRM with role-based access, analytics dashboards, and automated workflows.",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Shopwave",
    status: "In Build",
    timeline: "Q2 2026",
    description:
      "High-converting storefront with inventory sync, payments, and order tracking.",
    tech: ["Next.js", "Stripe", "MongoDB"],
  },
  {
    title: "Compass Hiring",
    status: "Planned",
    timeline: "Q3 2026",
    description:
      "Applicant pipeline with scheduling automation, team reviews, and secure docs.",
    tech: ["Express", "Redis", "AWS"],
  },
]

const roadmap = [
  {
    phase: "Discovery",
    window: "Week 1",
    detail: "Align on product goals, user flows, and success metrics.",
  },
  {
    phase: "Design",
    window: "Weeks 2-3",
    detail: "High-fidelity UI, interactive prototypes, and design systems.",
  },
  {
    phase: "Build",
    window: "Weeks 4-8",
    detail: "Frontend, backend, and integrations with test coverage.",
  },
  {
    phase: "Launch",
    window: "Week 9",
    detail: "Performance tuning, monitoring, and iteration.",
  },
]

const skills = [
  {
    title: "Frontend",
    detail: "React, Next.js, TypeScript, Tailwind, CSS architecture, accessibility.",
    level: "92%",
  },
  {
    title: "Backend",
    detail: "Node.js, Express, REST, GraphQL, authentication, integrations.",
    level: "88%",
  },
  {
    title: "Data + DevOps",
    detail: "MongoDB, PostgreSQL, Redis, Docker, CI/CD, monitoring.",
    level: "80%",
  },
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)`n  const baseUrl = import.meta.env.BASE_URL`n  const profileSrc = baseUrl + "assets/images/profile1.png"`n  const heroBg = baseUrl + "assets/images/bg4.jpg"`n  const resumeUrl = baseUrl + "assets/Pdf/Jai_Resume.pdf"

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]")
    if (!elements.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <div className="app">
      <div className="bg-orb orb-1" aria-hidden="true"></div>
      <div className="bg-orb orb-2" aria-hidden="true"></div>
      <div className="bg-orb orb-3" aria-hidden="true"></div>

      <header className="site-header" data-reveal>
        <nav className="navbar">
          <a className="logo" href="#home" aria-label="Go to top" onClick={closeMenu}>
            <span className="logo-mark">jm</span>
            <span className="logo-text">Jai Mehta</span>
          </a>

          <button
            className="nav-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav-links ${isMenuOpen ? "is-open" : ""}`}>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
            <a href="#roadmap" onClick={closeMenu}>
              Roadmap
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </div>

          <div className="nav-cta">
            <a className="btn btn-ghost" href={resumeUrl} download>
              Download CV
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero" data-reveal style={{ "--hero-bg": "url(" + heroBg + ")" }}>
          <div className="hero-text">
            <div className="badge">Available for full-stack roles</div>
            <h1>
              Full-Stack Developer
              <span>building fast, elegant digital products.</span>
            </h1>
            <p>
              I craft end-to-end web experiences with clean architecture, thoughtful UX, and
              performance that feels instant. From polished interfaces to robust APIs, I
              ship products that users love.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                View Projects
              </a>
              <a className="btn btn-ghost" href="#contact">
                Let us talk
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat" data-reveal>
                <span className="stat-value">3+</span>
                <span className="stat-label">Years shipping</span>
              </div>
              <div className="stat" data-reveal>
                <span className="stat-value">15+</span>
                <span className="stat-label">Projects delivered</span>
              </div>
              <div className="stat" data-reveal>
                <span className="stat-value">4.9</span>
                <span className="stat-label">Client rating</span>
              </div>
            </div>
          </div>

          <div className="hero-card" data-reveal>
            <img src={profileSrc} alt="Portrait of Jai Mehta" className="hero-image" />
            <div className="hero-card-body">
              <h2>Jai Mehta</h2>
              <p>Full-Stack Engineer | UI-first mindset</p>
              <div className="hero-social">
                <a
                  href="https://www.linkedin.com/in/jai1209"
                  target="_blank"
                  rel="noopener"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://github.com/JAI1209"
                  target="_blank"
                  rel="noopener"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a href="mailto:rajsuriya51@gmail.com" aria-label="Email">
                  <i className="fa fa-envelope"></i>
                </a>
                <a
                  href="https://x.com/whothefuckisjoy"
                  target="_blank"
                  rel="noopener"
                  aria-label="X"
                >
                  <i className="fab fa-x-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section about" data-reveal>
          <div className="section-title">
            <p>About</p>
            <h2>Design-forward engineering with production discipline.</h2>
          </div>
          <div className="about-grid">
            <p>
              I am a full-stack developer who loves turning complex ideas into intuitive
              experiences. My work spans frontend architecture, backend APIs, and
              scalable data systems. I care about speed, accessibility, and polish.
            </p>
            <ul className="about-list">
              <li>UI systems with modern frameworks and component libraries</li>
              <li>API design with Node.js, Express, and database modeling</li>
              <li>Performance tuning, testing, and deployment automation</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="section work" data-reveal>
          <div className="section-title">
            <p>Selected Work</p>
            <h2>Projects with clear roadmaps and future-ready execution.</h2>
          </div>

          <div className="work-grid">
            {projects.map((project) => (
              <article className="work-card" data-reveal key={project.title}>
                <div className="work-header">
                  <h3>{project.title}</h3>
                  <span className="pill">{project.status}</span>
                </div>
                <p>{project.description}</p>
                <div className="work-meta">
                  <span>{project.timeline}</span>
                  <span className="pulse-dot">Future-ready</span>
                </div>
                <div className="work-tags">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section skills" data-reveal>
          <div className="section-title">
            <p>Skills</p>
            <h2>Focused on the complete product lifecycle.</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-group" data-reveal key={skill.title}>
                <h3>{skill.title}</h3>
                <p>{skill.detail}</p>
                <div className="meter">
                  <span style={{ width: skill.level }}></span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="roadmap" className="section roadmap" data-reveal>
          <div className="section-title">
            <p>Project Roadmap</p>
            <h2>Animated pipeline that shows what ships next.</h2>
          </div>

          <div className="roadmap-grid">
            {roadmap.map((item) => (
              <article className="roadmap-card" data-reveal key={item.phase}>
                <div className="roadmap-title">
                  <h3>{item.phase}</h3>
                  <span>{item.window}</span>
                </div>
                <p>{item.detail}</p>
                <div className="roadmap-bar">
                  <span></span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact" data-reveal>
          <div className="section-title">
            <p>Contact</p>
            <h2>Tell me about your next build.</h2>
          </div>

          <div className="contact-grid">
            <div>
              <p>
                Want a fast, elegant product? I am happy to collaborate on new products,
                migrations, or UX-focused rebuilds.
              </p>
              <div className="contact-cards">
                <div data-reveal>
                  <span>Email</span>
                  <strong>rajsuriya51@gmail.com</strong>
                </div>
                <div data-reveal>
                  <span>Location</span>
                  <strong>Remote / India</strong>
                </div>
                <div data-reveal>
                  <span>Response time</span>
                  <strong>Within 24 hours</strong>
                </div>
              </div>
            </div>

            <form className="contact-form" data-reveal>
              <label>
                Name
                <input type="text" placeholder="Your name" required />
              </label>
              <label>
                Email
                <input type="email" placeholder="you@email.com" required />
              </label>
              <label>
                Project details
                <textarea rows="5" placeholder="Tell me about your goals" required></textarea>
              </label>
              <button type="submit" className="btn btn-primary">
                Send message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer" data-reveal>
        <p>© 2026 Jai Mehta. Crafted with care for performance and clarity.</p>
      </footer>
    </div>
  )
}

export default App

