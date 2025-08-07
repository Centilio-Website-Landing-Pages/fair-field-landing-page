'use client'

import { motion } from 'framer-motion'
import { ShiningText } from '../ui/shining-text'
import painImg from '@/images/Vector.png'

const problems = [
  'Your business is growing, but your home hasn\'t changed',
  'Clients notice where you live — and judge your lifestyle',
  'Your family deserves better',
  'City homes are expensive, crowded, and common. You don\'t just want a costlier place — you want exclusivity and value',
  'Also, putting all your money into your business? That\'s not smart wealth management.'
]

const agitations = [
  'Staying in the same old area while your business soars.',
  'Missing out on premium lifestyle circles.',
  'Losing investment opportunities beyond your company.',
  'Holding all wealth in one place — a risky game.',
  'Your lifestyle, your network, your investments — they all need a premium address.'
]

export default function PainPoints() {
  return (
    <section className="pain-points-section py-20 bg-white">
      <div className="section-container">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ShiningText customStyle="sm:text-[40px] text-[30px] font-medium font-['DM_Serif_Display'] mb-10" textLeft={"Pain "} textRight={"Points"} /> 
          {/* Business Illustration - Exact Match */}
          <div className="flex justify-center mb-12">
            <div 
              className=" w-80 h-48 flex items-center justify-center"
            >
              <div className="text-center">
                <img src={painImg.src} alt="" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pain Points Grid */}
        <div className="pain-points-grid grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* The Problem */}
          <motion.div 
            className="pain-points-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#37405E] mb-6">The Problem</h3>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#937B37] mr-3 mt-1 text-lg font-bold">•</span>
                  <span className="text-gray-700 leading-relaxed text-base">{problem}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* The Agitation */}
          <motion.div 
            className="pain-points-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#37405E] mb-6">The Agitation</h3>
            <ul className="space-y-4">
              {agitations.map((agitation, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#937B37] mr-3 mt-1 text-lg font-bold">•</span>
                  <span className="text-gray-700 leading-relaxed text-base">{agitation}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
