'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image'

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

export default function LandingPage1() {

	const [formData, setFormData] = useState({
	    fullName: '',
	    email: '',
	    phoneNumber: ''
	});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

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
	      await new Promise(resolve => setTimeout(resolve, 1000));
	      
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
			<div className="bg-[#937B371A]">
				<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px] py-20">
					<div className="grid lg:grid-cols-2 gap-8 items-center">
			          {/* Left Content */}
			          <div className="space-y-8">
			            <div className="space-y-6">
			              <ShiningText customStyle="sm:text-[40px] text-[30px] font-medium font-['DM_Serif_Display']" textLeft={"Still Losing 3 Hours Daily "} textRight={"to Coimbatore Traffic?"} />
			              <div className="text-[#D3AC4A] font-medium text-[24px] font-[Futura-Medium]">
			              	Your code runs efficiently. Why shouldn&apos;t your life?
			              </div>
			              <p className="text-[#000000] md:text-[18px] leading-relaxed">
			                Anicham & Magilam brings you closer to work, family, and dreams. Just 5km from major IT parks, this RERA-approved community of only 73 exclusive plots offers what every tech professional seeks - worklife balance in a growing investment
			              </p>
			            </div>

			            {/* Contact Form */}
			            <div className="max-w-md font-['Futura-Medium']">
			              <form onSubmit={handleSubmit} className="space-y-6">
			                {/* Full Name Field */}
			                <div>
			                  <input
			                    type="text"
			                    name="fullName"
			                    placeholder="Full name"
			                    value={formData.fullName}
			                    onChange={handleInputChange}
			                    className={`bg-white w-full px-4 py-3 border rounded-sm text-gray-900 placeholder-gray-500 ${
			                      errors.fullName 
			                        ? 'border-red-500 focus:ring-red-200' 
			                        : 'border-gray-300 focus:ring-green-200 focus:border-green-500'
			                    }`}
			                  />
			                  {errors.fullName && (
			                    <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
			                  )}
			                </div>

			                {/* Email Field */}
			                <div>
			                  <input
			                    type="email"
			                    name="email"
			                    placeholder="Email"
			                    value={formData.email}
			                    onChange={handleInputChange}
			                    className={`bg-white w-full px-4 py-3 border rounded-sm text-gray-900 placeholder-gray-500 ${
			                      errors.email 
			                        ? 'border-red-500 focus:ring-red-200' 
			                        : 'border-gray-300'
			                    }`}
			                  />
			                  {errors.email && (
			                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
			                  )}
			                </div>

			                {/* Phone Number Field */}
			                <div>
			                  <input
			                    type="tel"
			                    name="phoneNumber"
			                    placeholder="Phone Number"
			                    value={formData.phoneNumber}
			                    onChange={handleInputChange}
			                    className={`bg-white w-full px-4 py-3 border rounded-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 transition-colors ${
			                      errors.phoneNumber 
			                        ? 'border-red-500 focus:ring-red-200' 
			                        : 'border-gray-300 focus:ring-green-200 focus:border-green-500'
			                    }`}
			                  />
			                  {errors.phoneNumber && (
			                    <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>
			                  )}
			                </div>

			                {/* Submit Button */}
			                <div id="bookVisitNowButton" className="book-visit-button">
				                <ShimmerButton id="" className="shadow-2xl w-full">
				                  {isSubmitting ? 'Booking...' : 'Book Your Visit Today'}
				                </ShimmerButton>
				            </div>
			              </form>
			            </div>
			          </div>

			          {/* Right Image */}
			          <div className="relative">
			              <Image
			                src={fold1image1}
			                alt="Happy school children in yellow uniforms walking together with backpacks"
			                className="shadow-lg"
			              />
			          </div>
			        </div>
				</div>
			</div>
			<div className="bg-white">
				<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px] py-20">
					<ShiningText customStyle="sm:text-[36px] text-[30px] font-medium font-['DM_Serif_Display'] text-center mb-10" textLeft={"The Edge "} textRight={"You Deserve"} />
			        {/* Features Grid */}
			        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			          {features.map((feature, index) => (
			            <div 
			              key={index}
			              className="relative border border-[#7B7B7B33] rounded-sm p-8 hover:shadow-lg transition-shadow duration-300 min-h-[220px]"
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
			            </div>
			          ))}
			        </div>
			    </div>
			</div>
			<div className="bg-[#37405E]">
				<div className="relative max-w-[700px] mx-auto sm:px-[50px] px-[20px] py-20">
					<div className="font-semibold bg-linear-to-r from-[#D3AC4A] from-[30%] to-[#FFFFFF] to-[70%] bg-clip-text text-[36px] font-['DM_Serif_Display'] text-center text-transparent ...">
						What Tech Leaders Say
					</div>
		            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 text-center w-fit mx-auto mt-15">
		              {testimonialsData.map((testimonial, index) => (
		                <div 
		                  key={index}
		                  className="max-w-[282px] bg-white rounded-sm p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
		                >
		                  {/* Quote Icon */}
		                  <div className="mx-auto">
		                      <span className="text-[100px] font-['Raleway'] text-[#D3AC4A] font-bold">“</span>
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
		                </div>
		              ))}
		            </div>
		            <Image src={fold3icon1} alt="star" className="absolute top-10 left-0" />
		            <Image src={fold3icon1} alt="star" className="absolute bottom-5 right-0" />
				</div>
			</div>
			<div className="bg-white">
				<div className="relative max-w-[1300px] mx-auto sm:px-[50px] px-[20px] py-20">
					<div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-center">
			          {/* Image Section */}
			            <div className="relative">
			              <Image
			                src={fold4image1}
			                alt="Infrastructure development site"
			              />
			            </div>

			          {/* Content Section */}
			          <div className="w-fit">
			            <ShiningText customStyle="sm:text-[36px] text-[30px] font-medium font-['DM_Serif_Display'] mb-5 max-w-[450px]" textLeft={"Infrastructure "} textRight={"Growth Indicators"} />
			            {/* Indicators List */}
			            <div className="space-y-6">
			              {indicators.map((indicator, index) => (
			                <div 
			                  key={index}
			                  className="flex items-start gap-4"
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
			                </div>
			              ))}
			            </div>
			          </div>
			        </div>
				</div>
			</div>
			<div className="bg-[#937B371A]">
				<div className="relative max-w-[1300px] mx-auto sm:px-[50px] px-[20px] py-20 text-center">
					<div className="text-[30px] sm:text-[36px] font-['DM_Serif_Display'] text-[#37405E]">
						Your Smart Investment Starts Here
					</div>
					<div className="text-[24px] text-[#202428] my-10">
						Limited to 73 plots only. 40% already sold to IT professionals.
					</div>
					<ShimmerButton id="" className="shadow-2xl w-fit mx-auto">
						<Image src={phone} alt="phone" />
						<span className="ml-3">Book Now</span>
					</ShimmerButton>
				</div>
			</div>
			<div className="bg-white">
				<div className="relative max-w-[1300px] mx-auto sm:px-[50px] px-[20px] py-20 text-center">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
			          {/* Phone/WhatsApp */}
			          <div className="flex items-start gap-4 p-4 lg:p-6 rounded-xl cursor-pointer justify-center">
			            <Image
			                src={fold7icon1}
			                alt="WhatsApp"
			                className="w-8 h-8"
			            />
			            <h3 className="text-[20px] w-fit">
			                +91 7900882288
			            </h3>
			          </div>

			          {/* Location */}
			          <div className="flex items-start gap-4 p-4 lg:p-6 rounded-xl justify-center">
			            <Image
			                src={fold7icon2}
			                alt="Location"
			                className="w-8 h-8"
			            />
			            <h3 className="text-[20px] w-fit">
			                +91 7900884488
			            </h3>
			          </div>
			        </div>
				</div>
			</div>
		</>
	)
}