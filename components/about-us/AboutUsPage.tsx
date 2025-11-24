'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { UniversalHeader } from '@/components/shared/header/UniversalHeader';
import UniversalFooter from '@/components/shared/footer/UniversalFooter';
import { ShiningText } from '../ui/shining-text'

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* First Fold - Exact Reference Design */}
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
            className="object-cover"
            priority
          />
        </div>


        {/* Universal Header */}
        <UniversalHeader transparent={true} showScheduleButton={true} />

        {/* About Us Title - Centered over building image */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white drop-shadow-2xl"
              style={{ fontFamily: 'DM Serif Display' }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              About Us
            </motion.h1>
          </div>
        </div>

        {/* Cream Breadcrumb Bar - With spacing */}
        <div className="absolute bottom-4 sm:bottom-4 left-4 sm:left-4 right-4 sm:right-4 z-20">
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
                {/* <img
                  src="/images/about us page - ff/icons/first fold icon.svg"
                  alt="Arrow"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                /> */}
                <Image
                  src="/images/about us page - ff/icon/first fold icon.svg"
                  alt="Arrow"
                  fill
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  priority
                />                    
                <span>About us</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Second Fold - Who We Are - Exact Reference Design */}
      <motion.section 
        className="py-10 lg:py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 md:px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-end gap-8 lg:gap-0">
            {/* Right Side - Title on White + Dark Blue Card (mobile first) */}
            <motion.div 
              className="space-y-6 lg:flex lg:flex-col lg:justify-end lg:h-[500px] lg:space-y-8 order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Title on White Background */}
              {/* <motion.h2 
                className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 lg:mb-8 lg:pl-10 font-normal text-[#37405E] max-lg:text-center"
                style={{ fontFamily: 'DM Serif Display' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Who <span 
                  className="bg-gradient-to-r from-[#D3AC4A] to-[#37405E] bg-clip-text text-transparent"
                  style={{ 
                    background: 'radial-gradient(circle, #D3AC4A 0%, #37405E 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  we are
                </span>
              </motion.h2> */}
              <ShiningText customStyle="text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-medium font-['DM_Serif_Display'] mb-6 max-lg:text-center leading-tight lg:pl-10" textLeft={"Who "} textRight={"we are"} />   
              
              {/* Dark Blue Card with Content */}
              <motion.div 
                className="bg-[#37405E] p-6 lg:p-8 rounded-lg lg:rounded-tl-none lg:rounded-tr-lg lg:rounded-bl-none lg:rounded-br-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="space-y-6 text-base sm:text-lg md:text-xl text-white leading-relaxed" style={{ fontFamily: 'Futura-Medium' }}>
                  <p>
                    Fair Field Shelters Pvt. Ltd. is a Coimbatore-based real estate company creating 
                    premium plots, villas, and commercial properties for families, investors and 
                    NRIs who value clarity, quality and long-term growth.
                  </p>
                  
                  <p>
                    Founded in 2024, our company combines over 25 years of industry experience 
                    with transparent systems, modern design and a deep respect for customer trust.
                  </p>
                  
                  <p>
                    Every project we build whether it&apos;s a gated community, a luxury villa, or a 
                    residential layout, reflects our core belief: real estate is not just about land or 
                    buildings, it&apos;s about keeping promises.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Left Side - Fair Field Entrance Image (mobile second) */}
            <motion.div 
              className="relative h-[300px] lg:h-[500px] order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="/images/about us page - ff/images/second fold image.png"
                alt="Fair Field Shelters entrance gate"
                fill
                className="object-cover rounded-lg lg:rounded-tl-lg lg:rounded-tr-lg lg:rounded-bl-lg lg:rounded-br-none"
                priority
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Third Fold - Vision and Mission */}
      <motion.section 
        className="py-10 lg:py-24 bg-[#F5F2E8]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 md:px-4 lg:px-6 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Image */}
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/about us page - ff/images/third fold image.png"
                alt="Fair Field Shelters development"
                width={600}
                height={700}
                className="rounded-3xl shadow-xl w-full h-auto object-cover"
              />
            </motion.div>

            {/* Vision and Mission Cards */}
            <div className="order-1 lg:order-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Vision Card */}
              <motion.div 
                className="bg-white rounded-2xl p-4 lg:p-8 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-left mb-6">
                  <div className="w-20 h-20 mb-4 lg:mb-12 bg-gradient-to-br from-[#D3AC4A]/10 to-[#D3AC4A]/5 rounded-full flex items-center justify-center">
                    <Image
                      src="/images/about us page - ff/icons/third fold icon/vision Vector.svg"
                      alt="Vision icon"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </div>
                  <h3 
                    className="text-2xl sm:text-2xl md:text-4xl font-normal text-[#37405E] mb-4 lg:mb-6"
                    style={{ fontFamily: 'DM Serif Display' }}
                  >
                    Our <span 
                      className="bg-gradient-to-r from-[#D3AC4A] to-[#37405E] bg-clip-text text-transparent"
                      style={{ 
                        background: 'radial-gradient(circle, #D3AC4A 0%, #37405E 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      Vision
                    </span>
                  </h3>
                  <p 
                    className="text-base md:text-lg  text-[#37405E] leading-relaxed"
                    style={{ fontFamily: 'Futura-Medium' }}
                  >
                    To be recognized as one of South India&apos;s most trusted and premium real 
                    estate developers delivering DTCP-approved lands, modern villas, and 
                    luxury communities that create wealth, comfort, and happiness for every 
                    customer.
                  </p>
                </div>
              </motion.div>

              {/* Mission Card */}
              <motion.div 
                className="bg-white rounded-2xl p-4 lg:p-8 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-left mb-6">
                  <div className="w-20 h-20 mb-4 lg:mb-12 bg-gradient-to-br from-[#D3AC4A]/10 to-[#D3AC4A]/5 rounded-full flex items-center justify-center">
                    <Image
                      src="/images/about us page - ff/icons/third fold icon/mission Vector.svg"
                      alt="Mission icon"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </div>
                  <h3 
                    className="text-2xl sm:text-2xl md:text-4xl font-normal text-[#37405E] mb-4 lg:mb-6"
                    style={{ fontFamily: 'DM Serif Display' }}
                  >
                    Our <span 
                      className="bg-gradient-to-r from-[#D3AC4A] to-[#37405E] bg-clip-text text-transparent"
                      style={{ 
                        background: 'radial-gradient(circle, #D3AC4A 0%, #37405E 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      Mission
                    </span>
                  </h3>
                  <p 
                    className="text-base md:text-lg text-[#37405E] leading-relaxed"
                    style={{ fontFamily: 'Futura-Medium' }}
                  >
                    To provide secure, legally sound, and future-ready real estate investments 
                    through professional service, transparent processes, and on-time 
                    delivery, making Fair Field Shelters the one-stop growth partner for every 
                    homebuyer and investor.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Fourth Fold - Core Values */}
      <motion.section 
        className="py-10 lg:py-24  bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 md:px-4 lg:px-6 text-center">
          {/* <motion.h2 
            className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 lg:mb-12 font-normal text-[#37405E] mb-20"
            style={{ fontFamily: 'DM Serif Display' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our <span 
              className="bg-gradient-to-r from-[#D3AC4A] to-[#37405E] bg-clip-text text-transparent"
              style={{ 
                background: 'radial-gradient(circle, #D3AC4A 0%, #37405E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Core Values
            </span>
          </motion.h2> */}
          <ShiningText customStyle="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-medium font-['DM_Serif_Display'] mb-4 lg:mb-12" textLeft={"Our "} textRight={"Core Values"} />                

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Integrity */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-24 h-24 mx-auto mb-8 flex items-center justify-center">
                <Image
                  src="/images/about us page - ff/icons/fourth fold icons/Vector 1.svg"
                  alt="Integrity icon"
                  width={80}
                  height={80}
                  className="w-20 h-20"
                />
              </div>
              <h3 
                className="text-[22px] font-medium text-[#37405E] mb-6 lg:min-h-[56px]"
                style={{ fontFamily: 'Futura-Medium' }}
              >
                Integrity
              </h3>
              <p 
                className="text-[16px] text-black/60 leading-relaxed max-w-xs mx-auto"
                style={{fontFamily:"Futura-Medium"}}
              >
                We stay honest and transparent in every deal. No hidden details, no false promises.
              </p>
            </motion.div>

            {/* Customer Commitment */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-24 h-24 mx-auto mb-8 flex items-center justify-center">
                <Image
                  src="/images/about us page - ff/icons/fourth fold icons/Vector 2.svg"
                  alt="Customer Commitment icon"
                  width={80}
                  height={80}
                  className="w-20 h-20"
                />
              </div>
              <h3 
                className="text-[22px] font-medium text-[#37405E] mb-6 lg:min-h-[56px]"
                style={{ fontFamily: 'Futura-Medium' }}
              >
                Customer<br />Commitment
              </h3>
              <p 
                className="text-[16px] text-black/60 leading-relaxed max-w-xs mx-auto"
                style={{fontFamily:"Futura-Medium"}}
              >
                Your satisfaction comes first. Every project begins and ends with your trust in mind.
              </p>
            </motion.div>

            {/* Execution Excellence */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-24 h-24 mx-auto mb-8 flex items-center justify-center">
                <Image
                  src="/images/about us page - ff/icons/fourth fold icons/Vector 3.svg"
                  alt="Execution Excellence icon"
                  width={80}
                  height={80}
                  className="w-20 h-20"
                />
              </div>
              <h3 
                className="text-[22px] font-medium text-[#37405E] mb-6 lg:min-h-[56px]"
                style={{ fontFamily: 'Futura-Medium' }}
              >
                Execution<br />Excellence
              </h3>
              <p 
                className="text-[16px] text-black/60 leading-relaxed max-w-xs mx-auto"
                style={{ fontFamily: 'Futura-Medium' }}
              >
                We focus on quality construction, timely completion and legally clear assets.
              </p>
            </motion.div>

            {/* Innovation */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-24 h-24 mx-auto mb-8 flex items-center justify-center">
                <Image
                  src="/images/about us page - ff/icons/fourth fold icons/Vector 4.svg"
                  alt="Innovation icon"
                  width={80}
                  height={80}
                  className="w-20 h-20"
                />
              </div>
              <h3 
                className="text-[22px] font-medium text-[#37405E] mb-6 lg:min-h-[56px]"
                style={{ fontFamily: 'Futura-Medium' }}
              >
                Innovation
              </h3>
              <p 
                className="text-[16px] text-black/60 leading-relaxed max-w-xs mx-auto"
                style={{ fontFamily: 'Futura-Medium' }}
              >
                Modern layouts, green spaces and smart planning for a better living experience.
              </p>
            </motion.div>

            {/* Trust Building */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="w-24 h-24 mx-auto mb-8 flex items-center justify-center">
                <Image
                  src="/images/about us page - ff/icons/fourth fold icons/Vector 5.svg"
                  alt="Trust Building icon"
                  width={80}
                  height={80}
                  className="w-20 h-20"
                />
              </div>
              <h3 
                className="text-[22px] font-medium text-[#37405E] mb-6 lg:min-h-[56px]"
                style={{ fontFamily: 'Futura-Medium' }}
              >
                Trust Building
              </h3>
              <p 
                className="text-[16px] text-black/60 leading-relaxed max-w-xs mx-auto"
                style={{ fontFamily: 'Futura-Medium' }}
              >
                We believe in relationships that last built through clarity, care and consistent delivery.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Fifth Fold - Promise to Homebuyers */}
      <motion.section 
        className="py-10 lg:py-20 px-4 md:px-8 lg:px-16 bg-[#F5F2E8]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* <motion.h2 
              className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 font-normal text-[#37405E] text-center md:text-left"
              style={{ fontFamily: 'DM Serif Display' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Promise to <span 
                className="bg-gradient-to-r from-[#D3AC4A] to-[#37405E] bg-clip-text text-transparent"
                style={{ 
                  background: 'radial-gradient(circle, #D3AC4A 0%, #37405E 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Homebuyers
              </span>
            </motion.h2> */}
            <ShiningText customStyle="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-medium font-['DM_Serif_Display'] mb-4 lg:mb-12" textLeft={"Our Promise to "} textRight={"Homebuyers"} />                
            
            <motion.p 
              className="text-base sm:text-lg text-[#37405E] leading-relaxed mb-8"
              style={{ fontFamily: 'Futura-Medium' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Buying property is one of life&apos;s biggest decisions. That&apos;s why at Fair Field Shelters, 
              we stand with every customer from the first inquiry to the handover and beyond.
            </motion.p>

            <motion.p 
              className="text-base sm:text-lg text-[#37405E] leading-8 mb-8"
              style={{ fontFamily: 'Futura-Medium' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Our team ensures your journey is simple, guided and worry-free:
            </motion.p>

            <div className="space-y-6">
              {[
                'Every document verified and explained clearly',
                'Full support for bank loans and legal process',
                'Transparent communication at every stage',
                'Projects delivered on time, exactly as promised'
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/images/about us page - ff/icons/fifth fold tick Vector.svg"
                      alt="Check mark"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </div>
                  <span 
                    className="text-base sm:text-lg text-[#37405E]"
                    style={{ fontFamily: 'Futura-Medium' }}
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src="/images/about us page - ff/images/fifth fold/Mask group image 1.png"
                  alt="Modern villa exterior"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Image
                  src="/images/about us page - ff/images/fifth fold/Mask group image 2.png"
                  alt="Contemporary home design"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
            
            <motion.div 
              className="bg-[#37405E] rounded-lg p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p 
                className="text-base sm:text-lg text-white font-medium"
                style={{ fontFamily: 'Futura-Medium' }}
              >
                With Fair Field Shelters, you don&apos;t just buy land or a house you invest in peace of mind.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Sixth Fold - Managing Director Message */}
      <motion.section 
        className="py-10 lg:py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden min-h-[600px] flex items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 lg:inset-8 z-0 lg:rounded-lg overflow-hidden">
          <Image
            src="/images/about us page - ff/images/sixth fold image.jpg"
            alt="Managing Director with house model background"
            fill
            className="object-cover object-left scale-x-[-1]"
            priority
          />
        </div>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 lg:inset-8 bg-black/20 z-10 lg:rounded-lg" />

        <div className="w-full relative z-20 flex justify-center lg:justify-end pr-0 lg:pr-40">
          <div className="bg-white/95 backdrop-blur-sm rounded-md p-8 lg:py-12 shadow-2xl border border-gray-100 max-w-md lg:max-w-xl">
            {/* <motion.h2 
              className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-[#37405E] mb-6"
              style={{ fontFamily: 'DM Serif Display' }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              From the{' '}
              <span 
                style={{ 
                  background: 'radial-gradient(circle, #D3AC4A 0%, #37405E 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Managing Director
              </span>
            </motion.h2> */}
            <ShiningText customStyle="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-medium font-['DM_Serif_Display'] mb-6" textLeft={"From the "} textRight={"Managing Director"} />                
            
            <motion.blockquote 
              className="text-[14px] lg:text-[16px] text-[#37405E] leading-relaxed mb-6"
              style={{ fontFamily: 'Futura-Medium' }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              &quot;At Fair Field Shelters, we believe success is not measured by the number of projects 
              completed but by the number of promises kept. We build every project with integrity, 
              care and a commitment that lasts far beyond the sale.&quot;
            </motion.blockquote>

            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-px h-12 bg-[#D3AC4A] mr-4"></div>
              <div>
                <p 
                  className="text-[16px] lg:text-[18px] font-medium text-[#D3AC4A]"
                  style={{ fontFamily: 'Futura-Medium' }}
                >
                  K. Muthu Kumar
                </p>
                <p 
                  className="text-[12px] lg:text-[14px] text-[#37405E]"
                  style={{ fontFamily: 'Futura-Light' }}
                >
                  Managing Director
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <UniversalFooter />
    </div>
  );
};

export default AboutUsPage;