"use client"
import React, { useContext, useEffect } from 'react'
import SectionTitle from '@/components/shared/SectionTitle'
import PageBanner from '@/components/shared/PageBanner'
import image from '../../public/offer-card.webp'
import OfferCard from '@/components/cards/OfferCard'
import { APIContext } from '@/contexts/APIContext'
import OfferCardSkeleton from '@/components/skeleton/OfferCardSkeleton'


const Offers = () => {
  const { Offers, getOffersData } = useContext(APIContext);
  useEffect(() => {
    !Offers.data && getOffersData();
  }, []);
  return (
    <>
      <PageBanner
        pageName='offers'
      />
      <section className='pt-10 pb-20'>
        <div className='customContainer'>
          <SectionTitle
            title="Offers"
            title2="Offers"
            subTitle="Explore our exclusive offers and save big on your internet service!"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {
              Offers.isLoading ?
                [1, 2, 3].map((_, index) => (
                  <OfferCardSkeleton key={index} />
                ))
                :
                Offers.data && Offers.data?.map((offer, index) => (
                  <OfferCard
                    key={index}
                    offer={offer}
                  />
                ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Offers