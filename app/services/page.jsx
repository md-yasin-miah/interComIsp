import SectionTitle from '@/components/shared/SectionTitle'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { GridBackground } from '@/components/ui/grid-background'
import ServiceBenefits from '@/components/sections/ServiceBenefits'
import { services } from '@/data/fake'
import PageBanner from '@/components/shared/PageBanner'
import MotionDiv from '@/components/ui/motionDiv'
import MotionButton from '@/components/ui/motion/motionButton'


const Services = () => {
  return (
    <>
      <PageBanner
        bgClassName='bg-green-800'
        title='Our Services'
        subTitle='Take a look at the services that we provide and choose the one that suits you best. We are here to help you with your needs.'
      />
      <section className='relative py-10 overflow-hidden'>
        <GridBackground animationDot={false} />
        <div className="customContainer relative">
          <SectionTitle
            title="Our"
            title2="services"
            subTitle="Take a look at the services that we provide"
          />

          {/* service card section */}
          <div className="mt-10">
            <HoverEffect effectBGClassName="bg-gradient-to-t from-primary to-secondary" items={services.map(service => ({
              content: (
                <div className="flex overflow-hidden flex-col items-center bg-gray-100 dark:bg-slate-700 rounded-[18px] h-full">
                  <MotionDiv
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
                  </MotionDiv>
                  <div className='p-5 h-full flex flex-col justify-between'>
                    <MotionDiv
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
                    </MotionDiv>
                    <MotionButton
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg w-fit"
                    >
                      Get a quote
                    </MotionButton>
                  </div>
                </div>
              )
            }))} />
          </div>
        </div>
      </section>

      {/* Add ServiceBenefits section */}
      <ServiceBenefits />
    </>
  )
}

export default Services