import { MoveUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ContactSection() {
  return (
    <div className="contact flex md:flex-nowrap flex-wrap  w-full  md:h-[600px] h-auto gap-10 px-5 md:px-20 py-20 relative">
          <Image src={"/contact.png"} className="h-auto" alt="Contact cleaning llama" width={600} height={300} priority />
          <div className="md:h-full h-auto flex flex-col items-start justify-center relative">
            <div className="text-left flex flex-col gap-3">
              <h1 className="font-extrabold text-2xl md:text-3xl text-[#24B3DA] ">Ready for a cleaner home?</h1>
              <h2 className="font-semibold text-lg md:text-xl text-[#1C4177]">We love making spaces shine. Reach out and let’s get started!</h2>
              <p className="font-medium text-base md:text-lg text-[#1C4177]">
                At Cleaning Llama, we believe everyone deserves a fresh, healthy space to live and work. Our mission goes beyond just scrubbing and sweeping – it’s about creating environments that uplift, inspire, and promote wellbeing
                <br />
                Reaching out is simple. Click the button below or visit our contact page to get started. If you have quick queries, feel free to connect with us directly via email, WhatsApp, or a quick call—whichever works best for you. Let Cleaning
                Llama help you enjoy sparkling clean spaces with zero hassle. Your comfort and happiness are our top priorities!
              </p>
              <Link href={"/contact"} className="rounded-md mt-5 bg-[#24B3DA] text-white p-2 font-semibold w-fit text-center text-lg ">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
  )
}

export default ContactSection
