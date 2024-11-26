"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

const NavList = ({ children, url }) => {
  const pathname = usePathname();
  console.log({ pathname })
  const active = () => {
    // return pathname === url;
    if () {

    }
  }
  return (
    <li className={active() ? 'text-primary after:bg-primary' : ''}>
      {children}
    </li>
  )
}

export default NavList