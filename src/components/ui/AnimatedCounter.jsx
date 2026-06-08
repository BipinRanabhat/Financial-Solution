import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function AnimatedCounter({ end, duration = 2, suffix = '', prefix = '', decimals = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [count, setCount] = useState(0)
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (!inView) return
    setActive(true)
    let startTime = null

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setCount(parseFloat((end * eased).toFixed(decimals)))
      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        setActive(false)
      }
    }
    requestAnimationFrame(step)
  }, [inView, end, duration])

  return (
    <span
      ref={ref}
      style={{
        display: 'inline-block',
        transition: 'text-shadow 0.4s ease',
        textShadow: active ? '0 0 24px rgba(29,78,216,0.70), 0 0 48px rgba(29,78,216,0.35)' : 'none',
      }}
    >
      {prefix}{decimals > 0 ? count.toFixed(decimals) : count}{suffix}
    </span>
  )
}
