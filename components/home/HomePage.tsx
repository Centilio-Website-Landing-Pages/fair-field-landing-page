'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { UniversalHeader } from '../shared/header/UniversalHeader';
import UniversalFooter from '../shared/footer/UniversalFooter';
import { Timeline } from '@/components/ui/timeline';

// Fair Field Timeline Component
function FairFieldTimeline() {
  const timelineData = [
    {
      title: "Legal",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative w-full max-w-lg sm:max-w-lg md:max-w-md lg:max-w-lg"
        >
          {/* Card Background */}
          <img
            src="/images/home page - ff/icons/Third Fold - home page-ffs/RecVector 1.svg"
            alt=""
            className="w-full h-auto scale-y-110 sm:scale-y-100 md:scale-y-100"
          />
          
          {/* Icon positioned in rounded cutout (top-left) */}
          <div className="absolute top-0 left-0 sm:top-0 lg:left-0 lg:top-0">
            <img
              src="/images/home page - ff/icons/Third Fold - home page-ffs/Vector 1.svg"
              alt="Legal Clarity"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-18 md:h-18"
            />
          </div>
          
          {/* Text content positioned in center of main rectangle */}
          <div className="absolute top-[10%] left-[25%] right-0 bottom-[10%] flex items-center justify-center px-1 py-2 sm:px-3 sm:py-3 md:px-6 md:py-6 lg:justify-start lg:pl-20">
            <div className="text-white text-left w-full max-w-[180px] sm:max-w-[220px] md:max-w-[200px] lg:max-w-xs">
              <h3 className="sm:block text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2 md:mb-2 lg:mb-3" style={{ fontFamily: 'DM Serif Display' }}>
                Legal Clarity
              </h3>
              <p className="text-white/90 text-xs sm:text-sm md:text-sm lg:text-base leading-tight md:leading-relaxed" style={{ fontFamily: 'Futura-Medium' }}>
                All our projects are DTCP-approved and RERA-registered, with clean documents and verified ownership giving you complete peace of mind.
              </p>
            </div>
          </div>
        </motion.div>
      ),
    },
    {
      title: "Returns",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative w-full max-w-lg sm:max-w-lg md:max-w-md lg:max-w-lg"
        >
          {/* Card Background */}
          <img
            src="/images/home page - ff/icons/Third Fold - home page-ffs/RecVector 2.svg"
            alt=""
            className="w-full h-auto scale-y-110 sm:scale-y-100 md:scale-y-100"
          />
          
          {/* Icon positioned in rounded cutout (top-right) */}
          <div className="absolute top-0 right-0 sm:top-0 sm:right-0 lg:right-0 lg:top-0">
            <img
              src="/images/home page - ff/icons/Third Fold - home page-ffs/Vector 2.svg"
              alt="Strong Returns"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-18 md:h-18"
            />
          </div>
          
          {/* Text content positioned in center of main rectangle */}
          <div className="absolute top-[10%] left-[8%] right-[15%] bottom-[10%] flex items-center justify-start px-1 py-2 sm:px-3 sm:py-3 md:px-6 md:py-6">
            <div className="text-[#37405E] text-left w-full max-w-[160px] sm:max-w-[200px] md:max-w-[200px] lg:max-w-xs">
              <h3 className="sm:block text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2 md:mb-2 lg:mb-3" style={{ fontFamily: 'DM Serif Display' }}>
                Strong Returns
              </h3>
              <p className="text-[#37405E]/90 text-xs sm:text-sm md:text-sm lg:text-base leading-tight md:leading-relaxed" style={{ fontFamily: 'Futura-Medium' }}>
                Our strategic locations and quality construction ensure your investment delivers consistent appreciation and long-term value growth.
              </p>
            </div>
          </div>
        </motion.div>
      ),
    },
    {
      title: "Quality",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative w-full max-w-lg sm:max-w-lg md:max-w-md lg:max-w-lg"
        >
          {/* Card Background */}
          <img
            src="/images/home page - ff/icons/Third Fold - home page-ffs/ReVector 3.svg"
            alt=""
            className="w-full h-auto scale-y-110 sm:scale-y-100 md:scale-y-100"
          />
          
          {/* Icon positioned in rounded cutout (top-left) */}
          <div className="absolute top-0 left-0 sm:top-0 sm:left-[5%] lg:left-0 lg:top-0">
            <img
              src="/images/home page - ff/icons/Third Fold - home page-ffs/Vector 3.svg"
              alt="Premium Quality"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-18 md:h-18"
            />
          </div>
          
          {/* Text content positioned in center of main rectangle */}
          <div className="absolute top-[10%] left-[25%] right-[6%] bottom-[10%] flex items-center justify-center px-1 py-2 sm:px-3 sm:py-3 md:px-6 md:py-6 lg:justify-start lg:pl-20">
            <div className="text-white text-left w-full max-w-[180px] sm:max-w-[220px] md:max-w-[200px] lg:max-w-xs">
              <h3 className="hidden sm:block text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2 md:mb-2 lg:mb-3" style={{ fontFamily: 'DM Serif Display' }}>
                Premium Quality
              </h3>
              <p className="text-white/90 text-xs sm:text-sm md:text-sm lg:text-base leading-tight md:leading-relaxed" style={{ fontFamily: 'Futura-Medium' }}>
                We design modern layouts, wide roads, parks, and secure gated communities to create a lifestyle you can be proud of.
              </p>
            </div>
          </div>
        </motion.div>
      ),
    },
    {
      title: "Service",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full max-w-lg sm:max-w-lg md:max-w-md lg:max-w-lg"
        >
          {/* Card Background */}
          <img
            src="/images/home page - ff/icons/Third Fold - home page-ffs/ReVector 4.svg"
            alt=""
            className="w-full h-auto scale-y-110 sm:scale-y-100 md:scale-y-100"
          />
          
          {/* Icon positioned in rounded cutout (top-right) */}
          <div className="absolute top-0 right-0 sm:top-0 sm:right-[5%] lg:right-0 lg:top-0">
            <img
              src="/images/home page - ff/icons/Third Fold - home page-ffs/Vector 4.svg"
              alt="Transparent Service"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-18 md:h-18"
            />
          </div>
          
          {/* Text content positioned in center of main rectangle */}
          <div className="absolute top-[10%] left-[8%] right-[15%] bottom-[10%] flex items-center justify-start px-1 py-2 sm:px-3 sm:py-3 md:px-6 md:py-6">
            <div className="text-[#37405E] text-left w-full max-w-[160px] sm:max-w-[200px] md:max-w-[200px] lg:max-w-xs">
              <h3 className="hidden sm:block text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2 md:mb-2 lg:mb-3" style={{ fontFamily: 'DM Serif Display' }}>
                Transparent Service
              </h3>
              <p className="text-[#37405E]/90 text-xs sm:text-sm md:text-sm lg:text-base leading-tight md:leading-relaxed" style={{ fontFamily: 'Futura-Medium' }}>
                From site visit to handover, we guide you step by step with honest communication and professional support.
              </p>
            </div>
          </div>
        </motion.div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={timelineData} />
    </div>
  );
}

// Testimonial Carousel Component
function TestimonialCarousel() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "I live overseas. The Fair Field team kept me updated with photos and reports. Everything was smooth and transparent.",
      name: "Ms. Lavanya",
      location: "Singapore"
    },
    {
      quote: "My plot value has grown more than 75 % in three years. Fair Field Shelters truly keeps its promises.",
      name: "Mr. Mahesh",
      location: "USA"
    },
    {
      quote: "We bought our plot at Kurinjee Nagar Phase I. All papers were clear and registration finished on time. Now we live in our own home with peace of mind.",
      name: "Mr. Anand",
      location: "Coimbatore"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="bg-[#37405E] rounded-md p-8 lg:p-12 lg:py-16 text-white relative text-center"
    >
      <div className="z-10 lg:h-45 flex flex-col justify-between">
        <blockquote className="text-base md:text-lg lg:text-xl leading-relaxed font-light flex-grow flex items-center">
          &ldquo;{current.quote}&rdquo;
        </blockquote>
        
        <div className="mt-6">
          <div className=" text-lg md:text-lg mb-1">{current.name}</div>
          <div className="text-[#D3AC4A] text-sm md:text-base">{current.location}</div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 flex gap-4 justify-end">
        <button 
          onClick={prevTestimonial}
          className="w-10 h-10 lg:w-12 lg:h-12 bg-[#D3AC4A] rounded-full flex items-center justify-center hover:bg-[#D3AC4A]/80 transition-colors"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={nextTestimonial}
          className="w-10 h-10 lg:w-12 lg:h-12 bg-[#D3AC4A] rounded-full flex items-center justify-center hover:bg-[#D3AC4A]/80 transition-colors"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}

export function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section - First Fold - Group 1.1.1 Design */}
      <section className="relative p-4 min-h-screen lg:min-h-0 lg:h-auto">
        {/* Main villa background image */}
        <div className="relative z-0 min-h-screen lg:min-h-0 lg:h-auto">
          <img
            src="/images/home page - ff/images/first_fold_image.png"
            alt="Fair Field Premium Villa"
            className="w-full h-full min-h-screen lg:min-h-0 lg:h-auto object-cover lg:object-contain"
          />
        </div>

        {/* Universal Header */}
        <UniversalHeader transparent={true} showScheduleButton={true} />
        
        {/* Main Content Container */}
        <div className="absolute inset-0 z-20 flex items-start lg:items-center justify-start lg:justify-start pt-32 sm:pt-36 lg:pt-0">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
            {/* Left Content - Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="max-w-2xl text-shadow-md px-4 sm:px-0"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6 sm:mb-8 lg:mb-12 text-white" style={{ fontFamily: 'DM Serif Display' }}>
                Premium <span className="text-[#D3AC4A]">homes and investments</span> you can <span className="text-[#D3AC4A]">trust</span>
              </h1>
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#D3AC4A] text-[#37405E] px-6 sm:px-8 lg:px-10 py-2 sm:py-3 rounded-md font-bold text-sm sm:text-base flex items-center gap-2 sm:gap-3 hover:bg-[#C19A3A] transition-all shadow-2xl"
                style={{ fontFamily: 'Futura-Heavy' }}
              >
                Book your visit today
                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-[22px] lg:h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </motion.button>
            </motion.div>

            {/* Mobile Cards - Inside hero section, below content */}
            <div className="lg:hidden mt-8 sm:mt-10">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                {/* First Card - 100+ */}
                <motion.div
                  initial={{ opacity: 0, x: -50, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                  className="relative px-4 py-4 shadow-2xl flex flex-col items-center bg-white/10 backdrop-blur-sm border-2 border-white/30 w-64 sm:w-48"
                  style={{ 
                    borderRadius: '24px 24px 8px 24px'
                  }}
                >
                  <div className='text-center'>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1" style={{ 
                      fontFamily: 'DM Serif Display', 
                      textShadow: '0 2px 8px rgba(0,0,0,0.6)',
                      fontWeight: '700'
                    }}>100+</h3>
                    <p className="text-white text-xs sm:text-sm font-bold leading-relaxed" style={{ 
                      fontFamily: 'Futura-Heavy', 
                      textShadow: '0 1px 4px rgba(0,0,0,0.6)',
                      fontWeight: '700'
                    }}>
                      Successful Projects
                    </p>
                  </div>
                  {/* Golden circle accent */}
                  <div className="absolute bottom-2 left-2 w-3 h-3 sm:w-4 sm:h-4 bg-[#D3AC4A] rounded-full shadow-2xl"></div>
                </motion.div>

                {/* Second Card - DTCP */}
                <motion.div
                  initial={{ opacity: 0, x: 50, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.8 }}
                  className="relative px-4 py-4 shadow-2xl flex flex-col items-center bg-white/10 backdrop-blur-sm border-2 border-white/30 w-64 sm:w-48"
                  style={{ 
                    borderRadius: '8px 24px 8px 8px'
                  }}
                >
                  <div className='text-center'>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1" style={{ 
                      fontFamily: 'DM Serif Display', 
                      textShadow: '0 2px 8px rgba(0,0,0,0.6)',
                      fontWeight: '700'
                    }}>DTCP Approved</h3>
                    <p className="text-white text-xs sm:text-sm font-bold leading-relaxed" style={{ 
                      fontFamily: 'Futura-Heavy', 
                      textShadow: '0 1px 4px rgba(0,0,0,0.6)',
                      fontWeight: '700'
                    }}>
                      Legally Verified Projects
                    </p>
                  </div>
                  {/* Golden circle accent */}
                  <div className="absolute bottom-2 right-2 w-3 h-3 sm:w-4 sm:h-4 bg-[#D3AC4A] rounded-full shadow-2xl"></div>
                </motion.div>
              </div>
            </div>

            {/* Desktop Cards - Original positioning */}
            <div className='hidden lg:block absolute right-20 top-10'>
              <div className='w-90'>
                <motion.div
                  initial={{ opacity: 0, x: 50, y: -20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="relative px-10 py-6 mb-6 shadow-2xl flex flex-col items-center bg-white/10 backdrop-blur-sm border-3 border-white/30 shadow-lg"
                  style={{ 
                    borderRadius: '24px 24px 8px 24px'
                  }}
                >
                  <div className='text-center'>
                    <h3 className="text-4xl font-bold text-white mb-2" style={{ 
                      fontFamily: 'DM Serif Display', 
                      textShadow: '0 2px 8px rgba(0,0,0,0.6)',
                      fontWeight: '700'
                    }}>100+</h3>
                    <p className="text-white text-base font-bold leading-relaxed" style={{ 
                      fontFamily: 'Futura-Heavy', 
                      textShadow: '0 1px 4px rgba(0,0,0,0.6)',
                      fontWeight: '700'
                    }}>
                      Successful Projects Delivered
                    </p>
                  </div>
                  {/* Golden circle accent at bottom-left rounded corner */}
                  <div className="absolute bottom-3 left-3 w-6 h-6 bg-[#D3AC4A] rounded-full shadow-2xl"></div>
                </motion.div>
              </div>
            </div>

            <div className='hidden lg:block absolute -bottom-30 left-1/2 transform -translate-x-1/2'>
              <div className='w-90'>
                <motion.div
                  initial={{ opacity: 0, x: 50, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="relative px-10 py-3 mb-6 shadow-2xl flex flex-col items-center bg-white/10 backdrop-blur-sm border-3 border-white/30 shadow-lg"
                  style={{ 
                    borderRadius: '8px 24px 8px 8px'
                  }}
                >
                  <div className='text-center'>
                    <h3 className="text-2xl font-bold text-white mb-2" style={{ 
                      fontFamily: 'DM Serif Display', 
                      textShadow: '0 2px 8px rgba(0,0,0,0.6)',
                      fontWeight: '700'
                    }}>DTCP Approved</h3>
                    <p className="text-white text-base font-bold leading-relaxed" style={{ 
                      fontFamily: 'Futura-Heavy', 
                      textShadow: '0 1px 4px rgba(0,0,0,0.6)',
                      fontWeight: '700'
                    }}>
                      All our projects are legally verified and RERA-registered for your peace of mind.
                    </p>
                  </div>
                  {/* Golden circle accent at bottom-right rounded corner */}
                  <div className="absolute bottom-3 right-3 w-6 h-6 bg-[#D3AC4A] rounded-full shadow-2xl"></div>
                </motion.div>         
              </div>
            </div>   
          </div>
        </div>
      </section>

      {/* Company Introduction - Second Fold */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 bg-white py-12 lg:py-0 min-h-96 lg:h-[674px]">
        <div className="mx-auto flex items-center min-h-full lg:h-full">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full px-0 max-sm:px-6 gap-8 sm:gap-12 lg:gap-24">
            {/* Left Content - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1 w-full lg:max-w-md xl:max-w-lg text-center lg:text-left"
            >
              <div className="space-y-6 lg:space-y-8">
                <p className="text-black text-sm sm:text-base leading-relaxed lg:leading-loose" style={{ 
                  fontFamily:" Alata, sans-serif",
                  fontWeight: 500
                }}>
                  Welcome to Fair Field Shelters Pvt. Ltd., Coimbatore&rsquo;s trusted name for premium plots, villas, and commercial projects. We create properties that bring together clarity, comfort, and class. So every home or investment you make with us truly becomes a promise kept.
                </p>
                <p className="text-black text-sm sm:text-base leading-relaxed lg:leading-loose" style={{ 
                  fontFamily:" Alata, sans-serif",
                  fontWeight: 500
                }}>
                  With over 25 years of experience, we focus on DTCP-approved layouts, luxury villas, and clear documentation. Our goal is simple, to give every customer a peaceful buying experience and a property that grows in value.
                </p>
              </div>
            </motion.div>

            {/* Right Images Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-2xl flex-shrink-0"
            >
              <div className="relative aspect-[4/3] lg:aspect-[732/524]">
                <img
                  src="/images/home page - ff/images/second fold images/second_fold_image_full_size.png"
                  alt="Fair Field Entrance Gate"
                  className="w-full h-full object-cover rounded-lg "
                />
              </div>            
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Four Promises - Third Fold */}
      <section className="py-10 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 sm:gap-12 md:gap-16 items-start">
            {/* Left Content - Title and Paint Brush Effect */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-16 md:mb-24 lg:mb-32 leading-tight text-center lg:text-left"
                style={{ fontFamily: 'DM Serif Display' }}
              >
                <span className="text-[#37405E]">Our </span>
                <span className="bg-gradient-to-r from-[#D3AC4A] to-[#37405E] bg-clip-text text-transparent">Four Promises</span>
              </motion.h2>

              {/* Paint Brush Image Container with Artistic Effect */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto lg:mx-0 hidden lg:block"
              >
                <div className="relative">
                  {/* Paint brush stroke as prominent background */}
                  <div className="absolute inset-0 -m-8 z-0">
                    <img
                      src="/images/home page - ff/images/third fold images/third Clip path group.png"
                      alt="Paint brush stroke"
                      className="w-full h-full object-contain opacity-90"
                      style={{ filter: 'saturate(1.2) contrast(1.1)' }}
                    />
                  </div>
                  
                  {/* Handshake image with artistic clipping - no borders */}
                  <div className="relative h-80 w-full artistic-image-mask z-10">
                    <img
                      src="/images/home page - ff/images/third fold images/third fold full size.jpg"
                      alt="Our Promises - Partnership"
                      className="w-full h-full object-cover border-0"
                      style={{ border: 'none', outline: 'none' }}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Timeline with Cards */}
            <FairFieldTimeline />
          </div>
        </div>
      </section>

      {/* Ongoing Projects - Fourth Fold */}
      <section className="py-10 lg:py-24 bg-white">
          <div className='container mx-auto px-4 lg:px-6'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-6 lg:mb-12 px-4"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl " style={{ fontFamily: 'DM Serif Display' }}>
                <span className="text-[#37405E]">Ongoing </span><span className="bg-gradient-to-r from-[#D3AC4A] to-[#37405E] bg-clip-text text-transparent">Projects</span>
              </h2>
            </motion.div>

            {/* Anicham & Magilam Project */}
            <div className="w-full lg:px-8 mb-4 md:mb-10 lg:mb-20">
              <div className="grid lg:grid-cols-[30%_35%_35%] gap-6 lg:gap-8 items-start w-full">
                {/* Left Content - Project Title */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div className="text-left max-md:text-center">
                    <h3 className="text-xl lg:text-4xl mb-2 font-medium" style={{ fontFamily: 'DM Serif Display' }}>
                      <span className="text-[#37405E]">Anicham & </span>
                      <span className="text-[#37405E]">Magilam</span>
                    </h3>
                    <h4 className="text-lg lg:text-3xl leading-tight" style={{ fontFamily: 'DM Serif Display' }}>
                      <span className="text-[#D3AC4A]">Ramanathapuram,</span><br />
                      <span className="text-[#D3AC4A]">Coimbatore</span>
                    </h4>
                  </div>
                </motion.div>

                {/* Center Content - Project Image */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex justify-center"
                >
                  <div className="relative w-full max-w-lg h-80 lg:h-96 rounded-[30px] overflow-hidden shadow-xl">
                    <img
                      src="/images/home page - ff/images/fourth fold/part 1/anicham image.png"
                      alt="Anicham & Magilam Project"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Right Content - Project Details */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div className="space-y-4 lg:space-y-6 lg:max-w-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <img
                          src="/images/home page - ff/icons/fourth fold/anicham/Vector 1.svg"
                          alt="Type Icon"
                          className="w-6 h-6"
                        />
                      </div>
                      <div>
                        <span className="font-medium text-[#37405E] text-lg" style={{ fontFamily: 'Futura-Medium' }}>Type: Premium villas & DTCP-approved Plots</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <img
                          src="/images/home page - ff/icons/fourth fold/anicham/Vector 2.svg"
                          alt="Location Icon"
                          className="w-6 h-6"
                        />
                      </div>
                      <div>
                        <span className="font-medium text-[#37405E] text-lg" style={{ fontFamily: 'Futura-Medium' }}>Location: Ramanathapuram to Nanjundapuram Road (Near Parsn Apartments)</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <img
                          src="/images/home page - ff/icons/fourth fold/anicham/vector 3.svg"
                          alt="Price Icon"
                          className="w-6 h-6"
                        />
                      </div>
                      <div>
                        <span className="font-medium text-[#37405E] text-lg" style={{ fontFamily: 'Futura-Medium' }}>Price: Land from ₹19.90 Lakhs /cent | Villas from ₹1.79 Cr onwards</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <img
                          src="/images/home page - ff/icons/fourth fold/anicham/Vector 4.svg"
                          alt="Status Icon"
                          className="w-6 h-6"
                        />
                      </div>
                      <div>
                        <span className="font-medium text-[#37405E] text-lg" style={{ fontFamily: 'Futura-Medium' }}>Status: Ongoing</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <img
                          src="/images/home page - ff/icons/fourth fold/anicham/Vector 5.svg"
                          alt="Approvals Icon"
                          className="w-6 h-6"
                        />
                      </div>
                      <div>
                        <span className="font-medium text-[#37405E] text-lg" style={{ fontFamily: 'Futura-Medium' }}>Approvals: DTCP & RERA (No. 346/2021 & 351/2021)</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          
          </div>

          {/* Features Bar for Anicham */}
          <div className="w-full mb-4 md:mb-10 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-[#37405E] p-6 lg:p-8 w-full"
            >
              <div className="max-w-7xl mx-auto flex max-md:flex-col lg:justify-between gap-6 lg:gap-8">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <img
                      src="/images/home page - ff/icons/fourth fold/tick vector.svg"
                      alt="Tick"
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="font-medium" style={{ fontFamily: 'Futura-Medium' }}>Gated community</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <img
                      src="/images/home page - ff/icons/fourth fold/tick vector.svg"
                      alt="Tick"
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="font-medium" style={{ fontFamily: 'Futura-Medium' }}>Wide roads</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <img
                      src="/images/home page - ff/icons/fourth fold/tick vector.svg"
                      alt="Tick"
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="font-medium" style={{ fontFamily: 'Futura-Medium' }}>EB</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <img
                      src="/images/home page - ff/icons/fourth fold/tick vector.svg"
                      alt="Tick"
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="font-medium" style={{ fontFamily: 'Futura-Medium' }}>Water</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <img
                      src="/images/home page - ff/icons/fourth fold/tick vector.svg"
                      alt="Tick"
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="font-medium" style={{ fontFamily: 'Futura-Medium' }}>CCTV</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <img
                      src="/images/home page - ff/icons/fourth fold/tick vector.svg"
                      alt="Tick"
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="font-medium" style={{ fontFamily: 'Futura-Medium' }}>20-25% value growth potential</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Vaagai Project */}
          <div className='container mx-auto px-4 lg:px-6 mb-4 md:mb-10 lg:mb-20'>
            <div className="grid lg:grid-cols-[30%_35%_35%] gap-6 lg:gap-8 items-start w-full">
              {/* Left Content - Project Title */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="text-left max-md:text-center">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-2 font-medium" style={{ fontFamily: 'DM Serif Display' }}>
                    <span className="text-[#D3AC4A]">Vaagai</span><span className="text-[#37405E]"> -</span>
                  </h3>
                  <h4 className="text-lg lg:text-3xl leading-tight" style={{ fontFamily: 'DM Serif Display' }}>
                    <span className="text-[#D3AC4A]">Telungupalayam,</span><br />
                    <span className="text-[#D3AC4A]">Coimbatore</span>
                  </h4>
                </div>
              </motion.div>

              {/* Center Content - Project Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative flex justify-center"
              >
                <div className="relative w-full max-w-lg h-80 lg:h-96 rounded-[30px] overflow-hidden shadow-xl">
                  <img
                    src="/images/home page - ff/images/fourth fold/part 2/vaagai image 1.png"
                    alt="Vaagai Project"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Right Content - Project Details */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="space-y-4 lg:space-y-6 lg:max-w-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <img
                        src="/images/home page - ff/icons/fourth fold/vaagai/Vector 1.svg"
                        alt="Document Icon"
                        className="w-6 h-6"
                      />
                    </div>
                    <div>
                      <span className="font-medium text-[#37405E] text-lg" style={{ fontFamily: 'Futura-Medium' }}>Type: DTCP approved premium layout</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <img
                        src="/images/home page - ff/icons/fourth fold/vaagai/Vector 2.svg"
                        alt="Location Icon"
                        className="w-6 h-6"
                      />
                    </div>
                    <div>
                      <span className="font-medium text-[#37405E] text-lg" style={{ fontFamily: 'Futura-Medium' }}>Location: Subramaniya Udaiyar Street, Telungupalayam</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <img
                        src="/images/home page - ff/icons/fourth fold/vaagai/vector 3.svg"
                        alt="Price Icon"
                        className="w-6 h-6"
                      />
                    </div>
                    <div>
                      <span className="font-medium text-[#37405E] text-lg" style={{ fontFamily: 'Futura-Medium' }}>₹21 Lakhs /cent</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <img
                        src="/images/home page - ff/icons/fourth fold/vaagai/Vector 4.svg"
                        alt="Completion Icon"
                        className="w-6 h-6"
                      />
                    </div>
                    <div>
                      <span className="font-medium text-[#37405E] text-lg" style={{ fontFamily: 'Futura-Medium' }}>Completion: December 2025</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>       
          </div>

          {/* Features Bar for Vaagai */}
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-[#37405E] p-6 lg:p-8 w-full"
            >
              <div className="max-w-7xl mx-auto flex max-md:flex-col lg:justify-between gap-6 lg:gap-8">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <img
                      src="/images/home page - ff/icons/fourth fold/tick vector.svg"
                      alt="Tick"
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="font-medium" style={{ fontFamily: 'Futura-Medium' }}>Developed layout</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <img
                      src="/images/home page - ff/icons/fourth fold/tick vector.svg"
                      alt="Tick"
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="font-medium" style={{ fontFamily: 'Futura-Medium' }}>Drainage</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <img
                      src="/images/home page - ff/icons/fourth fold/tick vector.svg"
                      alt="Tick"
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="font-medium" style={{ fontFamily: 'Futura-Medium' }}>Streetlights</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <img
                      src="/images/home page - ff/icons/fourth fold/tick vector.svg"
                      alt="Tick"
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="font-medium" style={{ fontFamily: 'Futura-Medium' }}>Security</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <img
                      src="/images/home page - ff/icons/fourth fold/tick vector.svg"
                      alt="Tick"
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="font-medium" style={{ fontFamily: 'Futura-Medium' }}>Easy access to Palakkad Bypass & Airport</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <img
                      src="/images/home page - ff/icons/fourth fold/tick vector.svg"
                      alt="Tick"
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="font-medium" style={{ fontFamily: 'Futura-Medium' }}>25-40% appreciation</span>
                </div>
              </div>
            </motion.div>
          </div>
      </section>

      {/* Completed Projects - Fifth Fold */}
      <section className="py-10 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 lg:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-5xl mb-6" style={{ fontFamily: 'DM Serif Display' }}>
              <span className="text-[#37405E]">Completed </span><span className="bg-gradient-to-r from-[#D3AC4A] to-[#37405E] bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto font-sans">
              Explore our successfully delivered projects that showcase our commitment to quality and excellence in residential development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Project 1 - Kotagiri Serene Villas */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl overflow-hidden border border-[#00684F20] shadow-lg hover:shadow-xl transition-all duration-300 p-2"
            >
              <div className="relative h-48 sm:h-60 lg:h-70 overflow-hidden rounded-md">
                <img
                  src="/images/home page - ff/images/fifth fold/image 1.png"
                  alt="Kotagiri Serene Villas"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Hover Overlay - Hidden by default, shown on hover */}
                <div className="absolute inset-x-2 sm:inset-x-6 bottom-3 sm:bottom-6 top-1/2 bg-[#37405E]/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                  <div className="text-center text-white p-2 sm:p-4">
                    <div className="flex items-center justify-center space-x-2 sm:space-x-4">
                      <div className="text-center">
                        <div className="text-xl sm:text-3xl font-bold" style={{ fontFamily: 'DM Serif Display' }}>2018</div>
                      </div>
                      <div className="w-px h-8 sm:h-12 bg-white/30"></div>
                      <div className="text-center">
                        <div className="text-sm sm:text-lg font-bold" style={{ fontFamily: 'DM Serif Display' }}>9 Hill-View</div>
                        <div className="text-sm sm:text-lg font-bold" style={{ fontFamily: 'DM Serif Display' }}>Villas</div>
                      </div>
                      <div className="w-px h-8 sm:h-12 bg-white/30"></div>
                      <div className="text-center">
                        <div className="text-sm sm:text-lg font-semibold text-[#D3AC4A]" style={{ fontFamily: 'Futura-Medium' }}>Sold</div>
                        <div className="text-sm sm:text-lg font-semibold text-[#D3AC4A]" style={{ fontFamily: 'Futura-Medium' }}>Out</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-6 text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-[#37405E] mb-2 sm:mb-3" style={{ fontFamily: 'DM Serif Display' }}>Kotagiri Serene Villas</h3>
                <p className="text-sm sm:text-base text-gray-600" style={{ fontFamily: 'Futura-Medium' }}>Nilgiris</p>
              </div>
            </motion.div>

            {/* Project 2 - Kurinjee Nagar Phase 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl border border-[#00684F20] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 p-2"
            >
              <div className="relative h-48 sm:h-60 lg:h-70 overflow-hidden rounded-md">
                <img
                  src="/images/home page - ff/images/fifth fold/image 2.png"
                  alt="Kurinjee Nagar Phase 1"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Hover Overlay - Hidden by default, shown on hover */}
                <div className="absolute inset-x-2 sm:inset-x-6 bottom-3 sm:bottom-6 top-1/2 bg-[#37405E]/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                  <div className="text-center text-white p-2 sm:p-4">
                    <div className="flex items-center justify-center space-x-2 sm:space-x-4">
                      <div className="text-center">
                        <div className="text-xl sm:text-3xl font-bold" style={{ fontFamily: 'DM Serif Display' }}>2023</div>
                      </div>
                      <div className="w-px h-8 sm:h-12 bg-white/30"></div>
                      <div className="text-center">
                        <div className="text-sm sm:text-lg font-bold" style={{ fontFamily: 'DM Serif Display' }}>106 Plots</div>
                      </div>
                      <div className="w-px h-8 sm:h-12 bg-white/30"></div>
                      <div className="text-center">
                        <div className="text-sm sm:text-lg font-semibold text-[#D3AC4A]" style={{ fontFamily: 'Futura-Medium' }}>Sold</div>
                        <div className="text-sm sm:text-lg font-semibold text-[#D3AC4A]" style={{ fontFamily: 'Futura-Medium' }}>Out</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-6 text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-[#37405E] mb-2 sm:mb-3" style={{ fontFamily: 'DM Serif Display' }}>Kurinjee Nagar Phase 1</h3>
                <p className="text-sm sm:text-base text-gray-600" style={{ fontFamily: 'Futura-Medium' }}>Vedapatty</p>
              </div>
            </motion.div>

            {/* Project 3 - Kurinjee Nagar Phase 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl border border-[#00684F20] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 p-2"
            >
              <div className="relative h-48 sm:h-60 lg:h-70 overflow-hidden rounded-md">
                <img
                  src="/images/home page - ff/images/fifth fold/image 3.png"
                  alt="Kurinjee Nagar Phase 2"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Hover Overlay - Hidden by default, shown on hover */}
                <div className="absolute inset-x-2 sm:inset-x-6 bottom-3 sm:bottom-6 top-1/2 bg-[#37405E]/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                  <div className="text-center text-white p-2 sm:p-4">
                    <div className="flex items-center justify-center space-x-2 sm:space-x-4">
                      <div className="text-center">
                        <div className="text-xl sm:text-3xl font-bold" style={{ fontFamily: 'DM Serif Display' }}>2023</div>
                      </div>
                      <div className="w-px h-8 sm:h-12 bg-white/30"></div>
                      <div className="text-center">
                        <div className="text-sm sm:text-lg font-bold" style={{ fontFamily: 'DM Serif Display' }}>34 Plots</div>
                      </div>
                      <div className="w-px h-8 sm:h-12 bg-white/30"></div>
                      <div className="text-center">
                        <div className="text-sm sm:text-lg font-semibold text-[#D3AC4A]" style={{ fontFamily: 'Futura-Medium' }}>Fully</div>
                        <div className="text-sm sm:text-lg font-semibold text-[#D3AC4A]" style={{ fontFamily: 'Futura-Medium' }}>Sold</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-6 text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-[#37405E] mb-2 sm:mb-3" style={{ fontFamily: 'DM Serif Display' }}>Kurinjee Nagar Phase 2</h3>
                <p className="text-sm sm:text-base text-gray-600" style={{ fontFamily: 'Futura-Medium' }}>Vedapatty</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Happy Buyer Stories - Sixth Fold */}
      <section className="py-10 lg:py-24 bg-gray-50">
        <div className="container px-4 lg:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif text-[#37405E] mb-4 sm:mb-6">
              Happy Buyer <span className="bg-gradient-to-r from-[#D3AC4A] to-[#37405E] bg-clip-text text-transparent">Stories</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Image with Background Design */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative w-full h-64 sm:h-80 lg:h-96 xl:h-[500px]">
                <img
                  src="/images/home page - ff/images/sixth fold Vector.jpg"
                  alt="Happy Customer at Fair Field Project"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

            {/* Right - Testimonial Carousel */}
            <div className="order-1 lg:order-2">
              <TestimonialCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* How we work - Seventh Fold */}
      <section className="py-10 lg:py-24 ">
        <div className="container mx-auto px-4 py-6 lg:px-8 lg:py-16 bg-gray-100 rounded-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-6 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif text-[#37405E] mb-6 lg:mb-10">
              How we <span 
                style={{
                  background: 'radial-gradient(circle, #37405E 0%, #D3AC4A 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >work</span>
            </h2>
            <p className="text-base lg:text-lg text-[#37405E] max-w-4xl mx-auto font-sans">
              We take care of every step from documents and loans to construction and after-sale service. So, your property journey stays simple and stress-free.
            </p>
          </motion.div>

          {/* Desktop: Complete process flow with SVG background */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-full max-w-6xl">
              {/* Background SVG with complete layout structure */}
              <img
                src="/images/home page - ff/icons/seventh folder/seventh fold Vector.svg"
                alt="How we work - Complete process flow layout"
                className="w-full h-auto"
              />
              
              {/* Positioned Vector SVGs with overlaid text labels - matching reference design layout */}
              <div className="absolute inset-0">
                {/* Step 1 - Inquiry (bottom left white label position) */}
                <div className="absolute" style={{ left: '14%', top: '68%', transform: 'translate(-50%, -50%)' }}>
                  <div className="relative">
                    <img
                      src="/images/home page - ff/icons/seventh folder/Vector 1.svg"
                      alt="01"
                      className="w-16 h-8 lg:w-20 lg:h-10"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[#37405E] font-medium text-xs lg:text-sm" style={{ fontFamily: 'Futura-Medium' }}>Inquiry</span>
                    </div>
                  </div>
                </div>

                {/* Step 2 - Site Visit (top left white label position) */}
                <div className="absolute" style={{ left: '23%', top: '42%', transform: 'translate(-50%, -50%)' }}>
                  <div className="relative">
                    <img
                      src="/images/home page - ff/icons/seventh folder/Vector 2.svg"
                      alt="02"
                      className="w-16 h-8 lg:w-20 lg:h-10"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[#37405E] font-medium text-xs lg:text-sm" style={{ fontFamily: 'Futura-Medium' }}>Site Visit</span>
                    </div>
                  </div>
                </div>

                {/* Step 3 - Selection (bottom middle white label position) */}
                <div className="absolute" style={{ left: '38%', top: '68%', transform: 'translate(-50%, -50%)' }}>
                  <div className="relative">
                    <img
                      src="/images/home page - ff/icons/seventh folder/Vector 3.svg"
                      alt="03"
                      className="w-16 h-8 lg:w-20 lg:h-10"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[#37405E] font-medium text-xs lg:text-sm" style={{ fontFamily: 'Futura-Medium' }}>Selection</span>
                    </div>
                  </div>
                </div>

                {/* Step 4 - Booking (top center white label position) */}
                <div className="absolute" style={{ left: '50%', top: '42%', transform: 'translate(-50%, -50%)' }}>
                  <div className="relative">
                    <img
                      src="/images/home page - ff/icons/seventh folder/Vector 4.svg"
                      alt="04"
                      className="w-16 h-8 lg:w-20 lg:h-10"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[#37405E] font-medium text-xs lg:text-sm" style={{ fontFamily: 'Futura-Medium' }}>Booking</span>
                    </div>
                  </div>
                </div>

                {/* Step 5 - Registration (bottom center-right white label position) */}
                <div className="absolute" style={{ left: '62%', top: '68%', transform: 'translate(-50%, -50%)' }}>
                  <div className="relative">
                    <img
                      src="/images/home page - ff/icons/seventh folder/Vector 5.svg"
                      alt="05"
                      className="w-16 h-8 lg:w-20 lg:h-10"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[#37405E] font-medium text-xs lg:text-sm" style={{ fontFamily: 'Futura-Medium' }}>Registration</span>
                    </div>
                  </div>
                </div>

                {/* Step 6 - Construction (top right white label position) */}
                <div className="absolute" style={{ left: '77%', top: '42%', transform: 'translate(-50%, -50%)' }}>
                  <div className="relative">
                    <img
                      src="/images/home page - ff/icons/seventh folder/Vector 6.svg"
                      alt="06"
                      className="w-16 h-8 lg:w-20 lg:h-10"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[#37405E] font-medium text-xs lg:text-sm" style={{ fontFamily: 'Futura-Medium' }}>Construction</span>
                    </div>
                  </div>
                </div>

                {/* Step 7 - Handover (bottom right white label position) */}
                <div className="absolute" style={{ left: '86%', top: '68%', transform: 'translate(-50%, -50%)' }}>
                  <div className="relative">
                    <img
                      src="/images/home page - ff/icons/seventh folder/Vector 7.svg"
                      alt="07"
                      className="w-16 h-8 lg:w-20 lg:h-10"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[#37405E] font-medium text-xs lg:text-sm" style={{ fontFamily: 'Futura-Medium' }}>Handover</span>
                    </div>
                  </div>
                </div>

                {/* Step 8 - Support (top far right white label position) */}
                <div className="absolute" style={{ left: '94%', top: '42%', transform: 'translate(-50%, -50%)' }}>
                  <div className="relative">
                    <img
                      src="/images/home page - ff/icons/seventh folder/Vector 8.svg"
                      alt="08"
                      className="w-16 h-8 lg:w-20 lg:h-10"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[#37405E] font-medium text-xs lg:text-sm" style={{ fontFamily: 'Futura-Medium' }}>Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile: Step-by-step process flow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Step 1 - Inquiry */}
            <div className="relative p-6 bg-white border border-gray-200 rounded-xl">
              <div className="text-4xl font-bold text-gray-300 absolute top-4 left-4" style={{ fontFamily: 'DM Serif Display' }}>01</div>
              <div className="text-center pt-8">
                <div className="flex justify-center mb-4">
                  <img
                    src="/images/home page - ff/icons/seventh folder/icons/Vector 1.svg"
                    alt="Inquiry Icon"
                    className="w-12 h-12"
                  />
                </div>
                <h4 className="text-xl font-semibold text-[#37405E] mb-2" style={{ fontFamily: 'DM Serif Display' }}>Inquiry</h4>
                <p className="text-gray-600" style={{ fontFamily: 'Futura-Medium' }}>Customer inquires about properties</p>
              </div>
            </div>

            {/* Step 2 - Site Visit */}
            <div className="relative p-6 bg-white border border-gray-200 rounded-xl">
              <div className="text-4xl font-bold text-gray-300 absolute top-4 left-4" style={{ fontFamily: 'DM Serif Display' }}>02</div>
              <div className="text-center pt-8">
                <div className="flex justify-center mb-4">
                  <img
                    src="/images/home page - ff/icons/seventh folder/icons/Vector 2.svg"
                    alt="Site Visit Icon"
                    className="w-12 h-12"
                  />
                </div>
                <h4 className="text-xl font-semibold text-[#37405E] mb-2" style={{ fontFamily: 'DM Serif Display' }}>Site Visit</h4>
                <p className="text-gray-600" style={{ fontFamily: 'Futura-Medium' }}>Scheduled site visit and tour</p>
              </div>
            </div>

            {/* Step 3 - Selection */}
            <div className="relative p-6 bg-white border border-gray-200 rounded-xl">
              <div className="text-4xl font-bold text-gray-300 absolute top-4 left-4" style={{ fontFamily: 'DM Serif Display' }}>03</div>
              <div className="text-center pt-8">
                <div className="flex justify-center mb-4">
                  <img
                    src="/images/home page - ff/icons/seventh folder/icons/Vector 3.svg"
                    alt="Selection Icon"
                    className="w-12 h-12"
                  />
                </div>
                <h4 className="text-xl font-semibold text-[#37405E] mb-2" style={{ fontFamily: 'DM Serif Display' }}>Selection</h4>
                <p className="text-gray-600" style={{ fontFamily: 'Futura-Medium' }}>Choose your ideal plot/property</p>
              </div>
            </div>

            {/* Step 4 - Booking */}
            <div className="relative p-6 bg-white border border-gray-200 rounded-xl">
              <div className="text-4xl font-bold text-gray-300 absolute top-4 left-4" style={{ fontFamily: 'DM Serif Display' }}>04</div>
              <div className="text-center pt-8">
                <div className="flex justify-center mb-4">
                  <img
                    src="/images/home page - ff/icons/seventh folder/icons/Vector 4.svg"
                    alt="Booking Icon"
                    className="w-12 h-12"
                  />
                </div>
                <h4 className="text-xl font-semibold text-[#37405E] mb-2" style={{ fontFamily: 'DM Serif Display' }}>Booking</h4>
                <p className="text-gray-600" style={{ fontFamily: 'Futura-Medium' }}>Secure your selection with booking</p>
              </div>
            </div>

            {/* Step 5 - Registration */}
            <div className="relative p-6 bg-white border border-gray-200 rounded-xl">
              <div className="text-4xl font-bold text-gray-300 absolute top-4 left-4" style={{ fontFamily: 'DM Serif Display' }}>05</div>
              <div className="text-center pt-8">
                <div className="flex justify-center mb-4">
                  <img
                    src="/images/home page - ff/icons/seventh folder/icons/Vector 5.svg"
                    alt="Registration Icon"
                    className="w-12 h-12"
                  />
                </div>
                <h4 className="text-xl font-semibold text-[#37405E] mb-2" style={{ fontFamily: 'DM Serif Display' }}>Registration</h4>
                <p className="text-gray-600" style={{ fontFamily: 'Futura-Medium' }}>Complete legal registration process</p>
              </div>
            </div>

            {/* Step 6 - Construction */}
            <div className="relative p-6 bg-white border border-gray-200 rounded-xl">
              <div className="text-4xl font-bold text-gray-300 absolute top-4 left-4" style={{ fontFamily: 'DM Serif Display' }}>06</div>
              <div className="text-center pt-8">
                <div className="flex justify-center mb-4">
                  <img
                    src="/images/home page - ff/icons/seventh folder/icons/Vector 6.svg"
                    alt="Construction Icon"
                    className="w-12 h-12"
                  />
                </div>
                <h4 className="text-xl font-semibold text-[#37405E] mb-2" style={{ fontFamily: 'DM Serif Display' }}>Construction</h4>
                <p className="text-gray-600" style={{ fontFamily: 'Futura-Medium' }}>Monitor construction progress</p>
              </div>
            </div>

            {/* Step 7 - Handover */}
            <div className="relative p-6 bg-white border border-gray-200 rounded-xl">
              <div className="text-4xl font-bold text-gray-300 absolute top-4 left-4" style={{ fontFamily: 'DM Serif Display' }}>07</div>
              <div className="text-center pt-8">
                <div className="flex justify-center mb-4">
                  <img
                    src="/images/home page - ff/icons/seventh folder/icons/Vector 7.svg"
                    alt="Handover Icon"
                    className="w-12 h-12"
                  />
                </div>
                <h4 className="text-xl font-semibold text-[#37405E] mb-2" style={{ fontFamily: 'DM Serif Display' }}>Handover</h4>
                <p className="text-gray-600" style={{ fontFamily: 'Futura-Medium' }}>Receive your completed property</p>
              </div>
            </div>

            {/* Step 8 - Support */}
            <div className="relative p-6 bg-white border border-gray-200 rounded-xl">
              <div className="text-4xl font-bold text-gray-300 absolute top-4 left-4" style={{ fontFamily: 'DM Serif Display' }}>08</div>
              <div className="text-center pt-8">
                <div className="flex justify-center mb-4">
                  <img
                    src="/images/home page - ff/icons/seventh folder/icons/Vector 8.svg"
                    alt="Support Icon"
                    className="w-12 h-12"
                  />
                </div>
                <h4 className="text-xl font-semibold text-[#37405E] mb-2" style={{ fontFamily: 'DM Serif Display' }}>Support</h4>
                <p className="text-gray-600" style={{ fontFamily: 'Futura-Medium' }}>Ongoing support and maintenance</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Why choose Fair Field Shelters - Eighth Fold */}
      <section className="py-10 lg:py-24 bg-[#D3AC4A0D]">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="sm:text-center md:text-left mb-4 lg:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif mb-4">
              <span className="text-[#937B37] ">Why choose</span>
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif text-[#37405E]">
              Fair Field Shelters
            </h3>
          </motion.div>

          <div className="grid lg:grid-cols-2 md:gap-10 lg:gap-40 items-center">
            {/* Left - Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full h-60 lg:h-[500px] flex items-center justify-center">
                <img
                  src="/images/home page - ff/icons/eighth fold Vector.svg"
                  alt="Why choose Fair Field Shelters illustration"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >

              <div className="space-y-6">
                {[
                  'DTCP & RERA approved projects',
                  'Clear titles & Transparent deals',
                  'On-time delivery & Premium quality',
                  'Steady appreciation & High resale value',
                  'Friendly support for NRI and Local buyers'
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <img
                        src="/images/home page - ff/icons/fourth fold/tick vector.svg"
                        alt="Tick"
                        className="w-6 h-6"
                      />
                    </div>
                    <p className="text-base lg:text-lg text-[#37405E] font-medium">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Book your site visit today - Ninth Fold */}
      <section className="relative py-10 lg:py-24 px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl">
          {/* Background Image */}
          <Image
            src="/images/home page - ff/images/nineth fold.png"
            alt="Book your site visit background"
            fill
            className="object-cover object-top"
            priority={false}
          />
          
          {/* Content Overlay */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-10 lg:py-24">
          <div className="flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl lg:rounded-tl-none lg:rounded-tr-[40px] lg:rounded-bl-[40px] lg:rounded-br-none py-6 px-4 sm:py-8 sm:px-6 lg:py-12 lg:px-8 w-full max-w-sm sm:max-w-md lg:max-w-lg shadow-2xl"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#37405E] mb-6 sm:mb-8">
                Book your site visit today
              </h2>

              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                {/* Phone */}
                <div className="flex flex-col items-center text-center space-y-2 sm:flex-row sm:items-center sm:text-left sm:space-y-0 sm:space-x-3">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <img
                      src="/images/home page - ff/icons/nineth fold icon/call (1).svg"
                      alt="Phone"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="flex-1 max-w-sm flex items-center">
                    <p className="text-sm sm:text-base text-[#37405E] font-semibold">79008 82288 | 79008 84488</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col items-center text-center space-y-2 sm:flex-row sm:items-center sm:text-left sm:space-y-0 sm:space-x-3">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <img
                      src="/images/home page - ff/icons/nineth fold icon/mail Vector.svg"
                      alt="Email"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="flex-1 max-w-sm flex items-center">
                    <p className="text-sm sm:text-base text-[#37405E] font-semibold">fairfieldsales2024@gmail.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex flex-col items-center text-center space-y-2 sm:flex-row sm:items-center sm:text-left sm:space-y-0 sm:space-x-3">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <img
                      src="/images/home page - ff/icons/nineth fold icon/address.svg"
                      alt="Address"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="flex-1 max-w-md flex items-center">
                    <p className="text-sm sm:text-base text-[#37405E] font-semibold leading-relaxed">
                      163A, Thiruvenkatasamy Road (West), R.S. Puram, Coimbatore – 641002
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col lg:flex-row gap-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-[#D3AC4A] py-2 px-4 lg:py-2 lg:px-2 rounded-sm text-base text-[#37405e] hover:bg-[#D3AC4A]/90 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Book your visit today</span>
                  <img
                    src="/images/home page - ff/icons/nineth fold icon/cta arrow Vector.svg"
                    alt="Arrow"
                    className=" w-4 h-4"
                  />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-[#37405E] text-white py-2 px-4 lg:py-2 lg:px-2 rounded-sm text-base sm:text-lg hover:bg-[#37405E]/90 transition-colors"
                >
                  Call us now
                </motion.button>
              </div>
            </motion.div>
          </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-2xl lg:text-3xl font-serif text-[#37405E]">
              &ldquo;Fair Field Shelters — Premium Projects built on Promise&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <UniversalFooter />
    </div>
  );
}