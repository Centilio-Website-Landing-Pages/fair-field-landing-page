'use client'

import { motion } from 'framer-motion'
import { ShiningText } from '../ui/shining-text'

import DiversIcon from '@/images/diversification.png'
import AppreciateIcon from '@/images/appreciation.png'
import NetworkIcon from '@/images/networking.png'
import LegacyIcon from '@/images/legacy building.png'
import TaxIcon from '@/images/tax efficiency.png'
import ClientIcon from '@/images/client hosting.png'


const businessCases = [
  {
    icon: DiversIcon,
    title: 'Diversification',
    description: 'Balance business risk with land asset'
  },
  {
    icon: AppreciateIcon,
    title: 'Appreciation',
    description: '30-40% growth backed by infrastructure'
  },
  {
    icon: NetworkIcon,
    title: 'Networking',
    description: 'Elite neighbor community'
  },
  {
    icon: LegacyIcon,
    title: 'Legacy Building',
    description: 'Generational wealth creation'
  },
  {
    icon: TaxIcon,
    title: 'Tax Efficiency',
    description: 'Optimize your portfolio'
  },
  {
    icon: ClientIcon,
    title: 'Client Hosting',
    description: 'Premium address for meetings'
  }
]

export default function BusinessCase() {
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ShiningText customStyle="sm:text-[40px] text-[30px] font-medium font-['DM_Serif_Display'] mb-5" textLeft={"The Business "} textRight={"Case"} />                                              
        </motion.div>

        {/* Business Cases Grid - 3x2 Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {businessCases.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Golden Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-[#D3AC4A] to-[#B8941F] rounded-lg flex items-center justify-center mx-auto mb-6">
                <img src={item.icon.src} className="text-[#37405E]" />
              </div>
              
              <h3 className="text-xl font-bold text-[#37405E] mb-3">
                {item.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
