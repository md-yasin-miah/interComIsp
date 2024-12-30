import PropTypes from 'prop-types';
import React from 'react'
import bg from '../../public/about.webp'
import Image from 'next/image';

const PageBanner = ({
  bgClassName = '',
  title = '',
  subTitle = '',
}) => {
  return (
    <section className="relative min-h-[450px]">
      <div className="absolute inset-0">
        <Image src={bg} alt='banner' className='w-full h-full object-cover bg-opacity-50 absolute inset-0'></Image>
        <div className={`absolute inset-0 ${bgClassName} mix-blend-multiply`} aria-hidden="true"></div>
      </div>
      <div className="relative customContainer mx-auto lg:pb-32 md:pb-20 pb-16 lg:pt-52 md:pt-52 pt-52 -mt-24 sm:py-32 lg:mt-0">
          <h1 className="title !text-start text-white lg:text-5xl md:text-4xl text-4xl">{title}</h1>
          <p className="lg:mt-6 md:mt-3 mt-6 lg:text-lg md:text-base text-lg text-indigo-100 max-w-3xl font-poppins">
            {subTitle}
          </p>
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