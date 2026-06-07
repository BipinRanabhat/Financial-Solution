import { useState } from 'react'
import { ShieldCheck, Award, Star, CheckCircle } from 'lucide-react'

const badges = [
  { Icon: ShieldCheck, label: 'QuickBooks ProAdvisor', color: '#059669' },
  { Icon: CheckCircle, label: 'Xero Certified Partner', color: '#1D4ED8' },
  { Icon: Award,       label: 'CA Certified',            color: '#1D4ED8' },
  { Icon: Star,        label: '4.9 / 5 Rating',          color: '#D97706' },
  { Icon: CheckCircle, label: '200+ Happy Clients',       color: '#1D4ED8' },
  { Icon: Award,       label: 'Multi-Country Experts',    color: '#7C3AED' },
]

function Badge({ Icon, label, color }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      padding: '10px 20px', borderRadius: 10, flexShrink: 0,
      background: 'var(--bg-card-solid)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--card-shadow)',
      whiteSpace: 'nowrap',
    }}>
      <div style={{
        width: 30, height: 30, borderRadius: 8, flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: `${color}15`,
      }}>
        <Icon size={15} style={{ color }} strokeWidth={2} />
      </div>
      <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-heading)' }}>{label}</span>
    </div>
  )
}

export default function TrustBadgesRow() {
  const [paused, setPaused] = useState(false)
  const track = [...badges, ...badges]

  return (
    <section style={{
      background: 'var(--bg-deep)',
      borderTop: '1px solid var(--border-section)',
      borderBottom: '1px solid var(--border-section)',
      padding: '32px 0',
      overflow: 'hidden',
    }}>
      <p style={{
        textAlign: 'center', fontSize: 11, fontWeight: 700,
        letterSpacing: '0.18em', textTransform: 'uppercase',
        color: 'var(--text-dim2)', marginBottom: 20,
      }}>
        Certifications &amp; Trust
      </p>

      <div
        style={{ position: 'relative' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Fade edges */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(90deg, var(--bg-deep), transparent)', zIndex: 10, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(270deg, var(--bg-deep), transparent)', zIndex: 10, pointerEvents: 'none' }} />

        <div style={{
          display: 'flex', gap: 12,
          width: 'max-content',
          animation: 'vg-marquee 32s linear infinite',
          animationPlayState: paused ? 'paused' : 'running',
        }}>
          {track.map(({ Icon, label, color }, i) => (
            <Badge key={i} Icon={Icon} label={label} color={color} />
          ))}
        </div>
      </div>
    </section>
  )
}
