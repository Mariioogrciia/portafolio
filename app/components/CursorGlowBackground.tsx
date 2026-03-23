'use client'

import { useEffect, useRef } from 'react'

export function CursorGlowBackground() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX - 150 + 'px'
        glowRef.current.style.top = e.clientY - 150 + 'px'
        glowRef.current.style.opacity = '1'
      }
    }

    const handleMouseLeave = () => {
      if (glowRef.current) {
        glowRef.current.style.opacity = '0'
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div
        ref={glowRef}
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-cyan-400/40 to-blue-500/40 blur-3xl transition-opacity duration-300 opacity-0"
        style={{
          mixBlendMode: 'screen',
          filter: 'blur(80px)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black" />
    </div>
  )
}
