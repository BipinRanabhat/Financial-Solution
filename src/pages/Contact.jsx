import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, CheckCircle2, Send } from 'lucide-react'
import PageWrapper from '../components/layout/PageWrapper'
import { services } from '../constants/services'
import { fadeUp, slideLeft, slideRight } from '../constants/animations'

const contactInfo = [
  { Icon: Mail,    label: 'Email Us',       value: 'hello@vanguardaccounting.com', sub: 'We reply within 24 hours' },
  { Icon: Phone,   label: 'Call Us',        value: '+1 (555) 234-5678',            sub: 'Mon–Fri, 9am–6pm EST' },
  { Icon: MapPin,  label: 'Office',         value: 'New York, NY 10001',           sub: 'By appointment only' },
  { Icon: Clock,   label: 'Business Hours', value: 'Mon–Fri: 9am – 6pm EST',      sub: 'Closed weekends & holidays' },
]

const initialForm = { name: '', email: '', phone: '', service: '', message: '' }

function ContactForm() {
  const [form, setForm]     = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent

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
  const labelBase = `block text-xs font-semibold text-sky/60 uppercase tracking-wider mb-1.5`

  return (
    <div className="relative p-8 rounded-2xl" style={{ background: 'rgba(26,39,68,0.4)', border: '1px solid rgba(59,130,246,0.2)' }}>
      <AnimatePresence mode="wait">
        {status === 'sent' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center text-center gap-5 py-12"
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center"
                 style={{ background: 'rgba(59,130,246,0.15)', border: '2px solid rgba(59,130,246,0.4)' }}>
              <CheckCircle2 size={32} className="text-electric" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-frost mb-2">Message Sent!</h3>
              <p className="text-sm text-sky/60">We'll get back to you within 24 hours.</p>
            </div>
            <button onClick={() => { setForm(initialForm); setStatus('idle') }}
                    className="text-sm text-electric hover:text-sky transition-colors">
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelBase}>Full Name *</label>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Jane Smith"
                       className={`${inputStyle('name')} border`} />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className={labelBase}>Email Address *</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="jane@company.com"
                       className={`${inputStyle('email')} border`} />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelBase}>Phone Number</label>
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000"
                       className={`${inputStyle('phone')} border border-royal/30 focus:border-electric/60`} />
              </div>
              <div>
                <label className={labelBase}>Service Interested In</label>
                <select name="service" value={form.service} onChange={handleChange}
                        className={`${inputBase} border border-royal/30 focus:border-electric/60 cursor-pointer`}
                        style={{ background: 'rgba(11,17,32,0.8)' }}>
                  <option value="">Select a service...</option>
                  {services.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                  <option value="general">General Inquiry</option>
                </select>
              </div>
            </div>

            <div>
              <label className={labelBase}>Message *</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={5}
                        placeholder="Tell us about your business and what you need help with..."
                        className={`${inputStyle('message')} border resize-none`} />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
            </div>

            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white transition-all"
              style={{ background: 'linear-gradient(135deg, #3B82F6, #1E4D8C)', boxShadow: '0 8px 24px rgba(59,130,246,0.3)' }}
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
    <section className="relative pt-28 pb-16 overflow-hidden"
             style={{ background: 'linear-gradient(180deg, #060A14 0%, #0B1120 100%)' }}>
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

      <section className="section-padding" style={{ background: '#0B1120' }}>
        <div className="container-wide" ref={ref}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

            {/* Left: info */}
            <motion.div variants={slideLeft} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="flex flex-col gap-8">
              <div>
                <h2 className="text-2xl font-bold text-frost mb-2">We'd love to hear from you</h2>
                <p className="text-sm text-sky/60 leading-relaxed">
                  Reach out through any channel below or fill out the form and we'll respond within one business day.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map(({ Icon, label, value, sub }, i) => (
                  <div key={i} className="flex items-start gap-3.5 p-4 rounded-xl"
                       style={{ background: 'rgba(30,77,140,0.15)', border: '1px solid rgba(59,130,246,0.18)' }}>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                         style={{ background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.25)' }}>
                      <Icon size={16} className="text-electric" />
                    </div>
                    <div>
                      <p className="text-xs text-sky/50 font-medium mb-0.5">{label}</p>
                      <p className="text-sm text-frost font-semibold">{value}</p>
                      <p className="text-xs text-sky/40 mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Free call highlight */}
              <div className="p-5 rounded-2xl" style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)' }}>
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 size={18} className="text-electric" />
                  <h3 className="text-base font-bold text-frost">Free 30-Min Discovery Call</h3>
                </div>
                <p className="text-sm text-sky/60 leading-relaxed">
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
