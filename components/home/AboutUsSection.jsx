"use client"
import { useContext } from 'react'
import { APIContext } from '@/contexts/APIContext'
import SectionTitle from '../shared/SectionTitle'
import Image from 'next/image'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import MotionDiv from '../ui/motion/motionDiv'

const AboutUsSection = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <section className='md:py-20 py-10'>
      <div className='customContainer'>
        <div className="mt-10 flex flex-col md:flex-row gap-20 items-center">
          {/* Left Content */}
          <div className='h-full md:w-3/5 w-full'>
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='flex flex-col gap-5'
            >
              <SectionTitle
                title={data.title}
                subTitle={data.subtitle}
                className="!items-start"
              />
              <div className='md:text-lg text-sm text-colorParagraph font-medium md:leading-8 leading-7 mb-6'>
                <p>{data.description}</p>
              </div>
            </MotionDiv>
          </div>

          {/* Right Image */}
          <div className='h-full md:w-2/5 w-full'>
            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {data.featureImgUrl?.includes('.lottie') ? (
                <DotLottieReact
                  src={data.featureImgUrl}
                  loop
                  autoplay
                />
              ) : (
                <Image
                  src={data.featureImgUrl}
                  alt={data.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
              )}
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection