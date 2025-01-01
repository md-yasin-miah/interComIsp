"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import offerImage from '../../public/offer-card.webp'
import { motion } from 'framer-motion'
import Button from '../shared/Button'

const OfferCard = () => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      className='w-full max-sm:h-fit md:aspect-[2/3] bg-white rounded-[20px] overflow-hidden cursor-pointer 
        shadow-card dark:bg-black dark:border-white/[0.2] border border-transparent'
    >
      <div className='relative h-full'>
        <motion.div
          initial={{ borderRadius: "100% 0% 100% 0% / 0% 50% 50% 100%" }}
          whileHover={{
            borderRadius: "0",
            transition: { duration: 0.3 }
          }}
          className='h-[200px] w-full flex items-center justify-center overflow-hidden'
        >
          {/* Centered image */}
          <div
            className='relative w-full h-full'
          >
            <Image
              src={offerImage}
              alt='offer'
              fill
              className='object-cover'
            />
          </div>
        </motion.div>

        {/* Content area */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className='flex flex-col items-center px-5 max-sm:px-5 max-sm:py-5'
        >
          <motion.h3
            whileHover={{ scale: 1.05 }}
            className="text-center uppercase text-base font-bold mt-2.5 mb-5"
          >
            TITLE
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="text-gray-600 dark:text-gray-300 text-sm"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </motion.p>
          {/* learn more button */}
          <Button href="/" className='mt-5'>
            Learn More
          </Button>
        </motion.div>
      </div>
    </motion.article>
  )
}

export default OfferCard