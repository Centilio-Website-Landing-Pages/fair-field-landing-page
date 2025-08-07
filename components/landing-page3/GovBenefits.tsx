'use client'

import { motion } from 'framer-motion'
import document from '@/images/document.svg'
import streamlined from '@/images/streamlined loan.svg'
import Groupbooking from '@/images/Group booking.svg'
import streamlinedloan from '@/images/streamlined loan.svg'


const benefits = [
  {
    icon: document,
    title: 'Dedicated documentation assistance'
  },
  {
    icon: streamlined,
    title: 'Flexible payment plans matching DA releases'
  },
  {
    icon: Groupbooking,
    title: 'Group booking benefits for associations'
  },
  {
    icon: streamlinedloan,
    title: 'Streamlined loan processing support'
  }
]

export default function GovBenefits() {
  return (
    <section style={{
      backgroundColor: '#37405E',
      color: 'white',
      textAlign: 'center',
      padding: '80px 0',
      position: 'relative'
    }}>
      <div className="section-container">
				<div className="mb-8 font-semibold bg-linear-to-r from-[#D3AC4A] from-[30%] to-[#FFFFFF] to-[70%] bg-clip-text text-[36px] font-['DM_Serif_Display'] text-center text-transparent ...">
						Special Government Employee Benefits
				</div>        

        {/* Benefits Grid */}
        <div 
          className="gov-benefits-grid"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '60px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="gov-benefits-item"
              style={{
                width: '240px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Icon Container */}
              <div 
                className="gov-benefits-icon"
                style={{
                  width: '100px',
                  height: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 32px',
                  position: 'relative',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                <img src={benefit.icon.src} alt="" />
              </div>

              {/* Title */}
              <h3 
                className="gov-benefits-title"
                style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  lineHeight: '1.5',
                  fontFamily: 'Inter, sans-serif',
                  color: 'white',
                  margin: 0,
                  maxWidth: '220px'
                }}
              >
                {benefit.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
