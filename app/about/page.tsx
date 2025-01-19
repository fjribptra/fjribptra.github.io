import React from "react";
import Skills from "../components/Skills";
import { LuLeaf } from "react-icons/lu";
import Image from "next/image";
import Subheading from "../components/Subheading";
import Link from "next/link";
import { Metadata } from "next";
import { MdOutlineFileDownload } from "react-icons/md";

export const metadata: Metadata = {
  title: "About",
};

const About = () => {
  return (
    <>
      <main className="dark:bg-gray-950 dark:text-white">
        <div className="max-w-3xl mx-auto pt-16 flex flex-col gap-5 p-3">
          <h1 className="text-3xl font-semibold">About me</h1>
          <p className="text-justify">
            I&apos;m <strong>Fajri</strong> Bagja Putra. A graduate of SMKN 2 Cikarang Barat, majoring in Computer and Network Engineering, class of 2025. I&apos;m passionate about web development and design. Familiar with modern Front End and Back End framework such as NextJS ( ReactJS ) and Node JS using Javascript or Typescript. Fundamental
            understanding of mobile first design concepts, API implemetation and search engine optimization (SEO). I&apos;m always eager to take on new challenges and collaborate on exciting projects.
          </p>
          <Skills />
          <div className="flex justify-between items-center">
            <Subheading title="Careers" description="My professional work journey">
              <LuLeaf />
            </Subheading>
            <Link className="px-3 py-1 border border-black dark:border-white rounded-lg flex justify-center items-center gap-1 text-sm" href={"/file/cv.pdf"} target="_blank">
              <MdOutlineFileDownload />
              <p className="text-xs">Download Resume</p>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Link href="https://www.edunesia.net" target="_blank" className="dark:bg-slate-800 flex flex-col gap-3 p-5 rounded-lg border border-slate-500">
              <div className="flex gap-5">
                <div>
                  <Image className="w-[50px] h-[50px]" src="/edunesia_logo.jpeg" alt="edunesia" width={400} height={400} />
                </div>
                <div>
                  <h2 className="text-sm font-semibold">PT Edunesia Insan Cerdas</h2>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Frontend Developer - Internship</p>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Des 2023 - Jun 2024</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-600 line-clamp-5 hover:line-clamp-none dark:text-slate-300">
                  Edunesia is an educational platform that serves as a home for formal and non-formal institutions, catering to students, university students, and the entire Indonesian community, enabling them to utilize digital or
                  interactive online learning to enhance their knowladge, skills, and educational levels, thereby contributing towards building a smarter and more superior nation
                </p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
