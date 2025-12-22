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

export async function generateMetadata ({params}:Readonly<{params:Promise<{ locale: string }>}>): Promise<Metadata> {
  const {locale}=await params;
  const isEn= locale==="en"
  return {
    metadataBase: new URL("https://cleaningllamaksa.com/"),
    title: isEn ? "Cleaning Lama Riyadh" : "كلينينج لاما الرياض",
    description: isEn ? 
    "Saudi Arabia’s trusted home & facility experts. 30 years exp. We offer furniture cleaning, AC maintenance, pest control, hourly housekeeping and masjid cleaning services by professional Indian teams." :  
    "خبراء موثوقون في مجال خدمات المنازل والمرافق في المملكة العربية السعودية. خبرة 30 عامًا. نقدم خدمات تنظيف الأثاث، وصيانة مكيفات الهواء، ومكافحة الحشرات، وخدمات التنظيف بالساعة، وتنظيف المساجد، على أيدي فرق هندية محترفة.",
    keywords: isEn 
      ? [
            // Brand & Location
            'Cleaning Lama',
            'Cleaning Lama Riyadh',
            'Cleaning Services Riyadh',
            'Cleaning Services Saudi Arabia',
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
          'Masjid Cleaning Services',
    
           // "Rehabilitation" synonyms (What people actually search)
          'Rehabilitation Cleaning',
          'Post-construction cleaning',
          'Move-in Deep Cleaning',
    
          // Moving & Maintenance
          'Furniture Moving Service',
          'Home Maintenance Riyadh',
          'Handyman Services KSA',

          'Masjid Cleaning Services Riyadh',
          'Mosque Carpet Cleaning KSA',
          'Wudu Area Sanitization',
          'Prayer Hall Deep Cleaning',
        ]
      :[
          // Brand & Location
          'كلينينج لاما',
          'كلينينج لاما الرياض',
          'خدمات التنظيف الرياض',
          'خدمات التنظيف المملكة العربية السعودية',
          'إدارة المرافق المملكة العربية السعودية',

          // The "Maid" Replacements
          'خدمة التنظيف بالساعة',
          'التدبير المنزلي المحترف',
          'فرق التنظيف السكنية',
          'طاقم التنظيف الهندي الرياض',

          // Specific Services (High Value)
          'خدمة تنظيف الأثاث',
          'تنظيف الشوفا والسجاد',
          'تنظيف المكيفات الرياض',
          'صيانة المكيفات السبليت',
          'خدمات مكافحة الحشرات المملكة العربية السعودية',
          'مكافحة الصراصير والبق',
          'خدمات تنظيف المساجد',

          // "Rehabilitation" synonyms (What people actually search)
          'التنظيف التأهيلي',
          'تنظيف ما بعد البناء',
          'التنظيف العميق عند الانتقال',
          // Moving & Maintenance
          'خدمة نقل الأثاث',
          'صيانة المنازل الرياض',
          'خدمات الصيانة المملكة العربية السعودية',

          'خدمات تنظيف المساجد الرياض',
          'تنظيف سجاد المساجد المملكة العربية السعودية',
          'تعقيم مناطق الوضوء',
          'التنظيف العميق لصالة الصلاة',
        ]
    ,
    openGraph: {
      title: isEn ? "Cleaning Lama Riyadh" : 'كلينينج لاما الرياض',
      description: isEn 
        ? "أفضل خدمات التنظيف والصيانة في الرياض بأسعار تنافسية." 
        : "Professional cleaning and maintenance services in Riyadh.",
      url: `https://cleaningllamaksa.com/`,
      siteName: "Cleaning Lama Riyadh",
      locale: isEn ? 'en_US' : 'ar_SA', // Dynamically sets the language flag
      type: 'website',
      images: [
        {
          // Point this to your high-resolution logo
          url: `https://cleaningllamaksa.com/logo.png`, 
          width: 1200,
          height: 630,
          alt: 'Cleaning Lama Riyadh Logo',
        },
      ],
    },     
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
    alternates: {
      canonical: `https://cleaningllamaksa.com/`,
      languages: {
        'en-US': 'https://cleaningllamaksa.com/en',
        'ar-SA': 'https://cleaningllamaksa.com/',
      },
    },
  }
}

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
