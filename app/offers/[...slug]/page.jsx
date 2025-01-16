"use client"
import BlogBanner from '@/components/shared/BlogBanner'
import PageBanner from '@/components/shared/PageBanner'
import { HomeAPIContext } from '@/contexts/HomeAPIContext'
import React, { useContext, useEffect } from 'react'
import OfferCard from '@/components/cards/OfferCard'
import OfferCardMini from '@/components/cards/OfferCardMini'
import Link from 'next/link'
import { PATH } from '@/helper/pathConfig'
import CompactOfferCardSkeleton from '@/components/skeleton/CompactOfferCardSkeleton'
import ErrorSection from '@/components/sections/ErrorSection'
import BlogViewSkeleton from '@/components/skeleton/BlogViewSkeleton'
import { Input } from '@/components/ui/input'
import LabelInputContainer from '@/components/ui/LabelInputContainer'

const OfferDetails = ({ params }) => {
    const unwrappedParams = React.use(params);
    const [searchQuery, setSearchQuery] = React.useState('');
    const { slug } = unwrappedParams;
    
    const {OfferDetails, getOfferDetails, Offers, getOffersData} = useContext(HomeAPIContext);
    
    //get offer details
    useEffect(() => {
        getOfferDetails(slug[0]);
        console.log('details fun called')
    }, []);

    //get offers data
    useEffect(() => {
        !Offers.data && getOffersData()
    }, []);

    //check if offer details is error
    if(OfferDetails.isError) return <ErrorSection
        message={"Something went wrong while fetching offer details"}
        retry={() => getOfferDetails(slug[0])}
        className='!py-40'
    />
  return (  
    <>
        <PageBanner
            title={OfferDetails.data?.title}
            subTitle={OfferDetails.data?.short_description}
            loading={OfferDetails.isLoading}
            // image={OfferDetails.data?.bannerImgUrl}
        />
        <div className='customContainer py-16'>
            {/* offer details */}
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {/* Main offer content */}
                <div className='lg:col-span-2'>
                    {
                        OfferDetails.isLoading ?
                        <BlogViewSkeleton />
                        :
                        <div className='space-y-6'>
                            {/* Offer image */}
                            <div className='rounded-lg overflow-hidden'>
                                <img 
                                    src={OfferDetails.data?.bannerImgUrl} 
                                    alt={OfferDetails.data?.title}
                                    className='w-full h-auto object-cover'
                                />
                            </div>
                            {/* Offer description */}
                            <div className='prose max-w-none blog-content'>
                                <h2 className='text-2xl font-bold mb-4'>{OfferDetails.data?.title}</h2>
                                <div dangerouslySetInnerHTML={{ __html: OfferDetails.data?.description }} />
                            </div>
                        </div>
                    }
                </div>

                {/* Other offers sidebar */}
                <div className='lg:col-span-1'>
                    <div className='lg:sticky lg:top-[100px]'>
                        <div className='md:pl-6'>
                            <h3 className='md:text-2xl text-xl font-semibold mb-2'>Other Offers</h3>
                            {/* add a search input */}
                            <div className='flex items-center gap-2 w-full mb-4'>
                                <LabelInputContainer>
                                    <Input
                                        placeholder='Search offers'
                                        type='text'
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        />
                                </LabelInputContainer>
                            </div>
                        </div>
                        <div className='md:space-y-5 space-y-4 max-h-[calc(100vh-230px)] overflow-y-auto md:pl-6 pr-2 pt-1 scrollbar-thin'>
                            {Offers.isLoading ?
                                [1,2,3].map((_, index) => (
                                    <CompactOfferCardSkeleton key={index} />
                                ))
                                :
                                Offers.data?.filter(offer => offer.id !== OfferDetails.data?.id)
                                // sort offers by searchQuery
                                ?.sort((a, b) => {
                                    const aTitle = a?.title?.toLowerCase();
                                    const bTitle = b?.title?.toLowerCase();
                                    return aTitle?.includes(searchQuery?.toLowerCase()) ? -1 : bTitle?.includes(searchQuery?.toLowerCase()) ? 1 : 0;
                                })
                                ?.map((offer, index) => (
                                    <Link
                                        href={`${PATH?.offers}/${offer?.id}/${offer?.slug}`}
                                        className='block'
                                        key={offer?.id ||index}
                                    >
                                        <OfferCardMini 
                                            offer={offer}
                                        />
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default OfferDetails