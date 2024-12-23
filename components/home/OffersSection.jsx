import React from 'react'
import SectionTitle from '../shared/SectionTitle'
import OfferCard from '../cards/OfferCard'

const OffersSection = () => {
  return (
    <section className='customContainer'>
      <SectionTitle
        title='Exciting'
        title2="offers"
        subTitle='Enjoy our exclusive offers and promotions'
      />
      <div className="grid grid-cols-4 gap-5 pt-10">
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
      </div>
    </section>
  )
}

export default OffersSection