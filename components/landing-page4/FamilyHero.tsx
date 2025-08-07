'use client'

import { motion } from 'framer-motion'
import Rectangle from '@/images/Rectangle 9.png'
import { ShiningText } from '../ui/shining-text'

export default function FamilyHero() {
  return (
    <section className="page4-hero-section">
      {/* Curved Design Element */}
      <div className="page4-curved-element">
        <div></div>
      </div>
      
      <div className="section-container">
        <div className="page4-hero-content">
          {/* Left Content */}
          <motion.div 
            className="page4-hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ShiningText customStyle="sm:text-[40px] text-[30px] font-medium font-['DM_Serif_Display'] mb-5" textLeft={"Is your family stuck choosing between "} textRight={"good schools and a good home?"} />                        
            <p className="page4-hero-description">
              Every morning, your kids wake up early and sit sleepy in the school 
              van for a long time. Every evening, you come back to a small flat. 
              Your neighbors complain when your kids play
            </p>
            
            <p className="page4-hero-pricing">
              Land from 18.5 Lakhs | Villas from 1.65 Crores | A safe and green place 
              for families
            </p>

            <motion.button 
              className="page4-hero-button"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              // onClick={() => window.centilio_connector_init.submit_call()}
            >
              Book Your Visit Today
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="page4-hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={Rectangle.src}
              alt="Family Villa"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '1rem',
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                maxHeight: '500px',
                objectFit: 'cover'
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
