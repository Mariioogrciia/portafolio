'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const technologies = ['React', 'Python', 'Next.js', 'Azure', 'TypeScript', 'SQL']

export function Cube3D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
  })

  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.3])
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0])

  return (
    <motion.div
      ref={containerRef}
      style={{
        scale,
        opacity,
      }}
      className="absolute right-10 top-1/2 -translate-y-1/2 w-32 h-32 pointer-events-none will-change-transform hidden lg:block"
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          transformStyle: 'preserve-3d' as any,
        }}
        animate={{
          rotateX: 360,
          rotateY: 360,
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {/* Front face */}
        <div
          className="absolute w-32 h-32 bg-purple-900/50 border border-purple-500/60 flex items-center justify-center text-white font-bold text-xs backdrop-blur-sm"
          style={{
            transform: 'translateZ(64px)',
            backfaceVisibility: 'hidden',
          }}
        >
          {technologies[0]}
        </div>

        {/* Back face */}
        <div
          className="absolute w-32 h-32 bg-purple-900/50 border border-purple-500/60 flex items-center justify-center text-white font-bold text-xs backdrop-blur-sm"
          style={{
            transform: 'rotateY(180deg) translateZ(64px)',
            backfaceVisibility: 'hidden',
          }}
        >
          {technologies[1]}
        </div>

        {/* Left face */}
        <div
          className="absolute w-32 h-32 bg-purple-900/50 border border-purple-500/60 flex items-center justify-center text-white font-bold text-xs backdrop-blur-sm"
          style={{
            transform: 'rotateY(-90deg) translateZ(64px)',
            backfaceVisibility: 'hidden',
          }}
        >
          {technologies[3]}
        </div>

        {/* Right face */}
        <div
          className="absolute w-32 h-32 bg-purple-900/50 border border-purple-500/60 flex items-center justify-center text-white font-bold text-xs backdrop-blur-sm"
          style={{
            transform: 'rotateY(90deg) translateZ(64px)',
            backfaceVisibility: 'hidden',
          }}
        >
          {technologies[2]}
        </div>

        {/* Top face */}
        <div
          className="absolute w-32 h-32 bg-purple-900/50 border border-purple-500/60 flex items-center justify-center text-white font-bold text-xs backdrop-blur-sm"
          style={{
            transform: 'rotateX(90deg) translateZ(64px)',
            backfaceVisibility: 'hidden',
          }}
        >
          {technologies[4]}
        </div>

        {/* Bottom face */}
        <div
          className="absolute w-32 h-32 bg-purple-900/50 border border-purple-500/60 flex items-center justify-center text-white font-bold text-xs backdrop-blur-sm"
          style={{
            transform: 'rotateX(-90deg) translateZ(64px)',
            backfaceVisibility: 'hidden',
          }}
        >
          {technologies[5]}
        </div>
      </motion.div>
    </motion.div>
  )
}
