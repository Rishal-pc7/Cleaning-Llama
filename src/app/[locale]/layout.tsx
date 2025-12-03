import type { Metadata } from "next";
import { Manrope,Urbanist, Scheherazade_New } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import WhatsappButton from "@/components/Footer/WhatsappButton";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";



const manrope = Manrope({
  variable: "--font-manrope",
  weight: ['400', '500', '600','700'],
  subsets:['latin'] 
});
const urbanist = Urbanist({
  variable: "--font-urbanist",
  weight: ['400', '500', '600','700',"800"],
  subsets:['latin'] 
});
const scheherazade_new=Scheherazade_New({
  variable:"--font-scheherazade-new",
  weight:['400','500','600','700'],
  subsets:['arabic']
})
export const metadata: Metadata = {
  title: "Llama Cleaning",
  description: "Saudi Arabia's premier cleaning service. 30 years, 25,000 happy clients, and professional Indian teams. Get your reliable, detailed cleaning quote today.",
  icons: {
    icon: "/icon.png",
  },
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
   params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;
  if(!hasLocale(routing.locales,locale)){
    notFound()
  }
  
  const classNames=locale=="en" ? `${manrope.variable}  font-manrope en_h1` : `${scheherazade_new.variable} font-scheherazade-new`
  return (

    <html>
      <body
        className={`${classNames} ${urbanist.variable} relative overflow-x-hidden antialiased bg-slate-100`}>
        <NextIntlClientProvider>
        <Navbar locale={locale}/>
        {children}
        <WhatsappButton locale={locale}/>
        <Footer locale={locale}/>
        </NextIntlClientProvider>  
      </body>
    </html>
  );
}
