'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8 },
  },
}

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitted(false)
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
    { name: 'GitHub', url: 'https://github.com', icon: '🐙' },
    { name: 'Email', url: 'mailto:mario@example.com', icon: '✉️' },
  ]

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center px-4 py-20"
      id="contact"
    >
      <motion.div
        className="max-w-2xl w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-black mb-4"
          style={{
            background: 'linear-gradient(to right, #e2e8f0 0%, #a78bfa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          variants={itemVariants}
        >
          Ponerse en Contacto
        </motion.h2>

        <motion.p className="text-slate-400 text-lg mb-12" variants={itemVariants}>
          ¿Tienes una pregunta o propuesta? Déjame un mensaje y me pondré en contacto lo antes posible.
        </motion.p>

        <motion.form onSubmit={handleSubmit} className="space-y-6" variants={itemVariants}>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Nombre</label>
            <motion.input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-purple-950/30 border border-purple-700/30 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-purple-600 transition-all duration-300"
              placeholder="Tu nombre"
              whileFocus={{ scale: 1.02 }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
            <motion.input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-purple-950/30 border border-purple-700/30 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-purple-600 transition-all duration-300"
              placeholder="tu.email@ejemplo.com"
              whileFocus={{ scale: 1.02 }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Mensaje</label>
            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-purple-950/30 border border-purple-700/30 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-purple-600 transition-all duration-300 resize-none"
              placeholder="Tu mensaje aquí..."
              whileFocus={{ scale: 1.02 }}
            />
          </div>

          {isSubmitted ? (
            <motion.div
              className="p-4 bg-purple-900/30 border border-purple-600 rounded-lg text-purple-300"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              ¡Gracias por tu mensaje! Me pondré en contacto pronto.
            </motion.div>
          ) : (
            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-300 border border-purple-500/30"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Enviar Mensaje
            </motion.button>
          )}
        </motion.form>

        <motion.div className="mt-12 pt-12 border-t border-purple-900/30" variants={itemVariants}>
          <p className="text-slate-500 text-center mb-6">O conéctate por:</p>
          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-900/20 border border-purple-700/30 hover:bg-purple-900/40 hover:border-purple-600 transition-all duration-300 text-2xl"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
