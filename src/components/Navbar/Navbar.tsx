import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Navlinks } from './NavActions'
import { Globe } from 'lucide-react'
import MobNav from './MobNav'
function Navbar() {
  return (
    <div className="text-white mx-1 md:mx-4 w-[98%] h-10 md:h-14  backdrop-blur-lg bg-white/5 border border-white/30 rounded-xl shadow-lg absolute top-4 flex justify-between">
      <MobNav/>
      <div className="logo h-full w-1/2 md:w-[15%] justify-center md:justify-start items-center  flex">
        <Image src='/logo.jpg' alt='Cleaning Lama' className='w-28 h-8 md:h-[58px] md:w-[58px] md:rounded-l-lg' width={58} height={58}/>
      </div>
      <Navlinks classes='md:flex hidden w-[85%] justify-between'/>
      <Link href='' className='mr-2 md:mr-0 flex md:hidden gap-2 text-[#24B3DA] font-semibold text-lg items-center'><Globe size={20} className='' strokeWidth={3} color='#24B3DA'/> العربية</Link>
    </div>
  )
}

export default Navbar
