"use client"
import React from 'react'
import SectionTitle from '@/components/shared/SectionTitle'
import Button from '../shared/Button'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { motion } from 'framer-motion'

const statsData = [
  {
    number: '400,000+',
    label: 'Families Served',
    color: 'text-primary'
  },
  {
    number: '70%',
    label: 'Bangladesh Covered',
    color: 'text-blue-600'
  },
  {
    number: '68,000 Km',
    label: 'Fiber Laid',
    color: 'text-green-600'
  }
]

const AboutUsSection = () => {
  return (
    <div className='customContainer pb-10 overflow-hidden'>
      <SectionTitle
        title='Exciting'
        title2="features"
        subTitle='Join now and enjoy the exciting features from NetCom online'
      />
      <div className="relative mt-10">
        <div className='h-full w-7/12'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='flex flex-col gap-5'
          >
            <p className='text-lg text-colorParagraph font-medium leading-8 mb-6'>
              NetCom online is a home and corporate broadband internet service provider that has been operating for over 12 years. We have gained excellent reputation in these years among clients by providing uncompromising quality and committed service.
            </p>
            <Button className='uppercase w-fit' animation='stepUp'>more about us</Button>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12'>
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='bg-white p-6 rounded-xl shadow-card hover:shadow-card2 transition-all duration-300'
              >
                <h3 className={`text-xl font-bold mb-2 ${stat.color}`}>
                  {stat.number}
                </h3>
                <p className='text-colorParagraph font-medium text-sm'>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className='absolute top-1/2 -right-[120px] -translate-y-1/2 w-3/5'>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <DotLottieReact
              src={"/lottie/about-us.lottie"}
              loop
              autoplay
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsSection