"use client"
import React from 'react'
import SectionTitle from '../shared/SectionTitle'
import PricingCard from '../cards/PricingCard'
import LinkButton from '../shared/LinkButton'
import { IoArrowForwardCircleOutline } from "react-icons/io5"
import { motion } from 'framer-motion'

const PricingSection = () => {
  const pricingData = [
    {
      speed: "20",
      price: "840",
      title: "Regular 840",
      type: 'regular',
      features: [
        "20 Mb/s Internet (Shared)",
        "Bufferless Cached Content",
        "Extra Speed on VAS",
        "Public IP (IPv6)"
      ]
    },
    {
      speed: "40",
      price: "1050",
      type: 'regular',
      title: "Regular 1050",
      features: [
        "40 Mb/s Internet (Shared)",
        "Bufferless Cached Content",
        "Extra Speed on VAS",
        "Public IP (IPv6)"
      ]
    },
    {
      speed: "50",
      price: "1260",
      type: 'regular',
      title: "Regular 1260",
      features: [
        "50 Mb/s Internet (Shared)",
        "Bufferless Cached Content",
        "Extra Speed on VAS",
        "Public IP (IPv6)"
      ]
    },
    {
      speed: "50",
      price: "1260",
      type: 'turbo',
      title: "Turbo 1260",
      features: [
        "50 Mb/s Internet (Shared)",
        "Bufferless Cached Content",
        "Extra Speed on VAS",
        "Public IP (IPv6)"
      ]
    },
    {
      speed: "50",
      price: "1260",
      type: 'sme',
      title: "Sme - 1260",
      features: [
        "50 Mb/s Internet (Shared)",
        "Bufferless Cached Content",
        "Extra Speed on VAS",
        "Public IP (IPv6)"
      ]
    }
  ]

  return (
    <section className='py-16'>
      <div className="customContainer">
        <div className='flex items-center justify-between'>
          <SectionTitle
            title='Flexible pricing'
            subTitle='You check our reasonable and flexible pricing below'
          />
          <LinkButton href='/' iconPosition='end' icon={<IoArrowForwardCircleOutline className='font-semibold text-xl' />}>
            VIEW ALL PACKAGES
          </LinkButton>
        </div>
        <div className='grid grid-cols-1 gap-6 mt-10'>
          {pricingData.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
        {/* check our other packages */}
        <div className='flex flex-col md:flex-row items-center py-12 px-8 md:px-20 gap-10 shadow-card2Hover rounded-3xl mt-16 bg-gradient-to-r from-background2/50 to-background3/50 hover:shadow-xl transition-all duration-300'>
          <div className='text-center md:text-left'>
            <h2 className='text-3xl md:text-[40px] mb-4 font-medium'>Check our other <span className='text-primary font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-pulse'>Packages</span></h2>
            <p className='text-base font-normal text-colorParagraph'>We have more exciting Shared & Turbo packages. To check or buy, please visit our pricing page.</p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <LinkButton
              iconPosition='end'
              icon={<IoArrowForwardCircleOutline className='font-semibold text-xl' />}
              href='/'
              className='!py-6 !px-12 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300'
              animation='stepUp'
            >
              <motion.span
                className='whitespace-nowrap'
                whileHover={{ x: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                All Packages
              </motion.span>
            </LinkButton>
          </motion.div>
        </div>
      </div>
    </section>

  )
}

export default PricingSection 