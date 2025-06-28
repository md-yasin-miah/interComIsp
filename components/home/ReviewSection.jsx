"use client"
import { useContext, useEffect } from 'react'
import SectionTitle from '../shared/SectionTitle'
import ReviewCard from '../cards/ReviewCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { APIContext } from '@/contexts/APIContext';
import { reviewSplideOptions } from '@/lib/utils';
import ReviewSectionSkeleton from '../skeleton/ReviewSectionSkeleton';
import ErrorSection from '../sections/ErrorSection';
import Link from 'next/link';
import { PATH } from '@/helper/pathConfig';

const ReviewSection = () => {
  const { ClientReview, getClientReviewData } = useContext(APIContext);
  useEffect(() => {
    if (!ClientReview.data) {
      getClientReviewData()
    }
  }, []);
  if (ClientReview.isLoading) {
    return <ReviewSectionSkeleton />
  }
  if (ClientReview.isError) {
    return <ErrorSection
      retry={getClientReviewData}
      message="Something went wrong while fetching client review data"
    />
  }

  return (
    <section className='bg-background3 dark:bg-black py-20'>
      <div className="customContainer">
        <SectionTitle
          title="What our"
          title2="clients says!"
          subTitle='Join now and enjoy the exciting features from NetCom online'
        />
        <div className='pt-10'>
          <Splide options={reviewSplideOptions} extensions={{ AutoScroll }}>
            {ClientReview.data?.map((review, index) => (
              <SplideSlide key={index} className='py-5'>
                <ReviewCard review={review} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <div className="text-center mt-10">
          <Link
            href={PATH.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 dark:text-white hover:text-blue-800 transition-colors duration-300"
          >
            See all reviews on Google
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ReviewSection