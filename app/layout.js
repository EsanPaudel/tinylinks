import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./componets/Header";
import localFont from 'next/font/local'
import Footer from "./componets/Footer";
import SessionWrapper from "./SessionWrapper";

const outfit = localFont({
  src: [
    {
    path:"./fonts/Outfit.ttf",
    }
  ]
})

export const metadata = {
  title: "TinyLinks | URL Shortner",
  description: "Ultimate solution for long urls",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body
        className={`antialiased ${outfit.className}`}
      >
        
        <SessionWrapper>
        <Header/>
        {children}
        <Footer/>
        </SessionWrapper>
      </body>
    </html>
  );
}
