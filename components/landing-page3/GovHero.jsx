'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ShiningText } from '../ui/shining-text'

import Rectangle from '@/images/page3hero.jpg'

export default function GovHero() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: ''
  })

  
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);  


	const validateForm = () => {
	    const newErrors = {};

	    // Full name validation
	    if (!formData.fullName.trim()) {
	      newErrors.fullName = 'Full name is required';
	    } else if (formData.fullName.trim().length < 2) {
	      newErrors.fullName = 'Full name must be at least 2 characters';
	    }

	    // Email validation
	    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	    if (!formData.email.trim()) {
	      newErrors.email = 'Email is required';
	    } else if (!emailRegex.test(formData.email)) {
	      newErrors.email = 'Please enter a valid email address';
	    }

	    // Phone number validation
	    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
	    if (!formData.phoneNumber.trim()) {
	      newErrors.phoneNumber = 'Phone number is required';
	    } else if (!phoneRegex.test(formData.phoneNumber.replace(/[\s\-\(\)]/g, ''))) {
	      newErrors.phoneNumber = 'Please enter a valid phone number';
	    }

	    setErrors(newErrors);
	    return Object.keys(newErrors).length === 0;
	};

	const handleInputChange = (e) => {
	    const { name, value } = e.target;
	    setFormData(prev => ({
	      ...prev,
	      [name]: value
	    }));

	    // Clear error when user starts typing
	    if (errors[name]) {
	      setErrors(prev => ({
	        ...prev,
	        [name]: ''
	      }));
	    }
	};

  
	const handleSubmit = async (e) => {
	    e.preventDefault();
	    
	    if (!validateForm()) {
	      return;
	    }

	    setIsSubmitting(true);
	    
	    try {
	      // Simulate API call
	    //   await new Promise(resolve => setTimeout(resolve, 1000));
		  window.centilio_connector_init.submit();
	      
	      // Handle successful submission
	      console.log('Form submitted:', formData);
	      alert('Consultation booked successfully!');
	      
	      // Reset form
	      setFormData({
	        fullName: '',
	        email: '',
	        phoneNumber: ''
	      });
	    } catch (error) {
	      console.error('Submission error:', error);
	      alert('There was an error booking your consultation. Please try again.');
	    } finally {
	      setIsSubmitting(false);
	    }
	};  

  return (
    <section style={{
      background: 'linear-gradient(135deg, #f6f3ef 0%, #e8e2d8 100%)',
      minHeight: '700px',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '60px',
      paddingBottom: '60px'
    }}>
      {/* Diagonal Design Element */}
      <div 
        className="page3-diagonal"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '45%',
          height: '100%',
          background: '#37405E',
          clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)',
          zIndex: 1
        }}
      ></div>
      
      {/* Main Container - Centrally Aligned */}
      <div style={{ 
        position: 'relative', 
        zIndex: 2,
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 40px'
      }}>
        <div 
          className="page3-hero-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '80px',
            minHeight: '600px'
          }}
        >
          {/* Left Content */}
          <motion.div
            className="page3-hero-text"
            style={{
              flex: '1',
              // maxWidth: '600px'
            }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className=""
              style={{
                marginBottom: '20px',
              }}
            >
            <ShiningText customStyle="sm:text-[40px] text-[30px] font-medium font-['DM_Serif_Display']" textLeft={"Government Employee ?"} textRight={"Approved Home Awaits!"} />            
            </div>
            
            <p 
              className="page3-hero-subtitle"
              style={{
                color: '#937B37',
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '24px',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              Turning Your Service into Homeownership
            </p>
            
            <p 
              className="page3-hero-desc"
              style={{
                color: '#4a5568',
                fontSize: '16px',
                lineHeight: '1.6',
                marginBottom: '40px',
                fontFamily: 'Inter, sans-serif',
                maxWidth: '520px'
              }}
            >
              After years of service, you deserve more than quarters. Anicham & 
              Magilam understands the aspirations and constraints of government 
              employees, offering a transparent path to proud homeownership
            </p>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '16px',
              maxWidth: '400px'
            }}>
              <input
                type="text"
                name="fullName"
                placeholder="Full name"
                value={formData.fullName}
                onChange={handleInputChange}
                className='centilio-input-last-name'
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '15px',
                  fontFamily: 'Inter, sans-serif',
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                  backgroundColor: 'white'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#37405E'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0'
                }}
                required
              />
              
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className='centilio-input-email'
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '15px',
                  fontFamily: 'Inter, sans-serif',
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                  backgroundColor: 'white'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#37405E'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0'
                }}
                required
              />
              
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className='centilio-input-mobile'
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '15px',
                  fontFamily: 'Inter, sans-serif',
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                  backgroundColor: 'white'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#37405E'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0'
                }}
                required
              />
              
              <button
                type="submit"
                style={{
                  width: '100%',
                  backgroundColor: '#37405E',
                  color: 'white',
                  padding: '16px 32px',
                  fontSize: '16px',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontFamily: 'Inter, sans-serif',
                  boxShadow: '0 4px 12px rgba(55, 64, 94, 0.3)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#2d3548'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#37405E'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
                onClick={() => window.centilio_connector_init.submit_call()}
              >
                Book Your Visit Today
              </button>
            </form>
          </motion.div>

          {/* Right Image */}
          <motion.div
            style={{
              flex: '1',
              // maxWidth: '550px',
              position: 'relative',
              zIndex: 3,
              display: 'flex',
              justifyContent: 'center'
            }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={Rectangle.src}
              alt="Balcony View"
              style={{
                width: '100%',
                // maxWidth: '500px',
                borderRadius: '12px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
