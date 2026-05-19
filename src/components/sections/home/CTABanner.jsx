import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CTABanner() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="section-padding" style={{ background: '#111113' }}>
      <div className="container-mid" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'relative',
            textAlign: 'center',
            borderRadius: 24,
            padding: '64px 32px',
            overflow: 'hidden',
            background: 'linear-gradient(145deg, rgba(29,78,216,0.18) 0%, rgba(17,17,19,0.95) 55%, rgba(5,150,105,0.10) 100%)',
            border: '1px solid rgba(29,78,216,0.24)',
            boxShadow: '0 32px 80px rgba(0,0,0,0.45)',
          }}
        >
          {/* Animated radial fill */}
          <motion.div
            animate={{ opacity: [0.35, 0.60, 0.35], scale: [1, 1.06, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(29,78,216,0.10) 0%, transparent 65%)',
            }}
          />
          {/* Corner accent — Royal Blue top-left */}
          <div style={{
            position: 'absolute', top: -40, left: -40, width: 160, height: 160, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(29,78,216,0.16) 0%, transparent 70%)',
            filter: 'blur(30px)', pointerEvents: 'none',
          }} />
          {/* Corner accent — Emerald bottom-right */}
          <div style={{
            position: 'absolute', bottom: -40, right: -40, width: 200, height: 200, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(5,150,105,0.14) 0%, transparent 70%)',
            filter: 'blur(40px)', pointerEvents: 'none',
          }} />
          {/* Top edge highlight */}
          <div style={{
            position: 'absolute', top: 0, left: '10%', right: '10%', height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(29,78,216,0.50), transparent)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 10 }}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                marginBottom: 20, padding: '6px 14px', borderRadius: 9999,
                fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: '#93C5FD',
                background: 'rgba(29,78,216,0.10)',
                border: '1px solid rgba(29,78,216,0.26)',
              }}
            >
              <Calendar size={11} />
              Free Consultation
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.025em',
                color: '#F8FAFC', margin: '0 0 16px',
              }}
            >
              Ready to Take Control of{' '}
              <span style={{
                background: 'linear-gradient(135deg, #93C5FD, #1D4ED8)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                Your Finances?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              style={{ fontSize: '1rem', color: 'rgba(147,197,253,0.65)', maxWidth: 520, margin: '0 auto 36px', lineHeight: 1.75 }}
            >
              Book a free 30-minute discovery call. No pressure, no commitment — just clarity on how Vanguard can help your business grow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.5, delay: 0.36 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}
            >
              {/* Primary CTA — Royal Blue */}
              <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '14px 32px', borderRadius: 10, fontSize: '1rem', fontWeight: 700,
                    color: 'white', textDecoration: 'none',
                    background: 'linear-gradient(135deg, #1D4ED8, #1E3A8A)',
                    boxShadow: '0 8px 32px rgba(29,78,216,0.42), inset 0 1px 0 rgba(255,255,255,0.12)',
                  }}
                >
                  Book Free Call <ArrowRight size={18} />
                </Link>
              </motion.div>
              {/* Secondary CTA — Emerald outline */}
              <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/services"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '14px 32px', borderRadius: 10, fontSize: '1rem', fontWeight: 600,
                    color: '#34D399', textDecoration: 'none',
                    border: '1.5px solid rgba(5,150,105,0.38)',
                    background: 'rgba(5,150,105,0.07)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  View Services
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
