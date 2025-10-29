import React from 'react'
import { Whatsapp } from '../../../public/customSvgs/Icons'
import Link from 'next/link'

function WhatsappButton() {
  return (
    <div>
    <Link href='https://wa.me/+918089816992' className='bg-green-600 fixed bottom-2 right-2 p-2 text-lg font-semibold  text-white rounded-full hover:rounded-2xl flex gap-2 items-center'><Whatsapp className='size-8 '/>Message us</Link>
      
    </div>
  )
}

export default WhatsappButton
