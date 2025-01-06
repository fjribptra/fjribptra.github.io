"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { LuTreePine } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import LightDarkToggle from './LightDarkToggle';

gsap.registerPlugin(useGSAP);


const BottomNavigation = () => {
  const container = useRef();
  const pathname = usePathname()
  const isActive = (href: string) => pathname === href

  useGSAP(
    () => {
        // gsap code here...
        gsap.from('.nav-container', { 
          y: 100, 
          duration: 1 ,
          scrollTrigger: {
            trigger: ".nav-container",
            scroller: "body",
            markers: true,
            scrub: 2
          }
        }); // <-- automatically reverted
    },
    
);

  return (
    <div ref={container.current}>
      <nav className="nav-container fixed bottom-5 left-0 right-0 mx-auto bg-slate-50 p-3 border w-fit flex justify-center items-center gap-5 rounded-lg">
        <Link className={`text-2xl border p-4 rounded-lg border-slate-300 ${isActive("/") ? 'bg-blue-200' : ''}`} href="/" data-tooltip-id="my-tooltip" data-tooltip-content="Home">
          <IoHomeOutline />
        </Link>
        <Link className={`text-2xl border p-4 rounded-lg border-slate-300 ${isActive("/about") ? 'bg-blue-200' : ''}`} href="/about" data-tooltip-id="my-tooltip" data-tooltip-content="About">
          <LuTreePine />
        </Link>
        {/* <button className="text-2xl border p-4 rounded-lg border-slate-300" data-tooltip-id="my-tooltip" data-tooltip-content="Toggle Theme">
          <MdOutlineWbSunny />
        </button> */}
        <LightDarkToggle className={'text-2xl border p-4 rounded-lg border-slate-300'}/>
        <Tooltip id="my-tooltip" />
      </nav>
    </div>
  );
};

export default BottomNavigation;
