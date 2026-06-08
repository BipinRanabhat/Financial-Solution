import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle, Globe } from 'lucide-react'

function LinkedInIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452z" />
    </svg>
  )
}
import { navLinks } from '../../constants/navigation'
import { services } from '../../constants/services'
import { CONTACT } from '../../constants/contact'

const socials = [
  { Icon: LinkedInIcon,   href: CONTACT.linkedin, label: 'LinkedIn' },
  { Icon: MessageCircle,  href: CONTACT.whatsapp, label: 'WhatsApp' },
  { Icon: Globe,          href: CONTACT.website,  label: 'Website' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: 'var(--bg-deep)', borderTop: '1px solid var(--border-subtle)', position: 'relative', overflow: 'hidden' }}>
      {/* Top edge glow */}
      <div style={{
        position: 'absolute', top: 0, left: '15%', right: '15%', height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(29,78,216,0.30), transparent)',
        pointerEvents: 'none',
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <Link to="/" className="flex items-center group">
              <img
                src="/logo.png"
                alt="Vanguard"
                style={{ height: 72, width: 'auto', objectFit: 'contain', filter: 'var(--logo-filter)' }}
              />
            </Link>
            <p style={{ fontSize: 13.5, color: 'var(--text-dim)', lineHeight: 1.72, maxWidth: 260, margin: 0 }}>
              Nepal-based accounting professionals delivering financial clarity and digital presence management for businesses worldwide.
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, borderColor: 'rgba(29,78,216,0.45)', color: '#1D4ED8' }}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                  style={{ border: '1px solid var(--border-strong)', color: 'var(--text-dim2)' }}
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#1D4ED8', margin: 0 }}>Services</h4>
            <ul className="flex flex-col gap-2.5" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {services.map(s => (
                <li key={s.id}>
                  <Link
                    to={`/services#${s.id}`}
                    style={{ fontSize: 13.5, color: 'var(--text-dim)', textDecoration: 'none', display: 'inline-block', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text-heading)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dim)'}
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#1D4ED8', margin: 0 }}>Company</h4>
            <ul className="flex flex-col gap-2.5" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {navLinks.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    style={{ fontSize: 13.5, color: 'var(--text-dim)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text-heading)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dim)'}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#1D4ED8', margin: 0 }}>Contact</h4>
            <ul className="flex flex-col gap-3" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { Icon: Mail,   text: CONTACT.email },
                { Icon: Phone,  text: CONTACT.phone },
                { Icon: MapPin, text: CONTACT.location },
              ].map(({ Icon, text }, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13.5, color: 'var(--text-dim)' }}>
                  <Icon size={14} style={{ color: '#1D4ED8', marginTop: 2, flexShrink: 0 }} />
                  {text}
                </li>
              ))}
            </ul>

            {/* Remote badge — Emerald dot */}
            <div
              style={{ marginTop: 4, display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 14px', borderRadius: 8, fontSize: 12, fontWeight: 500, background: 'rgba(5,150,105,0.07)', border: '1px solid rgba(5,150,105,0.18)', color: 'rgba(52,211,153,0.75)' }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#059669', flexShrink: 0, display: 'inline-block', boxShadow: '0 0 6px rgba(5,150,105,0.6)' }} />
              Serving clients globally · Remote
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{ marginTop: 56, paddingTop: 24, borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}
        >
          <p style={{ fontSize: 12, color: 'var(--text-dim2)', margin: 0 }}>© {year} Vanguard Accounting. All rights reserved.</p>
          <p style={{ fontSize: 12, color: 'var(--text-dim2)', margin: 0 }}>Precision-driven. Nepal-based. Globally trusted.</p>
        </div>
      </div>
    </footer>
  )
}
