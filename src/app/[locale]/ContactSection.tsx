import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ScrollAnimation } from './Template'
import { useTranslations } from 'next-intl'

function ContactSection({locale}:{locale:string}) {
  const t=useTranslations("contact")
  return (
    <div className="contact flex md:flex-nowrap flex-wrap   md:h-[600px] h-auto gap-10 px-5 md:px-20 py-20 relative">

          <Image src={"/contact.png"} className="h-auto" alt="Contact cleaning llama" width={600} height={300} loading='lazy' />
      <ScrollAnimation initialOptions={{x:-40}} animatedOptions={{x:0}} className={`${locale=="ar"?"items-end":"items-start"} md:h-full h-auto flex flex-col justify-center relative`} >
            <div className={`${locale=="ar"?"text-right items-end":"text-left"} flex flex-col gap-3`}>
              <h1 className="font-extrabold text-2xl md:text-3xl text-brandCyan ">{t('heading')}</h1>
              <h2 className="font-semibold text-lg md:text-xl text-brandBlue">{t('subheading')}</h2>
              <p className="font-medium text-base md:text-lg text-brandBlue">
               {t('desc1')}
              </p>
              <p className="font-medium text-base md:text-lg text-brandBlue">
                {t('desc2')}
              </p>
              <Link href={"/contact"} className="rounded-md mt-5 bg-brandCyan text-white p-2 font-semibold w-fit text-center text-lg ">
                {t('pageHeading')}
              </Link>
            </div>
         </ScrollAnimation>
        </div>
  )
}

export default ContactSection
