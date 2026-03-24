'use client'

import { motion } from 'framer-motion'

const technologies = [
  'React',
  'Next.js',
  'TypeScript',
  'Python',
  'Tailwind CSS',
  'Node.js',
  'Azure ML',
  'Document Intelligence',
  'Supabase',
  'SQL',
  'Git',
  'Vercel',
  'Java'
]

export function TechMarquee() {
  return (
    <section className="relative py-16 px-4 overflow-hidden bg-transparent border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-zinc-300">Mi Stack Tecnológico</h3>
        </div>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8 w-fit"
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-full bg-white/5 border border-purple-500/20 text-zinc-400 whitespace-nowrap"
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
