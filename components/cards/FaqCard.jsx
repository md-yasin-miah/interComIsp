import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const FaqCard = ({ index, faq }) => {
  return (
    <div className='shadow-[0_10px_20px_0_rgba(0,0,0,0.08)] rounded-[25px] dark:bg-slate-700'>
      <input className='FAQCheckBox hidden' type="checkbox" id={'faq' + index} />
      <label htmlFor={'faq' + index} className='flex p-[25px] items-center justify-between rounded-[25px] transition-all duration-300 '>
        <h3 className='font-bold'>{faq?.question}</h3>
        <IoIosArrowDown className='text-xl arrow transition-transform duration-300' />
      </label>
      <div className="FAQContent  rounded-b-[25px] max-h-0 overflow-hidden bg-white dark:bg-slate-700">
        <div className='p-[25px] rounded-b-[25px]'
          dangerouslySetInnerHTML={{ __html: faq?.answer }}
        />
      </div>
    </div>
  )
}

export default FaqCard