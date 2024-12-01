import React from 'react'
import SectionTitle from '../shared/SectionTitle'
import { IoIosArrowDown } from "react-icons/io";

const FAQ = () => {
  return (
    <section className='customContainer'>
      <SectionTitle
        title='Frequently asked questions'
        subTitle="Common FAQ's regarding Exord and it's services"
      />
      <div className="grid grid-cols-2 gap-5 pt-10">
        <div>
          <input className='FAQCheckBox' type="checkbox" id='faq1' />
          <label htmlFor='faq1'>
            <h3>How do I know how much speed i am getting?</h3>
            <IoIosArrowDown />
          </label>
          <div className="FAQContent max-h-0 overflow-hidden transition-all duration-300">
            You can check your speed from http://proof.ovh.net/. Select nearest servers, Stop background activities and use our connection directly during testing for better understanding. You can also monitor your network traffic via bandwidth monitoring tools like DU Meter, NetSpeedMonitor etc.
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ