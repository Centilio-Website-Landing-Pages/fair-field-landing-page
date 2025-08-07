'use client'

import { motion } from 'framer-motion'
import { ShiningText } from '../ui/shining-text'
import painImg from '@/images/page4painImg.png'


export default function PainPoints() {
  return (
    <section className="py-16 bg-white">
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
          {/* Family Illustration Placeholder */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center justify-center">
              <img src={painImg.src} alt="" />
            </div>
          </div>
        </motion.div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* The Problem */}
          <motion.div 
            className="border border-gray-200 p-6 rounded-lg bg-white shadow-sm"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-[#37405E] mb-4">The Problem</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#937B37] mr-2">•</span>
                Good schools are far away
              </li>
              <li className="flex items-start">
                <span className="text-[#937B37] mr-2">•</span>
                Safe areas cost too much
              </li>
              <li className="flex items-start">
                <span className="text-[#937B37] mr-2">•</span>
                Flats are small and crowded
              </li>
              <li className="flex items-start">
                <span className="text-[#937B37] mr-2">•</span>
                Neighbors get upset when kids play
              </li>
            </ul>
          </motion.div>

          {/* It Gets Worse */}
          <motion.div 
            className="border border-gray-200 p-6 rounded-lg bg-white shadow-sm"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-[#37405E] mb-4">It Gets Worse</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#937B37] mr-2">•</span>
                You want a garden for your kids to play
              </li>
              <li className="flex items-start">
                <span className="text-[#937B37] mr-2">•</span>
                You want good schools nearby
              </li>
              <li className="flex items-start">
                <span className="text-[#937B37] mr-2">•</span>
                You want a safe and friendly place
              </li>
              <li className="flex items-start">
                <span className="text-[#937B37] mr-2">•</span>
                Your dream home feels more and more far away
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
