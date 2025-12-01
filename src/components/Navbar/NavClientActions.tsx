'use client';
import { usePathname, useRouter } from '@/i18n/navigation';
import { Globe } from 'lucide-react';
import { useLocale } from 'next-intl';
import { useEffect, useState } from 'react';
export function LangButton({val,classes}:{val:string,classes:string}) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const switchLocale = (newLocale: string) => {
  if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
      router.refresh();
    }
  };
  return (
    <button onClick={()=>switchLocale(val)} className={`${classes} ${locale=="ar" &&"font-urbanist"} mr-2 md:mr-0 text-[#24B3DA]/80 gap-2 font-semibold text-lg items-center`}>
     <Globe size={20} className='text-[#24B3DA]/80' strokeWidth={3} />
     {locale=="ar"?" EN":" العربية"}
    </button>
  )
}

export function  NavbarClient({children}:Readonly<{children:React.ReactNode}>){
  const [scroll,setScroll]=useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) { 
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return(
    <div className={`fixed z-20 ${scroll?"text-brandBlue":"text-white"} right-1/2 translate-x-1/2 min-w-[70%] md:min-w-[30%] h-10 md:h-10  backdrop-blur-lg bg-white/5 border border-white/30 rounded-xl shadow-lg top-4 flex justify-between`}>
     {children}
    </div> 
  )
}