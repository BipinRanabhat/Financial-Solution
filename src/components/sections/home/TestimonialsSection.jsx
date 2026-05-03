import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { staggerContainer, cardReveal } from '../../../constants/animations'
import SectionHeading from '../../ui/SectionHeading'
import { testimonials } from '../../../constants/services'

function TestimonialCard({ quote, author, role, company, rating = 5, isFeatured, onClick }) {
  return (
    <motion.div
      variants={cardReveal}
      onClick={onClick}
      animate={{
        borderColor: isFeatured ? 'rgba(59,130,246,0.5)' : 'rgba(30,77,140,0.22)',
        boxShadow: isFeatured
          ? '0 0 40px rgba(59,130,246,0.14), 0 8px 32px rgba(0,0,0,0.3)'
          : '0 4px 20px rgba(0,0,0,0.2)',
        y: isFeatured ? -8 : 0,
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ borderColor: 'rgba(59,130,246,0.4)', y: isFeatured ? -8 : -4 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        padding: '28px 24px',
        borderRadius: 20,
        background: 'linear-gradient(145deg, rgba(26,39,68,0.5) 0%, rgba(11,17,32,0.85) 100%)',
        border: '1px solid rgba(30,77,140,0.22)',
        backdropFilter: 'blur(12px)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
      }}
    >
      {/* Featured glow overlay */}
      <motion.div
        animate={{ opacity: isFeatured ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at 50% 0%, rgba(59,130,246,0.07) 0%, transparent 60%)',
          pointerEvents: 'none', borderRadius: 20,
        }}
      />

      {/* Top edge light when featured */}
      <motion.div
        animate={{ opacity: isFeatured ? 1 : 0, scaleX: isFeatured ? 1 : 0.3 }}
        transition={{ duration: 0.4 }}
        style={{
          position: 'absolute', top: 0, left: '10%', right: '10%', height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent)',
          pointerEvents: 'none',
        }}
      />

      <Quote
        size={28}
        style={{ position: 'absolute', top: 16, right: 20, opacity: isFeatured ? 0.25 : 0.12, color: '#3B82F6', transition: 'opacity 0.4s' }}
      />

      {/* Stars */}
      <div style={{ display: 'flex', gap: 4 }}>
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={14} fill="#3B82F6" color="#3B82F6" />
        ))}
      </div>

      <p style={{ fontSize: '0.875rem', color: 'rgba(200,223,249,0.8)', lineHeight: 1.75, fontStyle: 'italic', margin: 0, flex: 1 }}>
        "{quote}"
      </p>

      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        paddingTop: 16, borderTop: '1px solid rgba(30,77,140,0.22)',
      }}>
        <div style={{
          width: 38, height: 38, borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 12, fontWeight: 700, color: '#3B82F6', flexShrink: 0,
          background: 'rgba(59,130,246,0.14)',
          border: '1px solid rgba(59,130,246,0.28)',
        }}>
          {author.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#F0F6FF', margin: 0 }}>{author}</p>
          <p style={{ fontSize: '0.75rem', color: 'rgba(96,180,255,0.55)', margin: 0 }}>{role}, {company}</p>
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
    <section className="section-padding" style={{ background: '#0D1628' }}>
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
              background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.22)',
              color: '#3B82F6', cursor: 'pointer',
            }}
          >
            <ChevronLeft size={16} />
          </button>

          {/* Dots */}
          <div style={{ display: 'flex', gap: 6 }}>
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setFeatured(i)}
                animate={{
                  width: i === featured ? 24 : 8,
                  background: i === featured ? '#3B82F6' : 'rgba(59,130,246,0.28)',
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
              background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.22)',
              color: '#3B82F6', cursor: 'pointer',
            }}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}
