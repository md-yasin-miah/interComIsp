"use client";
import PageBanner from '@/components/shared/PageBanner'
import React, { useContext, useEffect } from 'react'
import { PolicyAPIContext } from '@/contexts/PolicyAPIContext'
import ErrorSection from '@/components/sections/ErrorSection';

const PrivacyPolicyPage = () => {
  const { policy, getPolicy } = useContext(PolicyAPIContext);
  useEffect(() => {
    if(!policy.data){
      getPolicy();
    }
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
            title={policy.data?.privacy_policy_title}
            subTitle={policy.data?.privacy_policy_sub_title}
            loading={policy.isLoading}
        />
        <div className='customContainer py-10 blog-content'>
            <div  
                dangerouslySetInnerHTML={{ __html: policy.data?.privacy_policy_description }}
            />
        </div>
    </div>
  )
}

export default PrivacyPolicyPage