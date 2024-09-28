"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoIosMoon } from "react-icons/io";
import { MdOutlineLightMode } from "react-icons/md";
import LightDarkToggle from "./LightDartToggle";

export default function NavBar() {
    const router = useRouter()
  return (
    <nav className="flex justify-between bg-slate-200 dark:bg-slate-800 dark:text-white text-black p-5 border border-b-white border-t-0 border-x-0 fixed top-0 right-0 left-0">
      <div className="flex justify-center items-center gap-2">
      <h1 onClick={() => router.refresh()} className="font-bold cursor-pointer">@fjribptra</h1>
      <LightDarkToggle/>
      </div>
      <div className="flex gap-5">
        <Link href={'https://pajriblogs.vercel.app'}>Blog</Link>
      </div>
    </nav>
  );
}
