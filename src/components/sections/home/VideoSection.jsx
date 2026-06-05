import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Play, Users, Award, TrendingUp } from 'lucide-react'

const YOUTUBE_ID = 'yLFtZPu-irQ'
const THUMB = `https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`

const highlights = [
  { Icon: Users,      val: '200+',   label: 'Active Clients',    color: '#1D4ED8' },
  { Icon: Award,      val: 'CPA',    label: 'Certified Team',    color: '#059669' },
  { Icon: TrendingUp, val: '$50M+',  label: 'Annually Managed',  color: '#7C3AED' },
]

export default function VideoSection() {
  const [playing, setPlaying] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      className="section-padding"
      style={{ background: 'linear-gradient(180deg, var(--bg-alt) 0%, var(--bg-base) 100%)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Ambient background glow */}
      <div style={{
        position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)',
        width: 900, height: 500, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(29,78,216,0.06) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div className="container-wide" ref={ref}>
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-center text-center"
          style={{ gap: 12 }}
        >
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: 11, fontWeight: 700, letterSpacing: '0.20em', textTransform: 'uppercase', color: '#1D4ED8',
          }}>
            <span style={{ display: 'inline-block', width: 20, height: 1.5, background: '#1D4ED8', borderRadius: 2 }} />
            Watch Our Story
            <span style={{ display: 'inline-block', width: 20, height: 1.5, background: '#1D4ED8', borderRadius: 2 }} />
          </span>

          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800,
            lineHeight: 1.15, letterSpacing: '-0.025em',
            color: 'var(--text-heading)', margin: 0,
          }}>
            Meet the Team Behind{' '}
            <span style={{
              background: 'linear-gradient(135deg, #93C5FD, #1D4ED8)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Your Finances
            </span>
          </h2>

          <p style={{
            fontSize: '1.0625rem', color: 'var(--text-muted)',
            maxWidth: 560, lineHeight: 1.72, margin: 0,
          }}>
            See who we are, how we work, and why 200+ businesses across the US, UK, and Australia trust Vanguard with their finances.
          </p>

          <div style={{ height: 2, width: 56, background: 'linear-gradient(90deg, #1D4ED8, #059669)', borderRadius: 2, marginTop: 4 }} />
        </motion.div>

        {/* Video player */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
          style={{ position: 'relative' }}
        >
          {/* Outer glow ring */}
          <div style={{
            position: 'absolute', inset: -3, borderRadius: 23,
            background: 'linear-gradient(135deg, rgba(29,78,216,0.40), rgba(5,150,105,0.18), rgba(29,78,216,0.40))',
            filter: 'blur(2px)', zIndex: 0,
          }} />
          {/* Inner shadow depth */}
          <div style={{
            position: 'absolute', inset: -1, borderRadius: 21,
            boxShadow: '0 40px 100px rgba(0,0,0,0.55), 0 0 0 1px rgba(29,78,216,0.18)',
            zIndex: 0, borderRadius: 20,
          }} />

          <div style={{
            position: 'relative', zIndex: 1,
            borderRadius: 20, overflow: 'hidden',
            border: '1px solid rgba(29,78,216,0.28)',
            background: '#000',
            aspectRatio: '16/9',
          }}>
            {playing ? (
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1`}
                title="Meet Vanguard Financial Solutions"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
              />
            ) : (
              <motion.div
                onClick={() => setPlaying(true)}
                style={{ position: 'relative', width: '100%', height: '100%', cursor: 'pointer' }}
              >
                {/* Thumbnail */}
                <img
                  src={THUMB}
                  alt="Vanguard Financial Solutions intro video"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />

                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(160deg, rgba(8,8,14,0.52) 0%, rgba(17,17,26,0.20) 50%, rgba(29,78,216,0.10) 100%)',
                }} />

                {/* Centered play button with pulse rings */}
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ position: 'relative' }}>
                    {/* Pulse ring 1 */}
                    <div style={{
                      position: 'absolute', inset: -20, borderRadius: '50%',
                      border: '2px solid rgba(29,78,216,0.45)',
                      animation: 'vg-pulse-ring 2.4s ease-out infinite',
                    }} />
                    {/* Pulse ring 2 */}
                    <div style={{
                      position: 'absolute', inset: -20, borderRadius: '50%',
                      border: '2px solid rgba(29,78,216,0.25)',
                      animation: 'vg-pulse-ring 2.4s ease-out infinite',
                      animationDelay: '0.6s',
                    }} />
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.94 }}
                      style={{
                        width: 84, height: 84, borderRadius: '50%',
                        background: 'linear-gradient(135deg, #1D4ED8 0%, #1E3A8A 100%)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 8px 48px rgba(29,78,216,0.70), inset 0 1px 0 rgba(255,255,255,0.15)',
                        border: '2px solid rgba(255,255,255,0.18)',
                      }}
                    >
                      <Play size={32} color="#fff" fill="#fff" style={{ marginLeft: 4 }} />
                    </motion.div>
                  </div>
                </div>

                {/* Bottom-left label */}
                <div style={{ position: 'absolute', bottom: 20, left: 24 }}>
                  <div style={{
                    padding: '6px 14px', borderRadius: 8,
                    background: 'rgba(0,0,0,0.62)', backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    fontSize: 12, fontWeight: 600, color: '#fff', letterSpacing: '0.02em',
                  }}>
                    ▶ Watch Intro
                  </div>
                </div>

                {/* Top-right Vanguard badge */}
                <div style={{ position: 'absolute', top: 20, right: 20 }}>
                  <div style={{
                    padding: '5px 12px', borderRadius: 8,
                    background: 'rgba(29,78,216,0.75)', backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(29,78,216,0.50)',
                    fontSize: 11, fontWeight: 700, color: '#fff', letterSpacing: '0.06em', textTransform: 'uppercase',
                  }}>
                    Vanguard
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Highlight chips below the video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="max-w-2xl mx-auto mt-8 grid grid-cols-3 gap-4"
        >
          {highlights.map(({ Icon, val, label, color }, i) => (
            <div key={i} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
              padding: '18px 12px', borderRadius: 14, textAlign: 'center',
              background: 'linear-gradient(145deg, var(--bg-card-from) 0%, var(--bg-card-to) 100%)',
              border: '1px solid var(--border-subtle)',
              boxShadow: 'var(--card-shadow)',
            }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: `${color}12`, border: `1px solid ${color}25`,
              }}>
                <Icon size={17} style={{ color }} strokeWidth={1.8} />
              </div>
              <span style={{ fontSize: 22, fontWeight: 800, color, lineHeight: 1 }}>{val}</span>
              <span style={{ fontSize: 11, color: 'var(--text-dim)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.09em' }}>{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
