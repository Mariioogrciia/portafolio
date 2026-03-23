'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface FlipCardProps {
  frontContent: React.ReactNode
  backContent: React.ReactNode
  className?: string
}

export function FlipCard({ frontContent, backContent, className = '' }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className={className}
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        style={{
          transformStyle: 'preserve-3d' as any,
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{
          duration: 0.7,
          type: 'spring' as const,
          stiffness: 60,
        }}
      >
        {/* Front face */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
          className="bg-white/5 border border-purple-900/40 rounded-2xl p-6 flex flex-col justify-between will-change-transform"
        >
          {frontContent}
        </div>

        {/* Back face */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
          className="bg-white/5 border border-purple-500/60 rounded-2xl p-6 flex flex-col justify-between will-change-transform shadow-lg shadow-purple-500/20"
        >
          {backContent}
        </div>
      </motion.div>
    </div>
  )
}
