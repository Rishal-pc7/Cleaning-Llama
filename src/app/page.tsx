import {MoveUpRight} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import heroImg from "./hero-bg.webp";
import ContactSection from "./ContactSection";
import ServiceSection from "./ServiceSection";
import AboutSection from "./AboutSection";
import {Template} from "./Template";
export default function Home() {
  return (
    <>
    
      <div className="relative h-[90vh] w-full flex pb-20 md:pb-0 items-end-safe md:items-center text-white">      
        <Image src={heroImg} placeholder="blur"  alt="Clean modern interior" className="absolute inset-0 object-cover  object-[63%] w-full h-full z-0"  fill  priority unoptimized  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"/>
        <div className="absolute inset-0 bg-black/30  z-10"></div>
        <Template className="content md:p-5 p-3 z-10 flex flex-col gap-3 md:gap-5">
          <h1 className="font-extrabold text-xl md:text-3xl">Expert Cleaning for Discerning Homes</h1>
          <h5 className="font-light text-base md:text-xl">We clean meticulously so you can enjoy sophisticated elegance.</h5>
          <Link href={"/contact"} className="rounded-4xl bg-[#24B3DA] font-medium w-36 text-center  flex items-center">
            <MoveUpRight className="w-1/4 bg-white p-2 h-full rounded-4xl text-[#1C4177]" />{" "}
            <span className="p-2">Book Now</span>{" "}
          </Link>
        </Template>
      </div>
      <AboutSection/>
      <ServiceSection/>
      <ContactSection/>
    </>
  );
}