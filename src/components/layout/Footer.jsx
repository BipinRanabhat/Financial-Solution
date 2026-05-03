import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, AtSign, Share2, Globe } from 'lucide-react'
import { navLinks } from '../../constants/navigation'
import { services } from '../../constants/services'

const socials = [
  { Icon: AtSign, href: '#', label: 'LinkedIn' },
  { Icon: Share2,  href: '#', label: 'Twitter' },
  { Icon: Globe,    href: '#', label: 'Website' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#060A14', borderTop: '1px solid rgba(30,77,140,0.28)', position: 'relative', overflow: 'hidden' }}>
      {/* Top edge glow */}
      <div style={{
        position: 'absolute', top: 0, left: '15%', right: '15%', height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.25), transparent)',
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
                style={{ height: 52, width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 0 6px rgba(59,130,246,0.3))' }}
              />
            </Link>
            <p className="text-sm text-sky/55 leading-relaxed max-w-xs">
              Nepal-based accounting professionals delivering financial clarity and digital presence management for businesses worldwide.
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.1, borderColor: 'rgba(59,130,246,0.5)', color: '#3B82F6' }}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sky/45 transition-colors"
                  style={{ border: '1px solid rgba(30,77,140,0.35)' }}
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold tracking-widest uppercase text-electric">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {services.map(s => (
                <li key={s.id}>
                  <Link
                    to={`/services#${s.id}`}
                    className="text-sm text-sky/55 hover:text-frost hover:translate-x-0.5 transition-all inline-block"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold tracking-widest uppercase text-electric">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map(({ label, path }) => (
                <li key={path}>
                  <Link to={path} className="text-sm text-sky/55 hover:text-frost transition-colors">{label}</Link>
                </li>
              ))}
              <li><a href="#" className="text-sm text-sky/55 hover:text-frost transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold tracking-widest uppercase text-electric">Contact</h4>
            <ul className="flex flex-col gap-3">
              {[
                { Icon: Mail,   text: 'hello@vanguardaccounting.com' },
                { Icon: Phone,  text: '+977 98-XXXXXXXX' },
                { Icon: MapPin, text: 'Kathmandu, Nepal' },
              ].map(({ Icon, text }, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-sky/55">
                  <Icon size={14} className="text-electric mt-0.5 flex-shrink-0" />
                  {text}
                </li>
              ))}
            </ul>

            {/* Remote badge */}
            <div
              className="mt-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium"
              style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.18)', color: 'rgba(96,180,255,0.7)' }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', flexShrink: 0, display: 'inline-block' }} />
              Serving clients globally · Remote
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderTop: '1px solid rgba(30,77,140,0.18)' }}
        >
          <p className="text-xs text-sky/35">© {year} Vanguard Accounting. All rights reserved.</p>
          <p className="text-xs text-sky/28">Precision-driven. Nepal-based. Globally trusted.</p>
        </div>
      </div>
    </footer>
  )
}
