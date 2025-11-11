'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
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
      {/* First Fold - Hero Section */}
      <motion.section 
        className="relative overflow-hidden"
        style={{ height: '75vh', marginBottom: '0' }}
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

              {/* Navigation Menu */}
              <motion.nav 
                className="hidden md:flex items-center space-x-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link href="/" className="text-[16px] text-[#D3AC4A] font-medium hover:text-white transition-colors drop-shadow-lg" style={{ fontFamily: 'Alata' }}>Home</Link>
                <Link href="/about-us" className="text-[16px] text-white font-medium hover:text-[#D3AC4A] transition-colors drop-shadow-lg" style={{ fontFamily: 'Alata' }}>About us</Link>
                <span className="text-[16px] text-white font-medium hover:text-[#D3AC4A] transition-colors drop-shadow-lg cursor-pointer" style={{ fontFamily: 'Alata' }}>Project</span>
                <Link href="/blog" className="text-[16px] text-white font-medium hover:text-[#D3AC4A] transition-colors drop-shadow-lg" style={{ fontFamily: 'Alata' }}>Blog</Link>
                <Link href="/careers" className="text-[16px] text-white font-medium hover:text-[#D3AC4A] transition-colors drop-shadow-lg" style={{ fontFamily: 'Alata' }}>Careers</Link>
                <Link href="/contact-us" className="text-[16px] text-white font-medium hover:text-[#D3AC4A] transition-colors drop-shadow-lg" style={{ fontFamily: 'Alata' }}>Contact</Link>
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

        {/* Completed Projects Title - Centered */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center px-4">
            <motion.h1 
              className="text-[32px] md:text-[48px] font-normal text-white drop-shadow-2xl"
              style={{ fontFamily: 'DM Serif Display' }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Completed Projects
            </motion.h1>
          </div>
        </div>

      </motion.section>
      
      {/* Breadcrumb Bar - Seamless between hero and content */}
      <motion.div 
        className="bg-[#F5F2E8] py-6 px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 text-[16px] text-[#37405E] font-medium" style={{ fontFamily: 'Futura-Medium' }}>
            <Link href="/" className="hover:text-[#D3AC4A] transition-colors">Home</Link>
            <span>›</span>
            <span>Project</span>
            <span>›</span>
            <span>Completed projects</span>
          </div>
        </div>
      </motion.div>
      
      {/* Second Fold - Content Section */}
      <section className="pb-12 md:pb-20 bg-white">
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
              className="text-[24px] md:text-[32px] lg:text-[40px] font-normal mb-6"
              style={{ fontFamily: 'DM Serif Display' }}
            >
              <span className="text-[#D3AC4A]">Proof of Promise, </span>
              <span className="text-[#37405E]">Delivered with Pride.</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
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
                  <div className="bg-white rounded-lg border border-black/[0.124] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                    {/* Project Image */}
                    <div className="relative h-[293px] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    
                    {/* Project Info */}
                    <div className="p-6">
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
      <section className="py-16 md:py-24" style={{ backgroundColor: '#F5F2E8' }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Section Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-[32px] md:text-[48px] font-normal mb-8"
              style={{ fontFamily: 'DM Serif Display' }}
            >
              <span className="text-[#37405E]">Our Track </span>
              <span 
                className="bg-gradient-to-r from-[#37405E] to-[#D3AC4A] bg-clip-text text-transparent"
              >
                Record
              </span>
            </h2>
          </motion.div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Side - Images with Stats */}
            <motion.div
              className="grid grid-cols-1 gap-6"
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
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-[#D3AC4A] rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-lg"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    <div className="text-[40px] font-bold text-[#37405E]" style={{ fontFamily: 'DM Serif Display' }}>0</div>
                    <div className="text-[14px] font-medium text-[#37405E]" style={{ fontFamily: 'Futura-Medium' }}>Legal Disputes</div>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Images */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <motion.div
                  className="relative h-32 md:h-40 rounded-lg overflow-hidden"
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
                <motion.div
                  className="relative h-32 md:h-40 rounded-lg overflow-hidden"
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

            {/* Right Side - Statistics Cards */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Completed Premium Projects */}
              <motion.div
                className="bg-white rounded-lg p-8 text-center shadow-lg border border-gray-100"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-[64px] md:text-[80px] font-bold text-[#D3AC4A] mb-2" style={{ fontFamily: 'DM Serif Display' }}>3</div>
                <div className="text-[16px] md:text-[18px] font-medium text-[#37405E]" style={{ fontFamily: 'Futura-Medium' }}>
                  Completed Premium Projects
                </div>
              </motion.div>

              {/* Customer Satisfaction */}
              <motion.div
                className="bg-[#37405E] rounded-lg p-8 text-center shadow-lg"
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
                className="bg-white rounded-lg p-8 text-center shadow-lg border border-gray-100"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-[64px] md:text-[80px] font-bold text-[#D3AC4A] mb-2" style={{ fontFamily: 'DM Serif Display' }}>100%</div>
                <div className="text-[16px] md:text-[18px] font-medium text-[#37405E]" style={{ fontFamily: 'Futura-Medium' }}>
                  Timely Registrations
                </div>
              </motion.div>

              {/* Total Units Delivered */}
              <motion.div
                className="bg-[#37405E] rounded-lg p-8 text-center shadow-lg"
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
                className="text-[#D3AC4A]"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <svg width="80" height="60" viewBox="0 0 80 60" fill="currentColor">
                  <path d="M0 40V20C0 8.954 8.954 0 20 0h10v20H20v20H0zM50 40V20c0-11.046 8.954-20 20-20h10v20H70v20H50z"/>
                </svg>
              </motion.div>

              {/* Title */}
              <motion.h2
                className="text-[32px] md:text-[48px] font-normal leading-tight"
                style={{ fontFamily: 'DM Serif Display' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <span className="text-[#37405E]">Our </span>
                <span className="text-[#D3AC4A]">Commitment</span>
              </motion.h2>

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