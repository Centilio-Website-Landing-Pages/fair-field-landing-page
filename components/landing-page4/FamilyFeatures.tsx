'use client'

import { motion } from 'framer-motion'
import { Shield, Users, Home, Trees, FileCheck, Settings } from 'lucide-react'
import { ShiningText } from '../ui/shining-text'

import Gatedcommunity from '@/images/Gated community.svg'
import families from '@/images/just 73 families.svg'
import customizableHomes from '@/images/customizable Homes.svg'
import greenspaces from '@/images/green spaces.svg'
import legaltitles from '@/images/clear legal titles.svg'
import zeromaintenance from '@/images/zero maintenance.svg'


const features = [
  {
    icon: Gatedcommunity,
    title: 'Gated Community',
    description: '24/7 security for peaceful parenting'
  },
  {
    icon: families,
    title: 'Just 73 Families',
    description: 'Your kids know every neighbor'
  },
  {
    icon: customizableHomes,
    title: 'Customizable Homes',
    description: 'Design around your family needs'
  },
  {
    icon: greenspaces,
    title: 'Green Spaces',
    description: 'Natural playground for healthy childhood'
  },
  {
    icon: legaltitles,
    title: 'Clear Legal Titles',
    description: 'Secure your children\'s inheritance'
  },
  {
    icon: zeromaintenance,
    title: 'Zero Maintenance',
    description: 'More money for education savings'
  }
]

export default function FamilyFeatures() {
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
          <ShiningText customStyle="sm:text-[40px] text-[30px] font-medium font-['DM_Serif_Display'] mb-5" textLeft={"Family-First "} textRight={"Features"} />                        
        </motion.div>

        {/* Features Grid - Exact 3x2 Layout */}
        <div className="family-features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="family-feature-card relative bg-white rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              style={{ 
                minHeight: '220px',
                padding: '2rem'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.borderColor = '#d1d5db'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = '#e5e7eb'
              }}
            >
              {/* Content */}
              <div className="family-feature-content pr-16 pb-16">
                <h3 className="family-feature-title text-xl font-bold text-[#37405E] mb-4 leading-tight">
                  {feature.title}
                </h3>
                
                <p className="family-feature-desc text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Golden Icon - Bottom Right Corner */}
              <div className="family-feature-icon absolute bottom-0 right-0">
                  <img src={feature.icon.src} alt="" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
