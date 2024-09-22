import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
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

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${Bebas.variable} antialiased`}
      >
        {/* <Navbar/> */}
        {children}
      </body>
    </html>
  );
}
