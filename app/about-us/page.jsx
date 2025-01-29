"use client"
import React from 'react'
import Image from 'next/image'
import Button from '@/components/shared/Button'
import SectionTitle from '@/components/shared/SectionTitle'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import MotionDiv from '@/components/ui/motion/motionDiv'
import PageBanner from '@/components/shared/PageBanner'

const AboutUsPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <PageBanner
        pageName='about-us'
      />

      {/* Vision Section */}
      <section className='md:py-20 py-10'>
        <div className='customContainer'>
          <div className="mt-10 flex flex-col md:flex-row gap-20 items-center">
            {/* Left Content */}
            <div className='h-full md:w-3/5 w-full'>
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='flex flex-col gap-5'
              >
                <SectionTitle
                  title="Our Vision"
                  subTitle="Leading the digital transformation with reliable connectivity"
                  className="!items-start"
                />
                <div className='md:text-lg text-sm text-colorParagraph font-medium md:leading-8 leading-7 mb-6'>
                  <p>NetCom online is dedicated to revolutionizing internet connectivity in Bangladesh. With over 12 years of experience, we've built a reputation for excellence through our commitment to quality and customer satisfaction.</p>
                  <p className="mt-4">Our state-of-the-art infrastructure and dedicated team ensure that we deliver not just internet services, but a gateway to the digital future.</p>
                </div>

                {/* Stats Grid */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
                  <StatCard number="12+" label="Years Experience" />
                  <StatCard number="50k+" label="Happy Customers" />
                  <StatCard number="24/7" label="Customer Support" />
                </div>
              </MotionDiv>
            </div>

            {/* Right Animation */}
            <div className='h-full md:w-2/5 w-full'>
              <MotionDiv
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <DotLottieReact
                  src="/lottie/vision.lottie"
                  loop
                  autoplay
                />
              </MotionDiv>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="customContainer">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <SectionTitle
                title="Enterprise Solutions"
                subTitle="Empowering businesses with robust connectivity solutions"
                className="!items-start"
              />

              {/* Features List */}
              <div className="space-y-4 mt-8">
                <FeatureItem>Complete Suite of Services</FeatureItem>
                <FeatureItem>Reliable, secure, cost-effective</FeatureItem>
                <FeatureItem>Widest Reach: Connect Anywhere, Anytime</FeatureItem>
              </div>

              <Button
                href="/contact"
                className="mt-8"
                animation="stepUp"
              >
                Explore More
              </Button>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden h-[400px]">
                <Image
                  src="/enterprice_solution.jpeg"
                  alt="Enterprise Solutions"
                  fill
                  className="object-cover"
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>

            </div>
            {/* Stats Cards */}
          </div>
          <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            <StatCard number="99.9%" label="Uptime" />
            <StatCard number="24/7" label="Support" />
            <StatCard number="24/7" label="Support" />
            <StatCard number="100+" label="Enterprise Clients" />
          </div>
        </div>
      </section>
    </main>
  )
}

const FeatureItem = ({ children }) => (
  <div className="flex items-center gap-3">
    <div className="w-6 h-6 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
      <div className="w-2 h-2 rounded-full bg-primary" />
    </div>
    <span className="text-gray-700 dark:text-gray-300">{children}</span>
  </div>
)

const StatCard = ({ number, label, className = "" }) => (
  <div className={`bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg ${className}`}>
    <div className="text-xl font-bold text-primary">{number}</div>
    <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
  </div>
)

export default AboutUsPage