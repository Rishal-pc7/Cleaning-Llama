import { CircleStar, Clock,  MapPin, Users } from 'lucide-react';
import Link from 'next/link';
import React, { useMemo } from 'react'
import { ScrollAnimation } from './Template';
const cardsData = [
  {
    icon: Clock,
    iconProps: { strokeWidth: 2, size: 30, color: "#24B3DA" },
    title: "30+",
    heading: "Years of Proven Experience",
    description:
      "We have served Saudi Arabia for 30 years, giving us experience in handling every cleaning challenge with proven, reliable methods.",
  },
  {
    icon: CircleStar,
    iconProps: { strokeWidth: 2, size: 40, color: "#24B3DA" },
    title: "25000+",
    heading: "Proven Track Record",
    description:
      "Our volume proves our reliability and customer loyalty. Join the tens of thousands of clients who trust us for a perfect clean every time.",
  },
  {
    icon: Users,
    iconProps: { strokeWidth: 2, size: 40, color: "#24B3DA" },
    title: "50+",
    heading: "Dedicated, Indian Professionals",
    description:
      "Professional Indian Staffs deliver meticulous, detailed cleaning with a trusted work ethic and a commitment to clear communication.",
  },
  {
    icon: MapPin,
    iconProps: { strokeWidth: 2, size: 40, color: "#24B3DA" },
    title: "100%",
    heading: "Focused On Saudi Arabia",
    description:
      "As a fully established, local business, we understand the standards and specific needs of communities across Riyadh and Jeddah",
  },
];
function AboutSection() {
  const cards = useMemo(() => cardsData, []);

  return (
    <ScrollAnimation initialOptions={{y:-40}} animatedOptions={{y:0}} className="w-full text-center py-15 px-4 md:px-10 ">
        <div className="content grid gap-3 md:gap-5 place-items-center">
          <h4 className="font-semibold text-lg md:text-xl text-[#1C4177]">About Us</h4>
          <h1 className="font-extrabold text-xl md:text-3xl text-[rgb(36,179,218)]">Our Professional Expertise Guarantees a Spotless Finish</h1>
          <p className="md:w-[50%] text-base md:text-lg text-[#1C4177]">
            We are a professional cleaning service dedicated to delivering a flawless and healthy environment for your home or office. Our expert team provides a comprehensive clean with unmatched attention to detail, so you can enjoy a spotless space.
          </p>
          <Link href={"/contact"} className="text-base md:text-lg text-[#1C4177] underline">
            Why Choose Us?
          </Link>
        </div>
        <div className="cards grid grid-flow-col pt-16 w-full  grid-cols-1 md:grid-rows-2 grid-rows-4 md:grid-cols-2 place-items-center gap-8">
          {cards.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollAnimation initialOptions={(index+1)%4==2 ? {y:-40}:{y:40}} animatedOptions={{y:0}} key={item.heading + index} className="rounded-sm p-4  flex flex-col gap-3 items-center border-2 border-[#1C4177]/10 shadow-lg relative">
                <div className="absolute top-0 -translate-y-1/2 bg-slate-100 px-1 left-1/2 -translate-x-1/2">
                <Icon {...item.iconProps} />
                </div> 
                <h1 className="text-[#24B3DA] font-extrabold text-3xl mt-3">{item.title}</h1>
                <h2 className="text-[#1C4177] font-semibold text-xl">{item.heading}</h2>
                <p className="text-base md:text-lg  text-[#1C4177]">{item.description}</p>
              </ScrollAnimation>
            );
          })}
        </div>
      </ScrollAnimation>
  )
}

export default AboutSection
