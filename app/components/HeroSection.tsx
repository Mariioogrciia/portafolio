'use client'

import { motion } from 'framer-motion'
import { SplitTextReveal } from './SplitTextReveal'

export function HeroSection() {
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
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center px-4 pt-32 pb-20 overflow-hidden bg-transparent">
      {/* Hero Content (z-10) */}
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-700/30">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-sm text-purple-300">Disponible para proyectos</span>
            </div>
          </motion.div>

          {/* Título */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #e4e4e7 40%, #a78bfa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Desarrollador
            <br />
            Full Stack
          </motion.h1>

          {/* Subtítulo */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Estudiante de Máster en IA & Big Data. Especializado en React, Next.js, Python y Azure.
          </motion.p>

          {/* Botones */}
          <motion.div variants={itemVariants} className="flex gap-4 justify-center items-center flex-wrap">
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg border border-purple-500/30 hover:bg-purple-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Proyectos
            </motion.a>

            <motion.a
              href="#contact"
              className="px-8 py-3 border border-zinc-700 text-zinc-300 font-semibold rounded-lg hover:border-purple-500/50 hover:text-purple-300 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contactar
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


