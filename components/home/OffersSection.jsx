import React from 'react'
import SectionTitle from '../shared/SectionTitle'
import OfferCard from '../cards/OfferCard'
import image from '../../public/offer-card.webp'

const OffersSection = () => {
  const offers = [
    {
      title: "Summer Special Bundle",
      description: "Get high-speed internet with free installation and first month free!",
      bannerImg: image,
      price: "49.99",
      oldPrice: "69.99",
    },
    {
      title: "Family Package Deal",
      description: "Unlimited data with multi-device support perfect for families.",
      bannerImg: image,
      price: "79.99",
      oldPrice: "99.99",
    },
    {
      title: "Business Starter Pack",
      description: "Professional grade internet with dedicated support for small businesses.",
      bannerImg: image,
      price: "129.99",
      oldPrice: "159.99",
    }
  ]
  return (
    <section className='bg-background3 dark:bg-black md:py-20 py-10'>
      <div className="customContainer">
        <SectionTitle
          title='Exciting'
          title2="offers"
          subTitle='Enjoy our exclusive offers and promotions'
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10 max-sm:px-10">
          {offers.map((offer, index) => (
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