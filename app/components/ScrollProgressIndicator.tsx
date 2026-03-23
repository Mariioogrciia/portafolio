'use client'

import { useScroll, motion, useMotionValueEvent, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

export function ScrollProgressIndicator() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const { scrollYProgress } = useScroll()

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setProgress(latest * 100)
  })

  const circumference = 282.7
  const strokeDashoffset = useTransform(
    scrollYProgress,
    [0, 1],
    [circumference, 0]
  )

  return (
    <div
      ref={containerRef}
      className="fixed top-8 right-8 z-50 flex items-center gap-4"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Scroll progress"
    >
      <div className="text-xs font-mono text-cyan-400/80">{Math.round(progress)}%</div>

      <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>

        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="rgba(6, 182, 212, 0.1)"
          strokeWidth="2"
        />

        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="url(#progressGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset as any}
        />
      </svg>
    </div>
  )
}
