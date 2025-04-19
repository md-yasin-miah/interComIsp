"use client"
import SectionTitle from '../shared/SectionTitle'
import { HoverEffect } from '../ui/card-hover-effect'
import MotionDiv from '../ui/motion/motionDiv'
import Image from 'next/image'
import Link from 'next/link'
import { PATH } from '@/helper/pathConfig'

const OffersSection = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <section className='md:py-20 py-10'>
      <div className='customContainer'>
        <SectionTitle
          title="Our"
          title2="Offers"
          subTitle="Discover our latest offers and promotions"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {data.map((offer, index) => (
            <MotionDiv
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`${PATH.offers}/${offer.id}`}>
                <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-card hover:shadow-card2 transition-all duration-300">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={offer.bannerImgUrl}
                      alt={offer.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
                      {offer.short_description}
                    </p>
                  </div>
                </div>
              </Link>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OffersSection