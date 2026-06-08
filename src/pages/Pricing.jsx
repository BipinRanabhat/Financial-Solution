import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { CheckCircle2, ArrowRight, Zap, TrendingUp, Building2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageWrapper from '../components/layout/PageWrapper'
import CTABanner from '../components/sections/home/CTABanner'
import SectionHeading from '../components/ui/SectionHeading'

const plans = [
  {
    icon: Zap,
    name: 'Starter',
    tagline: 'Perfect for freelancers & solo businesses',
    monthlyPrice: 299,
    annualPrice: 249,
    color: '#059669',
    features: [
      'Up to 200 transactions/month',
      'Monthly bookkeeping & reconciliation',
      'Profit & Loss + Balance Sheet reports',
      'QuickBooks or Xero management',
      '24/7 email & WhatsApp support',
      'Year-end tax-ready file preparation',
      'Dedicated account manager',
    ],
    notIncluded: ['Payroll processing', 'Tax filing', 'CFO advisory calls'],
    cta: 'Start with Starter',
    popular: false,
  },
  {
    icon: TrendingUp,
    name: 'Growth',
    tagline: 'For growing businesses ready to scale',
    monthlyPrice: 599,
    annualPrice: 499,
    color: '#1D4ED8',
    features: [
      'Up to 500 transactions/month',
      'Everything in Starter',
      'Payroll processing (up to 10 employees)',
      'Quarterly tax planning & estimates',
      'Cash flow forecasting & KPI dashboard',
      '24/7 priority support',
      'Monthly strategy review call (30 min)',
      'US / UK / AU tax return preparation',
    ],
    notIncluded: ['Unlimited transactions', 'Fractional CFO'],
    cta: 'Start with Growth',
    popular: true,
  },
  {
    icon: Building2,
    name: 'Scale',
    tagline: 'Full financial team for established businesses',
    monthlyPrice: 999,
    annualPrice: 849,
    color: '#7C3AED',
    features: [
      'Unlimited transactions',
      'Everything in Growth',
      'Payroll for unlimited employees',
      'Full tax filing (business + personal)',
      'Fractional CFO advisory (2 calls/month)',
      'Scenario modeling & growth planning',
      'Entity structure optimization',
      'Investor-ready financial packages',
      'Dedicated senior CA on account',
      '2hr priority response guarantee',
    ],
    notIncluded: [],
    cta: 'Start with Scale',
    popular: false,
  },
]

function PlanCard({ plan, annual, index, inView }) {
  const { icon: Icon, name, tagline, monthlyPrice, annualPrice, color, features, notIncluded, cta, popular } = plan
  const price = annual ? annualPrice : monthlyPrice

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, boxShadow: popular ? `0 24px 60px ${color}22` : 'var(--shadow-card-lg)' }}
      style={{
        position: 'relative', borderRadius: 20, padding: '32px 28px',
        background: popular
          ? `linear-gradient(160deg, rgba(29,78,216,0.12) 0%, var(--bg-card-to) 100%)`
          : 'linear-gradient(145deg, var(--bg-card-from) 0%, var(--bg-card-to) 100%)',
        border: `1px solid ${popular ? 'rgba(29,78,216,0.42)' : 'var(--border-subtle)'}`,
        boxShadow: popular ? '0 0 0 1px rgba(29,78,216,0.18), 0 20px 50px rgba(29,78,216,0.10)' : 'var(--card-shadow)',
        display: 'flex', flexDirection: 'column', gap: 0,
        transition: 'box-shadow 0.25s',
      }}
    >
      {popular && (
        <div style={{
          position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
          background: 'linear-gradient(90deg, #1D4ED8, #93C5FD)',
          borderRadius: 20, padding: '5px 20px',
          fontSize: 11, fontWeight: 800, color: '#fff', letterSpacing: '0.1em', textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}>
          Most Popular
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 20 }}>
        <div style={{ width: 46, height: 46, borderRadius: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${color}14`, border: `1px solid ${color}30`, flexShrink: 0 }}>
          <Icon size={22} style={{ color }} strokeWidth={1.8} />
        </div>
        <div>
          <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-heading)', lineHeight: 1 }}>{name}</h3>
          <p style={{ fontSize: 12.5, color: 'var(--text-dim)', marginTop: 5 }}>{tagline}</p>
        </div>
      </div>

      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
          <span style={{ fontSize: 13, color: 'var(--text-dim)', fontWeight: 500 }}>USD</span>
          <span style={{ display: 'inline-block', overflow: 'hidden', height: 50, verticalAlign: 'bottom', position: 'relative' }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={price}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: 'block', fontSize: 46, fontWeight: 900, color: 'var(--text-heading)', lineHeight: '50px' }}
              >
                ${price}
              </motion.span>
            </AnimatePresence>
          </span>
          <span style={{ fontSize: 13, color: 'var(--text-dim)' }}>/month</span>
        </div>
        <AnimatePresence>
          {annual && (
            <motion.p
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              style={{ fontSize: 12, color: '#10B981', fontWeight: 600, marginTop: 6 }}
            >
              Save ${(monthlyPrice - annualPrice) * 12}/year with annual billing
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div style={{ height: 1, background: 'var(--border-subtle)', marginBottom: 24 }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28, flex: 1 }}>
        {features.map((f, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            <CheckCircle2 size={15} style={{ color: '#059669', flexShrink: 0, marginTop: 1 }} />
            <span style={{ fontSize: 13.5, color: 'var(--text-body)', lineHeight: 1.4 }}>{f}</span>
          </div>
        ))}
        {notIncluded.map((f, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, opacity: 0.35 }}>
            <span style={{ width: 15, height: 15, flexShrink: 0, marginTop: 1, textAlign: 'center', fontSize: 14, color: 'var(--text-dim)' }}>–</span>
            <span style={{ fontSize: 13.5, color: 'var(--text-dim)', lineHeight: 1.4, textDecoration: 'line-through' }}>{f}</span>
          </div>
        ))}
      </div>

      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
        <Link
          to="/contact"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            padding: '13px 24px', borderRadius: 10,
            background: popular ? `linear-gradient(135deg, #1D4ED8, #1E3A8A)` : `${color}14`,
            border: popular ? 'none' : `1px solid ${color}28`,
            color: popular ? '#fff' : color,
            fontSize: 14, fontWeight: 700, textDecoration: 'none',
            boxShadow: popular ? '0 6px 20px rgba(29,78,216,0.30)' : 'none',
          }}
        >
          {cta} <ArrowRight size={15} />
        </Link>
      </motion.div>
    </motion.div>
  )
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false)
  const savingsPct = Math.round((1 - plans[0].annualPrice / plans[0].monthlyPrice) * 100)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'var(--bg-page-hero)' }}>
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-block mb-4 text-xs font-bold tracking-widest uppercase text-electric">
            Simple, Transparent Pricing
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-frost tracking-tight mb-5">
            One Flat Fee. <span className="text-gradient-blue">No Surprises.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-sky/65 leading-relaxed mb-8">
            All plans include a dedicated account manager, monthly financial reports, and our 30-day satisfaction guarantee.
          </motion.p>

          {/* Monthly / Annual toggle */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: 'var(--bg-card-solid)', border: '1px solid var(--border-medium)', borderRadius: 50, padding: '6px 8px' }}>
            <button onClick={() => setAnnual(false)} aria-pressed={!annual}
              style={{ padding: '8px 20px', borderRadius: 50, border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 700, background: !annual ? '#1D4ED8' : 'transparent', color: !annual ? '#fff' : 'var(--text-dim)', transition: 'all 0.2s' }}>
              Monthly
            </button>
            <button onClick={() => setAnnual(true)} aria-pressed={annual}
              style={{ padding: '8px 20px', borderRadius: 50, border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 700, background: annual ? '#1D4ED8' : 'transparent', color: annual ? '#fff' : 'var(--text-dim)', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: 8 }}>
              Annual
              <span style={{ background: '#059669', color: '#fff', fontSize: 10, fontWeight: 800, padding: '2px 8px', borderRadius: 20 }}>Save {savingsPct}%</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="section-padding" style={{ background: 'var(--bg-base)' }}>
        <div className="container-wide" ref={ref}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {plans.map((plan, i) => (
              <PlanCard key={plan.name} plan={plan} annual={annual} index={i} inView={inView} />
            ))}
          </div>

          {/* Guarantee strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ marginTop: 48, textAlign: 'center' }}
          >
            <div style={{ display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24, padding: '20px 32px', borderRadius: 14, background: 'rgba(5,150,105,0.06)', border: '1px solid rgba(5,150,105,0.20)' }}>
              {['30-Day Money-Back Guarantee', 'No Setup Fees', 'Cancel Anytime', 'NDA Signed on Day 1'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <CheckCircle2 size={15} style={{ color: '#059669' }} />
                  <span style={{ fontSize: 13, color: 'var(--text-body)', fontWeight: 600 }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="section-padding" style={{ background: 'var(--bg-alt)' }}>
        <div className="container-wide">
          <SectionHeading eyebrow="Questions?" title="Not sure which plan fits?" subtitle="Book a free 15-minute call and we'll recommend the right plan for your business — no pressure, no sales pitch." />
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to="/contact"
                className="btn-shimmer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', borderRadius: 10, background: 'linear-gradient(135deg, #1D4ED8, #1E3A8A)', color: '#fff', fontSize: 15, fontWeight: 700, textDecoration: 'none', boxShadow: '0 8px 24px rgba(29,78,216,0.32)' }}>
                Book a Free Call <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner />
    </PageWrapper>
  )
}
