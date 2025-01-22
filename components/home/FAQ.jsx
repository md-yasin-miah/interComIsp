"use client"
import { useEffect, useContext } from 'react'
import SectionTitle from '../shared/SectionTitle'
import FaqCard from '../cards/FaqCard'
import { APIContext } from '@/contexts/APIContext'
import FAQSkeleton from '../skeleton/FAQSkeleton'
import ErrorSection from '../sections/ErrorSection'

const FAQ = () => {
  const { FAQ, getFaqData } = useContext(APIContext);
  useEffect(() => {
    !FAQ.data && getFaqData();
  }, []);
  if (FAQ.isLoading) return <FAQSkeleton />;
  if (FAQ.isError) return <ErrorSection
    retry={getFaqData}
    message="Something went wrong while fetching FAQ data"
  />;
  return (
    <section className='md:py-20 py-10'>
      <div className="customContainer">
        <SectionTitle
          placeholder_title="FAQ's"
          title='Frequently'
          title2="Asked Questions"
          subTitle="Common FAQ's regarding NetCom and it's services"
        />
        <div className='flex flex-col md:flex-row gap-5 pt-10'>
          <div className='flex flex-col gap-5'>
            {
              FAQ.data?.map((faq, index) => {
                if (index < FAQ.data.length / 2) {
                  return <FaqCard key={index} faq={faq} index={index} />
                }
              })
            }
          </div>
          <div className="flex flex-col gap-5">
            {
              FAQ.data?.map((faq, index) => {
                if (index >= FAQ.data.length / 2) return <FaqCard key={index} faq={faq} index={index} />
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ