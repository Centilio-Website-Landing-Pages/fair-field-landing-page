'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Phone, MapPin, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { UniversalHeader } from '@/components/shared/header/UniversalHeader';
import UniversalFooter from '@/components/shared/footer/UniversalFooter';
import { ShiningText } from '../ui/shining-text'


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
        <div className="absolute inset-4 rounded-lg overflow-hidden">
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

        {/* Contact Title - Centered over building image */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white drop-shadow-2xl"
              style={{ fontFamily: 'DM Serif Display' }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Contact
            </motion.h1>
          </div>
        </div>

        {/* Cream Breadcrumb Bar - With spacing */}
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
                  src="/images/about us page - ff/icons/first fold icon.svg"
                  alt="Arrow"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
                <span>Contact</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Second Fold - Map and Contact Form on White Background */}
      <section className="py-10 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-[#37405E] mb-6 lg:mb-12">
              We&apos;re here to help you find your <span className="text-[#D3AC4A]">Premium property</span>.
            </h2>
            <div className="space-y-4 mx-auto">
              <p className="text-lg text-[#37405E] font-sans">
                Whether you&apos;re looking for a DTCP-approved plot, a premium villa, or an upcoming investment opportunity, our team is ready to guide you every step of the way.
              </p>
              <p className="text-lg text-[#37405E] font-sans">
                We believe in clear communication, quick response and personal attention because your dream home deserves the right care.
              </p>
            </div>
          </motion.div>

          {/* Contact Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto mb-20">
                {/* Email Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className=" rounded-2xl p-6 text-center shadow-lg"
                >
                  <div className='flex justify-center gap-4 items-center mb-6'>
                    <Image
                      src="/images/Contact us page - ff/icons/second fold/mail Vector.svg"
                      alt="Email icon"
                      width={30}
                      height={30}
                    />
                    <h3 className="text-lg lg:text-2xl font-semibold text-[#37405E]">Email us</h3>
                  </div>
                  <p className="text-[#37405E] font-medium mb-4">fairfieldshelters@gmail.com</p>
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
                  className="rounded-2xl p-6 text-center shadow-lg"
                >
                  <div className='flex justify-center gap-4 items-center mb-6'>
                    <Image
                      src="/images/Contact us page - ff/icons/second fold/call (1).svg"
                      alt="Phone icon"
                      width={30}
                      height={30}
                    />
                    <h3 className="text-lg lg:text-2xl font-semibold text-[#37405E]">Call us</h3>
                  </div>
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
                  className="rounded-2xl p-6 text-center shadow-lg"
                >
                  <div className='flex justify-center gap-4 items-center mb-6'>
                    <Image
                      src="/images/Contact us page - ff/icons/second fold/address.svg"
                      alt="Location icon"
                      width={30}
                      height={30}
                    />
                    <h3 className="text-lg lg:text-2xl font-semibold text-[#37405E]">Location</h3>
                  </div>
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
                  className="rounded-2xl p-6 text-center shadow-lg"
                >
                  <div className='flex justify-center gap-4 items-center mb-6'>
                    <Image
                      src="/images/Contact us page - ff/icons/second fold/time.svg"
                      alt="Clock icon"
                      width={30}
                      height={30}
                    />
                    <h3 className="text-lg lg:text-2xl font-semibold text-[#37405E]">Working Hours</h3>
                  </div>
                  <div className="space-y-2 text-[#37405E] font-medium">
                    <p>Mon – Saturday: 9:30 AM – 7:00PM</p>
                    <p>Sunday: Pre-booked site visits only</p>
                  </div>
                </motion.div>
          </div>

          {/* Map and Contact Form */}
          <div className="flex flex-col lg:flex-row  gap-16 ">
            {/* Left Side - Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden w-full lg:w-1/2"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5543.6178016461645!2d77.0050692!3d10.982842!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859004af70d41%3A0x26f827bd348ccc28!2sFair%20Field!5e1!3m2!1sen!2sin!4v1763708552049!5m2!1sen!2sin"
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
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 w-full lg:w-1/2"
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
                <div className='flex justify-center'>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className=" bg-[#D3AC4A] text-[#37405E] font-semibold py-2 px-6 lg:px-24 rounded-lg hover:bg-[#B8941A] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Third Fold - Book a free site visit CTA with Overlay */}
      <section className="relative py-10 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Contact us page - ff/image/third fold image.jpg"
            alt="Book a free site visit - Laptop with blueprints"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#37405EB2]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-[#D3AC4A] font-medium">
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
              className="bg-[#D3AC4A] text-[#37405E] px-6 py-2 lg:px-8 lg:py-4 rounded-lg font-bold text-lg hover:bg-[#C19B42] transition-all duration-300 inline-flex items-center gap-3"
              style={{ fontFamily: 'Futura-Heavy' }}
            >
              Book a free site visit
              <Image
                src="/images/Contact us page - ff/icons/cta arrow Vector.svg"
                alt="Arrow"
                width={16}
                height={16}
              />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Fourth Fold - Our Commitment Section */}
      <section className="py-10 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-2 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden"
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
              <div className="absolute -top-4 right-4 lg:-top-8 lg:right-8 z-20">
                <Image
                  src="/images/Contact us page - ff/icons/quote-icon.png"
                  alt="Quote icon"
                  width={60}
                  height={60}
                  className="opacity-70 w-12 h-12 lg:w-20 lg:h-20"
                />
              </div>
              
              <div className="bg-[#F5F2E8] rounded-2xl p-8 lg:p-12 relative z-10">
                <div className="space-y-6">
                  {/* <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-[#37405E]" style={{ fontFamily: 'DM Serif Display' }}>
                    Our <span className="text-[#D3AC4A]">Commitment</span>
                  </h2> */}
                  <ShiningText customStyle="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-['DM_Serif_Display'] mb-4 sm:mb-6 lg:mb-8" textLeft={"Our "} textRight={"Commitment"} />                
                  <blockquote className="text-lg lg:text-xl text-[#37405E] font-medium leading-relaxed" style={{ fontFamily: 'Futura-Medium' }}>
                    &quot;We believe a good conversation is the first step to a great home. Reach out, we&apos;ll make sure your experience with Fair Field Shelters is simple, transparent and truly premium.&quot;
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