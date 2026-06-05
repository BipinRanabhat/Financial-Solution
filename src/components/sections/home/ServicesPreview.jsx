import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { staggerContainer } from '../../../constants/animations'
import SectionHeading from '../../ui/SectionHeading'
import ServiceCard from '../../ui/ServiceCard'
import { services } from '../../../constants/services'

export default function ServicesPreview() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section className="section-padding" style={{ background: 'var(--bg-base)' }}>
      <div className="container-wide">
        <div className="mb-14 flex flex-col items-center">
          <SectionHeading
            eyebrow="What We Do"
            title="Services That Drive Real Results"
            subtitle="From day-to-day bookkeeping to investor-ready reports, we handle the financial heavy lifting so you can focus on growth."
          />
        </div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              {...service}
              index={i}
              href={`/services#${service.id}`}
            />
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all"
              style={{ border: '1px solid rgba(29,78,216,0.32)', background: 'rgba(29,78,216,0.07)', color: 'var(--accent-pale)' }}
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
