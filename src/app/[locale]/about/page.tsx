import React, { use } from 'react'
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { OurStory, OurVisionandMission, WhyChooseUS } from './Sections';
import ContactSection from '../ContactSection';
import {Template} from '../Template';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

function About({params}:Readonly<{params:Promise<{ locale: string }>}>) {
  const t=useTranslations("about")
  const {locale}=use(params)
  setRequestLocale(locale)
  return (
    <>
    <div className='relative grid md:grid-cols-2 md:grid-rows-none grid-rows-2 w-full h-auto md:h-[90vh]  bg-[#24B3DA]/45 pt-28 md:pt-16 pb-0'>
      <Template className={`${locale =="ar"&&"items-end text-right md:order-2"} flex flex-col justify-center gap-5 basis-1/2 h-full px-8 md:px-16`}>
        <h1 className='font-extrabold text-[#1C4177] text-2xl'>{t("heading")}</h1>
        <h4 className='text-black/80 md:text-base font-semibold'>{t("desc1")}</h4>
        <Link href='/contact' className="rounded-lg bg-[#1C4177] font-semibold w-fit p-4 text-center text-base text-white">{t("link")}</Link>
      </Template>
      <div className={`${locale =="ar"&&"md:order-1"} flex justify-center min-h-[300px] relative`}>
        <Image src='/about.png' alt="About Us" className='relative object-cover z-10 w-full h-full' fill  loading='lazy' />
      </div>
    </div>
    <OurStory/>
    <OurVisionandMission locale={locale}/>
    <WhyChooseUS/>
    <ContactSection locale={locale}/>
    </>
  )
}

export default About
