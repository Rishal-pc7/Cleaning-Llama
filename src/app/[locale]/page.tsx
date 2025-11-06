import {MoveUpRight} from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import heroImg from "./hero-bg.webp";
import ContactSection from "./ContactSection";
import ServiceSection from "./ServiceSection";
import AboutSection from "./AboutSection";
import {Template} from "./Template";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import { useTranslations } from "next-intl";
export default function Home({params}:Readonly<{params:Promise<{ locale: string }>}>) {
  const {locale}=use(params)
  const t=useTranslations("home")  
  setRequestLocale(locale)
  
  return (
    <>
    
      <div className={`${locale=="ar"?"justify-end":"justify-start"}`+" relative h-[90vh] w-full flex pb-20 md:pb-0  items-end-safe md:items-center text-white"}>      
        <Image src={heroImg} placeholder="blur"  alt="Clean modern interior" className="absolute inset-0 md:object-cover  object-[63%] w-full h-full z-0"  fill  priority unoptimized  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"/>
        <div className="absolute inset-0 bg-black/30  z-10"></div>
        <Template className={`${locale=="ar"&&"items-end text-right "}`+" content md:p-5 p-3 z-10 flex flex-col gap-3 md:gap-5"}>
          <h1 className="font-bold text-xl md:text-4xl ">{t('hero_heading')}</h1>
          <h5 className={`${locale=="ar"?"md:text-2xl":"md:text-xl"}`+" font-medium text-base"}>{t('hero_subheading')}</h5>
          <Link href={"/contact"} className={`${locale=="ar"&&"justify-between"}`+" rounded-4xl bg-[#24B3DA] font-medium w-36 items-center  flex"}>
            <MoveUpRight className="w-1/4 bg-white p-2 h-full rounded-4xl text-[#1C4177]" />{" "}
            <span className="p-2 justify-self-end">{t('herolink')}</span>{" "}
          </Link>
        </Template>
      </div>
      <AboutSection/>
      <ServiceSection/>
      <ContactSection/>
    </>
  );
}