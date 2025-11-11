'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Phone, MapPin, Clock, ChevronRight, ArrowRight } from 'lucide-react';
import UniversalFooter from '@/components/shared/footer/UniversalFooter';

export function ContactUsPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interestedProject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

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
                <a href="/projects" className="text-[16px] text-white font-medium hover:text-[#D3AC4A] transition-colors drop-shadow-lg" style={{ fontFamily: 'Alata' }}>Project</a>
                <a href="/blog" className="text-[16px] text-white font-medium hover:text-[#D3AC4A] transition-colors drop-shadow-lg" style={{ fontFamily: 'Alata' }}>Blog</a>
                <a href="/careers" className="text-[16px] text-white font-medium hover:text-[#D3AC4A] transition-colors drop-shadow-lg" style={{ fontFamily: 'Alata' }}>Careers</a>
                <a href="/contact" className="text-[16px] text-[#D3AC4A] font-medium hover:text-white transition-colors drop-shadow-lg" style={{ fontFamily: 'Alata' }}>Contact</a>
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

        {/* Contact Title - Centered over building image */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <motion.h1 
              className="text-[48px] font-normal text-white drop-shadow-2xl"
              style={{ fontFamily: 'DM Serif Display' }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Contact
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
                <span>Contact</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Second Fold - Map and Contact Form on White Background */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif text-[#37405E] mb-6">
              We&apos;re here to help you find your <span className="text-[#D3AC4A]">Premium property</span>.
            </h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              <p className="text-lg text-[#37405E] font-sans">
                Whether you&apos;re looking for a DTCP-approved plot, a premium villa, or an upcoming investment opportunity, our team is ready to guide you every step of the way.
              </p>
              <p className="text-lg text-[#37405E] font-sans">
                We believe in clear communication, quick response and personal attention because your dream home deserves the right care.
              </p>
            </div>
          </motion.div>

          {/* Contact Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
                {/* Email Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 bg-[#37405E] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="text-white" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#37405E] mb-2">Email us</h3>
                  <p className="text-[#37405E] font-medium mb-3">fairfieldshelters@gmail.com</p>
                  <p className="text-sm text-gray-600">
                    We&apos;ll respond with the information you need about available plots, villas, or upcoming projects.
                  </p>
                </motion.div>

                {/* Call Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 bg-[#37405E] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="text-white" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#37405E] mb-2">Call us</h3>
                  <div className="space-y-1 mb-3">
                    <p className="text-[#37405E] font-medium">+91 79008 82288,</p>
                    <p className="text-[#37405E] font-medium">+91 79008 84488</p>
                  </div>
                  <p className="text-sm text-gray-600">
                    We&apos;re available on WhatsApp for quick replies and property updates.
                  </p>
                </motion.div>

                {/* Location Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 bg-[#37405E] rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#37405E] mb-2">Location</h3>
                  <div className="text-[#37405E] font-medium mb-3">
                    <p>SF No.722, Fairfield Anicham,</p>
                    <p>Nanjundapuram Road,</p>
                    <p>Ramanathapuram,</p>
                    <p>Coimbatore - 641 036</p>
                  </div>
                </motion.div>

                {/* Working Hours Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 bg-[#37405E] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="text-white" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#37405E] mb-2">Working Hours</h3>
                  <div className="space-y-2 text-[#37405E] font-medium">
                    <p>Mon – Saturday: 9:30 AM – 7:00PM</p>
                    <p>Sunday: Pre-booked site visits only</p>
                  </div>
                </motion.div>
          </div>

          {/* Map and Contact Form */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden h-80 lg:h-96"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2704!2d76.9366!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAxJzAwLjQiTiA3NsKwNTYnMTEuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fair Field Shelters Location"
              />
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D3AC4A] focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D3AC4A] focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D3AC4A] focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
                
                <div>
                  <select
                    name="interestedProject"
                    value={formData.interestedProject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D3AC4A] focus:border-transparent outline-none transition-all bg-white"
                    required
                  >
                    <option value="">Interested Project</option>
                    <option value="fairfield-anicham">Fairfield Anicham</option>
                    <option value="premium-plots">Premium Plots</option>
                    <option value="luxury-villas">Luxury Villas</option>
                    <option value="upcoming-projects">Upcoming Projects</option>
                  </select>
                </div>
                
                <div>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Your Message..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D3AC4A] focus:border-transparent outline-none transition-all resize-none"
                    required
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#D3AC4A] text-white font-semibold py-4 px-6 rounded-lg hover:bg-[#B8941A] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Third Fold - Book a free site visit CTA with Overlay */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Contact us page - ff/image/third fold image.jpg"
            alt="Book a free site visit - Laptop with blueprints"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl lg:text-5xl font-serif text-[#D3AC4A] font-medium">
              Book a free site visit
            </h2>
            <p className="text-xl text-white mb-8">
              Want to see our projects in person?
            </p>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-8">
              Our sales team will help you schedule a convenient time, arrange transportation if needed and guide you through the full buying process.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#D3AC4A] text-[#37405E] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#C19B42] transition-all duration-300 inline-flex items-center gap-3"
              style={{ fontFamily: 'Futura-Heavy' }}
            >
              Book a free site visit
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Fourth Fold - Our Commitment Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/Contact us page - ff/image/fourth fold image.png"
                alt="Fair Field Entrance Gate"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Large Golden Quote Mark on Card */}
              <div className="absolute -top-8 -right-8 text-[#D3AC4A] text-8xl lg:text-9xl font-serif opacity-70 z-20" style={{ fontFamily: 'DM Serif Display' }}>
                ❞
              </div>
              
              <div className="bg-[#F5F2E8] rounded-2xl p-8 lg:p-12 relative z-10 ml-8">
                <div className="space-y-6">
                  <h2 className="text-4xl lg:text-5xl font-serif text-[#37405E]" style={{ fontFamily: 'DM Serif Display' }}>
                    Our <span className="text-[#D3AC4A]">Commitment</span>
                  </h2>
                  <blockquote className="text-lg lg:text-xl text-[#37405E] font-medium leading-relaxed" style={{ fontFamily: 'Futura-Medium' }}>
                    "We believe a good conversation is the first step to a great home. Reach out, we'll make sure your experience with Fair Field Shelters is simple, transparent and truly premium."
                  </blockquote>
                </div>
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