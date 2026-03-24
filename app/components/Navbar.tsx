'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useScrollDirection } from '@/app/hooks/useScrollDirection'
import { useActiveSection } from '@/app/hooks/useActiveSection'

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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const activeSection = useActiveSection()
  const { scrollDirection, scrollY } = useScrollDirection()

  const isScrolledDown = scrollDirection === 'down' && scrollY > 100
  const isAtTop = scrollY < 50

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: isAtTop ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, 0.7)',
        backdropFilter: isAtTop ? 'none' : 'blur(12px)',
        borderBottomColor: isAtTop ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 0.05)',
        borderBottomWidth: '1px',
      }}
      animate={{
        y: isScrolledDown ? -80 : 0,
      }}
      transition={{ duration: 0.3 }}
    >
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
                <motion.div
                  key={link.id}
                  className="relative overflow-visible"
                >
                  <motion.a
                    href={link.href}
                    onClick={handleNavClick}
                    className="relative text-sm text-zinc-400 hover:text-purple-400 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 block py-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    {link.label}
                  </motion.a>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        key={link.id}
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        exit={{ opacity: 0, scaleX: 0 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-400 rounded-full origin-left"
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-purple-400 transition-colors focus-visible:outline-2 focus-visible:outline-purple-500"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
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
                  className={`block text-sm py-2 px-3 rounded-lg transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-purple-500 ${
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
    </motion.nav>
  )
}
