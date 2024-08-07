"use client"

import { useRouter } from "next/navigation"

export default function NotFoundBackButton() {
    const router = useRouter()
    return (
        <button className="bg-slate-800 text-white p-2 rounded w-[100px]" onClick={() => router.back()}>Back</button>
    )
}