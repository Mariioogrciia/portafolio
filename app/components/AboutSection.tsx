'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Cloud, GitBranch } from 'lucide-react'

const skills = [
  { name: 'React', icon: Code2, category: 'Frontend' },
  { name: 'Next.js', icon: Code2, category: 'Frontend' },
  { name: 'TypeScript', icon: Code2, category: 'Frontend' },
  { name: 'Python', icon: Code2, category: 'Backend' },
  { name: 'Azure', icon: Cloud, category: 'Cloud' },
  { name: 'SQL', icon: Database, category: 'Database' },
  { name: 'Tailwind CSS', icon: Code2, category: 'Styling' },
  { name: 'Git', icon: GitBranch, category: 'Tools' },
]

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
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] -z-10 rounded-none" />
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Header */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ textShadow: "0 0 40px rgba(0,0,0,0.8)" }}
          >
            Sobre mí
          </motion.h2>

          {/* Two columns layout */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <motion.p
                variants={itemVariants}
                className="text-gray-100 text-lg leading-relaxed"
              >
                Transformo ideas complejas en productos digitales que automatizan procesos reales y generan impacto medible. Soy <span className="text-white font-semibold">Mario García</span>, desarrollador Full Stack con enfoque en soluciones prácticas para negocio.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-gray-100 text-lg leading-relaxed"
              >
                Me especializo en <span className="text-purple-400">React, Next.js, Python</span> y arquitecturas cloud sobre <span className="text-purple-400">Azure</span>. Me apasiona construir sistemas de automatización inteligente y aplicaciones guiadas por datos que ahorren tiempo y mejoren decisiones.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-gray-100 text-lg leading-relaxed"
              >
                Disfruto trabajar en productos end-to-end: desde la lógica de negocio y el tratamiento de datos, hasta una experiencia de usuario clara, rápida y mantenible.
              </motion.p>

              <motion.div variants={itemVariants} className="pt-2">
                <h3 className="text-base font-semibold text-white mb-3">Idiomas</h3>
                <div className="flex flex-wrap gap-2" aria-label="Idiomas hablados">
                  <span className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/20 text-zinc-200">
                    Español (Nativo)
                  </span>
                  <span className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/20 text-zinc-200">
                    Inglés (Técnico - B2)
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right: Skills Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-3"
            >
              {skills.map((skill) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={skill.name}
                    className="p-4 rounded-lg bg-black/70 backdrop-blur-md border border-white/20 hover:border-purple-400 hover:bg-black/80 transition-all duration-300 group"
                    whileHover={{ y: -2, boxShadow: '0 0 20px rgba(168, 85, 247, 0.1)' }}
                  >
                    <Icon className="w-5 h-5 text-purple-400 mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-sm font-semibold text-white">{skill.name}</p>
                    <p className="text-xs text-gray-400">{skill.category}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
