'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

interface Certification {
  id: string
  name: string
  issued: string
  expires: string
  credentialId: string
  badgeUrl: string
  credentialUrl: string
}

const certifications: Certification[] = [
  {
    id: '1',
    name: 'Microsoft Certified: Azure AI Engineer Associate',
    issued: 'Febrero 2026',
    expires: 'Febrero 2027',
    credentialId: '59B52872C5AEB80A',
    badgeUrl: 'https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-associate-badge.svg',
    credentialUrl: 'https://learn.microsoft.com/es-es/users/mariogarcia-0612/credentials/59b52872c5aeb80a?ref=https%3A%2F%2Fwww.linkedin.com%2F',
  },
  {
    id: '2',
    name: 'Microsoft Certified: Fabric Data Engineer Associate',
    issued: 'Diciembre 2025',
    expires: 'Diciembre 2026',
    credentialId: '11C741625CB482D6',
    badgeUrl: 'https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-associate-badge.svg',
    credentialUrl: 'https://learn.microsoft.com/es-es/users/mariogarcia-0612/credentials/11c741625cb482d6?ref=https%3A%2F%2Fwww.linkedin.com%2F',
  },
  {
    id: '3',
    name: 'Microsoft Certified: Azure Database Administrator Associate',
    issued: 'Diciembre 2025',
    expires: 'Diciembre 2026',
    credentialId: 'B9034B660127FF11',
    badgeUrl: 'https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-associate-badge.svg',
    credentialUrl: 'https://learn.microsoft.com/es-es/users/MarioGarcaRomero-5813/credentials/B9034B660127FF11?ref=https%3a%2f%2fwww.linkedin.com%2f',
  },
  {
    id: '4',
    name: 'Microsoft Certified: Azure Data Fundamentals (DP-900)',
    issued: 'Octubre 2025',
    expires: 'Sin vencimiento',
    credentialId: '',
    badgeUrl: 'https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg',
    credentialUrl: 'https://www.credly.com/badges/2a5fa958-57e8-4805-9e44-abce574ddb79/linked_in_profile',
  },
]

export function CertificationsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="certifications" className="relative w-full py-20 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Header con stats */}
        <motion.div
          className="mb-16"
          variants={statsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-black mb-6"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #a78bfa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Certificaciones Microsoft
          </motion.h2>

          <div className="flex flex-col sm:flex-row gap-6 mt-8">
            <motion.div
              className="p-6 rounded-lg bg-white/5 border border-white/10"
              variants={statsVariants}
            >
              <p className="text-zinc-500 text-sm mb-2">Certificaciones activas</p>
              <p className="text-4xl font-bold text-white">4</p>
            </motion.div>
            <motion.div
              className="p-6 rounded-lg bg-white/5 border border-white/10"
              variants={statsVariants}
            >
              <p className="text-zinc-500 text-sm mb-2">Especialidades</p>
              <p className="text-lg text-purple-400 font-semibold">Azure · Fabric · AI · Data</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Certificaciones Grid */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="group p-6 rounded-lg bg-white/5 border border-white/10 hover:border-purple-500/60 hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                {/* Badge */}
                <div className="flex-shrink-0">
                  <div className="relative w-20 h-20 bg-white/10 rounded-lg p-2">
                    <Image
                      src={cert.badgeUrl}
                      alt={cert.name}
                      width={80}
                      height={80}
                      className="object-contain w-full h-full"
                      priority={false}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                  <p className="text-purple-400 text-sm font-medium mb-3">Microsoft Learn</p>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-zinc-400 mb-4">
                    <span>
                      📅 {cert.issued}
                      {cert.expires !== 'Sin vencimiento' && ` · ${cert.expires}`}
                    </span>
                    {cert.credentialId && (
                      <span className="text-zinc-600">ID: {cert.credentialId}</span>
                    )}
                    {!cert.credentialId && (
                      <span className="text-zinc-600">Sin vencimiento</span>
                    )}
                  </div>

                  {/* Button */}
                  <motion.a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-purple-500/40 text-purple-400 text-sm font-medium hover:border-purple-500/80 hover:bg-purple-500/10 transition-all duration-300"
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Ver credencial
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
