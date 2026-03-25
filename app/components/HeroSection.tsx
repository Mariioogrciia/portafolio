'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useTypingEffect } from '@/app/hooks/useTypingEffect'

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-8 flex justify-center"
          >
            <motion.div
              className="relative h-[150px] w-[150px] rounded-full p-[3px]"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              aria-hidden="true"
              style={{
                background:
                  'conic-gradient(from 0deg, rgba(168,85,247,0.9), rgba(59,130,246,0.9), rgba(168,85,247,0.9))',
              }}
            >
              <div className="h-full w-full rounded-full bg-black/85 flex items-center justify-center border border-white/10">
                <span className="text-xs tracking-[0.2em] text-zinc-300">FOTO</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Badge con punto pulsante */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/70 backdrop-blur-sm border border-purple-500/60">
              <motion.div
                className="w-2 h-2 rounded-full bg-green-500"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm text-purple-300">Disponible para proyectos</span>
            </div>
          </motion.div>

          {/* Título principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-7xl sm:text-8xl md:text-9xl font-black text-center text-white leading-none tracking-tight mb-6"
            style={{ textShadow: "0 0 80px rgba(0,0,0,1), 0 2px 20px rgba(0,0,0,0.9)" }}
          >
            Desarrollador<br />
            <span className="text-purple-400">Full Stack</span>
          </motion.h1>

          {/* Subtítulo con typing effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12 min-h-16 flex items-center justify-center"
          >
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed" style={{ textShadow: "0 0 40px rgba(0,0,0,0.8)" }}>
              {displayedText}
              {cursorVisible && <span className="animate-pulse">|</span>}
            </p>
          </motion.div>

          {/* Botones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
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
              className="px-8 py-3 border border-gray-500 text-gray-200 font-semibold rounded-lg hover:border-purple-500/50 hover:text-white transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Ir a contacto"
            >
              Contactar
            </motion.a>

            <motion.a
              href="/cv-mario-garcia.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-purple-400/60 text-purple-200 font-semibold rounded-lg hover:border-purple-300 hover:text-white hover:bg-purple-500/10 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Descargar CV en PDF"
            >
              Descargar CV
            </motion.a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}


