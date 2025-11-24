'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const UniversalFooter = () => {
  return (
    <footer className="relative bg-[#37405E] text-white overflow-hidden">
      {/* Multiple Flowing Waves - Deeper Curves */}
      <div className="absolute top-0 left-0 w-full h-32 bg-white">
        <svg 
          viewBox="0 0 1440 240" 
          className="absolute bottom-0 w-full h-full" 
          preserveAspectRatio="none"
        >
          {/* Complex wave with deeper peaks and valleys */}
          <path 
            d="M0,80 C120,10 240,150 360,80 C480,10 600,180 720,100 C840,20 960,200 1080,120 C1200,40 1320,180 1440,100 L1440,240 L0,240 Z" 
            fill="#37405E"
          />
        </svg>
      </div>

      {/* Footer Background Pattern - Highly Visible */}
      <div className="absolute inset-0 z-0" style={{ opacity: 0.95 }}>
        <Image
          src="/images/home page - ff/icons/footer icons/footer bg vector.svg"
          alt="Footer Background Pattern"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative z-10 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            {/* Company Info */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <Image
                  src="/images/logo/FFS LOGO DIFFERENCE-02.png"
                  alt="Fair Field Shelters Logo"
                  width={120}
                  height={80}
                  className="mb-6"
                />
              </div>
              <p 
                className="text-[18px] leading-relaxed mb-8 text-white max-w-[285px]"
                style={{ fontFamily: 'Futura-Medium' }}
              >
                At Fair Field, we believe in creating more than just homes – we create lifestyle experiences.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <Link 
                  href="#" 
                  className="w-[34px] h-[34px] bg-transparent flex items-center justify-center hover:opacity-70 transition-opacity duration-300"
                >
                  <Image
                    src="/images/home page - ff/icons/footer icons/social media icon/facebook.svg"
                    alt="Facebook"
                    width={34}
                    height={34}
                  />
                </Link>
                <Link 
                  href="#" 
                  className="w-[34px] h-[34px] bg-transparent flex items-center justify-center hover:opacity-70 transition-opacity duration-300"
                >
                  <Image
                    src="/images/home page - ff/icons/footer icons/social media icon/insta.svg"
                    alt="Instagram"
                    width={34}
                    height={34}
                  />
                </Link>
                <Link 
                  href="#" 
                  className="w-[34px] h-[34px] bg-transparent flex items-center justify-center hover:opacity-70 transition-opacity duration-300"
                >
                  <Image
                    src="/images/home page - ff/icons/footer icons/social media icon/link in.svg"
                    alt="LinkedIn"
                    width={34}
                    height={34}
                  />
                </Link>
                <Link 
                  href="#" 
                  className="w-[34px] h-[34px] bg-transparent flex items-center justify-center hover:opacity-70 transition-opacity duration-300"
                >
                  <Image
                    src="/images/home page - ff/icons/footer icons/social media icon/twitter.svg"
                    alt="Twitter"
                    width={34}
                    height={34}
                  />
                </Link>
              </div>
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 
                className="text-[20px] font-medium mb-8 text-white"
                style={{ fontFamily: 'DM Serif Display' }}
              >
                Links
              </h3>
              <ul className="space-y-4">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'About Us', href: '/about-us' },
                  { name: 'Projects', href: '/current-projects' },
                  { name: 'Blog', href: '/blog' },
                  { name: 'Careers', href: '/careers' },
                  { name: 'Contact Us', href: '/contact-us' }
                ].map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-[16px] text-white hover:text-[#D3AC4A] transition-colors duration-300 capitalize"
                      style={{ fontFamily: 'Futura-Medium' }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Projects */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 
                className="text-[20px] font-medium mb-8 text-white"
                style={{ fontFamily: 'DM Serif Display' }}
              >
                Projects
              </h3>
              <ul className="space-y-4">
                {[
                  { name: 'Our Current Projects', href: '/current-projects' },
                  { name: 'Completed Projects', href: '/completed-projects' },
                  { name: 'Upcoming Projects', href: '/upcoming-projects' }
                ].map((project, index) => (
                  <li key={index}>
                    <Link 
                      href={project.href}
                      className="text-[16px] text-white hover:text-[#D3AC4A] transition-colors duration-300"
                      style={{ fontFamily: 'Futura-Medium' }}
                    >
                      {project.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 
                className="text-[20px] font-medium mb-8 text-white"
                style={{ fontFamily: 'DM Serif Display' }}
              >
                Contact
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/images/home page - ff/icons/footer icons/call (1).svg"
                    alt="Phone Icon"
                    width={24}
                    height={24}
                  />
                  <span 
                    className="text-[16px] text-white"
                    style={{ fontFamily: 'Futura-Medium' }}
                  >
                    +91 7900884488
                  </span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Image
                    src="/images/home page - ff/icons/footer icons/whats app Vector.svg"
                    alt="WhatsApp Icon"
                    width={24}
                    height={24}
                  />
                  <span 
                    className="text-[16px] text-white"
                    style={{ fontFamily: 'Futura-Medium' }}
                  >
                    +91 7900882288
                  </span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Image
                    src="/images/home page - ff/icons/footer icons/mail vector.svg"
                    alt="Email Icon"
                    width={24}
                    height={24}
                  />
                  <span 
                    className="text-[16px] text-white"
                    style={{ fontFamily: 'Futura-Medium' }}
                  >
                    fairfieldshelters@gmail.com
                  </span>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Image
                    src="/images/home page - ff/icons/footer icons/address.svg"
                    alt="Address Icon"
                    width={24}
                    height={24}
                    className="mt-1"
                  />
                  <span 
                    className="text-[16px] text-white leading-relaxed max-w-[213px]"
                    style={{ fontFamily: 'Futura-Medium' }}
                  >
                    SF No.722, Fairfield Anicham, Nanjundapuram Road, Ramanathapuram, Coimbatore – 641 036
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar with Border */}
          <div className="border-t border-[#D3AC4A]/30 pt-8 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.p 
                className="text-[14px] text-white mb-4 md:mb-0"
                style={{ fontFamily: 'Futura-Medium' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Designed by{' '}
                <Link 
                  href="https://trademindsacademy.in/"
                  target='blank' 
                  className="text-white underline hover:text-[#D3AC4A] transition-colors"
                >
                  Trademindsacademy.in
                </Link>
              </motion.p>
              
              <motion.p 
                className="text-[14px] text-white"
                style={{ fontFamily: 'Futura-Medium' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Copyright © 2025, All Rights Received
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UniversalFooter;