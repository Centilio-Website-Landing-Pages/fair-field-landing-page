'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { UniversalHeader } from '@/components/shared/header/UniversalHeader';
import UniversalFooter from '@/components/shared/footer/UniversalFooter';

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(false);

  // Replace with your organization ID from Centilio SEO Bot
  const ORG_ID = '407'; // Update this with your actual org ID
  const POSTS_PER_PAGE = 6;

  // Date formatting function to handle DD/MM/YYYY format
  const formatDate = (dateString) => {
    try {
      if (!dateString) return 'No date';
      
      // Handle DD/MM/YYYY HH:MM AM/PM format
      const datePart = dateString.split(' ')[0];
      const [day, month, year] = datePart.split('/');
      
      if (!day || !month || !year) return dateString;
      
      const date = new Date(year, month - 1, day);
      
      if (isNaN(date.getTime())) return dateString;
      
      const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      
      return `${parseInt(day)} ${months[parseInt(month) - 1]}, ${year}`;
    } catch (err) {
      return dateString || 'No date';
    }
  };

  // Fetch blog posts from API
  const fetchBlogPosts = async (page = 1) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(
        `https://seobot.centilio.com/blog?org_id=${ORG_ID}&limit=${POSTS_PER_PAGE}&cursor=${page}`,
        {
          method: 'GET',
        }
      );
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      
      if (data.success && data.data) {
        setBlogPosts(data.data);
        setTotalRecords(data.total_records || 0);
        setHasNextPage(data.next_page || false);
      } else {
        throw new Error('No blog posts found or API error');
      }
    } catch (err) {
      console.error('Blog API Error:', err);
      // CORS or network error - show error message
      setError(`Unable to load blog posts. ${err.message.includes('fetch') ? 'Please check your internet connection.' : err.message}`);
      setBlogPosts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogPosts(currentPage);
  }, [currentPage]);

  // Handle pagination
  const handlePageChange = (newPage) => {
    if (newPage > 0 && (hasNextPage || newPage < currentPage)) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Create safe image src
  const getSafeImageSrc = (src) => {
    if (!src || src.trim() === '') {
      return '/images/blog page - ff/images/first fold 2 image.jpg';
    }
    return src;
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Following Completed Projects Layout Structure */}
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

        {/* Blog Title - Centered over building image */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white drop-shadow-2xl px-4"
              style={{ fontFamily: 'DM Serif Display' }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Blog
            </motion.h1>
          </div>
        </div>

        {/* Cream Breadcrumb Bar - With spacing */}
        <div className="absolute bottom-2 sm:bottom-4 left-4 sm:left-4 right-4 sm:right-4 z-20">
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
                {/* <img
                  src="/images/legal & approval page - ff/icon/first fold icon.svg"
                  alt="Arrow"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                /> */}
                <Image
                  src="/images/about us page - ff/icons/first fold icon.svg"
                  alt="Arrow"
                  fill
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  priority
                />                
                <span>Blog</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Second Fold - Blog Posts Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Section Title */}
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-[28px] md:text-[36px] lg:text-[42px] font-normal text-[#37405E] mb-4"
              style={{ fontFamily: 'DM Serif Display' }}
            >
              <span className="text-[#37405E]">Insights, Market Trends</span>
              <span className="text-[#D3AC4A]"> & Home Buying Tips</span>
            </h2>
          </motion.div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#D3AC4A]"></div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-20">
              <div className="bg-red-50 border border-red-200 rounded-lg p-8 max-w-md mx-auto">
                <h3 className="text-red-800 font-medium mb-2">Error Loading Blog Posts</h3>
                <p className="text-red-600 text-sm mb-4">{error}</p>
                <button
                  onClick={() => fetchBlogPosts(currentPage)}
                  className="bg-[#D3AC4A] text-white px-6 py-2 rounded-lg hover:bg-[#B8952E] transition-colors"
                  style={{ fontFamily: 'Futura-Medium' }}
                >
                  Try Again
                </button>
              </div>
            </div>
          )}

          {/* Blog Posts Grid */}
          {!loading && !error && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={post.Id || index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer mb-20"
                  >
                    <Link href={`/blog/details?slug=${post.Slug}`}>
                      <div className="relative">
                        {/* Image Section */}
                        <div className="relative h-[280px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-lg">
                          <Image
                            src={getSafeImageSrc(post.Preview_Url)}
                            alt={post.Title || 'Blog post'}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                              e.target.src = '/images/blog page - ff/images/first fold 2 image.jpg';
                            }}
                          />
                        </div>
                        
                        {/* White Content Section - Overlapping */}
                        <div className="absolute bottom-0 left-4 right-4 bg-white border-3 border-[#D3AC4A4D] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 transform translate-y-1/2 flex flex-col">
                          <div className="flex items-center justify-between text-sm text-[#D3AC4A] mb-4 space-x-6">
                            <div className="flex items-center">
                              <Image
                                src="/images/blog page - ff/icon/second fold/Vector admin.svg"
                                alt="Admin icon"
                                width={16}
                                height={16}
                                className="mr-2"
                              />
                              <span style={{ fontFamily: 'Futura-Medium' }}>
                                {post.Created_User_Name || 'Admin'}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <Image
                                src="/images/blog page - ff/icon/second fold/Vector calender.svg"
                                alt="Calendar icon"
                                width={16}
                                height={16}
                                className="mr-2"
                              />
                              <span style={{ fontFamily: 'Futura-Medium' }}>
                                {formatDate(post.Created_Time)}
                              </span>
                            </div>
                          </div>
                          <h3 
                            className="text-[18px] md:text-[20px] font-normal text-[#37405E] leading-tight md:min-h-[60px] flex items-start mb-4"
                            style={{ fontFamily: 'DM Serif Display' }}
                          >
                            {post.Title || 'Blog Post Title'}
                          </h3>
                          <div className="md:min-h-[48px] mb-4">
                            {(post.Excerpt || post.excerpt) ? (
                              <p className="text-sm text-gray-600 leading-6 overflow-hidden" style={{ 
                                fontFamily: 'Futura-Medium',
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                height: '48px'
                              }}>
                                {post.Excerpt || post.excerpt}
                              </p>
                            ) : (
                              <div className="md:h-[48px]"></div>
                            )}
                          </div>
                          <div className="flex items-center mt-auto">
                            <span 
                              className="text-[#37405E] font-medium text-[14px] hover:text-[#D3AC4A] transition-colors underline text-left"
                              style={{ fontFamily: 'Futura-Medium' }}
                            >
                              Read more
                            </span>
                            <Image
                              src="/images/blog page - ff/icon/cta arrow Vector.svg"
                              alt="Arrow icon"
                              width={16}
                              height={16}
                              className="ml-2 group-hover:translate-x-1 transition-all duration-300 opacity-70 group-hover:opacity-100"
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>

              {/* Pagination */}
              {totalRecords > POSTS_PER_PAGE && (
                <motion.div 
                  className="flex justify-center items-center mt-32 space-x-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  {/* Previous Button */}
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border border-[#D3AC4A] rounded-lg text-[#37405E] hover:bg-[#D3AC4A] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ fontFamily: 'Futura-Medium' }}
                  >
                    Previous
                  </button>
                  
                  {/* Page Numbers */}
                  {(() => {
                    const totalPages = Math.ceil(totalRecords / POSTS_PER_PAGE);
                    const pageNumbers = [];
                    
                    // Show first page
                    if (currentPage > 3) {
                      pageNumbers.push(1);
                      if (currentPage > 4) {
                        pageNumbers.push('...');
                      }
                    }
                    
                    // Show current page and surrounding pages
                    for (let i = Math.max(1, currentPage - 2); i <= Math.min(totalPages, currentPage + 2); i++) {
                      pageNumbers.push(i);
                    }
                    
                    // Show last page
                    if (currentPage < totalPages - 2) {
                      if (currentPage < totalPages - 3) {
                        pageNumbers.push('...');
                      }
                      pageNumbers.push(totalPages);
                    }
                    
                    return pageNumbers.map((page, index) => (
                      page === '...' ? (
                        <span key={`ellipsis-${index}`} className="px-3 py-2 text-[#37405E]" style={{ fontFamily: 'Futura-Medium' }}>
                          ...
                        </span>
                      ) : (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`px-3 py-2 rounded-lg transition-colors ${
                            currentPage === page 
                              ? 'bg-[#D3AC4A] text-white' 
                              : 'border border-[#D3AC4A] text-[#37405E] hover:bg-[#D3AC4A] hover:text-white'
                          }`}
                          style={{ fontFamily: 'Futura-Medium' }}
                        >
                          {page}
                        </button>
                      )
                    ));
                  })()}
                  
                  {/* Next Button */}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={!hasNextPage}
                    className="px-4 py-2 border border-[#D3AC4A] rounded-lg text-[#37405E] hover:bg-[#D3AC4A] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ fontFamily: 'Futura-Medium' }}
                  >
                    Next
                  </button>
                </motion.div>
              )}

              {/* No Posts Message */}
              {blogPosts.length === 0 && (
                <div className="text-center py-20">
                  <h3 
                    className="text-[24px] text-[#37405E] mb-4"
                    style={{ fontFamily: 'DM Serif Display' }}
                  >
                    No Blog Posts Available
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: 'Futura-Medium' }}>
                    Check back later for new content!
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <UniversalFooter />
    </main>
  );
}