'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="relative py-12 px-4 border-t border-white/5 bg-black/80 backdrop-blur">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col items-center justify-center gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Main text */}
          <motion.p
            variants={itemVariants}
            className="text-center text-gray-300 text-sm"
          >
            Mario García © {currentYear} · Hecho con Next.js y{' '}
            <span className="text-amber-600">☕</span>
          </motion.p>

          {/* Social icons */}
          <motion.div
            variants={itemVariants}
            className="flex gap-6 items-center"
          >
            <motion.a
              href="https://github.com/Mariioogrciia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-purple-500 rounded-lg p-2"
              aria-label="GitHub"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/mario-garcía"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-blue-500 rounded-lg p-2"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Tech stack text */}
          <motion.p
            variants={itemVariants}
            className="text-center text-gray-400 text-xs"
          >
            Diseñado y desarrollado con Next.js, Tailwind CSS y Framer Motion
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}
