'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-purple-600 origin-left z-50"
    />
  )
}
