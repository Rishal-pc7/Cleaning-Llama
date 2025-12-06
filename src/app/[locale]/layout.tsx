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
  title: {default:"Cleaning Llama - Saudi Arabia's Trusted Cleaning Service",template:"%s | Cleaning Llama"},
  description: "Saudi Arabia’s trusted home & facility experts. 30 years exp. We offer furniture cleaning, AC maintenance, pest control, & hourly housekeeping by professional Indian teams.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  metadataBase: new URL("https://cleaningllamaksa.com/"),
  keywords: [
    // Brand & Location
    'Cleaning Llama',
    'Cleaning Services Riyadh',
    'Facility Management Saudi Arabia',
    
    // The "Maid" Replacements
    'Hourly Cleaning Service',
    'Professional Housekeeping',
    'Residential Cleaning Teams',
    'Indian Cleaning Staff Riyadh',

    // Specific Services (High Value)
    'Furniture Cleaning Service',
    'Sofa and Carpet Shampoo',
    'AC Cleaning Riyadh',
    'Split AC Maintenance',
    'Pest Control Services KSA',
    'Cockroach and Bed Bug Control',
    
    // "Rehabilitation" synonyms (What people actually search)
    'Rehabilitation Cleaning',
    'Post-construction cleaning',
    'Move-in Deep Cleaning',
    
    // Moving & Maintenance
    'Furniture Moving Service',
    'Home Maintenance Riyadh',
    'Handyman Services KSA'
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
