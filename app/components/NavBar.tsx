"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavBar() {
    const router = useRouter()
  return (
    <nav className="flex justify-between bg-slate-200 text-black p-5 border border-b-white border-t-0 border-x-0 fixed top-0 right-0 left-0">
      <h1 onClick={() => router.refresh()} className="font-bold cursor-pointer">@fjribptra</h1>
      <div className="flex gap-5">
        <Link href={'https://pajriblogs.vercel.app'}>Blog</Link>
      </div>
    </nav>
  );
}
