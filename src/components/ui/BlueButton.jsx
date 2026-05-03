import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function BlueButton({ children, variant = 'solid', size = 'md', href, onClick, className = '', loading }) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }
  const base = `inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 cursor-pointer select-none ${sizes[size]} ${className}`
  const solid   = 'bg-electric text-white hover:bg-sky border border-transparent'
  const outline = 'bg-transparent text-electric border border-electric hover:bg-electric/10 hover:text-sky'
  const styles  = variant === 'solid' ? solid : outline

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap:   { scale: 0.97 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  }

  if (href) {
    return (
      <motion.div {...motionProps} style={{ display: 'inline-block' }}>
        <Link to={href} className={`${base} ${styles}`}>{children}</Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      {...motionProps}
      onClick={onClick}
      disabled={loading}
      className={`${base} ${styles} ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
    >
      {loading ? (
        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      ) : children}
    </motion.button>
  )
}
