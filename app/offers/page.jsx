import React from 'react'
import SectionTitle from '@/components/shared/SectionTitle'
import OfferCard from '@/components/shared/OfferCard'

const offers = [
  {
    title: "Summer Special Bundle",
    description: "Get high-speed internet with free installation and first month free!",
    bannerImg: "/images/offers/summer-bundle.jpg",
    price: "49.99",
    oldPrice: "69.99"
  },
  {
    title: "Family Package Deal",
    description: "Unlimited data with multi-device support perfect for families.",
    bannerImg: "/images/offers/family-package.jpg",
    price: "79.99",
    oldPrice: "99.99"
  },
  {
    title: "Business Starter Pack",
    description: "Professional grade internet with dedicated support for small businesses.",
    bannerImg: "/images/offers/business-starter.jpg",
    price: "129.99",
    oldPrice: "159.99"
  }
]

const Offers = () => {
  return (
    <section className='pt-10 pb-20'>
      <div className='customContainer'>
        <SectionTitle
          title="Offers"
          title2="Offers"
          placeholder_title='Offers'
          subTitle="Explore our exclusive offers and save big on your internet service!"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {offers.map((offer, index) => (
            <OfferCard
              key={index}
              {...offer}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Offers