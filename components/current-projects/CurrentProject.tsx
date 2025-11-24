'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { UniversalHeader } from '@/components/shared/header/UniversalHeader';
import UniversalFooter from '@/components/shared/footer/UniversalFooter';

const CurrentProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: 'Anicham & Magilam - Ramanathapuram, Coimbatore',
      image: '/images/current project page - ff/images/anicham.png',
      alt: 'Anicham & Magilam Project Entrance',
      link: '/anicham-magilam'
    },
    {
      id: 2,
      title: 'Vaagai - Telungupalayam, Coimbatore',
      image: '/images/current project page - ff/images/vagai hp.png',
      alt: 'Vaagai Project Entrance',
      link: '/vaagai-telungupalayam'
    }
  ];

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Project' },
    { label: 'Our Current Projects', href: '/current-projects', active: true }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Testimonials Layout */}
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
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white drop-shadow-2xl px-4"
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
                {breadcrumbs.map((item, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && (
                      // <img
                      //   src="/images/current project page - ff/icons/first fold icon.svg"
                      //   alt="Arrow"
                      //   className="w-6 h-6 sm:w-8 sm:h-8"
                      // />
                      <Image
                        src="/images/about us page - ff/icons/first fold icon.svg"
                        alt="Arrow"
                        fill
                        className="w-6 h-6 sm:w-8 sm:h-8"
                        priority
                      />                      
                    )}
                    {item.active ? (
                      <span className="text-[#37405E]">
                        {item.label}
                      </span>
                    ) : item.href ? (
                      <Link 
                        href={item.href}
                        className="hover:text-[#D3AC4A] transition-colors cursor-pointer"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-[#37405E]">
                        {item.label}
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <Link href={project.link}>
                  <div className="group">
                    {/* Project Image */}
                    <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                      <div className="aspect-[4/3] overflow-hidden">
                        {/* <img
                          src={project.image}
                          alt={project.alt}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        /> */}
                        <Image
                          src={project.image}
                          alt={project.alt}
                          fill
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          priority
                        />                        
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style={{ backgroundColor: '#37405ECC' }}>
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                          <svg
                            className="w-8 h-8 text-[#37405E]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Project Title - Below Image */}
                    <div className="mt-6">
                      <h3 
                        className="text-[#37405E] text-xl md:text-2xl font-normal text-center"
                        style={{ fontFamily: 'DM Serif Display, serif' }}
                      >
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      {/* <section className="bg-[#37405E] py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl text-white mb-6"
              style={{ fontFamily: 'DM Serif Display, serif' }}
            >
              Ready to Find Your Dream Home?
            </h2>
            <p 
              className="text-lg md:text-xl text-white/90 mb-8"
              style={{ fontFamily: 'Futura-Medium, sans-serif' }}
            >
              At Fair Field, we believe in creating more than just homes - we create lifestyle experiences.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="book-visit-button bg-[#D3AC4A] text-[#37405E] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#C19B42] transition-colors inline-flex items-center space-x-3"
              style={{ fontFamily: 'Futura-Heavy, sans-serif' }}
            >
              <span>Schedule a visit</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"/>
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </section> */}

      {/* Footer */}
      <UniversalFooter />
    </div>
  );
};

export default CurrentProjectsPage;