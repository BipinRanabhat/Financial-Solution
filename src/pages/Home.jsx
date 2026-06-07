import PageWrapper from '../components/layout/PageWrapper'
import HeroSection from '../components/sections/home/HeroSection'
import TrustBadgesRow from '../components/sections/home/TrustBadgesRow'
import StatsBar from '../components/sections/home/StatsBar'
import ProcessSection from '../components/sections/home/ProcessSection'
import ServicesPreview from '../components/sections/home/ServicesPreview'
import WhyNepalSection from '../components/sections/home/WhyNepalSection'
import TestimonialsSection from '../components/sections/home/TestimonialsSection'
import FAQSection from '../components/sections/home/FAQSection'
import CTABanner from '../components/sections/home/CTABanner'
import VideoSection from '../components/sections/home/VideoSection'

export default function Home() {
  return (
    <PageWrapper>
      <HeroSection />
      <TrustBadgesRow />
      <StatsBar />
      <VideoSection />
      <ProcessSection />
      <ServicesPreview />
      <WhyNepalSection />
      <TestimonialsSection />
      <FAQSection />
      <CTABanner />
    </PageWrapper>
  )
}
