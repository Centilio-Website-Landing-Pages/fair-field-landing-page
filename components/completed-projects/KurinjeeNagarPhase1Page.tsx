'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import UniversalFooter from '@/components/shared/footer/UniversalFooter';

export default function KurinjeeNagarPhase1Page() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const projectImages = [
    '/images/completed page -ff/kurinjee nagar phase 1/images/7.png',
    '/images/completed page -ff/kurinjee nagar phase 1/images/14.png',
    '/images/completed page -ff/kurinjee nagar phase 1/images/18.png',
    '/images/completed page -ff/kurinjee nagar phase 1/images/19.png',
    '/images/completed page -ff/kurinjee nagar phase 1/images/23.png',
    '/images/completed page -ff/kurinjee nagar phase 1/images/25.png'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* First Fold - Hero Section */}
      <motion.section 
        className="relative overflow-hidden"
        style={{ height: '75vh', marginBottom: '0' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Main Building Image Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/layer 1.jpg"
            alt="Fair Field Shelters modern building"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* White background area for Schedule button */}
        <div className="absolute top-0 right-0 z-15">
          <div 
            className="bg-white"
            style={{
              width: '300px',
              height: '100px',
              clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)'
            }}
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
                <a href="/" className="text-[16px] text-[#D3AC4A] font-medium hover:text-white transition-colors drop-shadow-lg" style={{ fontFamily: 'Alata' }}>Home</a>
                <a href="/about-us" className="text-[16px] text-white font-medium hover:text-[#D3AC4A] transition-colors drop-shadow-lg" style={{ fontFamily: 'Alata' }}>About us</a>
                <span className="text-[16px] text-white font-medium hover:text-[#D3AC4A] transition-colors drop-shadow-lg cursor-pointer" style={{ fontFamily: 'Alata' }}>Project</span>
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
          className="absolute top-4 right-4 md:right-8 z-40"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button 
            className="bg-[#D3AC4A] text-[#37405E] px-4 md:px-6 py-2 md:py-3 rounded-lg font-bold text-[14px] md:text-[16px] hover:bg-[#C19B42] transition-colors flex items-center space-x-2 book-visit-button"
            style={{ fontFamily: 'Futura-Heavy' }}
          >
            <span className="hidden sm:inline">Schedule a visit</span>
            <span className="sm:hidden">Schedule</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"/>
            </svg>
          </button>
        </motion.div>

        {/* Completed Projects Title - Centered over building image */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center px-4">
            <motion.h1 
              className="text-[32px] md:text-[48px] font-normal text-white drop-shadow-2xl"
              style={{ fontFamily: 'DM Serif Display' }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Completed Projects
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
                <span>Project</span>
                <span>›</span>
                <span>Completed Projects</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Second Fold - Project Detail */}
      <section className="pb-12 md:pb-20 bg-white" style={{ marginTop: '0' }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Project Title */}
          <motion.div
            className="mb-8 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-[28px] md:text-[32px] lg:text-[40px] font-normal text-[#37405E]"
              style={{ fontFamily: 'DM Serif Display' }}
            >
              <span className="text-[#37405E]">Kurinjee Nagar Phase I –</span>
              <span className="text-[#D3AC4A]"> Vedapatty, Coimbatore (2023)</span>
            </h2>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mb-12 md:mb-16">
            {/* Left Side - Project Image with Navigation */}
            <motion.div 
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="relative h-[300px] md:h-[440px] rounded-lg overflow-hidden">
                  <Image
                    src={projectImages[currentImageIndex]}
                    alt={`Kurinjee Nagar Phase I - View ${currentImageIndex + 1}`}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#D3AC4A] rounded-full shadow-lg flex items-center justify-center hover:bg-[#C19B42] transition-colors"
                >
                  <Image
                    src="/images/completed page -ff/Kotagiri Serene Villas – Kotagiri, Nilgiris (2018)/icons/left Vector.svg"
                    alt="Previous"
                    width={20}
                    height={20}
                  />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#D3AC4A] rounded-full shadow-lg flex items-center justify-center hover:bg-[#C19B42] transition-colors"
                >
                  <Image
                    src="/images/completed page -ff/Kotagiri Serene Villas – Kotagiri, Nilgiris (2018)/icons/right Vector.svg"
                    alt="Next"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </motion.div>

            {/* Right Side - Project Details */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                {/* Location */}
                <div className="flex items-center space-x-6">
                  <div className="w-6 h-6 flex-shrink-0">
                    <Image
                      src="/images/completed page -ff/kurinjee nagar phase 1/icons/same icons for 3 completed project page/Vector 1.svg"
                      alt="Location icon"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <p className="text-[16px] font-medium text-[#37405E]" style={{ fontFamily: 'Futura-Medium' }}>
                      Vedapatty, Coimbatore
                    </p>
                  </div>
                </div>

                {/* Project Type */}
                <div className="flex items-center space-x-6">
                  <div className="w-6 h-6 flex-shrink-0">
                    <Image
                      src="/images/completed page -ff/kurinjee nagar phase 1/icons/same icons for 3 completed project page/Vector 2.svg"
                      alt="Project type icon"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <p className="text-[16px] font-medium text-[#37405E]" style={{ fontFamily: 'Futura-Medium' }}>
                      <span className="text-[18px]">Project Type: </span>DTCP approved layout
                    </p>
                  </div>
                </div>

                {/* Units */}
                <div className="flex items-center space-x-6">
                  <div className="w-6 h-6 flex-shrink-0">
                    <Image
                      src="/images/completed page -ff/kurinjee nagar phase 1/icons/same icons for 3 completed project page/Vector 3.svg"
                      alt="Units icon"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <p className="text-[16px] font-medium text-[#37405E]" style={{ fontFamily: 'Futura-Medium' }}>
                      <span className="text-[18px]">Units: </span>106 Plots
                    </p>
                  </div>
                </div>

                {/* Year of Completion */}
                <div className="flex items-center space-x-6">
                  <div className="w-6 h-6 flex-shrink-0">
                    <Image
                      src="/images/completed page -ff/kurinjee nagar phase 1/icons/same icons for 3 completed project page/Vector 4.svg"
                      alt="Calendar icon"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <p className="text-[16px] font-medium text-[#37405E]" style={{ fontFamily: 'Futura-Medium' }}>
                      <span className="text-[18px]">Year of Completion: </span>2023
                    </p>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center space-x-6">
                  <div className="w-6 h-6 flex-shrink-0">
                    <Image
                      src="/images/completed page -ff/kurinjee nagar phase 1/icons/same icons for 3 completed project page/Vector 5.svg"
                      alt="Status icon"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <p className="text-[16px] font-medium text-[#37405E]" style={{ fontFamily: 'Futura-Medium' }}>
                      <span>Status: </span><span>Sold Out & Occupied</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Why It's Special Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 
              className="text-[20px] md:text-[24px] font-normal mb-6"
              style={{ fontFamily: 'DM Serif Display' }}
            >
              <span className="text-[#37405E]">Why </span>
              <span 
                className="bg-gradient-to-r from-[#37405E] to-[#D3AC4A] bg-clip-text text-transparent"
              >
                It's Special:
              </span>
            </h3>
            <p 
              className="text-[16px] md:text-[18px] text-black leading-relaxed mb-8"
              style={{ fontFamily: 'Futura-Medium' }}
            >
              Delivered with clear documents, strong appreciation, and immediate construction potential, Kurinjee Nagar Phase I earned the trust of every customer. Known for its transparent process, smooth registration, and excellent resale demand, it quickly became one of Coimbatore's most sought-after plotted communities.
            </p>
          </motion.div>

          {/* Testimonial Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#F5F2E8] rounded-[8px] p-8 md:p-12"
          >
            <div className="relative">
              {/* Quote Icon - Positioned at top left */}
              <div className="absolute -top-2 -left-2">
                <div 
                  className="text-[80px] md:text-[100px] font-normal text-[#D3AC4A] leading-none opacity-80"
                  style={{ fontFamily: 'DM Serif Display' }}
                >
                  "
                </div>
              </div>
              
              {/* Content with proper spacing */}
              <div className="relative pl-12 md:pl-16 pt-8">
                <blockquote 
                  className="text-[16px] md:text-[18px] text-[#37405E] mb-6 leading-relaxed font-normal"
                  style={{ fontFamily: 'Futura-Medium' }}
                >
                  "Our registration was done exactly as promised. Clear communication and complete peace of mind."
                </blockquote>
                
                <cite 
                  className="text-[14px] md:text-[16px] font-medium text-[#37405E] not-italic block"
                  style={{ fontFamily: 'Futura-Medium' }}
                >
                  — Mr. Anand, Homebuyer, Vedapatty
                </cite>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <UniversalFooter />
    </main>
  );
}