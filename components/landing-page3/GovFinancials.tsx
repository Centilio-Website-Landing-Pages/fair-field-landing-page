'use client'

import { motion } from 'framer-motion'
import { ShiningText } from '../ui/shining-text'

const financialOptions = [
  {
    title: 'Plots from ₹18.5L',
    subtitle: '(₹15,400 EMI)'
  },
  {
    title: 'Villas from ₹1.65Cr',
    subtitle: '(₹1.37L EMI)'
  },
  {
    title: 'Down payment',
    subtitle: 'from 20% only'
  },
  {
    title: 'Stage-wise payment',
    subtitle: 'available'
  }
]

export default function GovFinancials() {
  return (
    <section style={{
      padding: '80px 0',
      backgroundColor: 'white',
      textAlign: 'center'
    }}>
      <div className="section-container">
        {/* Section Title */}
        <ShiningText customStyle="sm:text-[36px] text-[30px] font-medium font-['DM_Serif_Display'] text-center mb-10" textLeft={"Financial "} textRight={"Sensibility"} />          
        {/* Financial Options Grid */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '60px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {financialOptions.map((option, index) => (
            <motion.div
              key={index}
              style={{
                minWidth: '200px',
                textAlign: 'left',
                position: 'relative'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Bullet Point */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#37405E',
                  borderRadius: '50%',
                  marginTop: '8px',
                  flexShrink: 0
                }}>
                </div>
                
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#1f2937',
                    margin: '0 0 4px 0',
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: '1.3'
                  }}>
                    {option.title}
                  </h3>
                  
                  <p style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#1f2937',
                    margin: 0,
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: '1.3'
                  }}>
                    {option.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
