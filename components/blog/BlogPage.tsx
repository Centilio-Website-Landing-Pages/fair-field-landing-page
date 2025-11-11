'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import UniversalFooter from '@/components/shared/footer/UniversalFooter';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* First Fold - Hero Section */}
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
                <a href="/current-projects" className="text-[16px] text-white font-medium hover:text-[#D3AC4A] transition-colors drop-shadow-lg" style={{ fontFamily: 'Alata' }}>Project</a>
                <span className="text-[16px] text-[#D3AC4A] font-medium hover:text-white transition-colors drop-shadow-lg cursor-pointer" style={{ fontFamily: 'Alata' }}>Blog</span>
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

        {/* Blog Title - Centered over building image */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center px-4">
            <motion.h1 
              className="text-[32px] md:text-[48px] font-normal text-white drop-shadow-2xl"
              style={{ fontFamily: 'DM Serif Display' }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Blog
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
                <span>Blog</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Second Fold - Blog Posts Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Section Title */}
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-[28px] md:text-[36px] lg:text-[42px] font-normal text-[#37405E] mb-4"
              style={{ fontFamily: 'DM Serif Display' }}
            >
              <span className="text-[#37405E]">Insights, Market Trends</span>
              <span className="text-[#D3AC4A]"> & Home Buying Tips</span>
            </h2>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Blog Post 1 */}
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="rounded-[5px] overflow-hidden">
                {/* Image Section */}
                <div className="relative h-[280px] rounded-t-[5px] overflow-hidden">
                  <Image
                    src="/images/blog page - ff/images/first fold 2 image.jpg"
                    alt="Gated community modern house"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* White Content Card Below Image */}
                <div className="bg-white rounded-b-[5px] p-4 shadow-sm hover:shadow-lg transition-all duration-300 border-[3px] border-[#D3AC4A]/30 border-t-0">
                  <div className="flex items-center text-xs text-[#D3AC4A] mb-3">
                    <div className="flex items-center mr-6">
                      <Image
                        src="/images/blog page - ff/icon/second fold/Vector admin.svg"
                        alt="Admin icon"
                        width={16}
                        height={16}
                        className="mr-2"
                      />
                      <span style={{ fontFamily: 'Futura-Medium' }}>Admin</span>
                    </div>
                    <div className="flex items-center">
                      <Image
                        src="/images/blog page - ff/icon/second fold/Vector calender.svg"
                        alt="Calendar icon"
                        width={16}
                        height={16}
                        className="mr-2"
                      />
                      <span style={{ fontFamily: 'Futura-Medium' }}>10 May, 2025</span>
                    </div>
                  </div>
                  <h3 
                    className="text-[16px] md:text-[18px] font-normal text-[#37405E] mb-3 leading-tight"
                    style={{ fontFamily: 'DM Serif Display' }}
                  >
                    Top 5 Reasons why Gated communities are the future of Real Estate
                  </h3>
                  <button 
                    className="text-[#37405E] font-medium text-[12px] hover:text-[#D3AC4A] transition-colors"
                    style={{ fontFamily: 'Futura-Medium' }}
                  >
                    Read more
                  </button>
                </div>
              </div>
            </motion.article>

            {/* Blog Post 2 */}
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="rounded-[5px] overflow-hidden">
                {/* Image Section */}
                <div className="relative h-[280px] rounded-t-[5px] overflow-hidden">
                  <Image
                    src="/images/blog page - ff/images/first fold 3 image.jpg"
                    alt="Perfect plot for dream home"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* White Content Card Below Image */}
                <div className="bg-white rounded-b-[5px] p-4 shadow-sm hover:shadow-lg transition-all duration-300 border-[3px] border-[#D3AC4A]/30 border-t-0">
                  <div className="flex items-center text-xs text-[#D3AC4A] mb-3">
                    <div className="flex items-center mr-6">
                      <Image
                        src="/images/blog page - ff/icon/second fold/Vector admin.svg"
                        alt="Admin icon"
                        width={16}
                        height={16}
                        className="mr-2"
                      />
                      <span style={{ fontFamily: 'Futura-Medium' }}>Admin</span>
                    </div>
                    <div className="flex items-center">
                      <Image
                        src="/images/blog page - ff/icon/second fold/Vector calender.svg"
                        alt="Calendar icon"
                        width={16}
                        height={16}
                        className="mr-2"
                      />
                      <span style={{ fontFamily: 'Futura-Medium' }}>10 May, 2025</span>
                    </div>
                  </div>
                  <h3 
                    className="text-[16px] md:text-[18px] font-normal text-[#37405E] mb-3 leading-tight"
                    style={{ fontFamily: 'DM Serif Display' }}
                  >
                    How to choose the Perfect Plot for Your Dream Home
                  </h3>
                  <button 
                    className="text-[#37405E] font-medium text-[12px] hover:text-[#D3AC4A] transition-colors"
                    style={{ fontFamily: 'Futura-Medium' }}
                  >
                    Read more
                  </button>
                </div>
              </div>
            </motion.article>

            {/* Blog Post 3 */}
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="rounded-[5px] overflow-hidden">
                {/* Image Section */}
                <div className="relative h-[280px] rounded-t-[5px] overflow-hidden">
                  <Image
                    src="/images/blog page - ff/images/first fold 4 image.jpg"
                    alt="Real estate in Coimbatore"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* White Content Card Below Image */}
                <div className="bg-white rounded-b-[5px] p-4 shadow-sm hover:shadow-lg transition-all duration-300 border-[3px] border-[#D3AC4A]/30 border-t-0">
                  <div className="flex items-center text-xs text-[#D3AC4A] mb-3">
                    <div className="flex items-center mr-6">
                      <Image
                        src="/images/blog page - ff/icon/second fold/Vector admin.svg"
                        alt="Admin icon"
                        width={16}
                        height={16}
                        className="mr-2"
                      />
                      <span style={{ fontFamily: 'Futura-Medium' }}>Admin</span>
                    </div>
                    <div className="flex items-center">
                      <Image
                        src="/images/blog page - ff/icon/second fold/Vector calender.svg"
                        alt="Calendar icon"
                        width={16}
                        height={16}
                        className="mr-2"
                      />
                      <span style={{ fontFamily: 'Futura-Medium' }}>10 May, 2025</span>
                    </div>
                  </div>
                  <h3 
                    className="text-[16px] md:text-[18px] font-normal text-[#37405E] mb-3 leading-tight"
                    style={{ fontFamily: 'DM Serif Display' }}
                  >
                    Real Estate in Coimbatore- Why Now is the Right time
                  </h3>
                  <button 
                    className="text-[#37405E] font-medium text-[12px] hover:text-[#D3AC4A] transition-colors"
                    style={{ fontFamily: 'Futura-Medium' }}
                  >
                    Read more
                  </button>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Footer */}
      <UniversalFooter />
    </main>
  );
}