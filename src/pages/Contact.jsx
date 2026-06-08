import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, CheckCircle2, Send } from 'lucide-react'
import PageWrapper from '../components/layout/PageWrapper'
import FloatingInput from '../components/ui/FloatingInput'
import { services } from '../constants/services'
import { CONTACT } from '../constants/contact'
import { slideLeft, slideRight } from '../constants/animations'

function LinkedInIcon({ size = 16, color = '#1D4ED8' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452z" />
    </svg>
  )
}

const contactInfo = [
  { Icon: Mail,         label: 'Email Us',       value: CONTACT.email,                    sub: 'Available 24/7 · We reply within 1 hour', href: `mailto:${CONTACT.email}`, fullWidth: true, compact: true },
  { Icon: Phone,        label: 'Call Us',        value: CONTACT.phone,                    sub: CONTACT.availability,                    href: `tel:+${CONTACT.phoneE164}` },
  { Icon: MapPin,       label: 'Office',         value: CONTACT.location,                 sub: 'By appointment only' },
  { Icon: Clock,        label: 'Business Hours', value: CONTACT.businessHours,            sub: CONTACT.businessHoursNote },
  { Icon: LinkedInIcon, label: 'LinkedIn',       value: 'Vanguard Financial Solutions',     sub: 'Connect with us professionally',        href: CONTACT.linkedin, external: true },
]

function ContactInfoCard({ Icon, label, value, sub, href, external, fullWidth, compact }) {
  const cardStyle = {
    background: 'linear-gradient(145deg, var(--bg-card-from) 0%, var(--bg-card-to) 100%)',
    border: '1px solid var(--border-subtle)',
    boxShadow: 'var(--card-shadow)',
  }

  const valueStyle = {
    fontSize: compact ? 12 : 13.5,
    color: 'var(--text-heading)',
    fontWeight: 600,
    lineHeight: 1.45,
    margin: 0,
    wordBreak: 'break-word',
    overflowWrap: 'anywhere',
    ...(href ? { textDecoration: 'none', transition: 'color 0.2s' } : {}),
  }

  return (
    <div
      className={`flex items-start gap-3 p-4 rounded-xl h-full ${fullWidth ? 'sm:col-span-2' : ''}`}
      style={cardStyle}
    >
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: 'rgba(29,78,216,0.10)', border: '1px solid rgba(29,78,216,0.22)' }}
      >
        <Icon size={16} color="#1D4ED8" />
      </div>
      <div className="min-w-0 flex-1">
        <p style={{ fontSize: 11, color: 'var(--text-dim)', fontWeight: 500, marginBottom: 4, letterSpacing: '0.02em' }}>{label}</p>
        {href ? (
          <a
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            style={valueStyle}
            onMouseEnter={e => { e.currentTarget.style.color = '#1D4ED8' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-heading)' }}
          >
            {value}
          </a>
        ) : (
          <p style={valueStyle}>{value}</p>
        )}
        <p style={{ fontSize: 11, color: 'var(--text-dim2)', marginTop: 4, lineHeight: 1.5 }}>{sub}</p>
      </div>
    </div>
  )
}

const initialForm = { name: '', email: '', phone: '', service: '', message: '' }

function ContactForm() {
  const [form, setForm]     = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.email.trim())   e.email   = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(err => ({ ...err, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1500)
  }

  const inputBase = `w-full px-4 py-3 rounded-xl text-sm text-frost placeholder-sky/30 outline-none transition-all duration-200 bg-transparent`
  const inputStyle = (name) => `${inputBase} ${errors[name] ? 'border-red-500/60' : 'border-royal/30 focus:border-electric/60'}`
  const labelBase  = `block text-xs font-semibold text-sky/60 uppercase tracking-wider mb-1.5`

  return (
    <div className="relative p-8 rounded-2xl"
         style={{ background: 'linear-gradient(145deg, var(--bg-card-from) 0%, var(--bg-card-to) 100%)', border: '1px solid var(--border-medium)', boxShadow: 'var(--card-shadow)' }}>
      <AnimatePresence mode="wait">
        {status === 'sent' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center text-center gap-5 py-12"
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center"
                 style={{ background: 'rgba(5,150,105,0.12)', border: '2px solid rgba(5,150,105,0.35)' }}>
              <CheckCircle2 size={32} style={{ color: '#059669' }} />
            </div>
            <div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--text-heading)', marginBottom: 8 }}>Message Sent!</h3>
              <p style={{ fontSize: 13.5, color: 'var(--text-muted)' }}>We're available 24/7 and will be in touch shortly.</p>
            </div>
            <button onClick={() => { setForm(initialForm); setStatus('idle') }}
                    style={{ fontSize: 13.5, color: '#1D4ED8', background: 'none', border: 'none', cursor: 'pointer' }}>
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FloatingInput
                label="Full Name" name="name" value={form.name}
                onChange={handleChange} placeholder="Jane Smith"
                error={errors.name} required
              />
              <FloatingInput
                label="Email Address" name="email" type="email" value={form.email}
                onChange={handleChange} placeholder="jane@company.com"
                error={errors.email} required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FloatingInput
                label="Phone Number" name="phone" value={form.phone}
                onChange={handleChange} placeholder="+977 98XXXXXXXX"
              />
              <div style={{ position: 'relative' }}>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: 'rgba(147,197,253,0.60)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>
                  Service Interested In
                </label>
                <select name="service" value={form.service} onChange={handleChange}
                        style={{ width: '100%', padding: '11px 16px', borderRadius: 12, fontSize: 13.5, color: 'var(--text-heading)', background: 'var(--bg-select)', border: '1.5px solid rgba(29,78,216,0.18)', outline: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                  <option value="">Select a service...</option>
                  {services.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                  <option value="general">General Inquiry</option>
                </select>
              </div>
            </div>

            <FloatingInput
              label="Message" name="message" as="textarea" rows={5} value={form.message}
              onChange={handleChange} placeholder="Tell us about your business and what you need help with..."
              error={errors.message} required
            />

            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white transition-all"
              style={{ background: 'linear-gradient(135deg, #1D4ED8, #1E3A8A)', boxShadow: '0 8px 24px rgba(29,78,216,0.30)' }}
            >
              {status === 'sending' ? (
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <><Send size={16} /> Send Message</>
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

function PageHero() {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'var(--bg-page-hero)' }}>
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="inline-block mb-4 text-xs font-bold tracking-widest uppercase text-electric">
          Let's Talk
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-frost tracking-tight mb-5">
          Start Your{' '}
          <span className="text-gradient-blue">Financial Journey</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-sky/65 leading-relaxed max-w-2xl mx-auto">
          Book a free consultation. No commitment, no jargon — just an honest conversation about how we can help your business thrive.
        </motion.p>
      </div>
    </section>
  )
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <PageWrapper>
      <PageHero />

      <section className="section-padding" style={{ background: 'var(--bg-base)' }}>
        <div className="container-wide" ref={ref}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

            {/* Left: info */}
            <motion.div variants={slideLeft} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="flex flex-col gap-8">
              <div>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--text-heading)', marginBottom: 8 }}>We'd love to hear from you</h2>
                <p style={{ fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.70 }}>
                  Reach out through any channel below or fill out the form — we're available 24/7 and typically respond within the hour.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {contactInfo.map((item, i) => (
                  <ContactInfoCard key={i} {...item} />
                ))}
              </div>

              {/* Free call highlight */}
              <div className="p-5 rounded-xl"
                   style={{ background: 'rgba(5,150,105,0.07)', border: '1px solid rgba(5,150,105,0.20)' }}>
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 size={18} style={{ color: '#059669' }} />
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-heading)' }}>Free 30-Min Discovery Call</h3>
                </div>
                <p style={{ fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.70 }}>
                  Not sure if we're the right fit? Let's find out together. No hard sell, no obligation — just a conversation about your business.
                </p>
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div variants={slideRight} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
