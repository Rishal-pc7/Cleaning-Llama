import { Link} from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import {LangButton} from "./NavClientActions";

export function Navlinks ({classes,locale}:Readonly<{classes:string,locale:string}>){
    const t=useTranslations("navbar")
    return(
      <div className={`${classes}`}>
        <div className={`${locale=="ar"?"md:flex-row-reverse items-end":"items-start"} links flex flex-col md:flex-row   md:items-center h-full w-full md:w-[60%] gap-5 md:gap-12 justify-center font-semibold text-base`}>
        <Link href='/' className={`hover:text-brandCyan`}>{t('navlink_1')}</Link>
        <Link href='/about' className={`hover:text-brandCyan`}>{t('navlink_2')}</Link>
        <Link href='/contact' className="hover:text-brandCyan">{t('navlink_3')}</Link>
      </div>
      <div className="buttons w-[2%] h-full md:flex-row flex-col flex items-start md:items-center md:gap-8 justify-end pr-2">
      <LangButton classes={"md:flex hidden"} val={locale=="ar"?"en":"ar"}/>  
      </div>
        </div>
    )
}