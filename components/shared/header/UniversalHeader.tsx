'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface UniversalHeaderProps {
  transparent?: boolean;
  showScheduleButton?: boolean;
}

export function UniversalHeader({ transparent = false, showScheduleButton = false }: UniversalHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [projectDropdownOpen, setProjectDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Helper function to check if link is active
  const isActive = (path: string) => pathname === path;
  const isAboutActive = () => pathname === '/about-us' || pathname === '/why-choose' || pathname === '/testimonials';
  const isProjectActive = () => pathname === '/current-projects' || pathname === '/completed-projects' || pathname === '/upcoming-projects' || pathname === '/legal-approvals';

  // Get active link classes
  const getLinkClasses = (path: string, isDropdownParent: boolean = false) => {
    const baseClasses = "transition-colors text-base xl:text-lg";
    const activeClasses = "text-[#D3AC4A] font-medium";
    const inactiveClasses = `hover:text-[#D3AC4A] ${transparent ? 'text-white' : 'text-[#37405E]'}`;
    
    let isLinkActive = false;
    if (isDropdownParent) {
      isLinkActive = path === 'about' ? isAboutActive() : isProjectActive();
    } else {
      isLinkActive = isActive(path);
    }
    
    return `${baseClasses} ${isLinkActive ? activeClasses : inactiveClasses}`;
  };

  // Get dropdown item classes
  const getDropdownItemClasses = (path: string) => {
    const baseClasses = "block px-4 py-2 transition-colors";
    const activeClasses = "text-[#D3AC4A] bg-[#F5F2E8] font-medium";
    const inactiveClasses = "text-[#37405E] hover:bg-[#F5F2E8] hover:text-[#D3AC4A]";
    
    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  // Get mobile menu link classes
  const getMobileLinkClasses = (path: string, isDropdownParent: boolean = false) => {
    const baseClasses = "block py-2 px-3 rounded-md transition-colors";
    const activeClasses = "text-[#D3AC4A] font-medium bg-[#F5F2E8]";
    const inactiveClasses = `hover:text-[#D3AC4A] ${transparent ? 'text-white' : 'text-[#37405E]'}`;
    
    let isLinkActive = false;
    if (isDropdownParent) {
      isLinkActive = path === 'about' ? isAboutActive() : isProjectActive();
    } else {
      isLinkActive = isActive(path);
    }
    
    return `${baseClasses} ${isLinkActive ? activeClasses : inactiveClasses}`;
  };
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
              className="h-16 sm:h-24 lg:h-32 w-auto"
            />
          </motion.div>
          
          {/* Desktop Navigation Menu */}
          <motion.div 
            className="hidden lg:flex items-center space-x-6 xl:space-x-10 text-shadow-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{fontFamily:"Futura-Medium,sans-serif"}}
          >
            <Link href="/" className={getLinkClasses('/')} >Home</Link>
            
            {/* About Us Dropdown */}
            <div className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <div className="flex items-center gap-1">
                <Link href="/about-us" className={getLinkClasses('about', true)}>
                  About us
                </Link>
                <svg className={`w-4 h-4 mt-1 ${isAboutActive() ? 'text-[#D3AC4A]' : (transparent ? 'text-white' : 'text-[#37405E]')}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <AnimatePresence>
                {aboutDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                  >
                    <Link href="/why-choose" className={getDropdownItemClasses('/why-choose')}>
                      Why Choose
                    </Link>
                    <Link href="/testimonials" className={getDropdownItemClasses('/testimonials')}>
                      Testimonial
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Project Dropdown */}
            <div className="relative"
              onMouseEnter={() => setProjectDropdownOpen(true)}
              onMouseLeave={() => setProjectDropdownOpen(false)}
            >
              <button className={`${getLinkClasses('project', true)} flex items-center gap-1`}>
                Project
                <svg className="w-4 h-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {projectDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                  >
                    <Link href="/current-projects" className={getDropdownItemClasses('/current-projects')}>
                      Our Current Projects
                    </Link>
                    <Link href="/completed-projects" className={getDropdownItemClasses('/completed-projects')}>
                      Completed Projects
                    </Link>
                    <Link href="/upcoming-projects" className={getDropdownItemClasses('/upcoming-projects')}>
                      Upcoming Projects
                    </Link>
                    <Link href="/legal-approvals" className={getDropdownItemClasses('/legal-approvals')}>
                      Legal & Approvals
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link href="/blog" className={getLinkClasses('/blog')} >Blog</Link>
            <Link href="/careers" className={getLinkClasses('/careers')} >Careers</Link>
            <Link href="/contact-us" className={getLinkClasses('/contact-us')} >Contact</Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            {showScheduleButton && (
              <motion.button 
                whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                className="book-visit-button bg-[#D3AC4A] text-[#37405E] px-3 py-2 rounded-lg font-bold text-xs sm:text-sm hover:bg-[#C19B42] transition-colors flex items-center space-x-1"
                style={{ fontFamily: 'Futura-Heavy' }}
              >
                <span className="hidden sm:inline">Schedule</span>
                <span className="sm:hidden">Visit</span>
                <img 
                  src="/images/home page - ff/icons/cta arrow Vector.svg"
                  alt="Arrow"
                  className="w-3 h-3"
                />
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
              className="hidden lg:flex ml-4"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button 
                className="book-visit-button bg-[#D3AC4A] text-[#37405E] px-6 xl:px-8 py-3 rounded-lg font-bold text-sm xl:text-base hover:bg-[#C19B42] transition-colors flex items-center space-x-2 shadow-lg"
                style={{ fontFamily: 'Futura-Heavy' }}
              >
                <span>Schedule a visit</span>
                <img 
                  src="/images/home page - ff/icons/cta arrow Vector.svg"
                  alt="Arrow"
                  className="w-4 h-4"
                />
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
                  className={`${getMobileLinkClasses('/')} font-medium`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                {/* About Us Mobile Menu */}
                <div className="space-y-1">
                  <Link 
                    href="/about-us" 
                    className={`${getMobileLinkClasses('about', true)} font-medium`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About us
                  </Link>
                  <div className="pl-6 space-y-1">
                    <Link 
                      href="/why-choose" 
                      className={`block py-1 px-3 rounded-md hover:text-[#D3AC4A] transition-colors text-sm ${transparent ? 'text-white/80' : 'text-[#37405E]/80'}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Why Choose
                    </Link>
                    <Link 
                      href="/testimonials" 
                      className={`block py-1 px-3 rounded-md hover:text-[#D3AC4A] transition-colors text-sm ${transparent ? 'text-white/80' : 'text-[#37405E]/80'}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Testimonial
                    </Link>
                  </div>
                </div>
                
                {/* Project Mobile Menu */}
                <div className="space-y-1">
                  <div className={`py-2 px-3 font-medium ${transparent ? 'text-white' : 'text-[#37405E]'}`}>
                    Project
                  </div>
                  <div className="pl-6 space-y-1">
                    <Link 
                      href="/current-projects" 
                      className={`block py-1 px-3 rounded-md hover:text-[#D3AC4A] transition-colors text-sm ${transparent ? 'text-white/80' : 'text-[#37405E]/80'}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Our Current Projects
                    </Link>
                    <Link 
                      href="/completed-projects" 
                      className={`block py-1 px-3 rounded-md hover:text-[#D3AC4A] transition-colors text-sm ${transparent ? 'text-white/80' : 'text-[#37405E]/80'}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Completed Projects
                    </Link>
                    <Link 
                      href="/upcoming-projects" 
                      className={`block py-1 px-3 rounded-md hover:text-[#D3AC4A] transition-colors text-sm ${transparent ? 'text-white/80' : 'text-[#37405E]/80'}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Upcoming Projects
                    </Link>
                    <Link 
                      href="/legal-approvals" 
                      className={`block py-1 px-3 rounded-md hover:text-[#D3AC4A] transition-colors text-sm ${transparent ? 'text-white/80' : 'text-[#37405E]/80'}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Legal & Approvals
                    </Link>
                  </div>
                </div>
                <Link 
                  href="/blog" 
                  className={getMobileLinkClasses('/blog')}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  href="/careers" 
                  className={getMobileLinkClasses('/careers')}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Careers
                </Link>
                <Link 
                  href="/contact-us" 
                  className={getMobileLinkClasses('/contact-us')}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                {showScheduleButton && (
                  <button 
                    className="book-visit-button w-full bg-[#D3AC4A] text-[#37405E] px-4 py-3 rounded-lg font-bold text-sm hover:bg-[#C19B42] transition-colors mt-3 flex items-center justify-center space-x-2"
                    style={{ fontFamily: 'Futura-Heavy' }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>Schedule a visit</span>
                    <img 
                      src="/images/home page - ff/icons/cta arrow Vector.svg"
                      alt="Arrow"
                      className="w-4 h-4"
                    />
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
