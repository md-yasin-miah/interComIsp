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
    autoScroll: {
      speed: 1,
    },
  }
  return (
    <section className='bg-background3 dark:bg-black py-20'>
      <div className="customContainer">
        <SectionTitle
          title="What our clients says!"
          subTitle='Join now and enjoy the exciting features from Exord online'
        />
        <div className='pt-10'>
          <Splide options={options} extensions={{ AutoScroll }}>
            <SplideSlide>
              <ReviewCard />
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </section>
  )
}

export default ReviewSection