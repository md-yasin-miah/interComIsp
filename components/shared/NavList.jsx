"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

const NavList = ({ children, url, key }) => {
  const pathname = usePathname();
  const active = () => {
    if (pathname === '/') {
      return url === '/'; // Only true if URL is exactly '/'
    }
    return pathname.startsWith(url) && url !== '/'; // Check if the URL matches and is not '/'
  }
  console.log(pathname, active())
  return (
    <li key={key} className={active() ? 'text-primary after:bg-primary' : ''}>
      {children}
    </li>
  )
}

export default NavList