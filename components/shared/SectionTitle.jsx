import React from 'react'

const SectionTitle = ({ title, title2, subTitle, placeholder_title, className = '', reverse = false }) => {
  return (
    <div className={`${className}`}>
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
        <span className='uppercase text-7xl text-primary dark:text-white opacity-10 tracking-[10px] font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          {placeholder_title}
        </span>
      </h2>
      <p className="text-base text-center font-poppins leading-6 pl-8 text-gray-700 dark:text-gray-400">
        {subTitle}
      </p>
    </div>
  )
}

export default SectionTitle