"use client"
import React, { useContext, useEffect } from 'react'
import SectionTitle from '@/components/shared/SectionTitle'
import Button from '../shared/Button'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import MotionDiv from '../ui/motion/motionDiv'
import { APIContext } from '@/contexts/APIContext'
import AboutSkeleton from '../skeleton/AboutSkeleton'
import ErrorSection from '../sections/ErrorSection'
import Image from 'next/image'

const AboutUsSection = () => {
  const { getAboutData, About } = useContext(APIContext);
  useEffect(() => {
    if (!About.data) {
      getAboutData()
    }
  }, []);
  if (About.isLoading) {
    return <AboutSkeleton />
  }
  if (About.isError) {
    return <ErrorSection
      retry={getAboutData}
      message="Something went wrong while fetching about data"
    />
  }
  return (
    <section className='py-10'>
      <div className='customContainer overflow-hidden'>
        <SectionTitle
          title={About.data?.title}
          title2={About.data?.title2}
          subTitle={About.data?.sub_title}
          reverse={About.data?.title_reverse}
        />
        <div className="relative mt-10">
          <div className='h-full md:w-7/12 w-full'>
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='flex flex-col gap-5 max-sm:items-center'
            >
              <div
                className='md:text-lg text-sm text-colorParagraph font-medium md:leading-8 leading-7 mb-6 max-sm:text-center'
                dangerouslySetInnerHTML={{ __html: About.data?.description }}
              />
              <Button
                href={About.data?.action_btn_link}
                className='uppercase w-fit'
                animation='stepUp'
              >
                {About.data?.action_btn_text}
              </Button>
            </MotionDiv>

            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-4 mt-12 pb-2'>
              {About.data?.more_info && About.data?.more_info.map((stat, index) => (
                <div
                  key={index}
                  className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-card hover:shadow-card2 transition-all duration-300'
                >
                  <h3 className="text-xl font-bold mb-2" style={{ color: stat?.color }}>
                    {stat?.count}
                  </h3>
                  <p className='text-colorParagraph font-medium text-sm'>
                    {stat?.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {
            About.data?.featureImgUrl && (
              <div className='absolute top-1/2 -right-[120px] -translate-y-1/2 w-1/2 max-sm:hidden'>
                <MotionDiv
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {About.data?.featureImgUrl?.includes('.lottie') ? (
                    <DotLottieReact
                      src={About.data?.featureImgUrl}
                      loop
                      autoplay
                    />
                  ) : (
                    <Image
                      src={About.data?.featureImgUrl}
                      alt={About.data?.feature_img}
                      width={500}
                      height={500}
                      loading="lazy"
                      className="w-full h-full object-contain"
                    />
                  )}
                </MotionDiv>
              </div>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection