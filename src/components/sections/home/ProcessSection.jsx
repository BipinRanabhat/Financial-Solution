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
    color: '#1D4ED8',
    glow: 'rgba(29,78,216,0.22)',
  },
  {
    number: '02',
    Icon: Settings,
    title: 'Onboarding & Setup',
    desc: 'We migrate your data, configure your accounting systems, and build a custom workflow tailored precisely to how your business operates.',
    tag: '1–3 business days',
    color: '#7C3AED',
    glow: 'rgba(124,58,237,0.22)',
  },
  {
    number: '03',
    Icon: TrendingUp,
    title: 'Ongoing Management',
    desc: 'Sit back while we handle books, payroll, reports, and digital presence — delivering clean financials and insights every single month.',
    tag: 'Ongoing',
    color: '#059669',
    glow: 'rgba(5,150,105,0.22)',
  },
]

export default function ProcessSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      className="section-padding"
      style={{ background: 'linear-gradient(180deg, var(--bg-base) 0%, var(--bg-alt) 100%)' }}
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
              background: 'linear-gradient(90deg, rgba(29,78,216,0.12), rgba(124,58,237,0.18), rgba(5,150,105,0.12))',
              zIndex: 0,
            }}
          />
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
              background: 'linear-gradient(90deg, #1D4ED8, #7C3AED, #059669)',
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
                  borderRadius: 16,
                  background: 'linear-gradient(145deg, var(--bg-card-from) 0%, var(--bg-card-to) 100%)',
                  border: '1px solid var(--border-subtle)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: 'var(--card-shadow)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                whileHover={{
                  borderColor: `${color}38`,
                  boxShadow: `0 16px 40px ${glow}`,
                  y: -4,
                }}
              >
                <div style={{
                  position: 'absolute', inset: 0, pointerEvents: 'none', borderRadius: 16,
                  background: `radial-gradient(circle at 50% -10%, ${glow} 0%, transparent 60%)`,
                }} />

                <div style={{ display: 'flex', alignItems: 'center', gap: 12, position: 'relative' }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: `${color}14`,
                    border: `1px solid ${color}30`,
                    boxShadow: `0 4px 16px ${glow}`,
                  }}>
                    <Icon size={22} color={color} strokeWidth={1.8} />
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 700, color: `${color}88`, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                    Step {number}
                  </span>
                </div>

                <div style={{ position: 'relative' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: 8 }}>{title}</h3>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.72, margin: 0 }}>{desc}</p>
                </div>

                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '5px 12px', borderRadius: 6, width: 'fit-content',
                  fontSize: 11, fontWeight: 600,
                  color: color,
                  background: `${color}10`,
                  border: `1px solid ${color}28`,
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
