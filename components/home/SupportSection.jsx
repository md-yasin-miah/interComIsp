"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { HiOutlineClock, HiOutlineSupport, HiOutlineLightningBolt, HiOutlineCreditCard } from 'react-icons/hi'
import SectionTitle from '../shared/SectionTitle'
import MotionDiv from '../ui/motion/motionDiv'
import { Icon } from '@iconify/react'

const supportFeatures = [
  {
    icon: <Icon icon="mdi:clock" className="w-12 h-12" />,
    title: "24/7 Technical Assistance",
    description: "Round-the-clock expert support for all your internet needs"
  },
  {
    icon: <Icon icon="mdi:support" className="w-12 h-12" />,
    title: "Field Support",
    description: "Dedicated on-site support team available 24/7"
  },
  {
    icon: <Icon icon="mdi:lightning-bolt" className="w-12 h-12" />,
    title: "Battery-Backed Network",
    description: "Reliable connectivity with our battery-backed distribution network"
  },
  {
    icon: <Icon icon="mdi:credit-card" className="w-12 h-12" />,
    title: "Easy Payments",
    description: "Multiple convenient payment methods available"
  }
]

const SupportSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-background3 dark:bg-black">
      <div className="customContainer relative z-10">
        <SectionTitle
          title="Smart Internet"
          title2="Solutions"
          subTitle="For Home & Business"
        />

        {/* Main Content */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-colorParagraph dark:text-gray-300 md:text-lg text-base"
          >
            <p>At Netcom Internet, we recognize the Internet is more than just a service. The Internet has become integral to work and everyday life in this fast-paced world. We bring the highest quality internet services for homes and offices at Netcom Internet.</p>
            <p className="mt-4">We have a responsible, innovative, and reliable reputation within the industry and our customer care.</p>
          </MotionDiv>
        </div>

        {/* Support Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {supportFeatures.map((feature, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-card hover:shadow-cardHover transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-colorParagraph dark:text-gray-400">{feature.description}</p>
              </div>
            </MotionDiv>
          ))}
        </div>

        {/* Bottom Message */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
            Understand that when you select Netcom Internet, you choose internet services that improve your everyday life and advance your venture. 
            <span className="block mt-2 text-primary font-semibold">Stay connected, always.</span>
          </p>
        </MotionDiv>
      </div>
    </section>
  )
}

export default SupportSection