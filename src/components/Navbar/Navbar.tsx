import Image from 'next/image'
import React from 'react'
import { Navlinks } from './NavActions'
import MobNav from './MobNav'
import {LangButton, NavbarClient} from './NavClientActions'


function Navbar({locale}:{locale:string}) {
  
  return (
    <>
      <div className="logo w-[30%] hidden absolute top-4 z-20 items-center md:flex">
        <Image src='/logo.png' alt='Cleaning Lama' className='w-32 h-auto' width={100} height={40}/>
      </div>
    <NavbarClient>
      <MobNav  locale={locale}/>
      <Navlinks  locale={locale} classes='md:flex  hidden w-full justify-between'/>
      <LangButton classes={"md:hidden flex"} val={locale=="ar"?"en":"ar"}/>
    </NavbarClient>
    </>
  )
}

export default Navbar
