import React from 'react'
import SectionTitle from '../shared/SectionTitle'
import { IoStar } from "react-icons/io5";
import Link from 'next/link';

const ReviewSection = () => {
  return (
    <section className='bg-background2 dark:bg-black py-20'>
      <div className="customContainer">
        <SectionTitle
          title="What our clients says!"
          subTitle='Join now and enjoy the exciting features from Exord online'
        />
        <div className='grid grid-cols-3 gap-5 pt-10'>
          {/* review card */}
          <div className='py-[47px] px-[39px] space-y-2.5 bg-white rounded-[20px]'>
            <h2 className='text-3xl font-bold'>Md Yasin Miah</h2>
            <div className='flex gap-2'>
              <IoStar className='text-primary' />
              <IoStar className='text-primary' />
              <IoStar className='text-primary' />
              <IoStar className='text-primary' />
              <IoStar className='text-primary' />
            </div>
            <p className='text-[15px] text-colorCardParagraph leading-7'>
              Certainly I have the best experience by using exord connection. I have been using for 3.5 years, highly satisfied with the internet speed and their customer service is really excellent.  <Link href='' className='font-semibold text-primary'>Read more...</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReviewSection