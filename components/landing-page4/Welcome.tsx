'use client'

import { motion } from 'framer-motion'
import gateImg from '@/images/Rectangle 14.png'

const schools = [
  { name: 'SSVM School', distance: '4.8km (10 mins)' },
  { name: 'BVM Global', distance: '2.9km (7 mins)' },
  { name: 'AVP Trust School', distance: '3.6km' },
  { name: 'Kendriya Vidyalaya', distance: '4.4km (10 mins)' }
]

export default function Welcome() {
  return (
    <section className="bg-[#37405E] text-white py-16">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Image */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={gateImg.src}
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
                Welcome to Anicham & Magilam - Where Families Flourish
            </div>               
            
            <h3 className="text-xl font-semibold mb-6">
              Education Excellence Within Reach
            </h3>

            <ul className="space-y-3">
              {schools.map((school, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-[#937B37] mr-2">•</span>
                  <span>{school.name}: {school.distance}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
