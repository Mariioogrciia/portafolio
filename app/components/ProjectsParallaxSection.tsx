'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const projects = [
  {
    id: 1,
    title: 'Sistema de Predicción de Menús de Restaurantes',
    description: 'Automatización de lectura y predicción de menús con OCR y Azure ML',
    tags: ['Azure ML', 'Python', 'Document Intelligence', 'OCR'],
    link: 'https://github.com/Mariioogrciia',
  },
  {
    id: 2,
    title: 'Plataforma de Estadísticas de Fútbol Municipal',
    description: 'Dashboard de estadísticas de partidos y jugadores en tiempo real',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'MongoDB'],
    link: 'https://github.com/Mariioogrciia',
  },
  {
    id: 3,
    title: 'Chatbot Inteligente con Azure',
    description: 'Chatbot conversacional con QnA Maker y Azure Bot Service',
    tags: ['Azure Language Service', 'Azure Bot Service', 'Python'],
    link: 'https://github.com/Mariioogrciia',
  },
  {
    id: 4,
    title: 'Sistema de Procesamiento de Facturas',
    description: 'Extracción automática de datos de facturas con Document Intelligence',
    tags: ['Azure Document Intelligence', 'Logic Apps', 'PowerApps', 'SQL'],
    link: 'https://github.com/Mariioogrciia',
  },
]

export function ProjectsGrid() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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

  return (
    <section id="projects" ref={ref} className="relative py-20 px-4 bg-transparent z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-zinc-400 text-lg">
            Algunos de mis trabajos más recientes y representativos
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.link}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative p-6 rounded-2xl bg-[#0d0d0d] border border-purple-900/30 hover:border-purple-500/50 transition-all duration-300 overflow-hidden"
            >
              {/* Línea de gradiente morado en el top */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Glow morado en hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-transparent to-purple-600/0 group-hover:from-purple-600/10 group-hover:via-transparent group-hover:to-purple-600/10 transition-all duration-300 pointer-events-none" />

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-zinc-400 text-sm mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="text-purple-400 text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Ver proyecto →
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

