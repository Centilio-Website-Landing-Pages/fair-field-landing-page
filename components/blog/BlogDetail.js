'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { UniversalHeader } from '@/components/shared/header/UniversalHeader';
import UniversalFooter from '@/components/shared/footer/UniversalFooter';

export default function BlogDetail({ slug }) {
  const [blogPost, setBlogPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace with your organization ID from Centilio SEO Bot
  const ORG_ID = '5'; // Update this with your actual org ID

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

  // Fetch single blog post from API
  const fetchBlogPost = async () => {
    try {
      setLoading(true);
      setError(null);
      
      if (!slug) {
        throw new Error('No blog post slug provided');
      }
      
      const response = await fetch(
        `https://seobot.centilio.com/blog?org_id=${ORG_ID}&slug=${slug}`,
        {
          method: 'GET',
        }
      );
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      
      if (data.success && data.data && data.data.length > 0) {
        setBlogPost(data.data[0]);
      } else {
        throw new Error('Blog post not found');
      }
    } catch (err) {
      console.error('Blog Detail API Error:', err);
      setError(`Unable to load blog post. ${err.message.includes('fetch') ? 'Please check your internet connection.' : err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchBlogPost();
    }
  }, [slug]);

  // Create safe image src
  const getSafeImageSrc = (src) => {
    if (!src || src.trim() === '') {
      return '/images/blog page - ff/images/first fold 2 image.jpg';
    }
    return src;
  };

  // Inject custom CSS for blog content
  useEffect(() => {
    if (blogPost && blogPost.style) {
      const styleElement = document.createElement('style');
      styleElement.setAttribute('data-blog-styles', 'true');
      styleElement.innerHTML = `
        ${blogPost.style}
        .blog-content {
          font-family: 'Futura-Medium', sans-serif;
          line-height: 1.8;
          color: #37405E;
        }
        .blog-content h1, .blog-content h2, .blog-content h3, .blog-content h4, .blog-content h5, .blog-content h6 {
          font-family: 'DM Serif Display', serif;
          color: #37405E;
          margin-bottom: 1rem;
          margin-top: 2rem;
        }
        .blog-content h1 { font-size: 2.5rem; }
        .blog-content h2 { font-size: 2rem; color: #D3AC4A; }
        .blog-content h3 { font-size: 1.75rem; }
        .blog-content h4 { font-size: 1.5rem; }
        .blog-content p {
          margin-bottom: 1.5rem;
          font-size: 1rem;
        }
        .blog-content ul, .blog-content ol {
          margin-bottom: 1.5rem;
          padding-left: 2rem;
        }
        .blog-content li {
          margin-bottom: 0.5rem;
        }
        .blog-content a {
          color: #D3AC4A;
          text-decoration: underline;
          transition: color 0.3s ease;
        }
        .blog-content a:hover {
          color: #B8952E;
        }
        .blog-content strong {
          background: linear-gradient(120deg, #D3AC4A 0%, #D3AC4A 100%);
          background-repeat: no-repeat;
          background-size: 100% 0.2em;
          background-position: 0 88%;
          font-weight: 600;
        }
        .blog-content img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 2rem 0;
        }
        .blog-content blockquote {
          border-left: 4px solid #D3AC4A;
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: #666;
        }
        @media (max-width: 768px) {
          .blog-content h1 { font-size: 2rem; }
          .blog-content h2 { font-size: 1.75rem; }
          .blog-content h3 { font-size: 1.5rem; }
          .blog-content p { font-size: 0.95rem; }
        }
      `;
      
      if (document.head) {
        document.head.appendChild(styleElement);
      }
      
      return () => {
        try {
          if (document.head && styleElement && styleElement.parentNode) {
            document.head.removeChild(styleElement);
          }
        } catch (err) {
          // Silently handle cleanup errors
          console.warn('Style element cleanup error:', err);
        }
      };
    }
  }, [blogPost]);

  return (
    <main className="min-h-screen bg-white">
      {/* Header Only */}
      <UniversalHeader transparent={false} showScheduleButton={true} />

      {/* Blog Content Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
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
                <h3 className="text-red-800 font-medium mb-2">Error Loading Blog Post</h3>
                <p className="text-red-600 text-sm mb-4">{error}</p>
                <div className="space-x-4">
                  <button
                    onClick={fetchBlogPost}
                    className="bg-[#D3AC4A] text-white px-6 py-2 rounded-lg hover:bg-[#B8952E] transition-colors"
                    style={{ fontFamily: 'Futura-Medium' }}
                  >
                    Try Again
                  </button>
                  <Link 
                    href="/blog"
                    className="inline-block bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                    style={{ fontFamily: 'Futura-Medium' }}
                  >
                    Back to Blog
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Blog Post Content */}
          {!loading && !error && blogPost && (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Post Meta */}
              <div className="flex flex-wrap items-center justify-between text-sm text-[#D3AC4A] mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center space-x-6 mb-4 sm:mb-0">
                  <div className="flex items-center">
                    <Image
                      src="/images/blog page - ff/icon/second fold/Vector admin.svg"
                      alt="Author icon"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    <span style={{ fontFamily: 'Futura-Medium' }}>
                      {blogPost.Created_User_Name || 'Admin'}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src="/images/blog page - ff/icon/second fold/Vector calender.svg"
                      alt="Date icon"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    <span style={{ fontFamily: 'Futura-Medium' }}>
                      {formatDate(blogPost.Created_Time)}
                    </span>
                  </div>
                </div>
                
                {/* Back to Blog Button */}
                <Link 
                  href="/blog"
                  className="text-[#37405E] hover:text-[#D3AC4A] transition-colors underline"
                  style={{ fontFamily: 'Futura-Medium' }}
                >
                  ← Back to Blog
                </Link>
              </div>

              {/* Post Content */}
              <div 
                className="blog-content prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blogPost.Content || '' }}
              />

              {/* Keywords/Tags */}
              {blogPost.Keywords && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h4 
                    className="text-lg font-medium text-[#37405E] mb-4"
                    style={{ fontFamily: 'DM Serif Display' }}
                  >
                    Tags:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {blogPost.Keywords.split(',').map((keyword, index) => (
                      <span
                        key={index}
                        className="bg-[#F5F2E8] text-[#37405E] px-3 py-1 rounded-full text-sm hover:bg-[#D3AC4A] hover:text-white transition-colors cursor-pointer"
                        style={{ fontFamily: 'Futura-Medium' }}
                      >
                        {keyword.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                <Link 
                  href="/blog"
                  className="inline-block bg-[#D3AC4A] text-white px-8 py-3 rounded-lg hover:bg-[#B8952E] transition-colors"
                  style={{ fontFamily: 'Futura-Medium' }}
                >
                  View More Articles
                </Link>
              </div>
            </motion.article>
          )}
        </div>
      </section>

      {/* Footer */}
      <UniversalFooter />
    </main>
  );
}