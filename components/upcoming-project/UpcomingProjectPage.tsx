'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { UniversalHeader } from '@/components/shared/header/UniversalHeader';
import UniversalFooter from '@/components/shared/footer/UniversalFooter';
import { ShiningText } from '../ui/shining-text'


export default function UpcomingProjectPage() {
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

        {/* Upcoming Project Title - Centered over building image */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white drop-shadow-2xl px-4"
              style={{ fontFamily: 'DM Serif Display' }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Upcoming Project
            </motion.h1>
          </div>
        </div>

        {/* Cream Breadcrumb Bar - With spacing */}
        <div className="absolute bottom-2 sm:bottom-4 left-4 sm:left-4 right-4 sm:right-4 z-20">
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
                <span>Upcoming project</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Second Fold - Content Section */}
      <section className="py-10 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-14 items-start">
            {/* Left side - Images Grid (3 images like reference) */}
            <motion.div
              className="grid grid-cols-5 gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            >
              {/* Left column - Two images stacked  */}
              <div className="col-span-2 flex flex-col gap-4">
                {/* Top left - Villa */}
                <div className="relative h-[200px] rounded-sm overflow-hidden">
                  <Image
                    src="/images/upcoming project page - ff/images/second fold/image 1.jpg"
                    alt="Villa Design"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Bottom left - Interior */}
                <div className="flex justify-end">
                  <div className="relative h-[150px] w-[80%] rounded-sm overflow-hidden">
                    <Image
                      src="/images/upcoming project page - ff/images/second fold/image 2.png"
                      alt="Interior Design"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="col-span-3 relative h-[410px] rounded-sm overflow-hidden">
                <Image
                  src="/images/upcoming project page - ff/images/second fold/image 3.png"
                  alt="Team Consultation"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Right side - Text Content */}
            <motion.div
              className="flex flex-col justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            >
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-left font-normal mb-6"
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
              <p className="text-[16px] md:text-[18px] text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'futura-medium' }}>
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
        className="relative py-10 md:py-32 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, 
            rgba(55, 64, 94, 0.85) 0%, 
            rgba(55, 64, 94, 0.7) 40%, 
            rgba(55, 64, 94, 0.6) 60%, 
            rgba(55, 64, 94, 0.95) 100%), 
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
              className="lg:col-span-5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-6"
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
              className="lg:col-span-6 lg:col-start-7 space-y-6 mt-8 lg:mt-0"
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
                  className="bg-white rounded-lg p-6 md:p-10 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="h-9 w-9 md:w-11 md:h-11 bg-[#D3AC4A] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Image
                        src={`/images/upcoming project page - ff/icons/third fold/${feature.icon}`}
                        alt={feature.title}
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </div>
                    <h3 className="text-[18px] md:text-[24px] font-bold text-[#37405E]" style={{ fontFamily: 'Futura-Heavy' }}>
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-[16px]  md:ml-16" style={{ fontFamily: 'Futura-Medium' }}>
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fourth Fold - Register Interest */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* <h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-6"
                style={{ 
                  fontFamily: 'DM Serif Display',
                  background: 'linear-gradient(135deg, #37405E 0%, #D3AC4A 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Register your <span style={{ color: '#D3AC4A' }}>Interest early</span>
              </h2> */}
              <ShiningText customStyle="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-medium font-['DM_Serif_Display'] mb-4 sm:mb-6 lg:mb-8 leading-tight" textLeft={"Register your "} textRight={"Interest early"} />                
              <p 
                className="text-[16px] md:text-[18px] text-gray-700 leading-relaxed mb-8"
                style={{ fontFamily: 'Futura-Medium' }}
              >
                While our next set of projects is under planning and approval, we
                welcome early inquiries from buyers and investors who want to:
              </p>
              <div className="space-y-2 md:space-y-4 md:pl-14">
                {[
                  "Receive priority notifications on new launches",
                  "Get early-bird access to premium plots and villas",
                  "Enjoy exclusive pre-launch offers and pricing"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#37405E] rounded-full mt-2"></div>
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
              className='flex justify-end'
            >
              <div className="relative h-[300px] md:h-[400px] w-full md:w-[80%] rounded-lg overflow-hidden">
                <Image
                  src="/images/upcoming project page - ff/images/fourth fold image - upcoming project page.jpg"
                  alt="Premium Development Planning"
                  fill
                  className="object-fit"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fifth Fold - Get in Touch */}
      <section 
        className="relative py-10 md:py-20 overflow-hidden">
        <Image
          src="/images/upcoming project page - ff/images/fifth fold - bg image - upcoming project page.jpg"
          alt="Background"
          fill
          className="absolute inset-0 object-cover"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-6"
                style={{ fontFamily: 'DM Serif Display' }}
              >
                Get in <span style={{ color: '#D3AC4A' }}>Touch</span>
              </h2>
              <p 
                className="text-[16px] md:text-[18px] text-white leading-relaxed md:max-w-lg"
                style={{ fontFamily: 'Futura-Medium' }}
              >
                Be among the first to know when our new premium projects
                open for booking. Reach out today, our team will keep you
                informed and guide you to the right opportunity.
              </p>
            </motion.div>

            <div className="flex justify-end">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-tl-sm rounded-br-sm rounded-tr-[50px] rounded-bl-[50px] px-4 py-6 md:py-14 md:px-2 md:px-6 max-w-lg shadow-2xl"
              >

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/upcoming project page - ff/icons/fifth fold/call (1).svg"
                    alt="Call"
                    width={24}
                    height={24}
                  />
                  <span className="text-[#37405E] font-medium text-lg" style={{ fontFamily: 'Futura-Medium' }}>
                    79008 82288 | 79008 84488
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <Image
                    src="/images/upcoming project page - ff/icons/fifth fold/mail Vector.svg"
                    alt="Email"
                    width={24}
                    height={24}
                  />
                  <span className="text-[#37405E] font-medium text-lg" style={{ fontFamily: 'Futura-Medium' }}>
                    fairfieldsales2024@gmail.com
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <Image
                    src="/images/upcoming project page - ff/icons/fifth fold/address.svg"
                    alt="Address"
                    width={24}
                    height={24}
                    className="mt-1"
                  />
                  <span className="text-[#37405E] font-medium text-lg" style={{ fontFamily: 'Futura-Medium' }}>
                    163A, Thiruvenkatasamy Road (West), R.S.<br />
                    Puram, Coimbatore – 641002
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#D3AC4A] text-[#37405E] px-3 py-3 md:px-6 md:py-3 rounded-sm font-bold text-base hover:bg-[#C19B42] transition-colors flex items-center justify-center space-x-2 book-visit-button w-full sm:w-1/2"
                    style={{ fontFamily: 'Futura-Heavy' }}
                  >
                    <span>Register your Interest</span>
                    <Image
                      src="/images/current project page - ff/vaagai/icons/cta arrow Vector.svg"
                      alt="Arrow"
                      width={16}
                      height={16}
                    />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#37405E] text-white px-3 py-3 md:px-6 md:py-3 rounded-sm font-bold text-base hover:bg-[#2A2F45] transition-colors call-us-button w-full sm:w-1/2"
                    style={{ fontFamily: 'Futura-Heavy' }}
                  >
                    Get WhatsApp Updates
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Sixth Fold - Our Promise */}
      <section className="relative pt-16">
        {/* Background color for bottom 70% - desktop only */}
        <div 
          className="absolute bottom-0 left-0 right-0 hidden md:block"
          style={{ 
            backgroundColor: '#F8F6F1',
            height: '70%'
          }}
        ></div>
        
        {/* Mobile background - full section */}
        <div 
          className="absolute inset-0 md:hidden"
          style={{ backgroundColor: '#F8F6F1' }}
        ></div>
        
        {/* Desktop Layout - Side by side */}
        <div className="hidden md:flex min-h-[400px] relative z-10">
          {/* Left side - Image */}
          <motion.div
            className="relative w-1/2 flex-shrink-0"
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
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Large quote marks - positioned within right content area only */}
            <div className="absolute top-12 right-50 text-[#D3AC4A] text-[120px] leading-none font-serif z-10">
              &#8221;
            </div>
            
            <div className="relative z-20 text-center">
              {/* <h2 
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
              </h2> */}
              <ShiningText customStyle="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-medium font-['DM_Serif_Display'] mb-4 sm:mb-6 lg:mb-8" textLeft={"Our Promise "} textRight={""} />                
              <p 
                className="text-[16px] md:text-[18px] text-black leading-relaxed max-w-lg"
                style={{ fontFamily: 'Futura-Medium' }}
              >
                "We are not just planning new projects, we are building new opportunities for families and investors to grow with us."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mobile Layout - Stacked */}
        <div className="md:hidden relative z-10">
          {/* Image - Full width on mobile */}
          <motion.div
            className="relative h-[250px] w-full mb-8"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/upcoming project page - ff/images/sixth fold image_small.jpg"
              alt="Our Promise - Building opportunities"
              fill
              className="object-cover"
            />
          </motion.div>
          
          {/* Content - Bottom section on mobile */}
          <motion.div
            className="flex items-center justify-center relative py-8 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Large quote marks for mobile */}
            <div className="absolute top-2 right-4 text-[#D3AC4A] text-[60px] leading-none font-serif z-10">
              &#8221;
            </div>
            
            <div className="relative z-20 text-center">
              {/* <h2 
                className="text-2xl font-normal mb-6"
                style={{ 
                  fontFamily: 'DM Serif Display',
                  background: 'linear-gradient(90deg, #37405E 0%, #D3AC4A 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Our Promise
              </h2> */}
              <ShiningText customStyle="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-medium font-['DM_Serif_Display'] mb-4 sm:mb-6 lg:mb-8" textLeft={"Our Promise "} textRight={""} />                
              
              <p 
                className="text-[16px] text-black leading-relaxed"
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