import React from 'react'
import SectionTitleSkeleton from '../skeleton/SectionTitleSkeleton'

const SectionTitle = ({ title, title2, subTitle, placeholder_title, className = '', reverse = false, loading = false }) => {
  return (
    loading? 
    <SectionTitleSkeleton/> 
    :
    <div className={`flex flex-col items-center ${className}`}>
      <h2 className="title">
        {
          reverse ?
            <span>
              <span className='bg-clip-text bg-gradient-to-r from-primary to-secondary text-transparent'>{title2}</span> {title}
            </span>
            :
            <span>
              {title} <span className='bg-clip-text bg-gradient-to-r from-primary to-secondary text-transparent'>{title2}</span>
            </span>
        }
        <span className='uppercase md:text-7xl text-5xl text-primary dark:text-white opacity-10 tracking-[10px] font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          {placeholder_title}
        </span>
      </h2>
      <p className="md:text-base text-sm font-poppins leading-6 text-gray-700 dark:text-gray-400">
        {subTitle}
      </p>
    </div>
  )
}

export default SectionTitle