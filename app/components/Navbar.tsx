'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

interface NavLink {
  label: string
  href: string
  id: string
}

const navLinks: NavLink[] = [
  { label: 'Inicio', href: '#hero', id: 'hero' },
  { label: 'Sobre mí', href: '#about', id: 'about' },
  { label: 'Proyectos', href: '#projects', id: 'projects' },
  { label: 'Certificaciones', href: '#certifications', id: 'certifications' },
  { label: 'Contacto', href: '#contact', id: 'contact' },
]

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string>('hero')

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-50px 0px -50px 0px',
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
    navLinks.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      navLinks.forEach(({ id }) => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [])

  return activeSection
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const activeSection = useActiveSection()

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo / Name */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full border-2 border-purple-500 flex items-center justify-center text-sm font-bold text-purple-400">
                MG
              </div>
              <span className="text-white font-semibold hidden sm:inline">Mario García</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id
                return (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    onClick={handleNavClick}
                    className="relative text-sm text-zinc-400 hover:text-purple-400 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500"
                        initial={false}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.a>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-purple-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            variants={{
              open: { opacity: 1, height: 'auto' },
              closed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-white/5"
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id
                return (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    onClick={handleNavClick}
                    className={`block text-sm py-2 px-3 rounded-lg transition-colors duration-300 ${
                      isActive
                        ? 'text-purple-400 bg-purple-500/10'
                        : 'text-zinc-400 hover:text-purple-400 hover:bg-purple-500/5'
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.label}
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>
      </nav>
    </>
  )
}
