import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import SSLFooterImg from '../../public/SSLCommerz-footer-1024x48.webp'
// import logoFooter from '../../public/logo-english-footer-white.png'
import logoFooter from '../../public/NetCom-Logo.png'

import { footerMenu } from '@/helper/fake'
import SocialIcons from './SocialIcons'
import { BackgroundBeams } from '../ui/background-beams'

const Footer = () => {
  return (
    <footer className='bg-footerBG py-8 relative antialiased'>
      <div className='customContainer relative z-50'>
        <section className='grid grid-cols-12 text-white'>
          <div className='col-span-4 p-[34px] pl-0'>
            <div className="relative w-[70%] mb-4">
              <Image src={logoFooter} alt='logo-footer' width='fill' height='fill' />
            </div>
            <p className='pr-[6px] mb-2.5'>NetCom Online is a Divisional Internet Service Provider company providing broadband internet service since 2009. NetCom is committed to provide extraordinary internet service to clients!</p>
            <SocialIcons />
          </div>
          {
            footerMenu.map((item, index) => (
              <div key={index} className={`p-[34px] ${index === 2 ? 'col-span-4 pr-0' : 'col-span-2'}`}>
                <h4 className='mb-5 font-bold text-[21px] capitalize'>{item.title}</h4>
                <ul className=''>
                  {
                    item.menu.map((menu, index) => (
                      <li key={index} className='hover:text-white2 transition-all duration-300 py-1 capitalize'>
                        <Link href={menu.url}>{menu.name}</Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </section>
        <section className='py-[18px] px-[50px] mt-2.5 mb-5 bg-white/60 rounded-lg'>
          <div className='flex items-center justify-between'>
            <p className='font-semibold text-sm'>Copyright © 2024 NetCom Online.  Developed by
              <strong>
                <Link href='' className='transition-all duration-300 hover:text-primary'> Optimus Technologies</Link>
              </strong>
            </p>
            <div className='relative w-1/2'>
              <Image src={SSLFooterImg} alt='SSLCommerz-footer' width='fill' height='fill' />
            </div>
          </div>
        </section>
      </div>
      <BackgroundBeams />
    </footer>
  )
}

export default Footer