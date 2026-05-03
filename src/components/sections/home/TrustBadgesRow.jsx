import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ShieldCheck, Award, Star, CheckCircle } from 'lucide-react'

const badges = [
  { icon: ShieldCheck, label: 'QuickBooks', sub: 'ProAdvisor Certified', color: '#2CA01C' },
  { icon: CheckCircle, label: 'Xero',       sub: 'Certified Partner',    color: '#13B5EA' },
  { icon: Award,       label: 'CPA',        sub: 'Certified Public Accountant', color: '#3B82F6' },
  { icon: Award,       label: 'CPP',        sub: 'Certified Payroll Professional', color: '#8B5CF6' },
  { icon: Star,        label: '4.9 / 5',   sub: 'Average Client Rating', color: '#F59E0B' },
  { icon: ShieldCheck, label: 'AICPA',      sub: 'Member in Good Standing', color: '#10B981' },
]

export default function TrustBadgesRow() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section style={{ background: '#060A14', borderTop: '1px solid rgba(59,130,246,0.08)', borderBottom: '1px solid rgba(59,130,246,0.08)', padding: '36px 16px', overflow: 'hidden' }}>
      <div className="max-w-6xl mx-auto">
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(96,180,255,0.4)', marginBottom: 24 }}
        >
          Certifications &amp; Trust
        </motion.p>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
          className="flex flex-wrap justify-center gap-3"
        >
          {badges.map(({ icon: Icon, label, sub, color }, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } } }}
              whileHover={{ y: -3, borderColor: `${color}55`, boxShadow: `0 8px 24px ${color}18` }}
              transition={{ duration: 0.2 }}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '10px 18px', borderRadius: 12,
                background: 'rgba(15,22,40,0.9)',
                border: '1px solid rgba(59,130,246,0.13)',
                backdropFilter: 'blur(12px)',
                cursor: 'default',
              }}
            >
              <div style={{ width: 32, height: 32, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${color}18`, flexShrink: 0 }}>
                <Icon size={16} style={{ color }} strokeWidth={2} />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#F0F6FF', lineHeight: 1.2 }}>{label}</div>
                <div style={{ fontSize: 10, color: 'rgba(96,180,255,0.5)', fontWeight: 500, marginTop: 2 }}>{sub}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
