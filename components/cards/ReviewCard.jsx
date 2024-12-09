import React from 'react'
import { IoStar } from "react-icons/io5";
import Link from 'next/link';

const ReviewCard = () => {
  return (
    <div className='py-[47px] px-[39px] space-y-2.5 bg-white rounded-[20px] m-5'>
        <h2 className='text-3xl font-bold'>Salim Jahangir</h2>
        <div className='flex gap-2'>
            {[1,2,3,4,5].map((item, index) => (
                <IoStar className='text-primary' key={index} />
            ))}
        </div>
        <p className="text-[15px] text-colorCardParagraph leading-7">
            Certainly I have the best experience by using NetCom connection. I have been using for 3.5 years, highly satisfied with the internet speed and their customer service is really excellent.
            <Link href='' className='font-semibold text-primary'>Read more...</Link>
        </p>
    </div>
  )
}

export default ReviewCard