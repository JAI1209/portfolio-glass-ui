import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { useMemo, useRef } from 'react'

function pseudoRandom(seed) {
  const x = Math.sin(seed * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

function Starfield() {
  const ref = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(900 * 3)
    for (let i = 0; i < 900; i += 1) {
      arr[i * 3] = (pseudoRandom(i + 1) - 0.5) * 14
      arr[i * 3 + 1] = (pseudoRandom(i + 1001) - 0.5) * 8
      arr[i * 3 + 2] = (pseudoRandom(i + 2001) - 0.5) * 2
    }
    return arr
  }, [])

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * 0.012
  })

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial transparent size={0.014} color="#7cdfff" opacity={0.42} sizeAttenuation depthWrite={false} />
    </Points>
  )
}

export default function BackgroundCanvas() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-30">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 4] }}>
        <Starfield />
      </Canvas>
    </div>
  )
}
