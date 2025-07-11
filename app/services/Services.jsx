"use client"
import SectionTitle from '@/components/shared/SectionTitle'
import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { GridBackground } from '@/components/ui/grid-background'
import ServiceBenefits from '@/components/sections/ServiceBenefits'
import PageBanner from '@/components/shared/PageBanner'
import MotionButton from '@/components/ui/motion/motionButton'
import MotionDiv from '@/components/ui/motion/motionDiv'
import MotionP from '@/components/ui/motion/motionP'
import MotionH3 from '@/components/ui/motion/motionH3'
import { APIContext } from '@/contexts/APIContext'
import ServiceCardSkeleton from '@/components/skeleton/ServiceCardSkeleton'
import Link from 'next/link'
import { PATH } from '@/helper/pathConfig'


const Services = () => {
  const { Services, getServicesData } = useContext(APIContext)
  useEffect(() => {
    !Services.data && getServicesData();
  }, []);
  return (
    <>
      <PageBanner
        pageName='services'
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
          {
            Services.isLoading ?
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[120px]'>
                {Array.from({ length: 3 }).map((_, index) => (
                  <ServiceCardSkeleton key={index} />
                ))}
              </div>
              :
              <div className="mt-10">
                <HoverEffect effectBGClassName="bg-gradient-to-t from-primary to-secondary" items={Services.data?.map(service => ({
                  content: (
                    <div className="flex overflow-hidden flex-col items-center bg-gray-100 dark:bg-slate-700 rounded-[18px] h-full">
                      <MotionDiv
                        className="relative w-full aspect-[4/3]"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Image
                          src={service?.bannerImgUrl}
                          alt={service?.banner_img_url || service?.title}
                          fill
                          className="object-cover"
                          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        />
                      </MotionDiv>
                      <div className='p-5 h-full flex flex-col justify-between'>
                        <MotionDiv
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <MotionH3
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className='text-lg font-semibold mb-2'
                          >
                            {service?.title}
                          </MotionH3>
                          <MotionP
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className='font-normal ellipsis-3'
                          >
                            {service?.short_description}
                          </MotionP>
                        </MotionDiv>
                        {
                          service?.description ?
                            <Link href={`${PATH.services}/${service?.id}/${service?.slug}`}>
                              <MotionButton
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-4 px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg w-fit"
                              >
                                Read More
                              </MotionButton>
                            </Link>
                            :
                            <Link href={`${PATH.contact}/#contactForm`}>
                              <MotionButton
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-4 px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg w-fit"
                              >
                                Get a quote
                              </MotionButton>
                            </Link>
                        }
                      </div>
                    </div>
                  )
                }))} />
              </div>
          }
        </div>
      </section>

      {/* Add ServiceBenefits section */}
      <ServiceBenefits />
    </>
  )
}

export default Services