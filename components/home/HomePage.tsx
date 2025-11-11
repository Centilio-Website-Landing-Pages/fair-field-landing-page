'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import UniversalFooter from '../shared/footer/UniversalFooter';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - First Fold - Group 1.1.1 Design */}
      <section className="relative h-screen overflow-hidden">
        {/* Step-shaped background with curved cuts */}
        <div className="absolute inset-0 z-0">
          {/* Main villa background image */}
          <img
            src="/images/home page - ff/images/first fold image.png"
            alt="Fair Field Premium Villa"
            className="w-full h-full object-cover"
          />
        </div>

        {/* White step-shaped area for Schedule button */}
        <div className="absolute top-0 right-0 z-15">
          <div 
            className="bg-white"
            style={{
              width: '350px',
              height: '120px',
              clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)'
            }}
          />
        </div>

        {/* Navigation Header */}
        <nav className="absolute top-0 left-0 right-0 z-30 bg-transparent">
          <div className="max-w-7xl mx-auto px-8 py-8">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img
                  src="/images/logo/FFS LOGO DIFFERENCE-01.png"
                  alt="FFS Logo"
                  
                  
                  className="h-12 w-auto"
                />
              </motion.div>
              
              {/* Navigation Menu */}
              <motion.div 
                className="hidden lg:flex items-center space-x-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link href="/" className="text-[#D3AC4A] font-medium text-lg" style={{ fontFamily: 'Futura-Medium' }}>Home</Link>
                <Link href="/about-us" className="text-white hover:text-[#D3AC4A] transition-colors text-lg" style={{ fontFamily: 'Futura-Medium' }}>About us</Link>
                <Link href="/projects" className="text-white hover:text-[#D3AC4A] transition-colors text-lg" style={{ fontFamily: 'Futura-Medium' }}>Project</Link>
                <Link href="/blog" className="text-white hover:text-[#D3AC4A] transition-colors text-lg" style={{ fontFamily: 'Futura-Medium' }}>Blog</Link>
                <Link href="/careers" className="text-white hover:text-[#D3AC4A] transition-colors text-lg" style={{ fontFamily: 'Futura-Medium' }}>Careers</Link>
                <Link href="/contact" className="text-white hover:text-[#D3AC4A] transition-colors text-lg" style={{ fontFamily: 'Futura-Medium' }}>Contact</Link>
              </motion.div>
              
              {/* Empty space for button positioning */}
              <div className="w-56"></div>
            </div>
          </div>
        </nav>

        {/* Schedule a Visit Button - Positioned over white step area */}
        <motion.div 
          className="absolute top-6 right-12 z-40"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button 
            className="bg-[#D3AC4A] text-[#37405E] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#C19B42] transition-colors flex items-center space-x-3 shadow-lg"
            style={{ fontFamily: 'Futura-Heavy' }}
          >
            <span>Schedule a visit</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"/>
            </svg>
          </button>
        </motion.div>
        
        {/* Main Content Container */}
        <div className="relative z-20 h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-8 w-full">
            <div className="flex items-center justify-between">
              {/* Left Content - Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex-1 max-w-2xl"
              >
                <h1 className="text-6xl xl:text-7xl leading-tight mb-12 text-white" style={{ fontFamily: 'DM Serif Display' }}>
                  Premium <span className="text-[#D3AC4A]">homes and investments</span> you can <span className="text-[#D3AC4A]">trust</span>
                </h1>
                
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#D3AC4A] text-[#37405E] px-10 py-5 rounded-lg font-bold text-xl flex items-center gap-3 hover:bg-[#C19A3A] transition-all shadow-2xl"
                  style={{ fontFamily: 'Futura-Heavy' }}
                >
                  Book your visit today
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </motion.button>
              </motion.div>

              {/* Right Content - Floating Cards exactly as reference */}
              <div className="relative flex-1 max-w-md">
                {/* 100+ Successful Projects Card - Rounded bottom-left */}
                <motion.div
                  initial={{ opacity: 0, x: 50, y: -20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/5 p-6 mb-6 shadow-xl relative"
                  style={{ borderRadius: '8px 8px 8px 24px' }}
                >
                  <div>
                    <h3 className="text-4xl font-bold text-white mb-2 drop-shadow-lg" style={{ fontFamily: 'DM Serif Display', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>100+</h3>
                    <p className="text-white text-base font-medium leading-relaxed drop-shadow-lg" style={{ fontFamily: 'Futura-Medium', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                      Successful Projects Delivered
                    </p>
                  </div>
                  {/* Golden circle at bottom-left rounded corner */}
                  <div className="absolute bottom-2 left-2 w-3 h-3 bg-[#D3AC4A] rounded-full"></div>
                </motion.div>

                {/* DTCP Approved Card - Rounded top-right */}
                <motion.div
                  initial={{ opacity: 0, x: 50, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/5 p-6 shadow-xl relative"
                  style={{ borderRadius: '8px 24px 8px 8px' }}
                >
                  {/* Golden circle at top-right rounded corner */}
                  <div className="absolute top-2 right-2 w-3 h-3 bg-[#D3AC4A] rounded-full"></div>
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg" style={{ fontFamily: 'DM Serif Display', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>DTCP Approved</h3>
                  </div>
                  <p className="text-white text-base leading-relaxed font-medium drop-shadow-lg" style={{ fontFamily: 'Futura-Medium', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                    All our projects are legally verified and RERA-registered for your peace of mind.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction - Second Fold */}
      <section className="bg-white" style={{ height: '674px' }}>
        <div className="mx-auto flex items-center h-full" style={{ maxWidth: '1280px' }}>
          <div className="flex items-center justify-between w-full px-12">
            {/* Left Content - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1"
              style={{ maxWidth: '448px' }}
            >
              <div className="space-y-8">
                <p className="font-futura-medium text-black" style={{ 
                  fontSize: '16px', 
                  fontWeight: 500, 
                  lineHeight: '42px', 
                  letterSpacing: '0px' 
                }}>
                  Welcome to Fair Field Shelters Pvt. Ltd., Coimbatore&rsquo;s trusted name for premium plots, villas, and commercial projects. We create properties that bring together clarity, comfort, and class. So every home or investment you make with us truly becomes a promise kept.
                </p>
                <p className="font-futura-medium text-black" style={{ 
                  fontSize: '16px', 
                  fontWeight: 500, 
                  lineHeight: '42px', 
                  letterSpacing: '0px' 
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
              className="relative"
              style={{ width: '732px', height: '524px' }}
            >
              {/* First Image - Tallest, center position */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute overflow-hidden"
                style={{ 
                  width: '228px', 
                  height: '524px',
                  left: '252px',
                  top: '0px',
                  borderRadius: '50px 40px 5px 5px',
                  boxShadow: '0px 0px 50px rgba(55, 64, 94, 0.6)'
                }}
              >
                <img
                  src="/images/home page - ff/images/second fold images/second fold image full size.png"
                  alt="Fair Field Entrance Gate"
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '5px' }}
                />
              </motion.div>

              {/* Second Image - Middle height, right position */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute overflow-hidden"
                style={{ 
                  width: '228px', 
                  height: '468px',
                  left: '504px',
                  top: '56px',
                  borderRadius: '50px 40px 5px 5px',
                  boxShadow: '0px 0px 50px rgba(55, 64, 94, 0.6)'
                }}
              >
                <img
                  src="/images/current project page - ff/vaagai/images/vagai hp - second fold image.png"
                  alt="Vaagai Project Development"
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '5px' }}
                />
              </motion.div>

              {/* Third Image - Middle height, left position */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute overflow-hidden"
                style={{ 
                  width: '228px', 
                  height: '468px',
                  left: '0px',
                  top: '56px',
                  borderRadius: '50px 40px 5px 5px',
                  boxShadow: '0px 0px 50px rgba(55, 64, 94, 0.6)'
                }}
              >
                <img
                  src="/images/current project page - ff/Anicham/images/anicham-second fold image.png"
                  alt="Anicham Magilam Project"
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '5px' }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Four Promises - Third Fold */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                className="text-4xl lg:text-5xl mb-12 leading-tight"
                style={{ fontFamily: 'DM Serif Display' }}
              >
                <span className="text-[#37405E]">Our </span>
                <span className="text-[#D3AC4A]">Four Promises</span>
              </motion.h2>

              {/* Paint Brush Image Container with Artistic Effect */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative w-full max-w-lg mx-auto lg:mx-0"
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

            {/* Right Content - Four Promise Cards */}
            {/* Cards will be added here */}
          </div>
        </div>
      </section>

      {/* Ongoing Projects - Fourth Fold */}
      <section className="py-24 bg-white">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 px-4"
          >
            <h2 className="text-4xl lg:text-5xl mb-6" style={{ fontFamily: 'DM Serif Display' }}>
              <span className="text-[#37405E]">Ongoing </span><span className="text-[#D3AC4A]">Projects</span>
            </h2>
          </motion.div>

          <div className="space-y-16">
            {/* Anicham & Magilam Project */}
            <div className="w-full px-4 lg:px-8">
              <div className="grid lg:grid-cols-[20%_45%_35%] gap-6 lg:gap-8 items-start w-full">
                {/* Left Content - Project Title */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div className="text-left">
                    <h3 className="text-2xl lg:text-3xl mb-2 font-medium" style={{ fontFamily: 'DM Serif Display' }}>
                      <span className="text-[#37405E]">Anicham &</span><br />
                      <span className="text-[#D3AC4A]">Magilam</span><span className="text-[#37405E]"> -</span>
                    </h3>
                    <h4 className="text-lg lg:text-xl leading-tight" style={{ fontFamily: 'DM Serif Display' }}>
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
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#D3AC4A] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <svg className="w-4 h-4 text-[#37405E]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium text-[#37405E] text-base" style={{ fontFamily: 'Futura-Medium' }}>Type: Premium villas & DTCP-approved Plots</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#D3AC4A] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <svg className="w-4 h-4 text-[#37405E]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium text-[#37405E] text-base" style={{ fontFamily: 'Futura-Medium' }}>Location: Ramanathapuram to Nanjundapuram Road (Near Parsn Apartments)</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#D3AC4A] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <img
                          src="/icons/fourth-fold/anicham/vector-3.svg"
                          alt="Price Icon"
                          
                          
                          className="w-4 h-4"
                        />
                      </div>
                      <div>
                        <span className="font-medium text-[#37405E] text-base" style={{ fontFamily: 'Futura-Medium' }}>Price: Land from ₹19.90 Lakhs /cent | Villas from ₹1.79 Cr onwards</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#D3AC4A] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <img
                          src="/icons/fourth-fold/anicham/vector-4.svg"
                          alt="Status Icon"
                          
                          
                          className="w-4 h-4"
                        />
                      </div>
                      <div>
                        <span className="font-medium text-[#37405E] text-base" style={{ fontFamily: 'Futura-Medium' }}>Status: Ongoing</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#D3AC4A] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <img
                          src="/icons/fourth-fold/anicham/vector-5.svg"
                          alt="Approvals Icon"
                          
                          
                          className="w-4 h-4"
                        />
                      </div>
                      <div>
                        <span className="font-medium text-[#37405E] text-base" style={{ fontFamily: 'Futura-Medium' }}>Approvals: DTCP & RERA (No. 346/2021 & 351/2021)</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Features Bar for Anicham */}
            <div className="w-full px-4 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-[#37405E] rounded-2xl p-6 lg:p-8 w-full"
              >
                <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-5 h-5 bg-[#D3AC4A] rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
                      </svg>
                    </div>
                    <span className="font-medium" style={{ fontFamily: 'Futura-Medium' }}>Gated community</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-5 h-5 bg-[#D3AC4A] rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
                      </svg>
                    </div>
                    <span className="font-medium" style={{ fontFamily: 'Futura-Medium' }}>Wide roads</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-5 h-5 bg-[#D3AC4A] rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
                      </svg>
                    </div>
                    <span className="font-medium" style={{ fontFamily: 'Futura-Medium' }}>EB</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-5 h-5 bg-[#D3AC4A] rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
                      </svg>
                    </div>
                    <span className="font-medium" style={{ fontFamily: 'Futura-Medium' }}>Water</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-5 h-5 bg-[#D3AC4A] rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
                      </svg>
                    </div>
                    <span className="font-medium" style={{ fontFamily: 'Futura-Medium' }}>CCTV</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-5 h-5 bg-[#D3AC4A] rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
                      </svg>
                    </div>
                    <span className="font-medium" style={{ fontFamily: 'Futura-Medium' }}>20-25% value growth potential</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Vaagai Project */}
            <div className="w-full px-4 lg:px-8">
              <div className="grid lg:grid-cols-[20%_45%_35%] gap-6 lg:gap-8 items-start w-full">
                {/* Left Content - Project Title */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div className="text-left">
                    <h3 className="text-2xl lg:text-3xl mb-2 font-medium" style={{ fontFamily: 'DM Serif Display' }}>
                      <span className="text-[#D3AC4A]">Vaagai</span><span className="text-[#37405E]"> -</span>
                    </h3>
                    <h4 className="text-lg lg:text-xl leading-tight" style={{ fontFamily: 'DM Serif Display' }}>
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
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#D3AC4A] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <img
                          src="/icons/fourth-fold/vaagai/vector-1.svg"
                          alt="Document Icon"
                          
                          
                          className="w-4 h-4"
                        />
                      </div>
                      <div>
                        <span className="font-medium text-[#37405E] text-base" style={{ fontFamily: 'Futura-Medium' }}>Type: DTCP approved premium layout</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#D3AC4A] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <img
                          src="/icons/fourth-fold/vaagai/vector-2.svg"
                          alt="Location Icon"
                          
                          
                          className="w-4 h-4"
                        />
                      </div>
                      <div>
                        <span className="font-medium text-[#37405E] text-base" style={{ fontFamily: 'Futura-Medium' }}>Location: Subramaniya Udaiyar Street, Telungupalayam</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#D3AC4A] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <img
                          src="/icons/fourth-fold/vaagai/vector-3.svg"
                          alt="Price Icon"
                          
                          
                          className="w-4 h-4"
                        />
                      </div>
                      <div>
                        <span className="font-medium text-[#37405E] text-base" style={{ fontFamily: 'Futura-Medium' }}>₹21 Lakhs /cent</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#D3AC4A] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <img
                          src="/icons/fourth-fold/vaagai/vector-4.svg"
                          alt="Completion Icon"
                          
                          
                          className="w-4 h-4"
                        />
                      </div>
                      <div>
                        <span className="font-medium text-[#37405E] text-base" style={{ fontFamily: 'Futura-Medium' }}>Completion: December 2025</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Features Bar for Vaagai */}
            <div className="w-full px-4 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-[#37405E] rounded-2xl p-6 lg:p-8 w-full"
              >
                <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-5 h-5 bg-[#D3AC4A] rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
                      </svg>
                    </div>
                    <span className="font-medium" style={{ fontFamily: 'Futura-Medium' }}>Developed layout</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-5 h-5 bg-[#D3AC4A] rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
                      </svg>
                    </div>
                    <span className="font-medium" style={{ fontFamily: 'Futura-Medium' }}>Drainage</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-5 h-5 bg-[#D3AC4A] rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
                      </svg>
                    </div>
                    <span className="font-medium" style={{ fontFamily: 'Futura-Medium' }}>Streetlights</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-5 h-5 bg-[#D3AC4A] rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
                      </svg>
                    </div>
                    <span className="font-medium" style={{ fontFamily: 'Futura-Medium' }}>Security</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-5 h-5 bg-[#D3AC4A] rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
                      </svg>
                    </div>
                    <span className="font-medium" style={{ fontFamily: 'Futura-Medium' }}>Easy access to Palakkad Bypass & Airport</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-5 h-5 bg-[#D3AC4A] rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
                      </svg>
                    </div>
                    <span className="font-medium" style={{ fontFamily: 'Futura-Medium' }}>25-40% appreciation</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Completed Projects - Fifth Fold */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif text-[#37405E] mb-6">
              Completed <span className="text-[#D3AC4A]">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-sans">
              Explore our successfully delivered projects that showcase our commitment to quality and excellence in residential development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Project 1 - Kotagiri Serene Villas */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <img
                  src="/images/home page - ff/images/fifth fold/image 1.png"
                  alt="Kotagiri Serene Villas"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#37405E] mb-2 font-serif">Kotagiri Serene Villas</h3>
              </div>
            </motion.div>

            {/* Project 2 - Kurinjee Nagar Phase 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <div className="relative h-64">
                <img
                  src="/images/home page - ff/images/fifth fold/image 2.png"
                  alt="Kurinjee Nagar Phase 1"
                  className="w-full h-full object-cover"
                />
                {/* Overlay with project info */}
                <div className="absolute bottom-4 left-4 bg-[#37405E]/90 backdrop-blur-sm rounded-lg p-4 text-white">
                  <div className="flex items-center space-x-4 text-sm font-sans">
                    <div className="text-center">
                      <div className="font-semibold">2023</div>
                    </div>
                    <div className="w-px h-8 bg-white/30"></div>
                    <div className="text-center">
                      <div className="font-semibold">106 Plots</div>
                    </div>
                    <div className="w-px h-8 bg-white/30"></div>
                    <div className="text-center">
                      <div className="font-semibold text-[#D3AC4A]">Sold Out</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#37405E] mb-2 font-serif">Kurinjee Nagar Phase 1</h3>
              </div>
            </motion.div>

            {/* Project 3 - Kurinjee Nagar Phase 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <div className="relative h-64">
                <img
                  src="/images/home page - ff/images/fifth fold/image 3.png"
                  alt="Kurinjee Nagar Phase 2"
                  className="w-full h-full object-cover"
                />
                {/* Overlay with project info */}
                <div className="absolute bottom-4 left-4 bg-[#37405E]/90 backdrop-blur-sm rounded-lg p-4 text-white">
                  <div className="flex items-center space-x-4 text-sm font-sans">
                    <div className="text-center">
                      <div className="font-semibold">2023</div>
                    </div>
                    <div className="w-px h-8 bg-white/30"></div>
                    <div className="text-center">
                      <div className="font-semibold">34 Plots</div>
                    </div>
                    <div className="w-px h-8 bg-white/30"></div>
                    <div className="text-center">
                      <div className="font-semibold text-[#D3AC4A]">Fully Sold</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#37405E] mb-2 font-serif">Kurinjee Nagar Phase 2</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Happy Buyer Stories - Sixth Fold */}
      <section className="py-24 bg-gray-50">
        <div className="w-full px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif text-[#37405E] mb-6">
              Happy Buyer <span className="text-[#D3AC4A]">Stories</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
            {/* Left - Image with Background Design */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Curved Border Lines Design */}
              <div className="absolute -inset-12 -z-10">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 700 600"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 100 Q350 50 600 100 Q650 300 600 500 Q350 550 100 500 Q50 300 100 200 Z"
                    fill="none"
                    stroke="#5B9BD5"
                    strokeWidth="4"
                    opacity="0.8"
                  />
                  <path
                    d="M120 120 Q350 70 580 120 Q620 300 580 480 Q350 520 120 480 Q80 300 120 220 Z"
                    fill="none"
                    stroke="#4A90E2"
                    strokeWidth="3"
                    opacity="0.6"
                  />
                </svg>
              </div>
              
              <div className="relative w-full h-96 lg:h-[500px] rounded-[40px] overflow-hidden shadow-2xl z-10">
                <img
                  src="/images/home page - ff/images/sixth fold Vector.jpg"
                  alt="Happy Customer at Fair Field Project"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right - Testimonial */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#37405E] rounded-[30px] p-8 lg:p-12 text-white relative"
            >
              <div className="relative z-10">
                <blockquote className="text-lg lg:text-xl leading-relaxed mb-8 font-light">
                  &ldquo;I live overseas. The Fair Field team kept me updated with photos and reports. Everything was smooth and transparent.&rdquo;
                </blockquote>
                
                <div className="border-t border-white/20 pt-6">
                  <div className="font-semibold text-xl mb-1">Ms. Lavanya</div>
                  <div className="text-[#D3AC4A] font-medium">Singapore</div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-8 justify-end">
                <button className="w-12 h-12 bg-[#D3AC4A] rounded-full flex items-center justify-center hover:bg-[#D3AC4A]/80 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="w-12 h-12 bg-[#D3AC4A] rounded-full flex items-center justify-center hover:bg-[#D3AC4A]/80 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How we work - Seventh Fold */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif text-[#37405E] mb-6">
              How we <span className="text-[#D3AC4A]">work</span>
            </h2>
            <p className="text-lg text-[#37405E] max-w-4xl mx-auto font-sans">
              We take care of every step from documents and loans to construction and after-sale service. So, your property journey stays simple and stress-free.
            </p>
          </motion.div>

          {/* Process flow - Zigzag pattern exactly as reference */}
          <div className="relative max-w-7xl mx-auto">
            {/* Dotted connecting lines - Zigzag pattern */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="100%" height="250" className="absolute">
                {/* Zigzag dotted lines connecting each step */}
                <path d="M180 80 Q240 120, 300 160" stroke="#D3AC4A" strokeWidth="2" strokeDasharray="4,4" fill="none" opacity="0.8" />
                <path d="M420 160 Q480 120, 540 80" stroke="#D3AC4A" strokeWidth="2" strokeDasharray="4,4" fill="none" opacity="0.8" />
                <path d="M660 80 Q720 120, 780 160" stroke="#D3AC4A" strokeWidth="2" strokeDasharray="4,4" fill="none" opacity="0.8" />
                <path d="M900 160 Q960 120, 1020 80" stroke="#D3AC4A" strokeWidth="2" strokeDasharray="4,4" fill="none" opacity="0.8" />
                <path d="M1140 80 Q1200 120, 1260 160" stroke="#D3AC4A" strokeWidth="2" strokeDasharray="4,4" fill="none" opacity="0.8" />
                <path d="M1380 160 Q1440 120, 1500 80" stroke="#D3AC4A" strokeWidth="2" strokeDasharray="4,4" fill="none" opacity="0.8" />
                <path d="M1620 80 Q1680 120, 1740 160" stroke="#D3AC4A" strokeWidth="2" strokeDasharray="4,4" fill="none" opacity="0.8" />
              </svg>
            </div>

            {/* Zigzag layout - exactly as reference */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-8 gap-8 lg:gap-4 items-center">
              
              {/* Row 1: Site Visit (top) */}
              <div className="lg:col-span-2 flex justify-center">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6, delay: 0.1 }} 
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-[#37405E] rounded-full flex items-center justify-center shadow-lg mb-3">
                    <img
src="/images/home page - ff/icons/first fold icon.svg"
                      alt="Site Visit"
                      
                      
                      className="brightness-0 invert"
                    />
                  </div>
                  <div className="bg-white rounded-xl px-4 py-2 shadow-lg">
                    <span className="text-[#37405E] font-semibold text-sm">Site Visit</span>
                  </div>
                </motion.div>
              </div>

              {/* Row 1: Inquiry (bottom) */}
              <div className="lg:col-span-2 flex justify-center lg:mt-20">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6, delay: 0.2 }} 
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-white rounded-xl px-4 py-2 shadow-lg mb-3">
                    <span className="text-[#37405E] font-semibold text-sm">Inquiry</span>
                  </div>
                  <div className="w-16 h-16 bg-[#37405E] rounded-full flex items-center justify-center shadow-lg">
                    <img
src="/images/home page - ff/icons/first fold icon.svg"
                      alt="Inquiry"
                      
                      
                      className="brightness-0 invert"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Row 2: Booking (top) */}
              <div className="lg:col-span-2 flex justify-center">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6, delay: 0.3 }} 
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-[#37405E] rounded-full flex items-center justify-center shadow-lg mb-3">
                    <img
src="/images/home page - ff/icons/first fold icon.svg"
                      alt="Booking"
                      
                      
                      className="brightness-0 invert"
                    />
                  </div>
                  <div className="bg-white rounded-xl px-4 py-2 shadow-lg">
                    <span className="text-[#37405E] font-semibold text-sm">Booking</span>
                  </div>
                </motion.div>
              </div>

              {/* Row 2: Selection (bottom) */}
              <div className="lg:col-span-2 flex justify-center lg:mt-20">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6, delay: 0.4 }} 
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-white rounded-xl px-4 py-2 shadow-lg mb-3">
                    <span className="text-[#37405E] font-semibold text-sm">Selection</span>
                  </div>
                  <div className="w-16 h-16 bg-[#37405E] rounded-full flex items-center justify-center shadow-lg">
                    <img
src="/images/home page - ff/icons/first fold icon.svg"
                      alt="Selection"
                      
                      
                      className="brightness-0 invert"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Row 3: Construction (top) */}
              <div className="lg:col-span-2 flex justify-center">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6, delay: 0.5 }} 
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-[#37405E] rounded-full flex items-center justify-center shadow-lg mb-3">
                    <img
src="/images/home page - ff/icons/first fold icon.svg"
                      alt="Construction"
                      
                      
                      className="brightness-0 invert"
                    />
                  </div>
                  <div className="bg-white rounded-xl px-4 py-2 shadow-lg">
                    <span className="text-[#37405E] font-semibold text-sm">Construction</span>
                  </div>
                </motion.div>
              </div>

              {/* Row 3: Registration (bottom) */}
              <div className="lg:col-span-2 flex justify-center lg:mt-20">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6, delay: 0.6 }} 
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-white rounded-xl px-4 py-2 shadow-lg mb-3">
                    <span className="text-[#37405E] font-semibold text-sm">Registration</span>
                  </div>
                  <div className="w-16 h-16 bg-[#37405E] rounded-full flex items-center justify-center shadow-lg">
                    <img
src="/images/home page - ff/icons/first fold icon.svg"
                      alt="Registration"
                      
                      
                      className="brightness-0 invert"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Row 4: Support (top) */}
              <div className="lg:col-span-2 flex justify-center">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6, delay: 0.7 }} 
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-[#37405E] rounded-full flex items-center justify-center shadow-lg mb-3">
                    <img
src="/images/home page - ff/icons/first fold icon.svg"
                      alt="Support"
                      
                      
                      className="brightness-0 invert"
                    />
                  </div>
                  <div className="bg-white rounded-xl px-4 py-2 shadow-lg">
                    <span className="text-[#37405E] font-semibold text-sm">Support</span>
                  </div>
                </motion.div>
              </div>

              {/* Row 4: Handover (bottom) */}
              <div className="lg:col-span-2 flex justify-center lg:mt-20">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6, delay: 0.8 }} 
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-white rounded-xl px-4 py-2 shadow-lg mb-3">
                    <span className="text-[#37405E] font-semibold text-sm">Handover</span>
                  </div>
                  <div className="w-16 h-16 bg-[#37405E] rounded-full flex items-center justify-center shadow-lg">
                    <img
src="/images/home page - ff/icons/first fold icon.svg"
                      alt="Handover"
                      
                      
                      className="brightness-0 invert"
                    />
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Why choose Fair Field Shelters - Eighth Fold */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[500px]">
                {/* Organic blob background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#6B7B8F] to-[#4A5568] rounded-[50px] rotate-3 transform"></div>
                <div className="absolute inset-4 bg-gradient-to-tr from-[#5A6A7A] to-[#6B7B8F] rounded-[45px] -rotate-2 transform flex items-center justify-center">
                  {/* Illustration content */}
                  <img
                    src="/images/home page - ff/icons/eighth fold Vector.svg"
                    alt="Why choose Fair Field Shelters illustration"
                    
                    
                    className="relative z-10"
                  />
                </div>
                {/* Decorative border */}
                <div className="absolute -inset-2 border-2 border-[#D3AC4A] rounded-[55px] opacity-30"></div>
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
              <div>
                <h2 className="text-4xl lg:text-5xl font-serif text-[#D3AC4A] mb-4">
                  Why choose
                </h2>
                <h3 className="text-4xl lg:text-5xl font-serif text-[#37405E]">
                  Fair Field Shelters
                </h3>
              </div>

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
                    className="flex items-center space-x-4"
                  >
                    <div className="w-8 h-8 bg-[#D3AC4A] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-lg text-[#37405E] font-medium">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Book your site visit today - Ninth Fold */}
      <section 
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/home page - ff/images/nineth fold.png')`
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex justify-end">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-[40px] p-8 lg:p-12 max-w-lg shadow-2xl"
            >
              <h2 className="text-3xl lg:text-4xl font-serif text-[#37405E] mb-8">
                Book your site visit today
              </h2>

              <div className="space-y-6 mb-8">
                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#37405E] rounded-full flex items-center justify-center">
                    <img
                      src="/images/home page - ff/icons/nineth fold icon/call (1).svg"
                      alt="Phone"
                      
                      
                      className="brightness-0 invert"
                    />
                  </div>
                  <div>
                    <p className="text-[#37405E] font-semibold">+91 79008 82288 | +91 79008 84488</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#37405E] rounded-full flex items-center justify-center">
                    <img
                      src="/images/home page - ff/icons/nineth fold icon/mail Vector.svg"
                      alt="Email"
                      
                      
                      className="brightness-0 invert"
                    />
                  </div>
                  <div>
                    <p className="text-[#37405E] font-semibold">fairfieldsales2024@gmail.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#37405E] rounded-full flex items-center justify-center mt-1">
                    <img
                      src="/images/home page - ff/icons/nineth fold icon/address.svg"
                      alt="Address"
                      
                      
                      className="brightness-0 invert"
                    />
                  </div>
                  <div>
                    <p className="text-[#37405E] font-semibold">
                      163A, Thiruvenkatasamy Road (West), R.S. Puram, Coimbatore – 641002
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#D3AC4A] text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-[#D3AC4A]/90 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Book your visit today</span>
                  <img
                    src="/images/home page - ff/icons/nineth fold icon/cta arrow Vector.svg"
                    alt="Arrow"
                    
                    
                    className="brightness-0 invert"
                  />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#37405E] text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-[#37405E]/90 transition-colors"
                >
                  Call us now
                </motion.button>
              </div>
            </motion.div>
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