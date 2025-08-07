import Header from '@/components/header.js'
import Footer from '@/components/shared/Footer'
import ExecutiveHero from '@/components/landing-page5/ExecutiveHero'
import PainPoints from '@/components/landing-page5/PainPoints'
import ExecutiveChoice from '@/components/landing-page5/ExecutiveChoice'
import BusinessCase from '@/components/landing-page5/BusinessCase'
import SuccessStories from '@/components/landing-page5/SuccessStories'
import ExecutiveServices from '@/components/landing-page5/ExecutiveServices'

export const metadata = {
  title: 'Executive Villas - Fair Field | Does Your Address Reflect Your Success?',
  description: 'Premium villas for successful business owners. 73 exclusive units in a high-growth investment zone.',
}

export default function Page5() {
  return (
    <main className="min-h-screen">
      <Header />
      <ExecutiveHero />
      <PainPoints />
      <ExecutiveChoice />
      <BusinessCase />
      <SuccessStories />
      <ExecutiveServices />
      <Footer />
    </main>
  )
}
