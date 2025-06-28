"use client"
import Image from 'next/image'
import React, { useState, useEffect, useContext } from 'react'
import logo from '../../public/NetCom-Logo.png'
import logoWhite from '../../public/NetCom-Logo-White.png'
import Button from './Button'
import { FaUser } from "react-icons/fa"
import { HiMenuAlt3, HiX } from "react-icons/hi"
import { Icon } from '@iconify/react'
import Link from 'next/link'
import NavList from './NavList'
import ThemeToggle from './ThemeToggle'
import { navMenu, PATH } from '@/helper/pathConfig'
import { usePathname } from 'next/navigation'
import { APIContext } from '@/contexts/APIContext'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [menuHover, setMenuHover] = useState(false);

  // HeaderTop related states
  const { ContactInfo, getContactInfoData } = useContext(APIContext);
  const [isTopVisible, setIsTopVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Function to check if a menu item is active
  const isActive = (url) => {
    if (pathname === '/') {
      return url === '/';
    }
    return pathname.startsWith(url) && url !== '/';
  };

  // Find the active menu item index
  const activeIndex = navMenu.findIndex(item => isActive(item.url));

  // Load contact info
  useEffect(() => {
    !ContactInfo.data && getContactInfoData();
  }, []);

  // Handle scroll for HeaderTop
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsTopVisible(true);
      }
      // Hide when scrolling down and past a threshold
      else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsTopVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Header Top Section */}
      <div
        className={`bg-footerBG h-12 flex items-center transition-transform duration-300 ease-in-out ${isTopVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
          }`}
      >
        <div className='customContainer text-white text-sm flex items-center gap-5'>
          <div className='flex items-center gap-1'>
            <Icon icon="famicons:call-outline" className='mr-1 w-4 h-4' />
            {ContactInfo.data?.[0]?.phones?.map((phone, index) => (
              <Link
                href={`tel:${phone}`}
                key={index}
                className='hover:text-white/80 transition-colors duration-300'
              >
                {phone}{index !== ContactInfo.data?.[0]?.phones?.length - 1 && ","}
              </Link>
            ))}
          </div>
          <div className='flex items-center gap-1'>
            <Icon icon="material-symbols:mail-outline" className='mr-1 w-4 h-4' />
            {ContactInfo.data?.[0]?.emails?.map((email, index) => (
              <Link
                href={`mailto:${email}`}
                key={index}
                className='hover:text-white/80 transition-colors duration-300'
              >
                {email}{index !== ContactInfo.data?.[0]?.emails?.length - 1 && ","}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header Section */}
      <div
        className={`h-16 md:h-20 w-full flex items-center bg-white dark:bg-gray-900 shadow-[0px_5px_20px_0px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out ${isTopVisible ? 'transform translate-y-0' : 'transform -translate-y-12'
          }`}
      >
        <div className="customContainer flex items-center justify-between">
          <div className='relative w-[130px] md:w-[160px]'>
            <Link href={PATH.root}>
              <Image src={logo} alt='logo' width='fill' height='fill' className='dark:hidden' />
              <Image src={logoWhite} alt='logo' width='fill' height='fill' className='hidden dark:block px-2' />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className='navMenu hidden lg:block'>
            <ul>
              {navMenu.map((item, index) => (
                <NavList key={index} url={item.url}>
                  <Link
                    onMouseEnter={() => setMenuHover(true)}
                    onMouseLeave={() => setMenuHover(false)}
                    href={item.url}>
                    {item.name}
                  </Link>
                </NavList>
              ))}
              {(activeIndex !== -1 || menuHover) && (
                <span></span>
              )}
            </ul>
          </div>

          <div className='flex items-center gap-2'>
            <Button
              animation='outline'
              type='fill'
              href='https://portal.netcomisp.net/'
              target='_blank'
              referrer='noreferrer'
              icon={<FaUser />}
              size='header'
              className="max-sm:hidden"
            >Client Portal</Button>
            <Button
              animation='fill'
              type='outline'
              href='https://quickpay.netcomisp.net/'
              target='_blank'
              referrer='noreferrer'
              size='header'
              className="max-sm:hidden"
            >Quick Pay</Button>
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
              <ul className="flex flex-col space-y-3">
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
                <li className="text-center sm:hidden m-auto flex gap-2">
                  <Button
                    animation='outline'
                    href='https://portal.netcomisp.net/'
                    target='_blank'
                    referrer='noreferrer'
                    icon={<FaUser />}
                    size='small'
                    className="w-full justify-center"
                  >Client Portal</Button>
                  <Button
                    animation='fill'
                    type='outline'
                    href='https://portal.netcomisp.net/'
                    target='_blank'
                    referrer='noreferrer'
                    size='small'
                    className="w-full justify-center"
                  >Quick Pay</Button>
                  <ThemeToggle />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header