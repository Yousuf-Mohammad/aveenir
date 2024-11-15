import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import Navbar from "@/component/Navbar/Navbar";
// import Menu from "@/component/Menu/Menu";
// import Footer from "@/component/Footer/Footer";
// import Navbar from "@/component/Navbar/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const Bebas = localFont({
  src: "./fonts/BebasNeue-Regular.ttf",
  variable: "--font-bebas",
  weight: "100 900",
});

const Helvetica = localFont({
  src: "./fonts/HelveticaNowDisplay-Regular.ttf",
  variable: "--font-helvetica",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Aveenir",
  description: "Aveenir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${Bebas.variable} ${Helvetica.variable}antialiased`}
      >
        {/* <Menu/> */}
       
        {children}
        {/* <Footer/>  */}
      </body>
    </html>
  );
}
