'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { UniversalHeader } from '@/components/shared/header/UniversalHeader';
import UniversalFooter from '@/components/shared/footer/UniversalFooter';
import { AnimatedText } from '@/components/ui/animated-shiny-text';

export function WhyChoosePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* First Fold - Step-shaped Background with Building Image */}
      <motion.section 
        className="relative overflow-hidden"
        style={{ height: '75vh' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
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

        {/* Why Choose Us Title - Centered over building image */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white drop-shadow-2xl"
              style={{ fontFamily: 'DM Serif Display' }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Why choose us
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
                  src="/images/about us page - ff/icons/first fold icon.svg"
                  alt="Arrow"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
                <Link href="/about-us" className="hover:text-[#D3AC4A] transition-colors cursor-pointer">
                  About us
                </Link>
                <img
                  src="/images/about us page - ff/icons/first fold icon.svg"
                  alt="Arrow"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
                <span>Why choose us</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content Section - Second Fold */}
      <section className="py-10 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className=" space-y-2 lg:space-y-8 max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-4xl lg:text-5xl leading-tight text-left" style={{ fontFamily: 'DM Serif Display' }}>
                <span style={{ 
                  background: 'linear-gradient(90deg, rgb(55, 64, 94) 6.73%, rgb(211, 172, 74) 98.08%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Premium projects.</span>
              </h2>
              <div className="max-w-lg mx-auto">
                <div 
                  className="py-2 px-8 lg:py-6 rounded-lg"
                  style={{ 
                    background: 'linear-gradient(90deg, rgba(211, 172, 74, 0.1) 0%, rgba(55, 64, 94, 0.1) 100%)',
                    borderTopLeftRadius: '20px',
                    borderBottomRightRadius: '20px',
                    borderTopRightRadius: '0px',
                    borderBottomLeftRadius: '0px',
                    transform: 'skew(-10deg)'
                  }}
                >
                  <div style={{ transform: 'skew(10deg)' }}>
                    <AnimatedText
                      text="Honest process."
                      gradientColors="linear-gradient(90deg, rgb(55, 64, 94) 0%, rgb(211, 172, 74) 100%)"
                      gradientAnimationDuration={1}
                      hoverEffect={true}
                      className="py-0"
                      textClassName="font-normal leading-tight"
                      textStyle={{ 
                        fontFamily: 'DM Serif Display',
                        fontSize: 'clamp(1.5rem, 5vw, 3rem)'
                      }}
                    />
                  </div>
                </div>
              </div>
              <h2 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl leading-tight text-right" style={{ fontFamily: 'DM Serif Display' }}>
                <span style={{ 
                  background: 'linear-gradient(90deg, rgb(55, 64, 94) 0%, rgb(211, 172, 74) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Trusted promise.</span>
              </h2>
            </div>
          </motion.div>

          {/* Features Grid with Center Image */}
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            {/* Left Column - Features */}
            <div className="space-y-12">
              {/* Legally Clear & Approved Projects */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 bg-[#D3AC4A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/images/why choose page - ff/icons/second fold icon/Vector 1.svg"
                    alt="Legal Icon"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#37405E] mb-3" style={{ fontFamily: 'Futura-Heavy' }}>
                    Legally Clear & Approved Projects
                  </h3>
                  <p className="text-[#37405E] font-medium leading-relaxed" style={{ fontFamily: 'Futura-Medium' }}>
                    Every Fair Field property is DTCP-approved and RERA-registered, ensuring your investment is 100% safe, verified and ready for registration, no hidden risks, no legal confusion.
                  </p>
                </div>
              </motion.div>

              {/* High Appreciation & ROI Locations */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 bg-[#D3AC4A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/images/why choose page - ff/icons/second fold icon/Vector 2.svg"
                    alt="ROI Icon"
                    width={24}
                    height={24}
                    className="text-[#D3AC4A]"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#37405E] mb-3" style={{ fontFamily: 'Futura-Heavy' }}>
                    High Appreciation & ROI Locations
                  </h3>
                  <p className="text-[#37405E] font-medium leading-relaxed" style={{ fontFamily: 'Futura-Medium' }}>
                    We select only fast-developing, high-demand areas across Coimbatore and Nilgiris, where infrastructure growth and city expansion steadily increase your property value year after year.
                  </p>
                </div>
              </motion.div>

              {/* Premium Quality & Low-Density Planning */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 bg-[#D3AC4A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/images/why choose page - ff/icons/second fold icon/Vector 3.svg"
                    alt="Quality Icon"
                    width={24}
                    height={24}
                    className="text-[#D3AC4A]"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#37405E] mb-3" style={{ fontFamily: 'Futura-Heavy' }}>
                    Premium Quality & Low-Density Planning
                  </h3>
                  <p className="text-[#37405E] font-medium leading-relaxed" style={{ fontFamily: 'Futura-Medium' }}>
                    Each layout and villa is designed for space, privacy, and elegance with wide roads, proper drainage, landscaped surroundings and peaceful neighborhood planning that enhances daily living.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Center Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-[300px] lg:h-[600px] overflow-hidden"
              style={{
                borderTopRightRadius: '60px',
                borderBottomLeftRadius: '60px'
              }}
            >
              <Image
                src="/images/why choose page - ff/images/2nd fold image.png"
                alt="Fair Field Property"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Right Column - Features */}
            <div className="space-y-12">
              {/* Transparent Dealings & On-Time Delivery */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 bg-[#D3AC4A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/images/why choose page - ff/icons/second fold icon/Vector 4.svg"
                    alt="Transparent Icon"
                    width={24}
                    height={24}
                    className="text-[#D3AC4A]"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#37405E] mb-3" style={{ fontFamily: 'Futura-Heavy' }}>
                    Transparent Dealings & On-Time Delivery
                  </h3>
                  <p className="text-[#37405E] font-medium leading-relaxed" style={{ fontFamily: 'Futura-Medium' }}>
                    We keep every promise made from booking to handover. Customers receive clear communication, verified documents and timely project completion, supported by a team that values integrity above all.
                  </p>
                </div>
              </motion.div>

              {/* Trusted by Families & Investors Alike */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 bg-[#D3AC4A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/images/why choose page - ff/icons/second fold icon/Vector 5.svg"
                    alt="Trusted Icon"
                    width={24}
                    height={24}
                    className="text-[#D3AC4A]"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#37405E] mb-3" style={{ fontFamily: 'Futura-Heavy' }}>
                    Trusted by Families & Investors Alike
                  </h3>
                  <p className="text-[#37405E] font-medium leading-relaxed" style={{ fontFamily: 'Futura-Medium' }}>
                    Hundreds of customers from first-time buyers to NRI investors have chosen Fair Field Shelters for its clarity, reliability and appreciation track record. Every project becomes a long-term relationship built on trust.
                  </p>
                </div>
              </motion.div>

              {/* End-to-End Guidance & Support */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 bg-[#D3AC4A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/images/why choose page - ff/icons/second fold icon/Vector 6.svg"
                    alt="Support Icon"
                    width={24}
                    height={24}
                    className="text-[#D3AC4A]"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#37405E] mb-3" style={{ fontFamily: 'Futura-Heavy' }}>
                    End-to-End Guidance & Support
                  </h3>
                  <p className="text-[#37405E] font-medium leading-relaxed" style={{ fontFamily: 'Futura-Medium' }}>
                    From your first inquiry to possession, our team helps you with legal checks, bank loans, registration and even resale assistance making your property journey smooth and stress-free.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Promise Section - Third Fold */}
      <section className="relative bg-white pb-2 lg:pb-16">
        <div className="flex flex-col lg:flex-row h-[400px] overflow-hidden" >
          {/* Left - Image with Blue Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-full w-full lg:w-1/2"
          >
            <Image
              src="/images/why choose page - ff/images/3 rd fold image.png"
              alt="Happy Family"
              fill
              className="object-cover"
              style={{ objectPosition: 'center 75%' }}
            />
            {/* Blue Overlay */}
            <div className="absolute inset-0 bg-[#37405EA6]" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative bg-[#F5F2ED] flex items-center px-8 py-10 lg:px-12 w-full lg:w-1/2"
          >
            {/* Large Quote Icon - Positioned on the yellow card near "Our Promise" */}
            <div className="absolute right-4 top-4 lg:-left-8 lg:top-30 z-0">
              <Image
                src="/images/why choose page - ff/icons/quote-icon.png"
                alt="Quote icon"
                width={60}
                height={60}
                className="opacity-90 w-10 h-8 lg:w-18 lg:h-16"
              />
            </div>
            
            <div className="space-y-3 lg:space-y-4 relative z-10 w-full pl-2 lg:pl-16">
              <h2 className="text-2xl md:text-4xl lg:text-5xl" style={{ fontFamily: 'DM Serif Display' }}>
                <span style={{ color: 'rgb(55, 64, 94)' }}>Our </span>
                <span style={{ color: 'rgb(211, 172, 74)' }}>Promise</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed" style={{ fontFamily: 'Futura-Medium', color: 'rgb(0, 0, 0)' }}>
                At Fair Field Shelters, we don&apos;t just sell properties. We help you build a secure and premium future for your family.
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