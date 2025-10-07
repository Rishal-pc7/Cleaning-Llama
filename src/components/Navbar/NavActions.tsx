import { Globe } from "lucide-react";
import Link from "next/link";

export function Navlinks ({classes}:Readonly<{classes:string}>){
    return(
      <div className={`${classes}`}>
        <div className=" links flex flex-col md:flex-row  items-start md:items-center h-full w-full md:w-[60%] gap-5 md:gap-12 justify-center font-medium text-base">
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
      </div>
      <div className="buttons w-full md:w-[25%] h-full md:flex-row flex-col flex items-start md:items-center md:gap-8 justify-end pr-2">
      <Link href='' className='hidden md:flex gap-2 text-[#24B3DA] font-semibold text-lg items-center'><Globe size={20} className='' strokeWidth={3} color='#24B3DA'/> العربية</Link>
      <Link href='' className='rounded bg-[#1C4177] p-2 w-full md:w-auto text-center md:p-2 text-white'>Request A Quote</Link>
      </div>
        </div>
    )
}
