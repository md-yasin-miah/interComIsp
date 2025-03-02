"use client"
import Link from 'next/link'
import Image from 'next/image'
import React, { useContext, useEffect } from 'react'
import SSLFooterImg from '../../public/sslcommerz-foo2.webp'
// import logo from '../../public/NetCom-Logo.png'
import logoWhite from '../../public/NetCom-Logo-White.png'

import SocialIcons from './SocialIcons'
import { BackgroundBeams } from '../ui/background-beams'
import { footerMenu } from '@/helper/pathConfig'
import { APP_DESCRIPTION } from '@/helper/config'
import { PolicyAPIContext } from '@/contexts/PolicyAPIContext'

const Footer = () => {
  const { policy, getPolicy } = useContext(PolicyAPIContext);
  useEffect(() => {
    if (!policy.data) {
      getPolicy();
    }
  }, []);
  console.log('policy', policy)
  return (
    <footer className='bg-footerBG py-8 relative antialiased'>
      <div className='customContainer relative z-10'>
        <section className='grid grid-cols-12 text-white'>
          <div className='col-span-12 md:col-span-4 md:p-[34px] md:pl-0'>
            <div className="relative md:w-[70%] w-[50%] mb-4 max-sm:mx-auto">
              <Image src={logoWhite} alt='logo' width='fill' height='fill' className='px-2' />
            </div>
            <p className='pr-[6px] mb-2.5 max-sm:text-center'>{APP_DESCRIPTION}</p>
            <SocialIcons />
          </div>
          {
            footerMenu.map((item, index) => (
              <div key={index} className={`p-[34px] ${index === 1 ? 'col-span-6 md:col-span-2' : 'col-span-6 md:col-span-3 pr-0'}`}>
                <h4 className='mb-5 font-bold text-[21px] capitalize'>{item.title}</h4>
                <ul className=''>
                  {
                    item.menu.map((menu, index) => (
                      <li key={index} className='hover:text-white2 transition-all duration-300 py-1 capitalize'>
                        {menu.name === 'BTRC Approved Tarrif' && policy.data && (
                          <Link href={policy.data.BTRC_tarrif_url} target='_blank'>{menu.name}</Link>
                        )}
                        {menu.name !== 'BTRC Approved Tarrif' && (
                          <Link href={menu.url}>{menu.name}</Link>
                        )}
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </section>
        <div className='relative w-full'>
          <Image src={SSLFooterImg} alt='SSLCommerz-footer' width='fill' height='fill' />
        </div>
        <section className='md:py-[18px] md:px-[50px] py-4 px-4 mt-2.5 mb-5 text-slate-300 bg-white/10 rounded-lg'>
          <div>
            <p className='text-sm'>Copyright © {new Date()?.getFullYear()} <span className='font-semibold'>Netcom Internet</span>. All Rights Reserved. Developed by
              <span className='font-semibold'>
                <Link href='#' className='transition-all duration-300 hover:text-primary'> Net Land System Bangladesh</Link>
              </span>
            </p>
          </div>
        </section>
      </div>
      <BackgroundBeams />
    </footer>
  )
}

export default Footer