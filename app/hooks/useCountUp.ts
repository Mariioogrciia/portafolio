import { useEffect, useState } from 'react'

interface UseCountUpOptions {
  end: number
  duration?: number
  start?: number
}

export function useCountUp({ end, duration = 1500, start = 0 }: UseCountUpOptions) {
  const [count, setCount] = useState(start)

  useEffect(() => {
    let animationFrameId: number
    let startTime: number | null = null

    const animate = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime
      }

      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function: easeOut
      const easeProgress = 1 - Math.pow(1 - progress, 3)

      const currentCount = Math.floor(easeProgress * (end - start) + start)
      setCount(currentCount)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [end, duration, start])

  return count
}
