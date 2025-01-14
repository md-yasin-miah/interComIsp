import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
import { PATH } from '@/helper/config'

const OfferCard = ({ title, description, bannerImg, price, oldPrice }) => {
  return (
    <div className="bg-white dark:bg-black border border-transparent dark:border-white/[0.2] rounded-xl shadow-card hover:shadow-cardHover overflow-hidden transition-transform hover:scale-105 flex flex-col">
      <div className="relative min-h-48 w-full">
        <Image
          src={bannerImg}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 h-full flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-white/[0.7] mb-4">{description}</p>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-bold text-primary">${price}</span>
            {oldPrice && (
              <span className="text-lg text-gray-400 line-through">${oldPrice}</span>
            )}
          </div>
          <Button
            href={PATH.contact}
            className="w-fit"
          >
            Get Offer
          </Button>
        </div>
      </div>
    </div>
  )
}

export default OfferCard 