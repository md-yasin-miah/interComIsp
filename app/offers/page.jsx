import React from 'react'
import SectionTitle from '@/components/shared/SectionTitle'
import PageBanner from '@/components/shared/PageBanner'
import image from '../../public/offer-card.webp'
import OfferCard from '@/components/cards/OfferCard'

const offers = [
  {
    title: "Summer Special Bundle",
    description: "Get high-speed internet with free installation and first month free!",
    bannerImg: "/images/offers/summer-bundle.jpg",
    price: "49.99",
    oldPrice: "69.99",
    bannerImg: image
  },
  {
    title: "Family Package Deal",
    description: "Unlimited data with multi-device support perfect for families.",
    bannerImg: "/images/offers/family-package.jpg",
    price: "79.99",
    oldPrice: "99.99",
    bannerImg: image
  },
  {
    title: "Business Starter Pack",
    description: "Professional grade internet with dedicated support for small businesses.",
    bannerImg: "/images/offers/business-starter.jpg",
    price: "129.99",
    oldPrice: "159.99",
    bannerImg: image
  }
]

const Offers = () => {
  return (
    <>
      <PageBanner
        bgClassName='bg-primary'
        title='Our Fantastic Offers'
        subTitle='Take a look at the offers that we provide and choose the one that suits you best. We are here to help you with your needs.'
      />
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
                offer={offer}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Offers