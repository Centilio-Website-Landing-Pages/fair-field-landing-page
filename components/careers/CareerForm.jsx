'use client'
import React, { useState } from 'react';

const CareerForm = () => {
  const [formData, setFormData] = useState({
    resume: null,
    fullName: '',
    email: '',
    phone: '',
    jobRole: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const jobRoles = [
    { id: 1, name: 'Software Engineer' },
    { id: 2, name: 'Frontend Developer' },
    { id: 3, name: 'Backend Developer' },
    { id: 4, name: 'Full Stack Developer' },
    { id: 5, name: 'UI/UX Designer' },
    { id: 6, name: 'Product Manager' },
    { id: 7, name: 'Sales Executive' },
    { id: 8, name: 'Marketing Specialist' }
  ];

  // Functions for modal control
  const closeThankYouModal = () => {
    // document.getElementById("thankYouModal").classList.add("hidden");
    // document.getElementById("modalOverlay").classList.add("hidden");
    console.log("close thank you model")
  };

  const openThankYouModal = () => {
    // document.getElementById("thankYouModal").classList.remove("hidden");
    // document.getElementById("modalOverlay").classList.remove("hidden");
    console.log("open thank you model")
    // Auto-close after 2 seconds
    setTimeout(() => {
      closeThankYouModal();
    }, 2000);
  };



  const validateForm = () => {
    const newErrors = {};

    // Resume validation
    if (!formData.resume) {
      newErrors.resume = 'Resume/CV is required';
    } else {
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(formData.resume.type)) {
        newErrors.resume = 'Please upload a PDF or Word document';
      } else if (formData.resume.size > 5 * 1024 * 1024) { // 5MB limit
        newErrors.resume = 'File size must be less than 5MB';
      }
    }

    // Full name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Job role validation
    if (!formData.jobRole) {
      newErrors.jobRole = 'Job role is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({ ...prev, resume: file }));
    if (errors.resume) {
      setErrors(prev => ({ ...prev, resume: '' }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      // Clear form data on successful submission
      setFormData({
        resume: null,
        fullName: '',
        email: '',
        phone: '',
        jobRole: ''
      });
      
      // Reset file input
      const fileInput = document.getElementById('resume-upload');
      if (fileInput) fileInput.value = '';
      
      // Show success modal
      openThankYouModal();
      
      setIsLoading(false);
    }, 1500);
  };

  return (
    <>
      {/* Modal Overlay */}
      <div id="modalOverlay" className="w-full bg-[#000000ab] fixed top-0 left-0 h-full z-[5] hidden">
        <div id="thankYouModal" className="w-full h-full bg-[#7f808080] fixed z-[6] text-center hidden">
          <div
            className="text-[#37405E] fixed bg-[#c2d9ff] top-1/2 left-1/2 py-[30px] px-[10px] sm:w-[400px] w-[90%] rounded-[10px] z-[5] leading-[35px] border border-[#37405E]"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <div className="bg-[#37405E] w-max px-[15px] py-[18px] rounded-full mx-auto">
              <svg width="30" height="24" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.01587 1.77777L3.65079 6.22222L1.66667 4.20201"
                  stroke="#FFFFFF"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-[30px] font-semibold my-[20px]">Thank You!</div>
            <div>We&apos;ll reach you out soon!</div>
            <div
              className="bg-[#dc3737] text-white cursor-pointer rounded-[5px] my-[20px] w-max mx-auto px-[20px] font-medium"
              onClick={() => closeThankYouModal()}
            >
              Close
            </div>
          </div>
        </div>
      </div>

      {/* Main Form */}
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow-lg rounded-md overflow-hidden border border-gray-100">
            <div className="px-6 py-8 sm:px-8 lg:px-12">
              <div className="text-center mb-8">
                <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 lg:mb-8 font-normal text-[#37405E] max-lg:text-center " style={{ fontFamily: 'DM Serif Display' }}>Apply for this Job</h1>
              </div>

              <div className="space-y-6 max-w-2xl mx-auto">
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900">Submit your application</h2>

                  {/* Job Role Dropdown */}
                  <div>
                    <label htmlFor="jobRole" className="block text-sm font-medium text-gray-700 mb-2">
                      Job role
                    </label>
                    <div className="relative">
                      <select
                        id="jobRole"
                        name="jobRole"
                        value={formData.jobRole}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg transition-colors bg-white appearance-none ${
                          errors.jobRole ? 'border-red-300' : 'border-gray-300'
                        }`}
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                          backgroundPosition: 'right 0.5rem center',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: '1.5em 1.5em',
                          paddingRight: '2.5rem',
                          margin: '0',
                          outline: 'none',
                          border: errors.jobRole ? '1px solid #fca5a5' : '1px solid #d1d5db'
                        }}
                      >
                        <option value="">Select a job role</option>
                        {jobRoles.map((role) => (
                          <option key={role.id || role.name} value={role.name}>
                            {role.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.jobRole && (
                      <p className="mt-1 text-sm text-red-600">{errors.jobRole}</p>
                    )}
                  </div>

                  {/* Resume/CV Upload */}
                  <div>
                    <label htmlFor="resume-upload" className="block text-sm font-medium text-gray-700 mb-2">
                      Resume/CV
                    </label>
                    <div className="relative">
                      <input
                        id="resume-upload"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="resume-upload"
                        className={`block w-full p-4 border-2 border-dashed rounded-lg cursor-pointer transition-colors hover:border-blue-400 hover:bg-blue-50 ${
                          errors.resume ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                      >
                        <div className="text-center">
                          <svg className="mx-auto h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                          </svg>
                          <p className="mt-2 text-sm text-gray-600">
                            {formData.resume ? (
                              <span className="font-medium text-blue-600">{formData.resume.name}</span>
                            ) : (
                              <>
                                <span className="font-medium" style={{ color: '#ff5a3c' }}>Choose File</span>
                                <span className="text-gray-500"> or drag and drop</span>
                              </>
                            )}
                          </p>
                          <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 5MB</p>
                        </div>
                      </label>
                    </div>
                    {errors.resume && (
                      <p className="mt-1 text-sm text-red-600">{errors.resume}</p>
                    )}
                  </div>

                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Jacob Williams"
                      className={`w-full px-4 py-3 border rounded-lg transition-colors ${
                        errors.fullName ? 'border-red-300' : 'border-gray-300'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="example@site.com"
                      className={`w-full px-4 py-3 border rounded-lg transition-colors ${
                        errors.email ? 'border-red-300' : 'border-gray-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+x(xxx)xxx-xx-xx"
                      className={`w-full px-4 py-3 border rounded-lg transition-colors ${
                        errors.phone ? 'border-red-300' : 'border-gray-300'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="bg-[#D3AC4A] text-[#37405E] px-6 py-3 rounded-lg font-bold text-[16px] hover:bg-[#C19B42] transition-colors flex items-center justify-center space-x-2 w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#D3AC4A]"
                    style={{ fontFamily: 'Futura-Heavy' }}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-[#37405E]" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Application</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerForm;