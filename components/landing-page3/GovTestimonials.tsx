'use client'

import { motion } from 'framer-motion'
import starsvg from '@/images/successvg.png'

const testimonials = [
  {
    name: 'Murali',
    role: 'State Government',
    quote: '26 years in quarters. Finally, my own address. Documentation was surprisingly simple!'
  },
  {
    name: 'Lakshmi',
    role: 'Government School',
    quote: 'Our teachers\' association booked 5 plots together. Great community forming!'
  }
]

export default function GovTestimonials() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #f6f3ef 0%, #e8e2d8 100%)',
      textAlign: 'center',
      padding: '80px 0',
      position: 'relative'
    }}>
      {/* Decorative Stars */}
      <div style={{
        position: 'absolute',
        top: '80px',
        left: '8%',
        width: '50px',
        height: '50px',
        
        
      }}>
        <img src={starsvg.src} alt="" />
      </div>
      
      <div style={{
        position: 'absolute',
        bottom: '80px',
        right: '8%',
        width: '50px',
        height: '50px',

      }}>
        <img src={starsvg.src} alt="" />
      </div>

      <div className="section-container">
        {/* Section Title */}
				<div className="text-[30px] sm:text-[36px] font-['DM_Serif_Display'] text-[#37405E] mb-10">
						Your Colleagues Already Chose Us
				</div>        

        {/* Testimonials */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '60px',
          flexWrap: 'wrap',
          // maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 max-w-[540px] min-w-[350px] relative shadow-lg text-left rounded-tl-[40%] rounded-br-[40%]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
              {/* Golden Quote Mark */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '32px',
                color: '#937B37',
                fontSize: '80px',
                fontWeight: 'bold',
                fontFamily: 'serif',
                lineHeight: '1'
              }}>
                "
              </div>
              
              {/* Name and Role */}
              <div style={{ marginBottom: '24px', paddingTop: '20px' }}>
                <h4 style={{
                  fontWeight: '700',
                  fontSize: '20px',
                  color: '#1f2937',
                  marginBottom: '4px',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  {testimonial.name}
                </h4>
                <p style={{
                  color: '#6b7280',
                  fontSize: '16px',
                  fontFamily: 'Inter, sans-serif',
                  margin: 0
                }}>
                  {testimonial.role}
                </p>
              </div>
              
              {/* Quote */}
              <p style={{
                color: '#4a5568',
                fontSize: '16px',
                lineHeight: '1.6',
                fontFamily: 'Inter, sans-serif',
                margin: 0,
                fontStyle: 'italic'
              }}>
                "{testimonial.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
