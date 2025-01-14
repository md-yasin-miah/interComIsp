import Image from 'next/image'
import React from 'react'
import Button from '../shared/Button'
import MotionDiv from '../ui/motion/motionDiv'
import MotionArticle from '../ui/motion/motionArticle'
import { PATH } from '@/helper/pathConfig'

const OfferCard = ({ offer }) => {
  return (
    <MotionArticle
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      className='w-full max-sm:h-fit bg-white rounded-[20px] overflow-hidden cursor-pointer 
        shadow-card dark:bg-black dark:border-white/[0.2] border border-transparent'
    >
      <div className='h-full flex flex-col justify-between'>
        <MotionDiv
          initial={{ borderRadius: "100% 0% 100% 0% / 0% 50% 50% 100%" }}
          whileHover={{
            borderRadius: "0",
            transition: { duration: 0.3 }
          }}
          className='min-h-[200px] w-full flex items-center justify-center overflow-hidden'
        >
          {/* Centered image */}
          <div
            className='relative w-full h-full'
          >
            <Image
              src={offer.bannerImg}
              alt='offer'
              fill
              className='object-cover'
            />
          </div>
        </MotionDiv>

        {/* Content area */}
        <div className="p-6 h-full flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{offer.title}</h3>
            <p className="text-gray-600 dark:text-white/[0.7] mb-4">{offer.description}</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-primary">${offer.price}</span>
              {offer.oldPrice && (
                <span className="text-lg text-gray-400 line-through">${offer.oldPrice}</span>
              )}
            </div>
            <Button
              href={PATH.contact}
              className="w-fit"
            >
              Get Offer
            </Button>
          </div>
        </div>
      </div>
    </MotionArticle>
  )
}

export default OfferCard