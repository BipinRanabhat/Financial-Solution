import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Play } from 'lucide-react'
import SectionHeading from '../../ui/SectionHeading'

const YOUTUBE_ID = 'yLFtZPu-irQ'
const THUMB = `https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`

export default function VideoSection() {
  const [playing, setPlaying] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="section-padding" style={{ background: 'var(--bg-alt)' }}>
      <div className="container-wide" ref={ref}>
        <div className="mb-12 flex flex-col items-center">
          <SectionHeading
            eyebrow="See Us in Action"
            title="Meet Vanguard Financial Solutions"
            subtitle="A quick look at who we are, what we do, and how we help businesses achieve financial clarity from anywhere in the world."
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
          style={{
            borderRadius: 20,
            overflow: 'hidden',
            border: '1px solid var(--border-medium)',
            boxShadow: 'var(--shadow-card-lg)',
            background: '#000',
            aspectRatio: '16/9',
            position: 'relative',
          }}
        >
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
                alt="Vanguard intro video"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />

              {/* Dark overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(160deg, rgba(10,15,30,0.55) 0%, rgba(29,78,216,0.15) 100%)',
              }} />

              {/* Play button */}
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <motion.div
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: 80, height: 80, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1D4ED8, #1E3A8A)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 8px 48px rgba(29,78,216,0.60)',
                    border: '2px solid rgba(255,255,255,0.20)',
                  }}
                >
                  <Play size={30} color="#fff" fill="#fff" style={{ marginLeft: 4 }} />
                </motion.div>
              </div>

              {/* Bottom label */}
              <div style={{
                position: 'absolute', bottom: 20, left: 24,
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <div style={{
                  padding: '5px 12px', borderRadius: 6,
                  background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  fontSize: 12, fontWeight: 600, color: '#fff', letterSpacing: '0.02em',
                }}>
                  ▶ Watch Intro
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
