"use client";

import { useSelector } from "react-redux";
import { DarkState } from "../definitions";
import { useEffect } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { IsDarkMode } from "../functions/isDarkMode";

interface HTMLProps {
  children: React.ReactNode;
}

export default function HTML({ children }: HTMLProps) {

  // useEffect(() => {
  //     window.dataLayer = window.dataLayer || [];
  //     function gtag(){dataLayer.push(arguments);}
  //     gtag('js', new Date());

  //     gtag('config', 'G-MDR52L2RQP');
  // }, []);
  return (
    <html lang="en" className={IsDarkMode() ? "dark" : ""}>
      <meta name="google-site-verification" content="BaZI1dEoU-chgF1oO_CktflBxhmfCnUEsop82e3DkL8" />
      <GoogleAnalytics gaId="G-MDR52L2RQP" />
      {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-MDR52L2RQP"></script> */}
      {children}
    </html>
  );
}
