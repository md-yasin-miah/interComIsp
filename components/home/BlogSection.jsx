import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import SectionTitle from '@/components/shared/SectionTitle'
import { HiOutlineClock, HiOutlineUser } from 'react-icons/hi'
import MotionDiv from '../ui/motion/motionDiv'

const blogPosts = [
  {
    id: 1,
    title: "10 Tips to Boost Your Wi-Fi Performance",
    excerpt: "Learn how to optimize your home network for better speed and coverage.",
    category: "Tips & Tricks",
    author: "Tech Team",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "/about.webp",
    slug: "10-tips-boost-wifi-performance"
  },
  {
    id: 2,
    title: "How to Choose the Perfect Internet Plan",
    excerpt: "A comprehensive guide to selecting the right internet package for your needs.",
    category: "Guides",
    author: "Network Expert",
    date: "March 12, 2024",
    readTime: "7 min read",
    image: "/about.webp",
    slug: "choose-perfect-internet-plan"
  },
  {
    id: 3,
    title: "Network Upgrade: What's New in Your Area",
    excerpt: "Latest updates on our network infrastructure improvements and coverage expansion.",
    category: "Updates",
    author: "Network Team",
    date: "March 10, 2024",
    readTime: "4 min read",
    image: "/about.webp",
    slug: "network-upgrade-updates"
  }
];

const BlogCard = ({ post }) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300"
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-primary/90 text-white text-sm rounded-full">
              {post.category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <HiOutlineUser className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineClock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </Link>
    </MotionDiv>
  )
}

const BlogSection = () => {
  return (
    <section className="py-20">
      <div className="customContainer">
        <SectionTitle
          title="Latest"
          title2="Articles"
          subTitle="Stay updated with our latest news, tips, and network improvements"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/blog"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg transition-all duration-300"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogSection