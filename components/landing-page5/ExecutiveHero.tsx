'use client'

import { motion } from 'framer-motion'
import { ShiningText } from '../ui/shining-text'
import heroimage from '@/images/Group 1.2.png'


export default function ExecutiveHero() {
  return (
    <section className="bg-[#f3eee7] py-20">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <motion.div 
            className="flex-1 max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ShiningText customStyle="sm:text-[40px] text-[30px] font-medium font-['DM_Serif_Display'] mb-5" textLeft={"Does Your Address Reflect Your "} textRight={"Success?"} />                                              
            
            <p className="text-[#937B37] text-xl mb-6 leading-relaxed font-medium">
              You&apos;ve built a successful business. Your office impresses 
              clients. But what about your home? Does your residential 
              address match your achievements?
            </p>
            
            <p className="text-gray-800 text-lg mb-8 leading-relaxed">
              In business, image matters — and your home should reflect your journey to 
              the top
            </p>
            
            <p className="text-gray-700 text-base mb-10 font-medium">
              Premium Villas | 73 Exclusive Units | High-Growth Investment Zone
            </p>

            <button className="bg-[#37405E] text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#2d3548] transition-colors shadow-lg" 
            // onClick={() => window.centilio_connector_init.submit_call()} 
            >
              Book Your Visit Today
            </button>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="flex-1 max-w-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={heroimage.src}
              alt="Executive Villa"
              className="w-full rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
