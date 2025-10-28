import type { Metadata } from "next";
import { Manrope,Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";



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

export const metadata: Metadata = {
  title: "Llama Cleaning",
  description: "Saudi Arabia's premier cleaning service. 30 years, 25,000 happy clients, and professional Indian teams. Get your reliable, detailed cleaning quote today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${urbanist.variable} font-manrope  antialiased bg-slate-100`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
