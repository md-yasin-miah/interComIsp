import React from 'react'
import SectionTitle from '../shared/SectionTitle'
import PricingCard from '../cards/PricingCard'
import LinkButton from '../shared/LinkButton'
import { IoArrowForwardCircleOutline } from "react-icons/io5"

const PricingSection = () => {
  const pricingData = [
    {
      speed: "20",
      price: "840",
      title: "Regular 840",
      type: 'regular',
      features: [
        "20 Mb/s Internet (Shared)",
        "Bufferless Cached Content",
        "Extra Speed on VAS",
        "Public IP (IPv6)"
      ]
    },
    {
      speed: "40",
      price: "1050",
      type: 'regular',
      title: "Regular 1050",
      features: [
        "40 Mb/s Internet (Shared)",
        "Bufferless Cached Content",
        "Extra Speed on VAS",
        "Public IP (IPv6)"
      ]
    },
    {
      speed: "50",
      price: "1260",
      type: 'regular',
      title: "Regular 1260",
      features: [
        "50 Mb/s Internet (Shared)",
        "Bufferless Cached Content",
        "Extra Speed on VAS",
        "Public IP (IPv6)"
      ]
    },
    {
      speed: "50",
      price: "1260",
      type: 'turbo',
      title: "Turbo 1260",
      features: [
        "50 Mb/s Internet (Shared)",
        "Bufferless Cached Content",
        "Extra Speed on VAS",
        "Public IP (IPv6)"
      ]
    },
    {
      speed: "50",
      price: "1260",
      type: 'sme',
      title: "Sme - 1260",
      features: [
        "50 Mb/s Internet (Shared)",
        "Bufferless Cached Content",
        "Extra Speed on VAS",
        "Public IP (IPv6)"
      ]
    }
  ]

  return (
    <section className='py-16'>
      <div className="customContainer">
        <div className='flex items-center justify-between'>
          <SectionTitle
            title='Flexible pricing'
            subTitle='You check our reasonable and flexible pricing below'
          />
          <LinkButton href='/' iconPosition='end' icon={<IoArrowForwardCircleOutline className='font-semibold text-xl' />}>
            VIEW ALL PACKAGES
          </LinkButton>
        </div>
        <div className='grid grid-cols-1 gap-6 mt-10'>
          {pricingData.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
        {/* check our other packages */}
        <div className='flex items-center py-12 px-20 gap-10 shadow-card2Hover rounded-3xl mt-16'>
          <div>
            <h2 className='text-[40px] mb-4 font-medium'>Check our other <span className='text-primary font-bold'>Packages</span></h2>
            <p className='text-2xl font-normal'>We have more exciting Shared & Turbo packages. To check or buy, please visit our pricing page.</p>
          </div>
          <LinkButton
            iconPosition='end'
            icon={<IoArrowForwardCircleOutline className='font-semibold text-xl' />}
            href='/' className='!py-5 !px-10' animation='stepUp'>
            <span className='whitespace-nowrap'>All Packages</span>
          </LinkButton>
        </div>
      </div>
    </section>

  )
}

export default PricingSection 