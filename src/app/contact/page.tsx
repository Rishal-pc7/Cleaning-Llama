import React from 'react'
import ContactForm from './ContactForm'

function page() {
  return (
    <>
    <div className='w-full text-center h-[50vh]  bg-[#24B3DA]/45 flex justify-center items-center pb-0'>
      <h1 className='font-extrabold text-4xl md:text-6xl text-white'>Contact Us</h1>
    </div>
    <ContactForm/>
    </>
  )
}

export default page
