'use client'

import { motion } from 'framer-motion'
import successicon from '@/images/successvg.png'

const testimonials = [
  {
    name: 'Suresh',
    role: 'Manufacturing CEO',
    quote: 'My villa reflects my journey. Clients are impressed before meetings begin!'
  },
  {
    name: 'Rahman',
    role: 'Restaurant Chain Owner',
    quote: 'Best diversification from business funds. Already appreciated 20%!'
  }
]

export default function SuccessStories() {
  return (
    <section className="success-stories-section bg-[#f6f3ee] py-20 relative overflow-hidden">
      {/* Decorative Stars - Exact Positioning */}
      <div className="success-stories-star absolute top-12 left-12">
        <div 
          className="w-full h-full"
        >
        <img src={successicon.src} alt="" />
        </div>
      </div>
      
      <div className="success-stories-star absolute bottom-12 right-12">
        <div 
          className="w-full h-full"
        >
        <img src={successicon.src} alt="" />
        </div>
      </div>

      <div className="section-container text-center relative z-10">
        {/* Title */}
 
        <div className="text-[30px] sm:text-[36px] font-['DM_Serif_Display'] text-[#37405E] mb-10">
          Success Stories
				</div>   

        {/* Testimonials Grid */}
        <div className="success-stories-grid grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="success-stories-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Golden Quote Mark - Top Right */}
              <div 
                className="success-stories-quote-mark absolute text-[#937B37] font-bold leading-none"
                style={{ fontSize: '4rem' }}
              >
                "
              </div>
              
              <div className="text-center relative z-10 pt-6">
                {/* Name and Role */}
                <div className="mb-6">
                  <h3 className="success-stories-name text-2xl font-normal text-[#37405E] mb-2">
                    {testimonial.name}
                  </h3>
                  <p className="success-stories-role text-gray-500 text-lg">
                    {testimonial.role}
                  </p>
                </div>
                
                {/* Quote */}
                <p className="success-stories-quote text-gray-700 text-lg leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
