'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useTypingEffect } from '@/app/hooks/useTypingEffect'
import { SplitTextReveal } from './SplitTextReveal'
import { Cube3D } from './Cube3D'

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const scrollOpacity = useTransform(scrollY, [0, 300], [1, 0])

  const { displayedText, cursorVisible } = useTypingEffect(
    'Especializado en React, Next.js, Python y Azure.',
    40,
    true
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, filter: 'blur(10px)', y: 10 },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: { duration: 1.2 },
    },
  }

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center justify-center px-4 pt-32 pb-20 overflow-hidden bg-transparent"
    >
      {/* Hero Content (z-10) */}
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge con punto pulsante */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-700/30">
              <motion.div
                className="w-2 h-2 rounded-full bg-green-500"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm text-purple-300">Disponible para proyectos</span>
            </div>
          </motion.div>

          {/* Título con SplitTextReveal */}
          <motion.div variants={itemVariants} className="mb-6">
            <div
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #e4e4e7 40%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              <SplitTextReveal
                text="Desarrollador Full Stack"
                className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight"
              />
            </div>
          </motion.div>

          {/* Subtítulo con typing effect */}
          <motion.div variants={itemVariants} className="mb-12 min-h-16 flex items-center justify-center">
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              {displayedText}
              {cursorVisible && <span className="animate-pulse">|</span>}
            </p>
          </motion.div>

          {/* Botones */}
          <motion.div
            variants={itemVariants}
            className="flex gap-4 justify-center items-center flex-wrap"
            role="group"
            aria-label="Acciones principales"
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg border border-purple-500/30 hover:bg-purple-700 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Ver proyectos"
            >
              Ver Proyectos
            </motion.a>

            <motion.a
              href="#contact"
              className="px-8 py-3 border border-zinc-700 text-zinc-300 font-semibold rounded-lg hover:border-purple-500/50 hover:text-purple-300 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Ir a contacto"
            >
              Contactar
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Cube3D (solo desktop) */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-40 h-40">
          <Cube3D />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity: scrollOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sm text-zinc-500">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border border-zinc-600 rounded-full flex items-center justify-center"
        >
          <motion.div className="w-1 h-2 bg-zinc-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}


