import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Shield, Award, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import MagneticButton from '../../ui/MagneticButton'

const WORDS = ['Precision.', 'Confidence.', 'Growth.', 'Excellence.']

const badges = [
  { Icon: Shield,     label: 'CA Certified' },
  { Icon: Award,      label: 'Multi-Country Experts' },
  { Icon: TrendingUp, label: '$50M+ Managed' },
]

const ease = [0.22, 1, 0.36, 1]

const testimonials = [
  {
    quote: "They cleaned up 3 years of messy books in two weeks. I finally know exactly where my money is going.",
    author: "James T.",
    location: "Sydney, Australia 🇦🇺",
    avatar: "https://i.pravatar.cc/80?img=11",
  },
  {
    quote: "Felt like having a CFO on our team from day one. Incredibly responsive, thorough, and proactive.",
    author: "Sarah M.",
    location: "London, UK 🇬🇧",
    avatar: "https://i.pravatar.cc/80?img=47",
  },
  {
    quote: "Saved us over $12,000 in our first tax year. Best financial decision we've ever made.",
    author: "Michael R.",
    location: "Dallas, USA 🇺🇸",
    avatar: "https://i.pravatar.cc/80?img=68",
  },
]

function TestimonialCard() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % testimonials.length), 4000)
    return () => clearInterval(id)
  }, [])

  const t = testimonials[idx]

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{
        marginTop: 52,
        background: 'linear-gradient(145deg, var(--bg-card-from) 0%, var(--bg-card-to) 100%)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid var(--border-medium)',
        borderRadius: 20,
        padding: 'clamp(18px, 4vw, 28px) clamp(16px, 5vw, 32px)',
        maxWidth: 560,
        margin: '52px auto 0',
        boxShadow: 'var(--shadow-dash-card)',
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

      {/* Stars */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 3, marginBottom: 18 }}>
        {[...Array(5)].map((_, i) => (
          <span key={i} style={{ fontSize: 15, color: '#F59E0B' }}>★</span>
        ))}
        <span style={{ fontSize: 11, color: 'var(--text-dim)', marginLeft: 7, fontWeight: 600 }}>
          5.0 · Verified Client
        </span>
      </div>

      {/* Cycling quote */}
      <div style={{ minHeight: 88 }}>
        <AnimatePresence mode="wait">
          <motion.p
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.38 }}
            style={{
              fontSize: '0.9375rem', fontWeight: 500, lineHeight: 1.68,
              color: 'var(--text-heading)', margin: 0, fontStyle: 'italic',
            }}
          >
            "{t.quote}"
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Author */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`a-${idx}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 18 }}
        >
          <img
            src={t.avatar}
            alt={t.author}
            style={{
              width: 42, height: 42, borderRadius: '50%', flexShrink: 0,
              objectFit: 'cover',
              border: '2px solid rgba(29,78,216,0.30)',
              boxShadow: '0 2px 10px rgba(0,0,0,0.25)',
            }}
          />
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-heading)' }}>{t.author}</div>
            <div style={{ fontSize: 11, color: 'var(--text-dim)', marginTop: 1 }}>{t.location}</div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Divider */}
      <div style={{ height: 1, background: 'var(--border-subtle)', margin: '18px 0 14px' }} />

      {/* Footer */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 11, color: 'var(--text-dim2)', fontWeight: 600 }}>Trusted by 200+ businesses</span>
        <span style={{ fontSize: 11, color: 'var(--text-dim2)', fontWeight: 600 }}>🇺🇸 US · 🇬🇧 UK · 🇦🇺 AU</span>
      </div>

      {/* Dot indicators */}
      <div style={{ display: 'flex', gap: 5, justifyContent: 'center', marginTop: 14 }}>
        {testimonials.map((t, i) => (
          <motion.button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`View testimonial from ${t.author}`}
            aria-pressed={i === idx}
            animate={{ width: i === idx ? 18 : 6, background: i === idx ? '#1D4ED8' : 'rgba(29,78,216,0.20)' }}
            transition={{ duration: 0.3 }}
            style={{ height: 6, borderRadius: 3, cursor: 'pointer', border: 'none', padding: 0 }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function HeroSection() {
  const [wordIdx, setWordIdx] = useState(0)

  // Cursor spotlight
  const mouseX = useMotionValue(-9999)
  const mouseY = useMotionValue(-9999)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 22 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 22 })
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(29,78,216,0.09) 0%, transparent 70%)`

  // Scroll-parallax for orbs
  const { scrollY } = useScroll()
  const orb1Y = useTransform(scrollY, [0, 800], [0, -130])
  const orb2Y = useTransform(scrollY, [0, 800], [0, -90])
  const orb3Y = useTransform(scrollY, [0, 800], [0, -60])

  useEffect(() => {
    const id = setInterval(() => setWordIdx(i => (i + 1) % WORDS.length), 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mouseX.set(e.clientX - rect.left)
        mouseY.set(e.clientY - rect.top)
      }}
      onMouseLeave={() => { mouseX.set(-9999); mouseY.set(-9999) }}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--bg-hero)',
      }}
    >
      {/* Subtle grid */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 'var(--grid-opacity)', pointerEvents: 'none',
        backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgba(29,78,216,0.045)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
      }} />

      {/* Cursor spotlight overlay */}
      <motion.div style={{ position: 'absolute', inset: 0, background: spotlight, pointerEvents: 'none', zIndex: 1 }} />

      {/* Orb 1 — Royal Blue (parallax wrapper) */}
      <motion.div style={{ position: 'absolute', top: '18%', left: '8%', y: orb1Y, pointerEvents: 'none' }}>
        <motion.div
          animate={{ y: [0, -28, 0], x: [0, 12, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(29,78,216,0.18) 0%, transparent 70%)', filter: 'blur(80px)', opacity: 0.5 }}
        />
      </motion.div>

      {/* Orb 2 — Deeper royal (parallax wrapper) */}
      <motion.div style={{ position: 'absolute', bottom: '26%', right: '8%', y: orb2Y, pointerEvents: 'none' }}>
        <motion.div
          animate={{ y: [0, 24, 0], x: [0, -14, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{ width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(30,58,138,0.28) 0%, transparent 70%)', filter: 'blur(70px)', opacity: 0.45 }}
        />
      </motion.div>

      {/* Orb 3 — Emerald hint (parallax wrapper) */}
      <motion.div style={{ position: 'absolute', top: '65%', left: '50%', y: orb3Y, transform: 'translateX(-50%)', pointerEvents: 'none' }}>
        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          style={{ width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(5,150,105,0.08) 0%, transparent 70%)', filter: 'blur(60px)', opacity: 0.55 }}
        />
      </motion.div>

      <div style={{ position: 'relative', zIndex: 10, maxWidth: 800, margin: '0 auto', padding: '120px 24px 80px', textAlign: 'center', width: '100%' }}>

        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}
        >
          <div style={{ position: 'relative', display: 'inline-flex' }}>
            <motion.div
              animate={{ opacity: [0.35, 0.65, 0.35] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', inset: '10px -24px',
                borderRadius: '50%',
                background: 'radial-gradient(ellipse, rgba(29,78,216,0.55), transparent 70%)',
                filter: 'blur(22px)',
                pointerEvents: 'none',
              }}
            />
            <img
              src="/logo.png"
              alt="Vanguard"
              style={{ height: 120, width: 'auto', objectFit: 'contain', filter: 'var(--logo-filter)', position: 'relative' }}
            />
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28, padding: '8px 18px', borderRadius: 9999, fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-body)', background: 'rgba(29,78,216,0.08)', border: '1px solid rgba(29,78,216,0.24)' }}
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
          style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)', fontWeight: 900, lineHeight: 1.06, letterSpacing: '-0.03em', color: 'var(--text-heading)', margin: '0 0 20px' }}
        >
          Financial Clarity,{' '}
          <br />
          Built on{' '}
          <span style={{ display: 'inline-block', position: 'relative', minWidth: '10.5ch' }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIdx}
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  background: 'var(--gradient-text-blue)',
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
          style={{ fontSize: '1.125rem', color: 'var(--text-muted)', maxWidth: 560, margin: '0 auto 44px', lineHeight: 1.75 }}
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
          <MagneticButton>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/services"
                className="btn-shimmer"
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
          </MagneticButton>
          <MagneticButton>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 30px', borderRadius: 10, fontSize: '1rem', fontWeight: 600,
                  color: 'var(--accent-pale)', textDecoration: 'none',
                  border: '1.5px solid rgba(29,78,216,0.35)',
                  background: 'rgba(29,78,216,0.07)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                Book a Free Call
              </Link>
            </motion.div>
          </MagneticButton>
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
              style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 14px', borderRadius: 8, fontSize: 12, color: 'var(--text-ice)', background: 'var(--bg-card-solid)', border: '1px solid var(--border-medium)', cursor: 'default' }}
            >
              <Icon size={13} color="#1D4ED8" />
              {label}
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial card */}
        <TestimonialCard />
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, zIndex: 10 }}
      >
        <span style={{ fontSize: 10, color: 'var(--text-dim2)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, rgba(29,78,216,0.5), transparent)' }} />
      </motion.div>
    </section>
  )
}
