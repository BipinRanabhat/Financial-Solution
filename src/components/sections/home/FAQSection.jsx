import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import SectionHeading from '../../ui/SectionHeading'

const faqs = [
  { q: 'Is my financial data safe with an overseas firm?', a: 'Absolutely. We use 256-bit encrypted file transfers, sign NDAs with every client before onboarding, and only work within tools you already trust — QuickBooks Online, Xero, and Google Workspace. Your data never sits on our local servers.' },
  { q: 'Do you file US, UK, and Australian taxes?', a: 'Yes. Our team is trained in US federal and state tax requirements, UK VAT and HMRC submissions, and Australian BAS/GST obligations. We prepare all filings and coordinate with local CAs or registered agents where required for final submission.' },
  { q: 'What time zone do you work in? Will there be communication delays?', a: 'Our Nepal team (UTC+5:45) overlaps with US East Coast mornings, UK afternoons, and Australian early mornings. In practice, you send questions at the end of your day and wake up to completed work. Most clients find this more efficient than a local firm.' },
  { q: 'How do I share documents and files with you?', a: 'We work through your preferred tool — QuickBooks Online or Xero for live accounting access, Google Drive or Dropbox for documents, and a dedicated client portal for reports. No USB drives, no email attachments with sensitive data.' },
  { q: 'What accounting software do you support?', a: 'QuickBooks Online, QuickBooks Desktop, Xero, FreshBooks, Wave, and Zoho Books. We also work with payroll platforms including Gusto, ADP, and Paychex. If you use something else, contact us — we likely support it.' },
  { q: 'How quickly do you respond to questions?', a: 'Every client has a dedicated account manager who is available 24/7. We operate around the clock — there are no "office hours" you have to work around. For day-to-day questions, you\'ll typically hear back within 1 hour via WhatsApp or email. For anything urgent, your account manager is directly reachable at any time of day or night.' },
  { q: 'Do I need to sign a long-term contract?', a: 'No. All our plans are month-to-month. We earn your business every month by delivering results, not by locking you in. You can pause, scale up, or cancel with 30 days\' notice — no penalties.' },
  { q: 'What if I\'m not happy with the service?', a: 'We offer a 30-day satisfaction guarantee on all new accounts. If you\'re not completely satisfied in the first month, we\'ll refund your first payment — no questions asked. Beyond that, you can cancel any time with 30 days\' notice.' },
  { q: 'How does onboarding work? How long does it take?', a: 'Our onboarding is structured to be live within 7 business days. Day 1: intro call + NDA. Days 2–3: access setup (QuickBooks/Xero, bank feeds). Days 4–5: chart of accounts review. Day 6–7: first reconciliation and handoff report. You\'ll have full visibility throughout.' },
  { q: 'How is Vanguard different from hiring a local bookkeeper?', a: 'A local bookkeeper typically costs $3,500–$6,000/month as an employee (salary + benefits + tools). Vanguard gives you a full team — bookkeeper, payroll specialist, and reporting analyst — for a fraction of that. Plus certifications, guaranteed response times, and no sick days or turnover.' },
]

function FAQItem({ q, a, isOpen, onClick, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      style={{ borderRadius: 12, overflow: 'hidden', border: `1px solid ${isOpen ? 'rgba(29,78,216,0.32)' : 'var(--border-subtle)'}`, transition: 'border-color 0.25s', boxShadow: 'var(--card-shadow)' }}
    >
      <button
        onClick={onClick}
        style={{
          width: '100%', textAlign: 'left', padding: '20px 24px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
          background: isOpen ? 'var(--bg-faq-open)' : 'var(--bg-faq-closed)',
          cursor: 'pointer', border: 'none', transition: 'background 0.25s',
        }}
      >
        <span style={{ fontSize: 15, fontWeight: 600, color: isOpen ? 'var(--text-heading)' : 'var(--text-body)', lineHeight: 1.4 }}>{q}</span>
        <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', background: isOpen ? 'var(--bg-icon-minus)' : 'var(--bg-icon-plus)', transition: 'background 0.25s' }}>
          {isOpen ? <Minus size={14} color="#1D4ED8" /> : <Plus size={14} color="#1D4ED8" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '0 24px 20px', fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.78, background: 'var(--bg-faq-answer)' }}>
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  const [open, setOpen] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="section-padding" style={{ background: 'var(--bg-alt)' }}>
      <div className="container-wide" ref={ref}>
        <div className="mb-14 flex flex-col items-center">
          <SectionHeading
            eyebrow="Got Questions?"
            title="Everything You Need to Know"
            subtitle="Transparent answers to the questions every smart business owner asks before outsourcing their finances."
          />
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              index={i}
              inView={inView}
              q={item.q}
              a={item.a}
              isOpen={open === i}
              onClick={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
