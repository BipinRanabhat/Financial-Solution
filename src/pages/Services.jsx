import { useRef } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import * as Icons from 'lucide-react'
import PageWrapper from '../components/layout/PageWrapper'
import SectionHeading from '../components/ui/SectionHeading'
import CTABanner from '../components/sections/home/CTABanner'
import { services } from '../constants/services'
import { fadeUp, slideLeft, slideRight, staggerContainer, cardReveal } from '../constants/animations'

function PageHero() {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden"
             style={{ background: 'linear-gradient(180deg, #060A14 0%, #0B1120 100%)' }}>
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
      style={{ background: idx % 2 === 0 ? '#0B1120' : '#0D1628' }}
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
            {/* Number + title */}
            <div className="flex items-center gap-4">
              <span className="text-5xl font-black text-electric/20 leading-none">{service.number}</span>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                   style={{ background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.25)' }}>
                <Icon size={20} className="text-electric" strokeWidth={1.8} />
              </div>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-frost mb-2 tracking-tight">{service.title}</h2>
              <p className="text-electric text-sm font-semibold">{service.tagline}</p>
            </div>

            <p className="text-sm text-sky/65 leading-relaxed">{service.description}</p>

            {/* Bullets */}
            <ul className="flex flex-col gap-3">
              {service.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-ice/70">
                  <Icons.CheckCircle2 size={16} className="text-electric mt-0.5 flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            {/* Tools */}
            {service.tools && (
              <div className="flex flex-wrap gap-2 mt-1">
                {service.tools.map((tool, i) => (
                  <span key={i} className="px-3 py-1 rounded-full text-xs font-semibold text-ice/70"
                        style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.25)' }}>
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
                 style={{ background: 'linear-gradient(145deg, rgba(30,77,140,0.3) 0%, rgba(11,17,32,0.95) 100%)', border: '1px solid rgba(59,130,246,0.2)' }}>
              <div className="absolute inset-0 pointer-events-none"
                   style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(59,130,246,0.1) 0%, transparent 70%)' }} />
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.25, 0.15] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 50%, rgba(59,130,246,0.15) 0%, transparent 60%)' }}
              />
              <div className="relative z-10 flex flex-col items-center gap-5">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center"
                     style={{ background: 'rgba(59,130,246,0.15)', border: '2px solid rgba(59,130,246,0.3)' }}>
                  <Icon size={40} className="text-electric" strokeWidth={1.5} />
                </div>
                <span className="text-7xl font-black text-electric/10">{service.number}</span>
                <p className="text-sm text-sky/50 text-center max-w-xs">{service.tagline}</p>
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
    { step: '01', title: 'Discovery Call',    desc: 'We learn your business, current setup, and goals in a free 30-minute call.' },
    { step: '02', title: 'Custom Onboarding', desc: 'We set up your accounts, migrate data, and create your financial workflows.' },
    { step: '03', title: 'Ongoing Management',desc: 'Monthly deliverables, proactive alerts, and real-time access to your numbers.' },
  ]

  return (
    <section className="section-padding" style={{ background: '#0B1120' }}>
      <div className="container-wide">
        <div className="mb-14 flex flex-col items-center">
          <SectionHeading eyebrow="How It Works" title="Simple Process, Powerful Results" />
        </div>
        <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-px"
               style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent)' }} />

          {steps.map(({ step, title, desc }, i) => (
            <motion.div key={i} variants={cardReveal}
              className="relative flex flex-col items-center text-center gap-4 p-7 rounded-2xl"
              style={{ background: 'rgba(30,77,140,0.12)', border: '1px solid rgba(59,130,246,0.18)' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-electric z-10"
                   style={{ background: 'rgba(59,130,246,0.15)', border: '2px solid rgba(59,130,246,0.4)' }}>
                {step}
              </div>
              <h3 className="text-base font-bold text-frost">{title}</h3>
              <p className="text-sm text-sky/60 leading-relaxed">{desc}</p>
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
