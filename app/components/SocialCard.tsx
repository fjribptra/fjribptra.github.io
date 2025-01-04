"use client";

import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

interface SocialCardProps {
  children: React.ReactNode;
  title: string;
  description: string;
  buttonColor: string;
  iconColor: string;
  linkTo: string;
}

const SocialCard = ({ children, title, description, buttonColor, iconColor, linkTo }: SocialCardProps) => {
  return (
    <div className={`bg-slate-100 grid grid-cols-3 p-5 rounded-lg border`}>
      <div className="flex flex-col justify-between gap-5 col-span-2">
        <h2 className="text-xl">{title}</h2>
        <p className="text-sm">{description}</p>
        <Link className={`${buttonColor} py-2 px-4 text-white rounded-lg w-fit cursor-poiter text-sm flex gap-3 justify-center items-center`} href={linkTo} target="_blank">
          Go to {title} <FaArrowRightLong />
        </Link>
      </div>
      <div className={`text-6xl ${iconColor} flex flex-col justify-end items-end`}>{children}</div>
    </div>
  );
};

export default SocialCard;
