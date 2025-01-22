'use client'
import React, { useState } from 'react'
import CompactOfferCardSkeleton from '../skeleton/CompactOfferCardSkeleton';
import Link from 'next/link';
import OfferCardMini from '../cards/OfferCardMini';
import LabelInputContainer from '../ui/LabelInputContainer';
import { Input } from '../ui/input';
const OtherPost = ({
    title,
    isLoading,
    data,
    basePath,
    activeID
}) => {
    const [searchQuery, setSearchQuery] = useState('');
  return (
    <div className='lg:sticky lg:top-[100px]'>
        <div className='md:pl-6'>
            <h3 className='md:text-2xl text-xl font-semibold mb-2'>{title}</h3>
                {/* add a search input */}
                <div className='flex items-center gap-2 w-full mb-4'>
                    <LabelInputContainer>
                        <Input
                            placeholder='Search here'
                            type='text'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </LabelInputContainer>
                </div>
            </div>
            <div className='md:space-y-5 space-y-4 max-h-[calc(100vh-230px)] overflow-y-auto md:pl-6 pr-2 pt-1 scrollbar-thin'>
                {isLoading ?
                    [1,2,3].map((_, index) => (
                        <CompactOfferCardSkeleton key={index} />
                    ))
                :
                data?.filter(post => post.id !== activeID)
                // sort offers by searchQuery
            ?.sort((a, b) => {
                const aTitle = a?.title?.toLowerCase();
                const bTitle = b?.title?.toLowerCase();
                return aTitle?.includes(searchQuery?.toLowerCase()) ? -1 : bTitle?.includes(searchQuery?.toLowerCase()) ? 1 : 0;
            })
            ?.map((post, index) => (
                <Link
                    href={`${basePath}/${post?.id}/${post?.slug}`}
                    className='block'
                    key={post?.id ||index}
                >
                    <OfferCardMini 
                        post={post}
                    />
                </Link>
            ))
            }
        </div>
    </div>
  )
}

export default OtherPost