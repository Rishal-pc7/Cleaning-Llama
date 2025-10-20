import {  CircleStar, Clock,  MapPin,MoveUpRight,Sparkles, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ServiceCarousel } from "./ServiceCarousel";
import { Card, CardContent } from "@/components/ui/card";
const cards=[
  {
    icon:<Clock strokeWidth={3} size={40} color="#24B3DA"/>,
    title:"30+",
    heading:"Years of Proven Experience",
    description:"We have served Saudi Arabia for 30 years, giving us experience in handling every cleaning challenge with proven, reliable methods."
  },
  {
    icon:<CircleStar size={40} strokeWidth={3} color="#24B3DA"/>,
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
const services=[
  {
    image:"/hourly.png",
    heading:"Hourly Cleaning Service",
    description:"Our Hourly Cleaning Service offers flexible, high-quality cleaning, at Floor, Kitchen & Utensils, and Bathroom Tasks, Including heavier duties."

  },
  {
    image:"/rehabilitation.png",
    heading:"Rehabilitation Cleaning",
    description:"Our Rehabilitation Cleaning Service include Floor, Facade, Window, Kitchen, Bathroom, and Tank Cleaning (Upper & Lower)."

  },
  {
    image:"/pest.png",
    heading:"Pest Control",
    description:"Professional pest control services eliminating all types of pests and insects—delivered with expert care and reliability."

  },
  {
    image:"/service.jpg",
    heading:"Hourly Cleaning Service",
    description:"Our Hourly Service with Professional Male Staff provides reliable, discreet, and flexible cleaning. Book the time you need and utilize their expertise for general cleaning or tougher physical tasks to ensure a high-quality finish every time."

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
        <Link href={'/contact'} className="rounded-4xl bg-[#24B3DA] font-medium w-36 text-center  flex items-center"><MoveUpRight className="w-1/4 bg-white p-2 h-full rounded-4xl text-[#1C4177]"/> <span className="p-2">Book Now</span> </Link>
      </div>
    </div>

    {/* About Sec */}
    <div className="w-full text-center py-15 px-10 ">
      <div className="content grid gap-3 md:gap-5 place-items-center">
        <h4 className="font-medium text-lg md:text-xl text-[#1C4177]">About Us</h4>
        <h3 className="font-semibold text-lg md:text-xl text-[rgb(36,179,218)]">Our professional expertise guarantees a spotless finish</h3>
        <p className="md:w-[50%] text-base  text-[#1C4177]">We are a professional cleaning service dedicated to delivering a flawless and healthy environment for your home or office. Our expert team provides a comprehensive clean with unmatched attention to detail, so you can enjoy a spotless space.</p>
        <Link href={'/contact'} className="text-base text-[#1C4177] underline">Why Choose Us?</Link>
      </div>
      <div className="cards grid grid-flow-col pt-16 w-full  grid-cols-1 md:grid-rows-2 grid-rows-4 md:grid-cols-2 place-items-center gap-8">
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
    <div className="services flex flex-col items-center  text-center min-h-screen gap-10 mt-5 relative">
      <div className="heading z-10 flex flex-col gap-4">
        <h3 className="font-semibold text-lg md:text-2xl text-[#1C4177]">Our Professional Cleaning Services</h3>
        <h4 className="font-medium text-lg md:text-xl text-[#24B3DA]">We offer a wide range of expert cleaning solutions tailored to your unique needs with quality and professionalism.</h4>
      </div>
      <ServiceCarousel display="md:hidden" services={services}/>
      <div className="hidden md:grid cards gap-x-5  grid-flow-row gap-y-8 grid-cols-2 md:grid-cols-3 w-full place-items-center z-10 p-15">
        {
          services.map((item,index)=>(
            <Card key={index} className="rounded-md bg-white border-[3px] border-white p-0 basis-1/3">
              <CardContent className="p-0 ">
                <Image src={item.image} alt="" className="rounded-t-md aspect-[5/4] object-center h-1/2 w-full object-cover" width={200} height={500}/>
                          <div className="content p-4 grid gap-3">
                            <h1 className="font-semibold text-base text-[#24B3DA]">{item.heading}</h1>
                            <h2 className="font-medium text-base  text-[#1C4177]">{item.description}</h2>
                          </div> 
              </CardContent>

            </Card>

          ))
        }
        

      </div>

    </div>
    </>
  );
}
