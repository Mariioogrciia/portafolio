'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Users, Calendar, Trophy, BarChart3, Zap, ImageIcon, User, Wrench, ArrowLeft, Monitor } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function FutbolProjectPage() {
  const router = useRouter()
  const [isNavigating, setIsNavigating] = useState(false)

  const handleBackClick = () => {
    setIsNavigating(true)
    setTimeout(() => router.push('/'), 500)
  }
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const features = [
    {
      icon: Users,
      title: '👥 Plantilla de jugadores',
      description: 'Perfiles de cada jugador con foto, estadísticas personales, goles, partidos jugados y descripción personalizada',
    },
    {
      icon: Calendar,
      title: '📅 Calendario y partidos',
      description: 'Registro de todos los partidos de la temporada con resultados, fecha, rival y estadísticas por partido',
    },
    {
      icon: Trophy,
      title: '🏆 Clasificación de liga',
      description: 'Tabla de clasificación completa con todos los equipos del grupo: puntos, victorias, goles y diferencia de goles',
    },
    {
      icon: BarChart3,
      title: '📊 Estadísticas del equipo',
      description: 'Dashboard con resumen de temporada: partidos, victorias, empates, derrotas, goles a favor/contra y máximos goleadores',
    },
    {
      icon: Zap,
      title: '🎰 Apuestas virtuales',
      description: 'Sistema de apuestas con puntos virtuales entre los miembros del equipo. Apuesta al resultado de cada partido y compite con tus compañeros',
    },
    {
      icon: ImageIcon,
      title: '🖼️ Galería de imágenes',
      description: 'Galería de fotos del equipo gestionada por el admin: momentos dentro y fuera del campo durante la temporada',
    },
    {
      icon: User,
      title: '👤 Tarjeta de jugador editable',
      description: 'Cada jugador puede editar su propia tarjeta: foto de perfil visible en la plantilla, descripción personal, posición en el campo y dorsal. El perfil refleja los cambios en tiempo real para todo el equipo.',
    },
    {
      icon: Calendar,
      title: '✅ Confirmación de asistencia',
      description: 'Los jugadores confirman o rechazan su asistencia a cada partido desde su panel personal. El admin ve en tiempo real cuántos jugadores están confirmados para cada partido.',
    },
    {
      icon: Wrench,
      title: '🛠️ Panel de administración',
      description: 'Dashboard de admin con gestión total: usuarios, partidos, apuestas y galería de imágenes desde un panel centralizado',
    },
  ]

  const stats = [
    { label: 'Real', description: 'Proyecto desplegado y en uso por el equipo' },
    { label: '3 roles', description: 'Admin, jugador y usuario con permisos diferenciados' },
    { label: 'Full Stack', description: 'Frontend + Backend + Base de datos' },
    { label: 'En producción', description: 'Desplegado en Vercel, activo esta temporada' },
  ]

  const techStack = [
    { name: 'Next.js 14', description: 'Framework principal con App Router' },
    { name: 'TypeScript', description: 'Tipado estático en todo el proyecto' },
    { name: 'Supabase', description: 'Base de datos (PostgreSQL), autenticación y storage de imágenes. Gestiona TODOS los datos de la aplicación.' },
    { name: 'TailwindCSS', description: 'Diseño responsive mobile-first' },
    { name: 'Vercel', description: 'Despliegue continuo en producción' },
  ]

  const learnings = [
    {
      icon: '🔐',
      title: 'Autenticación y roles',
      description: 'Implementar un sistema de roles (admin/usuario) con Supabase Auth y proteger rutas según permisos fue el mayor aprendizaje del proyecto',
    },
    {
      icon: '🎰',
      title: 'Lógica de apuestas',
      description: 'Diseñar el sistema de puntos virtuales, validar apuestas y calcular resultados automáticamente al registrar el marcador',
    },
    {
      icon: '📱',
      title: 'UX para usuarios reales',
      description: 'El proyecto lo usan mis compañeros de equipo, así que aprendí a diseñar pensando en usuarios no técnicos y a recoger feedback real',
    },
  ]

  return (
    <>
      {/* Fondo personalizado */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, #052e16 0%, #000000 70%)',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Patrón de campo sutil */}
      <div
        className="fixed inset-0 -z-10 opacity-40"
        style={{
          backgroundImage: `url('data:image/svg+xml,${encodeURIComponent(
            `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="field" width="100" height="100" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="0" x2="100" y2="100" stroke="%230a3d1a" stroke-width="0.5" opacity="0.3"/>
                  <line x1="100" y1="0" x2="0" y2="100" stroke="%230a3d1a" stroke-width="0.5" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(%23field)"/>
            </svg>`
          )}')`,
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Watermark balón de fútbol */}
      <div
        className="fixed inset-0 -z-10 flex items-center justify-center pointer-events-none"
        style={{
          opacity: 0.04,
          fontSize: '40vw',
        }}
      >
        ⚽
      </div>

      {/* Navbar personalizado */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-green-900/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <motion.button
            onClick={handleBackClick}
            className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-300"
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Volver</span>
          </motion.button>

          <h2 className="text-lg font-bold text-white">Impersed Cubiertas FC</h2>

          <div className="w-20" />
        </div>
      </nav>

      {/* Overlay de transición */}
      {isNavigating && (
        <motion.div
          className="fixed inset-0 bg-black z-[999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}

      <main className="relative z-20 min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen w-full flex items-center justify-center px-4 py-20 bg-transparent">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] -z-10 rounded-none" />

          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-green-950/60 backdrop-blur-sm border border-green-800/50 text-green-400 text-sm font-medium">
                Proyecto Real en Producción
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-black text-white mb-6 leading-tight"
              style={{
                textShadow: '0 0 80px rgba(0,0,0,1), 0 2px 20px rgba(0,0,0,0.9)',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                textWrap: 'balance',
              }}
            >
              Plataforma Web Impersed Cubiertas FC
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-200 mb-12 mx-auto text-balance text-left"
              style={{ textShadow: '0 0 40px rgba(0,0,0,0.8)', maxWidth: '55ch' }}
            >
              Web completa para la gestión de un equipo de fútbol sala real: estadísticas, clasificación, galería, apuestas con puntos virtuales y panel de administración total.
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap">
              <motion.a
                href="https://v0-futbol7.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 text-black font-bold rounded-xl border border-green-500/30 hover:border-green-400 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34, 197, 94, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5" />
                Ver demo
              </motion.a>

              <motion.a
                href="https://github.com/Mariioogrciia/futbol7"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-green-700/50 text-green-300 font-bold rounded-xl hover:border-green-400 hover:text-green-200 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
                Ver código
              </motion.a>
            </motion.div>
          </motion.div>
        </section>

        {/* Preview del proyecto */}
        <section className="relative py-20 px-4 bg-transparent">
          <div className="absolute inset-0 bg-green-900/10 backdrop-blur-[2px] -z-10 rounded-none" />

          <motion.div
            className="max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="rounded-xl border border-green-800/50 bg-black/65 backdrop-blur-md p-3 md:p-4"
              style={{ boxShadow: '0 0 40px rgba(34, 197, 94, 0.15)' }}
            >
              <div className="rounded-lg overflow-hidden border border-green-900/40 bg-gradient-to-br from-[#0f1f0f] to-black min-h-[220px] md:min-h-[380px] flex items-center justify-center">
                <img
                  src="/images/impersed/preview-futbol7.png"
                  alt="Vista previa de la aplicación de Impersed Cubiertas FC"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget
                    target.style.display = 'none'
                    const fallback = target.nextElementSibling as HTMLElement | null
                    if (fallback) fallback.style.display = 'flex'
                  }}
                />
                <div className="hidden w-full h-full items-center justify-center text-center px-6">
                  <div>
                    <Monitor className="w-10 h-10 text-green-400 mx-auto mb-3" />
                    <p className="text-gray-200 text-left max-w-md">Añade una captura en public/images/impersed/preview-futbol7.png para mostrar la interfaz real de la app.</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-300 text-center mt-4">Vista previa de la aplicación en producción</p>
            </motion.div>
          </motion.div>
        </section>

        {/* Qué es el proyecto */}
        <section className="relative py-20 px-4 bg-transparent">
          <div className="absolute inset-0 bg-green-900/10 backdrop-blur-[2px] -z-10 rounded-none" />

          <motion.div
            className="max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="mb-12">
              <h2 className="text-white mb-4 text-center" style={{ textShadow: '0 0 40px rgba(0,0,0,0.8)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700 }}>
                ¿Qué es el proyecto?
              </h2>
              <p className="text-lg text-gray-100 text-balance leading-relaxed text-left mx-auto" style={{ maxWidth: '65ch' }}>
                Aplicación web full stack creada para gestionar la temporada del equipo Impersed Cubiertas FC en la Liga Fútbol 7 de Rivas Vaciamadrid. Cualquier miembro del equipo puede registrarse, ver estadísticas, participar en apuestas virtuales y personalizar su perfil. El administrador tiene control total sobre partidos, usuarios, apuestas y la galería de imágenes del equipo. Todo construido con Supabase como backend completo: base de datos PostgreSQL, autenticación de usuarios y almacenamiento de imágenes.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-black/70 backdrop-blur-md border border-green-900/40 rounded-xl p-6 hover:border-green-500/60 transition-all duration-300"
                  style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.6), inset 0 1px 0 rgba(34, 197, 94, 0.08)' }}
                  whileHover={{ boxShadow: '0 0 20px rgba(34, 197, 94, 0.2)' }}
                >
                  <div className="text-3xl font-bold text-green-400 mb-2">{stat.label}</div>
                  <p className="text-gray-300 text-sm text-left">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Funcionalidades */}
        <section className="relative py-20 px-4 bg-transparent">
          <div className="absolute inset-0 bg-green-900/10 backdrop-blur-[2px] -z-10 rounded-none" />

          <motion.div
            className="max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-white mb-12 text-center"
              style={{ textShadow: '0 0 40px rgba(0,0,0,0.8)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700 }}
            >
              Funcionalidades
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {features.map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="bg-black/70 backdrop-blur-md border border-green-900/40 rounded-xl p-6 min-h-[260px] h-full flex flex-col hover:border-green-500/60 transition-all duration-300"
                    style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.6), inset 0 1px 0 rgba(34, 197, 94, 0.08)' }}
                    whileHover={{ boxShadow: '0 0 20px rgba(34, 197, 94, 0.2)' }}
                  >
                    <div className="text-3xl mb-4">{feature.title.split(' ')[0]}</div>
                    <h3 className="text-lg font-semibold text-white mb-3">{feature.title.split(' ').slice(1).join(' ')}</h3>
                    <p className="text-gray-300 text-sm flex-grow text-left">{feature.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </section>

        {/* Stack Técnico */}
        <section className="relative py-20 px-4 bg-transparent">
          <div className="absolute inset-0 bg-green-900/10 backdrop-blur-[2px] -z-10 rounded-none" />

          <motion.div
            className="max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-white mb-12 text-center"
              style={{ textShadow: '0 0 40px rgba(0,0,0,0.8)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700 }}
            >
              Stack Técnico
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {techStack.map((tech, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-black/70 backdrop-blur-md border border-green-900/40 rounded-xl p-6 hover:border-green-500/60 transition-all duration-300"
                  style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.6), inset 0 1px 0 rgba(34, 197, 94, 0.08)' }}
                  whileHover={{ boxShadow: '0 0 20px rgba(34, 197, 94, 0.2)' }}
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-300 text-sm text-left">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Roles de Usuario */}
        <section className="relative py-20 px-4 bg-transparent">
          <div className="absolute inset-0 bg-green-900/10 backdrop-blur-[2px] -z-10 rounded-none" />

          <motion.div
            className="max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-white mb-12 text-center"
              style={{ textShadow: '0 0 40px rgba(0,0,0,0.8)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700 }}
            >
              Roles de Usuario
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {/* Jugador */}
              <motion.div
                variants={itemVariants}
                className="bg-black/70 backdrop-blur-md border border-green-900/40 rounded-xl p-8 hover:border-green-500/60 transition-all duration-300 relative"
                style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.6), inset 0 1px 0 rgba(34, 197, 94, 0.08)' }}
                whileHover={{ boxShadow: '0 0 20px rgba(34, 197, 94, 0.2)' }}
              >
                <div className="absolute top-4 right-4 px-3 py-1 bg-green-950 border border-green-700 rounded-full">
                  <span className="text-xs font-bold text-green-300">← jugador</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-6">Jugador</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 font-bold mt-1">✓</span>
                    <span className="text-gray-100">Ver plantilla, partidos y clasificación</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 font-bold mt-1">✓</span>
                    <span className="text-gray-100">Editar su perfil de jugador (descripción personal, posición, dorsal)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 font-bold mt-1">✓</span>
                    <span className="text-gray-100">Confirmar o rechazar asistencia a cada partido desde su panel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 font-bold mt-1">✓</span>
                    <span className="text-gray-100">Conocer las estadísticas de su equipo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 font-bold mt-1">✓</span>
                    <span className="text-gray-100">Participar en apuestas virtuales con puntos del equipo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 font-bold mt-1">✓</span>
                    <span className="text-gray-100">Ver la galería de imágenes del equipo</span>
                  </li>
                </ul>
              </motion.div>

              {/* Administrador */}
              <motion.div
                variants={itemVariants}
                className="bg-black/70 backdrop-blur-md border border-red-900/40 rounded-xl p-8 hover:border-red-500/60 transition-all duration-300 relative"
                style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.6), inset 0 1px 0 rgba(239, 68, 68, 0.08), 0 0 30px rgba(239, 68, 68, 0.2)' }}
                whileHover={{ boxShadow: '0 4px 24px rgba(0,0,0,0.6), inset 0 1px 0 rgba(239, 68, 68, 0.08), 0 0 40px rgba(239, 68, 68, 0.3)' }}
              >
                <div className="absolute top-4 right-4 px-3 py-1 bg-red-950 border border-red-700 rounded-full">
                  <span className="text-xs font-bold text-red-300">admin →</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-6">Administrador</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold mt-1">⚡</span>
                    <span className="text-gray-100">Todo lo del jugador</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold mt-1">⚡</span>
                    <span className="text-gray-100">Crear y gestionar partidos (fecha, hora, rival, campo, cambios del día)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold mt-1">⚡</span>
                    <span className="text-gray-100">Ver confirmaciones de asistencia de todos los jugadores</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold mt-1">⚡</span>
                    <span className="text-gray-100">Gestionar y publicar y eliminar y añadir y editar todos los datos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold mt-1">⚡</span>
                    <span className="text-gray-100">Administrar la galería (subir y eliminar fotos)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold mt-1">⚡</span>
                    <span className="text-gray-100">Configurar estadísticas globales de la plataforma</span>
                  </li>
                </ul>
              </motion.div>

              {/* Visitante */}
              <motion.div
                variants={itemVariants}
                className="bg-black/70 backdrop-blur-md border border-blue-900/40 rounded-xl p-8 hover:border-blue-500/60 transition-all duration-300 relative"
                style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.6), inset 0 1px 0 rgba(107, 114, 128, 0.08)' }}
                whileHover={{ boxShadow: '0 0 20px rgba(107, 114, 128, 0.15)' }}
              >
                <div className="absolute top-4 right-4 px-3 py-1 bg-blue-950 border border-blue-700 rounded-full">
                  <span className="text-xs font-bold text-blue-300">← Visitante</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-6">Visitante</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 font-bold mt-1">•</span>
                    <span className="text-gray-100">Ver todo sin registrarse</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 font-bold mt-1">•</span>
                    <span className="text-gray-100">Consultar plantilla, clasificación y estadísticas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 font-bold mt-1">•</span>
                    <span className="text-gray-100">Ver galería de imágenes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold mt-1">✗</span>
                    <span className="text-gray-100">NO puede apuntarse ni confirmar asistencia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold mt-1">✗</span>
                    <span className="text-gray-100">NO puede editar ningún perfil</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Aprendizajes */}
        <section className="relative py-20 px-4 bg-transparent">
          <div className="absolute inset-0 bg-green-900/10 backdrop-blur-[2px] -z-10 rounded-none" />

          <motion.div
            className="max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-white mb-12 text-center"
              style={{ textShadow: '0 0 40px rgba(0,0,0,0.8)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700 }}
            >
              Aprendizajes
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {learnings.map((learning, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-black/70 backdrop-blur-md border border-green-900/40 rounded-xl p-8 min-h-[260px] h-full hover:border-green-500/60 transition-all duration-300"
                  style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.6), inset 0 1px 0 rgba(34, 197, 94, 0.08)' }}
                  whileHover={{ boxShadow: '0 0 20px rgba(34, 197, 94, 0.2)' }}
                >
                  <div className="text-4xl mb-4">{learning.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{learning.title}</h3>
                  <p className="text-gray-300 text-sm text-left">{learning.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA Final */}
        <section className="relative py-20 px-4 bg-transparent">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-green-700/10 to-green-900/20 backdrop-blur-[2px] -z-10 rounded-none" />

          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-white mb-6"
              style={{ textShadow: '0 0 40px rgba(0,0,0,0.8)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700 }}
            >
              ¿Te interesa este proyecto?
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg text-gray-100 mb-3 text-balance text-left mx-auto" style={{ maxWidth: '60ch' }}>
              Explora el código o accede a la demo en vivo.
            </motion.p>

            <motion.p variants={itemVariants} className="text-sm text-green-200/90 mb-10 text-center">
              Accede al código o prueba la demo en vivo.
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap">
              <motion.a
                href="https://v0-futbol7.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-gradient-to-r from-green-600 to-green-500 text-black font-bold rounded-xl border border-green-500/30 hover:border-green-400 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34, 197, 94, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5" />
                Ver demo en vivo
              </motion.a>

              <motion.a
                href="https://github.com/Mariioogrciia/futbol7"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 border border-green-700/50 text-green-300 font-bold rounded-xl hover:border-green-400 hover:text-green-200 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
                Código en GitHub
              </motion.a>

              <motion.button
                onClick={handleBackClick}
                className="px-10 py-5 bg-green-600/20 border border-green-700/50 text-green-300 font-bold rounded-xl hover:border-green-500/80 hover:bg-green-600/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Volver al portafolio
              </motion.button>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  )
}
