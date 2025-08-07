'use client'

import { Phone, MessageCircle } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { Image } from 'lucide-react'

import fold9icon1 from '@/images/landing-page2/fold9icon1.svg'
import fold9icon2 from '@/images/landing-page2/fold9icon2.svg'

export default function Footer() {
  const pathname = usePathname()
  
  const getFooterMessage = () => {
    switch(pathname) {
      case '/landing-page4':
        return "Special weekend tours with kids' activities arranged"
      case '/landing-page5':
        return "Private viewings arranged at your convenience"
      default:
        return "Saturday special assistance camp for government employees!"
    }
  }

  return (
      <div className="bg-white">
        <div className="relative max-w-[1300px] mx-auto sm:px-[50px] px-[20px] py-20 text-center">
          <div className="font-['Futura-Medium'] text-[24px] sm:text-[32px] mb-5">
            {/* Only 33 plots remaining. Price revision expected post-metro announcement */}
            {getFooterMessage()}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {/* Phone/WhatsApp */}
                <div className="flex items-start gap-4 p-4 lg:p-6 rounded-xl cursor-pointer justify-center">
                  <img
                      src={fold9icon1.src}
                      alt="WhatsApp"
                      className="w-8 h-8"
                  />
                  <h3 className="text-[20px] w-fit">
                      +91 7900882288
                  </h3>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 lg:p-6 rounded-xl justify-center">
                  <img
                      src={fold9icon2.src}
                      alt="Location"
                      className="w-8 h-8"
                  />
                  <h3 className="text-[20px] w-fit">
                      +91 7900884488
                  </h3>
                </div>
              </div>
        </div>
      </div>    
  )
}
