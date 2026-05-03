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
        background: 'rgba(11,17,32,0.8)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(59,130,246,0.1)',
        borderBottom: '1px solid rgba(59,130,246,0.1)',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 70% 100% at 50% 50%, rgba(59,130,246,0.04) 0%, transparent 70%)',
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
            return (
              <motion.div
                key={i}
                variants={cardReveal}
                whileHover={{ y: -5, borderColor: 'rgba(59,130,246,0.38)', boxShadow: '0 12px 36px rgba(59,130,246,0.14)' }}
                transition={{ duration: 0.22 }}
                style={{
                  textAlign: 'center',
                  padding: '24px 16px',
                  borderRadius: 16,
                  background: 'linear-gradient(145deg, rgba(26,39,68,0.6) 0%, rgba(11,17,32,0.7) 100%)',
                  border: '1px solid rgba(59,130,246,0.12)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 10,
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* card inner glow */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 1,
                  background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.2), transparent)',
                  pointerEvents: 'none',
                }} />

                {Icon && (
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(59,130,246,0.12)',
                    border: '1px solid rgba(59,130,246,0.2)',
                    flexShrink: 0,
                  }}>
                    <Icon size={18} color="#3B82F6" strokeWidth={1.8} />
                  </div>
                )}

                <div style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#F0F6FF', lineHeight: 1 }}>
                  <AnimatedCounter end={value} suffix={suffix} prefix={prefix} />
                </div>

                <div style={{ fontSize: 11, color: 'rgba(96,180,255,0.52)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
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
