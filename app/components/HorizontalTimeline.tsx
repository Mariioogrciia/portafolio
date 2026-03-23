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
    offset: ['start start', 'end end'],
  })

  const xProgress = useTransform(scrollYProgress, [0, 1], ['0%', `-${(timelineItems.length - 1) * 100}%`])

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-transparent">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-transparent">
        <motion.div
          style={{
            x: xProgress,
          } as any}
          className="flex gap-8 h-full w-max px-8"
        >
          {timelineItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex-shrink-0 h-full w-96 flex flex-col items-center justify-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              {/* Timeline circle */}
              <div className="relative mb-8">
                <motion.div
                  className="w-16 h-16 rounded-full bg-purple-600 border-2 border-purple-400 flex items-center justify-center"
                  whileHover={{ scale: 1.2 }}
                >
                  <span className="text-white font-bold text-sm">{item.year}</span>
                </motion.div>
                {idx < timelineItems.length - 1 && (
                  <div className="absolute top-1/2 left-full w-32 h-1 bg-gradient-to-r from-purple-600 to-transparent" />
                )}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-zinc-400 text-sm max-w-xs">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center pointer-events-none">
          <p className="text-zinc-500 text-sm">Desplázate horizontalmente</p>
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-2"
          >
            →
          </motion.div>
        </div>
      </div>
    </div>
  )
}
