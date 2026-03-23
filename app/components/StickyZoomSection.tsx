'use client'

import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion'
import { useRef } from 'react'

export function StickyZoomSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 2.5, 6])
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 1, 1, 0])
  const blur = useTransform(scrollYProgress, [0.7, 1], [0, 20])
  const blurTemplate = useMotionTemplate`blur(${blur}px)`

  return (
    <div
      ref={sectionRef}
      className="relative w-full bg-transparent"
      style={{ height: '300vh' }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Motion text with scale, opacity, and blur */}
        <motion.div
          style={{
            scale,
            opacity,
            filter: blurTemplate,
          }}
          className="pointer-events-none will-change-transform"
        >
          <h1
            className="text-center font-bold leading-tight tracking-tight"
            style={{
              fontSize: 'clamp(2rem, 8vw, 8rem)',
              background: 'linear-gradient(135deg, #ffffff 0%, #a855f7 50%, #7c3aed 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Construyo el futuro
            <br />
            con código
          </h1>
        </motion.div>
      </div>
    </div>
  )
}
