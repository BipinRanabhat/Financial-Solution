import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { DollarSign, Clock, TrendingUp, ArrowRight, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageWrapper from '../components/layout/PageWrapper'
import CTABanner from '../components/sections/home/CTABanner'

const VANGUARD_COST = 599

function Slider({ label, min, max, step, value, onChange, format }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <label style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-body)' }}>{label}</label>
        <span style={{ fontSize: 16, fontWeight: 800, color: '#1D4ED8' }}>{format(value)}</span>
      </div>
      <div style={{ position: 'relative', height: 6, borderRadius: 6, background: 'rgba(29,78,216,0.14)' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, borderRadius: 6, background: 'linear-gradient(90deg, #1D4ED8, #93C5FD)', width: `${((value - min) / (max - min)) * 100}%` }} />
        <input
          type="range" min={min} max={max} step={step} value={value}
          onChange={e => onChange(Number(e.target.value))}
          style={{ position: 'absolute', inset: 0, width: '100%', opacity: 0, cursor: 'pointer', height: '100%' }}
        />
        <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: `${((value - min) / (max - min)) * 100}%`, width: 18, height: 18, borderRadius: '50%', background: '#1D4ED8', border: '3px solid var(--bg-base)', boxShadow: '0 2px 8px rgba(29,78,216,0.50)', marginLeft: -9, pointerEvents: 'none' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 11, color: 'var(--text-dim2)' }}>{format(min)}</span>
        <span style={{ fontSize: 11, color: 'var(--text-dim2)' }}>{format(max)}</span>
      </div>
    </div>
  )
}

function ResultCard({ icon: Icon, color, label, value, sub }) {
  return (
    <div style={{ padding: '24px', borderRadius: 16, background: `${color}0d`, border: `1px solid ${color}28`, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ width: 40, height: 40, borderRadius: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${color}18` }}>
        <Icon size={18} style={{ color }} strokeWidth={2} />
      </div>
      <div style={{ fontSize: 32, fontWeight: 900, color: 'var(--text-heading)', lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-body)' }}>{label}</div>
      {sub && <div style={{ fontSize: 12, color: 'var(--text-dim2)', lineHeight: 1.5 }}>{sub}</div>}
    </div>
  )
}

export default function Calculator() {
  const [revenue, setRevenue] = useState(25000)
  const [hours, setHours] = useState(10)
  const [currentCost, setCurrentCost] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  const hourlyRate = 75
  const hoursSavedMonthly = Math.round(hours * 4 * 0.85)
  const hourValueSaved = hoursSavedMonthly * hourlyRate
  const inHouseCost = Math.round(revenue * 0.08)
  const savingsVsInHouse = Math.max(0, inHouseCost - VANGUARD_COST)
  const savingsVsCurrent = Math.max(0, currentCost - VANGUARD_COST)
  const annualSavings = Math.max(savingsVsInHouse, savingsVsCurrent) * 12

  const fmt = (n) => n >= 1000 ? `$${(n / 1000).toFixed(1)}k` : `$${n}`
  const fmtHr = (n) => `${n} hrs`
  const fmtCur = (n) => `$${n.toLocaleString()}`

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-28 pb-10 overflow-hidden" style={{ background: 'var(--bg-page-hero)' }}>
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-block mb-4 text-xs font-bold tracking-widest uppercase text-electric">
            ROI Calculator
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-frost tracking-tight mb-5">
            See Exactly <span className="text-gradient-blue">What You'd Save</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-sky/65 leading-relaxed">
            Adjust the sliders below to get a personalised savings estimate for your business.
          </motion.p>
        </div>
      </section>

      {/* Calculator */}
      <section className="section-padding" style={{ background: 'var(--bg-base)' }} ref={ref}>
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Inputs */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ padding: '36px', borderRadius: 20, background: 'linear-gradient(145deg, var(--bg-card-from) 0%, var(--bg-card-to) 100%)', border: '1px solid var(--border-medium)', display: 'flex', flexDirection: 'column', gap: 32 }}
            >
              <div>
                <h2 style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-heading)', marginBottom: 4 }}>Your Business</h2>
                <p style={{ fontSize: 13, color: 'var(--text-dim)' }}>Tell us about your current situation</p>
              </div>

              <Slider label="Monthly Revenue" min={5000} max={500000} step={5000} value={revenue} onChange={setRevenue} format={fmtCur} />
              <Slider label="Hours/week spent on accounting" min={2} max={40} step={1} value={hours} onChange={setHours} format={fmtHr} />
              <Slider label="Current monthly accounting cost" min={0} max={5000} step={100} value={currentCost} onChange={setCurrentCost} format={fmtCur} />

              <div style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(29,78,216,0.06)', border: '1px solid rgba(29,78,216,0.18)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <ChevronDown size={14} color="#1D4ED8" />
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#1D4ED8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Vanguard Growth Plan</span>
                </div>
                <div style={{ fontSize: 22, fontWeight: 900, color: 'var(--text-heading)' }}>$599<span style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-dim)' }}>/month</span></div>
                <div style={{ fontSize: 12, color: 'var(--text-dim2)', marginTop: 4 }}>Bookkeeping + Tax + Payroll + Dedicated CPA</div>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
            >
              <div>
                <h2 style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-heading)', marginBottom: 4 }}>Your Savings</h2>
                <p style={{ fontSize: 13, color: 'var(--text-dim)' }}>Updated instantly as you move the sliders</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ResultCard
                  icon={Clock} color="#1D4ED8"
                  label="Hours Freed Per Month"
                  value={`${hoursSavedMonthly} hrs`}
                  sub={`Worth ~$${hourValueSaved.toLocaleString()} of your time at $75/hr`}
                />
                <ResultCard
                  icon={DollarSign} color="#059669"
                  label="Savings vs. In-House"
                  value={fmt(savingsVsInHouse)}
                  sub="Per month vs. a part-time in-house bookkeeper"
                />
                {currentCost > 0 && (
                  <ResultCard
                    icon={TrendingUp} color="#7C3AED"
                    label="Savings vs. Current Cost"
                    value={fmt(savingsVsCurrent)}
                    sub="Monthly savings switching to Vanguard"
                  />
                )}
                <ResultCard
                  icon={TrendingUp} color="#D97706"
                  label="Estimated Annual Savings"
                  value={annualSavings >= 1000 ? `$${(annualSavings / 1000).toFixed(1)}k` : `$${annualSavings}`}
                  sub="Combined time + money savings per year"
                />
              </div>

              {/* Summary bar */}
              <motion.div
                key={annualSavings}
                initial={{ scale: 0.97, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{ padding: '24px', borderRadius: 16, background: 'linear-gradient(135deg, rgba(29,78,216,0.12) 0%, rgba(5,150,105,0.06) 100%)', border: '1px solid rgba(29,78,216,0.25)', textAlign: 'center' }}
              >
                <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 8 }}>Your estimated first-year ROI with Vanguard</p>
                <div style={{ fontSize: 42, fontWeight: 900, background: 'linear-gradient(135deg, #93C5FD, #1D4ED8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {annualSavings > 0 ? `$${annualSavings.toLocaleString()}` : 'Book a call'}
                </div>
                <p style={{ fontSize: 12, color: 'var(--text-dim2)', marginTop: 6 }}>in time and cost savings</p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Link to="/contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '15px', borderRadius: 12, background: 'linear-gradient(135deg, #1D4ED8, #1E3A8A)', color: '#fff', fontSize: 15, fontWeight: 700, textDecoration: 'none', boxShadow: '0 8px 24px rgba(29,78,216,0.32)' }}>
                  Claim Your Savings — Book a Free Call <ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner />
    </PageWrapper>
  )
}
