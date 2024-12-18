"use client"
import React from 'react'
import SectionTitle from '../shared/SectionTitle'
import ReviewCard from '../cards/ReviewCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const ReviewSection = () => {
  const options={
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    arrows : false,
    perPage: 3,
    gap    :'16px',
    autoScroll: {
      speed: 1,
    },
  }
  const reviews = [
    {
        name: "Sarah Johnson",
        rating: 5,
        text: "Exceptional service! The team went above and beyond to help me find exactly what I needed. Highly recommend!",
        date: "March 2024"
    },
    {
        name: "Michael Chen",
        rating: 5,
        text: "Professional, knowledgeable, and very responsive. A pleasure to work with!",
        date: "February 2024"
    },
    {
        name: "Emily Rodriguez",
        rating: 5,
        text: "Outstanding experience from start to finish. The attention to detail was impressive.",
        date: "January 2024"
    }
];
  return (
    <section className='bg-background3 dark:bg-black py-20'>
      <div className="customContainer">
        <SectionTitle
          title="What our clients says!"
          subTitle='Join now and enjoy the exciting features from NetCom online'
        />
        <div className='pt-10'>
          <Splide options={options} extensions={{ AutoScroll }}>
            {reviews.map((review, index) => (
              <SplideSlide key={index} className='py-5'>
                <ReviewCard review={review} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <div className="text-center mt-10">
                    <a 
                        href="https://www.google.com/business" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
                    >
                        See all reviews on Google
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
      </div>
    </section>
  )
}

export default ReviewSection