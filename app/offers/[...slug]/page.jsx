"use client"
import PageBanner from '@/components/shared/PageBanner'
import { APIContext } from '@/contexts/APIContext'
import React, { useContext, useEffect } from 'react'
import { PATH } from '@/helper/pathConfig'
import ErrorSection from '@/components/sections/ErrorSection'
import BlogViewSkeleton from '@/components/skeleton/BlogViewSkeleton'
import OtherPost from '@/components/sections/OtherPost'
import PostDetails from '@/components/sections/PostDetails'

const OfferDetails = ({ params }) => {
    const unwrappedParams = React.use(params);
    const { slug } = unwrappedParams;

    const { OfferDetails, getOfferDetails, Offers, getOffersData } = useContext(APIContext);

    //get offer details
    useEffect(() => {
        getOfferDetails(slug[0]);
    }, []);

    //get offers data
    useEffect(() => {
        !Offers.data && getOffersData()
    }, []);

    //check if offer details is error
    if (OfferDetails.isError) return <ErrorSection
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
                        <PostDetails
                            isLoading={OfferDetails.isLoading}
                            data={OfferDetails.data}
                        />
                    </div>
                    {/* Other offers sidebar */}
                    <div className='lg:col-span-1'>
                        <OtherPost
                            title='Other Offers'
                            activeID={OfferDetails.data?.id}
                            isLoading={Offers.isLoading}
                            data={Offers.data}
                            basePath={PATH?.offers}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default OfferDetails