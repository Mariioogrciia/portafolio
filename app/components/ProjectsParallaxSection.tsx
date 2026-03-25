'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'Sistema de Predicción de Menús de Restaurantes',
    description: 'Automatización de lectura y predicción de menús con OCR y Azure ML',
    tags: ['Azure ML', 'Python', 'Document Intelligence', 'OCR'],
    photo: '/images/CuisineAML/project1.png',
    githubUrl: 'https://github.com/adnanhamidoun/lacuchara',
    demoUrl: '',
  },
  {
    id: 2,
    title: 'Plataforma Web Impersed Cubiertas FC',
    description: 'Web completa para la gestión de un equipo de fútbol 7 municipal real con estadísticas, panel de jugadores, apuestas (con puntos virtuales) y panel admin',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'MongoDB'],
    photo: '/images/impersed/project2.png',
    githubUrl: 'https://github.com/Mariioogrciia/futbol7',
    demoUrl: '/projects/futbol',
  },
  {
    id: 3,
    title: 'Banco Web',
    description: 'Mi TFM, fue mi TFM de DAM, una web bancaria con funcionalidades de login, registro, transferencia y gestión de tarjetas',
    tags: ['Java', 'SpringBoot', 'SQL'],
    photo: '/images/MABank/project3.png',
    githubUrl: 'https://github.com/adnanhamidoun/TFG-BANCOWEB',
    demoUrl: '',
  },
]

export function ProjectsGrid() {
  return (
    <section id="projects" className="relative py-20 px-4 bg-transparent z-10">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] -z-10 rounded-none" />
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ textShadow: "0 0 40px rgba(0,0,0,0.8)" }}>
            Proyectos Destacados
          </h2>
          <p className="text-gray-300 text-lg">
            Algunos de mis trabajos más recientes y representativos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-6 rounded-2xl bg-black/70 backdrop-blur-md border border-white/20 hover:border-purple-400 transition-all duration-300 overflow-hidden"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)" }}
            >
              {/* Línea de gradiente morado en el top */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Glow morado en hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-transparent to-purple-600/0 group-hover:from-purple-600/10 group-hover:via-transparent group-hover:to-purple-600/10 transition-all duration-300 pointer-events-none" />

              <div className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                {project.photo ? (
                  <img
                    src={project.photo}
                    alt={`Vista previa del proyecto ${project.title}`}
                    className="mb-5 w-full rounded-xl border border-white/10 aspect-video object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="mb-5 w-full rounded-xl border border-white/10 bg-gradient-to-br from-purple-700/35 via-blue-700/25 to-zinc-900/80 aspect-video flex items-center justify-center"
                    aria-label={`Placeholder visual del proyecto ${project.title}`}
                  >
                    <span className="text-sm text-zinc-300">Screenshot / GIF</span>
                  </div>
                )}

                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>

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

                <div className="flex items-center gap-3 pt-1" role="group" aria-label={`Enlaces del proyecto ${project.title}`}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-md border border-zinc-500 text-zinc-200 text-sm font-semibold hover:border-purple-400 hover:text-white transition-colors"
                    aria-label={`Ver repositorio de ${project.title} en GitHub`}
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demoUrl || '#'}
                    className="px-4 py-2 rounded-md border border-purple-500/50 text-purple-200 text-sm font-semibold hover:bg-purple-500/10 hover:text-white transition-colors"
                    aria-label={`Ver detalles de ${project.title}`}
                  >
                    Ver Detalles
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

