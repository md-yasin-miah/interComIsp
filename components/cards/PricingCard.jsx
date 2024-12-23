"use client"
import React from 'react'
import { motion } from 'framer-motion'

const PricingCard = ({ plan }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      key={plan.title}
      className={`w-full ${plan.featured ? 'md:-mt-4' : 'md:-mt-0'
        }`}
    >
      <div
        className={`h-full bg-white  rounded-[20px] shadow-card p-8 relative flex flex-col ${plan.featured ? 'bg-gradient-to-t from-primary to-secondary' : 'dark:bg-black dark:border-white/[0.2] bg-white border border-transparent'
          }`}
      >
        <div className="text-center mb-8">
          <h3 className={`text-2xl font-semibold mb-2 dark:text-white ${plan.featured ? 'text-white' : 'text-gray-800'} font-rajdhani`}>
            {plan.title}
          </h3>
          <p className={`text-sm dark:text-white/80 ${plan.featured ? 'text-white/80' : 'text-gray-600'}`}>
            {plan.subtitle}
          </p>

          <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r ${plan.featured ? "from-white to-white" : "from-primary to-secondary"} mt-6`}>
            <div className={`text-center ${plan.featured ? 'text-black' : 'text-white'}`}>
              <span className="text-2xl font-bold">${plan.price}</span>
              <span className="text-sm block">/mo</span>
            </div>
          </div>
        </div>
        <div className='flex h-full flex-col justify-between'>
          <div className="space-y-4">
            {plan.features.map((feature) => (
              <div
                key={feature.name}
                className="flex items-center justify-between"
              >
                <span className={`flex items-center gap-2 ${plan.featured ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}`}>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4" stroke={plan.featured ? '#fff' : '#4C6FFF'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {feature.name}
                </span>
                <span className={`font-medium ${plan.featured ? 'text-white' : 'text-gray-800 dark:text-white'}`}>
                  {feature.value}
                </span>
              </div>
            ))}
          </div>

          <button
            className={`w-full mt-8 py-3 px-6 rounded-lg font-medium transition-all ${plan.featured
              ? 'bg-white text-[#6B3FFF] hover:bg-gray-50'
              : `bg-gradient-to-r ${plan.featured ? "" : "from-primary to-secondary"} text-white hover:opacity-90`
              }`}
          >
            Choose Plan
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default PricingCard