import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const isCenter = align === 'center'

  return (
    <div
      ref={ref}
      style={{
        display: 'flex', flexDirection: 'column', gap: 12,
        alignItems: isCenter ? 'center' : 'flex-start',
        textAlign: isCenter ? 'center' : 'left',
      }}
      className={className}
    >
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.4 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: 11, fontWeight: 700, letterSpacing: '0.20em', textTransform: 'uppercase', color: '#1D4ED8',
          }}
        >
          <span style={{ display: 'inline-block', width: 20, height: 1.5, background: '#1D4ED8', borderRadius: 2, flexShrink: 0 }} />
          {eyebrow}
          <span style={{ display: 'inline-block', width: 20, height: 1.5, background: '#1D4ED8', borderRadius: 2, flexShrink: 0 }} />
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.08 }}
        style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--text-heading)', margin: 0 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          style={{ fontSize: '1.0625rem', color: 'var(--text-muted)', maxWidth: 600, lineHeight: 1.72, margin: 0 }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{
          height: 2, width: 56,
          background: 'linear-gradient(90deg, #1D4ED8, #059669)',
          borderRadius: 2,
          transformOrigin: isCenter ? 'center' : 'left',
        }}
      />
    </div>
  )
}
