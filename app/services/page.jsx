"use client"
import SectionTitle from '@/components/shared/SectionTitle'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { GridBackground } from '@/components/ui/grid-background'
import image from '../../public/Home-BroadBand-Internet-scaled.webp'

const services = [
  {
    title: "Home Broadband Internet",
    description: "We are one of the most reliable broadband internet",
    link: "/services/home-internet",
    image: image
  },
  {
    title: "Corporate Broadband Internet",
    description: "Corporate and SME customers dedicated internet connections to ensure network stability.",
    link: "/services/corporate-internet",
    image: image
  },
  {
    title: "Complete Network Solutions",
    description: "Our network engineers work with our clients to provide the most efficient network solutions possible.",
    link: "/services/network-solutions",
    image: image
  },
  {
    title: "Home Broadband Internet",
    description: "We are one of the most reliable broadband internet and network for both gamers and regular users.",
    link: "/services/home-internet",
    image: image
  },
  {
    title: "Corporate Broadband Internet",
    description: "Corporate and SME customers dedicated internet connections to ensure network stability.",
    link: "/services/corporate-internet",
    image: image
  },
  {
    title: "Complete Network Solutions",
    description: "Our network engineers work with our clients to provide the most efficient network solutions possible.",
    link: "/services/network-solutions",
    image: image
  }
]

const Services = () => {
  return (
    <section className='relative py-10 overflow-hidden'>
      <GridBackground animationDot={false}/>
      <div className="relative z-10">
        <SectionTitle
          title="Our"
          title2="services"
          subTitle="Take a look at the services that we provide"
        />

        <div className="customContainer mt-10">
          <HoverEffect effectBGClassName="bg-gradient-to-t from-primary to-secondary" items={services.map(service => ({
            content: (
              <div className="flex overflow-hidden flex-col items-center bg-gray-100 dark:bg-gray-400 rounded-[18px] h-full">
                <motion.div
                  className="relative w-full aspect-[4/3]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className='p-5 h-full flex flex-col justify-between'>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.h3 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className='text-lg font-semibold mb-2'
                    >
                      {service.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className='font-normal ellipsis-3'
                    >
                      {service.description}
                    </motion.p>
                  </motion.div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg w-fit"
                  >
                    Get a quote
                  </motion.button>
                </div>
              </div>
            )
          }))} />
        </div>
      </div>
    </section>
  )
}

export default Services