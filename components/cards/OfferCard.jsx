import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const OfferCard = () => {
  return (
    <article className='group min-h-[235px]'>
      <div className='rounded-[10px] overflow-hidden shadow-card hover:shadow-cardHover transition-all duration-200 h-full'>
        <Link href='/'>
          <div
            className='w-full relative after:absolute after:w-full after:h-full after:top-0 after:transition-all 
            after:duration-200 after:bg-gradient-to-t after:from-[#00000059] after:to-transparent mb-5 group-hover:after:opacity-50'
          >
            <Image src='https://exordonline.com/wp-content/uploads/2022/04/Refer-A-Friend-Bangla-01-1536x804.jpg.webp' alt='offer' width={270} height={135} />
          </div>
        </Link>
        <div>
          <Link href='/' className="">
            <h3 className="text-lg font-bold px-[30px]">Make a Referral and Earn BDT 500!</h3>
          </Link>
        </div>
      </div>
    </article>
  )
}

export default OfferCard