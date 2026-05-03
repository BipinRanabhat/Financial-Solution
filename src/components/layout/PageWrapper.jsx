import { motion } from 'framer-motion'

export default function PageWrapper({ children }) {
  return (
    <motion.div
      key="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{ willChange: 'opacity' }}
    >
      {children}
    </motion.div>
  )
}
