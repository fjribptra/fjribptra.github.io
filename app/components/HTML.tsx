"use client"

import { useSelector } from "react-redux";
import { DarkState } from "../definitions";

interface HTMLProps {
    children: React.ReactNode
}

export default function HTML({children}: HTMLProps) {
    const isDarkMode = useSelector<DarkState, boolean>((state) => state.darkModeToggle.value);
    return (
        <html lang="en" className={isDarkMode ? 'dark' : 'light'}>
            <meta name="google-site-verification" content="BaZI1dEoU-chgF1oO_CktflBxhmfCnUEsop82e3DkL8" />
            {children}
        </html>
    )
}