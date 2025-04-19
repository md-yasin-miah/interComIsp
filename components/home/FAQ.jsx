"use client"
import SectionTitle from '../shared/SectionTitle'
import { useState } from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import MotionDiv from '../ui/motion/motionDiv'

const FAQ = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  if (!data) {
    return null;
  }

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='md:py-20 py-10'>
      <div className='customContainer'>
        <SectionTitle
          title="Frequently Asked"
          title2="Questions"
          subTitle="Find answers to common questions about our services"
        />
        <div className="mt-10 space-y-4">
          {data.map((faq, index) => (
            <MotionDiv
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-card overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-semibold text-lg">{faq.question}</h3>
                {openIndex === index ? (
                  <HiChevronUp className="w-5 h-5" />
                ) : (
                  <HiChevronDown className="w-5 h-5" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </div>
              )}
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ