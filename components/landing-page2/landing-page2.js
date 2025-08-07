'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import phone from '@/images/phone.svg'

import Header from '@/components/header.js'
import { ShiningText } from "@/components/ui/shining-text"
import { ShimmerButton } from "@/components/ui/shimmer-button"

import fold1image1 from '@/images/landing-page2/fold1image1.jpg'
import fold4image1 from '@/images/landing-page2/fold4image1.png'
import fold4icon1 from '@/images/landing-page2/fold4icon1.svg'
import fold5icon1 from '@/images/landing-page2/fold5icon1.svg'
import fold5icon2 from '@/images/landing-page2/fold5icon2.svg'
import fold5icon3 from '@/images/landing-page2/fold5icon3.svg'
import fold5icon4 from '@/images/landing-page2/fold5icon4.svg'
import fold5icon5 from '@/images/landing-page2/fold5icon5.svg'
import fold6icon1 from '@/images/landing-page2/fold6icon1.svg'
import fold7icon1 from '@/images/landing-page2/fold7icon1.svg'
import fold7image1 from '@/images/landing-page2/fold7image1.png'
import fold9icon1 from '@/images/landing-page2/fold9icon1.svg'
import fold9icon2 from '@/images/landing-page2/fold9icon2.svg'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const timelineVariant = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function LandingPage2() {

	const [formData, setFormData] = useState({
	    fullName: '',
	    email: '',
	    phoneNumber: ''
	});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	// Refs for lazy loading
	const heroRef = useRef(null);
	const appreciationRef = useRef(null);
	const performanceRef = useRef(null);
	const infrastructureRef = useRef(null);
	const intelligenceRef = useRef(null);
	const testimonialsRef = useRef(null);
	const ctaRef = useRef(null);
	const contactRef = useRef(null);

	// InView hooks
	const heroInView = useInView(heroRef, { once: true, threshold: 0.3 });
	const appreciationInView = useInView(appreciationRef, { once: true, threshold: 0.5 });
	const performanceInView = useInView(performanceRef, { once: true, threshold: 0.3 });
	const infrastructureInView = useInView(infrastructureRef, { once: true, threshold: 0.3 });
	const intelligenceInView = useInView(intelligenceRef, { once: true, threshold: 0.2 });
	const testimonialsInView = useInView(testimonialsRef, { once: true, threshold: 0.3 });
	const ctaInView = useInView(ctaRef, { once: true, threshold: 0.3 });
	const contactInView = useInView(contactRef, { once: true, threshold: 0.5 });

	const validateForm = () => {
	    const newErrors = {};

	    // Full name validation
	    if (!formData.fullName.trim()) {
	      newErrors.fullName = 'Full name is required';
	    } else if (formData.fullName.trim().length < 2) {
	      newErrors.fullName = 'Full name must be at least 2 characters';
	    }

	    // Email validation
	    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	    if (!formData.email.trim()) {
	      newErrors.email = 'Email is required';
	    } else if (!emailRegex.test(formData.email)) {
	      newErrors.email = 'Please enter a valid email address';
	    }

	    // Phone number validation
	    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
	    if (!formData.phoneNumber.trim()) {
	      newErrors.phoneNumber = 'Phone number is required';
	    } else if (!phoneRegex.test(formData.phoneNumber.replace(/[\s\-\(\)]/g, ''))) {
	      newErrors.phoneNumber = 'Please enter a valid phone number';
	    }

	    setErrors(newErrors);
	    return Object.keys(newErrors).length === 0;
	};

	const handleInputChange = (e) => {
	    const { name, value } = e.target;
	    setFormData(prev => ({
	      ...prev,
	      [name]: value
	    }));

	    // Clear error when user starts typing
	    if (errors[name]) {
	      setErrors(prev => ({
	        ...prev,
	        [name]: ''
	      }));
	    }
	};

	const handleSubmit = async (e) => {
	    e.preventDefault();
	    
	    if (!validateForm()) {
	      return;
	    }

	    setIsSubmitting(true);
	    
	    try {
	      // Simulate API call
	    //   await new Promise(resolve => setTimeout(resolve, 1000));
		window.centilio_connector_init.submit();
	      
	      // Handle successful submission
	      console.log('Form submitted:', formData);
	      alert('Consultation booked successfully!');
	      
	      // Reset form
	      setFormData({
	        fullName: '',
	        email: '',
	        phoneNumber: ''
	      });
	    } catch (error) {
	      console.error('Submission error:', error);
	      alert('There was an error booking your consultation. Please try again.');
	    } finally {
	      setIsSubmitting(false);
	    }
	};

	const performanceData = [
	    {
	      year: '2020',
	      value: '₹8L per plot average'
	    },
	    {
	      year: '2022',
	      value: '₹12L per plot average'
	    },
	    {
	      year: '2024',
	      value: '₹18L per plot average'
	    },
	    {
	      year: '2028',
	      value: '₹25L projected (Conservative estimate)'
	    }
	];

	const indicators = [
	    {
	      text: "L&T Bypass 4-lane expansion (Work started)"
	    },
	    {
	      text: "Metro connectivity (Route finalized)"
	    },
	    {
	      text: "IT park expansion (500 acres sanctioned)"
	    },
	    {
	      text: "Cricket stadium (Ondipudur announced)"
	    },
	    {
	      text: "Podanur station upgrade (Tenders floated)"
	    }
	];

	const intelligenceData = [
	    {
	      icon: fold5icon1,
	      title: '40% plots already taken by smart investors'
	    },
	    {
	      icon: fold5icon2, 
	      title: 'Zero litigation risk with clear titles'
	    },
	    {
	      icon: fold5icon3,
	      title: 'RERA protection (346/2021, 351/2021'
	    },
	    {
	      icon: fold5icon4,
	      title: 'Limited supply - only 73 units total'
	    },
	    {
	      icon: fold5icon5,
	      title: 'Rental potential: ₹25,000/month for villas'
	    }
	];

	const testimonialsData = [
	   {
	     name: "Krishnan",
	     profession: "Serial Investor",
	     testimonial: "Bought 3 plots. Already received 2 offers with 15% premium in 6 months!"
	   },
	   {
	     name: "Rashid",
	     profession: "NRI Investor",
	     testimonial: "Better than my mutual fund returns. Plus, it's a real asset I can see."
	   }
	];

	const features = [
	    "ROI projections with data",
	    "Comparative market study",
	    "Exit strategy planning", 
	    "Rental yield calculations",
	];

	return(
		<>
		<Header />
			
			{/* Hero Section */}
			<div className="bg-[#937B371A]" ref={heroRef}>
				<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px] py-20">
					<div className="grid lg:grid-cols-2 gap-8 items-center">
			          {/* Left Content */}
			          <motion.div 
			            className="space-y-8"
			            initial="hidden"
			            animate={heroInView ? "visible" : "hidden"}
			            variants={staggerContainer}
			          >
			            <motion.div className="space-y-6" variants={staggerItem}>
			              <motion.div variants={staggerItem}>
			                <ShiningText customStyle="sm:text-[40px] text-[30px] font-medium font-['DM_Serif_Display']" textLeft={"See Your ₹18.5L "} textRight={"Become ₹25L by 2028"} />
			              </motion.div>
			              <motion.p 
			                className="text-[#000000] md:text-[18px] leading-relaxed"
			                variants={staggerItem}
			              >
			              	Imagine checking your investment portfolio in 3 years and seeing a 40% appreciation. While others chase volatile stocks or settle for 6% FDs, your land investment in Coimbatore's fastest-growing corridor delivers consistent, tangible returns.
			              </motion.p>
			            </motion.div>

			            {/* Contact Form */}
			            <motion.div 
			              className="max-w-md font-['Futura-Medium']"
			              variants={staggerContainer}
			            >
			              <form onSubmit={handleSubmit} className="space-y-6">
			                {/* Full Name Field */}
			                <motion.div variants={staggerItem}>
			                  <input
			                    type="text"
			                    name="fullName"
			                    placeholder="Full name"
			                    value={formData.fullName}
			                    onChange={handleInputChange}
			                    className={`bg-white w-full px-4 py-3 border rounded-sm text-gray-900 placeholder-gray-500 transition-all duration-300 centilio-input-last-name ${
			                      errors.fullName 
			                        ? 'border-red-500 focus:ring-red-200' 
			                        : 'border-gray-300 focus:ring-green-200 focus:border-green-500'
			                    }`}
			                  />
			                  {errors.fullName && (
			                    <motion.p 
			                      className="mt-1 text-sm text-red-600"
			                      initial={{ opacity: 0, y: -10 }}
			                      animate={{ opacity: 1, y: 0 }}
			                    >
			                      {errors.fullName}
			                    </motion.p>
			                  )}
			                </motion.div>

			                {/* Email Field */}
			                <motion.div variants={staggerItem}>
			                  <input
			                    type="email"
			                    name="email"
			                    placeholder="Email"
			                    value={formData.email}
			                    onChange={handleInputChange}
			                    className={`bg-white w-full px-4 py-3 border rounded-sm text-gray-900 placeholder-gray-500 transition-all duration-300 centilio-input-email ${
			                      errors.email 
			                        ? 'border-red-500 focus:ring-red-200' 
			                        : 'border-gray-300'
			                    }`}
			                  />
			                  {errors.email && (
			                    <motion.p 
			                      className="mt-1 text-sm text-red-600"
			                      initial={{ opacity: 0, y: -10 }}
			                      animate={{ opacity: 1, y: 0 }}
			                    >
			                      {errors.email}
			                    </motion.p>
			                  )}
			                </motion.div>

			                {/* Phone Number Field */}
			                <motion.div variants={staggerItem}>
			                  <input
			                    type="tel"
			                    name="phoneNumber"
			                    placeholder="Phone Number"
			                    value={formData.phoneNumber}
			                    onChange={handleInputChange}
			                    className={`bg-white w-full px-4 py-3 border rounded-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-300 centilio-input-mobile ${
			                      errors.phoneNumber 
			                        ? 'border-red-500 focus:ring-red-200' 
			                        : 'border-gray-300 focus:ring-green-200 focus:border-green-500'
			                    }`}
			                  />
			                  {errors.phoneNumber && (
			                    <motion.p 
			                      className="mt-1 text-sm text-red-600"
			                      initial={{ opacity: 0, y: -10 }}
			                      animate={{ opacity: 1, y: 0 }}
			                    >
			                      {errors.phoneNumber}
			                    </motion.p>
			                  )}
			                </motion.div>

			                {/* Submit Button */}
			                <motion.div 
			                  id="bookVisitNowButton" 
			                  className="book-visit-button"
			                  variants={staggerItem}
			                  whileHover={{ scale: 1.02 }}
			                  whileTap={{ scale: 0.98 }}
			                >
				                <ShimmerButton id="" className="shadow-2xl w-full">
				                  {isSubmitting ? 'Booking...' : 'Book Your Visit Today'}
				                </ShimmerButton>
				            </motion.div>
			              </form>
			            </motion.div>
			          </motion.div>

			          {/* Right Image */}
			          <motion.div 
			            className="relative"
			            initial="hidden"
			            animate={heroInView ? "visible" : "hidden"}
			            variants={fadeInRight}
			          >
			              <Image
			                src={fold1image1}
			                alt="Happy school children in yellow uniforms walking together with backpacks"
			                className="shadow-lg"
			              />
			          </motion.div>
			        </div>
				</div>
			</div>

			{/* Infrastructure-Backed Appreciation Section */}
			<div className="bg-white" ref={appreciationRef}>
				<div className="max-w-[800px] mx-auto sm:px-[50px] px-[20px] py-20 text-center">
					<motion.div
						initial="hidden"
						animate={appreciationInView ? "visible" : "hidden"}
						variants={staggerContainer}
					>
						<motion.div variants={staggerItem}>
							<ShiningText customStyle="sm:text-[40px] text-[30px] font-medium font-['DM_Serif_Display'] max-w-[550px] mx-auto" textLeft={"Infrastructure-Backed Appreciation "} textRight={"You Can Bank On"} />
						</motion.div>
						<motion.div 
							className="mt-7 text-[18px] font-['Futura-Medium'] leading-[27px]"
							variants={staggerItem}
						>
							Anicham & Magilam isn't just another project - it's a calculated investment opportunity in Nanjundapuram's transformation zone.
						</motion.div>
					</motion.div>
				</div>
			</div>

			{/* Historical Performance Section */}
			<div className="bg-[#937B371A]" ref={performanceRef}>
				<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px] py-20 text-center">
					<motion.div
						initial="hidden"
						animate={performanceInView ? "visible" : "hidden"}
						variants={fadeInUp}
					>
						<ShiningText customStyle="sm:text-[40px] text-[30px] font-medium font-['DM_Serif_Display'] mx-auto" textLeft={"Historical Area "} textRight={"Performance"} />
					</motion.div>
			        
			        {/* Timeline Container */}
			        <div className="relative mt-10">
			          {/* Desktop Timeline - Horizontal */}
			          <div className="hidden md:block">
			            {/* Timeline Items */}
			            <motion.div 
			              className="flex justify-between items-start relative z-10 mx-auto w-fit"
			              initial="hidden"
			              animate={performanceInView ? "visible" : "hidden"}
			              variants={staggerContainer}
			            >
			              {performanceData.map((item, index) => (
			              	<div key={index} className="flex items-center w-full">
				                <motion.div 
				                  className="flex flex-col items-center"
				                  variants={timelineVariant}
				                  whileHover={{ scale: 1.1 }}
				                >
				                  {/* Circle */}
				                  <div 
				                    className="w-[100px] h-[100px] rounded-full flex items-center justify-center text-white text-xl lg:text-2xl font-bold mb-8"
				                    style={{ backgroundColor: '#37405E' }}
				                  >
				                    {item.year}
				                  </div>
				                  
				                  {/* Value Text */}
				                  <p className="text-center text-gray-700 font-medium text-sm lg:text-base leading-relaxed w-[120px]">
				                    {item.value}
				                  </p>
				                </motion.div>
				                { (index != 3) &&
					                <motion.div 
					                  className="border-t-[1px] border-t-black border-dashed md:min-w-[80px] lg:min-w-[150px] mt-[-80px]"
					                  initial={{ scaleX: 0 }}
					                  animate={performanceInView ? { scaleX: 1 } : { scaleX: 0 }}
					                  transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
					                >
					                </motion.div>
					            }
			                </div>
			              ))}
			            </motion.div>
			          </div>

			          {/* Mobile Timeline - Vertical */}
			          <div className="md:hidden">
			            <div className="relative">
			              {/* Vertical Timeline Line */}
			              <motion.div 
			                className="absolute left-12 top-0 bottom-0 w-0.5 bg-gray-400 z-0"
			                initial={{ scaleY: 0 }}
			                animate={performanceInView ? { scaleY: 1 } : { scaleY: 0 }}
			                transition={{ duration: 1 }}
			              ></motion.div>
			              
			              {/* Timeline Items */}
			              <motion.div 
			                className="space-y-12"
			                initial="hidden"
			                animate={performanceInView ? "visible" : "hidden"}
			                variants={staggerContainer}
			              >
			                {performanceData.map((item, index) => (
			                  <motion.div 
			                    key={index} 
			                    className="flex items-start relative z-10"
			                    variants={staggerItem}
			                  >
			                    {/* Circle */}
			                    <div 
			                      className="w-24 h-24 rounded-full flex items-center justify-center text-white text-lg font-bold flex-shrink-0"
			                      style={{ backgroundColor: '#37405E' }}
			                    >
			                      {item.year}
			                    </div>
			                    
			                    {/* Value Text */}
			                    <div className="ml-6 mt-7">
			                      <p className="text-gray-700 font-medium text-base leading-relaxed">
			                        {item.value}
			                      </p>
			                    </div>
			                  </motion.div>
			                ))}
			              </motion.div>
			            </div>
			          </div>
			        </div>
				</div>
			</div>

			{/* Infrastructure Section */}
			<div className="bg-white" ref={infrastructureRef}>
				<div className="relative max-w-[1300px] mx-auto sm:px-[50px] px-[20px] py-20">
					<div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-center">
			          {/* Image Section */}
			            <motion.div 
			              className="relative"
			              initial="hidden"
			              animate={infrastructureInView ? "visible" : "hidden"}
			              variants={fadeInLeft}
			            >
			              <Image
			                src={fold4image1}
			                alt="Infrastructure development site"
			              />
			            </motion.div>

			          {/* Content Section */}
			          <motion.div 
			            className="w-fit"
			            initial="hidden"
			            animate={infrastructureInView ? "visible" : "hidden"}
			            variants={staggerContainer}
			          >
			            <motion.div variants={staggerItem}>
			              <ShiningText customStyle="sm:text-[36px] text-[30px] font-medium font-['DM_Serif_Display'] mb-5 max-w-[450px]" textLeft={"Government-Confirmed "} textRight={"Growth Catalysts"} />
			            </motion.div>
			            
			            {/* Indicators List */}
			            <div className="space-y-6">
			              {indicators.map((indicator, index) => (
			                <motion.div 
			                  key={index}
			                  className="flex items-start gap-4"
			                  variants={staggerItem}
			                >
			                  {/* Check Icon */}
			                  <Image src={fold4icon1} alt="check" />
			                  {/* Indicator Text */}
			                  <p 
			                    className="text-[#37405E] leading-relaxed"
			                    style={{ fontFamily: 'Futura-Medium, sans-serif' }}
			                  >
			                    {indicator.text}
			                  </p>
			                </motion.div>
			              ))}
			            </div>
			          </motion.div>
			        </div>
				</div>
			</div>

			{/* Investment Intelligence Section */}
			<div className="bg-[#937B371A]" ref={intelligenceRef}>
				<div className="relative max-w-[1300px] mx-auto sm:px-[50px] px-[20px] py-20">
					<motion.div
						initial="hidden"
						animate={intelligenceInView ? "visible" : "hidden"}
						variants={fadeInUp}
					>
						<ShiningText customStyle="sm:text-[36px] text-[30px] font-medium font-['DM_Serif_Display'] text-center" textLeft={"Investment "} textRight={"Intelligence"} />
					</motion.div>
					
					{/* Intelligence Items */}
			        <motion.div 
			          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-6 lg:gap-4 mt-10"
			          initial="hidden"
			          animate={intelligenceInView ? "visible" : "hidden"}
			          variants={staggerContainer}
			        >
			          {intelligenceData.map((item, index) => (
			            <motion.div 
			              key={index} 
			              className="flex flex-col items-center text-center"
			              variants={scaleIn}
			              whileHover={{ 
			                y: -10,
			                transition: { duration: 0.2 }
			              }}
			            >
			              {/* Icon Circle */}
			              <Image src={item.icon} alt={item.title} />
			              {/* Title Text */}
			              <p className="font-medium text-[18px] leading-relaxed max-w-xs mt-6">
			                {item.title}
			              </p>
			            </motion.div>
			          ))}
			        </motion.div>
				</div>
			</div>

			{/* Testimonials Section */}
			<div className="bg-white" ref={testimonialsRef}>
				<div className="relative max-w-[700px] mx-auto sm:px-[50px] px-[20px] py-20">
					<motion.div
						initial="hidden"
						animate={testimonialsInView ? "visible" : "hidden"}
						variants={fadeInUp}
					>
						<ShiningText customStyle="sm:text-[36px] text-[30px] font-medium font-['DM_Serif_Display'] text-center" textLeft={"Investor "} textRight={"Testimonials"} />
					</motion.div>
		            
		            <motion.div 
		              className="grid md:grid-cols-2 gap-6 lg:gap-8 text-center w-fit mx-auto mt-15"
		              initial="hidden"
		              animate={testimonialsInView ? "visible" : "hidden"}
		              variants={staggerContainer}
		            >
		              {testimonialsData.map((testimonial, index) => (
		                <motion.div 
		                  key={index}
		                  className="max-w-[282px] bg-white rounded-sm p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative border border-[#7B7B7B33]"
		                  variants={scaleIn}
		                  whileHover={{ 
		                    scale: 1.05,
		                    transition: { duration: 0.2 }
		                  }}
		                >
		                  {/* Quote Icon */}
		                  <div className="mx-auto">
		                      <span className="text-[100px] font-['Raleway'] text-[#D3AC4A] font-bold">"</span>
		                  </div>

		                  {/* Content */}
		                  <div className="-mt-15">
		                    {/* Name and Profession */}
		                    <div className="mb-6">
		                      <h3 className="text-xl md:text-[20px] font-['Futura-Medium'] mb-1" style={{ color: '#37405E' }}>
		                        {testimonial.name}
		                      </h3>
		                      <p className="text-base text-xl font-['Roboto'] font-light" style={{ color: '#7B7B7B' }}>
		                        {testimonial.profession}
		                      </p>
		                    </div>

		                    {/* Testimonial Text */}
		                    <blockquote className="font-['Roboto'] leading-relaxed text-center font-medium" style={{ color: '#7B7B7B' }}>
		                      &quot;{testimonial.testimonial}&quot;
		                    </blockquote>
		                  </div>
		                </motion.div>
		              ))}
		            </motion.div>
		            
		            <motion.div
		            	initial={{ opacity: 0, scale: 0, rotate: -180 }}
		            	animate={testimonialsInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -180 }}
		            	transition={{ delay: 0.8, duration: 0.6 }}
		            >
		            	<Image src={fold6icon1} alt="star" className="absolute top-10 left-0" />
		            </motion.div>
		            <motion.div
		            	initial={{ opacity: 0, scale: 0, rotate: 180 }}
		            	animate={testimonialsInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: 180 }}
		            	transition={{ delay: 1, duration: 0.6 }}
		            >
		            	<Image src={fold6icon1} alt="star" className="absolute bottom-5 right-0" />
		            </motion.div>
				</div>
			</div>

			{/* CTA Section */}
			<div className="bg-[#37405E]" ref={ctaRef}>
				<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[10px] py-20">
					<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
			          {/* Left Content */}
			          <motion.div 
			            className="space-y-8"
			            initial="hidden"
			            animate={ctaInView ? "visible" : "hidden"}
			            variants={staggerContainer}
			          >
			            {/* Heading */}
			            <motion.div className="space-y-2" variants={staggerItem}>
			            	<div className="font-semibold bg-linear-to-r from-[#D3AC4A] from-[30%] to-[#FFFFFF] to-[70%] bg-clip-text text-[36px] font-['DM_Serif_Display'] text-transparent ...">
			            		Lock Today's Price Before Infrastructure Completion
							</div>
			            </motion.div>

			            {/* Subheading */}
			            <motion.p 
			              className="text-xl sm:text-2xl font-medium text-gray-800 text-white"
			              variants={staggerItem}
			            >
			              Investment Desk Analysis Available
			            </motion.p>

			            {/* Features List */}
			            <motion.div 
			              className="space-y-4 pl-10"
			              variants={staggerContainer}
			            >
			                {features.map((feature, index) => (
			                  <motion.div 
			                    key={index} 
			                    className="flex items-center gap-4"
			                    variants={staggerItem}
			                  >
			                    {/* Check Icon */}
			                    <Image src={fold7icon1} alt="check" />
			                    
			                    {/* Feature Text */}
			                    <span className="text-white font-['Futura-Medium']">
			                      {feature}
			                    </span>
			                  </motion.div>
			                ))}
			            </motion.div>

			            {/* CTA Buttons */}
			            <motion.div 
			              className="flex pt-4"
			              variants={staggerContainer}
			            >
			            	<motion.button 
			            	  className={`cursor-pointer bg-[#D3AC4A] hover:bg-[#d7af13] transition-colors px-5 text-lg text-white py-3 rounded-[5] flex gap-[10px] cursor-pointer`}
			            	  variants={staggerItem}
			            	  whileHover={{ scale: 1.05 }}
			            	  whileTap={{ scale: 0.95 }}
							  onClick={() => window.centilio_connector_init.submit_call()}
			            	>
								<span className="text-[18px] font-semibold mx-auto">BOOK SITE VISIT</span>
							</motion.button>
							{/* <motion.button 
							  className={`cursor-pointer bg-[#D3AC4A] hover:bg-[#d7af13] transition-colors px-5 text-lg text-white py-3 rounded-[5] flex gap-[10px] cursor-pointer`}
							  variants={staggerItem}
							  whileHover={{ scale: 1.05 }}
							  whileTap={{ scale: 0.95 }}
							>
								<span className="text-[18px] font-semibold mx-auto">DOWNLOAD INVESTMENT REPORT</span>
							</motion.button> */}
			            </motion.div>
			          </motion.div>

			          {/* Right Image */}
			          <motion.div
			            initial="hidden"
			            animate={ctaInView ? "visible" : "hidden"}
			            variants={fadeInRight}
			          >
				          <Image
			                src={fold7image1}
			                alt="Aerial view of Eswara Nagar development showing plots and construction"
			              />
			          </motion.div>
			        </div>
				</div>
			</div>

			{/* Contact Section */}
			<div className="bg-white" ref={contactRef}>
				<div className="relative max-w-[1300px] mx-auto sm:px-[50px] px-[20px] py-20 text-center">
					<motion.div
						initial="hidden"
						animate={contactInView ? "visible" : "hidden"}
						variants={staggerContainer}
					>
						<motion.div 
							className="font-['Futura-Medium'] text-[24px] sm:text-[32px] mb-5"
							variants={staggerItem}
						>
							Only 33 plots remaining. Price revision expected post-metro announcement
						</motion.div>
						<motion.div 
							className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
							variants={staggerContainer}
						>
				          {/* Phone/WhatsApp */}
				          <motion.div 
				            className="flex items-start gap-4 p-4 lg:p-6 rounded-xl cursor-pointer justify-center"
				            variants={staggerItem}
				            whileHover={{ scale: 1.05 }}
				          >
				            <Image
				                src={fold9icon1}
				                alt="WhatsApp"
				                className="w-8 h-8"
				            />
				            <h3 className="text-[20px] w-fit">
				                +91 7900882288
				            </h3>
				          </motion.div>

				          {/* Location */}
				          <motion.div 
				            className="flex items-start gap-4 p-4 lg:p-6 rounded-xl justify-center"
				            variants={staggerItem}
				            whileHover={{ scale: 1.05 }}
				          >
				            <Image
				                src={fold9icon2}
				                alt="Location"
				                className="w-8 h-8"
				            />
				            <h3 className="text-[20px] w-fit">
				                +91 7900884488
				            </h3>
				          </motion.div>
				        </motion.div>
			        </motion.div>
				</div>
			</div>
		</>
	)
}