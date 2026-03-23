'use client'

import { motion } from 'framer-motion'

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, filter: 'blur(10px)', y: 20 },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="about" className="relative w-full py-20 px-4 bg-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Left: Text Content */}
          <div className="space-y-6">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-black"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Sobre mí
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-zinc-400 text-lg leading-relaxed"
            >
              Soy <span className="text-white font-semibold">Mario García</span>, desarrollador junior Full Stack apasionado por la tecnología y la innovación. Tengo el título de DAM (Desarrollo de Aplicaciones Multiplataforma) y actualmente estoy cursando un Máster en IA & Big Data.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-zinc-400 text-lg leading-relaxed"
            >
              Me especializo en <span className="text-purple-400">React, Next.js, Python</span> y soluciones cloud con <span className="text-purple-400">Azure</span>. Mi pasión son los proyectos que combinan Machine Learning, automatización inteligente y desarrollo web moderno.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-zinc-400 text-lg leading-relaxed"
            >
              Estoy buscando mi primera oportunidad en empresa para crecer como desarrollador y contribuir con soluciones innovadoras que generen valor real.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 pt-4"
            >
              {['React', 'Next.js', 'Python', 'TypeScript', 'Azure', 'PostgreSQL'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-sm text-purple-300"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Stats */}
          <motion.div className="space-y-6">
            {[
              { label: 'DAM Completado', value: '✓' },
              { label: 'Máster IA & Big Data', value: 'En curso' },
              { label: 'Proyectos personales', value: '+5' },
              { label: 'Stack especializado', value: '4+' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300"
              >
                <p className="text-zinc-500 text-sm mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
