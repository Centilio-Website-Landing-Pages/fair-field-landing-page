'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShiningText } from '../ui/shining-text'
import { UniversalHeader } from '@/components/shared/header/UniversalHeader';
import UniversalFooter from '@/components/shared/footer/UniversalFooter';

export default function CompletedProjectsPage() {
  const completedProjects = [
    {
      id: 'kotagiri-serene-villas',
      title: 'Kotagiri Serene Villas',
      location: 'Nilgiris',
      image: '/images/completed page -ff/Kotagiri Serene Villas – Kotagiri, Nilgiris (2018)/images/1.png',
      route: '/kotagiri-serene-villas'
    },
    {
      id: 'kurinjee-nagar-phase-1',
      title: 'Kurinjee Nagar Phase 1',
      location: 'Vedapathy',
      image: '/images/completed page -ff/kurinjee nagar phase 1/images/7.png',
      route: '/kurinjee-nagar-phase-1'
    },
    {
      id: 'kurinjee-nagar-phase-2',
      title: 'Kurinjee Nagar Phase 2',
      location: 'Vedapathy',
      image: '/images/completed page -ff/kurinjee nagar phase 2/images/9.png',
      route: '/kurinjee-nagar-phase-2'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Following Legal & Approval Layout Structure */}
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

        {/* Completed Projects Title - Centered over building image */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white drop-shadow-2xl px-4"
              style={{ fontFamily: 'DM Serif Display' }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Completed Projects
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
                {/* <img
                  src="/images/legal & approval page - ff/icon/first fold icon.svg"
                  alt="Arrow"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                /> */}
                <Image
                  src="/images/about us page - ff/icons/first fold icon.svg"
                  alt="Arrow"
                  fill
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  priority
                />                
                <span className="text-[#37405E]">
                  Project
                </span> 
                {/* <img
                  src="/images/legal & approval page - ff/icon/first fold icon.svg"
                  alt="Arrow"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />                                */}
                <Image
                  src="/images/about us page - ff/icons/first fold icon.svg"
                  alt="Arrow"
                  fill
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  priority
                />                
                <span>Completed Projects</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Second Fold - Content Section */}
      <section className="py-10 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Title */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 
              className="text-xl sm:text-2xl md:text-3xl font-normal mb-4 lg:mb-6"
              style={{ fontFamily: 'DM Serif Display' }}
            >
              <span className="text-[#D3AC4A]">Proof of Promise. </span>
              <span className="text-[#D3AC4A]">Delivered with Pride.</span>
            </h2>
            <div className="max-w-6xl mx-auto space-y-2">
              <p 
                className="text-[16px] md:text-[18px] text-black leading-relaxed"
                style={{ fontFamily: 'Futura-Medium' }}
              >
                Fair Field Shelters takes pride in completing every project with the same commitment, care and quality that define our brand.
              </p>
              <p 
                className="text-[16px] md:text-[18px] text-black leading-relaxed"
                style={{ fontFamily: 'Futura-Medium' }}
              >
                Each community reflects our promise - premium planning, legal clarity, on-time delivery and long-term value for every customer.
              </p>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {completedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Link href={project.route}>
                  <div className="bg-white rounded-lg border border-[#00684F20] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 p-2">
                    {/* Project Image */}
                    <div className="relative h-[293px] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="rounded-md object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    
                    {/* Project Info */}
                    <div className="p-6 text-center">
                      <h3 
                        className="text-[20px] md:text-[24px] font-normal text-black mb-2"
                        style={{ fontFamily: 'DM Serif Display' }}
                      >
                        {project.title}
                      </h3>
                      <p 
                        className="text-[16px] text-[#666666]"
                        style={{ fontFamily: 'Futura-Medium' }}
                      >
                        {project.location}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Third Fold - Our Track Record */}
      <section className="py-10 md:py-24" style={{ backgroundColor: '#D3AC4A1A' }}>
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ShiningText customStyle="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-medium font-['DM_Serif_Display'] mb-4 sm:mb-6 lg:mb-8" textLeft={"Our Track "} textRight={"Record"} />                
          </motion.div>

          {/* Statistics Layout */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            
            {/* Left Side */}
            <motion.div
              className="w-full lg:w-2/5 grid grid-cols-1 gap-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Top Image with Legal Disputes */}
              <div className="relative">
                <div className="relative h-48 md:h-56 rounded-lg overflow-hidden">
                  <Image
                    src="/images/completed page -ff/images/third fold/image 1.png"
                    alt="Fair Field Premium Villas"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Legal Disputes Badge */}
                <motion.div
                  className="absolute -bottom-14 left-[30%] transform  bg-[#D3AC4A] rounded-full h-26 w-26 lg:w-32 lg:h-32 flex flex-col items-center justify-center shadow-lg z-5"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    <div className="text-[35px] lg:text-[40px] font-bold text-[#37405E]" style={{ fontFamily: 'DM Serif Display' }}>0</div>
                    <div className="text-[12px] lg:text-[14px] font-medium text-[#37405E]" style={{ fontFamily: 'Futura-Medium' }}>Legal Disputes</div>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Images */}
              <div className="flex gap-4 items-start">
                {/* Left Image */}
                <motion.div
                  className="relative w-2/5 aspect-square rounded-lg overflow-hidden flex-shrink-0"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/images/completed page -ff/images/third fold/image 2.png"
                    alt="Premium Layout Planning"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                {/* Right Image */}
                <motion.div
                  className="relative w-3/5 h-56 md:h-80 rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/images/completed page -ff/images/third fold/image 3.jpg"
                    alt="Modern Villa Design"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side */}
            <motion.div
              className="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Completed Premium Projects */}
              <motion.div
                className="bg-white hover:bg-[#37405E] rounded-lg p-8 shadow-lg border border-gray-100 transition-all duration-300 group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-[64px] md:text-[80px] font-bold text-[#D3AC4A] mb-2" style={{ fontFamily: 'DM Serif Display' }}>3</div>
                <div className="text-[16px] md:text-[18px] font-medium text-[#37405E] group-hover:text-white transition-colors duration-300" style={{ fontFamily: 'Futura-Medium' }}>
                  Completed Premium Projects
                </div>
              </motion.div>

              {/* Customer Satisfaction */}
              <motion.div
                className="bg-[#37405E] rounded-lg p-8  shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-[64px] md:text-[80px] font-bold text-[#D3AC4A] mb-2" style={{ fontFamily: 'DM Serif Display' }}>100%</div>
                <div className="text-[16px] md:text-[18px] font-medium text-white" style={{ fontFamily: 'Futura-Medium' }}>
                  Customer Satisfaction
                </div>
              </motion.div>

              {/* Timely Registrations */}
              <motion.div
                className="bg-white hover:bg-[#37405E] rounded-lg p-8 shadow-lg border border-gray-100 transition-all duration-300 group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-[64px] md:text-[80px] font-bold text-[#D3AC4A] mb-2" style={{ fontFamily: 'DM Serif Display' }}>100%</div>
                <div className="text-[16px] md:text-[18px] font-medium text-[#37405E] group-hover:text-white transition-colors duration-300" style={{ fontFamily: 'Futura-Medium' }}>
                  Timely Registrations
                </div>
              </motion.div>

              {/* Total Units Delivered */}
              <motion.div
                className="bg-white hover:bg-[#37405E] rounded-lg p-8  shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-[64px] md:text-[80px] font-bold text-[#D3AC4A] mb-2" style={{ fontFamily: 'DM Serif Display' }}>149</div>
                <div className="text-[16px] md:text-[18px] font-medium text-white" style={{ fontFamily: 'Futura-Medium' }}>
                  Total Units Delivered (Villas + Plots)
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fourth Fold - Our Commitment */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Quote Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/completed page -ff/icons/quote-icon.png"
                  alt="Quote Icon"
                  width={80}
                  height={60}
                  className="object-contain"
                />
              </motion.div>

              {/* Title */}
              {/* <motion.h2
                className="text-[32px] md:text-[48px] font-normal leading-tight"
                style={{ fontFamily: 'DM Serif Display' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <span className="text-[#37405E]">Our </span>
                <span className="text-[#D3AC4A]">Commitment</span>
              </motion.h2> */}
              <ShiningText customStyle="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-medium font-['DM_Serif_Display'] mb-4 sm:mb-6 lg:mb-8" textLeft={"Our "} textRight={"Commitment"} />                

              {/* Description */}
              <motion.p
                className="text-[16px] md:text-[18px] text-[#37405E] leading-relaxed"
                style={{ fontFamily: 'Futura-Medium' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Every completed project is not just proof of delivery, it&lsquo;s proof of trust. Fair Field Shelters will continue to build premium spaces that turn every promise into pride.
              </motion.p>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/completed page -ff/images/fourth fold image.png"
                  alt="Fair Field Community Development"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Navy Color Decoration Block - Right side of image */}
              <motion.div
                className="absolute left-full top-1/2 transform -translate-y-1/2 w-[50vw] h-40 bg-[#37405E] shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              />
              
              {/* Decorative overlay */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-[#37405E] rounded-lg -z-10 opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <UniversalFooter />
    </main>
  );
}