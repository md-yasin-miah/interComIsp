import Image from 'next/image'
import React from 'react'
import logo from '../../public/logo-english.png'
import LinkButton from './LinkButton'
import { FaUser } from "react-icons/fa"
import Link from 'next/link'
import { navMenu } from '@/fake'
import NavList from './NavList'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  return (
    <header className='customContainer h-[102px] flex items-center justify-between'>
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
        </ul>
      </div>
      <div className='flex items-center gap-2'>
        <LinkButton
          href='/login'
          icon={<FaUser />}
        />
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header