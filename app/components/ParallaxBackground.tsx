'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { RefObject, useRef } from 'react'

interface ParallaxBlobsProps {
  mainRef?: RefObject<HTMLDivElement | null>
}

export function ParallaxBlobs({ mainRef }: ParallaxBlobsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: mainRef || containerRef,
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -250])
  const opacity1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.06, 0.04, 0.02])
  const opacity2 = useTransform(scrollYProgress, [0, 0.5, 1], [0.08, 0.05, 0.03])

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Blob 1: Morado oscuro */}
      <motion.div
        style={{ y: y1, opacity: opacity1 }}
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-purple-900/40 blur-3xl"
      />

      {/* Blob 2: Violet más oscuro */}
      <motion.div
        style={{ y: y2, opacity: opacity2 }}
        className="absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-violet-950/30 blur-3xl"
      />

      {/* Blob 3: Morado central sutil */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-purple-800/10 blur-3xl opacity-5"
      />
    </div>
  )
}

