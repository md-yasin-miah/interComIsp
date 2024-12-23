import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const FaqCard = ({ index }) => {
  return (
    <div className='shadow-[0_10px_20px_0_rgba(0,0,0,0.08)] rounded-[25px] dark:bg-gray-400'>
      <input className='FAQCheckBox hidden' type="checkbox" id={'faq' + index} />
      <label htmlFor={'faq' + index} className='flex p-[25px] items-center justify-between rounded-[25px] transition-all duration-300 '>
        <h3 className='font-bold'>How do I know how much speed i am getting?</h3>
        <IoIosArrowDown className='text-xl arrow transition-transform duration-300' />
      </label>
      <div className="FAQContent  rounded-b-[25px] max-h-0 overflow-hidden bg-white dark:bg-gray-400">
        <p className='p-[25px] rounded-b-[25px]'>
          You can check your speed from http://proof.ovh.net/. Select nearest servers, Stop background activities and use our connection directly during testing for better understanding. You can also monitor your network traffic via bandwidth monitoring tools like DU Meter, NetSpeedMonitor etc.
        </p>
      </div>
    </div>
  )
}

export default FaqCard