import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Target, Eye, Heart, Users, Award, TrendingUp, CheckCircle2 } from 'lucide-react'
import PageWrapper from '../components/layout/PageWrapper'
import SectionHeading from '../components/ui/SectionHeading'
import CTABanner from '../components/sections/home/CTABanner'
import { fadeUp, slideLeft, slideRight, staggerContainer, cardReveal } from '../constants/animations'

const values = [
  { Icon: Target,     title: 'Precision',     desc: 'Every number matters. We approach every file with the accuracy your business deserves.' },
  { Icon: Eye,        title: 'Transparency',  desc: 'No jargon, no surprises. Clear communication and honest advice at every step.' },
  { Icon: Heart,      title: 'Commitment',    desc: 'We treat your business like our own — with real care, urgency, and accountability.' },
  { Icon: TrendingUp, title: 'Growth Focus',  desc: 'We don\'t just maintain books. We identify opportunities and help you scale strategically.' },
]

const team = [
  { name: 'Aryan Shrestha',  role: 'Founder & Lead CPA',   initials: 'AS', bio: '12+ years in international accounting. CPA-certified specialist in SMB financial strategy and remote client management.' },
  { name: 'Sanjib Karki',    role: 'Senior Bookkeeper',    initials: 'SK', bio: 'QuickBooks ProAdvisor and Xero Certified. Specializes in e-commerce, retail, and multi-currency bookkeeping.' },
  { name: 'Anita Thapa',     role: 'Payroll Specialist',   initials: 'AT', bio: 'Certified Payroll Professional with 7+ years managing global payroll for distributed teams across the US and UK.' },
]

function PageHero() {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden"
             style={{ background: 'linear-gradient(180deg, #060A14 0%, #0B1120 100%)' }}>
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="inline-block mb-4 text-xs font-bold tracking-widest uppercase text-electric"
        >
          Our Story
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-frost tracking-tight mb-5"
        >
          The Team Behind <span className="text-gradient-blue">Your Numbers</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-sky/65 leading-relaxed max-w-2xl mx-auto"
        >
          Vanguard was built by a team of Nepali accounting professionals who believe geography shouldn't limit the quality of financial expertise you can access. We deliver CPA-level service to businesses worldwide, remotely.
        </motion.p>
      </div>
    </section>
  )
}

function StorySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })
  return (
    <section className="section-padding" style={{ background: '#0B1120' }}>
      <div className="container-wide" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={slideLeft} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="flex flex-col gap-5">
            <SectionHeading eyebrow="Who We Are" title="Built for Business Owners, Not Big Corporations" align="left" />
            <p className="text-sm text-sky/65 leading-relaxed">
              Vanguard started with a simple observation: small business owners worldwide were spending hours every week wrestling with spreadsheets, missing deadlines, and making decisions based on outdated numbers. We saw an opportunity to change that — from Kathmandu, Nepal.
            </p>
            <p className="text-sm text-sky/65 leading-relaxed">
              We set out to level the playing field. Today, we serve 200+ businesses — from solo consultants to 50-person teams across the US, UK, and Australia — delivering the same quality of financial management that Fortune 500 companies enjoy.
            </p>
            <div className="flex flex-col gap-3 mt-2">
              {['Founded in 2016, headquartered in Kathmandu', 'Serving clients across the US, UK & Australia', 'Certified in QuickBooks, Xero, and CPP'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-ice/70">
                  <CheckCircle2 size={15} className="text-electric flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={slideRight} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: '2016', label: 'Year Founded' },
                { val: '200+', label: 'Happy Clients' },
                { val: '3',    label: 'Countries Served' },
                { val: '4.9★', label: 'Avg. Rating' },
              ].map(({ val, label }, i) => (
                <div key={i} className="p-6 rounded-2xl flex flex-col gap-2"
                     style={{ background: 'rgba(30,77,140,0.2)', border: '1px solid rgba(59,130,246,0.2)' }}>
                  <span className="text-3xl font-black text-gradient-blue">{val}</span>
                  <span className="text-xs text-sky/60 font-medium">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ValuesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })
  return (
    <section className="section-padding" style={{ background: '#0D1628' }}>
      <div className="container-wide">
        <div className="mb-14 flex flex-col items-center">
          <SectionHeading eyebrow="Our Values" title="The Principles That Guide Everything We Do" />
        </div>
        <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map(({ Icon, title, desc }, i) => (
            <motion.div key={i} variants={cardReveal}
              className="flex flex-col gap-4 p-6 rounded-2xl"
              style={{ background: 'rgba(30,77,140,0.15)', border: '1px solid rgba(59,130,246,0.2)' }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                   style={{ background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.25)' }}>
                <Icon size={20} className="text-electric" strokeWidth={1.8} />
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

function TeamSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })
  return (
    <section className="section-padding" style={{ background: '#0B1120' }}>
      <div className="container-wide">
        <div className="mb-14 flex flex-col items-center">
          <SectionHeading eyebrow="The Team" title="Experts You Can Count On" subtitle="A dedicated team of Nepali accounting professionals serving clients globally with precision and care." />
        </div>
        <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {team.map(({ name, role, initials, bio }, i) => (
            <motion.div key={i} variants={cardReveal}
              className="flex flex-col items-center text-center gap-4 p-7 rounded-2xl"
              style={{ background: 'rgba(30,77,140,0.15)', border: '1px solid rgba(59,130,246,0.2)' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold text-electric"
                   style={{ background: 'rgba(59,130,246,0.15)', border: '2px solid rgba(59,130,246,0.4)' }}>
                {initials}
              </div>
              <div>
                <h3 className="text-base font-bold text-frost">{name}</h3>
                <p className="text-xs text-electric font-medium mt-0.5">{role}</p>
              </div>
              <p className="text-sm text-sky/60 leading-relaxed">{bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <PageWrapper>
      <PageHero />
      <StorySection />
      <ValuesSection />
      <TeamSection />
      <CTABanner />
    </PageWrapper>
  )
}
