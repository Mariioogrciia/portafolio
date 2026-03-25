'use client'

import { useEffect, useRef } from 'react'

// TypeScript Interfaces
interface Star {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
  targetOpacity: number
  color: string
  originX: number
  originY: number
}

interface GridPoint {
  x: number
  y: number
  originX: number
  originY: number
  opacity: number
}

interface Meteor {
  x: number
  y: number
  vx: number
  vy: number
  length: number
  opacity: number
  color: string
}

interface CursorState {
  x: number
  y: number
  active: boolean
  lastMoveTime: number
  speed: number
}

export default function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const gridPointsRef = useRef<GridPoint[]>([])
  const meteorsRef = useRef<Meteor[]>([])
  const cursorRef = useRef<CursorState>({
    x: -1000,
    y: -1000,
    active: false,
    lastMoveTime: 0,
    speed: 0,
  })
  const lastMeteorTimeRef = useRef<number>(0)
  const animationIdRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: false })
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1

    // Set canvas size with device pixel ratio
    const setCanvasSize = () => {
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.scale(dpr, dpr)
    }
    setCanvasSize()

    const width = window.innerWidth
    const height = window.innerHeight
    const isMobile = width < 768

    // Initialize stars (250 particles)
    const initializeStars = () => {
      starsRef.current = []
      const starColors = ['#ffffff', '#c084fc', '#a855f7']

      for (let i = 0; i < 250; i++) {
        starsRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.6 + 0.3,
          targetOpacity: Math.random() * 0.6 + 0.3,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          originX: Math.random() * width,
          originY: Math.random() * height,
        })
      }
    }

    // Initialize grid points
    const initializeGridPoints = () => {
      gridPointsRef.current = []
      const cols = isMobile ? 40 : 80
      const rows = isMobile ? 22 : 45
      const cellWidth = width / cols
      const cellHeight = height / rows

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          gridPointsRef.current.push({
            x: i * cellWidth + cellWidth / 2,
            y: j * cellHeight + cellHeight / 2,
            originX: i * cellWidth + cellWidth / 2,
            originY: j * cellHeight + cellHeight / 2,
            opacity: 0.16,
          })
        }
      }
    }

    initializeStars()
    initializeGridPoints()

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now()
      const prevX = cursorRef.current.x
      const prevY = cursorRef.current.y
      const prevTime = cursorRef.current.lastMoveTime

      if (prevTime > 0 && prevX > -999 && prevY > -999) {
        const dt = Math.max(now - prevTime, 1)
        const distance = Math.hypot(e.clientX - prevX, e.clientY - prevY)
        cursorRef.current.speed = distance / dt
      }

      cursorRef.current.x = e.clientX
      cursorRef.current.y = e.clientY
      cursorRef.current.active = true
      cursorRef.current.lastMoveTime = now
    }

    // Mouse leave handler
    const handleMouseLeave = () => {
      cursorRef.current.active = false
      cursorRef.current.x = -1000
      cursorRef.current.y = -1000
      cursorRef.current.speed = 0
    }

    // Resize handler
    const handleResize = () => {
      setCanvasSize()
    }

    // Animation loop
    const animate = (time: number) => {
      // Draw black background
      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, width, height)

      // Effect 3: Black hole gradient (pulsing center)
      const blackHoleCenterX = width * 0.5
      const blackHoleCenterY = height * 0.55
      const baseRadius = height * 0.45
      const pulsing = Math.sin(time * 0.0005) * 0.1
      const blackHoleRadius = baseRadius * (1 + pulsing)

      const blackHoleGradient = ctx.createRadialGradient(
        blackHoleCenterX,
        blackHoleCenterY,
        0,
        blackHoleCenterX,
        blackHoleCenterY,
        blackHoleRadius
      )
      blackHoleGradient.addColorStop(0, 'rgba(0, 0, 0, 0)')
      blackHoleGradient.addColorStop(0.3, 'rgba(88, 28, 163, 0.08)')
      blackHoleGradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.12)')
      blackHoleGradient.addColorStop(0.7, 'rgba(88, 28, 163, 0.06)')
      blackHoleGradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

      ctx.fillStyle = blackHoleGradient
      ctx.beginPath()
      ctx.arc(
        blackHoleCenterX,
        blackHoleCenterY,
        blackHoleRadius,
        0,
        Math.PI * 2
      )
      ctx.fill()

      // Core nucleus
      const coreGradient = ctx.createRadialGradient(
        blackHoleCenterX,
        blackHoleCenterY,
        0,
        blackHoleCenterX,
        blackHoleCenterY,
        80
      )
      coreGradient.addColorStop(0, 'rgba(167, 139, 250, 0.15)')
      coreGradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = coreGradient
      ctx.beginPath()
      ctx.arc(blackHoleCenterX, blackHoleCenterY, 80, 0, Math.PI * 2)
      ctx.fill()

      // Effect 1: Draw and update stars
      starsRef.current.forEach((star) => {
        // Calculate distance from cursor
        const dx = star.x - cursorRef.current.x
        const dy = star.y - cursorRef.current.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        const timeSinceMove = time - cursorRef.current.lastMoveTime
        const movementBoost = Math.min(cursorRef.current.speed * 0.035, 1)
        const movementPulse = Math.max(0, 1 - timeSinceMove / 120)
        const interaction = movementPulse * (0.45 + movementBoost)

        // Smaller interaction radius with movement-driven force.
        const repulsionRadius = 70
        if (distance < repulsionRadius && cursorRef.current.active && interaction > 0.05) {
          const angle = Math.atan2(dy, dx)
          const force = ((repulsionRadius - distance) / repulsionRadius) * 12 * interaction
          star.vx += Math.cos(angle) * (force / 100)
          star.vy += Math.sin(angle) * (force / 100)
        }

        // Apply velocity
        star.x += star.vx
        star.y += star.vy

        // Wrap around edges
        if (star.x < 0) star.x = width
        if (star.x > width) star.x = 0
        if (star.y < 0) star.y = height
        if (star.y > height) star.y = 0

        // Lerp back to origin when not repelled
        if (distance > repulsionRadius || !cursorRef.current.active) {
          star.x += (star.originX - star.x) * 0.002
          star.y += (star.originY - star.y) * 0.002
        }

        // Damping
        star.vx *= 0.98
        star.vy *= 0.98

        // Twinkling effect
        star.targetOpacity += (Math.random() - 0.5) * 0.02
        star.targetOpacity = Math.max(0.1, Math.min(1, star.targetOpacity))
        star.opacity += (star.targetOpacity - star.opacity) * 0.1

        // Draw star
        ctx.fillStyle = `${star.color}${Math.floor(star.opacity * 255).toString(16).padStart(2, '0')}`
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Effect 1: Draw and update grid points (force field)
      gridPointsRef.current.forEach((point) => {
        // Calculate distance from cursor
        const dx = point.x - cursorRef.current.x
        const dy = point.y - cursorRef.current.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        const timeSinceMove = time - cursorRef.current.lastMoveTime
        const movementBoost = Math.min(cursorRef.current.speed * 0.035, 1)
        const movementPulse = Math.max(0, 1 - timeSinceMove / 120)
        const interaction = movementPulse * (0.45 + movementBoost)

        // Smaller and softer cursor radius with a stronger feel while moving.
        const repulsionRadius = 75
        if (distance < repulsionRadius && cursorRef.current.active && interaction > 0.05) {
          const angle = Math.atan2(dy, dx)
          const force = (repulsionRadius - distance) / repulsionRadius * 10 * interaction
          point.x += Math.cos(angle) * force
          point.y += Math.sin(angle) * force
          point.opacity = 0.45 + interaction * 0.25
        } else {
          // Lerp back to origin
          point.x += (point.originX - point.x) * 0.08
          point.y += (point.originY - point.y) * 0.08
          point.opacity += (0.16 - point.opacity) * 0.1
        }

        // Draw grid point
        ctx.fillStyle = `rgba(168, 85, 247, ${point.opacity})`
        ctx.beginPath()
        ctx.arc(point.x, point.y, 1, 0, Math.PI * 2)
        ctx.fill()
      })

      // Effect 2: Spawn meteorites (every 2500ms, max 3 simultaneous)
      if (time - lastMeteorTimeRef.current > 2500 && !isMobile && meteorsRef.current.length < 3) {
        lastMeteorTimeRef.current = time
        const meteorColors = ['#c084fc', '#a855f7', '#ffffff']
        meteorsRef.current.push({
          x: Math.random() * width,
          y: -20,
          vx: Math.random() * 3 + 3,
          vy: Math.random() * 4 + 4,
          length: Math.random() * 70 + 80,
          opacity: 1,
          color: meteorColors[Math.floor(Math.random() * meteorColors.length)],
        })
      }

      // Update and draw meteorites
      meteorsRef.current = meteorsRef.current.filter((meteor) => {
        meteor.x += meteor.vx
        meteor.y += meteor.vy
        meteor.opacity -= 0.012

        if (meteor.opacity <= 0 || meteor.y > height) {
          return false
        }

        // Draw gradient trail
        const trailGradient = ctx.createLinearGradient(
          meteor.x,
          meteor.y,
          meteor.x - meteor.vx * meteor.length,
          meteor.y - meteor.vy * meteor.length
        )
        trailGradient.addColorStop(0, `${meteor.color}${Math.floor(meteor.opacity * 255).toString(16).padStart(2, '0')}`)
        trailGradient.addColorStop(1, `${meteor.color}00`)

        ctx.strokeStyle = trailGradient
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(meteor.x, meteor.y)
        ctx.lineTo(
          meteor.x - meteor.vx * meteor.length,
          meteor.y - meteor.vy * meteor.length
        )
        ctx.stroke()

        return true
      })

      animationIdRef.current = requestAnimationFrame(animate)
    }

    // Start animation
    animationIdRef.current = requestAnimationFrame(animate)

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', handleResize)
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
        willChange: 'transform',
      }}
    />
  )
}
