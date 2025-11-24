'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { UniversalHeader } from '@/components/shared/header/UniversalHeader';
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
      
      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 opacity-50 group-hover:opacity-100 transition-all duration-300"
      >
        <Image
          src="/images/current project page - ff/Anicham/icons/second fold/left Vector.svg"
          alt="Previous"
          width={40}
          height={40}
        />
      </button>
      
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 opacity-50 group-hover:opacity-100 transition-all duration-300"
      >
        <Image
          src="/images/current project page - ff/Anicham/icons/second fold/right Vector.svg"
          alt="Next"
          width={40}
          height={40}
        />
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
        {/* Step Cut Design Layer */}
        <div className="absolute inset-2 sm:inset-4 rounded-lg overflow-hidden">
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

        {/* Title - Centered over building image */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white drop-shadow-2xl"
              style={{ fontFamily: 'DM Serif Display' }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Our Current Projects
            </motion.h1>
          </div>
        </div>

        {/* Cream Breadcrumb Bar */}
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
                  src="/images/current project page - ff/icons/first fold icon.svg"
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
                  src="/images/current project page - ff/icons/first fold icon.svg"
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
                <Link href="/current-projects" className="hover:text-[#D3AC4A] transition-colors cursor-pointer">
                  Our Current Projects
                </Link>
                {/* <img
                  src="/images/current project page - ff/icons/first fold icon.svg"
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
                <span>Anicham</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Second Fold - Project Details */}
      <section className="py-10 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Project Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-6 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:mb-8 font-normal text-[#37405E] mb-2" style={{ fontFamily: 'DM Serif Display' }}>
              Anicham & Magilam – <span className="text-[#D3AC4A]">Ramanathapuram, Coimbatore</span>
            </h2>
          </motion.div>

          <div className="lg:flex gap-4 lg:gap-12 space-y-12 lg:space-y-0">
            {/* Left Side - Main Project Image Carousel */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='lg:w-3/5'
            >
              <ProjectImageCarousel />
            </motion.div>

            {/* Right Side - Location Map - Exact Reference Design */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 lg:w-2/5"
            >
              <div className="relative h-[400px] rounded-lg overflow-hidden bg-[#8B7B6E] ">
                {/* Embed Google Maps using iframe */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5543.6178016461645!2d77.0050692!3d10.982842!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859004af70d41%3A0x26f827bd348ccc28!2sFair%20Field!5e1!3m2!1sen!2sin!4v1763708552049!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
                
                {/* Red Location Marker - Custom overlay to show exact project location */}
                {/* <div className="absolute top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="relative">
                    <div className="w-6 h-6 bg-[#E53E3E] rounded-full border-2 border-white shadow-lg relative z-10">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1 w-0 h-0 border-l-[3px] border-r-[3px] border-t-[4px] border-l-transparent border-r-transparent border-t-[#E53E3E]"></div>
                  </div>
                </div> */}

                {/* Location Info Card - Bottom Right as in reference with yellow accent */}
                {/* <div className="absolute bottom-4 right-4 bg-white rounded-lg p-3 shadow-lg max-w-[200px] z-20">
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
                </div> */}
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
              Located on Ramanathapuram to Nagallapuram Road, near Peran Apartments, Anicham & Magilam offers the perfect blend of city convenience and peaceful living. It&apos;s a 5-acre premium residential community surrounded by schools, hospitals, supermarkets, and IT hubs, everything your family needs within minutes.
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
              className="bg-[#D3AC4A1A] rounded-lg p-8 lg:py-12"
            >
              <h4 className="text-[20px] font-bold text-[#37405E] mb-6" style={{ fontFamily: 'DM Serif Display' }}>
                Pricing & Units
              </h4>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/current project page - ff/Anicham/icons/second fold/project unit icons/Vector 1.svg"
                    alt="Land Price"
                    width={20}
                    height={20}
                  />
                  <span className="text-[#37405E] font-medium" style={{ fontFamily: 'Futura-Medium' }}>
                    <strong>Land Price:</strong> From ₹19.90 Lakhs per Cent
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
                     <strong>Villas:</strong> From ₹1.79 Cr onwards
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
                     <strong>Project Size:</strong> 5 Acres |  <strong>Total Units:</strong> 73 (Plots + Villas)
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
              className="bg-[#D3AC4A1A] rounded-lg p-8 lg:py-12"
            >
              <h4 className="text-[20px] font-bold text-[#37405E] mb-6" style={{ fontFamily: 'DM Serif Display' }}>
                Project Type
              </h4>
              <div className="space-y-6">
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
            className="mt-4 lg:mt-20"
          >
            <h4 className="text-[28px] font-normal text-[#937B37] text-center mb-4 lg:mb-12" style={{ fontFamily: 'DM Serif Display' }}>
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
                  className="bg-white rounded-lg overflow-hidden border border-[#00684F20] shadow-md hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-[300px] mx-2 mt-2">
                    <Image
                      src={villa.image}
                      alt={villa.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="p-6 text-center flex-grow flex flex-col">
                    <h5 className="text-lg font-bold text-[#37405E] mb-2" style={{ fontFamily: 'DM Serif Display' }}>
                      {villa.title}
                    </h5>
                    <p className="text-sm text-[#37405E] font-medium mb-4 flex-grow" style={{ fontFamily: 'Futura-Medium' }}>
                      {villa.cents} | {villa.type} | {villa.sqft}
                    </p>
                  </div>
                  <div>
                    <button 
                      className="w-full py-4 font- text-sm lsm:text-base md:text-lg transition-colors bg-[#D3AC4A] text-[#37405E] hover:bg-[#C19B42]"
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
      <section className="py-6 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-4 lg:mb-16"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#37405E] mb-4" style={{ fontFamily: 'DM Serif Display' }}>
              Key Features & <span className="bg-gradient-to-r from-[#5764B3] to-[#8B7ED8] bg-clip-text text-transparent">Benefits</span>
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-md overflow-hidden shadow-lg"
          >
            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-[#D3AC4A] scrollbar-track-gray-100">
              <table className="w-full border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-[#37405E] text-white">
                    <th className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-center text-sm sm:text-base lg:text-lg font-bold border-r border-white/20" style={{ fontFamily: 'Futura-Heavy' }}>Feature</th>
                    <th className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-center text-sm sm:text-base lg:text-lg font-bold border-r border-white/20" style={{ fontFamily: 'Futura-Heavy' }}>Benefit</th>
                    <th className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-center text-sm sm:text-base lg:text-lg font-bold" style={{ fontFamily: 'Futura-Heavy' }}>Advantage</th>
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
                      <td className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-[#37405E] font-medium text-sm sm:text-base text-center border-r border-gray-200" style={{ fontFamily: 'Futura-Medium' }}>
                        {row.feature}
                      </td>
                      <td className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-[#37405E] font-medium text-sm sm:text-base text-center border-r border-gray-200" style={{ fontFamily: 'Futura-Medium' }}>
                        {row.benefit}
                      </td>
                      <td className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-[#37405E] font-medium text-sm sm:text-base text-center" style={{ fontFamily: 'Futura-Medium' }}>
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
      <section className="pt-10 lg:pt-20 bg-gradient-to-b from-[#37405E] to-[#2A2F45] relative overflow-hidden rounded-3xl">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-0 lg:mb-16"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal" style={{ fontFamily: 'DM Serif Display' }}>
              <span className="bg-gradient-to-r from-[#D3AC4A] to-[#F5D76E] bg-clip-text text-transparent">Amenities</span>
            </h3>
          </motion.div>

          <div className="relative h-[250px] sm:h-[400px] lg:h-[500px] flex items-center justify-center">
            {/* Use the complete SVG design with overlaid house image and text labels */}
            <motion.div 
              className="relative w-full max-w-4xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Background SVG with amenity circles */}
              <Image
                src="/images/current project page - ff/Anicham/icons/fourth fold/fourth fold Vector- amenities.svg"
                alt="Amenities Background"
                width={1314}
                height={729}
                className="object-contain w-full h-auto"
              />

              {/* House Image positioned in the center area */}
              <div className="absolute -bottom-25 sm:-bottom-20 left-[50%] transform -translate-x-1/2  z-10">
                <div className="relative w-[230px] h-[250px] md:w-[500px] md:h-[380px]">
                  <Image
                    src="/images/current project page - ff/Anicham/images/fourth fold image - anicham.png"
                    alt="Anicham Villa"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Amenity Text Labels positioned over the SVG circles */}
              {[
                { top: '14%', left: '50.5%', name: 'Street Lights' },
                { top: '24%', left: '66%', name: 'Water \n Connection' },
                { top: '40%', left: '81.5%', name: 'Borewell' },
                { top: '67%', left: '90%', name: 'Children\'s Park' },
                { top: '93%', left: '93.5%', name: 'Landscaped\nSpaces' },
                { top: '92.5%', left: '6.5%', name: 'Gated \nEntrance\nArch' },
                { top: '64%', left: '8.70%', name: 'CCTV\nSurveillance' },
                { top: '40%', left: '18%', name: 'Security\n Cabin' },
                { top: '25%', left: '34%', name: 'Tar Roads' }
              ].map((amenity, index) => (
                <motion.div
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    top: amenity.top,
                    left: amenity.left,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    <span className="text-[#37405E] text-[7px] md:text-sm font-semibold leading-tight block" style={{ fontFamily: 'Futura-Medium' }}>
                      {amenity.name.split('\n').map((line, lineIndex) => (
                        <span key={lineIndex}>
                          {line}
                          {lineIndex < amenity.name.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fifth Fold - Approvals */}
      <section className="py-10 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-2 lg:mb-16"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#37405E] mb-4" style={{ fontFamily: 'DM Serif Display' }}>
              <span className="bg-gradient-to-r from-[#5764B3] to-[#8B7ED8] bg-clip-text text-transparent">Approvals</span>
            </h3>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-around items-start gap-12 md:gap-20 max-w-7xl mx-auto">
            {/* DTCP approved */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="w-10 h-10 flex-shrink-0">
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
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 flex-shrink-0">
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
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 flex-shrink-0">
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
      <section className="py-10 lg:py-20 relative overflow-hidden rounded-3xl">
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
              className="bg-white rounded-tl-sm rounded-br-sm rounded-tr-[50px] rounded-bl-[50px] px-4 py-6 md:py-10 md:px-2 md:px-6 max-w-lg shadow-2xl"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#37405E] mb-8 leading-tight" style={{ fontFamily: 'DM Serif Display' }}>
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

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#D3AC4A] text-[#37405E] px-3 py-3 md:px-6 md:py-3 rounded-sm font-bold text-base hover:bg-[#C19B42] transition-colors flex items-center justify-center space-x-2 book-visit-button w-full sm:w-1/2"
                  style={{ fontFamily: 'Futura-Heavy' }}
                >
                  <span>Book your visit today</span>
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