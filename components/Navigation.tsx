'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Shield } from 'lucide-react'

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Connect' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Detect active section
      const sections = ['hero', 'about', 'projects', 'experience', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        className={`fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-300 ${scrolled ? 'py-0' : 'py-2'}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div
          className={`pointer-events-auto px-6 py-3 rounded-full flex items-center gap-8 border transition-all duration-500 ${scrolled
            ? 'bg-black/60 backdrop-blur-xl border-white/10 shadow-[0_0_20px_rgba(0,240,255,0.1)]'
            : 'bg-transparent border-transparent'
            }`}
        >
          {/* Logo */}
          <a href="#" aria-label="FORNEXT - Return to homepage" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-acid-green flex items-center justify-center text-black font-bold">
              <Shield className="w-4 h-4 fill-current" />
            </div>
            <span className="font-display font-bold text-lg hidden sm:block tracking-tight group-hover:text-acid-green transition-colors">
              FORNEXT
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '')
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative text-sm font-medium transition-colors hover:text-white ${isActive ? 'text-acid-green' : 'text-text-secondary'
                      }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-acid-green"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-white/80 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ul className="flex flex-col items-center gap-8 text-2xl font-display font-bold">
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  whileHover={{ scale: 1.1, x: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white hover:text-acid-green transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

