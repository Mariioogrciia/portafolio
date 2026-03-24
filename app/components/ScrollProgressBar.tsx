'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { RefObject } from 'react'

interface ScrollProgressBarProps {
  contentRef?: RefObject<HTMLDivElement | null>
}

export function ScrollProgressBar({ contentRef }: ScrollProgressBarProps) {
  const { scrollYProgress } = useScroll({
    target: contentRef,
  })
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-purple-600 origin-left z-50"
    />
  )
}
