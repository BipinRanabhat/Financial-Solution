import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function BlueButton({ children, variant = 'solid', size = 'md', href, onClick, className = '', loading }) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }
  const base = `inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 cursor-pointer select-none ${sizes[size]} ${className}`

  /* Royal blue solid — primary CTA */
  const solid   = 'text-white border border-transparent'
  /* Emerald outline — secondary / positive action */
  const outline = 'bg-transparent border text-emerald hover:bg-emerald/10'

  const solidStyle   = { background: 'linear-gradient(135deg, #1D4ED8, #1E3A8A)', boxShadow: '0 4px 14px rgba(29,78,216,0.35)' }
  const outlineStyle = { borderColor: 'rgba(5,150,105,0.40)', color: '#34D399' }

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap:   { scale: 0.97 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  }

  if (href) {
    return (
      <motion.div {...motionProps} style={{ display: 'inline-block' }}>
        <Link
          to={href}
          className={`${base} ${variant === 'solid' ? solid : outline}`}
          style={variant === 'solid' ? solidStyle : outlineStyle}
        >
          {children}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      {...motionProps}
      onClick={onClick}
      disabled={loading}
      className={`${base} ${variant === 'solid' ? solid : outline} ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
      style={variant === 'solid' ? solidStyle : outlineStyle}
    >
      {loading ? (
        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      ) : children}
    </motion.button>
  )
}
