'use client'

import { motion } from 'framer-motion'

const experienceItems = [
  {
    company: 'Bidatia',
    role: 'Data Engineering Intern',
    period: 'Marzo 2025 - Junio 2025',
    location: 'Madrid',
    tasks: [
      'Diseño y mantenimiento de pipelines de datos con Azure Data Factory.',
      'Procesamiento y transformación de datos en Databricks.',
      'Implementación de flujos de document intelligence para extracción de facturas.',
    ],
  },
]

const educationItems = [
  {
    title: 'Máster en IA & Big Data',
    status: 'Actualmente cursando',
    period: '2025 - 2026',
  },
  {
    title: 'DAM (Desarrollo de Aplicaciones Multiplataforma)',
    status: 'Completado',
    period: '2023 - 2025',
  },
]

export function ExperienceEducationSection() {
  return (
    <section id="experience" className="relative w-full py-20 px-4 bg-transparent">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] -z-10 rounded-none" />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="space-y-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ textShadow: '0 0 40px rgba(0,0,0,0.8)' }}>
            Experiencia y Educación
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-black/70 border border-white/20 p-6">
              <h3 className="text-2xl font-bold text-white mb-6">Experiencia</h3>
              <ol className="space-y-6" aria-label="Timeline de experiencia profesional">
                {experienceItems.map((item, idx) => (
                  <motion.li
                    key={item.company}
                    className="relative pl-8"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                  >
                    <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-purple-400" aria-hidden="true" />
                    <span className="absolute left-[5px] top-5 h-[calc(100%-0.5rem)] w-px bg-gradient-to-b from-purple-400/70 to-transparent" aria-hidden="true" />

                    <p className="text-sm text-purple-300 font-semibold">{item.period} · {item.location}</p>
                    <p className="text-lg text-white font-bold">{item.company}</p>
                    <p className="text-sm text-zinc-200 mb-3">{item.role}</p>
                    <ul className="space-y-2 text-sm text-zinc-300" aria-label={`Tareas en ${item.company}`}>
                      {item.tasks.map((task) => (
                        <li key={task} className="leading-relaxed">• {task}</li>
                      ))}
                    </ul>
                  </motion.li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl bg-black/70 border border-white/20 p-6">
              <h3 className="text-2xl font-bold text-white mb-6">Educación</h3>
              <ol className="space-y-5" aria-label="Timeline de educación">
                {educationItems.map((item, idx) => (
                  <motion.li
                    key={item.title}
                    className="relative pl-8"
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                  >
                    <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-blue-400" aria-hidden="true" />
                    <p className="text-sm text-blue-300 font-semibold">{item.period}</p>
                    <p className="text-base text-white font-semibold">{item.title}</p>
                    <p className="text-sm text-zinc-300">{item.status}</p>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
