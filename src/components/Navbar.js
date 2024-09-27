"use client"
import { Navlinks } from '@/data/Navlinks'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className=' w-full fixed top-0 left-0 z-50 '>
        <div className=' max-w-screen-xl mx-auto  flex items-center justify-between py-2'>
          <Image src="/logo.jpeg" alt="Logo" width={60} height={60} className=' cursor-pointer hover:scale-105 transition-all duration-200 rounded-full' />

          <div className=' flex items-center gap-4'>
            {
              Navlinks.map((link) => (
                <Link href={link.link} key={link.name} className=' px-4 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-200 text-white cursor-pointer font-mono'>{link.name}</Link>
              ))
            }
          </div>
       
        </div>
    </div>
  )
}

export default Navbar