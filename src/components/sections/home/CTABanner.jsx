import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Calendar, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import MagneticButton from '../../ui/MagneticButton'

const perks = ['No setup fees', 'Cancel anytime', '30-day guarantee', 'NDA on Day 1']

export default function CTABanner() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="section-padding" style={{ background: 'var(--bg-base)' }}>
      <div className="container-mid" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'relative',
            textAlign: 'center',
            borderRadius: 28,
            padding: 'clamp(40px, 7vw, 72px) clamp(20px, 5vw, 40px)',
            overflow: 'hidden',
            background: 'var(--cta-card-bg)',
            border: '1px solid var(--cta-card-border)',
            boxShadow: 'var(--cta-card-shadow)',
          }}
        >
          {/* Animated ambient glow */}
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.08, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: 'radial-gradient(ellipse 75% 65% at 50% 50%, rgba(29,78,216,0.12) 0%, transparent 65%)',
            }}
          />

          {/* Corner orbs */}
          <div style={{ position: 'absolute', top: -50, left: -50, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(29,78,216,0.18) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -50, right: -50, width: 240, height: 240, borderRadius: '50%', background: 'radial-gradient(circle, rgba(5,150,105,0.16) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: -30, right: '20%', width: 150, height: 150, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.10) 0%, transparent 70%)', filter: 'blur(35px)', pointerEvents: 'none' }} />

          {/* Top edge highlight line */}
          <div style={{ position: 'absolute', top: 0, left: '8%', right: '8%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(29,78,216,0.55), transparent)', pointerEvents: 'none' }} />

          <div style={{ position: 'relative', zIndex: 10 }}>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.15 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                marginBottom: 24, padding: '7px 16px', borderRadius: 9999,
                fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--accent-pale)',
                background: 'rgba(29,78,216,0.12)',
                border: '1px solid rgba(29,78,216,0.28)',
              }}
            >
              <Calendar size={12} />
              Free 30-Min Consultation
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
                fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em',
                color: 'var(--text-heading)', margin: '0 0 20px',
              }}
            >
              Ready to Take Control of{' '}
              <br className="hidden sm:block" />
              <span style={{
                background: 'linear-gradient(135deg, #93C5FD, #1D4ED8)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                Your Finances?
              </span>
            </motion.h2>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.28 }}
              style={{ fontSize: '1.0625rem', color: 'var(--text-muted)', maxWidth: 500, margin: '0 auto 40px', lineHeight: 1.75 }}
            >
              Book a free discovery call. No pressure, no commitment — just an honest conversation about how Vanguard can help your business grow.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.36 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', marginBottom: 32 }}
            >
              <MagneticButton>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/contact"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      padding: '15px 34px', borderRadius: 12, fontSize: '1rem', fontWeight: 700,
                      color: 'white', textDecoration: 'none',
                      background: 'linear-gradient(135deg, #1D4ED8, #1E3A8A)',
                      boxShadow: '0 8px 32px rgba(29,78,216,0.45), inset 0 1px 0 rgba(255,255,255,0.14)',
                    }}
                  >
                    Book Free Call <ArrowRight size={18} />
                  </Link>
                </motion.div>
              </MagneticButton>
              <MagneticButton>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/services"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      padding: '15px 34px', borderRadius: 12, fontSize: '1rem', fontWeight: 600,
                      color: '#34D399', textDecoration: 'none',
                      border: '1.5px solid rgba(5,150,105,0.40)',
                      background: 'rgba(5,150,105,0.08)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    View Services
                  </Link>
                </motion.div>
              </MagneticButton>
            </motion.div>

            {/* Perk pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}
            >
              {perks.map((p, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  fontSize: 12, fontWeight: 600, color: 'var(--text-dim)',
                }}>
                  <CheckCircle2 size={13} style={{ color: '#059669' }} />
                  {p}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
