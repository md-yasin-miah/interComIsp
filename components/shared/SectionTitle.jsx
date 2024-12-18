import React from 'react'

const SectionTitle = ({ title, title2, subTitle, placeholder_title, className = '', reverse = false }) => {
  const tittleClass = "text-[46px] text-center relative font-rajdhani font-bold tracking-[5px] capitalize relative"
  return (
    <div className={`${className}`}>
      <h2 className={tittleClass}>
         {title} <span className='bg-clip-text bg-gradient-to-r from-primary to-secondary text-transparent'>{title2}</span>
         <span className='uppercase text-7xl text-primary opacity-10 tracking-[10px] font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{title3}</span>
       </h2>
    <p className="text-base text-center font-poppins leading-6 pl-8">{subTitle}</p>
    </div>
  )
}

export default SectionTitle