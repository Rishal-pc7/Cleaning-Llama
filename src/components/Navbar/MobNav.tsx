import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '../ui/button'
import { Instagram,Mail,Menu } from 'lucide-react'
import Link from 'next/link'
import { Navlinks } from "./NavActions"

function MobNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="md:hidden ml-2 [&_svg:not([class*='size-'])]:size-6" variant="ghost"><Menu size={30} color='#24B3DA' strokeWidth={3}/></Button>
      </SheetTrigger>
      <SheetContent className="backdrop-blur-lg bg-white/5 border items border-white/30 text-white">
        <SheetHeader>
          <SheetTitle className="text-[#">Cleaning Lama</SheetTitle>
        </SheetHeader>
        <Navlinks classes="md:hidden flex flex-col gap-4 p-4 gap-2 md:p-0 h-[75%]"/>
      <SheetFooter className="bottom-10 flex justify-center flex-row">
        <Link href='/' className="p-2 rounded-3xl border-2 border-white"><Instagram/></Link>
        <Link href='/' className="p-2 rounded-3xl border-2 border-white"><Mail /></Link>
        <Link href='/' className="p-2 rounded-3xl border-2 border-white"><Instagram/></Link>
      </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default MobNav
