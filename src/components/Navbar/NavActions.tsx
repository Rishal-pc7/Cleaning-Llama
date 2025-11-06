import { Link} from "@/i18n/navigation";
import { Globe } from "lucide-react";
import { useTranslations } from "next-intl";

export function Navlinks ({classes}:Readonly<{classes:string}>){
    const t=useTranslations("navbar")
    
    
    
    return(
      <div className={`${classes}`}>
        <div className=" links flex flex-col md:flex-row  items-start md:items-center h-full w-full md:w-[60%] gap-5 md:gap-12 justify-center font-semibold text-base">
        <Link href='/'>{t('navlink_1')}</Link>
        <Link href='/about'>{t('navlink_2')}</Link>
        <Link href='/contact'>{t('navlink_3')}</Link>
      </div>
      <div className="buttons w-[2%] h-full md:flex-row flex-col flex items-start md:items-center md:gap-8 justify-end pr-2">
      <Link href='' className='rounded-md hidden md:flex gap-2 text-[#24B3DA]/90 font-semibold text-lg items-center   px-2'><Globe size={20} className='text-[#24B3DA]/90' strokeWidth={3} /> العربية</Link>
      </div>
        </div>
    )
}
