import Header from '@/components/header.js'
import Footer from '@/components/shared/Footer'
import FamilyHero from '@/components/landing-page4/FamilyHero'
import PainPoints from '@/components/landing-page4/PainPoints'
import Welcome from '@/components/landing-page4/Welcome'
import FamilyFeatures from '@/components/landing-page4/FamilyFeatures'
import RealFamilies from '@/components/landing-page4/RealFamilies'
import GrowingTogether from '@/components/landing-page4/GrowingTogether'

export const metadata = {
  title: 'Family Homes - Fair Field | Choose Both Good Schools & Good Home',
  description: 'Stop choosing between good schools and a good home. Anicham & Magilam offers the perfect solution for families.',
}

export default function Page4() {
  return (
    <main className="min-h-screen">
      <Header />
      <FamilyHero />
      <PainPoints />
      <Welcome />
      <FamilyFeatures />
      <RealFamilies />
      <GrowingTogether />
      <Footer />
    </main>
  )
}
