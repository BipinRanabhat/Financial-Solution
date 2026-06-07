import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../../constants/navigation'
import ThemeToggle from '../ui/ThemeToggle'
import MagneticButton from '../ui/MagneticButton'

export default function Navbar() {
  const [isScrolled, setIsScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen]   = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <motion.header
      animate={isScrolled
        ? { backgroundColor: 'var(--bg-nav)', backdropFilter: 'blur(16px)', borderBottomColor: 'var(--border-medium)' }
        : { backgroundColor: 'rgba(0,0,0,0)', backdropFilter: 'blur(0px)', borderBottomColor: 'rgba(0,0,0,0)' }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 border-b"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="/logo.png"
              alt="Vanguard"
              style={{ height: 80, width: 'auto', objectFit: 'contain', filter: 'var(--logo-filter)' }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${pathname === path
                    ? 'text-electric bg-electric/10'
                    : 'text-sky/65 hover:text-frost hover:bg-white/5'}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Theme toggle + CTA + hamburger */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <MagneticButton strength={0.28}>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold"
                  style={{
                    background: 'linear-gradient(135deg, #1D4ED8, #1E3A8A)',
                    color: 'white',
                    boxShadow: '0 4px 14px rgba(29,78,216,0.35)',
                  }}
                >
                  Get Started
                </Link>
              </motion.div>
            </MagneticButton>
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="md:hidden p-2 rounded-lg transition-colors"
              style={{ color: 'var(--text-dim)', background: 'none', border: 'none', cursor: 'pointer' }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{  opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t"
            style={{ borderTopColor: 'var(--border-subtle)', background: 'var(--bg-nav)' }}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map(({ label, path }) => (
                <Link
                  key={path}
                  to={path}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors
                    ${pathname === path ? 'text-electric bg-electric/10' : 'text-sky/65 hover:text-frost hover:bg-white/5'}`}
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 px-4 py-3 rounded-lg text-sm font-semibold text-center text-white"
                style={{ background: 'linear-gradient(135deg, #1D4ED8, #1E3A8A)' }}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
