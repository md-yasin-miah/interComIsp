"use client"
import React from 'react'
import Image from 'next/image'
import { HiOutlineCalendar, HiOutlineClock, HiOutlineUser } from 'react-icons/hi'
import { motion } from 'framer-motion'

const BlogBanner = ({ post }) => {
  return (
    <section className="relative min-h-[450px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src={post?.image} 
          alt={post?.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative customContainer mx-auto lg:pb-32 md:pb-20 pb-16 lg:pt-52 md:pt-52 pt-52 -mt-24 sm:py-32 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        //   className="max-w-3xl"
        >
          {/* Category Tag */}
          <span className="px-4 py-2 rounded-full bg-primary/90 text-white text-sm mb-6 inline-block">
            {post?.category}
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {post?.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-200">
            <div className="flex items-center gap-2">
              <HiOutlineUser className="w-5 h-5" />
              <span>{post?.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineClock className="w-5 h-5" />
              <span>{post?.readTime}</span>
            </div>
            <span className='flex items-center gap-2'>
                <HiOutlineCalendar className="w-5 h-5" />
                <span>{post?.date}</span>
            </span>
          </div>

          {/* Excerpt */}
          <p className="text-gray-200 mt-6 text-lg">
            {post?.excerpt}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogBanner