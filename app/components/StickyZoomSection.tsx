'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useMemo } from 'react'

export function StickyZoomSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end center'],
  })

  // Crear partículas de texto para efecto dispersión
  const particles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      angle: (i / 25) * Math.PI * 2,
      distance: 50 + (i % 3) * 30,
      duration: 0.8 + (i % 5) * 0.3,
    }))
  }, [])

  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.3, 1, 1, 0])
  
  return (
    <div
      ref={sectionRef}
      className="relative w-full bg-transparent"
      style={{ height: '280vh' }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-gradient-to-b from-black via-black/80 to-black">
        {/* Fondo de partículas decorativas */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-purple-500/40 rounded-full pointer-events-none"
            style={{
              left: '50%',
              top: '50%',
            }}
            animate={{
              x: Math.cos(particle.angle) * particle.distance,
              y: Math.sin(particle.angle) * particle.distance,
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Main text with glow effect */}
        <motion.div
          style={{
            opacity,
          }}
          className="pointer-events-none will-change-transform relative z-10"
        >
          <div className="relative">
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 blur-3xl opacity-50"
              style={{
                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4), transparent)',
              }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <h1
              className="text-center font-bold leading-tight tracking-tight relative z-20"
              style={{
                fontSize: 'clamp(2rem, 8vw, 7rem)',
                background: 'linear-gradient(135deg, #ffffff 0%, #a855f7 50%, #7c3aed 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 30px rgba(168, 85, 247, 0.3)',
              }}
            >
              Construyo el futuro
              <br />
              con código
            </h1>
          </div>
        </motion.div>

        {/* Líneas decorativas animadas */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent pointer-events-none"
            style={{
              width: '200px',
              top: `${30 + i * 20}%`,
              left: '50%',
              x: '-50%',
            }}
            animate={{
              opacity: [0, 0.3, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 0.4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  )
}
