'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface Particle {
  id: string
  x: number
  y: number
  angle: number
  velocity: number
  color: string
  size: number
}

interface ParticleExplosionProps {
  particles: Particle[]
}

export function ParticleExplosion({ particles }: ParticleExplosionProps) {
  return (
    <>
      {particles.map((particle) => {
        const radians = (particle.angle * Math.PI) / 180
        const endX = Math.cos(radians) * particle.velocity
        const endY = Math.sin(radians) * particle.velocity

        return (
          <motion.div
            key={particle.id}
            style={{
              position: 'fixed',
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              borderRadius: '50%',
              backgroundColor: particle.color,
              pointerEvents: 'none',
              zIndex: 40,
            }}
            animate={{
              x: endX,
              y: endY,
              opacity: 0,
              scale: 0,
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
          />
        )
      })}
    </>
  )
}
