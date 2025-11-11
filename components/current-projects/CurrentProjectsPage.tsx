'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import UniversalFooter from '@/components/shared/footer/UniversalFooter';

// Project Image Carousel Component
const ProjectImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const carouselImages = [
    "/images/current project page - ff/Anicham/images/second fold image/ChatGPT Image Sep 26, 2025, 05_11_08 PM.png",
    "/images/current project page - ff/Anicham/images/second fold image/10.png",
    "/images/current project page - ff/Anicham/images/second fold image/11.png", 
    "/images/current project page - ff/Anicham/images/second fold image/12.png",
    "/images/current project page - ff/Anicham/images/second fold image/13.png",
    "/images/current project page - ff/Anicham/images/second fold image/6.png"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="relative h-[400px] rounded-lg overflow-hidden group">
      {/* Main Image */}
      <Image
        src={carouselImages[currentImageIndex]}
        alt="Anicham & Magilam Project"
        fill
        className="object-cover transition-opacity duration-300"
      />
      
      {/* Navigation Arrows - Yellow as in reference */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#D3AC4A] hover:bg-[#B8941F] text-[#37405E] p-2 rounded-full opacity-80 group-hover:opacity-100 transition-all duration-300 shadow-lg"
      >
        <ChevronLeft size={20} />
      </button>
      
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#D3AC4A] hover:bg-[#B8941F] text-[#37405E] p-2 rounded-full opacity-80 group-hover:opacity-100 transition-all duration-300 shadow-lg"
      >
        <ChevronRight size={20} />
      </button>
      
      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentImageIndex ? 'bg-[#D3AC4A]' : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function CurrentProjectsPage() {
  const [selectedVilla, setSelectedVilla] = useState(1);

  const villaOptions = [
    {
      id: 1,
      title: "Villa 1",
      cents: "3.79 cents",
      type: "4BHK",
      sqft: "2,272 sq.ft",
      status: "Ready to Move",
      image: "/images/current project page - ff/Anicham/images/second fold villas option image/villa 1 image.jpg"
    },
    {
      id: 2,
      title: "Villa 2",
      cents: "4.82 cents",
      type: "4BHK",
      sqft: "2,530 sq.ft",
      status: "Finishing Stage",
      image: "/images/current project page - ff/Anicham/images/second fold villas option image/villa 2 image.jpg"
    },
    {
      id: 3,
      title: "Villa 3",
      cents: "4.39 cents",
      type: "3BHK",
      sqft: "2,600 sq.ft",
      status: "Under Construction",
      image: "/images/current project page - ff/Anicham/images/second fold villas option image/villa 3.png"
    }
  ];

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
                <span className="text-[16px] text-[#D3AC4A] font-medium drop-shadow-lg cursor-pointer" style={{ fontFamily: 'Alata' }}>Project</span>
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

        {/* Our Current Projects Title - Centered over building image */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center px-4">
            <motion.h1 
              className="text-[32px] md:text-[48px] font-normal text-white drop-shadow-2xl"
              style={{ fontFamily: 'DM Serif Display' }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Our Current Projects
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
                <span>Project</span>
                <span>›</span>
                <span>Our Current Projects</span>
                <span>›</span>
                <span>Anicham</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Second Fold - Project Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Project Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-[36px] md:text-[48px] font-normal text-[#37405E] mb-2" style={{ fontFamily: 'DM Serif Display' }}>
              Anicham & Magilam – <span className="text-[#D3AC4A]">Ramanathapuram, Coimbatore</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Main Project Image Carousel */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ProjectImageCarousel />
            </motion.div>

            {/* Right Side - Location Map - Exact Reference Design */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative h-[400px] rounded-lg overflow-hidden bg-[#8B7B6E]">
                {/* Embed Google Maps using iframe */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15679.456!2d76.9475!3d11.0156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859b82b3d2b35%3A0x123456789!2sVedapatti%20Road%2C%20Coimbatore%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin&q=Vedapatti+road+Coimbatore+Karthik+villa"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
                
                {/* Red Location Marker - Custom overlay to show exact project location */}
                <div className="absolute top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="relative">
                    <div className="w-6 h-6 bg-[#E53E3E] rounded-full border-2 border-white shadow-lg relative z-10">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1 w-0 h-0 border-l-[3px] border-r-[3px] border-t-[4px] border-l-transparent border-r-transparent border-t-[#E53E3E]"></div>
                  </div>
                </div>

                {/* Location Info Card - Bottom Right as in reference with yellow accent */}
                <div className="absolute bottom-4 right-4 bg-white rounded-lg p-3 shadow-lg max-w-[200px] z-20">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#D3AC4A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Image
                        src="/images/current project page - ff/Anicham/icons/second fold/location Vector.svg"
                        alt="Location"
                        width={14}
                        height={14}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#37405E] text-sm leading-tight" style={{ fontFamily: 'Futura-Heavy' }}>
                        Anicham & Magilam
                      </h4>
                      <p className="text-[#37405E] font-medium text-xs leading-tight mt-1" style={{ fontFamily: 'Futura-Medium' }}>
                        Ramanathapuram, Coimbatore
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Project Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-left"
          >
            <h3 className="text-[24px] font-normal text-[#37405E] mb-4" style={{ fontFamily: 'DM Serif Display' }}>
              Premium villas & DTCP-approved plots in the heart of the city
            </h3>
            <p className="text-[#37405E] font-medium text-lg leading-relaxed" style={{ fontFamily: 'Futura-Medium' }}>
              Located on Ramanathapuram to Nagallapuram Road, near Peran Apartments, Anicham & Magilam offers the perfect blend of city convenience and peaceful living. It's a 5-acre premium residential community surrounded by schools, hospitals, supermarkets, and IT hubs, everything your family needs within minutes.
            </p>
          </motion.div>

          {/* Dotted Line Separator - From image position to end of map */}
          <div className="mt-12 mb-8">
            <div className="w-full border-t-2 border-dotted border-[#D1D1D1]"></div>
          </div>

          {/* Pricing & Units and Project Type */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Pricing & Units */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#F5F2E8] rounded-lg p-8"
            >
              <h4 className="text-[20px] font-bold text-[#37405E] mb-6" style={{ fontFamily: 'DM Serif Display' }}>
                Pricing & Units
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/current project page - ff/Anicham/icons/second fold/project unit icons/Vector 1.svg"
                    alt="Land Price"
                    width={20}
                    height={20}
                  />
                  <span className="text-[#37405E] font-medium" style={{ fontFamily: 'Futura-Medium' }}>
                    Land Price: From ₹19.90 Lakhs per Cent
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/current project page - ff/Anicham/icons/second fold/project unit icons/Vector 2.svg"
                    alt="Villas"
                    width={20}
                    height={20}
                  />
                  <span className="text-[#37405E] font-medium" style={{ fontFamily: 'Futura-Medium' }}>
                    Villas: From ₹1.79 Cr onwards
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/current project page - ff/Anicham/icons/second fold/project unit icons/Vector 3.svg"
                    alt="Project Size"
                    width={20}
                    height={20}
                  />
                  <span className="text-[#37405E] font-medium" style={{ fontFamily: 'Futura-Medium' }}>
                    Project Size: 5 Acres | Total Units: 73 (Plots + Villas)
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Project Type - Yellow Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#F5F2E8] rounded-lg p-8"
            >
              <h4 className="text-[20px] font-bold text-[#37405E] mb-6" style={{ fontFamily: 'DM Serif Display' }}>
                Project Type
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/current project page - ff/Anicham/icons/second fold/tick Vector.svg"
                    alt="Check"
                    width={20}
                    height={20}
                  />
                  <span className="text-[#37405E] font-medium" style={{ fontFamily: 'Futura-Medium' }}>
                    Premium villas & DTCP-approved residential plots
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/current project page - ff/Anicham/icons/second fold/tick Vector.svg"
                    alt="Check"
                    width={20}
                    height={20}
                  />
                  <span className="text-[#37405E] font-medium" style={{ fontFamily: 'Futura-Medium' }}>
                    Gated Community with modern facilities
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/current project page - ff/Anicham/icons/second fold/tick Vector.svg"
                    alt="Check"
                    width={20}
                    height={20}
                  />
                  <span className="text-[#37405E] font-medium" style={{ fontFamily: 'Futura-Medium' }}>
                    Designed for comfort, safety, and appreciation
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Villa Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h4 className="text-[28px] font-normal text-[#37405E] text-center mb-12" style={{ fontFamily: 'DM Serif Display' }}>
              Villa Options
            </h4>
            
            <div className="grid md:grid-cols-3 gap-8">
              {villaOptions.map((villa) => (
                <motion.div
                  key={villa.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: villa.id * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-[200px]">
                    <Image
                      src={villa.image}
                      alt={villa.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h5 className="text-lg font-bold text-[#37405E] mb-2" style={{ fontFamily: 'DM Serif Display' }}>
                      {villa.title}
                    </h5>
                    <p className="text-sm text-[#37405E] font-medium mb-1" style={{ fontFamily: 'Futura-Medium' }}>
                      {villa.cents} | {villa.type} | {villa.sqft}
                    </p>
                    <button 
                      className="mt-4 px-6 py-2 rounded-lg font-bold text-sm transition-colors bg-[#D3AC4A] text-[#37405E]"
                      style={{ fontFamily: 'Futura-Heavy' }}
                    >
                      {villa.status}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Third Fold - Key Features & Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-[36px] md:text-[48px] font-normal text-[#37405E] mb-4" style={{ fontFamily: 'DM Serif Display' }}>
              Key Features & <span className="bg-gradient-to-r from-[#5764B3] to-[#8B7ED8] bg-clip-text text-transparent">Benefits</span>
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#37405E] text-white">
                    <th className="px-8 py-6 text-center text-lg font-bold border-r border-white/20" style={{ fontFamily: 'Futura-Heavy' }}>Feature</th>
                    <th className="px-8 py-6 text-center text-lg font-bold border-r border-white/20" style={{ fontFamily: 'Futura-Heavy' }}>Benefit</th>
                    <th className="px-8 py-6 text-center text-lg font-bold" style={{ fontFamily: 'Futura-Heavy' }}>Advantage</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: 'DTCP & RERA approved',
                      benefit: 'Complete legal security for buyers',
                      advantage: 'Buy with total confidence.'
                    },
                    {
                      feature: 'Prime city location',
                      benefit: 'Near schools, hospitals & shopping hubs',
                      advantage: 'Live closer to what matters most.'
                    },
                    {
                      feature: 'Wide roads & Tarred streets',
                      benefit: 'Better access & visibility',
                      advantage: 'Adds beauty and long-term property value.'
                    },
                    {
                      feature: 'Gated & CCTV secured layout',
                      benefit: '24x7 peace of mind',
                      advantage: 'Safe for families & seniors.'
                    },
                    {
                      feature: 'Water & EB connection ready',
                      benefit: 'Immediate build potential',
                      advantage: 'No delays or hidden costs.'
                    },
                    {
                      feature: 'Strong appreciation potential',
                      benefit: '20-25% annual growth',
                      advantage: 'Ideal for investors & end-users alike.'
                    }
                  ].map((row, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`border-b border-gray-200 transition-colors ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      }`}
                    >
                      <td className="px-8 py-6 text-[#37405E] font-medium text-base text-center border-r border-gray-200" style={{ fontFamily: 'Futura-Medium' }}>
                        {row.feature}
                      </td>
                      <td className="px-8 py-6 text-[#37405E] font-medium text-base text-center border-r border-gray-200" style={{ fontFamily: 'Futura-Medium' }}>
                        {row.benefit}
                      </td>
                      <td className="px-8 py-6 text-[#37405E] font-medium text-base text-center" style={{ fontFamily: 'Futura-Medium' }}>
                        {row.advantage}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fourth Fold - Amenities */}
      <section className="py-20 bg-gradient-to-b from-[#37405E] to-[#2A2F45] relative overflow-hidden rounded-3xl mx-4 md:mx-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-[36px] md:text-[48px] font-normal mb-4" style={{ fontFamily: 'DM Serif Display' }}>
              <span className="bg-gradient-to-r from-[#D3AC4A] to-[#F5D76E] bg-clip-text text-transparent">Amenities</span>
            </h3>
          </motion.div>

          {/* Amenities Section with Background SVG and Content */}
          <div className="relative max-w-5xl mx-auto h-[500px] md:h-[600px] flex items-center justify-center">
            {/* Background SVG with connecting lines and circles */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/images/current project page - ff/Anicham/icons/fourth fold/fourth fold Vector- amenities.svg"
                alt="Amenities Background"
                fill
                className="object-contain"
              />
            </div>
            
            {/* Central House Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute z-0 w-[580px] h-[420px] md:w-[735px] md:h-[525px] bottom-[-50px] left-[50%] -translate-x-1/2"
            >
              <Image
                src="/images/current project page - ff/Anicham/images/fourth fold image - anicham.png"
                alt="Anicham Villa"
                fill
                className="object-contain rounded-lg"
              />
            </motion.div>

            {/* Amenity Text Labels positioned BELOW each SVG circle */}
            {[
              { name: "Street Lights", position: "top-[18%] left-[51%] -translate-x-1/2" },
              { name: "Water\nConnection", position: "top-[24%] right-[26%] -translate-x-1/2" },
              { name: "Borewell", position: "top-[40%] right-[11%] -translate-x-1/2" },
              { name: "Children's Park", position: "bottom-[32%] right-[2%] -translate-x-1/2" },
              { name: "Landscaped\nSpaces", position: "bottom-[8%] left-[94%] -translate-x-1/2" },
              { name: "Gated Entrance\nArch", position: "bottom-[6%] left-[6%] -translate-x-1/2" },
              { name: "CCTV\nSurveillance", position: "top-[63%] left-[9%] -translate-x-1/2" },
              { name: "Security Cabin", position: "top-[40%] left-[18%] -translate-x-1/2" },
              { name: "Tar Roads", position: "top-[27%] left-[34%] -translate-x-1/2" }
            ].map((amenity, index) => (
              <motion.div
                key={amenity.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                className={`absolute ${amenity.position} z-20 text-center w-16 md:w-20`}
              >
                <span className="text-[#37405E] text-xs md:text-sm font-semibold leading-tight block" style={{ fontFamily: 'Futura-Medium' }}>
                  {amenity.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fifth Fold - Approvals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-[36px] md:text-[48px] font-normal text-[#37405E] mb-4" style={{ fontFamily: 'DM Serif Display' }}>
              <span className="bg-gradient-to-r from-[#5764B3] to-[#8B7ED8] bg-clip-text text-transparent">Approvals</span>
            </h3>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 max-w-6xl mx-auto">
            {/* DTCP approved */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="w-16 h-16 flex-shrink-0">
                <Image
                  src="/images/current project page - ff/Anicham/icons/fifth fold/Vector 1.svg"
                  alt="DTCP approved"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="text-lg md:text-xl font-bold text-[#37405E]" style={{ fontFamily: 'Futura-Heavy' }}>
                DTCP approved
              </h4>
            </motion.div>

            {/* RERA registered */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="w-16 h-16 flex-shrink-0">
                <Image
                  src="/images/current project page - ff/Anicham/icons/fifth fold/Vector 2.svg"
                  alt="RERA registered"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold text-[#37405E] mb-1" style={{ fontFamily: 'Futura-Heavy' }}>
                  RERA registered: TN/11
                </h4>
                <p className="text-sm md:text-base text-[#37405E]" style={{ fontFamily: 'Futura-Medium' }}>
                  Layout/346/2021 &<br />351/2021
                </p>
              </div>
            </motion.div>

            {/* Bank Loan Assistance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="w-16 h-16 flex-shrink-0">
                <Image
                  src="/images/current project page - ff/Anicham/icons/fifth fold/Vector 3.svg"
                  alt="Bank Loan Assistance"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold text-[#37405E] mb-1" style={{ fontFamily: 'Futura-Heavy' }}>
                  Bank Loan Assistance
                </h4>
                <p className="text-sm md:text-base text-[#37405E]" style={{ fontFamily: 'Futura-Medium' }}>
                  available
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sixth Fold - Contact CTA */}
      <section className="py-20 relative overflow-hidden rounded-3xl mx-4 md:mx-8">
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <Image
            src="/images/current project page - ff/Anicham/images/sixth fold image.png"
            alt="Contact Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex justify-end">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-[20px] p-8 md:p-12 max-w-lg shadow-2xl"
            >
              <h3 className="text-[32px] md:text-[40px] font-normal text-[#37405E] mb-8 leading-tight" style={{ fontFamily: 'DM Serif Display' }}>
                Book your <span className="bg-gradient-to-r from-[#37405E] to-[#D3AC4A] bg-clip-text text-transparent">site visit today</span>
              </h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/current project page - ff/Anicham/icons/sixth fold/call (1).svg"
                    alt="Call"
                    width={24}
                    height={24}
                  />
                  <span className="text-[#37405E] font-medium text-lg" style={{ fontFamily: 'Futura-Medium' }}>
                    +91 79008 82288 | +91 79008 84488
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <Image
                    src="/images/current project page - ff/Anicham/icons/sixth fold/mail Vector.svg"
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
                    src="/images/current project page - ff/Anicham/icons/sixth fold/address.svg"
                    alt="Address"
                    width={24}
                    height={24}
                    className="mt-1"
                  />
                  <span className="text-[#37405E] font-medium text-lg" style={{ fontFamily: 'Futura-Medium' }}>
                    Ramanathapuram To Nanjundapuram Road,<br />
                    Near Peran Apartment, Coimbatore
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#D3AC4A] text-[#37405E] px-6 py-3 rounded-lg font-bold text-base hover:bg-[#C19B42] transition-colors flex items-center space-x-2 book-visit-button flex-1"
                  style={{ fontFamily: 'Futura-Heavy' }}
                >
                  <span>Book your visit today</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"/>
                  </svg>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#37405E] text-white px-6 py-3 rounded-lg font-bold text-base hover:bg-[#2A2F45] transition-colors call-us-button"
                  style={{ fontFamily: 'Futura-Heavy' }}
                >
                  Call us now
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <UniversalFooter />
    </main>
  );
}