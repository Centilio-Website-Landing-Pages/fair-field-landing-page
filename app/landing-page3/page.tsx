
import Header from '@/components/header.js'
import Footer from '@/components/shared/Footer'
import GovHero from '@/components/landing-page3/GovHero'
import GovBenefits from '@/components/landing-page3/GovBenefits'
import GovFeatures from '@/components/landing-page3/GovFeatures'
import GovTestimonials from '@/components/landing-page3/GovTestimonials'
import GovFinancials from '@/components/landing-page3/GovFinancials'
import GovCTA from '@/components/landing-page3/GovCTA'

export const metadata = {
  title: 'Government Employee Land Offer - Fair Field',
  description: 'Special benefits for government employees. RERA-approved plots and villas with flexible payment plans.',
}

export default function page3() {
  return (
    <main className="min-h-screen">
      <Header />
      <GovHero />
      <GovBenefits />
      <GovFeatures />
      <GovTestimonials />
      <GovFinancials />
      <GovCTA />
      <Footer />
    </main>
  )
}
