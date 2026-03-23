'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  baseOpacity: number
  color: string
  isStar: boolean
  phaseOffset: number
}

interface CursorState {
  x: number
  y: number
  active: boolean
  fadeOut: number
}

export default function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const cursorRef = useRef<CursorState>({
    x: 0,
    y: 0,
    active: false,
    fadeOut: 0,
  })
  const animationIdRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { willReadFrequently: true })
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()

    // Colors for particles
    const colors = [
      '#ffffff',
      '#c084fc',
      '#a855f7',
      '#7c3aed',
      '#e9d5ff',
    ]

    // Initialize particles (250-300)
    const initializeParticles = () => {
      particlesRef.current = []

      // Regular particles (280 total)
      for (let i = 0; i < 280; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.7 + 0.2,
          baseOpacity: Math.random() * 0.7 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          isStar: false,
          phaseOffset: Math.random() * Math.PI * 2,
        })
      }

      // Bright stars (12 total, larger)
      for (let i = 0; i < 12; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          size: 4,
          opacity: Math.random() * 0.3 + 0.7,
          baseOpacity: Math.random() * 0.3 + 0.7,
          color: '#ffffff',
          isStar: true,
          phaseOffset: Math.random() * Math.PI * 2,
        })
      }
    }

    initializeParticles()

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current.x = e.clientX
      cursorRef.current.y = e.clientY
      cursorRef.current.active = true
      cursorRef.current.fadeOut = 1
    }

    // Mouse leave handler
    const handleMouseLeave = () => {
      cursorRef.current.active = false
    }

    // Animation loop
    const animate = (time: number) => {
      // Draw gradient background (negro abajo, morado oscuro en centro, negro arriba)
      const gradientBg = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradientBg.addColorStop(0, '#000000')
      gradientBg.addColorStop(0.5, '#1a0035')
      gradientBg.addColorStop(1, '#000000')
      ctx.fillStyle = gradientBg
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw static nebula
      const nebulaCenterX = canvas.width * 0.25
      const nebulaCenterY = canvas.height * 0.4
      const nebulaGradient = ctx.createRadialGradient(
        nebulaCenterX,
        nebulaCenterY,
        0,
        nebulaCenterX,
        nebulaCenterY,
        300
      )
      nebulaGradient.addColorStop(0, 'rgba(126, 34, 206, 0.15)')
      nebulaGradient.addColorStop(1, 'rgba(126, 34, 206, 0)')
      ctx.fillStyle = nebulaGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw cursor glow
      if (cursorRef.current.fadeOut > 0) {
        const cursorGradient = ctx.createRadialGradient(
          cursorRef.current.x,
          cursorRef.current.y,
          0,
          cursorRef.current.x,
          cursorRef.current.y,
          200
        )
        cursorGradient.addColorStop(
          0,
          `rgba(168, 85, 247, ${0.3 * cursorRef.current.fadeOut})`
        )
        cursorGradient.addColorStop(
          1,
          `rgba(168, 85, 247, 0)`
        )
        ctx.fillStyle = cursorGradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Fade out glow when mouse is inactive
        if (!cursorRef.current.active) {
          cursorRef.current.fadeOut *= 0.95
        }
      }

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        // Calculate distance from cursor
        const dx = particle.x - cursorRef.current.x
        const dy = particle.y - cursorRef.current.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Repulsion effect
        const repulsionRadius = 120
        if (distance < repulsionRadius && cursorRef.current.fadeOut > 0.1) {
          const angle = Math.atan2(dy, dx)
          const force =
            (1 - distance / repulsionRadius) * 0.3 * cursorRef.current.fadeOut
          particle.vx += Math.cos(angle) * force
          particle.vy += Math.sin(angle) * force
        }

        // Apply velocity
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Apply friction
        particle.vx *= 0.98
        particle.vy *= 0.98

        // Flickering opacity with phase offset
        const flicker = Math.sin(time * 0.002 + particle.phaseOffset) * 0.3
        particle.opacity = Math.max(0.1, particle.baseOpacity + flicker)

        // Draw star with halo
        if (particle.isStar) {
          const haloGradient = ctx.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            particle.size * 4
          )
          haloGradient.addColorStop(0, `rgba(255, 255, 255, ${particle.opacity * 0.4})`)
          haloGradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
          ctx.fillStyle = haloGradient
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2)
          ctx.fill()
        }

        // Draw particle
        if (particle.color.startsWith('#')) {
          const hex = particle.color
          const r = parseInt(hex.slice(1, 3), 16)
          const g = parseInt(hex.slice(3, 5), 16)
          const b = parseInt(hex.slice(5, 7), 16)
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${particle.opacity})`
        }

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })

      animationIdRef.current = requestAnimationFrame(animate)
    }

    // Start animation
    animationIdRef.current = requestAnimationFrame(animate)

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('resize', setCanvasSize)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', setCanvasSize)
      if (animationIdRef.current !== null) {
        cancelAnimationFrame(animationIdRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{
        display: 'block',
        background: '#000000',
      }}
    />
  )
}
