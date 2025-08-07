'use client'

import { motion } from 'framer-motion'
import { ShiningText } from '../ui/shining-text'

import page3Vector from "@/images/page3Vector.svg"
import bankloan from "@/images/bank loan.svg"
import nohiddencost from "@/images/no hidden cost.svg"
import peacefullocation from "@/images/peaceful location.svg"
import address from "@/images/address.svg"
import assetcreation from "@/images/asset creation.svg"


const features = [
  {
    icon: page3Vector,
    title: 'Complete Legal Clarity',
    description: 'All government norms satisfied'
  },
  {
    icon: bankloan,
    title: 'Bank Loan Approved',
    description: 'Easy processing with your salary slip'
  },
  {
    icon: nohiddencost,
    title: 'No Hidden Costs',
    description: 'Transparent pricing, zero maintenance'
  },
  {
    icon: peacefullocation,
    title: 'Retirement Ready',
    description: 'Peaceful location for golden years'
  },
  {
    icon: address,
    title: 'Status Address',
    description: 'Match your service dignity'
  },
  {
    icon: assetcreation,
    title: 'Asset Creation',
    description: 'Beyond LIC and PPF investments'
  }
]

export default function GovFeatures() {
  return (
    <section style={{
      padding: '80px 0',
      backgroundColor: 'white'
    }}>
      <div className="section-container">
        {/* Section Title */}
        <motion.div
          style={{
            textAlign: 'center',
            marginBottom: '80px'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
        <ShiningText customStyle="sm:text-[36px] text-[30px] font-medium font-['DM_Serif_Display'] text-center mb-10" textLeft={"Built for Your "} textRight={"Requirements"} />          
        </motion.div>

        {/* Features Grid - 2 rows of 4, then 2 items */}
        <div style={{
          display: 'grid',
          gap: '40px',
          maxWidth: '1200px',
          margin: '0 auto'
        }} className='page3-feature-grid'>
          {/* First 4 items */}
          {features.slice(0, 4).map((feature, index) => (
            <motion.div
              key={index}
              style={{
                textAlign: 'center',
                padding: '40px 20px',
                backgroundColor: 'white'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Golden Square Icon */}
              <div style={{
                width: '100px',
                height: '100px',
                background: 'linear-gradient(135deg, #D3AC4A 0%, #B8941F 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 32px',
                boxShadow: '0 6px 16px rgba(211, 172, 74, 0.3)'
              }}>
                <img src={feature.icon.src} alt="" />
              </div>
              
              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#1f2937',
                marginBottom: '12px',
                fontFamily: 'Inter, sans-serif',
                lineHeight: '1.3'
              }}>
                {feature.title}
              </h3>
              
              <p style={{
                fontSize: '14px',
                color: '#6b7280',
                lineHeight: '1.5',
                fontFamily: 'Inter, sans-serif'
              }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom 2 items - centered */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          marginTop: '40px',
          maxWidth: '600px',
          margin: '40px auto 0'
        }} className='flex-wrap'>
          {features.slice(4, 6).map((feature, index) => (
            <motion.div
              key={index + 4}
              style={{
                textAlign: 'center',
                padding: '40px 20px',
                backgroundColor: 'white',
                width: '280px'
              }}
              className='page3-feature-flex'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 4) * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Golden Square Icon */}
              <div style={{
                width: '100px',
                height: '100px',
                background: 'linear-gradient(135deg, #D3AC4A 0%, #B8941F 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 32px',
                boxShadow: '0 6px 16px rgba(211, 172, 74, 0.3)'
              }}>
                
                <img src={feature.icon.src} alt="" />
              </div>
              
              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#1f2937',
                marginBottom: '12px',
                fontFamily: 'Inter, sans-serif',
                lineHeight: '1.3'
              }}>
                {feature.title}
              </h3>
              
              <p style={{
                fontSize: '14px',
                color: '#6b7280',
                lineHeight: '1.5',
                fontFamily: 'Inter, sans-serif'
              }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
