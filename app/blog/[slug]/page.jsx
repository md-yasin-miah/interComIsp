// 'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineClock, HiOutlineUser, HiOutlineCalendar, HiOutlineShare } from 'react-icons/hi'
import { blogPosts } from '@/data/fake' // You'll need to move the blog data to a separate file
import BlogBanner from '@/components/shared/BlogBanner'

const BlogPost = ({ params }) => {
  const post = blogPosts.find(post => post.slug === params.slug)

  if (!post) return <div>Post not found</div>

  return (
    <article>
      {/* Header */}
      <BlogBanner post={post} />
      <div className="py-10">
        <div className="customContainer">
          <div
          >
            {/* Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {/* Add your blog post content here */}
              {/* <p dangerouslySetInnerHTML={{ __html: post.content }} /> */}
              {/* Add more content sections */}
            </div>

            {/* Share Section */}
            <div className="mt-12 flex items-center justify-center gap-4">
              <span className="font-medium">Share this article:</span>
              <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-white transition-all">
                <HiOutlineShare className="w-5 h-5" />
              </button>
              {/* Add more social share buttons */}
            </div>

            {/* Related Posts */}
            <div className="mt-20">
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts
                  .filter(p => p.id !== post.id)
                  .slice(0, 3)
                  .map(relatedPost => (
                    <Link 
                      key={relatedPost.id} 
                      href={`/blog/${relatedPost.slug}`}
                      className="bg-white dark:bg-gray-800 rounded-xl p-4 hover:shadow-lg transition-all"
                    >
                      <h3 className="font-semibold mb-2">{relatedPost.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {relatedPost.excerpt}
                      </p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default BlogPost 