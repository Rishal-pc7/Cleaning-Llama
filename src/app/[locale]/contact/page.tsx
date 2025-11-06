import React, { use } from 'react'
import ContactForm from './ContactForm'
import { Template } from '../Template'
import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'

function Contact({params}:Readonly<{params:Promise<{ locale: string }>}>) {
  const t=useTranslations("contact")
  const {locale}=use(params)
  setRequestLocale(locale)
  return (
    <>
    <div className='w-full text-center h-[50vh]  bg-[#24B3DA]/45 flex justify-center items-center pb-0'>
    <Template>
      <h1 className='font-extrabold text-4xl md:text-6xl text-white'>{t("pageHeading")}</h1>
      </Template>
    </div>
    <ContactForm locale={locale}/>
    </>
  )
}

export default Contact
