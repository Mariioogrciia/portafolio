import { useCallback, useRef, useState } from 'react'

interface Particle {
  id: string
  x: number
  y: number
  angle: number
  velocity: number
  color: string
  size: number
}

const COLORS = ['#a855f7', '#c084fc', '#e879f9', '#ffffff', '#7c3aed']

export function useParticleExplosion() {
  const [particles, setParticles] = useState<Particle[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  const triggerExplosion = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2

    const newParticles: Particle[] = Array.from({ length: 20 }).map((_, i) => ({
      id: `${Date.now()}-${i}`,
      x,
      y,
      angle: Math.random() * 360,
      velocity: 80 + Math.random() * 120,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: 4 + Math.random() * 6,
    }))

    setParticles((prev) => [...prev, ...newParticles])

    // Remove particles after animation completes
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.find((np) => np.id === p.id)))
    }, 800)
  }, [])

  return { containerRef, triggerExplosion, particles }
}
