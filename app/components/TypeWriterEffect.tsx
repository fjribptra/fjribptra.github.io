"use client";
import { Typewriter } from 'react-simple-typewriter'

export default function TypeWriterEffect() {
    return (
        <div className="text-2xl font-bold gradient-text sm:text-4xl lg:text-5xl">
             <Typewriter
            words={['Hello there, I\'m Fajri', 'Fullstack Web Developer']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
    )
}