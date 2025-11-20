'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { UniversalHeader } from '@/components/shared/header/UniversalHeader';
import UniversalFooter from '@/components/shared/footer/UniversalFooter';

export default function BlogPage() {
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

        {/* Blog Title - Centered over building image */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white drop-shadow-2xl px-4"
              style={{ fontFamily: 'DM Serif Display' }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Blog
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
                <span>Blog</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Second Fold - Blog Posts Section */}
      <section className="py-12 md:py-20 mb-16 md:mb-24 bg-white">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
            {/* Blog Post 1 */}
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative">
                {/* Image Section */}
                <div className="relative h-[280px] overflow-hidden rounded-lg">
                  <Image
                    src="/images/blog page - ff/images/first fold 2 image.jpg"
                    alt="Gated community modern house"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* White Content Section - Overlapping */}
                <div className="absolute bottom-0 left-4 right-4 bg-white border-3 border-[#D3AC4A4D] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 transform translate-y-1/2 flex flex-col">
                  <div className="flex items-center justify-between text-sm text-[#D3AC4A] mb-4 space-x-6">
                    <div className="flex items-center">
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
                    className="text-[18px] md:text-[20px] font-normal text-[#37405E] mb-4 leading-tight min-h-[60px] flex items-start"
                    style={{ fontFamily: 'DM Serif Display' }}
                  >
                    Top 5 Reasons why Gated communities are the future of Real Estate
                  </h3>
                  <button 
                    className="text-[#37405E] font-medium text-[14px] hover:text-[#D3AC4A] transition-colors underline mt-auto text-left"
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
              <div className="relative">
                {/* Image Section */}
                <div className="relative h-[280px] overflow-hidden rounded-lg">
                  <Image
                    src="/images/blog page - ff/images/first fold 3 image.jpg"
                    alt="Perfect plot for dream home"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* White Content Section - Overlapping */}
                <div className="absolute bottom-0 left-4 right-4 bg-white border-3 border-[#D3AC4A4D] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 transform translate-y-1/2 flex flex-col">
                  <div className="flex items-center justify-between text-sm text-[#D3AC4A] mb-4 space-x-6">
                    <div className="flex items-center">
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
                    className="text-[18px] md:text-[20px] font-normal text-[#37405E] mb-4 leading-tight min-h-[60px] flex items-start"
                    style={{ fontFamily: 'DM Serif Display' }}
                  >
                    How to choose the Perfect Plot for Your Dream Home
                  </h3>
                  <button 
                    className="text-[#37405E] font-medium text-[14px] hover:text-[#D3AC4A] transition-colors underline mt-auto text-left"
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
              <div className="relative">
                {/* Image Section */}
                <div className="relative h-[280px] overflow-hidden rounded-lg">
                  <Image
                    src="/images/blog page - ff/images/first fold 4 image.jpg"
                    alt="Real estate in Coimbatore"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* White Content Section - Overlapping */}
                <div className="absolute bottom-0 left-4 border-3 border-[#D3AC4A4D] right-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 transform translate-y-1/2 flex flex-col">
                  <div className="flex items-center justify-between text-sm text-[#D3AC4A] mb-4 space-x-6">
                    <div className="flex items-center">
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
                    className="text-[18px] md:text-[20px] font-normal text-[#37405E] mb-4 leading-tight min-h-[60px] flex items-start"
                    style={{ fontFamily: 'DM Serif Display' }}
                  >
                    Real Estate in Coimbatore- Why Now is the Right time
                  </h3>
                  <button 
                    className="text-[#37405E] font-medium text-[14px] hover:text-[#D3AC4A] transition-colors underline mt-auto text-left"
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