import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import * as Icons from 'lucide-react'
import { staggerContainer, cardReveal } from '../../../constants/animations'
import AnimatedCounter from '../../ui/AnimatedCounter'
import { stats } from '../../../constants/services'

export default function StatsBar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      style={{
        position: 'relative',
        padding: '40px 16px',
        background: 'var(--bg-stats)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid var(--border-section)',
        borderBottom: '1px solid var(--border-section)',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 70% 100% at 50% 50%, rgba(29,78,216,0.04) 0%, transparent 70%)',
      }} />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map(({ value, suffix, label, prefix, icon }, i) => {
            const Icon = Icons[icon]
            const isRetention = label.toLowerCase().includes('retention')
            const accentColor = isRetention ? '#10B981' : '#1D4ED8'
            const accentBg    = isRetention ? 'rgba(16,185,129,0.10)' : 'rgba(29,78,216,0.10)'
            const accentBdr   = isRetention ? 'rgba(16,185,129,0.22)' : 'rgba(29,78,216,0.22)'

            return (
              <motion.div
                key={i}
                variants={cardReveal}
                whileHover={{ y: -5, borderColor: isRetention ? 'rgba(16,185,129,0.38)' : 'rgba(29,78,216,0.38)', boxShadow: `0 12px 36px ${isRetention ? 'rgba(16,185,129,0.12)' : 'rgba(29,78,216,0.12)'}` }}
                transition={{ duration: 0.22 }}
                style={{
                  textAlign: 'center',
                  padding: '24px 16px',
                  borderRadius: 14,
                  background: 'linear-gradient(145deg, var(--bg-card-from) 0%, var(--bg-card-to) 100%)',
                  border: '1px solid var(--border-subtle)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: 'var(--card-shadow)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 10,
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 1,
                  background: `linear-gradient(90deg, transparent, ${accentBdr}, transparent)`,
                  pointerEvents: 'none',
                }} />

                {Icon && (
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: accentBg,
                    border: `1px solid ${accentBdr}`,
                    flexShrink: 0,
                  }}>
                    <Icon size={18} color={accentColor} strokeWidth={1.8} />
                  </div>
                )}

                <div style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, color: 'var(--text-heading)', lineHeight: 1 }}>
                  <AnimatedCounter end={value} suffix={suffix} prefix={prefix} />
                </div>

                <div style={{ fontSize: 11, color: 'var(--text-dim)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                  {label}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
