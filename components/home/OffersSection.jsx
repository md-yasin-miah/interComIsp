import React from 'react'
import SectionTitle from '../shared/SectionTitle'
import OfferCard from '../cards/OfferCard'

const OffersSection = () => {
  return (
    <section>
      <SectionTitle
        title='Exciting offers'
        subTitle='Enjoy our exclusive offers and promotions'
      />
      <div className="grid grid-cols-4 gap-5">
        <OfferCard />
      </div>
    </section>
  )
}

export default OffersSection