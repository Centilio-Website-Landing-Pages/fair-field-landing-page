'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';

interface UniversalHeaderProps {
  transparent?: boolean;
  showScheduleButton?: boolean;
}

export function UniversalHeader({ transparent = false, showScheduleButton = false }: UniversalHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className={`absolute top-2 sm:top-4 left-0 right-0 z-30 ${transparent ? 'bg-transparent' : 'bg-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="/images/logo/FFS LOGO DIFFERENCE-01.png"
              alt="FFS Logo"
              className="h-20 sm:h-28 lg:h-40 w-auto"
            />
          </motion.div>
          
          {/* Desktop Navigation Menu */}
          <motion.div 
            className="hidden lg:flex items-center space-x-6 xl:space-x-10 text-shadow-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{fontFamily:" Alata, sans-serif"}}
          >
            <Link href="/" className={`font-medium text-base xl:text-lg ${transparent ? 'text-[#D3AC4A]' : 'text-[#D3AC4A]'}`} >Home</Link>
            <Link href="/about-us" className={`hover:text-[#D3AC4A] transition-colors text-base xl:text-lg ${transparent ? 'text-white' : 'text-[#37405E]'}`} >About us</Link>
            <Link href="/projects" className={`hover:text-[#D3AC4A] transition-colors text-base xl:text-lg ${transparent ? 'text-white' : 'text-[#37405E]'}`} >Project</Link>
            <Link href="/blog" className={`hover:text-[#D3AC4A] transition-colors text-base xl:text-lg ${transparent ? 'text-white' : 'text-[#37405E]'}`} >Blog</Link>
            <Link href="/careers" className={`hover:text-[#D3AC4A] transition-colors text-base xl:text-lg ${transparent ? 'text-white' : 'text-[#37405E]'}`} >Careers</Link>
            <Link href="/contact-us" className={`hover:text-[#D3AC4A] transition-colors text-base xl:text-lg ${transparent ? 'text-white' : 'text-[#37405E]'}`} >Contact</Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            {showScheduleButton && (
              <motion.button 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="book-visit-button bg-[#D3AC4A] text-[#37405E] px-3 py-2 rounded-lg font-bold text-xs sm:text-sm hover:bg-[#C19B42] transition-colors"
                style={{ fontFamily: 'Futura-Heavy' }}
              >
                <span className="hidden sm:inline">Schedule</span>
                <span className="sm:hidden">Visit</span>
              </motion.button>
            )}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${transparent ? 'text-white' : 'text-[#37405E]'}`}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Desktop Schedule Button (conditionally shown) */}
          {showScheduleButton && (
            <motion.div 
              className="hidden lg:flex"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button 
                className="book-visit-button bg-[#D3AC4A] text-[#37405E] px-6 xl:px-8 py-3 rounded-lg font-bold text-sm xl:text-base hover:bg-[#C19B42] transition-colors flex items-center space-x-2 shadow-lg"
                style={{ fontFamily: 'Futura-Heavy' }}
              >
                <span>Schedule a visit</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"/>
                </svg>
              </button>
            </motion.div>
          )}
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`lg:hidden overflow-hidden ${transparent ? 'bg-black/90' : 'bg-white'} backdrop-blur-sm rounded-lg mt-4 shadow-lg`}
            >
              <div className="px-4 py-4 space-y-3" style={{fontFamily:" Alata, sans-serif"}}>
                <Link 
                  href="/" 
                  className={`block py-2 px-3 rounded-md font-medium ${transparent ? 'text-[#D3AC4A]' : 'text-[#D3AC4A]'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/about-us" 
                  className={`block py-2 px-3 rounded-md hover:text-[#D3AC4A] transition-colors ${transparent ? 'text-white' : 'text-[#37405E]'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About us
                </Link>
                <Link 
                  href="/projects" 
                  className={`block py-2 px-3 rounded-md hover:text-[#D3AC4A] transition-colors ${transparent ? 'text-white' : 'text-[#37405E]'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Project
                </Link>
                <Link 
                  href="/blog" 
                  className={`block py-2 px-3 rounded-md hover:text-[#D3AC4A] transition-colors ${transparent ? 'text-white' : 'text-[#37405E]'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  href="/careers" 
                  className={`block py-2 px-3 rounded-md hover:text-[#D3AC4A] transition-colors ${transparent ? 'text-white' : 'text-[#37405E]'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Careers
                </Link>
                <Link 
                  href="/contact" 
                  className={`block py-2 px-3 rounded-md hover:text-[#D3AC4A] transition-colors ${transparent ? 'text-white' : 'text-[#37405E]'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                {showScheduleButton && (
                  <button 
                    className="book-visit-button w-full bg-[#D3AC4A] text-[#37405E] px-4 py-3 rounded-lg font-bold text-sm hover:bg-[#C19B42] transition-colors mt-3"
                    style={{ fontFamily: 'Futura-Heavy' }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Schedule a visit
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default UniversalHeader;
