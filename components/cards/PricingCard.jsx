import React from 'react'
import { FaCheck } from "react-icons/fa6"
import LinkButton from '../shared/LinkButton'
import regular from '@/public/regular.webp'
import turbo from '@/public/turbo.webp'
import sme from '@/public/sme.webp'
import Image from 'next/image'


const PricingCard = ({ title, price, features, type }) => {
  return (
    <div className='bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 min-h-40'>
      <div className='flex items-center h-full'>
        <div 
            style={{
                backgroundImage:type=='turbo'?
                    "radial-gradient(at center center, #6081F612 40%, #6081F63D 100%)":
                        type=='sme'?"radial-gradient(at center center, #D5EBDB17 40%, #D5EBDB 100%)":
                            "radial-gradient(at center center, #FFFEE3 19%, #F6D1608F 100%)"
            }}
            className='rounded-l-3xl min-w-[280px] h-full flex items-center justify-center flex-col'>
          <div className="relative w-[178px]">
            <Image src={type=='turbo'?turbo:type=='sme'?sme:regular} alt={type} width="fill" height="fill"/>
          </div>
          <p className='text-2xl font-bold mt-1 text-gray-800'>{title}</p>
        </div>
        <div className='flex-1 p-8'>
          <div className='grid grid-cols-2 gap-4'>
            {features.map((feature, index) => (
              <li key={index} className='flex items-center gap-3 text-gray-700 list-none'>
                <span className='rounded-full bg-green-700 p-0.5'>
                  <FaCheck className='text-white text-xs' />
                </span>
                <span className='text-sm font-medium'>{feature}</span>
              </li>
            ))}
          </div>
        </div>
        <div className='p-8 flex flex-col justify-center items-end min-w-[200px]'>
          <div className='text-right mb-4'>
            <div className='flex items-baseline justify-end'>
              <span className='text-sm font-bold text-gray-600'>BDT</span>
              <span className='text-4xl font-bold mx-1 text-gray-900'>{price}</span>
              <span className='text-sm text-gray-600'>/month</span>
            </div>
          </div>
          <LinkButton>Purchase</LinkButton>
        </div>
      </div>
    </div>
  )
}

export default PricingCard 