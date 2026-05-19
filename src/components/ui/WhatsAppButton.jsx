import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle } from 'lucide-react'

const WA_NUMBER = '9779800000000'
const WA_MESSAGE = encodeURIComponent('Hi Vanguard! I\'d like to learn more about your accounting services.')

export default function WhatsAppButton() {
  const [tooltipOpen, setTooltipOpen] = useState(false)

  return (
    <div style={{ position: 'fixed', bottom: 28, right: 28, zIndex: 9000, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 10 }}>
      <AnimatePresence>
        {tooltipOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.92 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: 'rgba(17,17,19,0.98)', border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: 16, padding: '14px 18px', maxWidth: 240,
              backdropFilter: 'blur(16px)', boxShadow: '0 16px 40px rgba(0,0,0,0.5)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: '#F8FAFC' }}>Chat with us on WhatsApp</span>
              <button onClick={() => setTooltipOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(147,197,253,0.50)', padding: 0, marginLeft: 8 }}>
                <X size={14} />
              </button>
            </div>
            <p style={{ fontSize: 12, color: 'rgba(147,197,253,0.58)', lineHeight: 1.6, marginBottom: 12 }}>
              Get a response from our team in under 2 hours. 🇳🇵
            </p>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block', textAlign: 'center', padding: '9px 16px',
                borderRadius: 10, background: '#25D366', color: '#fff',
                fontSize: 13, fontWeight: 700, textDecoration: 'none',
              }}
            >
              Open WhatsApp →
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setTooltipOpen(v => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        style={{
          width: 56, height: 56, borderRadius: '50%',
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 8px 28px rgba(37,211,102,0.35)',
          position: 'relative',
        }}
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing ring */}
        <motion.div
          animate={{ scale: [1, 1.55, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
          style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            border: '2px solid #25D366', pointerEvents: 'none',
          }}
        />
        <MessageCircle size={24} color="#fff" strokeWidth={2} />
      </motion.button>
    </div>
  )
}
