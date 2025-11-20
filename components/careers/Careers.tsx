import CareerForm from "./CareerForm"
import { UniversalHeader } from '@/components/shared/header/UniversalHeader';
import UniversalFooter from '@/components/shared/footer/UniversalFooter';

export default function Careers() {
  return (
    <main className="min-h-screen bg-white">
      <UniversalHeader transparent={false} showScheduleButton={true} />
      <div className="max-w-[1300px] mx-auto sm:px-2 px-2 py-12 md:py-20 lg:mt-20">
        <CareerForm />
      </div>
      <UniversalFooter />
    </main>
  )
}