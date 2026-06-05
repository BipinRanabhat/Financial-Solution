import { useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import * as Icons from 'lucide-react'
import PageWrapper from '../components/layout/PageWrapper'
import SectionHeading from '../components/ui/SectionHeading'
import CTABanner from '../components/sections/home/CTABanner'
import { services } from '../constants/services'
import { slideLeft, slideRight, staggerContainer, cardReveal } from '../constants/animations'

function PageHero() {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'var(--bg-page-hero)' }}>
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="inline-block mb-4 text-xs font-bold tracking-widest uppercase text-electric">
          What We Offer
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-frost tracking-tight mb-5">
          Services Built for{' '}
          <span className="text-gradient-blue">Your Bottom Line</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-sky/65 leading-relaxed max-w-2xl mx-auto">
          Every service we offer is designed to give you more time, more clarity, and more confidence in your financial decisions.
        </motion.p>
      </div>
    </section>
  )
}

function ServiceDetailBlock({ service, idx }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })
  const isReversed = idx % 2 !== 0
  const Icon = Icons[service.iconName] || Icons.BookOpen

  return (
    <section
      id={service.id}
      ref={ref}
      className="section-padding"
      style={{ background: idx % 2 === 0 ? 'var(--bg-base)' : 'var(--bg-alt)' }}
    >
      <div className="container-wide">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>

          {/* Content side */}
          <motion.div
            variants={isReversed ? slideRight : slideLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className={`flex flex-col gap-6 ${isReversed ? 'lg:order-2' : ''}`}
          >
            <div className="flex items-center gap-4">
              <span style={{ fontSize: 52, fontWeight: 900, color: 'rgba(29,78,216,0.18)', lineHeight: 1 }}>{service.number}</span>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                   style={{ background: 'rgba(29,78,216,0.10)', border: '1px solid rgba(29,78,216,0.22)' }}>
                <Icon size={20} color="#1D4ED8" strokeWidth={1.8} />
              </div>
            </div>

            <div>
              <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 800, color: 'var(--text-heading)', marginBottom: 8, letterSpacing: '-0.02em' }}>{service.title}</h2>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#1D4ED8' }}>{service.tagline}</p>
            </div>

            <p style={{ fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.75 }}>{service.description}</p>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, listStyle: 'none', padding: 0 }}>
              {service.bullets.map((b, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13.5, color: 'var(--text-ice)' }}>
                  <Icons.CheckCircle2 size={16} style={{ color: '#059669', marginTop: 2, flexShrink: 0 }} />
                  {b}
                </li>
              ))}
            </ul>

            {service.tools && (
              <div className="flex flex-wrap gap-2 mt-1">
                {service.tools.map((tool, i) => (
                  <span key={i} style={{ padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 600, color: 'var(--text-body)', background: 'rgba(29,78,216,0.08)', border: '1px solid rgba(29,78,216,0.22)' }}>
                    {tool}
                  </span>
                ))}
              </div>
            )}
          </motion.div>

          {/* Visual side */}
          <motion.div
            variants={isReversed ? slideLeft : slideRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className={isReversed ? 'lg:order-1' : ''}
          >
            <div className="relative rounded-2xl p-10 aspect-square flex flex-col items-center justify-center overflow-hidden"
                 style={{ background: 'linear-gradient(145deg, var(--bg-card-from) 0%, var(--bg-card-to) 100%)', border: '1px solid var(--border-medium)', boxShadow: 'var(--card-shadow)' }}>
              <div className="absolute inset-0 pointer-events-none"
                   style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(29,78,216,0.08) 0%, transparent 70%)' }} />
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.10, 0.20, 0.10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 50%, rgba(29,78,216,0.12) 0%, transparent 60%)' }}
              />
              <div className="relative z-10 flex flex-col items-center gap-5">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center"
                     style={{ background: 'rgba(29,78,216,0.12)', border: '2px solid rgba(29,78,216,0.28)' }}>
                  <Icon size={40} color="#1D4ED8" strokeWidth={1.5} />
                </div>
                <span style={{ fontSize: 72, fontWeight: 900, color: 'rgba(29,78,216,0.08)', lineHeight: 1 }}>{service.number}</span>
                <p style={{ fontSize: 13, color: 'var(--text-dim)', textAlign: 'center', maxWidth: 240 }}>{service.tagline}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  const steps = [
    { step: '01', title: 'Discovery Call',     desc: 'We learn your business, current setup, and goals in a free 30-minute call.' },
    { step: '02', title: 'Custom Onboarding',  desc: 'We set up your accounts, migrate data, and create your financial workflows.' },
    { step: '03', title: 'Ongoing Management', desc: 'Monthly deliverables, proactive alerts, and real-time access to your numbers.' },
  ]

  return (
    <section className="section-padding" style={{ background: 'var(--bg-base)' }}>
      <div className="container-wide">
        <div className="mb-14 flex flex-col items-center">
          <SectionHeading eyebrow="How It Works" title="Simple Process, Powerful Results" />
        </div>
        <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-px"
               style={{ background: 'linear-gradient(90deg, transparent, rgba(29,78,216,0.28), transparent)' }} />

          {steps.map(({ step, title, desc }, i) => (
            <motion.div key={i} variants={cardReveal}
              className="relative flex flex-col items-center text-center gap-4 p-7 rounded-xl"
              style={{ background: 'linear-gradient(145deg, var(--bg-card-from) 0%, var(--bg-card-to) 100%)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--card-shadow)' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold z-10"
                   style={{ background: 'rgba(29,78,216,0.12)', border: '2px solid rgba(29,78,216,0.35)', color: '#1D4ED8' }}>
                {step}
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-heading)' }}>{title}</h3>
              <p style={{ fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.70 }}>{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default function Services() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 400)
    }
  }, [hash])

  return (
    <PageWrapper>
      <PageHero />
      <ProcessSection />
      {services.map((service, idx) => (
        <ServiceDetailBlock key={service.id} service={service} idx={idx} />
      ))}
      <CTABanner />
    </PageWrapper>
  )
}
