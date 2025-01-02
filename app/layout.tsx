import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ReduxProvider from "./components/ReduxProvider";
import Footer from "./components/Footer";
import HTML from "./components/HTML";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fajri Bagja Putra - Fullsatck Web Developer, North Cikarang, West Java, Indonesia | Personal Profile",
  description: "I'm passionate about web development and design. Familiar with modern Front End and Back End  framework such as NextJS ( ReactJS ) and Node JS using Javascript or Typescript. Fundamental understanding of mobile first design concepts, API implemetation and search engine optimization (SEO). I'm always eager to take on new challenges and collaborate on exciting projects . Let's connect and explore opportunities together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ReduxProvider>
    <HTML>
      <body className={inter.className}>
        {children}
        <Footer/>
      </body>
    </HTML>
        </ReduxProvider>
  );
}
