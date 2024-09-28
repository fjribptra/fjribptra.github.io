"use client";
import { Typewriter } from 'react-simple-typewriter'

export default function TypeWriterEffect() {
    return (
        <div className="text-2xl font-bold gradient-text sm:text-4xl lg:text-6xl">
             <Typewriter
            words={['Fajri Bagja Putra', 'Fullstack Web Developer']}
            loop={true}
            cursor
            // cursorStyle=''
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
    )
}