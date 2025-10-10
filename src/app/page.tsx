import {  Clock,  MapPin, Sparkles, Users } from "lucide-react";
import Link from "next/link";
const cards=[
  {
    icon:<Clock strokeWidth={3} size={40} color="#24B3DA"/>,
    title:"30+",
    heading:"Years of Proven Experience",
    description:"We have served Saudi Arabia for 30 years, giving us experience in handling every cleaning challenge with proven, reliable methods."
  },
  {
    icon:<Sparkles size={40} strokeWidth={3} color="#24B3DA"/>,
    title:"25000+",
    heading:"Proven Track Record",
    description:"Our volume proves our reliability and customer loyalty. Join the tens of thousands of clients who trust us for a perfect clean every time."
  },
  {
    icon:<Users strokeWidth={3} size={40} color="#24B3DA"/>,
    title:"50+",
    heading:"Dedicated, Indian Professionals",
    description:"Professional Indian Staffs deliver meticulous, detailed cleaning with a trusted work ethic and a commitment to clear communication."
  },
  {
    icon:<MapPin strokeWidth={3} size={30} color="#24B3DA"/>,
    title:"100%",
    heading:"Focused On Saudi Arabia",
    description:"As a fully established, local business, we understand the standards and specific needs of communities across Riyadh and Jeddah"
  },
]
export default function Home() {
  return (
    <>
    <div className="relative h-[90vh] hero-section bg-cover w-full flex pb-20 md:pb-0 items-end-safe md:items-center text-white  md:bg-center">
      <div className="absolute inset-0 bg-black opacity-20 md:opacity-20 z-1"></div>
      <div className="content md:p-5 p-4 z-10 flex flex-col gap-3 md:gap-5">
        <h4 className="font-semibold md:font-bold text-lg md:text-2xl ">Expert Cleaning for Discerning Homes</h4>
        <h5 className="font-light text-base md:text-lg ">We clean meticulously so you can enjoy sophisticated elegance.</h5>
        <Link href={'/contact'} className="rounded bg-[#24B3DA] font-medium w-32 text-center p-2 text-white">Book Now</Link>
      </div>
    </div>

    {/* About Sec */}
    <div className="w-full text-center py-15 px-7">
      <div className="content grid gap-3 md:gap-5 place-items-center">
        <h4 className="font-medium text-lg md:text-xl text-[#1C4177]">About Us</h4>
        <h3 className="font-semibold text-lg md:text-xl text-[rgb(36,179,218)]">Our professional expertise guarantees a spotless finish</h3>
        <p className="md:w-[50%] text-base  text-[#1C4177]">We are a professional cleaning service dedicated to delivering a flawless and healthy environment for your home or office. Our expert team provides a comprehensive clean with unmatched attention to detail, so you can enjoy a spotless space.</p>
        <Link href={'/contact'} className="text-base text-[#1C4177] underline">Why Choose Us?</Link>
      </div>
      <div className="cards grid grid-flow-col pt-16 w-full  grid-cols-1 md:grid-rows-none grid-rows-4 md:grid-cols-4 place-items-center gap-8">
        {
          cards.map((item,index)=>{
            return(
              <div key={index} className="rounded-sm p-4  flex flex-col gap-3 items-center shadow-2xl">
                {item.icon}
                <h1 className="text-[#24B3DA] font-bold text-2xl" >{item.title}</h1>
                <h2 className="text-[#1C4177] font-semibold text-lg" >{item.heading}</h2>
                <p className="text-light  text-[#1C4177]">{item.description}</p>
              </div>
            )
          })
        }
      </div>
    </div>
    {/* Services Section */}
    <div className="services bg-cover bg-center  min-h-screen  mt-5 relative">
      <div className="absolute inset-0 bg-[#24B3DA] opacity-50 z-1"></div>

    </div>
    </>
  );
}
