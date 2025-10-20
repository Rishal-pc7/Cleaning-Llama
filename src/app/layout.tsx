import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";




const poppins = Poppins({
  variable: "--font-poppins",
  weight: ['400', '500', '600','700'],
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
        className={`${poppins.variable} font-poppins  antialiased bg-slate-100`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
