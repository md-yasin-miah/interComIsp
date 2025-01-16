import React from 'react'
import MotionArticle from '../ui/motion/motionArticle'
import Image from 'next/image'

const OfferCardMini = ({offer}) => {
  return (
    <MotionArticle
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.2 }
      }}
      className='w-full max-sm:h-fit bg-white rounded-lg overflow-hidden cursor-pointer 
        shadow-card dark:bg-black dark:border-white/[0.2] border border-transparent'
    >
        <div className='flex items-center h-[100px]'>
            <div className='aspect-[7/6] h-full'>
                <div className='relative h-full w-full flex items-center justify-center overflow-hidden'>
                    {
                        offer?.bannerImgUrl && (
                            <Image 
                            src={offer?.bannerImgUrl} 
                            alt='offer' 
                            fill
                            loading = 'lazy'
                            sizes="(max-width: 166.66px) 100vw, 50vw"
                            className='bg-opacity-50 object-cover absolute inset-0'
                            />
                        )
                    }
                </div>  
            </div>
            <div className='p-2 pl-4'>
                <h3 className='ellipsis-1 text-lg font-semibold'>{offer?.title}</h3>
                <p className='ellipsis-2 text-sm text-gray-300'>{offer?.short_description}</p> 
            </div>
        </div>
    </MotionArticle>
  )
}

export default OfferCardMini