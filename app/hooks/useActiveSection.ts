'use client'

import { useEffect, useState } from 'react'

const sectionIds = ['hero', 'about', 'projects', 'certifications', 'contact']

export function useActiveSection(): string {
  const [activeSection, setActiveSection] = useState<string>('hero')

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '-20% 0px -60% 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          if (sectionId) {
            setActiveSection(sectionId)
          }
        }
      })
    }, observerOptions)

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [])

  return activeSection
}
