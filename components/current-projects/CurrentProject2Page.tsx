'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import UniversalFooter from '@/components/shared/footer/UniversalFooter';

export default function CurrentProject2Page() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const projectImages = [
    '/images/current project page - ff/vaagai/images/second fold/vaagai image 1.png',
    '/images/current project page - ff/vaagai/images/second fold/vaagai image 2.png',
    '/images/current project page - ff/vaagai/images/second fold/vaagai image 3.png',
    '/images/current project page - ff/vaagai/images/second fold/vaagai image 4.png',
    '/images/current project page - ff/vaagai/images/second fold/vaagai image 5.png',
    '/images/current project page - ff/vaagai/images/second fold/vaagai image 6.png',
    '/images/current project page - ff/vaagai/images/second fold/vaagai image 7.png'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  const amenities = [
    { name: 'Water Supply', icon: 'water' },
    { name: 'Compound Wall', icon: 'wall' },
    { name: 'EB Line', icon: 'electricity' },
    { name: 'Street Lights', icon: 'streetlight' },
    { name: 'Security Cabin', icon: 'security' },
    { name: 'Entrance Arch', icon: 'arch' },
    { name: 'Storm Water Drainage', icon: 'drainage' },
    { name: 'Tar Roads', icon: 'roads' },
    { name: 'CCTV Coverage', icon: 'cctv' }
  ];

  // Function to render amenity icons - using exact SVG paths from the original Vaagai design file
  const getAmenityIcon = (iconType: string) => {
    const iconProps = {
      width: "24",
      height: "24",
      viewBox: "0 0 100 100",
      fill: "#D3AC4A"
    };

    switch (iconType) {
      case 'water': // Water droplet from original SVG (lines 4)
        return (
          <svg {...iconProps}>
            <path d="M55.64 25.3438C54.568 23.5208 53.432 23.5836 52.36 25.3438C47.441 32.6362 40 43.5747 40 49.044C40 52.8787 41.577 56.3992 44.099 58.9138C46.622 61.4284 50.153 63 54 63C57.847 63 61.378 61.4284 63.901 58.9138C66.423 56.3992 68 52.8787 68 49.044C68 43.5118 60.559 32.6362 55.64 25.3438ZM64.09 55.2676C63.081 56.9021 61.631 58.348 59.865 59.3538C59.045 59.7939 58.036 59.5424 57.595 58.7252C57.09 57.8451 57.405 56.8392 58.225 56.3992C59.486 55.7077 60.496 54.7018 61.252 53.5074C62.009 52.3129 62.45 50.9299 62.513 49.484C62.577 48.541 63.333 47.8495 64.279 47.9124C65.225 47.9753 65.919 48.7296 65.856 49.6726C65.73 51.6843 65.099 53.5702 64.09 55.2676Z" fill="#D3AC4A"/>
          </svg>
        );
      case 'wall': // Compound wall/bricks from original SVG (lines 6-21)
        return (
          <svg {...iconProps}>
            <g transform="translate(20,30) scale(1.5)">
              <path d="M31 13.442V10.99C31 10.446 30.548 10 29.998 10H24.002C23.452 10 23 10.446 23 10.99V13.441C23 13.984 23.452 14.43 24.002 14.43H29.998C30.548 14.43 31 13.985 31 13.442Z" fill="#D3AC4A"/>
              <path d="M23.284 15.513H25.34V18.102H23.284V15.513Z" fill="#D3AC4A"/>
              <path d="M27.453 18.102V15.513H26.435V18.102H27.453Z" fill="#D3AC4A"/>
              <path d="M28.566 18.102V15.513H27.549V18.102H28.566Z" fill="#D3AC4A"/>
              <path d="M29.661 15.513H30.717V18.102H29.661V15.513Z" fill="#D3AC4A"/>
            </g>
          </svg>
        );
      case 'electricity': // Lightning/electricity from original SVG (lines 23-30)
        return (
          <svg {...iconProps}>
            <g transform="translate(25,25) scale(2)">
              <path d="M20.843 15.892C20.635 15.946 20.49 16.141 20.49 16.365C20.489 16.514 20.489 16.688 20.489 16.854C20.489 17.003 20.555 17.144 20.667 17.237C20.778 17.33 20.924 17.363 21.063 17.328C22.645 16.928 23.89 16.472 24.583 16.194L25.811 18.195C26.109 18.599 26.412 18.651 26.756 18.4C27.061 18.178 27.085 17.577 26.755 17.082C25.937 15.858 25.539 14.96 25.539 14.96C25.379 14.598 24.971 14.438 24.623 14.6L20.843 15.892Z" fill="#D3AC4A"/>
            </g>
          </svg>
        );
      case 'streetlight': // Street light from original SVG (lines 56-60)
        return (
          <svg {...iconProps}>
            <g transform="translate(25,15) scale(1.8)">
              <path d="M24.31 16.321C24.31 10.63 19.69 6 14 6C8.31 6 3.69 10.63 3.69 16.321C3.69 19.827 5.46 23.049 8.35 24.946L8.86 22.728C6.92 21.175 5.77 18.823 5.77 16.321C5.77 11.777 9.46 8.08 14 8.08C18.54 8.08 22.23 11.777 22.23 16.321C22.23 18.817 21.08 21.167 19.15 22.721L19.65 24.944C22.55 23.042 24.31 19.82 24.31 16.321Z" fill="#D3AC4A"/>
              <path d="M14 17.865C15.15 17.865 16.27 18.259 17.15 18.975C17.87 19.544 18.41 20.317 18.74 21.183C20.04 19.914 20.8 18.165 20.8 16.321C20.8 12.565 17.75 9.51 14 9.51C10.25 9.51 7.2 12.565 7.2 16.321C7.2 18.17 7.96 19.921 9.26 21.189C9.99 19.205 11.84 17.865 14 17.865Z" fill="#D3AC4A"/>
            </g>
          </svg>
        );
      case 'security': // Security cabin/shield from original SVG (lines 76)
        return (
          <svg {...iconProps}>
            <g transform="translate(15,20) scale(1.2)">
              <path d="M42.42 18C44.42 18 46.15 19.377 46.6 21.321L53.85 52.75C54.14 54.023 53.84 55.36 53.03 56.383C52.21 57.404 50.98 58 49.67 58H28.29C26.98 58 25.75 57.404 24.93 56.383C24.12 55.36 23.82 54.023 24.11 52.75L31.36 21.321C31.81 19.377 33.54 18 35.54 18H42.42ZM40.41 25.857V24.429C40.41 23.64 39.77 23 38.98 23C38.19 23 37.55 23.64 37.55 24.429V25.857C37.55 26.646 38.19 27.286 38.98 27.286C39.77 27.286 40.41 26.646 40.41 25.857ZM40.41 33V30.857C40.41 30.069 39.77 29.429 38.98 29.429C38.19 29.429 37.55 30.069 37.55 30.857V33C37.55 33.789 38.19 34.429 38.98 34.429C39.77 34.429 40.41 33.789 40.41 33Z" fill="#D3AC4A"/>
            </g>
          </svg>
        );
      case 'arch': // Arch entrance from original SVG (lines 62-74)
        return (
          <svg {...iconProps}>
            <g transform="translate(10,20) scale(1.5)">
              <path d="M32.722 14V15.064H54V14H32.722Z" fill="#D3AC4A"/>
              <path d="M52.151 36.441H50.536V15.459H38.417V36.441H36.802V37.505H52.151V36.441ZM40.619 22.009H47.884V29.19H40.619V22.009ZM39.069 22.009H38.334V29.19H39.069V22.009Z" fill="#D3AC4A"/>
              <path d="M42.637 26.424L45.038 24.051L45.188 24.2L42.788 26.573L42.637 26.424Z" fill="#D3AC4A"/>
              <path d="M43.306 27.085L45.707 24.712L45.857 24.86L43.456 27.233L43.306 27.085Z" fill="#D3AC4A"/>
            </g>
          </svg>
        );
      case 'drainage': // Storm water drainage from original SVG (lines 57-58)
        return (
          <svg {...iconProps}>
            <g transform="translate(15,25) scale(1.8)">
              <path d="M20.65 13.938C19.44 13.097 17.49 13.097 16.29 13.938L14 15.534V18.005L15.47 16.981C17.15 15.806 19.78 15.806 21.46 16.981C22.67 17.821 24.62 17.821 25.82 16.981C27.51 15.806 30.14 15.806 31.82 16.981C33.02 17.821 34.98 17.821 36.18 16.981L38 18.005V15.534L35.72 13.938C34.51 13.097 32.56 13.097 31.36 13.938C29.8 15.026 27.44 15.094 25.76 14.168L24 13.938C22.8 13.097 20.84 13.097 19.64 13.938Z" fill="#D3AC4A"/>
              <path d="M39 21V19.749L36.71 18.153C35.51 17.313 33.56 17.313 32.35 18.153C30.67 19.328 28.04 19.328 26.36 18.153L24 18.153C22.32 19.328 19.68 19.328 18 18.153L16 19.749V21H39Z" fill="#D3AC4A"/>
            </g>
          </svg>
        );
      case 'roads': // Tar roads from original SVG (lines 78-81)
        return (
          <svg {...iconProps}>
            <g transform="translate(10,25) scale(1.6)">
              <path d="M41.869 31C42.424 31 42.876 30.548 42.876 29.993V26.934H35.6981V29.993C35.6981 30.548 36.1497 31 36.705 31H41.869Z" fill="#D3AC4A"/>
              <path d="M27.1243 26.934V29.993C27.1243 30.548 27.576 31 28.1313 31H33.295C33.8502 31 34.3019 30.548 34.3019 29.993V26.934H27.1243Z" fill="#D3AC4A"/>
              <path d="M26.1735 15.346H27.1243V21.046H42.876V15.346H43.827C44.475 15.346 45 14.821 45 14.173C45 13.525 44.475 13 43.827 13H26.1735C25.5254 13 25 13.525 25 14.173C25 14.821 25.5254 15.346 26.1735 15.346Z" fill="#D3AC4A"/>
              <path d="M42.947 18.01H42.876V18.392H27.1244V18.01H27.0531C26.314 18.01 25.7147 18.609 25.7147 19.348C25.7147 20.087 26.314 20.686 27.0531 20.686H42.947C43.686 20.686 44.285 20.087 44.285 19.348C44.285 18.609 43.686 18.01 42.947 18.01Z" fill="#D3AC4A"/>
            </g>
          </svg>
        );
      case 'cctv': // CCTV camera from original SVG (lines 83-87)
        return (
          <svg {...iconProps}>
            <g transform="translate(10,20) scale(1.4)">
              <path d="M39 33.669H41.15V42H39V33.669Z" fill="#D3AC4A"/>
              <path d="M53 33.851L42.44 36.739V38.079L53.81 34.947C53.95 34.908 54.07 34.826 54.15 34.713C54.24 34.6 54.29 34.463 54.29 34.321V29.692H53V33.851Z" fill="#D3AC4A"/>
              <path d="M50.07 28.402H57.21V25.377L50.07 22.652V28.402Z" fill="#D3AC4A"/>
              <path d="M68.16 20.741L42.91 11.139C41.95 14.935 42.54 17.935 43.87 18.862C44 18.947 44.13 19.017 44.27 19.069L49.56 21.086H49.61L49.71 21.13L68.21 28.176C67.44 26.379 67.39 23.685 68.16 20.741Z" fill="#D3AC4A"/>
              <path d="M77.16 12.192C76.21 11.828 74.91 12.304 73.61 13.501C72 15.084 70.78 17.011 70.02 19.138C68.27 23.735 68.6 28.302 70.73 29.116C72.86 29.93 76.14 26.729 77.88 22.138C79.62 17.547 79.29 13.006 77.16 12.192Z" fill="#D3AC4A"/>
            </g>
          </svg>
        );
      default:
        return (
          <svg {...iconProps}>
            <circle cx="50" cy="50" r="20" fill="#D3AC4A"/>
          </svg>
        );
    }
  };

  const featuresData = [
    {
      feature: 'DTCP approved layout',
      benefit: 'Verified titles',
      advantage: 'Buy safely with confidence.'
    },
    {
      feature: 'Ready-to-Build land',
      benefit: 'All basic infrastructure completed',
      advantage: 'Start construction immediately.'
    },
    {
      feature: 'Prime location',
      benefit: 'Near Palakkad Bypass & Bharathiar University',
      advantage: 'High potential for appreciation (25-40%).'
    },
    {
      feature: 'Street lights & Drainage',
      benefit: 'Complete civic infrastructure',
      advantage: 'Hassle-free living environment.'
    },
    {
      feature: 'Secure compound wall & Gate',
      benefit: 'Peaceful living',
      advantage: 'Perfect for families and senior citizens.'
    },
    {
      feature: 'Affordable premium pricing',
      benefit: '₹21L per cent',
      advantage: 'Best value among approved layouts in Coimbatore.'
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
                <a href="/" className="text-[16px] text-[#D3AC4A] font-medium hover:text-white transition-colors drop-shadow-lg" style={{ fontFamily: 'Alata' }}>Home</a>
                <a href="/about-us" className="text-[16px] text-white font-medium hover:text-[#D3AC4A] transition-colors drop-shadow-lg" style={{ fontFamily: 'Alata' }}>About us</a>
                <span className="text-[16px] text-white font-medium hover:text-[#D3AC4A] transition-colors drop-shadow-lg cursor-pointer" style={{ fontFamily: 'Alata' }}>Project</span>
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

        {/* Cream Breadcrumb Bar - Absolutely positioned at bottom with no gap */}
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
                <span>Vaagai</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Second Fold - Project Details */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Project Title */}
          <motion.div
            className="mb-8 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-[28px] md:text-[32px] lg:text-[40px] font-normal"
              style={{ fontFamily: 'DM Serif Display' }}
            >
              <span className="text-[#37405E]">Vaagai – </span>
              <span className="text-[#D3AC4A]">Telungupalayam, Coimbatore</span>
            </h2>
          </motion.div>

          {/* Images Section - Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8">
            {/* Left Side - Image Carousel */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src={projectImages[currentImageIndex]}
                    alt={`Vaagai Project - View ${currentImageIndex + 1}`}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#D3AC4A] rounded-full shadow-lg flex items-center justify-center hover:bg-[#C19B42] transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m15 18-6-6 6-6"/>
                  </svg>
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#D3AC4A] rounded-full shadow-lg flex items-center justify-center hover:bg-[#C19B42] transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </button>
                
                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {projectImages.map((_, index) => (
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
            </motion.div>

            {/* Right Side - Location Map - Interactive Google Maps */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden bg-[#8B7B6E]">
                {/* Embed Google Maps using iframe for Vaagai location */}
                <iframe
                  src="https://maps.google.com/maps?q=Telungupalayam,Coimbatore,Tamil+Nadu&t=&z=15&ie=UTF8&iwloc=&output=embed"
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

                {/* Location Info Card - Bottom Right with yellow accent and proper location icon */}
                <div className="absolute bottom-4 right-4 bg-white rounded-lg p-3 shadow-lg max-w-[200px] z-20">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#D3AC4A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.9858 23.1562L21.642 11.8594C21.6096 11.7006 21.5233 11.558 21.3979 11.4555C21.2724 11.353 21.1154 11.297 20.9534 11.2969H20.2033C19.5644 12.8241 18.5725 14.6086 17.2159 16.6758C15.4374 19.3861 13.658 21.6155 13.583 21.7087C13.3854 21.9555 13.1348 22.1546 12.8499 22.2914C12.5649 22.4282 12.2528 22.4993 11.9367 22.4993C11.6206 22.4993 11.3085 22.4282 11.0236 22.2914C10.7386 22.1546 10.4881 21.9555 10.2904 21.7087C10.215 21.615 8.43553 19.3847 6.65704 16.6744C5.30232 14.6086 4.31229 12.8241 3.67149 11.2969H3.04663C2.88462 11.297 2.7276 11.353 2.60212 11.4555C2.47665 11.558 2.39042 11.7006 2.35802 11.8594L0.0142064 23.1562C-0.00664145 23.2584 -0.00452043 23.3639 0.0204159 23.4651C0.0453523 23.5663 0.0924801 23.6607 0.158388 23.7414C0.224296 23.8222 0.307335 23.8873 0.401495 23.932C0.495655 23.9767 0.59858 24 0.702819 24H23.2972C23.4014 24 23.5043 23.9767 23.5985 23.932C23.6927 23.8873 23.7757 23.8222 23.8416 23.7414C23.9075 23.6607 23.9546 23.5663 23.9796 23.4651C24.0045 23.3639 24.0066 23.2584 23.9858 23.1562Z" fill="white"/>
                        <path d="M11.9381 10.3125C13.362 10.3125 14.5163 9.15823 14.5163 7.73438C14.5163 6.31052 13.362 5.15625 11.9381 5.15625C10.5142 5.15625 9.35993 6.31052 9.35993 7.73438C9.35993 9.15823 10.5142 10.3125 11.9381 10.3125Z" fill="white"/>
                        <path d="M11.3906 20.8303C11.4565 20.9125 11.54 20.9789 11.635 21.0245C11.7299 21.0701 11.8339 21.0937 11.9393 21.0937C12.0446 21.0937 12.1486 21.0701 12.2436 21.0245C12.3386 20.9789 12.4221 20.9125 12.488 20.8303C12.5058 20.8083 14.2871 18.5803 16.0426 15.9047C18.452 12.233 19.6736 9.48281 19.6736 7.73438C19.6736 3.46875 16.2048 0 11.9391 0C7.67332 0 4.20448 3.46875 4.20448 7.73438C4.20448 9.48422 5.42607 12.2344 7.83551 15.9047C9.59056 18.5803 11.3719 20.8083 11.3906 20.8303ZM11.9381 3.75C12.7262 3.75 13.4965 3.98368 14.1518 4.42149C14.807 4.8593 15.3177 5.48157 15.6193 6.20962C15.9209 6.93767 15.9998 7.73879 15.846 8.51169C15.6923 9.28458 15.3128 9.99453 14.7556 10.5518C14.1983 11.109 13.4884 11.4885 12.7155 11.6422C11.9425 11.7959 11.1414 11.717 10.4133 11.4155C9.68526 11.1139 9.06297 10.6032 8.62515 9.94798C8.18733 9.29275 7.95364 8.52241 7.95364 7.73438C7.95488 6.67803 8.37507 5.66531 9.12204 4.91837C9.86901 4.17142 10.8818 3.75124 11.9381 3.75Z" fill="white"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#37405E] text-sm leading-tight" style={{ fontFamily: 'Futura-Heavy' }}>
                        Vaagai
                      </h4>
                      <p className="text-[#37405E] font-medium text-xs leading-tight mt-1" style={{ fontFamily: 'Futura-Medium' }}>
                        Telungupalayam, Coimbatore
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Project Description - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="space-y-4">
              <h3 className="text-[22px] md:text-[24px] font-medium text-[#37405E]" style={{ fontFamily: 'Futura-Medium' }}>
                DTCP approved premium layout in a fast growing neighbourhood
              </h3>
              <p className="text-[18px] md:text-[20px] text-gray-700 leading-relaxed" style={{ fontFamily: 'Futura-Medium' }}>
                Located at No. 28, Subramaniya Udaiyar Street, Telungupalayam, Vaagai is a 2.3-acre premium layout offering excellent connectivity to Perur, Palakkad Bypass and Coimbatore Airport. Enjoy peaceful surroundings with city access in under 20 minutes, ideal for both families and investors.
              </p>
            </div>
          </motion.div>

          {/* Dashed Separator Line */}
          <div className="w-full border-t-2 border-dashed border-gray-300 mb-8"></div>

          {/* Pricing & Units and Project Type - Two Columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="bg-[#F5F2E8] p-6 rounded-lg">
              <h4 className="text-[18px] md:text-[20px] font-medium text-[#37405E] mb-4" style={{ fontFamily: 'Futura-Medium' }}>
                Pricing & Units
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 bg-[#D3AC4A] rounded-full flex items-center justify-center">
                    <Image
                      src="/images/current project page - ff/vaagai/icons/second fold icon/project unit group/Vector 1.svg"
                      alt="Land Price Icon"
                      width={14}
                      height={14}
                      className="brightness-0 invert"
                    />
                  </div>
                  <span className="text-[16px] md:text-[18px] text-[#37405E]" style={{ fontFamily: 'Futura-Medium' }}>
                    <strong>Land Price:</strong> ₹21 Lakhs per Cent
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 bg-[#D3AC4A] rounded-full flex items-center justify-center">
                    <Image
                      src="/images/current project page - ff/vaagai/icons/second fold icon/project unit group/Vector 2.svg"
                      alt="Project Size Icon"
                      width={14}
                      height={14}
                      className="brightness-0 invert"
                    />
                  </div>
                  <span className="text-[16px] md:text-[18px] text-[#37405E]" style={{ fontFamily: 'Futura-Medium' }}>
                    <strong>Project Size:</strong> 2.3 Acres | Total Units: 49
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 bg-[#D3AC4A] rounded-full flex items-center justify-center">
                    <Image
                      src="/images/current project page - ff/vaagai/icons/second fold icon/project unit group/Vector 3.svg"
                      alt="Completion Date Icon"
                      width={14}
                      height={14}
                      className="brightness-0 invert"
                    />
                  </div>
                  <span className="text-[16px] md:text-[18px] text-[#37405E]" style={{ fontFamily: 'Futura-Medium' }}>
                    <strong>Completion Date:</strong> December 2025
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F2E8] p-6 rounded-lg">
              <h4 className="text-[18px] md:text-[20px] font-medium text-[#37405E] mb-4" style={{ fontFamily: 'Futura-Medium' }}>
                Project Type
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 bg-[#D3AC4A] rounded-full flex items-center justify-center">
                    <Image
                      src="/images/current project page - ff/vaagai/icons/second fold icon/project unit group/tick vector - fifth fold.svg"
                      alt="Checkmark"
                      width={14}
                      height={14}
                      className="brightness-0 invert"
                    />
                  </div>
                  <span className="text-[16px] md:text-[18px] text-[#37405E]" style={{ fontFamily: 'Futura-Medium' }}>
                    DTCP approved premium layout
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 bg-[#D3AC4A] rounded-full flex items-center justify-center">
                    <Image
                      src="/images/current project page - ff/vaagai/icons/second fold icon/project unit group/tick vector - fifth fold.svg"
                      alt="Checkmark"
                      width={14}
                      height={14}
                      className="brightness-0 invert"
                    />
                  </div>
                  <span className="text-[16px] md:text-[18px] text-[#37405E]" style={{ fontFamily: 'Futura-Medium' }}>
                    Developed Residential Plots
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 bg-[#D3AC4A] rounded-full flex items-center justify-center">
                    <Image
                      src="/images/current project page - ff/vaagai/icons/second fold icon/project unit group/tick vector - fifth fold.svg"
                      alt="Checkmark"
                      width={14}
                      height={14}
                      className="brightness-0 invert"
                    />
                  </div>
                  <span className="text-[16px] md:text-[18px] text-[#37405E]" style={{ fontFamily: 'Futura-Medium' }}>
                    Ready for Registration & Construction
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Third Fold - Key Features & Benefits */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[32px] md:text-[40px] font-normal bg-gradient-to-br from-[#37405E] to-[#7285C4] bg-clip-text text-transparent" style={{ fontFamily: 'DM Serif Display' }}>
              Key Features & Benefits
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full bg-white rounded-lg shadow-sm overflow-hidden border border-gray-300">
              <thead>
                <tr className="bg-[#37405E] text-white">
                  <th className="px-8 py-6 text-center text-[18px] font-medium border-r border-gray-400" style={{ fontFamily: 'Futura-Medium' }}>
                    Feature
                  </th>
                  <th className="px-8 py-6 text-center text-[18px] font-medium border-r border-gray-400" style={{ fontFamily: 'Futura-Medium' }}>
                    Benefit
                  </th>
                  <th className="px-8 py-6 text-center text-[18px] font-medium" style={{ fontFamily: 'Futura-Medium' }}>
                    Advantage
                  </th>
                </tr>
              </thead>
              <tbody>
                {featuresData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-8 py-6 text-[16px] text-[#37405E] border-r border-b border-gray-300 text-center" style={{ fontFamily: 'Futura-Medium' }}>
                      {row.feature}
                    </td>
                    <td className="px-8 py-6 text-[16px] text-[#37405E] border-r border-b border-gray-300 text-center" style={{ fontFamily: 'Futura-Medium' }}>
                      {row.benefit}
                    </td>
                    <td className="px-8 py-6 text-[16px] text-[#37405E] border-b border-gray-300 text-center" style={{ fontFamily: 'Futura-Medium' }}>
                      {row.advantage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Fourth Fold - Amenities */}
      <section className="py-12 md:py-20 bg-[#37405E]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[32px] md:text-[40px] font-normal bg-gradient-to-r from-white via-white to-[#D3AC4A] bg-clip-text text-transparent" style={{ fontFamily: 'DM Serif Display', backgroundImage: 'linear-gradient(to right, #FFFFFF 19.23%, #D3AC4A 79.81%)' }}>
              Amenities
            </h2>
          </motion.div>

          <div className="relative min-h-[600px] flex items-center justify-center">
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
                src="/images/current project page - ff/vaagai/icons/fourth fold/fourth fold Vector-vaagai.svg"
                alt="Amenities Layout"
                width={1314}
                height={729}
                className="object-contain w-full h-auto"
              />

              {/* House Image positioned in the center area between Tar Roads and CCTV Coverage */}
              <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative w-[380px] h-[260px] md:w-[450px] md:h-[320px]">
                  <Image
                    src="/images/current project page - ff/vaagai/images/fourth fold image - vaagai.png"
                    alt="Vaagai Sample House"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Amenity Text Labels positioned over the SVG circles - calculated from SVG coordinates */}
              {amenities.map((amenity, index) => {
                // Precise position mapping based on actual SVG circle centers - positioned below icons
                // SVG viewBox: 0 0 1314 729, circles positioned around center (657, 365)
                const positions = [
                  { top: '17.6%', left: '50.7%', name: 'Water Supply' }, // Below circle at (666, 85)
                  { top: '26.3%', left: '33.6%', name: 'Compound Wall' }, // Below circle at (443, 148) 
                  { top: '26.3%', left: '66.3%', name: 'EB Line' }, // Below circle at (871, 148)
                  { top: '42.8%', left: '17.8%', name: 'Tar Roads' }, // Below circle at (234, 268)
                  { top: '42.8%', left: '81.3%', name: 'Street Lights' }, // Below circle at (1069, 268)
                  { top: '67.7%', left: '8.7%', name: 'Storm Water Drainage' }, // Below circle at (114, 450)
                  { top: '67.7%', left: '90.1%', name: 'CCTV Coverage' }, // Below circle at (1184, 450)
                  { top: '94.3%', left: '6.5%', name: 'Entrance Arch' }, // Below circle at (85, 644)
                  { top: '94.3%', left: '93.5%', name: 'Security Cabin' }, // Below circle at (1229, 644)
                ];

                const position = positions[index];
                if (!position) return null;

                return (
                  <motion.div
                    key={index}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      top: position.top,
                      left: position.left,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-center">
                      <span className="text-[10px] md:text-[12px] font-medium text-[#37405E]" style={{ fontFamily: 'Futura-Medium' }}>
                        {amenity.name}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fifth Fold - Approvals */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center md:items-center justify-between space-y-8 md:space-y-0"
          >
            <h2 className="text-[32px] md:text-[40px] font-normal" style={{ fontFamily: 'DM Serif Display' }}>
              <span className="bg-gradient-to-r from-[#37405E] to-[#D3AC4A] bg-clip-text text-transparent">Approvals</span>
            </h2>

            <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-16">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#D3AC4A] rounded-lg flex items-center justify-center">
                <Image
                  src="/images/current project page - ff/vaagai/icons/fifth fold/Vector 1.svg"
                  alt="DTCP approved icon"
                  width={24}
                  height={24}
                  className="brightness-0 invert"
                />
              </div>
              <span className="text-[18px] font-medium text-[#37405E]" style={{ fontFamily: 'Futura-Medium' }}>
                DTCP approved
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#D3AC4A] rounded-lg flex items-center justify-center">
                <Image
                  src="/images/current project page - ff/vaagai/icons/fifth fold/Vector 2.svg"
                  alt="Bank Loan Assistance icon"
                  width={24}
                  height={24}
                  className="brightness-0 invert"
                />
              </div>
              <span className="text-[18px] font-medium text-[#37405E]" style={{ fontFamily: 'Futura-Medium' }}>
                Bank Loan Assistance available
              </span>
            </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sixth Fold - Book Your Site Visit */}
      <section className="py-12 md:py-20">
        <div className="relative overflow-hidden rounded-3xl mx-4 md:mx-8">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/current project page - ff/vaagai/images/sixth fold.png"
              alt="Site Visit Background"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-12 md:py-20">
            <div className="flex items-center justify-end">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-12 max-w-lg w-full shadow-2xl"
            >
              <h3 className="text-[28px] md:text-[32px] font-normal mb-8" style={{ fontFamily: 'DM Serif Display' }}>
                <span className="bg-gradient-to-r from-[#37405E] to-[#D3AC4A] bg-clip-text text-transparent">Book your site visit today</span>
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-[#37405E] rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[16px] font-medium text-[#37405E]" style={{ fontFamily: 'Futura-Medium' }}>
                      +91 79008 82288 | +91 79008 84488
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-[#37405E] rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[16px] font-medium text-[#37405E]" style={{ fontFamily: 'Futura-Medium' }}>
                      fairfieldsales2024@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#37405E] rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[16px] font-medium text-[#37405E]" style={{ fontFamily: 'Futura-Medium' }}>
                      No. 28, Subramaniya Udaiyar Street,<br />
                      Telungupalayam, Coimbatore – 641039
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                  <button className="bg-[#D3AC4A] text-[#37405E] px-6 py-3 rounded-lg font-bold text-[16px] hover:bg-[#C19B42] transition-colors flex items-center justify-center space-x-2 book-visit-button flex-1" style={{ fontFamily: 'Futura-Heavy' }}>
                    <span>Book your visit today</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"/>
                    </svg>
                  </button>
                  <button className="bg-[#37405E] text-white px-6 py-3 rounded-lg font-bold text-[16px] hover:bg-[#2A2F47] transition-colors call-us-button flex-1" style={{ fontFamily: 'Futura-Heavy' }}>
                    Call us now
                  </button>
                </div>
              </div>
            </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <UniversalFooter />
    </main>
  );
}