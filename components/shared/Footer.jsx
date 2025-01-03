import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import SSLFooterImg from '../../public/SSLCommerz-footer-1024x48.webp'
// import logo from '../../public/NetCom-Logo.png'
import logoWhite from '../../public/NetCom-Logo-White.png'

import { footerMenu } from '@/data/fake'
import SocialIcons from './SocialIcons'
import { BackgroundBeams } from '../ui/background-beams'

const Footer = () => {
  return (
    <footer className='bg-footerBG py-8 relative antialiased'>
      <div className='customContainer relative z-10'>
        <section className='grid grid-cols-12 text-white'>
          <div className='col-span-12 md:col-span-4 md:p-[34px] md:pl-0'>
            <div className="relative md:w-[70%] w-[50%] mb-4 max-sm:mx-auto">
              {/* <Image src={logo} alt='logo' width='fill' height='fill' className='dark:hidden'/> */}
              <Image src={logoWhite} alt='logo' width='fill' height='fill' className='px-2' />
            </div>
            <p className='pr-[6px] mb-2.5 max-sm:text-center'>NetCom Online is a Divisional Internet Service Provider company providing broadband internet service since 2009. NetCom is committed to provide extraordinary internet service to clients!</p>
            <SocialIcons />
          </div>
          {
            footerMenu.map((item, index) => (
              <div key={index} className={`p-[34px] ${index === 2 ? 'col-span-6 md:col-span-4 pr-0' : 'col-span-6 md:col-span-2'}`}>
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
        <section className='md:py-[18px] md:px-[50px] py-4 px-4 mt-2.5 mb-5 bg-white/60 rounded-lg'>
          <div className='flex flex-col md:flex-row max-sm:gap-3 items-center justify-between'>
            <p className='font-semibold text-sm'>Copyright © 2024 <strong>Netcom Internet</strong> | All Rights Reserved.<br />  Developed by
              <strong>
                <Link href='#' className='transition-all duration-300 hover:text-primary'> Net Land System Bangladesh</Link>
              </strong>
            </p>
            <div className='relative w-full md:w-1/2'>
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