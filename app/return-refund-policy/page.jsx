"use client";
import PageBanner from '@/components/shared/PageBanner'
import React, { useContext, useEffect } from 'react'
import { PolicyAPIContext } from '@/contexts/PolicyAPIContext'
import ErrorSection from '@/components/sections/ErrorSection';

const ReturnRefundPolicyPage = () => {
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
            title={policy.data?.return_and_refund_policy_title}
            subTitle={policy.data?.return_and_refund_policy_sub_title}
            loading={policy.isLoading}
        />
        <div className='customContainer py-10 blog-content'>
            <div  
                dangerouslySetInnerHTML={{ __html: policy.data?.return_and_refund_policy_description }}
            />
        </div>
    </div>
  )
}

export default ReturnRefundPolicyPage