'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface TimelineItem {
  year: string
  title: string
  description: string
}

const timelineItems: TimelineItem[] = [
  {
    year: '2022',
    title: 'Inicio en programación',
    description: 'Primeros pasos con HTML, CSS y JavaScript',
  },
  {
    year: '2023',
    title: 'Proyecto de fútbol sala',
    description: 'Dashboard de estadísticas con React',
  },
  {
    year: '2024',
    title: 'DAM completado',
    description: 'Desarrollo de Aplicaciones Multiplataforma',
  },
  {
    year: '2025',
    title: 'Certificaciones Azure',
    description: 'AI Engineer, Fabric, Database, Fundamentals',
  },
  {
    year: '2026',
    title: 'Máster IA & Big Data',
    description: 'Especializándome en soluciones inteligentes',
  },
]

export function HorizontalTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  const xOffset = useTransform(scrollYProgress, [0, 1], [0, -500])

  return (
    <section ref={containerRef} className="relative py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <h2 className="text-4xl font-bold text-white mb-2">Mi Trayectoria</h2>
        <p className="text-zinc-400">Evolución profesional año a año</p>
      </div>

      <div className="relative h-96 flex items-center overflow-hidden">
        {/* Gradientes laterales */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

        {/* Timeline items */}
        <motion.div
          style={{ x: xOffset }}
          className="flex gap-6 px-8"
        >
          {timelineItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex-shrink-0 w-72 group cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              {/* Card */}
              <motion.div
                className="relative h-64 rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-transparent p-6 flex flex-col justify-between overflow-hidden"
                whileHover={{ borderColor: 'rgba(168, 85, 247, 0.8)', scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-purple-600/20 blur-3xl" />
                </div>

                {/* Year badge */}
                <motion.div
                  className="relative z-10 inline-flex w-fit"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="px-3 py-1 rounded-full bg-purple-600/40 border border-purple-500/50">
                    <span className="text-sm font-semibold text-purple-300">{item.year}</span>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10 mt-4">
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{item.title}</h3>
                  <p className="text-sm text-zinc-400 line-clamp-3">{item.description}</p>
                </div>

                {/* Progress indicator */}
                <div className="relative z-10 mt-auto">
                  <div className="w-full h-1 bg-zinc-700/50 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-600 to-purple-400"
                      initial={{ width: '0%' }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1.2, delay: idx * 0.1 }}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Timeline line */}
      <div className="mt-12 max-w-7xl mx-auto px-4">
        <div className="relative h-1 bg-gradient-to-r from-transparent via-purple-600/30 to-transparent rounded-full" />
      </div>

      {/* Info text */}
      <div className="text-center mt-8 text-zinc-500 text-sm">
        <p>Desplázate para explorar mi evolución profesional</p>
      </div>
    </section>
  )
}
