'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* First Fold - Step-shaped Background with Building Image */}
      <motion.section 
        className="relative h-screen overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Main Building Image Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/about us page - ff/images/first fold image to all except homepage.jpg"
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

        {/* Main Hero Content - Over building image */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="max-w-7xl mx-auto px-12 flex items-center justify-between w-full">
            {/* Left Side - Main Headline */}
            <motion.div
              className="flex-1 max-w-[608px]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h1 className="text-[64px] font-normal text-white drop-shadow-2xl mb-8" style={{ fontFamily: 'DM Serif Display', lineHeight: '80px' }}>
                Premium{' '}
                <span style={{ background: 'linear-gradient(135deg, #d3ac4a 0%, #fff8e9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  homes and investments
                </span>{' '}
                you can{' '}
                <span style={{ background: 'linear-gradient(135deg, #d3ac4a 0%, #fff8e9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  trust
                </span>
              </h1>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <button 
                  className="flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
                  style={{ 
                    backgroundColor: '#d3ac4a',
                    color: '#37405e',
                    width: '263px',
                    height: '51px',
                    borderRadius: '5px',
                    fontFamily: 'Futura-Heavy, Arial, sans-serif',
                    fontWeight: 900,
                    fontSize: '16px',
                    border: 'none',
                    cursor: 'pointer',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  Book your visit today
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"/>
                  </svg>
                </button>
              </motion.div>
            </motion.div>

            {/* Right Side - Statistics Cards */}
            <motion.div
              className="flex flex-col gap-6"
              style={{ width: '381px' }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {/* 100+ Projects Card */}
              <div 
                className="backdrop-blur-[14px] shadow-2xl flex items-center p-6"
                style={{ 
                  width: '381px',
                  height: '142px',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                  borderRadius: '30px',
                  border: '0.5px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <div className="flex items-center gap-4">
                  <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #f5dc9e 0%, #d3ac4a 100%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 10 5.16-.26 9-4.45 9-10V7l-10-5z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-bold text-[48px] leading-none">100+</div>
                    <div className="text-white font-medium text-[16px] opacity-90">Successful Projects Delivered</div>
                  </div>
                </div>
              </div>

              {/* DTCP Approved Card */}
              <div 
                className="backdrop-blur-[14px] shadow-2xl p-6"
                style={{ 
                  width: '381px',
                  height: '142px',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                  borderRadius: '30px',
                  border: '0.5px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <div>
                  <div className="text-white font-bold text-[28px] leading-tight mb-2">DTCP Approved</div>
                  <div className="text-white font-medium text-[16px] leading-relaxed opacity-90">
                    All our projects are legally verified and RERA-registered for your peace of mind.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Cream Breadcrumb Bar - Full width at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <motion.div 
            className="bg-[#F5F2E8] py-6 px-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center space-x-2 text-[16px] text-[#37405E] font-medium" style={{ fontFamily: 'Futura-Medium' }}>
                <span>Home</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Company Introduction - Second Fold */}
      <section className="bg-white" style={{ height: '674px' }}>
        <div className="mx-auto flex items-center h-full" style={{ maxWidth: '1280px' }}>
          <div className="flex items-center justify-between w-full px-12">
            {/* Left Content - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
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
                  Welcome to Fair Field Shelters Pvt. Ltd., Coimbatore's trusted name for premium plots, villas, and commercial projects. We create properties that bring together clarity, comfort, and class. So every home or investment you make with us truly becomes a promise kept.
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
              className="relative"
              style={{ width: '732px', height: '524px' }}
            >
              {/* First Image - Tallest, left position */}
              <div 
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
                <Image
                  src="/images/home page - ff/images/second fold images/second fold image full size.png"
                  alt="Fair Field Entrance Gate"
                  fill
                  className="object-cover"
                  style={{ borderRadius: '5px' }}
                />
              </div>

              {/* Second Image - Middle height, center position */}
              <div 
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
                <Image
                  src="/images/home page - ff/images/second fold images/second fold image full size.png"
                  alt="Fair Field Infrastructure"
                  fill
                  className="object-cover"
                  style={{ borderRadius: '5px' }}
                />
              </div>

              {/* Third Image - Middle height, right position */}
              <div 
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
                <Image
                  src="/images/home page - ff/images/second fold images/second fold image full size.png"
                  alt="Fair Field Anicham Magilam"
                  fill
                  className="object-cover"
                  style={{ borderRadius: '5px' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Four Promises - Third Fold */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Handshake Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <h2 className="text-4xl font-bold text-slate-800 mb-8">
                Our <span className="text-yellow-600">Four Promises</span>
              </h2>
              
              {/* Handshake Image with Artistic Frame */}
              <div className="relative">
                <Image
                  src="/images/home page - ff/images/third fold images/third Clip path group.png"
                  alt="Handshake Promise"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Right Side - Promise Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Legal Clarity */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 10 5.16-.26 9-4.45 9-10V7l-10-5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Legal Clarity</h3>
                    <p className="text-gray-600">
                      All our projects are DTCP-approved and RERA-registered, with clean documents and verified ownership giving you complete peace of mind.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Strong Returns */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-yellow-500 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Strong Returns</h3>
                    <p className="text-slate-700">
                      Our locations are carefully chosen in fast-developing areas of Coimbatore and Nilgiris, offering steady appreciation and resale value.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Premium Quality */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Premium Quality</h3>
                    <p className="text-gray-600">
                      We design modern layouts, wide roads, parks, and secure gated communities to create a lifestyle you can be proud of.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Transparent Service */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-yellow-500 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Transparent Service</h3>
                    <p className="text-slate-700">
                      From site visit to handover, we guide you step by step with honest communication and professional support.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ongoing Projects - Third Fold */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ongoing Projects</h2>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <Image
                src="/images/home page - ff/images/third fold images/third fold full size.jpg"
                alt="Anicham & Magilam Project"
                width={500}
                height={300}
                className="rounded-xl mb-6 w-full h-64 object-cover"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Anicham & Magilam – Ramanathapuram, Coimbatore
              </h3>
              <div className="space-y-2 text-gray-600 mb-6">
                <p><strong>Type:</strong> Premium villas & DTCP-approved Plots</p>
                <p><strong>Location:</strong> Ramanathapuram to Nanjundapuram Road (Near Parsn Apartments)</p>
                <p><strong>Price:</strong> Land from ₹19.90 Lakhs /cent | Villas from ₹1.79 Cr onwards</p>
                <p><strong>Status:</strong> Ongoing</p>
                <p><strong>Approvals:</strong> DTCP & RERA (No. 346/2021 & 351/2021)</p>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-yellow-600 font-semibold">Gated community</div>
                </div>
                <div className="text-center">
                  <div className="text-yellow-600 font-semibold">Wide roads</div>
                </div>
                <div className="text-center">
                  <div className="text-yellow-600 font-semibold">CCTV</div>
                </div>
                <div className="text-center">
                  <div className="text-yellow-600 font-semibold">EB</div>
                </div>
                <div className="text-center">
                  <div className="text-yellow-600 font-semibold">Water</div>
                </div>
                <div className="text-center">
                  <div className="text-yellow-600 font-semibold">20–25% value growth</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <Image
                src="/images/home page - ff/images/fourth fold/part 2/vaagai image 1.png"
                alt="Vaagai Project"
                width={500}
                height={300}
                className="rounded-xl mb-6 w-full h-64 object-cover"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Vaagai – Telungupalayam, Coimbatore
              </h3>
              <div className="space-y-2 text-gray-600 mb-6">
                <p><strong>Type:</strong> DTCP approved premium layout</p>
                <p><strong>Location:</strong> Subramaniya Udaiyar Street, Telungupalayam</p>
                <p><strong>Price:</strong> ₹21 Lakhs /cent</p>
                <p><strong>Completion:</strong> December 2025</p>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-yellow-600 font-semibold">Developed layout</div>
                </div>
                <div className="text-center">
                  <div className="text-yellow-600 font-semibold">Drainage</div>
                </div>
                <div className="text-center">
                  <div className="text-yellow-600 font-semibold">Streetlights</div>
                </div>
                <div className="text-center">
                  <div className="text-yellow-600 font-semibold">Security</div>
                </div>
                <div className="text-center">
                  <div className="text-yellow-600 font-semibold">Easy airport access</div>
                </div>
                <div className="text-center">
                  <div className="text-yellow-600 font-semibold">25–40% appreciation</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Completed Projects - Fourth Fold */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Completed Projects</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <Image
                src="/images/home page - ff/images/fifth fold/image 1.png"
                alt="Kotagiri Serene Villas"
                width={400}
                height={250}
                className="rounded-xl mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Kotagiri Serene Villas
              </h3>
              <p className="text-gray-600">Nilgiris</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="relative rounded-xl mb-4 overflow-hidden">
                <Image
                  src="/images/home page - ff/images/fifth fold/image 2.png"
                  alt="Kurinjee Nagar Phase 1"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-slate-800/80 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold mb-1">2023</div>
                    <div className="text-lg mb-1">106 Plots</div>
                    <div className="text-lg font-semibold">Sold Out</div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Kurinjee Nagar Phase 1
              </h3>
              <p className="text-gray-600">Vedapatty</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="relative rounded-xl mb-4 overflow-hidden">
                <Image
                  src="/images/home page - ff/images/fifth fold/image 3.png"
                  alt="Kurinjee Nagar Phase 2"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-slate-800/80 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold mb-1">2023</div>
                    <div className="text-lg mb-1">34 Plots</div>
                    <div className="text-lg font-semibold">Fully Sold</div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Kurinjee Nagar Phase 2
              </h3>
              <p className="text-gray-600">Vedapatty</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Happy Buyer Stories - Fifth Fold */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Happy Buyer Stories</h2>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Project Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                {/* Decorative Border */}
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-200 to-blue-100 rounded-3xl transform rotate-2"></div>
                <div className="relative bg-white p-2 rounded-2xl shadow-xl">
                  <Image
                    src="/images/home page - ff/images/sixth fold image.png"
                    alt="Fair Field Vaagai Project"
                    width={500}
                    height={350}
                    className="rounded-xl w-full h-80 object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Side - Testimonial Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-slate-800 rounded-2xl p-8 text-white relative">
                <blockquote className="text-lg mb-6 leading-relaxed">
                  "I live overseas. The Fair Field team kept me updated with photos and reports. Everything was smooth and transparent."
                </blockquote>
                <div className="mb-6">
                  <div className="font-semibold text-lg">Ms. Lavanya</div>
                  <div className="text-slate-300">Singapore</div>
                </div>
                
                {/* Navigation Arrows */}
                <div className="flex gap-2 justify-end">
                  <button className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work - Seventh Fold */}
      <section className="py-20 bg-gray-100 relative overflow-hidden" style={{ borderRadius: '50px' }}>
        <div className="max-w-6xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#37405e' }}>
              How we <span style={{ color: '#d4af37' }}>work</span>
            </h2>
            <p className="text-lg max-w-4xl mx-auto" style={{ color: '#37405e' }}>
              We take care of every step from documents and loans to construction and after-sale service. So, your property journey stays simple and stress-free.
            </p>
          </motion.div>

          {/* Process Flow with Icons and Connecting Lines */}
          <div className="relative">
            {/* Top Row */}
            <div className="flex justify-between items-center mb-12 relative">
              {/* Connecting dotted line */}
              <div className="absolute top-6 left-16 right-16 h-0.5 border-t-2 border-dashed" style={{ borderColor: '#d4af37' }}></div>
              
              {/* Inquiry */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative z-10">
                <div className="bg-white rounded-2xl p-4 shadow-lg text-center" style={{ width: '120px' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: '#37405e' }}>
                    <Image src="/images/home page - ff/icons/seventh fold icon/inquiry icon.svg" alt="Inquiry" width={24} height={24} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: '#37405e' }}>Inquiry</span>
                </div>
              </motion.div>

              {/* Site Visit */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative z-10">
                <div className="bg-white rounded-2xl p-4 shadow-lg text-center" style={{ width: '120px' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: '#37405e' }}>
                    <Image src="/images/home page - ff/icons/seventh fold icon/site visit icon.svg" alt="Site Visit" width={24} height={24} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: '#37405e' }}>Site Visit</span>
                </div>
              </motion.div>

              {/* Booking */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="relative z-10">
                <div className="bg-white rounded-2xl p-4 shadow-lg text-center" style={{ width: '120px' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: '#37405e' }}>
                    <Image src="/images/home page - ff/icons/seventh fold icon/booking icon.svg" alt="Booking" width={24} height={24} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: '#37405e' }}>Booking</span>
                </div>
              </motion.div>

              {/* Construction */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="relative z-10">
                <div className="bg-white rounded-2xl p-4 shadow-lg text-center" style={{ width: '120px' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: '#37405e' }}>
                    <Image src="/images/home page - ff/icons/seventh fold icon/construction icon.svg" alt="Construction" width={24} height={24} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: '#37405e' }}>Construction</span>
                </div>
              </motion.div>

              {/* Support */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="relative z-10">
                <div className="bg-white rounded-2xl p-4 shadow-lg text-center" style={{ width: '120px' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: '#37405e' }}>
                    <Image src="/images/home page - ff/icons/seventh fold icon/support icon.svg" alt="Support" width={24} height={24} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: '#37405e' }}>Support</span>
                </div>
              </motion.div>
            </div>

            {/* Bottom Row */}
            <div className="flex justify-center space-x-12 relative">
              {/* Connecting dotted line */}
              <div className="absolute top-6 left-20 right-20 h-0.5 border-t-2 border-dashed" style={{ borderColor: '#d4af37' }}></div>
              
              {/* Selection */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="relative z-10">
                <div className="bg-white rounded-2xl p-4 shadow-lg text-center" style={{ width: '120px' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: '#37405e' }}>
                    <Image src="/images/home page - ff/icons/seventh fold icon/selection icon.svg" alt="Selection" width={24} height={24} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: '#37405e' }}>Selection</span>
                </div>
              </motion.div>

              {/* Registration */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} className="relative z-10">
                <div className="bg-white rounded-2xl p-4 shadow-lg text-center" style={{ width: '120px' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: '#37405e' }}>
                    <Image src="/images/home page - ff/icons/seventh fold icon/registration icon.svg" alt="Registration" width={24} height={24} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: '#37405e' }}>Registration</span>
                </div>
              </motion.div>

              {/* Handover */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} className="relative z-10">
                <div className="bg-white rounded-2xl p-4 shadow-lg text-center" style={{ width: '120px' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: '#37405e' }}>
                    <Image src="/images/home page - ff/icons/seventh fold icon/handover icon.svg" alt="Handover" width={24} height={24} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: '#37405e' }}>Handover</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Fair Field - Seventh Fold */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why <span className="text-yellow-600">choose</span><br />Fair Field Shelters
            </h2>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                {/* Decorative oval background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full transform rotate-6 opacity-90"></div>
                <div className="relative bg-gradient-to-br from-slate-700 to-slate-900 rounded-full p-12">
                  {/* Illustration placeholder - couple with documents */}
                  <div className="flex items-center justify-center h-64">
                    <div className="text-center text-white">
                      <div className="flex gap-4 items-center justify-center mb-4">
                        {/* Person icons */}
                        <svg className="w-16 h-16 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                        <svg className="w-16 h-16 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                      {/* Document icons */}
                      <div className="flex gap-2 justify-center">
                        <svg className="w-8 h-8 text-white opacity-75" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                        </svg>
                        <svg className="w-8 h-8 text-white opacity-75" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                        </svg>
                        <svg className="w-8 h-8 text-white opacity-75" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative border */}
                <div className="absolute -inset-2 border-2 border-yellow-400 rounded-full opacity-50"></div>
              </div>
            </motion.div>

            {/* Right Side - Features */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {[
                "DTCP & RERA approved projects",
                "Clear titles & Transparent deals",
                "On-time delivery & Premium quality",
                "Steady appreciation & High resale value",
                "Friendly support for NRI and Local buyers"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <p className="text-lg text-gray-900 font-medium">{feature}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action - Ninth Fold */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl overflow-hidden">
            {/* Background Villa Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/home page - ff/images/nineth fold.png"
                alt="Fair Field Villa"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Content Overlay */}
            <div className="relative z-10 p-12 lg:p-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left side - spacer for image */}
                <div></div>
                
                {/* Right side - Contact Card */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-white rounded-2xl p-8 shadow-2xl"
                >
                  <h2 className="text-3xl font-bold text-slate-800 mb-8">Book your site visit today</h2>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800">+91 79008 82288 | +91 79008 84488</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800">fairfieldsales2024@gmail.com</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800">163A, Thiruvenkatasamy Road (West),</div>
                        <div className="text-slate-600">R.S. Puram, Coimbatore – 641002</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                      Book your visit today →
                    </button>
                    <button className="bg-slate-800 hover:bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                      Call us now
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Bottom Tagline */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-center"
              >
                <p className="text-white text-lg font-medium bg-black/20 px-6 py-2 rounded-full backdrop-blur-sm">
                  "Fair Field Shelters — Premium Projects built on Promise"
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Navigation - Ninth Fold */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Projects</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <Image
                src="/images/home page - ff/images/nineth fold.png"
                alt="Our Current Projects"
                width={300}
                height={200}
                className="rounded-xl mb-6 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Current Projects</h3>
              <button className="text-yellow-600 font-semibold hover:text-yellow-700">
                Learn More →
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <Image
                src="/images/home page - ff/images/nineth fold.png"
                alt="Completed Projects"
                width={300}
                height={200}
                className="rounded-xl mb-6 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Completed Projects</h3>
              <button className="text-yellow-600 font-semibold hover:text-yellow-700">
                Learn More →
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <Image
                src="/images/home page - ff/images/nineth fold.png"
                alt="Upcoming Projects"
                width={300}
                height={200}
                className="rounded-xl mb-6 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Upcoming Projects</h3>
              <button className="text-yellow-600 font-semibold hover:text-yellow-700">
                Learn More →
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-16 relative">
        {/* Wavy top border */}
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-8 fill-white">
            <path d="M0,96L48,90.7C96,85,192,75,288,80C384,85,480,107,576,112C672,117,768,107,864,90.7C960,75,1056,53,1152,48C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>
        <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Image
                src="/images/logo/FFS LOGO DIFFERENCE-02.png"
                alt="FFS Company Logo"
                width={200}
                height={80}
                className="h-16 w-auto mb-6"
              />
              <p className="text-gray-300 mb-6">
                At Fair Field, we believe in creating more than just homes – we create lifestyle experiences.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Projects</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Contact</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-300 mb-2">Address:</p>
                  <p className="text-sm">SF No.722, Fairfield Anicham, Nanjundapuram Road, Ramanathapuram, Coimbatore – 641 036</p>
                </div>
                <div>
                  <p className="text-gray-300 mb-2">Email:</p>
                  <p className="text-sm">fairfieldshelters@gmail.com</p>
                </div>
                <div>
                  <p className="text-gray-300 mb-2">Phone:</p>
                  <p className="text-sm">+91 7900884488</p>
                </div>
                <div>
                  <p className="text-gray-300 mb-2">WhatsApp:</p>
                  <p className="text-sm">+91 7900882288</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Projects</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white">Our Current Projects</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Completed Projects</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Upcoming Projects</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-12 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 text-sm mb-4 md:mb-0">
                Copyright © 2025, All Rights Reserved
              </p>
              <p className="text-gray-300 text-sm">
                Designed by Trademindsacademy.in
              </p>
            </div>
          </div>
        </div>
        </div>
      </footer>
    </div>
  );
}