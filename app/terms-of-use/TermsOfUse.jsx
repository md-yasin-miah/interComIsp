"use client";
import PageBanner from '@/components/shared/PageBanner'
import React, { useContext, useEffect } from 'react'
import { PolicyAPIContext } from '@/contexts/PolicyAPIContext'
import ErrorSection from '@/components/sections/ErrorSection';
import { Metadata } from '../metadata';

const TermsOfUse = () => {
  const { policy, getPolicy } = useContext(PolicyAPIContext);
  useEffect(() => {
    // if(!policy.data){
      getPolicy();
    // }
  }, []);

  if(policy.isError){
    return <ErrorSection
        message="Something went wrong while fetching data"
        retry={() => getPolicy()}
     />
  }

  return (
    <div>
        <PageBanner
            title={policy.data?.terms_of_use_title}
            subTitle={policy.data?.terms_of_use_sub_title}
            loading={policy.isLoading}
        />
        <div className='customContainer py-10 blog-content'>
            <div  
                dangerouslySetInnerHTML={{ __html: policy.data?.terms_of_use_description }}
            />
        </div>
    </div>
  )
}

export default TermsOfUse