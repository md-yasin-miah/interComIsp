import React from 'react'
import BlogViewSkeleton from '../skeleton/BlogViewSkeleton';

const PostDetails = ({
    isLoading,
    data
}) => {
  return (
    <>
        {
            isLoading ?
            <BlogViewSkeleton />
            :
            <div className='space-y-6'>
                {/* Offer image */}
                <div className='rounded-lg overflow-hidden'>
                    <img 
                        src={data?.bannerImgUrl} 
                        alt={data?.title}
                        className='w-full h-auto object-cover'
                    />
                </div>
                {/* Offer description */}
                <div className='prose max-w-none blog-content'>
                    <h2 className='text-2xl font-bold mb-4'>{data?.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: data?.description }} />
                </div>
            </div>
        }
    </>
  )
}

export default PostDetails