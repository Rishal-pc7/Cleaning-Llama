import { Handshake, ShieldCheck, Sparkles, Users } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import heroImg from "./vision.png";
import { ScrollAnimation } from '../Template';
import { useTranslations } from 'next-intl';

export function WhyChooseUS() {
    const t=useTranslations("about")
    const cards = [
        {
            icon: Users,
            iconProps: { strokeWidth: 2, size: 30, color: "#24B3DA" },
            heading: t("chooseus1_heading"),
            description:t("chooseus1_desc")
        },
        {
            icon: Handshake,
            iconProps: { strokeWidth: 2, size: 30, color: "#24B3DA" },
            heading: t("chooseus2_heading"),
            description:t("chooseus2_desc")
        },
        {
            icon: Sparkles,
            iconProps: { strokeWidth: 2, size: 30, color: "#24B3DA" },
            heading: t("chooseus3_heading"),
            description:t("chooseus3_desc")
        },
        {
            icon: ShieldCheck,
            iconProps: { strokeWidth: 2, size: 30, color: "#24B3DA" },
            heading: t("chooseus4_heading"),
            description:t("chooseus4_desc")
        },
    ]
    
  return (
    <ScrollAnimation initialOptions={{y:40}} animatedOptions={{y:0}}>

       <div className='flex flex-col gap-3 p-8 md:p-20 w-full items-center justify-center'>
        <h1 className='text-[#24B3DA] font-extrabold text-3xl'>{t("chooseus_heading")}</h1>
        <div className="cards grid grid-flow-col pt-16 w-full  grid-cols-1 md:grid-rows-none grid-rows-4 md:grid-cols-4 place-items-center gap-8">
          {cards.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollAnimation initialOptions={{y:-40}} animatedOptions={{y:0}} key={item.heading + index} className="rounded-sm p-4  flex flex-col gap-3 items-center border-2 border-[#1C4177]/10 shadow-lg relative">
                <div className="absolute top-0 -translate-y-1/2 bg-slate-100 px-1 left-1/2 -translate-x-1/2">
                <Icon {...item.iconProps} />
                </div> 
                <h1 className="text-[#24B3DA] font-bold text-xl mt-3">{item.heading}</h1>
                <p className="text-base md:text-lg  text-[#1C4177] text-center">{item.description}</p>
              </ScrollAnimation>
            );
          })}
        </div>
    </div>
    </ScrollAnimation>
  )
}

export function OurStory() {
    const t=useTranslations("about")
    return (
        <ScrollAnimation initialOptions={{y:40}} animatedOptions={{y:0}}>
        <div className='flex flex-col gap-3 p-8 md:p-20  w-full items-center justify-center'>
            <h1 className='text-[#24B3DA] font-extrabold text-3xl'>{t('story_heading')}</h1>
            <h4 className='text-[#1C4177] text-center font-semibold text-lg'>{t('story_desc')}</h4>
        </div>
        </ScrollAnimation>
    )    
}
export function OurVisionandMission({locale}:{locale:string}){
    const t=useTranslations("about")
    return (
        <div className="relative grid auto-rows-min grid-rows-[.5fr_1fr] md:grid-rows-none md:grid-cols-2 p-8 md:p-20 gap-5 md:gap-10">
        <ScrollAnimation initialOptions={{x:-40}} animatedOptions={{x:0}} className={`${locale=="ar"?"md:order-2 items-end text-right":"md:order-1"}`+' md:h-[50vh] w-full flex flex-col gap-3 order-2'}>
            <h1 className='text-[#24B3DA] font-extrabold text-3xl'>{t("vision_heading")}</h1>
            <h4 className={`${locale=="ar"&&"text-right"}`+' text-[#1C4177] font-semibold text-lg'}>{t("vision_desc")}</h4>
            <h1 className='text-[#24B3DA] font-extrabold text-3xl'>{t("mission_heading")}</h1>
            <h4 className={`${locale=="ar"&&"text-right"}`+' text-[#1C4177] font-semibold text-lg'}>{t("mission_desc")}</h4>
        </ScrollAnimation>
        <ScrollAnimation initialOptions={{x:40}} animatedOptions={{x:0}} className={`${locale=="ar"?"md:order-1":"md:order-2"}`+' md:h-[50vh] w-full relative order-1'}>
            <Image src={heroImg} alt='Our Vision'  loading='lazy' className='h-full relative object-cover object-center' sizes="(max-width: 768px) 100vw, 50vw"/>
        </ScrollAnimation>
        </div>
    )
}
