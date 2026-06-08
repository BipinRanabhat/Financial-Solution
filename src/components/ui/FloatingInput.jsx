import { useState } from 'react'
import { motion } from 'framer-motion'

export default function FloatingInput({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  error,
  as = 'input',
  rows = 4,
  required = false,
}) {
  const [focused, setFocused] = useState(false)
  const lifted = focused || value?.length > 0

  const Tag = as

  return (
    <div style={{ position: 'relative' }}>
      <motion.label
        animate={{ y: lifted ? -22 : 0, scale: lifted ? 0.82 : 1, color: lifted ? '#1D4ED8' : 'rgba(147,197,253,0.55)' }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute',
          left: 16,
          top: as === 'textarea' ? 14 : '50%',
          translateY: as === 'textarea' ? 0 : '-50%',
          transformOrigin: 'left center',
          fontSize: 13.5,
          fontWeight: 500,
          pointerEvents: 'none',
          zIndex: 2,
          background: lifted ? 'var(--bg-card-from)' : 'transparent',
          paddingInline: lifted ? 4 : 0,
          borderRadius: 3,
          whiteSpace: 'nowrap',
        }}
      >
        {label}{required && ' *'}
      </motion.label>

      <Tag
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={lifted ? placeholder : ''}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: '100%',
          padding: as === 'textarea' ? '18px 16px 12px' : '20px 16px 8px',
          borderRadius: 12,
          fontSize: 13.5,
          color: 'var(--text-heading)',
          background: 'rgba(29,78,216,0.04)',
          border: `1.5px solid ${error ? 'rgba(239,68,68,0.6)' : focused ? 'rgba(29,78,216,0.55)' : 'rgba(29,78,216,0.18)'}`,
          outline: 'none',
          transition: 'border-color 0.2s, box-shadow 0.2s',
          boxShadow: focused ? '0 0 0 3px rgba(29,78,216,0.10)' : 'none',
          resize: 'none',
          fontFamily: 'inherit',
          display: 'block',
        }}
      />
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: 11, color: 'rgba(239,68,68,0.85)', marginTop: 4 }}
        >
          {error}
        </motion.p>
      )}
    </div>
  )
}
