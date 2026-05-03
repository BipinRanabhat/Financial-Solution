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
          borderRadius: 20,
          background: 'linear-gradient(145deg, rgba(30,77,140,0.22) 0%, rgba(11,17,32,0.85) 100%)',
          border: '1px solid rgba(30,77,140,0.28)',
          backdropFilter: 'blur(10px)',
          overflow: 'hidden',
          cursor: 'default',
          height: '100%',
        }}
        whileHover={{
          borderColor: 'rgba(59,130,246,0.45)',
          boxShadow: '0 16px 50px rgba(59,130,246,0.18), 0 0 0 1px rgba(59,130,246,0.1)',
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
          color: 'rgba(59,130,246,0.06)',
          lineHeight: 1,
          letterSpacing: '-0.04em',
          userSelect: 'none',
          pointerEvents: 'none',
        }}>
          {number}
        </div>

        {/* Hover glow */}
        <div
          className="group-hover:opacity-100"
          style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(circle at 50% 0%, rgba(59,130,246,0.07) 0%, transparent 65%)',
            pointerEvents: 'none',
            borderRadius: 20,
            opacity: 0,
            transition: 'opacity 0.3s',
          }}
        />

        {/* Icon */}
        <div style={{
          width: 48, height: 48, borderRadius: 14,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          background: 'rgba(59,130,246,0.13)',
          border: '1px solid rgba(59,130,246,0.28)',
          position: 'relative', zIndex: 1,
        }}>
          <Icon size={22} color="#3B82F6" strokeWidth={1.8} />
        </div>

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, position: 'relative', zIndex: 1 }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#F0F6FF', margin: 0 }}>{title}</h3>
          <p style={{ fontSize: '0.8125rem', color: 'rgba(96,180,255,0.68)', lineHeight: 1.65, margin: 0, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {description}
          </p>
        </div>

        {/* Bullets */}
        <ul style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 'auto', position: 'relative', zIndex: 1 }}>
          {bullets.slice(0, 3).map((b, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 12, color: 'rgba(200,223,249,0.65)' }}>
              <span style={{
                marginTop: 2, width: 14, height: 14, borderRadius: '50%',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                background: 'rgba(59,130,246,0.18)',
              }}>
                <Icons.Check size={8} color="#3B82F6" strokeWidth={3} />
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
              fontSize: 12, fontWeight: 600, color: '#3B82F6', textDecoration: 'none',
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
