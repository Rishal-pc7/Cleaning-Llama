import { Globe } from "lucide-react";
import Link from "next/link";

export function Navlinks ({classes}:Readonly<{classes:string}>){
    return(
      <div className={`${classes}`}>
        <div className=" links flex flex-col md:flex-row  items-start md:items-center h-full w-full md:w-[60%] gap-5 md:gap-12 justify-center font-semibold text-base">
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
      </div>
      <div className="buttons w-[2%] h-full md:flex-row flex-col flex items-start md:items-center md:gap-8 justify-end pr-2">
      <Link href='' className='rounded-md hidden md:flex gap-2 text-[#24B3DA]/90 font-semibold text-lg items-center   px-2'><Globe size={20} className='text-[#24B3DA]/90' strokeWidth={3} /> العربية</Link>
      </div>
        </div>
    )
}
