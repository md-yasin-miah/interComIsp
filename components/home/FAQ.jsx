import React from 'react'
import SectionTitle from '../shared/SectionTitle'
import { IoIosArrowDown } from "react-icons/io";
import FaqCard from '../cards/FaqCard';

const FAQ = () => {
  const faq = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <section className='customContainer'>
      <SectionTitle
        title='Frequently asked questions'
        subTitle="Common FAQ's regarding Exord and it's services"
      />
      <div className='flex gap-5 pt-10'>
        <div className='flex flex-col gap-5'>
          {
            faq.map((item, index) => {
              if (index < faq.length / 2) {
                return <FaqCard key={index} index={index} />
              }
            })
          }
        </div>
        <div className="flex flex-col gap-5">
          {
            faq.map((item, index) => {
              if (index >= faq.length / 2) return <FaqCard key={index} index={index} />
            })
          }
        </div>
      </div>
    </section>
  )
}

export default FAQ