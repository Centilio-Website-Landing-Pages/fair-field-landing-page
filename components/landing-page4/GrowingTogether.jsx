'use client'

import { motion } from 'framer-motion'
import page4Rectangle from "@/images/page4Rectangle 9.png"
import checkicon from '@/images/checked_9709605 1.png'


const benefits = [
  'Plots from ₹18.5L - Build as your family grows',
  '3BHK Villas from ₹1.65Cr - Move in with everything ready',
  'Flexible payment plans aligned with your financial journey'
]

export default function GrowingTogether() {
  return (
    <section className="growing-together-section bg-[#37405E] text-white py-20">
      <div className="section-container">
        <div className="growing-together-container">
          {/* Left Content */}
          <motion.div 
            className="growing-together-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8 font-semibold bg-linear-to-r from-[#D3AC4A] from-[30%] to-[#FFFFFF] to-[70%] bg-clip-text text-[36px] font-['DM_Serif_Display'] text-transparent ...">
                Growing Together
            </div>      
            <ul className="growing-together-benefits space-y-6 mb-12">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  className="growing-together-benefit flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                <img src={checkicon.src} alt="" />
                  <span className="text-white text-lg font-medium leading-relaxed">
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </ul>

            <motion.button 
              className="growing-together-button bg-[#937B37] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#7d672f] transition-all duration-300 uppercase tracking-wide shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              style={{
                boxShadow: '0 4px 14px rgba(147, 123, 55, 0.4)'
              }}
              onClick={() => window.centilio_connector_init.submit_call()}
            >
              BOOK FAMILY SITE VISIT
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="growing-together-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div 
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                padding: '1rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <img
                src={page4Rectangle.src}
                alt="Plot Development Layout"
                className="w-full h-auto rounded-xl object-cover"
                style={{ 
                  aspectRatio: '4/3',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
