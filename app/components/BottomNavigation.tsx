"use client";

import Link from "next/link";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { LuTreePine } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";
import { Tooltip } from "react-tooltip";

const BottomNavigation = () => {
  return (
    <>
      <nav className="fixed bottom-5 left-0 right-0 xl:left-[45%] xl:right-[45%] mx-auto bg-slate-100 p-5 flex justify-center items-center gap-5 rounded-lg">
        <Link className="text-2xl" href="/" data-tooltip-id="my-tooltip" data-tooltip-content="Home">
          <IoHomeOutline />
        </Link>
        <Link className="text-2xl" href="/about" data-tooltip-id="my-tooltip" data-tooltip-content="About">
          <LuTreePine />
        </Link>
        <button className="text-2xl" data-tooltip-id="my-tooltip" data-tooltip-content="Toggle Theme">
          <MdOutlineWbSunny />
        </button>
        <Tooltip id="my-tooltip" />
      </nav>
    </>
  );
};

export default BottomNavigation;
