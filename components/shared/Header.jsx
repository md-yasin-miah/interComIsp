"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../public/NetCom-Logo.png'
import logoWhite from '../../public/NetCom-Logo-White.png'
import LinkButton from './LinkButton'
import { FaUser } from "react-icons/fa"
import { HiMenuAlt3, HiX } from "react-icons/hi"
import Link from 'next/link'
import { navMenu } from '@/helper/fake'
import NavList from './NavList'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='h-24 w-full flex items-center relative'
      style={{
        boxShadow: "0px 5px 20px 0px rgba(0, 0, 0, 0.1)"
      }}
    >
      <div className="customContainer flex items-center justify-between">
        <div className='relative w-[180px]'>
          <Image src={logo} alt='logo' width='fill' height='fill' className='dark:hidden' />
          <Image src={logoWhite} alt='logo' width='fill' height='fill' className='hidden dark:block px-2' />
        </div>

        {/* Desktop Menu */}
        <div className='navMenu hidden lg:block'>
          <ul>
            {navMenu.map((item, index) => (
              <NavList key={index} url={item.url}>
                <Link href={item.url}>{item.name}</Link>
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
            className="max-sm:hidden"
          >Client Portal</LinkButton>
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed h-screen top-24 left-0 w-full bg-white dark:bg-gray-900 transition-transform duration-300 transform ${mobileMenuOpen ? 'translate-x-0 z-[1000]' : 'translate-x-full'}`}>
          <nav className="p-4">
            <ul className="flex flex-col space-y-4">
              {navMenu.map((item, index) => (
                <li key={index} className="text-center">
                  <Link
                    href={item.url}
                    className="text-gray-800 dark:text-white hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="text-center sm:hidden m-auto">
                <LinkButton
                  animation='fill'
                  type='outline'
                  href='/login'
                  icon={<FaUser />}
                  className="w-full justify-center"
                >Client Portal</LinkButton>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header