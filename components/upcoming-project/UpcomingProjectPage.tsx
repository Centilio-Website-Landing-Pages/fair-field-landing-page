'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import UniversalFooter from '@/components/shared/footer/UniversalFooter';

export default function UpcomingProjectPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* First Fold - Hero Section */}
      <motion.section 
        className="relative overflow-hidden"
        style={{ height: '100vh' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Image - using layer 1.jpg as the blue gradient background */}
        <div className="absolute inset-0">
          <Image
            src="/images/layer 1.jpg"
            alt="Blue Gradient Background"
            fill
            className="object-cover"
            style={{ objectPosition: 'center center' }}
            priority
          />
        </div>

        {/* Header Navigation */}
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
                  width={158}
                  height={158}
                  className="mr-2"
                />
              </motion.div>

              {/* Navigation Menu */}
              <motion.nav 
                className="hidden md:flex items-center space-x-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link 
                  href="/" 
                  className="text-[16px] text-[#D3AC4A] font-medium hover:text-white transition-colors drop-shadow-lg" 
                  style={{ fontFamily: 'Alata' }}
                >
                  Home
                </Link>
                <a 
                  href="/about-us" 
                  className="text-[16px] text-white font-medium hover:text-[#D3AC4A] transition-colors drop-shadow-lg" 
                  style={{ fontFamily: 'Alata' }}
                >
                  About us
                </a>
                <span 
                  className="text-[16px] text-white font-medium hover:text-[#D3AC4A] transition-colors drop-shadow-lg cursor-pointer" 
                  style={{ fontFamily: 'Alata' }}
                >
                  Project
                </span>
                <a 
                  href="/blog" 
                  className="text-[16px] text-white font-medium hover:text-[#D3AC4A] transition-colors drop-shadow-lg" 
                  style={{ fontFamily: 'Alata' }}
                >
                  Blog
                </a>
                <a 
                  href="/careers" 
                  className="text-[16px] text-white font-medium hover:text-[#D3AC4A] transition-colors drop-shadow-lg" 
                  style={{ fontFamily: 'Alata' }}
                >
                  Careers
                </a>
                <a 
                  href="/contact" 
                  className="text-[16px] text-white font-medium hover:text-[#D3AC4A] transition-colors drop-shadow-lg" 
                  style={{ fontFamily: 'Alata' }}
                >
                  Contact
                </a>
              </motion.nav>

              {/* Schedule a Visit Button */}
              <motion.div 
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
            </div>
          </div>
        </div>

        {/* Main Title */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center px-4">
            <motion.h1 
              className="text-[48px] md:text-[64px] font-normal text-white drop-shadow-2xl"
              style={{ fontFamily: 'DM Serif Display' }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Upcoming Project
            </motion.h1>
          </div>
        </div>

        {/* Breadcrumb Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <motion.div 
            className="bg-[#F5F5DC] py-6 px-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center space-x-2 text-[16px] text-[#37405E] font-medium" style={{ fontFamily: 'Futura-Medium' }}>
                <span>Home</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"/>
                </svg>
                <span>Project</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"/>
                </svg>
                <span>Upcoming project</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Second Fold - Content Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Images Grid (3 images like reference) */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Top left - Villa */}
              <div className="relative h-[200px] rounded-lg overflow-hidden">
                <Image
                  src="/images/upcoming project page - ff/images/second fold/image 1.jpg"
                  alt="Villa Design"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Right side - Team Consultation (spans 2 rows) */}
              <div className="relative h-[410px] rounded-lg overflow-hidden row-span-2">
                <Image
                  src="/images/upcoming project page - ff/images/second fold/image 3.png"
                  alt="Team Consultation"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Bottom left - Interior */}
              <div className="relative h-[200px] rounded-lg overflow-hidden">
                <Image
                  src="/images/upcoming project page - ff/images/second fold/image 2.png"
                  alt="Interior Design"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Right side - Text Content */}
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 
                className="text-[32px] md:text-[48px] font-normal mb-6"
                style={{ 
                  fontFamily: 'DM Serif Display',
                  background: 'linear-gradient(135deg, #37405E 0%, #D3AC4A 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Expanding Horizons. <span style={{ color: '#D3AC4A' }}>Building</span>
                <br />Premium Futures.
              </h2>
              <p className="text-[16px] md:text-[18px] text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Futura-Medium' }}>
                At Fair Field Shelters Pvt. Ltd., growth is a continuous promise. We are actively 
                planning a new series of premium real estate developments including DTCP-approved 
                layouts, luxury villas and mixed-use communities across Coimbatore and Tirupur.
              </p>
              <p className="text-[16px] md:text-[18px] text-gray-700 leading-relaxed" style={{ fontFamily: 'Futura-Medium' }}>
                Each upcoming project will reflect our brand values of trust, quality and clarity, 
                designed for customers who seek secure investments and elegant living spaces.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Third Fold - What's Coming Next */}
      <section 
        className="relative py-20 md:py-32 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, 
            rgba(55, 64, 94, 0.8) 0%, 
            rgba(55, 64, 94, 0.6) 40%, 
            rgba(55, 64, 94, 0.5) 60%, 
            rgba(55, 64, 94, 0.9) 100%), 
            url('/images/upcoming project page - ff/images/third fold image.png')`,
          backgroundSize: '120% auto',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#37405E',
          minHeight: '900px'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 h-full">
          <div className="lg:grid lg:grid-cols-12 gap-8 items-start min-h-[850px]">
            {/* Left side - Content positioned in white area of image */}
            <motion.div
              className="lg:col-span-5 pt-4 lg:pt-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 
                className="text-[32px] md:text-[48px] font-normal text-white mb-6"
                style={{ 
                  fontFamily: 'DM Serif Display',
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #D3AC4A 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                What&apos;s <span style={{ color: '#D3AC4A' }}>Coming Next</span>
              </h2>
              <p 
                className="text-[16px] md:text-[18px] text-white leading-relaxed"
                style={{ 
                  fontFamily: 'Futura-Medium'
                }}
              >
                We are in the process of launching 3 to 6 new premium projects
                <br />in and around Coimbatore and Tirupur, focused on:
              </p>
            </motion.div>

            {/* Right side - Feature Cards */}
            <motion.div
              className="lg:col-span-6 lg:col-start-7 space-y-4 mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {[
                {
                  icon: "Vector 1.svg",
                  title: "Prime locations",
                  description: "Easily accessible, high-appreciation zones"
                },
                {
                  icon: "Vector 2.svg", 
                  title: "Premium Investment Value",
                  description: "Ideal for both families and long-term investors"
                },
                {
                  icon: "Vector 3.svg",
                  title: "DTCP & RERA approvals", 
                  description: "Legally verified, transparent developments"
                },
                {
                  icon: "Vector 4.svg",
                  title: "Modern infrastructure",
                  description: "Gated layouts, villas, and commercial-ready spaces"
                },
                {
                  icon: "Vector 5.svg",
                  title: "Timely launches", 
                  description: "Each project delivered with the same Fair Field promise of quality and care"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg p-10 shadow-lg flex items-start space-x-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-[#D3AC4A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Image
                      src={`/images/upcoming project page - ff/icons/third fold/${feature.icon}`}
                      alt={feature.title}
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[20px] font-bold text-[#37405E] mb-2" style={{ fontFamily: 'Futura-Heavy' }}>
                      {feature.title}
                    </h3>
                    <p className="text-[16px] text-gray-600" style={{ fontFamily: 'Futura-Medium' }}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fourth Fold - Register Interest */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 
                className="text-[32px] md:text-[48px] font-normal mb-6"
                style={{ 
                  fontFamily: 'DM Serif Display',
                  background: 'linear-gradient(135deg, #37405E 0%, #D3AC4A 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Register your <span style={{ color: '#D3AC4A' }}>Interest early</span>
              </h2>
              <p 
                className="text-[16px] md:text-[18px] text-gray-700 leading-relaxed mb-8"
                style={{ fontFamily: 'Futura-Medium' }}
              >
                While our next set of projects is under planning and approval, we
                welcome early inquiries from buyers and investors who want to:
              </p>
              <div className="space-y-4">
                {[
                  "Receive priority notifications on new launches",
                  "Get early-bird access to premium plots and villas",
                  "Enjoy exclusive pre-launch offers and pricing"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#D3AC4A] rounded-full"></div>
                    <p className="text-[16px] text-gray-700" style={{ fontFamily: 'Futura-Medium' }}>
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/upcoming project page - ff/images/fourth fold image - upcoming project page.jpg"
                  alt="Premium Development Planning"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fifth Fold - Get in Touch */}
      <section 
        className="relative py-12 md:py-20 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, 
            rgba(55, 64, 94, 0.8) 0%, 
            rgba(55, 64, 94, 0.7) 100%), 
            url('/images/upcoming project page - ff/images/fifth fold - bg image - upcoming project page.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          minHeight: '550px'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 
                className="text-[32px] md:text-[48px] font-normal text-white mb-6"
                style={{ fontFamily: 'DM Serif Display' }}
              >
                Get in <span style={{ color: '#D3AC4A' }}>Touch</span>
              </h2>
              <p 
                className="text-[16px] md:text-[18px] text-white leading-relaxed mb-8"
                style={{ fontFamily: 'Futura-Medium' }}
              >
                Be among the first to know when our new premium projects
                open for booking. Reach out today, our team will keep you
                informed and guide you to the right opportunity.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 shadow-xl"
              style={{ borderTopRightRadius: '2rem', borderBottomLeftRadius: '2rem' }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#37405E] rounded-full flex items-center justify-center">
                    <img
                      src="/images/upcoming project page - ff/icons/fifth fold/call (1).svg"
                      alt="Phone"
                      width="20"
                      height="20"
                      className="w-5 h-5 filter brightness-0 invert"
                    />
                  </div>
                  <div>
                    <p className="text-[18px] font-bold text-[#37405E]" style={{ fontFamily: 'Futura-Heavy' }}>
                      +91 79008 82288 | +91 79008 84488
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#37405E] rounded-full flex items-center justify-center">
                    <img
                      src="/images/upcoming project page - ff/icons/fifth fold/mail Vector.svg"
                      alt="Email"
                      width="20"
                      height="20"
                      className="w-5 h-5 filter brightness-0 invert"
                    />
                  </div>
                  <div>
                    <p className="text-[18px] font-bold text-[#37405E]" style={{ fontFamily: 'Futura-Heavy' }}>
                      fairfieldsales2024@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#37405E] rounded-full flex items-center justify-center">
                    <img
                      src="/images/upcoming project page - ff/icons/fifth fold/address.svg"
                      alt="Address"
                      width="20"
                      height="20"
                      className="w-5 h-5 filter brightness-0 invert"
                    />
                  </div>
                  <div>
                    <p className="text-[16px] font-medium text-[#37405E]" style={{ fontFamily: 'Futura-Medium' }}>
                      163A, Thiruvenkatasamy Road (West), R.S.
                      Puram, Coimbatore – 641002
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    className="bg-[#D3AC4A] text-[#37405E] px-6 py-3 rounded-lg font-bold text-[16px] hover:bg-[#C19B42] transition-colors book-visit-button flex-1"
                    style={{ fontFamily: 'Futura-Heavy' }}
                  >
                    Register your Interest →
                  </button>
                  <button 
                    className="bg-[#37405E] text-white px-6 py-3 rounded-lg font-bold text-[16px] hover:bg-[#2A2F47] transition-colors call-us-button flex-1"
                    style={{ fontFamily: 'Futura-Heavy' }}
                  >
                    Get WhatsApp Updates
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sixth Fold - Our Promise */}
      <section className="relative py-16" style={{ backgroundColor: '#F8F6F1' }}>
        <div className="flex min-h-[400px]">
          {/* Left side - Image */}
          <motion.div
            className="relative w-1/2 flex-shrink-0"
            style={{ backgroundColor: '#F8F6F1' }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/upcoming project page - ff/images/sixth fold image - upcoming project page.png"
              alt="Our Promise - Building opportunities"
              fill
              className="object-contain"
            />
          </motion.div>
          
          {/* Right side - Content */}
          <motion.div
            className="w-1/2 flex items-center justify-center relative px-8 lg:px-16"
            style={{ backgroundColor: '#F8F6F1' }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Large quote marks - positioned within right content area only */}
            <div className="absolute top-4 right-8 text-[#D3AC4A] text-[120px] leading-none font-serif z-10">
              &#8221;
            </div>
            
            <div className="relative z-20 text-center">
              <h2 
                className="text-[32px] md:text-[48px] font-normal mb-6"
                style={{ 
                  fontFamily: 'DM Serif Display',
                  background: 'linear-gradient(90deg, #37405E 0%, #D3AC4A 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Our Promise
              </h2>
              
              <p 
                className="text-[16px] md:text-[18px] text-black leading-relaxed max-w-md"
                style={{ fontFamily: 'Futura-Medium' }}
              >
                "We are not just planning new projects, we are building new opportunities for families and investors to grow with us."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <UniversalFooter />
    </main>
  );
}