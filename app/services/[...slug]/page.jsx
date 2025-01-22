"use client"
import PageBanner from '@/components/shared/PageBanner'
import { APIContext } from '@/contexts/APIContext'
import React, { useContext, useEffect } from 'react'
import { PATH } from '@/helper/pathConfig'
import ErrorSection from '@/components/sections/ErrorSection'
import OtherPost from '@/components/sections/OtherPost'
import PostDetails from '@/components/sections/PostDetails'

const ServiceDetails = ({ params }) => {
    const unwrappedParams = React.use(params);
    const { slug } = unwrappedParams;
    
    const {ServiceDetails, getServiceDetails, Services, getServicesData} = useContext(APIContext);
    
    //get offer details
    useEffect(() => {
        getServiceDetails(slug[0]);
        console.log('details fun called')
    }, []);

    //get offers data
    useEffect(() => {
        !Services.data && getServicesData()
    }, []);

    //check if offer details is error
    if(ServiceDetails.isError) return <ErrorSection
        message={"Something went wrong while fetching service details"}
        retry={() => getServiceDetails(slug[0])}
        className='!py-40'
    />
  return (  
    <>
        <PageBanner
            title={ServiceDetails.data?.title}
            subTitle={ServiceDetails.data?.short_description}
            loading={ServiceDetails.isLoading}
            // image={ServiceDetails.data?.bannerImgUrl}
        />
        <div className='customContainer py-16'>
            {/* offer details */}
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {/* Main offer content */}
                <div className='lg:col-span-2'>
                    <PostDetails
                        isLoading={ServiceDetails.isLoading}
                        data={ServiceDetails.data}
                    />
                </div>
                {/* Other offers sidebar */}
                <div className='lg:col-span-1'>
                    <OtherPost
                        title='Other Offers'
                        activeID={ServiceDetails.data?.id}
                        isLoading={Services.isLoading}
                        data={Services.data}
                        basePath={PATH?.services}
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default ServiceDetails