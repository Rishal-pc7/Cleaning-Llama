import { Link } from "@/i18n/navigation"
import { Whatsapp, XTwitter } from "../../../public/customSvgs/Icons"
import { Instagram, Mail } from "lucide-react"
import { useTranslations } from "next-intl"

function Footer({locale}:{locale:string}) {
  const t=useTranslations("footer")
  return (
    <div className="h-fit grid-rows-3 bg-white w-full rounded-t-4xl shadow-inner shadow-slate-200">
      <div className="flex flex-col md:flex-nowrap flex-wrap md:flex-row md:justify-between items-start md:h-64">
        <div className="contact-info flex flex-col items-center md:items-start w-full md:w-1/2 justify-center gap-6 p-8 md:p-16">
          <h2 className="font-semibold text-xl text-[#1C4177] mb-2 text-center md:text-start">{t("heading")}</h2>
          <div className="flex gap-6 md:gap-4 justify-center  text-[#1C4177]">
              <Link href="/" className="p-2 rounded-3xl border-2 border-[#1C4177] ">
                <Whatsapp className="w-6 h-6"/>
              </Link>
              <Link href="/" className="p-2 rounded-3xl border-2 border-[#1C4177] flex items-center">
                <XTwitter />
              </Link>
              <Link href="/" className="p-2 rounded-3xl border-2 border-[#1C4177]">
                <Mail />
              </Link>
              <Link href="/" className="p-2 rounded-3xl border-2 border-[#1C4177]">
                <Instagram />
              </Link>
            </div>
          </div>
        <div className={`${locale=="ar"?"items-center text-center":"items-center text-center"}`+" flex flex-col p-8 md:p-16 w-full md:w-1/2"}>
          <div className={`${locale=="ar"?"md:items-center":"md:items-start"}`+" flex flex-col gap-4 text-[#1C4177] items-center font-semibold text-xl"}>
           <h2 className="text-2xl font-bold">{t("quickLinks")}</h2> 
          <Link href="/" className="">{t("link1")}</Link>
          <Link href="/about" className="">{t("link2")}</Link>
          <Link href="/contact" className="">{t("link3")}</Link>
          </div>
      </div>
      </div>  
      <div className="brand text-center mb-10">
        <h1 className="font-extrabold text-5xl md:text-9xl font-urbanist text-[#1C4177]/20">Cleaning Llama.</h1>
      </div>
      <footer className="text-[#1C4177] flex flex-col items-center justify-center h-5 p-4">
        <div className="text-center">
          <p className="font-semibold text-base md:text-lg">© {t("copyright")}</p>
          </div>
        </footer>
    </div>
  )
}

export default Footer
