import { CircleStar, Clock,  MapPin, Users } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import React, { useMemo } from 'react'
import { AnimatedCounter, ScrollAnimation } from './Template';
import { useTranslations } from 'next-intl';
function AboutSection({locale}:{locale:string}) {
  const t=useTranslations("home")
  const cardsData = [
    {
      icon: Clock,
      iconProps: { strokeWidth: 2, size: 30, color: "#24B3DA" },
      title: 30,
      suffix:"+",
      heading: t('aboutItem1_heading'),
      description:t('aboutItem1_subheading'),
    },
    {
      icon: CircleStar,
      iconProps: { strokeWidth: 2, size: 40, color: "#24B3DA" },
      title: 25000,
      suffix:"+",
      heading: t('aboutItem2_heading'),
      description:t('aboutItem2_subheading'),
    },
    {
      icon: Users,
      iconProps: { strokeWidth: 2, size: 40, color: "#24B3DA" },
      title: 50,
      suffix:"+",
      heading: t('aboutItem3_heading'),
      description:t('aboutItem3_subheading'),
    },
    {
      icon: MapPin,
      iconProps: { strokeWidth: 2, size: 40, color: "#24B3DA" },
      title: 100,
      suffix: "%",
      heading: t('aboutItem4_heading'),
      description:t('aboutItem4_subheading'),
    },
  ];
  const cards = useMemo(() => cardsData, []);
  return (
    <ScrollAnimation initialOptions={{y:-40}} animatedOptions={{y:0}} className="w-full text-center py-15 px-4 md:px-10 ">
        <div className="content grid gap-3 md:gap-5 place-items-center">
          <h4 className="font-semibold text-lg md:text-xl text-brandBlue">{t('aboutTitle')}</h4>
          <h1 className="font-extrabold text-xl md:text-3xl text-brandCyan">{t('about_heading')}</h1>
          <p className="md:w-[50%] text-base md:text-lg text-brandBlue">
            {t('about_description')}
          </p>
          <Link href={"/contact"} className="text-base md:text-lg text-brandBlue underline">
            {t('aboutlink')}
          </Link>
        </div>
        <div className="cards grid grid-flow-col pt-16 w-full  grid-cols-1 md:grid-rows-2 grid-rows-4 md:grid-cols-2 place-items-center gap-8">
          {cards.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollAnimation initialOptions={(index+1)%4==2 ? {y:-40}:{y:40}} animatedOptions={{y:0}} key={item.heading + index} className="rounded-sm p-4 w-full flex flex-col gap-3 items-center border-2 border-brandBlue/10 shadow-lg relative">
                <div className="absolute top-0 -translate-y-1/2 bg-slate-100 px-1 left-1/2 -translate-x-1/2">
                <Icon {...item.iconProps} />
                </div> 
                <AnimatedCounter to={item.title} suffix={item.suffix} className="text-brandCyan  font-extrabold text-3xl mt-3"></AnimatedCounter>
                <h2 className="text-brandBlue font-semibold text-xl">{item.heading}</h2>
                <p className="text-base md:text-lg  text-brandBlue">{item.description}</p>
              </ScrollAnimation>
            );
          })}
        </div>
      </ScrollAnimation>
  )
}

export default AboutSection
