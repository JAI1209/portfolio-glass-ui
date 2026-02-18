import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import CursorGlow from './components/CursorGlow'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ProjectsSection from './sections/ProjectsSection'
import SkillsSection from './sections/SkillsSection'
import EducationSection from './sections/EducationSection'
import ContactSection from './sections/ContactSection'
import useLenis from './hooks/useLenis'

const BackgroundCanvas = lazy(() => import('./components/BackgroundCanvas'))

export default function App() {
  useLenis()

  return (
    <div className="relative min-h-screen overflow-x-clip bg-bg text-text">
      <Suspense fallback={null}>
        <BackgroundCanvas />
      </Suspense>
      <CursorGlow />
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar />

      <motion.main
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </motion.main>
    </div>
  )
}
