'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

import Rectangle from '@/images/Rectangle 9.png'
import checkicon from '@/images/checked_9709605 1.png'

const benefits = [
  'Document checklist provided',
  'Loan assistance included',
  'Association group bookings welcome'
]

export default function GovCTA() {
  return (
    <section style={{
      backgroundColor: '#37405E',
      color: 'white',
      padding: '80px 0'
    }}>
      <div className="section-container">
        <div 
          className="gov-cta-container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '80px',
            flexWrap: 'wrap'
          }}
        >
          {/* Left Content */}
          <motion.div
            className="gov-cta-text"
            style={{
              flex: '1',
              minWidth: '500px',
              maxWidth: '600px'
            }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Main Title */}
            <div className="mb-8 font-semibold bg-linear-to-r from-[#D3AC4A] from-[30%] to-[#FFFFFF] to-[70%] bg-clip-text text-[36px] font-['DM_Serif_Display'] text-transparent ...">
                Your Service Deserves Ownership
            </div>                
            {/* Subtitle */}
            <p 
              className="gov-cta-subtitle"
              style={{
                fontSize: '20px',
                marginBottom: '40px',
                color: '#e2e8f0',
                fontFamily: 'Inter, sans-serif',
                fontWeight: '500'
              }}
            >
              Exclusive Government Employee Desk
            </p>

            {/* Benefits List */}
            <ul 
              className="gov-cta-benefits"
              style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 48px 0',
                color: 'white'
              }}
            >
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap:"15px",
                    marginBottom: '20px',
                    fontSize: '18px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: '500'
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >

                  <img src={checkicon.src} alt="" />
                  {benefit}
                </motion.li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div 
              className="gov-cta-buttons"
              style={{ 
                display: 'flex', 
                gap: '20px', 
                flexWrap: 'wrap' 
              }}
            >
              <button
                style={{
                  backgroundColor: '#937B37',
                  color: 'white',
                  border: 'none',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '16px',
                  fontFamily: 'Inter, sans-serif',
                  transition: 'all 0.2s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#7d672f'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#937B37'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
                // onClick={() => window.centilio_connector_init.submit_call()}
              >
                BOOK SITE VISIT
              </button>
              
              {/* <button
                style={{
                  backgroundColor: '#937B37',
                  color: 'white',
                  border: 'none',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '16px',
                  fontFamily: 'Inter, sans-serif',
                  transition: 'all 0.2s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#7d672f'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#937B37'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                DOWNLOAD EMPLOYEE GUIDE
              </button> */}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            style={{
              flex: '1',
              minWidth: '400px',
              maxWidth: '550px',
              display: 'flex',
              justifyContent: 'center'
            }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '16px',
              padding: '16px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <img
                src={Rectangle.src}
                alt="Home Exterior"
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  borderRadius: '12px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
