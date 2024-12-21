"use client"

import { useSelector } from "react-redux";
import { DarkState } from "../definitions";
import { useEffect } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

interface HTMLProps {
    children: React.ReactNode
}

export default function HTML({children}: HTMLProps) {
    const isDarkMode = useSelector<DarkState, boolean>((state) => state.darkModeToggle.value);
    // useEffect(() => {
    //     window.dataLayer = window.dataLayer || [];
    //     function gtag(){dataLayer.push(arguments);}
    //     gtag('js', new Date());

    //     gtag('config', 'G-MDR52L2RQP');
    // }, []);
    return (
        <html lang="en" className={isDarkMode ? 'dark' : 'light'}>
            <meta name="google-site-verification" content="BaZI1dEoU-chgF1oO_CktflBxhmfCnUEsop82e3DkL8" />
            <GoogleAnalytics gaId="G-MDR52L2RQP"/>
            {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-MDR52L2RQP"></script> */}
            {children}
        </html>
    )
}