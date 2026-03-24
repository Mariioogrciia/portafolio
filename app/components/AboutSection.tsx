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

const timeline = [
  { year: '2022', title: 'DAM', description: 'Desarrollador de Aplicaciones Multiplataforma' },
  { year: '2024', title: 'Prácticas', description: 'Experiencia en Bidatia' },
  { year: '2025', title: 'Máster', description: 'IA & Big Data en curso' },
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
                Soy <span className="text-white font-semibold">Mario García</span>, desarrollador junior Full Stack apasionado por la tecnología y la innovación. Tengo el título de DAM (Desarrollo de Aplicaciones Multiplataforma) y actualmente estoy cursando un Máster en IA & Big Data.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-gray-100 text-lg leading-relaxed"
              >
                Me especializo en <span className="text-purple-400">React, Next.js, Python</span> y soluciones cloud con <span className="text-purple-400">Azure</span>. Mi pasión son los proyectos que combinan Machine Learning, automatización inteligente y desarrollo web moderno.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-gray-100 text-lg leading-relaxed"
              >
                Estoy buscando mi primera oportunidad en empresa para crecer como desarrollador y contribuir con soluciones innovadoras que generen valor real.
              </motion.p>
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

          {/* Timeline */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Trayectoria</h3>
            <div className="space-y-4">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex gap-4"
                  whileInView={{ opacity: [0, 1], x: [-20, 0] }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                >
                  {/* Timeline dot */}
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-purple-500 mt-2" />
                    {idx < timeline.length - 1 && (
                      <div className="w-0.5 h-12 bg-gradient-to-b from-purple-500/50 to-transparent" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-4">
                    <p className="text-sm font-semibold text-purple-400">{item.year}</p>
                    <p className="text-lg font-bold text-white">{item.title}</p>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
