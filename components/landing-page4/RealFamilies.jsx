'use client'

import { motion } from 'framer-motion'

export default function RealFamilies() {
  return (
    <section className="real-families-section bg-gray-100 py-20 relative overflow-hidden">
      {/* Decorative Circle Elements - Exact Match */}
      <div className="real-families-decorative-1"></div>
      <div className="real-families-decorative-2"></div>
      
      <div className="section-container text-center relative z-10">
        {/* Title */}
        <div className="text-[30px] sm:text-[36px] font-['DM_Serif_Display'] text-[#37405E] mb-10">
						Real Families, Real Stories
				</div>   

        {/* Testimonial Card - Perfect Center Alignment */}
        <motion.div
          className="real-families-card max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
          style={{ 
            padding: '3.5rem 3rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Name and Role */}
          <div className="mb-8">
            <h3 className="real-families-name text-2xl font-bold text-[#37405E] mb-3">
              Anitha
            </h3>
            <p className="real-families-role text-gray-500 text-lg font-medium">
              Mother of Two
            </p>
          </div>
          
          {/* Testimonial Quote */}
          <blockquote className="real-families-quote text-gray-700 text-lg leading-relaxed font-medium">
            &quot;My daughter walks to her friend&apos;s house safely. My son cycles without 
            traffic fear. This is the childhood I wanted for them.&quot;
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
