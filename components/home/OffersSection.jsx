import React from 'react'
import SectionTitle from '../shared/SectionTitle'
import OfferCard from '../cards/OfferCard'

const OffersSection = () => {
  return (
    <section className='bg-background3 dark:bg-black md:py-20 py-10'>
      <div className="customContainer">
        <SectionTitle
          title='Exciting'
          title2="offers"
          subTitle='Enjoy our exclusive offers and promotions'
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-10 max-sm:px-10">
          <OfferCard />
          <OfferCard />
          <OfferCard />
          <OfferCard />
        </div>
      </div>
    </section>
  )
}

export default OffersSection