import React from 'react'
import { FaDropbox } from "react-icons/fa";

const FeatureCard = () => {
  return (
    <div className='border-t-[3px] border-l-[3px] border-transparent hover:border-primary transition-all duration-300 py-5 px-[30px]
        rounded-3xl shadow-card2 hover:shadow-card2Hover space-y-4 bg-white dark:bg-slate-700'>
      <FaDropbox className='text-5xl text-primary' />
      <h2 className='font-bold text-[25px]'>Unlimited Package</h2>
      <p className='text-base font-normal leading-[1.9rem]'>We have unlimited monthly package with reasonable service charge.</p>
    </div>
  )
}

export default FeatureCard