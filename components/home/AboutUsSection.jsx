"use client"
import React from 'react'
import SectionTitle from '@/components/shared/SectionTitle'
import LinkButton from '../shared/LinkButton'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const AboutUsSection = () => {
  return (
    <div className='mt-14 flex items-center'>
      <div className='flex flex-col gap-5 w-7/12'>
        <SectionTitle
          title='Exciting features'
          subTitle='Join now and enjoy the exciting features from Exord online'
        />
        <p className='pt-2.5 pr-[60px] pb-3.5 text-colorParagraph font-medium leading-7'>
          Exord online is a home and corporate broadband internet service provider that has been operating for over 12 years. We have gained excellent reputation in these years among clients by providing uncompromising quality and committed service.
        </p>
        <LinkButton className='uppercase'>more about us</LinkButton>
      </div>
      <div className='w-5/12'>
        <DotLottieReact
          src={"/lottie/aboutUs.lottie"}
          loop
          autoplay
        />
      </div>
    </div>
  )
}

export default AboutUsSection