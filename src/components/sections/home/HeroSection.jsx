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
              ? 'linear-gradient(to top, #3B82F6, #60B4FF)'
              : i === 9
                ? 'rgba(59,130,246,0.45)'
                : 'rgba(59,130,246,0.22)',
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
        background: 'linear-gradient(145deg, rgba(26,39,68,0.88) 0%, rgba(11,17,32,0.92) 100%)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(59,130,246,0.18)',
        borderRadius: 20,
        padding: '24px 28px',
        maxWidth: 560,
        margin: '52px auto 0',
        boxShadow: '0 24px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* top edge light */}
      <div style={{
        position: 'absolute', top: 0, left: '15%', right: '15%', height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.35), transparent)',
        pointerEvents: 'none',
      }} />

      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
        <div>
          <div style={{ fontSize: 11, color: 'rgba(96,180,255,0.5)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 }}>
            Monthly Revenue
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
            <span style={{ fontSize: 30, fontWeight: 800, color: '#F0F6FF', letterSpacing: '-0.03em' }}>$128,400</span>
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
          style={{ padding: '5px 10px', borderRadius: 6, fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: '#10B981', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', textTransform: 'uppercase' }}
        >
          ● Live
        </motion.div>
      </div>

      <MiniBarChart />

      <div style={{ height: 1, background: 'rgba(59,130,246,0.1)', margin: '16px 0' }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
        {[
          { label: 'Profit Margin', val: '23.4%',  color: '#60B4FF' },
          { label: 'Expenses',      val: '$42,100', color: '#F59E0B' },
          { label: 'Cash Flow',     val: '+$18.9K', color: '#10B981' },
        ].map(({ label, val, color }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + i * 0.07, duration: 0.35 }}
            style={{ padding: '8px 10px', borderRadius: 8, background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.1)' }}
          >
            <div style={{ fontSize: 9, color: 'rgba(96,180,255,0.42)', marginBottom: 3, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</div>
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
        background: 'radial-gradient(ellipse 80% 55% at 50% 0%, rgba(59,130,246,0.14) 0%, transparent 70%), linear-gradient(180deg, #060A14 0%, #0B1120 100%)',
      }}
    >
      {/* Grid */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.6, pointerEvents: 'none',
        backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgba(59,130,246,0.055)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
      }} />

      {/* Orb 1 */}
      <motion.div
        animate={{ y: [0, -28, 0], x: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: '18%', left: '10%', width: 500, height: 500, borderRadius: '50%', pointerEvents: 'none', background: 'radial-gradient(circle, rgba(59,130,246,0.22) 0%, transparent 70%)', filter: 'blur(70px)', opacity: 0.55 }}
      />
      {/* Orb 2 */}
      <motion.div
        animate={{ y: [0, 24, 0], x: [0, -14, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{ position: 'absolute', bottom: '26%', right: '10%', width: 420, height: 420, borderRadius: '50%', pointerEvents: 'none', background: 'radial-gradient(circle, rgba(30,77,140,0.35) 0%, transparent 70%)', filter: 'blur(60px)', opacity: 0.5 }}
      />
      {/* Orb 3 — center bottom */}
      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        style={{ position: 'absolute', top: '60%', left: '50%', width: 360, height: 360, borderRadius: '50%', pointerEvents: 'none', background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)', filter: 'blur(50px)', opacity: 0.4, transform: 'translateX(-50%)' }}
      />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: 800, margin: '0 auto', padding: '120px 24px 80px', textAlign: 'center', width: '100%' }}>

        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}
        >
          <motion.img
            src="/logo.png"
            alt="Vanguard"
            animate={{ filter: ['drop-shadow(0 0 18px rgba(59,130,246,0.4))', 'drop-shadow(0 0 36px rgba(59,130,246,0.7))', 'drop-shadow(0 0 18px rgba(59,130,246,0.4))'] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ height: 120, width: 'auto', objectFit: 'contain' }}
          />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28, padding: '8px 18px', borderRadius: 9999, fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C8DFF9', background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.22)' }}
        >
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5], scale: [0.85, 1.15, 0.85] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ width: 6, height: 6, borderRadius: '50%', background: '#3B82F6', boxShadow: '0 0 8px #3B82F6', flexShrink: 0, display: 'inline-block' }}
          />
          Certified Accounting Professionals · Nepal
        </motion.div>

        {/* Headline with word cycler */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)', fontWeight: 900, lineHeight: 1.06, letterSpacing: '-0.03em', color: '#F0F6FF', margin: '0 0 20px' }}
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
                  background: 'linear-gradient(135deg, #60B4FF, #3B82F6)',
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
          style={{ fontSize: '1.125rem', color: 'rgba(96,180,255,0.72)', maxWidth: 560, margin: '0 auto 44px', lineHeight: 1.75 }}
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
                padding: '14px 30px', borderRadius: 14, fontSize: '1rem', fontWeight: 700,
                color: 'white', textDecoration: 'none',
                background: 'linear-gradient(135deg, #3B82F6, #1E4D8C)',
                boxShadow: '0 8px 32px rgba(59,130,246,0.42), inset 0 1px 0 rgba(255,255,255,0.1)',
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
                padding: '14px 30px', borderRadius: 14, fontSize: '1rem', fontWeight: 600,
                color: '#60B4FF', textDecoration: 'none',
                border: '1.5px solid rgba(59,130,246,0.38)',
                background: 'rgba(59,130,246,0.06)',
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
              whileHover={{ scale: 1.06, borderColor: 'rgba(59,130,246,0.5)' }}
              transition={{ duration: 0.2 }}
              style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 14px', borderRadius: 8, fontSize: 12, color: 'rgba(200,223,249,0.7)', background: 'rgba(30,77,140,0.15)', border: '1px solid rgba(30,77,140,0.3)', cursor: 'default' }}
            >
              <Icon size={13} color="#3B82F6" />
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
        <span style={{ fontSize: 10, color: 'rgba(96,180,255,0.3)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, rgba(59,130,246,0.5), transparent)' }} />
      </motion.div>
    </section>
  )
}
