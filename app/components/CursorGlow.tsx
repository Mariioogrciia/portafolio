'use client'

import { useEffect, useRef } from 'react'

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX - 200 + 'px'
        glowRef.current.style.top = e.clientY - 200 + 'px'
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={glowRef}
      className="fixed w-96 h-96 rounded-full pointer-events-none z-0 transition-opacity duration-300 opacity-0 hover:opacity-100"
      style={{
        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
        filter: 'blur(60px)',
        mixBlendMode: 'screen',
      }}
    />
  )
}

