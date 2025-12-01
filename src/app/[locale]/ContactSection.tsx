import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ScrollAnimation } from './Template'
import { useTranslations } from 'next-intl'

function ContactSection({locale}:{locale:string}) {
  const t=useTranslations("contact")
  return (
    <div className="contact flex md:flex-nowrap flex-wrap   md:h-[600px] h-auto gap-10 px-5 md:px-20 py-20 relative">

          <div className='basis-full md:w-1/2 h-80 md:h-96 relative'>
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.340527455425!2d46.72358527514589!3d24.680818178046973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f04739fdea859%3A0xcb92fd777923f2b3!2s6087%20Salah%20Ad%20Din%20Al%20Ayyubi%20Rd%2C%20Az%20Zahra%2C%20Riyadh%2012812%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1763640431630!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  className="w-full h-full"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shop Location"
              />
            </div>
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
