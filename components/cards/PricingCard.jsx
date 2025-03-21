"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Button from '../shared/Button'
import Link from 'next/link'
import { PATH } from '@/helper/pathConfig'

const PricingCard = ({ plan }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full ${plan?.featured ? 'md:-mt-4' : 'md:-mt-0'}`}
    >
      <div
        className={`h-full bg-white rounded-[20px] shadow-card p-8 relative flex flex-col ${plan?.featured
          ? 'bg-gradient-to-t from-primary to-secondary'
          : 'dark:bg-black dark:border-white/[0.2] bg-white border border-transparent'
          }`}
      >
        <div className="mb-8">
          <h3 className={`text-2xl font-bold mb-2 dark:text-white ${plan?.featured ? 'text-white' : 'text-gray-800'
            } font-rajdhani capitalize`}>
            {plan?.title}
          </h3>

          <div className={`flex items-center gap-2 mb-4`}>
            <span className={`text-5xl font-bold ${plan?.featured ? 'text-white' : 'text-primary'
              }`}>
              {plan?.speed_per_unit}
            </span>
            <span className={`text-xl ${plan?.featured ? 'text-white/80' : 'text-gray-600 dark:text-white/80'
              }`}>
              Mbps
            </span>
          </div>

          <p className={`text-sm ${plan?.featured ? 'text-white/80' : 'text-gray-600 dark:text-white/80'
            }`}>
            {plan?.sub_title}
          </p>
        </div>

        <div className='flex-1 flex flex-col justify-between'>
          <div className="space-y-4">
            {plan?.features?.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between"
              >
                <span className={`${plan?.featured ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'
                  } capitalize`}>
                  {feature.name}
                </span>
                <span className={`font-medium ${plan?.featured ? 'text-white' : 'text-gray-800 dark:text-white'
                  } capitalize`}>
                  {feature.value}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-6">
            <div className="space-y-2">
              <div className={`text-2xl font-bold ${plan?.featured ? 'text-white' : 'text-primary'
                }`}>
                {plan?.price} {plan?.currency}<span className="text-base font-normal">/{plan?.price_schedule}</span>
              </div>
              {
                plan?.vat &&
                <p className={`text-sm ${plan?.featured ? 'text-white/80' : 'text-gray-600 dark:text-white/80'
                  }`}>
                  {plan?.vat}
                </p>
              }
              <p className={`text-sm ${plan?.featured ? 'text-white/80' : 'text-gray-600 dark:text-white/80'
                }`}>
                {plan?.installation}
              </p>
            </div>
            <Link href={`${PATH.contact}/#contactForm`}>
              <Button
                className={`!w-full justify-center ${plan?.featured
                  ? '!bg-white !text-primary hover:bg-gray-50'
                  : ''
                  }`}
              >
                Get Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default PricingCard