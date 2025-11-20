'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { UniversalHeader } from '@/components/shared/header/UniversalHeader';
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
      {/* First Fold - Exact Reference Design */}
      <motion.section 
        className="relative overflow-hidden"
        style={{ height: '75vh' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Step Cut Design Layer Only */}
        <div className="absolute inset-2 sm:inset-4 rounded-lg overflow-hidden">
          <Image
            src="/images/layer 1.jpg"
            alt="Step Cut Design Layer"
            fill
            className="object-cover object-center"
            style={{ objectPosition: 'center top' }}
            priority
          />
        </div>

        {/* Universal Header */}
        <UniversalHeader transparent={true} showScheduleButton={true} />

        {/* Testimonials Title - Centered over building image */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white drop-shadow-2xl px-4"
              style={{ fontFamily: 'DM Serif Display' }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Testimonials
            </motion.h1>
          </div>
        </div>

        {/* Cream Breadcrumb Bar - With spacing */}
        <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 z-20">
          <motion.div 
            className="bg-[#F5F2E8] py-3 px-4 sm:py-6 sm:px-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="container mx-auto">
              <div className="flex items-center space-x-1 sm:space-x-2 text-sm sm:text-[16px] text-[#37405E] font-medium" style={{ fontFamily: 'Futura-Medium' }}>
                <Link href="/" className="hover:text-[#D3AC4A] transition-colors cursor-pointer">
                  Home
                </Link>
                <img
                  src="/images/about us page - ff/icons/first fold icon.svg"
                  alt="Arrow"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
                <span>Testimonials</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content Section - Second Fold */}
      <section className="py-20 bg-white">
        {/* <div className="mx-auto px-8 lg:px-16"> */}
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="space-y-6 max-w-4xl mx-auto px-4">
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
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-center" style={{ fontFamily: 'DM Serif Display' }}>
                <span className="text-[#37405E]">Real </span>
                <span 
                  className="bg-gradient-to-r from-[#D3AC4A] via-[#B8954A] to-[#8B6914] bg-clip-text text-transparent"
                >
                  stories
                </span>
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-[#37405E] font-medium leading-relaxed max-w-3xl mx-auto text-center" style={{ fontFamily: 'Futura-Medium' }}>
                At Fair Field Shelters, every project is more than land or buildings, it's a journey of trust, happiness and fulfilled dreams. 
                Here's what our proud customers have to say about their experience with us.
              </p>
            </div>
          </motion.div>

          {/* Testimonials Section - Responsive Layout */}
          <div className="flex flex-col lg:flex-row w-full">
            {/* Left - Main Testimonial Full View */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative w-full lg:w-1/2"
            >
              {/* Background Image */}
              <motion.div 
                key={`image-${currentTestimonial}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[716px] overflow-hidden"
              >
                <Image
                  src={testimonials[currentTestimonial].image}
                  alt="Customer Home"
                  fill
                  className="object-cover transition-all duration-700"
                />
                {/* Navy Blue Overlay */}
                <div className="absolute inset-0 bg-[#37405E]/60" />
              </motion.div>

              {/* Main Testimonial Card - Full Content */}
              <motion.div
                key={`card-${currentTestimonial}`}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 sm:left-auto sm:right-4 sm:translate-x-0 lg:right-0 bg-white py-4 px-4 sm:py-8 sm:px-12 lg:py-12 lg:px-20 shadow-xl max-sm:rounded-sm w-[calc(100%-1rem)] max-w-[300px] sm:max-w-none sm:w-[350px] lg:w-[550px] min-h-[200px] sm:min-h-[280px] lg:min-h-[320px]"
                style={{ 
                  zIndex: 10
                }}
              >
                {/* Large Quote Icon */}
                <motion.div 
                  className="mb-4 lg:mb-5"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <img
                    src="/images/testimonial page - ff/icons/second fold/quote-icon.png"
                    alt="Quote"
                    className="w-8 h-6 sm:w-10 sm:h-8 lg:w-12 lg:h-10"
                  />
                </motion.div>
                
                <motion.blockquote 
                  className="text-sm sm:text-base lg:text-lg text-[#37405E] font-medium leading-relaxed mb-4 sm:mb-6" 
                  style={{ fontFamily: 'Futura-Medium' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  "{testimonials[currentTestimonial].quote}"
                </motion.blockquote>
                
                <motion.div 
                  className="space-y-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <h4 className="text-base sm:text-lg font-bold text-[#37405E]" style={{ fontFamily: 'Futura-Heavy' }}>
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#37405E] font-medium" style={{ fontFamily: 'Futura-Medium' }}>
                    {testimonials[currentTestimonial].location}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right - Thumbnail Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative bg-[#F5F2E8] p-4 sm:p-6 lg:p-0 w-full lg:w-1/2 min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:h-[716px]"
            >
              {/* Yellow Background Accent */}
              <div className="absolute top-0 right-0 bg-[#D3AC4A]/10 w-full h-full" />
              
              {/* Two Thumbnail Cards with Navigation - Responsive */}
              <div className="relative z-10 px-4 sm:px-0 h-full flex flex-col justify-center">
                {/* Thumbnail Cards */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-0 justify-start items-start">
                  {testimonials.filter((_, index) => index !== currentTestimonial).map((testimonial, index) => (
                    <div key={testimonial.id} className="relative">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-white p-4 sm:p-6 transition-all duration-300 cursor-pointer rounded-sm shadow-md hover:shadow-lg border border-gray-100 w-full sm:w-[240px] lg:w-[280px] h-[200px] sm:h-[280px] lg:h-[320px] flex flex-col justify-center"
                        onClick={() => setCurrentTestimonial(testimonials.findIndex(t => t.id === testimonial.id))}
                      >
                        {/* Content without quote icon */}
                        <p className="text-[#37405E] font-medium leading-relaxed mb-4 text-sm" style={{ fontFamily: 'Futura-Medium' }}>
                          "{testimonial.quote.length > 140 ? testimonial.quote.substring(0, 140) + '...' : testimonial.quote}"
                        </p>
                        <div className="space-y-1">
                          <h4 className="font-bold text-[#37405E] text-base" style={{ fontFamily: 'Futura-Heavy' }}>
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-[#37405E] font-medium" style={{ fontFamily: 'Futura-Medium' }}>
                            {testimonial.location}
                          </p>
                        </div>
                      </motion.div>
                      
                      {/* Navigation Arrows - Below second card only */}
                      {index === 1 && (
                        <div className="flex justify-end gap-4 mt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevTestimonial}
              className="flex items-center justify-center transition-all"
            >
              <img
                src="/images/testimonial page - ff/icons/second fold/left Vector.svg"
                alt="Previous"
                className="w-10 h-10 lg:w-12 lg:h-12"
              />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextTestimonial}
              className="flex items-center justify-center transition-all"
            >
              <img
                src="/images/testimonial page - ff/icons/second fold/right Vector.svg"
                alt="Next"
                className="w-10 h-10 lg:w-12 lg:h-12"
              />
            </motion.button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        {/* </div> */}
      </section>

      {/* Footer */}
      <UniversalFooter />
    </main>
  );
}