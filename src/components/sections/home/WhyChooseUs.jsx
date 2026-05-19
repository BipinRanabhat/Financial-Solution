import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, ShieldCheck, BarChart2, Cpu, Headphones } from 'lucide-react'
import { slideLeft, slideRight } from '../../../constants/animations'
import SectionHeading from '../../ui/SectionHeading'

const features = [
  {
    Icon: ShieldCheck,
    title: 'CPA-Level Expertise',
    desc: 'Access senior-level accounting talent at a fraction of in-house costs — without sacrificing quality or responsiveness.',
  },
  {
    Icon: BarChart2,
    title: 'Real-Time Dashboards',
    desc: 'Always know where your business stands with live financial dashboards updated every month, no waiting.',
  },
  {
    Icon: Cpu,
    title: 'Multi-Platform Proficiency',
    desc: 'We work natively in QuickBooks, Xero, and Excel — whichever platform your team already uses.',
  },
  {
    Icon: Headphones,
    title: 'Proactive Advisory',
    desc: "We don't just report numbers. We flag trends, alert you to risks, and suggest opportunities before they pass.",
  },
]

function CircularProgress({ value, inView }) {
  const size = 128
  const stroke = 7
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - value / 100)

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg
        width={size}
        height={size}
        style={{ transform: 'rotate(-90deg)', display: 'block' }}
      >
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
        </defs>
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={stroke}
        />
        {/* Progress */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#ringGrad)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={inView ? { strokeDashoffset: offset } : { strokeDashoffset: circumference }}
          transition={{ duration: 1.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      }}>
        <span style={{ fontSize: 26, fontWeight: 800, color: '#F8FAFC', lineHeight: 1 }}>{value}%</span>
        <span style={{ fontSize: 9, color: 'rgba(147,197,253,0.52)', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: 2 }}>Retention</span>
      </div>
    </div>
  )
}

function FeatureRow({ Icon, title, desc, i, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}
    >
      <div style={{
        width: 40, height: 40, borderRadius: 10,
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2,
        background: 'rgba(29,78,216,0.09)',
        border: '1px solid rgba(29,78,216,0.20)',
      }}>
        <Icon size={18} color="#1D4ED8" strokeWidth={1.8} />
      </div>
      <div>
        <h4 style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#F8FAFC', marginBottom: 4 }}>{title}</h4>
        <p style={{ fontSize: '0.8125rem', color: 'rgba(147,197,253,0.60)', lineHeight: 1.65, margin: 0 }}>{desc}</p>
      </div>
    </motion.div>
  )
}

export default function WhyChooseUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section className="section-padding" style={{ background: 'linear-gradient(180deg, #111113 0%, #161618 100%)' }}>
      <div className="container-wide" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: features */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
          >
            <SectionHeading
              eyebrow="Why Vanguard"
              title="The Smarter Way to Manage Your Finances"
              subtitle="We combine accounting expertise with technology to give you an unfair advantage."
              align="left"
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 8 }}>
              {features.map(({ Icon, title, desc }, i) => (
                <FeatureRow key={i} Icon={Icon} title={title} desc={desc} i={i} inView={inView} />
              ))}
            </div>
          </motion.div>

          {/* Right: stat card with circular progress */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div
              style={{
                borderRadius: 20,
                padding: 32,
                overflow: 'hidden',
                position: 'relative',
                background: 'linear-gradient(145deg, rgba(28,28,32,0.85) 0%, rgba(17,17,19,0.95) 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 24px 60px rgba(0,0,0,0.40)',
              }}
            >
              {/* Decorative top glow */}
              <div style={{
                position: 'absolute', top: 0, left: '15%', right: '15%', height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(29,78,216,0.40), transparent)',
                pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute', top: -60, right: -60, width: 200, height: 200, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(5,150,105,0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              {/* Circular progress + headline */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 28 }}>
                <CircularProgress value={99} inView={inView} />
                <div>
                  <p style={{ fontSize: '0.8125rem', color: 'rgba(147,197,253,0.55)', marginBottom: 4, lineHeight: 1.5 }}>
                    Our clients don't leave — because results speak for themselves.
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <CheckCircle2 size={14} color="#059669" />
                    <span style={{ fontSize: 12, fontWeight: 600, color: '#10B981' }}>Industry-leading retention</span>
                  </div>
                </div>
              </div>

              {/* Stat grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {[
                  { val: '200+', label: 'Active Clients',    accent: '#1D4ED8' },
                  { val: '8+',   label: 'Years Experience',  accent: '#1D4ED8' },
                  { val: '$50M+', label: 'Annually Managed', accent: '#059669' },
                  { val: '24hr', label: 'Response Time',     accent: '#059669' },
                ].map(({ val, label, accent }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                    style={{
                      padding: '14px 16px', borderRadius: 10,
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    <span style={{ display: 'block', fontSize: 20, fontWeight: 800, color: accent, marginBottom: 2 }}>{val}</span>
                    <span style={{ fontSize: 11, color: 'rgba(147,197,253,0.50)', fontWeight: 500 }}>{label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Bottom trust line */}
              <div style={{
                marginTop: 16, display: 'flex', alignItems: 'center', gap: 10,
                padding: '12px 16px', borderRadius: 10,
                background: 'rgba(5,150,105,0.07)',
                border: '1px solid rgba(5,150,105,0.18)',
              }}>
                <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0 }} />
                <p style={{ fontSize: '0.8125rem', color: 'rgba(191,219,254,0.72)', margin: 0 }}>
                  Join 200+ businesses who trust Vanguard with their finances.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
