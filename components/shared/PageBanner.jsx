import PropTypes from 'prop-types';
import React from 'react'
import Image from 'next/image';
import Shade from '../skeleton/Shade';

const PageBanner = ({
  bgClassName = '',
  title = '',
  subTitle = '',
  image = '',
  loading = false
}) => {
  return (
    <section className="relative min-h-[450px]">
      <div className="absolute inset-0 w-full h-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
        {
          image && <Image src={image} alt='banner' fill className='object-cover bg-opacity-50 absolute inset-0'></Image>
        }
        <div className={`absolute inset-0 ${bgClassName} mix-blend-multiply`} aria-hidden="true"></div>
      </div>
      <div className="relative customContainer mx-auto lg:pb-32 md:pb-20 pb-16 lg:pt-52 md:pt-52 pt-52 -mt-24 sm:py-32 lg:mt-0">
        {
          loading ?
                <Shade className="w-10/12 h-14 mb-8" />
            :
            <h1 className="title !text-start dark:text-white text-black lg:text-5xl md:text-4xl text-4xl">{title}</h1>
        }
        {
          loading ?
            <div className='flex flex-col gap-2'>
              <Shade className="w-full h-4" />
              <Shade className="w-9/12 h-4" />
            </div>
            :
            <p 
            className="lg:mt-6 md:mt-3 mt-6 lg:text-lg md:text-base text-lg dark:text-indigo-100 text-gray-500 max-w-3xl font-poppins"
            dangerouslySetInnerHTML={{ __html: subTitle }}
            />
        }
      </div>
    </section>
  )
}

export default PageBanner;

PageBanner.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  bgClassName: PropTypes.string,
}