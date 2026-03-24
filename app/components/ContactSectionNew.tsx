'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { useState } from 'react'
import { useParticleExplosion } from '@/app/hooks/useParticleExplosion'
import { ParticleExplosion } from './ParticleExplosion'

export function ContactSectionNew() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [showSuccess, setShowSuccess] = useState(false)
  const { particles, triggerExplosion } = useParticleExplosion()

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
      url: 'mailto:mario.garciaromero16@gmail.com',
      color: 'hover:text-purple-400',
    },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (formData.name && formData.email && formData.message) {
      triggerExplosion(e as any)
      setShowSuccess(true)
      setFormData({ name: '', email: '', message: '' })

      setTimeout(() => {
        setShowSuccess(false)
      }, 4000)
    }
  }

  return (
    <section id="contact" className="relative min-h-screen w-full flex items-center justify-center px-4 py-20 bg-transparent z-10">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] -z-20 rounded-none" />
      <ParticleExplosion particles={particles} />

      <motion.div
        className="max-w-2xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-center"
          style={{ textShadow: "0 0 40px rgba(0,0,0,0.8)" }}
        >
          Hablemos de tu
          <br />
          próximo proyecto
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-200 mb-12 max-w-xl mx-auto text-center"
        >
          Estoy disponible para nuevos proyectos y colaboraciones. Contactame para discutir tu idea.
        </motion.p>

        {/* Formulario */}
        <motion.form
          variants={itemVariants}
          onSubmit={handleSubmit}
          className="space-y-4 mb-12"
        >
          {/* Nombre */}
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black/70 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-0 transition-colors duration-300"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Tu email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black/70 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-0 transition-colors duration-300"
            required
          />

          {/* Mensaje */}
          <textarea
            name="message"
            placeholder="Tu mensaje"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 bg-black/70 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-0 transition-colors duration-300 resize-none"
            required
          />

          {/* Botón Enviar */}
          <motion.button
            type="submit"
            className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Enviar mensaje
          </motion.button>
        </motion.form>

        {/* Mensaje de éxito */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center text-green-400 font-semibold mb-8"
            >
              ¡Mensaje enviado! Te responderé pronto 🚀
            </motion.div>
          )}
        </AnimatePresence>

        {/* Links rápidos */}
        <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap mb-12">
          <motion.a
            href="mailto:mario.garciaromero16@gmail.com"
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg border border-purple-500/30 hover:border-purple-400 transition-all duration-300 flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            aria-label="Enviar email directamente"
          >
            <Mail className="w-5 h-5" />
            Enviar Email
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/mario-garcia-romero-453348304"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-500 text-gray-200 font-semibold rounded-lg hover:border-purple-500/50 hover:text-white transition-all duration-300 flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Ir a LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
            Ver LinkedIn
          </motion.a>
        </motion.div>

        {/* Links sociales con iconos */}
        <motion.div
          variants={itemVariants}
          className="pt-12 border-t border-white/10 flex gap-8 justify-center"
        >
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <motion.a
                key={social.label}
                href={social.url}
                target={social.url.startsWith('mailto') ? undefined : '_blank'}
                rel={social.url.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className={`text-gray-300 transition-colors duration-300 ${social.color} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 rounded-lg p-2`}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                title={social.label}
                aria-label={social.label}
              >
                <Icon className="w-8 h-8" />
              </motion.a>
            )
          })}
        </motion.div>

        {/* Texto adicional */}
        <motion.p variants={itemVariants} className="mt-8 text-sm text-gray-400 text-center">
          Sígueme en mis redes sociales
        </motion.p>
      </motion.div>
    </section>
  )
}
