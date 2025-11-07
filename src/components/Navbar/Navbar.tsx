import Image from 'next/image'
import React from 'react'
import { Navlinks } from './NavActions'
import MobNav from './MobNav'
import {LangButton, NavbarClient} from './NavClientActions'


function Navbar({locale}:{locale:string}) {
  
  return (
    <NavbarClient>
      <MobNav  locale={locale}/>
      <div className="logo h-full w-1/2 md:w-[15%] justify-center md:justify-start items-center  flex">
        <Image src='/logo.jpg' alt='Cleaning Lama' className='w-18 h-8 md:h-[40px] md:w-[40px] md:rounded-l-xl' width={40} height={40}/>
      </div>
      <Navlinks  locale={locale} classes='md:flex hidden w-[75%] justify-between'/>
      <LangButton classes={"md:hidden flex"} val={locale=="ar"?"en":"ar"}/>
    </NavbarClient>
  )
}

export default Navbar
