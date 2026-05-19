import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Shield, Award, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const WORDS = ['Precision.', 'Confidence.', 'Growth.', 'Excellence.']

const badges = [
  { Icon: Shield,     label: 'CPA Certified' },
  { Icon: Award,      label: '8+ Years Trusted' },
  { Icon: TrendingUp, label: '$50M+ Managed' },
]

const ease = [0.22, 1, 0.36, 1]

function MiniBarChart() {
  const bars = [48, 62, 42, 76, 55, 88, 63, 95, 71, 84]
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 60, padding: '0 2px' }}>
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.5, delay: 0.85 + i * 0.055, ease: [0.22, 1, 0.36, 1] }}
          style={{
            flex: 1,
            height: `${h}%`,
            background: i === 7
              ? 'linear-gradient(to top, #1D4ED8, #93C5FD)'
              : i === 9
                ? 'rgba(29,78,216,0.45)'
                : 'rgba(29,78,216,0.22)',
            borderRadius: '3px 3px 0 0',
            transformOrigin: 'bottom',
          }}
        />
      ))}
    </div>
  )
}

function DashboardCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{
        marginTop: 52,
        background: 'linear-gradient(145deg, rgba(28,28,32,0.88) 0%, rgba(17,17,19,0.94) 100%)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 20,
        padding: '24px 28px',
        maxWidth: 560,
        margin: '52px auto 0',
        boxShadow: '0 24px 80px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* top edge light */}
      <div style={{
        position: 'absolute', top: 0, left: '15%', right: '15%', height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(29,78,216,0.45), transparent)',
        pointerEvents: 'none',
      }} />

      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
        <div>
          <div style={{ fontSize: 11, color: 'rgba(147,197,253,0.55)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 }}>
            Monthly Revenue
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
            <span style={{ fontSize: 30, fontWeight: 800, color: '#F8FAFC', letterSpacing: '-0.03em' }}>$128,400</span>
            <motion.span
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.4 }}
              style={{ fontSize: 13, fontWeight: 700, color: '#10B981' }}
            >
              ↑ 12.4%
            </motion.span>
          </div>
        </div>
        <motion.div
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ padding: '5px 10px', borderRadius: 6, fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: '#10B981', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.22)', textTransform: 'uppercase' }}
        >
          ● Live
        </motion.div>
      </div>

      <MiniBarChart />

      <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '16px 0' }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
        {[
          { label: 'Profit Margin', val: '23.4%',  color: '#93C5FD' },
          { label: 'Expenses',      val: '$42,100', color: '#F59E0B' },
          { label: 'Cash Flow',     val: '+$18.9K', color: '#10B981' },
        ].map(({ label, val, color }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + i * 0.07, duration: 0.35 }}
            style={{ padding: '8px 10px', borderRadius: 8, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div style={{ fontSize: 9, color: 'rgba(147,197,253,0.45)', marginBottom: 3, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</div>
            <div style={{ fontSize: 14, fontWeight: 700, color }}>{val}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default function HeroSection() {
  const [wordIdx, setWordIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setWordIdx(i => (i + 1) % WORDS.length), 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse 80% 55% at 50% 0%, rgba(29,78,216,0.10) 0%, transparent 70%), linear-gradient(180deg, #080809 0%, #111113 100%)',
      }}
    >
      {/* Subtle grid */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none',
        backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgba(29,78,216,0.045)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
      }} />

      {/* Orb 1 — Royal Blue, restrained */}
      <motion.div
        animate={{ y: [0, -28, 0], x: [0, 12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: '18%', left: '8%', width: 480, height: 480, borderRadius: '50%', pointerEvents: 'none', background: 'radial-gradient(circle, rgba(29,78,216,0.18) 0%, transparent 70%)', filter: 'blur(80px)', opacity: 0.5 }}
      />
      {/* Orb 2 — Deeper royal */}
      <motion.div
        animate={{ y: [0, 24, 0], x: [0, -14, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{ position: 'absolute', bottom: '26%', right: '8%', width: 400, height: 400, borderRadius: '50%', pointerEvents: 'none', background: 'radial-gradient(circle, rgba(30,58,138,0.28) 0%, transparent 70%)', filter: 'blur(70px)', opacity: 0.45 }}
      />
      {/* Orb 3 — Emerald hint (growth) */}
      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        style={{ position: 'absolute', top: '65%', left: '50%', width: 300, height: 300, borderRadius: '50%', pointerEvents: 'none', background: 'radial-gradient(circle, rgba(5,150,105,0.08) 0%, transparent 70%)', filter: 'blur(60px)', opacity: 0.55, transform: 'translateX(-50%)' }}
      />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: 800, margin: '0 auto', padding: '120px 24px 80px', textAlign: 'center', width: '100%' }}>

        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}
        >
          <motion.img
            src="/logo.png"
            alt="Vanguard"
            animate={{ filter: ['drop-shadow(0 0 16px rgba(29,78,216,0.35))', 'drop-shadow(0 0 30px rgba(29,78,216,0.60))', 'drop-shadow(0 0 16px rgba(29,78,216,0.35))'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ height: 120, width: 'auto', objectFit: 'contain' }}
          />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28, padding: '8px 18px', borderRadius: 9999, fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#BFDBFE', background: 'rgba(29,78,216,0.08)', border: '1px solid rgba(29,78,216,0.24)' }}
        >
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5], scale: [0.85, 1.15, 0.85] }}
            transition={{ duration: 2.2, repeat: Infinity }}
            style={{ width: 6, height: 6, borderRadius: '50%', background: '#1D4ED8', boxShadow: '0 0 8px rgba(29,78,216,0.7)', flexShrink: 0, display: 'inline-block' }}
          />
          Certified Accounting Professionals · Nepal
        </motion.div>

        {/* Headline with word cycler */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)', fontWeight: 900, lineHeight: 1.06, letterSpacing: '-0.03em', color: '#F8FAFC', margin: '0 0 20px' }}
        >
          Financial Clarity,{' '}
          <br />
          Built on{' '}
          <span style={{ display: 'inline-block', position: 'relative', minWidth: '5.5ch' }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIdx}
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  background: 'linear-gradient(135deg, #93C5FD, #1D4ED8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline-block',
                }}
              >
                {WORDS[wordIdx]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          style={{ fontSize: '1.125rem', color: 'rgba(147,197,253,0.70)', maxWidth: 560, margin: '0 auto 44px', lineHeight: 1.75 }}
        >
          Expert bookkeeping, payroll, financial reporting, and digital presence management — everything your business needs to operate with confidence.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', marginBottom: 48 }}
        >
          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/services"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '14px 30px', borderRadius: 10, fontSize: '1rem', fontWeight: 700,
                color: 'white', textDecoration: 'none',
                background: 'linear-gradient(135deg, #1D4ED8, #1E3A8A)',
                boxShadow: '0 8px 32px rgba(29,78,216,0.40), inset 0 1px 0 rgba(255,255,255,0.12)',
              }}
            >
              Explore Services <ArrowRight size={18} />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '14px 30px', borderRadius: 10, fontSize: '1rem', fontWeight: 600,
                color: '#93C5FD', textDecoration: 'none',
                border: '1.5px solid rgba(29,78,216,0.35)',
                background: 'rgba(29,78,216,0.07)',
                backdropFilter: 'blur(8px)',
              }}
            >
              Book a Free Call
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45, ease }}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}
        >
          {badges.map(({ Icon, label }, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.06, borderColor: 'rgba(29,78,216,0.45)' }}
              transition={{ duration: 0.2 }}
              style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 14px', borderRadius: 8, fontSize: 12, color: 'rgba(191,219,254,0.70)', background: 'rgba(28,28,32,0.7)', border: '1px solid rgba(255,255,255,0.08)', cursor: 'default' }}
            >
              <Icon size={13} color="#1D4ED8" />
              {label}
            </motion.div>
          ))}
        </motion.div>

        {/* Dashboard preview */}
        <DashboardCard />
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, zIndex: 10 }}
      >
        <span style={{ fontSize: 10, color: 'rgba(147,197,253,0.30)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, rgba(29,78,216,0.5), transparent)' }} />
      </motion.div>
    </section>
  )
}
