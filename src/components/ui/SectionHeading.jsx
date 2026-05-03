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
          style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#3B82F6' }}
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.08 }}
        style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em', color: '#F0F6FF', margin: 0 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          style={{ fontSize: '1.0625rem', color: 'rgba(96,180,255,0.75)', maxWidth: 600, lineHeight: 1.7, margin: 0 }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{
          height: 2, width: 64,
          background: 'linear-gradient(90deg, #3B82F6, #60B4FF)',
          borderRadius: 2,
          transformOrigin: isCenter ? 'center' : 'left',
        }}
      />
    </div>
  )
}
