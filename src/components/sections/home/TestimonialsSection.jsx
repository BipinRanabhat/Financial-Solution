import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { staggerContainer, cardReveal } from '../../../constants/animations'
import SectionHeading from '../../ui/SectionHeading'
import { testimonials } from '../../../constants/services'

function TestimonialCard({ quote, author, role, company, rating = 5, avatar, isFeatured, onClick }) {
  return (
    <motion.div
      variants={cardReveal}
      onClick={onClick}
      animate={{
        borderColor: isFeatured ? 'rgba(29,78,216,0.40)' : 'var(--border-subtle)',
        boxShadow: isFeatured
          ? '0 0 40px rgba(29,78,216,0.12), 0 8px 32px rgba(0,0,0,0.20)'
          : 'var(--card-shadow)',
        y: isFeatured ? -8 : 0,
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ borderColor: 'rgba(29,78,216,0.32)', y: isFeatured ? -8 : -4 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        padding: '28px 24px',
        borderRadius: 16,
        background: 'linear-gradient(145deg, var(--bg-card-from) 0%, var(--bg-card-to) 100%)',
        border: '1px solid var(--border-subtle)',
        backdropFilter: 'blur(12px)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
      }}
    >
      <motion.div
        animate={{ opacity: isFeatured ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at 50% 0%, rgba(29,78,216,0.06) 0%, transparent 60%)',
          pointerEvents: 'none', borderRadius: 16,
        }}
      />
      <motion.div
        animate={{ opacity: isFeatured ? 1 : 0, scaleX: isFeatured ? 1 : 0.3 }}
        transition={{ duration: 0.4 }}
        style={{
          position: 'absolute', top: 0, left: '10%', right: '10%', height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(29,78,216,0.45), transparent)',
          pointerEvents: 'none',
        }}
      />

      <Quote
        size={28}
        style={{ position: 'absolute', top: 16, right: 20, opacity: isFeatured ? 0.22 : 0.10, color: '#1D4ED8', transition: 'opacity 0.4s' }}
      />

      {/* Stars — gold for authority */}
      <div style={{ display: 'flex', gap: 4 }}>
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={14} fill="#D97706" color="#D97706" />
        ))}
      </div>

      <p style={{ fontSize: '0.875rem', color: 'var(--text-ice)', lineHeight: 1.78, fontStyle: 'italic', margin: 0, flex: 1 }}>
        "{quote}"
      </p>

      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        paddingTop: 16, borderTop: '1px solid var(--border-subtle)',
      }}>
        {avatar ? (
          <img
            src={avatar}
            alt={author}
            style={{
              width: 42, height: 42, borderRadius: '50%', flexShrink: 0,
              objectFit: 'cover',
              border: '2px solid rgba(29,78,216,0.28)',
              boxShadow: isFeatured ? '0 0 12px rgba(29,78,216,0.40)' : 'none',
              transition: 'box-shadow 0.4s',
            }}
          />
        ) : (
          <div style={{
            width: 42, height: 42, borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 12, fontWeight: 700, color: '#1D4ED8', flexShrink: 0,
            background: 'rgba(29,78,216,0.12)',
            border: '1px solid rgba(29,78,216,0.25)',
          }}>
            {author.split(' ').map(n => n[0]).join('')}
          </div>
        )}
        <div>
          <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-heading)', margin: 0 }}>{author}</p>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', margin: 0 }}>{role}, {company}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function TestimonialsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })
  const [featured, setFeatured] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setFeatured(f => (f + 1) % testimonials.length), 4000)
    return () => clearInterval(id)
  }, [])

  const prev = () => setFeatured(f => (f - 1 + testimonials.length) % testimonials.length)
  const next = () => setFeatured(f => (f + 1) % testimonials.length)

  return (
    <section className="section-padding" style={{ background: 'var(--bg-alt)', position: 'relative', overflow: 'hidden' }}>
      {/* Ambient orbs */}
      <div style={{ position: 'absolute', top: '20%', left: '-8%', width: 420, height: 420, borderRadius: '50%', background: 'radial-gradient(circle, rgba(29,78,216,0.08) 0%, transparent 70%)', filter: 'blur(70px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: 340, height: 340, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)', filter: 'blur(55px)', pointerEvents: 'none' }} />
      <div className="container-wide">
        <div className="mb-14 flex flex-col items-center">
          <SectionHeading
            eyebrow="Client Stories"
            title="Trusted by Businesses Like Yours"
            subtitle="Don't take our word for it. Here's what our clients have to say about working with Vanguard."
          />
        </div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={i}
              {...t}
              isFeatured={i === featured}
              onClick={() => setFeatured(i)}
            />
          ))}
        </motion.div>

        {/* Controls */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginTop: 32 }}>
          <button
            onClick={prev}
            style={{
              width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(29,78,216,0.08)', border: '1px solid rgba(29,78,216,0.20)',
              color: '#1D4ED8', cursor: 'pointer',
            }}
          >
            <ChevronLeft size={16} />
          </button>

          <div style={{ display: 'flex', gap: 6 }}>
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setFeatured(i)}
                animate={{
                  width: i === featured ? 24 : 8,
                  background: i === featured ? '#1D4ED8' : 'rgba(29,78,216,0.25)',
                }}
                transition={{ duration: 0.3 }}
                style={{ height: 8, borderRadius: 4, border: 'none', cursor: 'pointer', padding: 0 }}
              />
            ))}
          </div>

          <button
            onClick={next}
            style={{
              width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(29,78,216,0.08)', border: '1px solid rgba(29,78,216,0.20)',
              color: '#1D4ED8', cursor: 'pointer',
            }}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}
