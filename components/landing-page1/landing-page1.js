'use client'
import { useState } from 'react';
import Image from 'next/image'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import phone from '@/images/phone.svg'

import Header from '@/components/header.js'
import { ShiningText } from "@/components/ui/shining-text"
import { ShimmerButton } from "@/components/ui/shimmer-button"

import fold1image1 from '@/images/landing-page1/fold1image1.png'
import fold2icon1 from '@/images/landing-page1/fold2icon1.svg'
import fold2icon2 from '@/images/landing-page1/fold2icon2.svg'
import fold2icon3 from '@/images/landing-page1/fold2icon3.svg'
import fold2icon4 from '@/images/landing-page1/fold2icon4.svg'
import fold2icon5 from '@/images/landing-page1/fold2icon5.svg'
import fold2icon6 from '@/images/landing-page1/fold2icon6.svg'
import fold3icon1 from '@/images/landing-page1/fold3icon1.svg'
import fold4image1 from '@/images/landing-page1/fold4image1.png'
import fold5icon1 from '@/images/landing-page1/fold5icon1.svg'
import fold7icon1 from '@/images/landing-page1/fold7icon1.svg'
import fold7icon2 from '@/images/landing-page1/fold7icon2.svg'

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
      staggerChildren: 0.1,
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

export default function LandingPage1() {

	const [formData, setFormData] = useState({
	    fullName: '',
	    email: '',
	    phoneNumber: ''
	});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	// Refs for lazy loading
	const heroRef = useRef(null);
	const featuresRef = useRef(null);
	const testimonialsRef = useRef(null);
	const infrastructureRef = useRef(null);
	const ctaRef = useRef(null);
	const contactRef = useRef(null);

	// InView hooks
	const heroInView = useInView(heroRef, { once: true, threshold: 0.3 });
	const featuresInView = useInView(featuresRef, { once: true, threshold: 0.2 });
	const testimonialsInView = useInView(testimonialsRef, { once: true, threshold: 0.3 });
	const infrastructureInView = useInView(infrastructureRef, { once: true, threshold: 0.3 });
	const ctaInView = useInView(ctaRef, { once: true, threshold: 0.5 });
	const contactInView = useInView(contactRef, { once: true, threshold: 0.5 });

	const features = [
	    {
	      title: "5-Minute Office Commute",
	      description: "Reach IT corridor in minutes, not hours",
	      icon: fold2icon1,
	    },
	    {
	      title: "Government Approved",
	      description: "DTCP & RERA registered (346/2021, 351/2021)",
	      icon: fold2icon2,
	    },
	    {
	      title: "Metro Connectivity Coming",
	      description: "Futureproof location with confirmed infrastructure",
	      icon: fold2icon3,
	    },
	    {
	      title: "30% Appreciation Potential",
	      description: "L&T bypass expansion driving growth",
	      icon: fold2icon4,
	    },
	    {
	      title: "Peaceful Productivity",
	      description: "Work from home in your own serene space",
	      icon: fold2icon5,
	    },
	    {
	      title: "Smart Community",
	      description: "60% buyers are IT professionals like you",
	      icon: fold2icon6,
	    }
	];

	const testimonialsData = [
	    {
	      name: "Rahul",
	      profession: "Tech Lead, TCS",
	      testimonial: "Invested in 2 plots. Best decision for portfolio diversification. The location analytics are perfect!"
	    },
	    {
	      name: "Priya",
	      profession: "Software Architect",
	      testimonial: "No more rental expenses. Building my dream home exactly as I coded it in my mind!"
	    }
	];

	const indicators = [
	    {
	      text: "L&T Bypass: 4-lane expansion confirmed"
	    },
	    {
	      text: "Metro Station: Within 2km planned"
	    },
	    {
	      text: "IT Park Expansion: 500 acres approved"
	    },
	    {
	      text: "Schools: SSVM, BVM within 5km"
	    }
	];

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
			                <ShiningText customStyle="sm:text-[40px] text-[30px] font-medium font-['DM_Serif_Display']" textLeft={"Still Losing 3 Hours Daily "} textRight={"to Coimbatore Traffic?"} />
			              </motion.div>
			              <motion.div 
			                className="text-[#D3AC4A] font-medium text-[24px] font-[Futura-Medium]"
			                variants={staggerItem}
			              >
			              	Your code runs efficiently. Why shouldn&apos;t your life?
			              </motion.div>
			              <motion.p 
			                className="text-[#000000] md:text-[18px] leading-relaxed"
			                variants={staggerItem}
			              >
			                Anicham & Magilam brings you closer to work, family, and dreams. Just 5km from major IT parks, this RERA-approved community of only 73 exclusive plots offers what every tech professional seeks - worklife balance in a growing investment
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

			{/* Features Section */}
			<div className="bg-white" ref={featuresRef}>
				<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px] py-20">
					<motion.div
						initial="hidden"
						animate={featuresInView ? "visible" : "hidden"}
						variants={fadeInUp}
					>
						<ShiningText customStyle="sm:text-[36px] text-[30px] font-medium font-['DM_Serif_Display'] text-center mb-10" textLeft={"The Edge "} textRight={"You Deserve"} />
					</motion.div>
			        
			        {/* Features Grid */}
			        <motion.div 
			          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
			          initial="hidden"
			          animate={featuresInView ? "visible" : "hidden"}
			          variants={staggerContainer}
			        >
			          {features.map((feature, index) => (
			            <motion.div 
			              key={index}
			              className="relative border border-[#7B7B7B33] rounded-sm p-8 hover:shadow-lg transition-all duration-300 min-h-[220px]"
			              variants={staggerItem}
			              whileHover={{ 
			                y: -5,
			                transition: { duration: 0.2 }
			              }}
			            >
			              {/* Feature Content */}
			              <div className="mb-6">
			                <h3 
			                  className="text-[18px] mb-4 text-[#37405E] leading-tight"
			                  style={{ fontFamily: 'Futura-Bold, sans-serif' }}
			                >
			                  {feature.title}
			                </h3>
			                <p 
			                  className="text-[#37405E] text-base leading-[30px]"
			                  style={{ fontFamily: 'Futura-Medium, sans-serif' }}
			                >
			                  {feature.description}
			                </p>
			              </div>

			              {/* Icon Container */}
			              <div className="flex justify-end">
			                  <Image
			                    src={feature.icon}
			                    alt={feature.title}
			                    className="absolute bottom-0 right-0"
			                  />
			              </div>
			            </motion.div>
			          ))}
			        </motion.div>
			    </div>
			</div>

			{/* Testimonials Section */}
			<div className="bg-[#37405E]" ref={testimonialsRef}>
				<div className="relative max-w-[700px] mx-auto sm:px-[50px] px-[20px] py-20">
					<motion.div 
						className="font-semibold bg-linear-to-r from-[#D3AC4A] from-[30%] to-[#FFFFFF] to-[70%] bg-clip-text text-[36px] font-['DM_Serif_Display'] text-center text-transparent ..."
						initial="hidden"
						animate={testimonialsInView ? "visible" : "hidden"}
						variants={fadeInUp}
					>
						What Tech Leaders Say
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
		                  className="max-w-[282px] bg-white rounded-sm p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
		                  variants={scaleIn}
		                  whileHover={{ 
		                    scale: 1.05,
		                    transition: { duration: 0.2 }
		                  }}
		                >
		                  {/* Quote Icon */}
		                  <div className="mx-auto">
		                      <span className="text-[100px] font-['Raleway'] text-[#D3AC4A] font-bold">&quot;</span>
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
		            	initial={{ opacity: 0, scale: 0 }}
		            	animate={testimonialsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
		            	transition={{ delay: 0.8, duration: 0.5 }}
		            >
		            	<Image src={fold3icon1} alt="star" className="absolute top-10 left-0" />
		            </motion.div>
		            <motion.div
		            	initial={{ opacity: 0, scale: 0 }}
		            	animate={testimonialsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
		            	transition={{ delay: 1, duration: 0.5 }}
		            >
		            	<Image src={fold3icon1} alt="star" className="absolute bottom-5 right-0" />
		            </motion.div>
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
			              <ShiningText customStyle="sm:text-[36px] text-[30px] font-medium font-['DM_Serif_Display'] mb-5 max-w-[450px]" textLeft={"Infrastructure "} textRight={"Growth Indicators"} />
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
			                  <Image src={fold5icon1} alt="check" />
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

			{/* CTA Section */}
			<div className="bg-[#937B371A]" ref={ctaRef}>
				<div className="relative max-w-[1300px] mx-auto sm:px-[50px] px-[20px] py-20 text-center">
					<motion.div
						initial="hidden"
						animate={ctaInView ? "visible" : "hidden"}
						variants={staggerContainer}
					>
						<motion.div 
							className="text-[30px] sm:text-[36px] font-['DM_Serif_Display'] text-[#37405E]"
							variants={staggerItem}
						>
							Your Smart Investment Starts Here
						</motion.div>
						<motion.div 
							className="text-[24px] text-[#202428] my-10"
							variants={staggerItem}
						>
							Limited to 73 plots only. 40% already sold to IT professionals.
						</motion.div>
						<motion.div
							variants={staggerItem}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<ShimmerButton id="" className="shadow-2xl w-fit mx-auto" onClick={() => window.centilio_connector_init.submit_call()}>
								<Image src={phone} alt="phone" />
								<span className="ml-3">Book Now</span>
							</ShimmerButton>
						</motion.div>
					</motion.div>
				</div>
			</div>

			{/* Contact Section */}
			<div className="bg-white" ref={contactRef}>
				<div className="relative max-w-[1300px] mx-auto sm:px-[50px] px-[20px] py-20 text-center">
					<motion.div 
						className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
						initial="hidden"
						animate={contactInView ? "visible" : "hidden"}
						variants={staggerContainer}
					>
			          {/* Phone/WhatsApp */}
			          <motion.div 
			            className="flex items-start gap-4 p-4 lg:p-6 rounded-xl cursor-pointer justify-center"
			            variants={staggerItem}
			            whileHover={{ scale: 1.05 }}
			          >
			            <Image
			                src={fold7icon1}
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
			                src={fold7icon2}
			                alt="Location"
			                className="w-8 h-8"
			            />
			            <h3 className="text-[20px] w-fit">
			                +91 7900884488
			            </h3>
			          </motion.div>
			        </motion.div>
				</div>
			</div>
		</>
	)
}