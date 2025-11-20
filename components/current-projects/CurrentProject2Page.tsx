'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { UniversalHeader } from '@/components/shared/header/UniversalHeader';
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
                <img
                  src="/images/current project page - ff/icons/first fold icon.svg"
                  alt="Arrow"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
                <span className="text-[#37405E]">
                  Project
                </span>
                <img
                  src="/images/current project page - ff/icons/first fold icon.svg"
                  alt="Arrow"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
                <Link href="/current-projects" className="hover:text-[#D3AC4A] transition-colors cursor-pointer">
                  Our Current Projects
                </Link>
                <img
                  src="/images/current project page - ff/icons/first fold icon.svg"
                  alt="Arrow"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
                <span>Vaagai</span>
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
              Vaagai – <span className="text-[#D3AC4A]">Telungupalayam, Coimbatore</span>
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
              <div className="relative h-[400px] rounded-lg overflow-hidden group">
                {/* Main Image */}
                <Image
                  src={projectImages[currentImageIndex]}
                  alt="Vaagai Project"
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

            {/* Right Side - Location Map - Exact Reference Design */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 lg:w-2/5"
            >
              <div className="relative h-[400px] rounded-lg overflow-hidden bg-[#8B7B6E]">
                {/* Embed Google Maps using iframe */}
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
              DTCP approved premium layout in a fast growing neighbourhood
            </h3>
            <p className="text-[#37405E] font-medium text-lg leading-relaxed" style={{ fontFamily: 'Futura-Medium' }}>
              Located at No. 28, Subramaniya Udaiyar Street, Telungupalayam, Vaagai is a 2.3-acre premium layout offering excellent connectivity to Perur, Palakkad Bypass and Coimbatore Airport. Enjoy peaceful surroundings with city access in under 20 minutes, ideal for both families and investors.
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
                    src="/images/current project page - ff/vaagai/icons/second fold icon/project unit group/Vector 1.svg"
                    alt="Land Price"
                    width={20}
                    height={20}
                  />
                  <span className="text-[#37405E] font-medium" style={{ fontFamily: 'Futura-Medium' }}>
                    <strong>Land Price:</strong> ₹21 Lakhs per Cent
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/current project page - ff/vaagai/icons/second fold icon/project unit group/Vector 2.svg"
                    alt="Project Size"
                    width={20}
                    height={20}
                  />
                  <span className="text-[#37405E] font-medium" style={{ fontFamily: 'Futura-Medium' }}>
                    <strong>Project Size:</strong> 2.3 Acres | <strong>Total Units:</strong> 49
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/current project page - ff/vaagai/icons/second fold icon/project unit group/Vector 3.svg"
                    alt="Completion Date"
                    width={20}
                    height={20}
                  />
                  <span className="text-[#37405E] font-medium" style={{ fontFamily: 'Futura-Medium' }}>
                    <strong>Completion Date:</strong> December 2025
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
                    src="/images/current project page - ff/vaagai/icons/second fold icon/project unit group/tick vector - fifth fold.svg"
                    alt="Check"
                    width={20}
                    height={20}
                  />
                  <span className="text-[#37405E] font-medium" style={{ fontFamily: 'Futura-Medium' }}>
                    DTCP approved premium layout
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/current project page - ff/vaagai/icons/second fold icon/project unit group/tick vector - fifth fold.svg"
                    alt="Check"
                    width={20}
                    height={20}
                  />
                  <span className="text-[#37405E] font-medium" style={{ fontFamily: 'Futura-Medium' }}>
                    Developed Residential Plots
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/current project page - ff/vaagai/icons/second fold icon/project unit group/tick vector - fifth fold.svg"
                    alt="Check"
                    width={20}
                    height={20}
                  />
                  <span className="text-[#37405E] font-medium" style={{ fontFamily: 'Futura-Medium' }}>
                    Ready for Registration & Construction
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
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
                  {featuresData.map((row, index) => (
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

      {/* Amenities Section */}
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
                src="/images/current project page - ff/vaagai/icons/fourth fold/fourth fold Vector-vaagai.svg"
                alt="Amenities Background"
                width={1314}
                height={729}
                className="object-contain w-full h-auto"
              />

              {/* House Image positioned in the center area */}
              <div className="absolute -bottom-18 sm:bottom-0 md:bottom-10 lg:-bottom-20 left-[50%] transform -translate-x-1/2  z-10">
                <div className="relative w-[230px] h-[250px] md:w-[500px] md:h-[380px]">
                  <Image
                    src="/images/current project page - ff/vaagai/images/fourth fold image - vaagai.png"
                    alt="Vaagai Villa"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Amenity Text Labels positioned over the SVG circles */}
              {[
                { top: '14%', left: '50.5%', name: 'Street Lights' },
                { top: '24%', left: '66%', name: 'Water \nSupply' },
                { top: '40%', left: '81.5%', name: 'EB Line' },
                { top: '67%', left: '90%', name: 'CCTV\nCoverage' },
                { top: '93%', left: '93.5%', name: 'Storm Water\nDrainage' },
                { top: '92.5%', left: '6.5%', name: 'Entrance\nArch' },
                { top: '64%', left: '8.70%', name: 'Security\nCabin' },
                { top: '40%', left: '18%', name: 'Compound\nWall' },
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
                    <span className="text-[#37405E] text-[6.5px] md:text-sm font-semibold leading-tight block" style={{ fontFamily: 'Futura-Medium' }}>
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

          <div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-20 max-w-7xl mx-auto">
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
                  src="/images/current project page - ff/vaagai/icons/fifth fold/Vector 1.svg"
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

            {/* Bank Loan Assistance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 flex-shrink-0">
                <Image
                  src="/images/current project page - ff/vaagai/icons/fifth fold/Vector 2.svg"
                  alt="Bank Loan Assistance"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="text-lg md:text-xl font-bold text-[#37405E]" style={{ fontFamily: 'Futura-Heavy' }}>
                Bank Loan Assistance available
              </h4>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sixth Fold - Contact CTA */}
      <section className="py-10 lg:py-20 relative overflow-hidden rounded-3xl">
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <Image
            src="/images/current project page - ff/vaagai/images/sixth fold.png"
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
              className="bg-white rounded-tl-sm rounded-br-sm rounded-tr-[50px] rounded-bl-[50px] px-4 py-6 md:py-10 md:px-6 max-w-lg shadow-2xl"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#37405E] mb-8 leading-tight" style={{ fontFamily: 'DM Serif Display' }}>
                Book your <span className="bg-gradient-to-r from-[#37405E] to-[#D3AC4A] bg-clip-text text-transparent">site visit today</span>
              </h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/current project page - ff/vaagai/icons/sixth fold/call (1).svg"
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
                    src="/images/current project page - ff/vaagai/icons/sixth fold/mail Vector.svg"
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
                    src="/images/current project page - ff/vaagai/icons/sixth fold/address.svg"
                    alt="Address"
                    width={24}
                    height={24}
                    className="mt-1"
                  />
                  <span className="text-[#37405E] font-medium text-lg" style={{ fontFamily: 'Futura-Medium' }}>
                    No. 28, Subramaniya Udaiyar Street,<br />
                    Telungupalayam, Coimbatore – 641039
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