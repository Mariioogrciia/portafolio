'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stats = [
  { number: '10+', label: 'Proyectos completados' },
  { number: '5+', label: 'Años de experiencia' },
  { number: '50+', label: 'Clientes satisfechos' },
  { number: '100%', label: 'Dedicación' },
]

export function StatsSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section
      ref={ref}
      className="relative py-20 px-4 bg-gradient-to-b from-black to-purple-950/20 border-y border-purple-900/10"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-zinc-400 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
