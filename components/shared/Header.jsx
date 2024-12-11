import Image from 'next/image'
import React from 'react'
import logo from '../../public/NetCom-Logo.png'
import LinkButton from './LinkButton'
import { FaUser } from "react-icons/fa"
import Link from 'next/link'
import { navMenu } from '@/helper/fake'
import NavList from './NavList'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  return (
    <header className='h-24 w-full flex items-center'
      style={{
        boxShadow: "0px 5px 20px 0px rgba(0, 0, 0, 0.1)"
      }}
    >
      <div className="customContainer flex items-center justify-between">
        <div className='relative w-[211px]'>
          <Image src={logo} alt='logo' width='fill' height='fill' />
        </div>
        <div className='navMenu'>
          <ul>
            {navMenu.map((item, index) => (
              <NavList key={index} url={item.url}>
                <Link
                  href={item.url}
                >
                  {item.name}
                </Link>
              </NavList>
            ))}
            <span></span>
          </ul>
        </div>
        <div className='flex items-center gap-2'>
          <LinkButton
            animation='fill'
            type='outline'
            href='/login'
            icon={<FaUser />}
          >Client Portal</LinkButton>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header