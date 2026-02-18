import { useRef } from 'react'
import { motion, useMotionValue } from 'framer-motion'

export default function MagneticButton({ children, className = '', ...props }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.16
    const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.16
    x.set(Math.max(-14, Math.min(14, dx)))
    y.set(Math.max(-8, Math.min(8, dy)))
  }

  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      className={`btn-ripple relative overflow-hidden rounded-full px-7 py-3 font-medium ${className}`}
      style={{ x, y }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      {...props}
    >
      {children}
    </motion.button>
  )
}
