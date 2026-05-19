import { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'
import * as Icons from 'lucide-react'
import { cardReveal } from '../../constants/animations'

export default function ServiceCard({ iconName, number, title, description, bullets, index, href }) {
  const Icon = Icons[iconName] || Icons.BookOpen

  const cardRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rawRotateX = useTransform(y, [-0.5, 0.5], [6, -6])
  const rawRotateY = useTransform(x, [-0.5, 0.5], [-6, 6])
  const rotateX = useSpring(rawRotateX, { stiffness: 280, damping: 28 })
  const rotateY = useSpring(rawRotateY, { stiffness: 280, damping: 28 })

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      variants={cardReveal}
      custom={index}
      style={{ perspective: 900 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          padding: 24,
          borderRadius: 16,
          background: 'linear-gradient(145deg, rgba(28,28,32,0.80) 0%, rgba(17,17,19,0.92) 100%)',
          border: '1px solid rgba(255,255,255,0.07)',
          backdropFilter: 'blur(10px)',
          overflow: 'hidden',
          cursor: 'default',
          height: '100%',
        }}
        whileHover={{
          borderColor: 'rgba(29,78,216,0.38)',
          boxShadow: '0 16px 50px rgba(29,78,216,0.14), 0 0 0 1px rgba(29,78,216,0.08)',
        }}
        transition={{ duration: 0.25 }}
      >
        {/* Number watermark */}
        <div style={{
          position: 'absolute',
          top: 12,
          right: 18,
          fontSize: 72,
          fontWeight: 900,
          color: 'rgba(29,78,216,0.05)',
          lineHeight: 1,
          letterSpacing: '-0.04em',
          userSelect: 'none',
          pointerEvents: 'none',
        }}>
          {number}
        </div>

        {/* Top edge accent */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(29,78,216,0.25), transparent)',
          pointerEvents: 'none',
        }} />

        {/* Icon */}
        <div style={{
          width: 48, height: 48, borderRadius: 12,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          background: 'rgba(29,78,216,0.10)',
          border: '1px solid rgba(29,78,216,0.22)',
          position: 'relative', zIndex: 1,
        }}>
          <Icon size={22} color="#1D4ED8" strokeWidth={1.8} />
        </div>

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, position: 'relative', zIndex: 1 }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#F8FAFC', margin: 0 }}>{title}</h3>
          <p style={{ fontSize: '0.8125rem', color: 'rgba(147,197,253,0.65)', lineHeight: 1.68, margin: 0, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {description}
          </p>
        </div>

        {/* Bullets */}
        <ul style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 'auto', position: 'relative', zIndex: 1 }}>
          {bullets.slice(0, 3).map((b, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 12, color: 'rgba(191,219,254,0.62)' }}>
              <span style={{
                marginTop: 2, width: 14, height: 14, borderRadius: '50%',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                background: 'rgba(5,150,105,0.15)',
              }}>
                <Icons.Check size={8} color="#059669" strokeWidth={3} />
              </span>
              {b}
            </li>
          ))}
        </ul>

        {/* Link */}
        {href && (
          <Link
            to={href}
            style={{
              marginTop: 4, display: 'inline-flex', alignItems: 'center', gap: 6,
              fontSize: 12, fontWeight: 600, color: '#93C5FD', textDecoration: 'none',
              position: 'relative', zIndex: 1,
            }}
          >
            Learn more <Icons.ArrowRight size={12} />
          </Link>
        )}
      </motion.div>
    </motion.div>
  )
}
