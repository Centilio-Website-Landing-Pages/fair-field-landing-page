'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import UniversalFooter from '@/components/shared/footer/UniversalFooter';

const testimonials = [
  {
    id: 1,
    quote: "We bought our first plot at Kurinjee Nagar Phase I and from the first visit itself, the team made us feel comfortable. All documents were explained clearly, and the registration happened without a single delay. Now we've built our home and live here peacefully, it's truly the best decision we made for our family.",
    name: "Mr. Anand & Family",
    location: "First-time Home Buyers, Coimbatore",
    image: "/images/testimonial page - ff/images/2 fold image.png"
  },
  {
    id: 2,
    quote: "Buying property while living abroad can be stressful, but the Fair Field team handled everything for me. They sent photos, updates and even helped me with bank coordination. The entire process was transparent and professional. I recommend them to every NRI who wants to invest safely back home.",
    name: "Ms. Lavanya",
    location: "NRI Investor, Singapore",
    image: "/images/testimonial page - ff/images/2 fold image.png"
  },
  {
    id: 3,
    quote: "I invested in a plot with Fair Field three years ago, and the value has already gone up by more than 75%. What impressed me most was their honesty and regular communication. They don't just sell they truly guide you. I've already booked for their next project.",
    name: "Mr. Mahesh",
    location: "Investor, USA",
    image: "/images/testimonial page - ff/images/2 fold image.png"
  }
];

export function TestimonialsPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* First Fold - Step-shaped Background with Building Image */}
      <motion.section 
        className="relative overflow-hidden"
        style={{ height: '75vh' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Step Cut Design Layer Only */}
        <div className="absolute inset-0">
          <Image
            src="/images/layer 1.jpg"
            alt="Step Cut Design Layer"
            fill
            className="object-cover object-center"
            style={{ objectPosition: 'center top' }}
            priority
          />
        </div>

        {/* Logo and Navigation Menu - Over building image */}
        <div className="absolute top-0 left-0 right-0 z-30">
          <div className="px-8 py-6">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
              {/* Logo */}
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src="/images/logo/FFS LOGO DIFFERENCE-02.png"
                  alt="Fair Field Shelters Logo"
                  width={80}
                  height={60}
                  className="mr-2"
                />
              </motion.div>

              {/* Navigation Menu - Over building image with white text */}
              <motion.nav 
                className="hidden md:flex items-center space-x-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <a href="/" className="text-[16px] text-white font-medium hover:text-[#D3AC4A] transition-colors drop-shadow-lg" style={{ fontFamily: 'Alata' }}>Home</a>
                <a href="/about-us" className="text-[16px] text-white font-medium hover:text-[#D3AC4A] transition-colors drop-shadow-lg" style={{ fontFamily: 'Alata' }}>About us</a>
                <a href="/projects" className="text-[16px] text-white font-medium hover:text-[#D3AC4A] transition-colors drop-shadow-lg" style={{ fontFamily: 'Alata' }}>Project</a>
                <a href="/blog" className="text-[16px] text-white font-medium hover:text-[#D3AC4A] transition-colors drop-shadow-lg" style={{ fontFamily: 'Alata' }}>Blog</a>
                <a href="/careers" className="text-[16px] text-white font-medium hover:text-[#D3AC4A] transition-colors drop-shadow-lg" style={{ fontFamily: 'Alata' }}>Careers</a>
                <a href="/contact" className="text-[16px] text-white font-medium hover:text-[#D3AC4A] transition-colors drop-shadow-lg" style={{ fontFamily: 'Alata' }}>Contact</a>
              </motion.nav>

              {/* Empty space for button */}
              <div className="w-48"></div>
            </div>
          </div>
        </div>

        {/* Schedule a Visit Button - Positioned over step-cut area */}
        <motion.div 
          className="absolute top-4 right-8 z-40"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button 
            className="bg-[#D3AC4A] text-[#37405E] px-6 py-3 rounded-lg font-bold text-[16px] hover:bg-[#C19B42] transition-colors flex items-center space-x-2"
            style={{ fontFamily: 'Futura-Heavy' }}
          >
            <span>Schedule a visit</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"/>
            </svg>
          </button>
        </motion.div>

        {/* Testimonials Title - Centered over building image */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <motion.h1 
              className="text-[48px] font-normal text-white drop-shadow-2xl"
              style={{ fontFamily: 'DM Serif Display' }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Testimonials
            </motion.h1>
          </div>
        </div>

        {/* Cream Breadcrumb Bar - Full width at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <motion.div 
            className="bg-[#F5F2E8] py-6 px-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center space-x-2 text-[16px] text-[#37405E] font-medium" style={{ fontFamily: 'Futura-Medium' }}>
                <span>Home</span>
                <span>›</span>
                <span>About us</span>
                <span>›</span>
                <span>Testimonials</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content Section - Second Fold */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="relative inline-block mx-auto">
                <h2 className="text-2xl font-medium text-[#D3AC4A] tracking-wide text-center" style={{ fontFamily: 'Futura-Medium' }}>
                  What our buyers say
                </h2>
                {/* Paint brush stroke-like line below text */}
                <div className="flex justify-center mt-3">
                  <svg width="140" height="12" viewBox="0 0 140 12" className="text-[#D3AC4A]">
                    <defs>
                      <linearGradient id="brushGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#D3AC4A" />
                        <stop offset="50%" stopColor="#B8954A" />
                        <stop offset="100%" stopColor="#8B6914" />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M5 6 C25 3, 45 8, 65 5 C85 2, 105 9, 135 6" 
                      stroke="url(#brushGradient)" 
                      strokeWidth="1" 
                      fill="none" 
                      strokeLinecap="round"
                      opacity="0.8"
                    />
                    <path 
                      d="M8 6 C28 4, 48 7.5, 68 5.5 C88 3, 108 8.5, 135 6" 
                      stroke="url(#brushGradient)" 
                      strokeWidth="2.5" 
                      fill="none" 
                      strokeLinecap="round"
                      opacity="0.7"
                    />
                    <path 
                      d="M12 6 C32 4.5, 52 7, 72 6 C92 4.5, 112 7.5, 135 6" 
                      stroke="url(#brushGradient)" 
                      strokeWidth="4.5" 
                      fill="none" 
                      strokeLinecap="round"
                      opacity="0.9"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-4xl lg:text-5xl leading-tight text-center" style={{ fontFamily: 'DM Serif Display' }}>
                <span className="text-[#37405E]">Real </span>
                <span 
                  className="bg-gradient-to-r from-[#D3AC4A] via-[#B8954A] to-[#8B6914] bg-clip-text text-transparent"
                >
                  stories
                </span>
              </h3>
              <p className="text-lg text-[#37405E] font-medium leading-relaxed max-w-3xl mx-auto text-center" style={{ fontFamily: 'Futura-Medium' }}>
                At Fair Field Shelters, every project is more than land or buildings, it's a journey of trust, happiness and fulfilled dreams. 
                Here's what our proud customers have to say about their experience with us.
              </p>
            </div>
          </motion.div>

          {/* Testimonials Section - Exact Reference Layout */}
          <div className="grid lg:grid-cols-[658px_784px] gap-0 justify-center">
            {/* Left - Image with Main Testimonial Card Overlapping */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Background Image */}
              <div className="relative w-[658px] h-[716px] overflow-hidden">
                <Image
                  src={testimonials[currentTestimonial].image}
                  alt="Customer Home"
                  fill
                  className="object-cover"
                />
                {/* Navy Blue Overlay */}
                <div className="absolute inset-0 bg-[#37405E]/60" />
              </div>

              {/* Main Testimonial Card - Bottom Overlapping */}
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute bottom-8 left-8 bg-white p-6"
                style={{ 
                  width: '470px', 
                  height: '320px',
                  zIndex: 10
                }}
              >
                {/* Large Quote Icon */}
                <div className="text-[#D3AC4A] mb-4">
                  <svg width="40" height="32" viewBox="0 0 40 32" fill="currentColor">
                    <path d="M15 8C15 3.6 11.4 0 7 0S-1 3.6-1 8c0 2.3 1 4.4 2.6 5.9V20h5.4V13.9c1.6-1.5 2.6-3.6 2.6-5.9zm16 0C31 3.6 27.4 0 23 0s-8 3.6-8 8c0 2.3 1 4.4 2.6 5.9V20h5.4V13.9c1.6-1.5 2.6-3.6 2.6-5.9z"/>
                  </svg>
                </div>
                
                <blockquote className="text-base text-[#37405E] font-medium leading-relaxed mb-6" style={{ fontFamily: 'Futura-Medium' }}>
                  "{testimonials[currentTestimonial].quote.length > 180 ? testimonials[currentTestimonial].quote.substring(0, 180) + '...' : testimonials[currentTestimonial].quote}"
                </blockquote>
                
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-[#37405E]" style={{ fontFamily: 'Futura-Heavy' }}>
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-sm text-[#37405E] font-medium" style={{ fontFamily: 'Futura-Medium' }}>
                    {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Light Cream Background with Two Testimonial Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative bg-[#F5F2E8] p-8"
              style={{ 
                width: '784px',
                height: '714px'
              }}
            >
              {/* Yellow Background Accent - Top Right */}
              <div 
                className="absolute top-0 right-0 bg-[#D3AC4A]/10"
                style={{
                  width: '784px',
                  height: '714px'
                }}
              />
              
              {/* Two Testimonial Cards - Side by Side */}
              <div className="relative z-10 flex gap-6 pt-12 justify-center items-start">
                {testimonials.filter((_, index) => index !== currentTestimonial).map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                    style={{ 
                      width: '340px',
                      height: '400px'
                    }}
                    onClick={() => setCurrentTestimonial(testimonials.findIndex(t => t.id === testimonial.id))}
                  >
                    <div className="text-[#D3AC4A] mb-4">
                      <svg width="32" height="24" viewBox="0 0 32 24" fill="currentColor">
                        <path d="M12 6C12 2.7 9.3 0 6 0S0 2.7 0 6c0 1.7.8 3.3 2.1 4.3V15h4.3V10.3c1.3-1 2.1-2.6 2.1-4.3zm13 0C25 2.7 22.3 0 19 0s-6 2.7-6 6c0 1.7.8 3.3 2.1 4.3V15h4.3V10.3c1.3-1 2.1-2.6 2.1-4.3z"/>
                      </svg>
                    </div>
                    <p className="text-[#37405E] font-medium leading-relaxed mb-4 text-sm" style={{ fontFamily: 'Futura-Medium' }}>
                      "{testimonial.quote.length > 150 ? testimonial.quote.substring(0, 150) + '...' : testimonial.quote}"
                    </p>
                    <div className="space-y-1">
                      <h4 className="font-bold text-[#37405E] text-base" style={{ fontFamily: 'Futura-Heavy' }}>
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-[#37405E] font-medium" style={{ fontFamily: 'Futura-Medium' }}>
                        {testimonial.location}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Navigation Arrows - Bottom Right */}
          <div className="flex justify-end gap-6 mt-16 mr-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevTestimonial}
              className="w-14 h-14 bg-[#D3AC4A] rounded-full flex items-center justify-center text-[#37405E] hover:bg-[#C19B42] transition-colors shadow-lg"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextTestimonial}
              className="w-14 h-14 bg-[#D3AC4A] rounded-full flex items-center justify-center text-[#37405E] hover:bg-[#C19B42] transition-colors shadow-lg"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <UniversalFooter />
    </main>
  );
}