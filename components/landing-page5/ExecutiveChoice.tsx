'use client'

import { motion } from 'framer-motion'
import ExecutiveImg from '@/images/Rectangle 14.png'

const features = [
  'Only 73 units – Ultimate privacy',
  'Customisable villas – Your vision, built',
  'Premium community – Network with peers',
  'Strategic location – Impress visitors',
  'Clear titles – Hassle-free ownership'
]

export default function ExecutiveChoice() {
  return (
    <section className="bg-[#37405E] text-white py-20">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Image */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={ExecutiveImg.src}
              alt="Fair Field Gate"
              className="w-full rounded-lg shadow-xl"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-8 font-semibold bg-linear-to-r from-[#D3AC4A] from-[30%] to-[#FFFFFF] to-[70%] bg-clip-text text-[36px] font-['DM_Serif_Display'] text-transparent ...">
                Anicham & Magilam - The Executive Choice
            </div>              
            <h3 className="text-xl font-semibold mb-8 text-white">
              Exclusive Living for Achievers
            </h3>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-[#937B37] mr-3 text-lg">•</span>
                  <span className="text-lg">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
