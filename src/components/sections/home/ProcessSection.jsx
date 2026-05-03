import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Settings, TrendingUp } from 'lucide-react'
import SectionHeading from '../../ui/SectionHeading'

const steps = [
  {
    number: '01',
    Icon: Phone,
    title: 'Free Discovery Call',
    desc: 'A relaxed 30-minute conversation to understand your business, identify gaps, and see if we\'re the right fit — no pressure, no commitment.',
    tag: '30 minutes',
    color: '#3B82F6',
    glow: 'rgba(59,130,246,0.22)',
  },
  {
    number: '02',
    Icon: Settings,
    title: 'Onboarding & Setup',
    desc: 'We migrate your data, configure your accounting systems, and build a custom workflow tailored precisely to how your business operates.',
    tag: '1–3 business days',
    color: '#8B5CF6',
    glow: 'rgba(139,92,246,0.22)',
  },
  {
    number: '03',
    Icon: TrendingUp,
    title: 'Ongoing Management',
    desc: 'Sit back while we handle books, payroll, reports, and digital presence — delivering clean financials and insights every single month.',
    tag: 'Ongoing',
    color: '#10B981',
    glow: 'rgba(16,185,129,0.22)',
  },
]

export default function ProcessSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      className="section-padding"
      style={{ background: 'linear-gradient(180deg, #0B1120 0%, #0D1628 100%)' }}
    >
      <div className="container-wide">
        <div className="mb-14 flex flex-col items-center">
          <SectionHeading
            eyebrow="How It Works"
            title="Get Started in 3 Simple Steps"
            subtitle="From first call to fully managed finances — we make the transition seamless and painless."
          />
        </div>

        <div ref={ref} style={{ position: 'relative' }}>
          {/* Connecting line — desktop only */}
          <div
            className="hidden lg:block"
            style={{
              position: 'absolute',
              top: 52,
              left: 'calc(16.67% + 24px)',
              right: 'calc(16.67% + 24px)',
              height: 1,
              background: 'linear-gradient(90deg, rgba(59,130,246,0.1), rgba(139,92,246,0.2), rgba(16,185,129,0.1))',
              zIndex: 0,
            }}
          />
          {/* Animated line overlay */}
          <motion.div
            className="hidden lg:block"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'absolute',
              top: 52,
              left: 'calc(16.67% + 24px)',
              right: 'calc(16.67% + 24px)',
              height: 1,
              background: 'linear-gradient(90deg, #3B82F6, #8B5CF6, #10B981)',
              transformOrigin: 'left',
              zIndex: 1,
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" style={{ position: 'relative', zIndex: 2 }}>
            {steps.map(({ number, Icon, title, desc, tag, color, glow }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  padding: 28,
                  borderRadius: 20,
                  background: 'linear-gradient(145deg, rgba(26,39,68,0.55) 0%, rgba(11,17,32,0.8) 100%)',
                  border: `1px solid ${glow.replace('0.22', '0.18')}`,
                  backdropFilter: 'blur(12px)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                whileHover={{
                  borderColor: glow.replace('0.22', '0.45'),
                  boxShadow: `0 16px 40px ${glow}`,
                  y: -4,
                }}
                transition2={{ duration: 0.25 }}
              >
                {/* Background glow */}
                <div style={{
                  position: 'absolute', inset: 0, pointerEvents: 'none', borderRadius: 20,
                  background: `radial-gradient(circle at 50% -10%, ${glow} 0%, transparent 60%)`,
                }} />

                {/* Step indicator */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, position: 'relative' }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: `rgba(${color === '#3B82F6' ? '59,130,246' : color === '#8B5CF6' ? '139,92,246' : '16,185,129'}, 0.14)`,
                    border: `1px solid ${glow.replace('0.22', '0.3')}`,
                    boxShadow: `0 4px 16px ${glow}`,
                  }}>
                    <Icon size={22} color={color} strokeWidth={1.8} />
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 700, color: glow.replace('rgba(', '').split(',').slice(0, 3).join('').includes('59') ? 'rgba(96,180,255,0.45)' : color === '#8B5CF6' ? 'rgba(139,92,246,0.55)' : 'rgba(16,185,129,0.55)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                    Step {number}
                  </span>
                </div>

                <div style={{ position: 'relative' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#F0F6FF', marginBottom: 8 }}>{title}</h3>
                  <p style={{ fontSize: '0.8125rem', color: 'rgba(96,180,255,0.65)', lineHeight: 1.7, margin: 0 }}>{desc}</p>
                </div>

                {/* Tag */}
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '5px 12px', borderRadius: 6, width: 'fit-content',
                  fontSize: 11, fontWeight: 600,
                  color: color,
                  background: `rgba(${color === '#3B82F6' ? '59,130,246' : color === '#8B5CF6' ? '139,92,246' : '16,185,129'}, 0.1)`,
                  border: `1px solid ${glow.replace('0.22', '0.22')}`,
                }}>
                  {tag}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
