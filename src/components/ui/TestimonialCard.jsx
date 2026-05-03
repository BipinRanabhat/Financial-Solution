import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { cardReveal } from '../../constants/animations'

export default function TestimonialCard({ quote, author, role, company, rating = 5 }) {
  return (
    <motion.div
      variants={cardReveal}
      className="flex flex-col gap-4 p-6 rounded-2xl border border-royal/25 bg-card-gradient backdrop-blur-sm relative overflow-hidden"
    >
      <Quote size={28} className="text-electric/20 absolute top-4 right-5" />

      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={14} className="fill-electric text-electric" />
        ))}
      </div>

      <p className="text-sm text-ice/80 leading-relaxed italic">"{quote}"</p>

      <div className="flex items-center gap-3 mt-auto pt-3 border-t border-royal/20">
        <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-electric flex-shrink-0"
             style={{ background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.3)' }}>
          {author.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <p className="text-sm font-semibold text-frost">{author}</p>
          <p className="text-xs text-sky/60">{role}, {company}</p>
        </div>
      </div>
    </motion.div>
  )
}
