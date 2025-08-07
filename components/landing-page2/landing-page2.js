'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image'

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

export default function LandingPage2() {

	const [formData, setFormData] = useState({
	    fullName: '',
	    email: '',
	    phoneNumber: ''
	});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

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
			<div className="bg-[#937B371A]">
				<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px] py-20">
					<div className="grid lg:grid-cols-2 gap-8 items-center">
			          {/* Left Content */}
			          <div className="space-y-8">
			            <div className="space-y-6">
			              <ShiningText customStyle="sm:text-[40px] text-[30px] font-medium font-['DM_Serif_Display']" textLeft={"See Your ₹18.5L "} textRight={"Become ₹25L by 2028"} />
			              <p className="text-[#000000] md:text-[18px] leading-relaxed">
			              	Imagine checking your investment portfolio in 3 years and seeing a 40% appreciation. While others chase volatile stocks or settle for 6% FDs, your land investment in Coimbatore's fastest-growing corridor delivers consistent, tangible returns.
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
				<div className="max-w-[800px] mx-auto sm:px-[50px] px-[20px] py-20 text-center">
					<ShiningText customStyle="sm:text-[40px] text-[30px] font-medium font-['DM_Serif_Display'] max-w-[550px] mx-auto" textLeft={"Infrastructure-Backed Appreciation "} textRight={"You Can Bank On"} />
					<div className="mt-7 text-[18px] font-['Futura-Medium'] leading-[27px]">
						Anicham & Magilam isn't just another project - it's a calculated investment opportunity in Nanjundapuram's transformation zone.
					</div>
				</div>
			</div>
			<div className="bg-[#937B371A]">
				<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px] py-20 text-center">
					<ShiningText customStyle="sm:text-[40px] text-[30px] font-medium font-['DM_Serif_Display'] mx-auto" textLeft={"Historical Area "} textRight={"Performance"} />
			        {/* Timeline Container */}
			        <div className="relative mt-10">
			          {/* Desktop Timeline - Horizontal */}
			          <div className="hidden md:block">
			            {/* Timeline Items */}
			            <div className="flex justify-between items-start relative z-10 mx-auto w-fit">
			              {performanceData.map((item, index) => (
			              	<div key={index} className="flex items-center w-full">
				                <div className="flex flex-col items-center">
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
				                </div>
				                { (index != 3) &&
					                <div className="border-t-[1px] border-t-black border-dashed md:min-w-[80px] lg:min-w-[150px] mt-[-80px]">
					                </div>
					            }
			                </div>
			              ))}
			            </div>
			          </div>

			          {/* Mobile Timeline - Vertical */}
			          <div className="md:hidden">
			            <div className="relative">
			              {/* Vertical Timeline Line */}
			              <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-gray-400 z-0"></div>
			              
			              {/* Timeline Items */}
			              <div className="space-y-12">
			                {performanceData.map((item, index) => (
			                  <div key={index} className="flex items-start relative z-10">
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
			                  </div>
			                ))}
			              </div>
			            </div>
			          </div>
			        </div>
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
			            <ShiningText customStyle="sm:text-[36px] text-[30px] font-medium font-['DM_Serif_Display'] mb-5 max-w-[450px]" textLeft={"Government-Confirmed "} textRight={"Growth Catalysts"} />
			            {/* Indicators List */}
			            <div className="space-y-6">
			              {indicators.map((indicator, index) => (
			                <div 
			                  key={index}
			                  className="flex items-start gap-4"
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
			                </div>
			              ))}
			            </div>
			          </div>
			        </div>
				</div>
			</div>
			<div className="bg-[#937B371A]">
				<div className="relative max-w-[1300px] mx-auto sm:px-[50px] px-[20px] py-20">
					<ShiningText customStyle="sm:text-[36px] text-[30px] font-medium font-['DM_Serif_Display'] text-center" textLeft={"Investment "} textRight={"Intelligence"} />
					{/* Intelligence Items */}
			        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-6 lg:gap-4 mt-10">
			          {intelligenceData.map((item, index) => (
			            <div key={index} className="flex flex-col items-center text-center">
			              {/* Icon Circle */}
			              <Image src={item.icon} alt={item.title} />
			              {/* Title Text */}
			              <p className="font-medium text-[18px] leading-relaxed max-w-xs mt-6">
			                {item.title}
			              </p>
			            </div>
			          ))}
			        </div>
				</div>
			</div>
			<div className="bg-white">
				<div className="relative max-w-[700px] mx-auto sm:px-[50px] px-[20px] py-20">
					<ShiningText customStyle="sm:text-[36px] text-[30px] font-medium font-['DM_Serif_Display'] text-center" textLeft={"Investor "} textRight={"Testimonials"} />
		            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 text-center w-fit mx-auto mt-15">
		              {testimonialsData.map((testimonial, index) => (
		                <div 
		                  key={index}
		                  className="max-w-[282px] bg-white rounded-sm p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative border border-[#7B7B7B33]"
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
		            <Image src={fold6icon1} alt="star" className="absolute top-10 left-0" />
		            <Image src={fold6icon1} alt="star" className="absolute bottom-5 right-0" />
				</div>
			</div>
			<div className="bg-[#37405E]">
				<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[10px] py-20">
					<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
			          {/* Left Content */}
			          <div className="space-y-8">
			            {/* Heading */}
			            <div className="space-y-2">
			            	<div className="font-semibold bg-linear-to-r from-[#D3AC4A] from-[30%] to-[#FFFFFF] to-[70%] bg-clip-text text-[36px] font-['DM_Serif_Display'] text-transparent ...">
			            		Lock Today's Price Before Infrastructure Completion
							</div>
			            </div>

			            {/* Subheading */}
			            <p className="text-xl sm:text-2xl font-medium text-gray-800 text-white">
			              Investment Desk Analysis Available
			            </p>

			            {/* Features List */}
			            <div className="space-y-4 pl-10">
			                {features.map((feature, index) => (
			                  <div key={index} className="flex items-center gap-4">
			                    {/* Check Icon */}
			                    <Image src={fold7icon1} alt="check" />
			                    
			                    {/* Feature Text */}
			                    <span className="text-white font-['Futura-Medium']">
			                      {feature}
			                    </span>
			                  </div>
			                ))}
			            </div>

			            {/* CTA Buttons */}
			            <div className="flex flex-col sm:flex-row gap-5 pt-4">
			            	<button className={`cursor-pointer bg-[#D3AC4A] hover:bg-[#d7af13] transition-colors px-5 text-lg text-white py-3 rounded-[5] flex gap-[10px] cursor-pointer`}>
								<span className="text-[18px] font-semibold mx-auto">BOOK SITE VISIT</span>
							</button>
							<button className={`cursor-pointer bg-[#D3AC4A] hover:bg-[#d7af13] transition-colors px-5 text-lg text-white py-3 rounded-[5] flex gap-[10px] cursor-pointer`}>
								<span className="text-[18px] font-semibold mx-auto">DOWNLOAD INVESTMENT REPORT</span>
							</button>
			            </div>
			          </div>

			          {/* Right Image */}
			          <Image
		                src={fold7image1}
		                alt="Aerial view of Eswara Nagar development showing plots and construction"
		              />
			        </div>
				</div>
			</div>
			<div className="bg-white">
				<div className="relative max-w-[1300px] mx-auto sm:px-[50px] px-[20px] py-20 text-center">
					<div className="font-['Futura-Medium'] text-[24px] sm:text-[32px] mb-5">
						Only 33 plots remaining. Price revision expected post-metro announcement
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
			          {/* Phone/WhatsApp */}
			          <div className="flex items-start gap-4 p-4 lg:p-6 rounded-xl cursor-pointer justify-center">
			            <Image
			                src={fold9icon1}
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
			                src={fold9icon2}
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