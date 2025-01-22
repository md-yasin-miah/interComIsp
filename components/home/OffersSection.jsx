"use client"
import { useContext, useEffect,  } from 'react'
import SectionTitle from '../shared/SectionTitle'
import OfferCard from '../cards/OfferCard'
import { APIContext } from '@/contexts/APIContext'


const OffersSection = () => {
  const { Offers, getOffersData } = useContext(APIContext);
  useEffect(() => {
    !Offers.data && getOffersData();
  }, []);
  return (
    <section className='bg-background3 dark:bg-black md:py-20 py-10'>
      <div className="customContainer">
        <SectionTitle
          title='Exciting'
          title2="offers"
          subTitle='Enjoy our exclusive offers and promotions'
          loading={Offers.isLoading}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10 max-sm:px-10">
          {Offers.data && Offers.data?.map((offer, index) => (
            <OfferCard
              key={index}
              offer={offer}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default OffersSection