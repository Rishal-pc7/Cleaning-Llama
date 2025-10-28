import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Navlinks } from './NavActions'
import { Globe } from 'lucide-react'
import MobNav from './MobNav'


function Navbar() {
  return (
    <div className="font-manrope z-20 text-white right-1/2 translate-x-1/2 min-w-[70%] md:min-w-[35%] h-10 md:h-10  backdrop-blur-lg bg-white/5 border border-white/30 rounded-xl shadow-lg absolute top-4 flex justify-between">
      <MobNav/>
      <div className="logo h-full w-1/2 md:w-[15%] justify-center md:justify-start items-center  flex">
        <Image src='/logo.jpg' alt='Cleaning Lama' className='w-18 h-8 md:h-[40px] md:w-[40px] md:rounded-l-xl' width={40} height={40}/>
      </div>
      <Navlinks classes='md:flex hidden w-[75%] justify-between'/>
      <Link href='' className='mr-2 md:mr-0 text-[#24B3DA]/80 flex md:hidden gap-2 font-semibold text-lg items-center'><Globe size={20} className='text-[#24B3DA]/80' strokeWidth={3} /> العربية</Link>
    </div>
  )
}

export default Navbar
