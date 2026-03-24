'use client'

import { motion } from 'framer-motion'

interface SplitTextRevealProps {
  text: string
  className?: string
}

export function SplitTextReveal({ text, className = '' }: SplitTextRevealProps) {
  const lines = text.split('\n')

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.03 },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 80, rotateX: -90, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.6, type: 'spring' as const, stiffness: 120, damping: 12 },
    },
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        perspective: '800px',
        display: 'block',
      } as any}
    >
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} style={{ display: 'block' }}>
          {line.split('').map((letter, letterIndex) => (
            <motion.span
              key={`${lineIndex}-${letterIndex}`}
              variants={letterVariants}
              className="inline-block will-change-transform"
              style={{
                transformStyle: 'preserve-3d' as any,
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </div>
      ))}
    </motion.div>
  )
}
