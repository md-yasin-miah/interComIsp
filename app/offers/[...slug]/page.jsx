"use client"
import BlogBanner from '@/components/shared/BlogBanner'
import PageBanner from '@/components/shared/PageBanner'
import { HomeAPIContext } from '@/contexts/HomeAPIContext'
import React, { useContext, useEffect } from 'react'
import OfferCard from '@/components/cards/OfferCard'
import OfferCardMini from '@/components/cards/OfferCardMini'
import Link from 'next/link'
import { PATH } from '@/helper/pathConfig'

const OfferDetails = ({ params }) => {
    const unwrappedParams = React.use(params);
    const { slug } = unwrappedParams;
    
    const {OfferDetails, getOfferDetails, Offers, getOffersData} = useContext(HomeAPIContext);
    
    //get offer details
    useEffect(() => {
        getOfferDetails(slug[0])
    }, [slug[0]]);

    //get offers data
    useEffect(() => {
        !Offers.data && getOffersData()
    }, []);

    console.log({OfferDetails})
    console.log({slug})
  return (  
    <>
        <PageBanner
            title={OfferDetails.data?.title}
            subTitle={OfferDetails.data?.short_description}
            // image={OfferDetails.data?.bannerImgUrl}
        />
        <div className='customContainer py-16'>
            {/* offer details */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                {/* Main offer content */}
                <div className='lg:col-span-2 space-y-6'>
                    {/* Offer image */}
                    <div className='rounded-lg overflow-hidden'>
                        <img 
                            src={OfferDetails.data?.bannerImgUrl} 
                            alt={OfferDetails.data?.title}
                            className='w-full h-auto object-cover'
                        />
                    </div>
                    
                    {/* Offer description */}
                    <div className='prose max-w-none'>
                        <h2 className='text-2xl font-bold mb-4'>{OfferDetails.data?.title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: OfferDetails.data?.description }} />
                    </div>
                </div>

                {/* Other offers sidebar */}
                <div className='lg:col-span-1'>
                    <h3 className='text-xl font-semibold mb-6'>Other Offers</h3>
                    <div className='md:space-y-5 space-y-4'>
                        {Offers.data?.filter(offer => offer.id !== OfferDetails.data?.id).map((offer) => (
                          <Link
                            href={`${PATH.offers}/${offer?.id}/${offer?.slug}`}
                            className='block'
                            key={offer.id}
                          >
                            <OfferCardMini 
                                offer={offer}
                            />
                          </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default OfferDetails