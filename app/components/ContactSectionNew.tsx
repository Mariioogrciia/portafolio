'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export function ContactSectionNew() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/mariioogrciia',
      color: 'hover:text-white',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mario-garcia-romero-453348304',
      color: 'hover:text-blue-400',
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mario.garciaromero16@gmail.com',
      color: 'hover:text-purple-400',
    },
  ]

  return (
    <section id="contact" className="relative min-h-screen w-full flex items-center justify-center px-4 py-20 bg-transparent z-10">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6"
        >
          Hablemos de tu
          <br />
          próximo proyecto
        </motion.h2>

        <motion.p variants={itemVariants} className="text-lg text-zinc-400 mb-12 max-w-xl mx-auto">
          Estoy disponible para nuevos proyectos y colaboraciones. Contactame para discutir tu idea.
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap">
          <motion.a
            href="mailto:mario@example.com"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg border border-purple-500/30 hover:border-purple-400 transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            Enviar Email
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/mariogarcíaa"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-zinc-700 text-zinc-300 font-semibold rounded-lg hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-5 h-5" />
            Ver LinkedIn
          </motion.a>
        </motion.div>

        {/* Links sociales con iconos */}
        <motion.div variants={itemVariants} className="mt-16 pt-16 border-t border-white/10 flex gap-8 justify-center">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-zinc-400 transition-colors duration-300 ${social.color}`}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                title={social.label}
              >
                <Icon className="w-8 h-8" />
              </motion.a>
            )
          })}
        </motion.div>

        {/* Texto adicional */}
        <motion.p variants={itemVariants} className="mt-8 text-sm text-zinc-500">
          Sígueme en mis redes sociales
        </motion.p>
      </motion.div>
    </section>
  )
}
