import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Home } from 'lucide-react'
import PageWrapper from '../components/layout/PageWrapper'

const ease = [0.22, 1, 0.36, 1]

export default function NotFound() {
  return (
    <PageWrapper>
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-hero)',
        position: 'relative',
        overflow: 'hidden',
        padding: '120px 24px 80px',
      }}>
        {/* Background orbs */}
        <div style={{ position: 'absolute', top: '20%', left: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(29,78,216,0.10) 0%, transparent 70%)', filter: 'blur(70px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '20%', right: '10%', width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(5,150,105,0.08) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

        <div style={{ textAlign: 'center', maxWidth: 560, position: 'relative', zIndex: 10 }}>
          {/* 404 number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease }}
            style={{
              fontSize: 'clamp(7rem, 20vw, 14rem)',
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: '-0.05em',
              background: 'var(--gradient-text-blue)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: 8,
              userSelect: 'none',
            }}
          >
            404
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            style={{ height: 2, width: 64, background: 'linear-gradient(90deg, #1D4ED8, #059669)', borderRadius: 2, margin: '0 auto 32px', transformOrigin: 'center' }}
          />

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 800, color: 'var(--text-heading)', marginBottom: 14, letterSpacing: '-0.02em' }}
          >
            Page Not Found
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease }}
            style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: 40 }}
          >
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32, ease }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '13px 28px', borderRadius: 10,
                  background: 'linear-gradient(135deg, #1D4ED8, #1E3A8A)',
                  color: '#fff', fontSize: 14, fontWeight: 700, textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(29,78,216,0.35)',
                }}
              >
                <Home size={16} /> Go Back Home
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '13px 28px', borderRadius: 10,
                  border: '1.5px solid rgba(29,78,216,0.30)',
                  background: 'rgba(29,78,216,0.06)',
                  color: 'var(--accent-pale)', fontSize: 14, fontWeight: 600, textDecoration: 'none',
                }}
              >
                Contact Us <ArrowRight size={15} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
