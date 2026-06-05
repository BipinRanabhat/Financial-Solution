import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, Clock, ShieldCheck, TrendingDown, Award, Users } from 'lucide-react'
import SectionHeading from '../../ui/SectionHeading'

const advantages = [
  { icon: TrendingDown, color: '#059669', title: '40–60% Cost Savings', desc: 'Get CPA-level expertise at a fraction of what a US or UK firm charges. Same certifications, same software, dramatically better value.' },
  { icon: Award,        color: '#1D4ED8', title: 'Fully Certified Team', desc: 'Our accountants hold CPA, CPP, QuickBooks ProAdvisor, and Xero Certified credentials — the same qualifications your local firm advertises.' },
  { icon: Clock,        color: '#7C3AED', title: 'Overnight Turnaround', desc: 'Nepal\'s timezone (UTC+5:45) means we work while you sleep. Send requests end-of-day, receive completed work by morning.' },
  { icon: Globe,        color: '#D97706', title: 'Fluent in Your Markets', desc: 'We\'ve specialized in US, UK, and Australian tax and compliance for 9+ years. We speak your jurisdiction\'s language — not just English.' },
  { icon: ShieldCheck,  color: '#1D4ED8', title: 'Transparent by Default', desc: 'We tell you exactly who we are, where we are, and how we work. No shell addresses, no hidden teams — just honest professionals you can verify.' },
  { icon: Users,        color: '#059669', title: 'Dedicated Account Team', desc: 'You get a named account manager, bookkeeper, and payroll specialist — not a rotating support queue. Same faces, every month.' },
]

const comparisons = [
  { label: 'Monthly Cost',           vanguard: 'From $299/mo', inhouse: '$5,000+/mo',  bigfirm: '$3,000+/mo' },
  { label: 'Response Time',          vanguard: '< 8 hours',    inhouse: '9–5 only',     bigfirm: '48+ hours' },
  { label: 'CPA Certified',          vanguard: true,           inhouse: 'Varies',        bigfirm: true },
  { label: 'Dedicated Manager',      vanguard: true,           inhouse: true,            bigfirm: false },
  { label: 'Tax Filing Included',    vanguard: true,           inhouse: false,           bigfirm: 'Extra cost' },
  { label: 'Month-to-Month',         vanguard: true,           inhouse: 'N/A',           bigfirm: false },
  { label: 'Real-time Reporting',    vanguard: true,           inhouse: false,           bigfirm: false },
  { label: 'Multi-currency Support', vanguard: true,           inhouse: 'Rarely',        bigfirm: 'Extra cost' },
]

function Cell({ val }) {
  if (val === true)  return <span style={{ color: '#059669', fontWeight: 700, fontSize: 16 }}>✓</span>
  if (val === false) return <span style={{ color: 'var(--text-dim2)', fontWeight: 700, fontSize: 16 }}>✗</span>
  return <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-dim)' }}>{val}</span>
}

function CellHighlight({ val }) {
  if (val === true)  return <span style={{ color: '#059669', fontWeight: 700, fontSize: 16 }}>✓</span>
  if (val === false) return <span style={{ color: 'var(--text-dim2)', fontWeight: 700, fontSize: 16 }}>✗</span>
  return <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-heading)' }}>{val}</span>
}

export default function WhyNepalSection() {
  const ref = useRef(null)
  const tableRef = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const tableInView = useInView(tableRef, { once: true, amount: 0.1 })

  return (
    <>
      {/* Why Nepal advantages */}
      <section className="section-padding" style={{ background: 'var(--bg-base)' }}>
        <div className="container-wide" ref={ref}>
          <div className="mb-14 flex flex-col items-center">
            <SectionHeading
              eyebrow="The Nepal Advantage"
              title="Why Smart Businesses Choose Nepal"
              subtitle="We don't hide where we're from — because where we're from is your competitive advantage."
            />
          </div>

          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {advantages.map(({ icon: Icon, color, title, desc }, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}
                whileHover={{ y: -4, borderColor: `${color}35`, boxShadow: `0 12px 32px ${color}10` }}
                transition={{ duration: 0.2 }}
                style={{
                  padding: '28px 24px', borderRadius: 16,
                  background: 'linear-gradient(145deg, var(--bg-card-from) 0%, var(--bg-card-to) 100%)',
                  border: '1px solid var(--border-subtle)',
                  boxShadow: 'var(--card-shadow)',
                  display: 'flex', flexDirection: 'column', gap: 14,
                }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${color}12`, border: `1px solid ${color}28` }}>
                  <Icon size={20} style={{ color }} strokeWidth={1.8} />
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-heading)' }}>{title}</h3>
                <p style={{ fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.72 }}>{desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Nepal origin badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ marginTop: 48, textAlign: 'center' }}
          >
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 12,
              padding: '14px 28px', borderRadius: 14,
              background: 'rgba(29,78,216,0.07)',
              border: '1px solid rgba(29,78,216,0.20)',
            }}>
              <span style={{ fontSize: 22 }}>🇳🇵</span>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-heading)' }}>Headquartered in Kathmandu, Nepal</div>
                <div style={{ fontSize: 12, color: 'var(--text-dim)', marginTop: 2 }}>Proudly Nepali. Serving US, UK &amp; Australia since 2016.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding" style={{ background: 'var(--bg-alt)' }}>
        <div className="container-wide" ref={tableRef}>
          <div className="mb-14 flex flex-col items-center">
            <SectionHeading
              eyebrow="Side by Side"
              title="Vanguard vs. The Alternatives"
              subtitle="See exactly how we stack up against hiring in-house or going with a big local firm."
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={tableInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid var(--border-medium)', boxShadow: 'var(--card-shadow)' }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
              <thead>
                <tr style={{ background: 'var(--bg-table-head)' }}>
                  <th style={{ padding: '16px 24px', textAlign: 'left', fontSize: 12, fontWeight: 700, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Feature</th>
                  <th style={{ padding: '16px 20px', textAlign: 'center', fontSize: 13, fontWeight: 800, color: '#1D4ED8' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ fontSize: 16 }}>🇳🇵</span> Vanguard
                    </div>
                  </th>
                  <th style={{ padding: '16px 20px', textAlign: 'center', fontSize: 12, fontWeight: 700, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>In-House Staff</th>
                  <th style={{ padding: '16px 20px', textAlign: 'center', fontSize: 12, fontWeight: 700, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Big US / UK Firm</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map(({ label, vanguard, inhouse, bigfirm }, i) => (
                  <tr key={i} style={{ borderTop: '1px solid var(--border-section)', background: i % 2 === 0 ? 'var(--bg-table-even)' : 'var(--bg-table-odd)' }}>
                    <td style={{ padding: '15px 24px', fontSize: 13.5, color: 'var(--text-body)', fontWeight: 500 }}>{label}</td>
                    <td style={{ padding: '15px 20px', textAlign: 'center', background: 'rgba(29,78,216,0.05)' }}><CellHighlight val={vanguard} /></td>
                    <td style={{ padding: '15px 20px', textAlign: 'center' }}><Cell val={inhouse} /></td>
                    <td style={{ padding: '15px 20px', textAlign: 'center' }}><Cell val={bigfirm} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>
    </>
  )
}
