'use client'

import { motion } from 'framer-motion'
import checked_9709605 from '@/images/checked_9709605 1.png'
import Rectangle from '@/images/Rectangle 9.png'

const services = [
  'Concierge assistance for busy schedules',
  'Architect consultation included',
  'Priority construction timeline',
  'Exclusive preview appointments'
]

export default function ExecutiveServices() {
  return (
    <section className="bg-[#37405E] text-white py-20">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <motion.div 
            className="flex-1 max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8 font-semibold bg-linear-to-r from-[#D3AC4A] from-[30%] to-[#FFFFFF] to-[70%] bg-clip-text text-[36px] font-['DM_Serif_Display'] text-transparent ...">
                Executive Services
            </div>      
            <ul className="space-y-6 mb-12">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <img src={checked_9709605.src} alt="" />
                  <span className="text-white text-lg leading-relaxed">
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>

            <motion.button 
              className="bg-[#937B37] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#7d672f] transition-all duration-300 uppercase tracking-wide shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.centilio_connector_init.submit_call()}
            >
              SCHEDULE EXCLUSIVE SHOWING
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="flex-1 max-w-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative  rounded-2xl p-4 backdrop-blur-sm">
              <img
                src={Rectangle.src}
                alt="Executive Villa"
                className="w-full h-auto rounded-xl shadow-2xl object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
