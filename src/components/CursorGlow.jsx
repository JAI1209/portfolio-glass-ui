import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const supportsCursorGlow =
  typeof window !== 'undefined' &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
  window.matchMedia('(pointer: fine)').matches

export default function CursorGlow() {
  const x = useMotionValue(-200)
  const y = useMotionValue(-200)
  const sx = useSpring(x, { stiffness: 220, damping: 24 })
  const sy = useSpring(y, { stiffness: 220, damping: 24 })

  useEffect(() => {
    if (!supportsCursorGlow) return undefined

    const onMove = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }

    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [x, y])

  if (!supportsCursorGlow) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-40 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,245,212,0.15)_0%,rgba(0,245,212,0)_70%)]"
      style={{ left: sx, top: sy }}
    />
  )
}
