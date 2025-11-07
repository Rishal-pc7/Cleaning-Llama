import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import React, { useMemo } from 'react'
import { ServiceCarousel } from './ServiceCarousel';
import { ScrollAnimation } from './Template';
import { useTranslations } from 'next-intl';
function ServiceSection({locale}:{locale:string}) {
  const t=useTranslations("home")
  const servicesData = [
    {
      image: "/furniture-cleaning.png",
      heading: t('service1_heading'),
      description:t('service1_subheading')
    },
    {
      image: "/hourly.png",
      heading: t('service2_heading'),
      description:t('service2_subheading')
    },
    {
      image: "/rehabilitation.png",
      heading: t('service3_heading'),
      description:t('service3_subheading'),
    },
    {
      image: "/pest.png",
      heading: t('service4_heading'),
      description:t('service4_subheading'),
    },
    {
      image: "/home-maintainance.png",
      heading: t('service5_heading'),
      description:t('service5_subheading'),
    },
    {
      image: "/ac-cleaning.png",
      heading: t('service6_heading'),
      description:t('service6_subheading'),
    },
    {
      image: "/furniture.png",
      heading: t('service7_heading'),
      description:t('service7_subheading'),
    },
  ];
  
  const services = useMemo(() => servicesData, []);
  return (
    <ScrollAnimation initialOptions={{y:-40}} animatedOptions={{y:0}} className="services flex flex-col items-center  text-center min-h-screen gap-10 pt-10 pb-8 relative">
        <div className="heading z-10 flex flex-col gap-4">
          <h1 className="font-extrabold text-xl md:text-2xl text-brandBlue">{t('services_heading')}</h1>
          <h4 className="font-semibold text-base md:text-xl text-brandCyan">{t('services_subheading')}</h4>
        </div>
        <ServiceCarousel display="md:hidden" services={services} />
    <div className="hidden md:flex cards gap-x-5 flex-wrap gap-y-8  w-full justify-center place-items-center-safe z-10 p-5">
          {services.map((item, index) => (
            <ScrollAnimation  initialOptions={{y:40}} className='basis-[30%]' animatedOptions={{y:0}} key={item.heading + index}>
            <Card className="rounded-md bg-white border-[3px] border-white p-0">
              <CardContent className="p-0 ">
                <Image
                  src={item.image}
                  alt={item.heading}
                  className="rounded-t-md aspect-[5/4] object-center h-1/2 w-full object-cover"
                  width={600}
                  height={480}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
                <div className="content p-4 grid gap-3">
                  <h1 className="font-extrabold  text-2xl md:text-xl text-brandCyan">{item.heading}</h1>
                  <h2 className="font-semibold text-base  text-brandBlue">{item.description}</h2>
                </div>
              </CardContent>
            </Card>
            </ScrollAnimation>
          ))}
        </div>
        </ScrollAnimation>
  )
}

export default ServiceSection
