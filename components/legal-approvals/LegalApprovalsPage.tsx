'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import UniversalFooter from '@/components/shared/footer/UniversalFooter';

const tableOfContents = [
  { id: 1, title: "Introduction", active: true },
  { id: 2, title: "Project-Wise approvals" },
  { id: 3, title: "Our legal transparency promise" },
  { id: 4, title: "Loan & Registration support" },
  { id: 5, title: "Legal Consultant's statement" },
  { id: 6, title: "Our Commitment to compliance" }
];

const projects = [
  {
    name: "Anicham & Magilam",
    location: "Ramanathapuram, Coimbatore",
    details: [
      "DTCP approved – Layout approval numbers 346/2021 & 351/2021",
      "RERA registered – TN/11/Layout/346/2021 & TN/11/Layout/351/2021",
      "Bank loan eligible – SBI, HDFC, LIC Housing Finance, Axis Bank, IDBI",
      "Registration ready – All plots and villas are fully documented and ready for registration"
    ]
  },
  {
    name: "Vaagai",
    location: "Telugupalayam, Coimbatore",
    details: [
      "Registration-ready units – Final approvals and numbering completed",
      "Bank Loan tie-ups – SBI, HDFC, LIC Housing Finance, Axis Bank",
      "Legal Verification completed – Certified by our in-house legal consultant"
    ]
  }
];

const legalPromises = [
  {
    title: "Government approvals",
    description: "DTCP or RERA clearance obtained and displayed on all materials."
  },
  {
    title: "Bank loan eligibility",
    description: "Tie-ups with top banks for easy loan approvals on every single plot."
  },
  {
    title: "Bank loan eligibility",
    description: "Dedicated registration team assists with documentation and scheduling."
  },
  {
    title: "Registration support",
    description: "Optimal registration team assists with documentation and scheduling."
  },
  {
    title: "Customer copies",
    description: "Buyers receive full document set before or during booking confirmation."
  }
];

const loanSupport = [
  {
    title: "Document assistance:",
    description: "Collect required ID/address proofs & income documents."
  },
  {
    title: "Bank coordination:",
    description: "We help you get loan sanction letters quickly from preferred banks."
  },
  {
    title: "Registration support:",
    description: "Optimal registration team assists with documentation and scheduling."
  },
  {
    title: "Customer copies:",
    description: "Buyers receive full document set before or during booking confirmation."
  }
];

const commitments = [
  "100% DTCP / RERA approved projects",
  "Full legal documentation before booking",
  "Transparent sales & registration process",
  "Customer-First Policy - No hidden clauses or delays"
];

export function LegalApprovalsPage() {
  const [activeSection, setActiveSection] = useState(1);

  const scrollToSection = (sectionId: number) => {
    setActiveSection(sectionId);
    const element = document.getElementById(`section-${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = parseInt(entry.target.id.replace('section-', ''));
          setActiveSection(sectionId);
        }
      });
    }, observerOptions);

    // Observe all sections
    for (let i = 1; i <= 6; i++) {
      const element = document.getElementById(`section-${i}`);
      if (element) {
        observer.observe(element);
      }
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* First Fold - Step-shaped Background with Building Image */}
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

        {/* White background area for Schedule button */}
        <div className="absolute top-0 right-0 z-15">
          <div 
            className="bg-white"
            style={{
              width: '300px',
              height: '100px',
              clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)'
            }}
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
                <span className="text-[16px] text-white font-medium hover:text-[#D3AC4A] transition-colors drop-shadow-lg cursor-pointer" style={{ fontFamily: 'Alata' }}>Home</span>
                <a href="/about-us" className="text-[16px] text-white font-medium hover:text-[#D3AC4A] transition-colors drop-shadow-lg" style={{ fontFamily: 'Alata' }}>About us</a>
                <a href="/projects" className="text-[16px] text-[#D3AC4A] font-medium hover:text-white transition-colors drop-shadow-lg" style={{ fontFamily: 'Alata' }}>Project</a>
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
          className="absolute top-4 right-8 z-40"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button 
            className="bg-[#D3AC4A] text-[#37405E] px-6 py-3 rounded-lg font-bold text-[16px] hover:bg-[#C19B42] transition-colors flex items-center space-x-2"
            style={{ fontFamily: 'Futura-Heavy' }}
          >
            <span>Schedule a visit</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"/>
            </svg>
          </button>
        </motion.div>

        {/* Legal & Approvals Title - Centered over building image */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <motion.h1 
              className="text-[48px] font-normal text-white drop-shadow-2xl"
              style={{ fontFamily: 'DM Serif Display' }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Legal & Approvals
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
                <span>Legal & approvals</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content Section - Second Fold */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Table of Contents - Left Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="bg-white p-6 sticky top-8">
                <h3 className="text-[20px] font-normal text-[#D3AC4A] mb-6" style={{ fontFamily: 'Alata' }}>Table of Content</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 relative overflow-hidden ${
                        activeSection === item.id
                          ? 'bg-[#37405E] text-white shadow-lg'
                          : 'text-[#37405E] hover:bg-[#F5F2E8] hover:text-[#D3AC4A] hover:shadow-md'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: item.id * 0.1 }}
                    >
                      {activeSection === item.id && (
                        <motion.div
                          className="absolute inset-0 bg-[#37405E]"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                          style={{ originX: 0 }}
                        />
                      )}
                      <span className="relative text-[16px] font-medium" style={{ fontFamily: 'Alata' }}>
                        {item.id}. {item.title}
                      </span>
                    </motion.button>
                  ))}
                </nav>
                
                {/* Navigation Progress Indicator */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-xs text-[#37405E]" style={{ fontFamily: 'Alata' }}>
                    <span>Progress</span>
                    <span>{Math.round((activeSection / 6) * 100)}%</span>
                  </div>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <motion.div 
                      className="bg-[#D3AC4A] h-2 rounded-full"
                      initial={{ width: '16.66%' }}
                      animate={{ width: `${(activeSection / 6) * 100}%` }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main Content - Right Side */}
            <div className="lg:col-span-3 space-y-16">
              {/* Header Section */}
              <motion.div
                id="section-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-[32px] lg:text-[36px] text-[#37405E] mb-6" style={{ fontFamily: 'DM Serif Display' }}>
                  Your property is <span className="text-[#D3AC4A]">100% legally clear</span>
                </h2>
                <p className="text-[18px] text-[#37405E] font-normal leading-relaxed max-w-3xl mx-auto mb-4" style={{ fontFamily: 'Alata' }}>
                  Every property purchase. Every plot purchase. Every approval — 100% Verified.
                </p>
                <p className="text-[18px] text-[#37405E] font-normal leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'Alata' }}>
                  Fair property is on Good Projects that ensure legal clarity; that means in the title 
                  Every property we develop is fully approved, legally verified, and bank loan-eligible, giving 
                  every buyer total peace of mind.
                </p>
              </motion.div>

              {/* Project-Wise Approvals */}
              <motion.div
                id="section-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h3 className="text-[24px] lg:text-[28px] text-[#37405E] mb-6" style={{ fontFamily: 'DM Serif Display' }}>
                  Project-Wise approvals
                </h3>
                
                {projects.map((project, index) => (
                  <div key={index} className="space-y-4">
                    <h4 className="text-[20px] font-normal text-[#D3AC4A] mb-3" style={{ fontFamily: 'DM Serif Display' }}>
                      {project.name} – <span className="text-[#37405E]">{project.location}</span>
                    </h4>
                    <ul className="space-y-3">
                      {project.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#D3AC4A] rounded-full mt-2 flex-shrink-0" />
                          <span className="text-[#37405E] font-normal text-[16px]" style={{ fontFamily: 'Alata' }}>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>

              {/* Legal Transparency Promise */}
              <motion.div
                id="section-3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h3 className="text-[24px] lg:text-[28px] text-[#37405E] mb-4" style={{ fontFamily: 'DM Serif Display' }}>
                  Our legal <span className="text-[#D3AC4A]">transparency promise</span>
                </h3>
                <p className="text-[#37405E] font-normal text-[18px] mb-6" style={{ fontFamily: 'Alata' }}>
                  Before any project is launched for sale, we ensure:
                </p>
                
                <div className="space-y-6">
                  {legalPromises.map((promise, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#D3AC4A] rounded-full flex items-center justify-center text-white font-bold text-xs">
                        {index + 1}
                      </div>
                      <div>
                        <h5 className="font-medium text-[#37405E] mb-1 text-[16px]" style={{ fontFamily: 'Alata' }}>{promise.title}:</h5>
                        <p className="text-[#37405E] font-normal text-[16px]" style={{ fontFamily: 'Alata' }}>{promise.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Loan & Registration Support */}
              <motion.div
                id="section-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h3 className="text-[24px] lg:text-[28px] text-[#37405E] mb-4" style={{ fontFamily: 'DM Serif Display' }}>
                  Loan & Registration <span className="text-[#D3AC4A]">support</span>
                </h3>
                <p className="text-[#37405E] font-normal text-[18px] mb-6" style={{ fontFamily: 'Alata' }}>
                  Our team provides professional guidance with your property purchase:
                </p>
                
                <div className="space-y-4">
                  {loanSupport.map((support, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#D3AC4A] rounded-full mt-2 flex-shrink-0" />
                      <p className="text-[#37405E] font-normal text-[16px]" style={{ fontFamily: 'Alata' }}>
                        <span className="font-normal">{support.title}</span> {support.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Legal Consultant's Statement */}
              <motion.div
                id="section-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <h3 className="text-[24px] lg:text-[28px] text-[#37405E] mb-6" style={{ fontFamily: 'DM Serif Display' }}>
                  Legal Consultant&apos;s statement
                </h3>
                <blockquote className="text-[18px] text-[#37405E] font-normal leading-relaxed italic mb-6" style={{ fontFamily: 'Alata' }}>
                  &ldquo;All Fair Field Shelters projects undergo strict legal scrutiny for title, approval and compliance being 
                  sales begin. Each layout follows DTCP and RERA norms, ensuring that every buyer gets a safe, 
                  clear and immediately transferable property.&rdquo;
                </blockquote>
                <p className="text-right text-[#37405E] font-normal text-[16px]" style={{ fontFamily: 'Alata' }}>
                  &mdash; Legal, Adv. Jeyaraj
                </p>
              </motion.div>

              {/* Our Commitment to Compliance */}
              <motion.div
                id="section-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h3 className="text-[24px] lg:text-[28px] text-[#37405E] mb-6" style={{ fontFamily: 'DM Serif Display' }}>
                  Our <span className="text-[#D3AC4A]">Commitment to compliance</span>
                </h3>
                
                <div className="space-y-4">
                  {commitments.map((commitment, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#D3AC4A] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#37405E] font-normal text-[16px]" style={{ fontFamily: 'Alata' }}>{commitment}</span>
                    </div>
                  ))}
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