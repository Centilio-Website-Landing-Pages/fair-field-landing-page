'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { UniversalHeader } from '@/components/shared/header/UniversalHeader';
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
      {/* Hero Section - Following Completed Projects Layout Structure */}
      <motion.section 
        className="relative overflow-hidden"
        style={{ height: '75vh' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Step Cut Design Layer Only */}
        <div className="absolute inset-4 rounded-lg overflow-hidden">
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

        {/* Kurinjee Nagar Phase I Title - Centered over building image */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white drop-shadow-2xl px-4"
              style={{ fontFamily: 'DM Serif Display' }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Kurinjee Nagar Phase I
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
                  src="/images/legal & approval page - ff/icon/first fold icon.svg"
                  alt="Arrow"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
                <span className="text-[#37405E]">
                  Project
                </span> 
                <img
                  src="/images/legal & approval page - ff/icon/first fold icon.svg"
                  alt="Arrow"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
                <Link href="/completed-projects" className="hover:text-[#D3AC4A] transition-colors cursor-pointer">
                  Completed Projects
                </Link>
                <img
                  src="/images/legal & approval page - ff/icon/first fold icon.svg"
                  alt="Arrow"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
                <span>Kurinjee Nagar Phase I</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Second Fold - Project Detail */}
      <section className="py-12 md:py-20 bg-white" style={{ marginTop: '0' }}>
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
              className="text-2xl sm:text-3xl md:text-4xl mb-8 font-normal text-[#37405E]"
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="relative h-[300px] md:h-[440px] rounded-lg overflow-hidden group">
                  <Image
                    src={projectImages[currentImageIndex]}
                    alt={`Kurinjee Nagar Phase I - View ${currentImageIndex + 1}`}
                    fill
                    className="object-cover object-center transition-opacity duration-300"
                  />
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 opacity-50 group-hover:opacity-100 transition-all duration-300"
                  >
                    <Image
                      src="/images/completed page -ff/Kotagiri Serene Villas – Kotagiri, Nilgiris (2018)/icons/left Vector.svg"
                      alt="Previous"
                      width={40}
                      height={40}
                    />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 opacity-50 group-hover:opacity-100 transition-all duration-300"
                  >
                    <Image
                      src="/images/completed page -ff/Kotagiri Serene Villas – Kotagiri, Nilgiris (2018)/icons/right Vector.svg"
                      alt="Next"
                      width={40}
                      height={40}
                    />
                  </button>
                  
                  {/* Dots Indicator */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {projectImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          index === currentImageIndex ? 'bg-[#D3AC4A]' : 'bg-white/50 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Project Details */}
            <motion.div 
              className="lg:col-span-2 flex flex-col justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-12">
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
              <div className="absolute -top-14 -left-2">
                <Image
                  src="/images/completed page -ff/kurinjee nagar phase 1/icons/quote-icon.png"
                  alt="Quote Icon"
                  width={40}
                  height={40}
                  className="object-contain"
                />
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