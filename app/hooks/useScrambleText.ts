import { useEffect, useState } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&'

export function useScrambleText(text: string, inView: boolean = false) {
  const [displayText, setDisplayText] = useState(text)

  useEffect(() => {
    if (!inView) {
      setDisplayText(text)
      return
    }

    let iteration = 0
    let intervalId: NodeJS.Timeout

    const animate = () => {
      const resolved = text.slice(0, iteration)
      const remaining = text
        .slice(iteration)
        .split('')
        .map(() => {
          return CHARS[Math.floor(Math.random() * CHARS.length)]
        })
        .join('')

      setDisplayText(resolved + remaining)
      iteration++

      if (iteration <= text.length) {
        intervalId = setTimeout(animate, 40)
      }
    }

    animate()

    return () => clearTimeout(intervalId)
  }, [inView, text])

  return displayText
}
