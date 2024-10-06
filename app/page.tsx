import SocialIcons from "./components/SocialIcons";
import TypeWriterEffect from "./components/TypeWriterEffect";
import ProjectPagination from "./components/ProjectsPagination";
import ProjectListCards from "./components/ProjectListCards";
import NavBar from "./components/NavBar";
import Image from "next/image";
import HtmlIcon from "./components/icons/HtmlIcon";
import SkillIcon from "./components/SkillIcon";
import CssIcon from "./components/icons/CssIcon";
import JavascriptIcon from "./components/icons/JavascriptIcon";
import TypescriptIcon from "./components/icons/TypescriptIcon";
import TailwindIcon from "./components/icons/TailwindIcon";
import NodejsIcon from "./components/icons/NodejsIcon";
import NextjsIcon from "./components/icons/NextjsIcon";
import ReactIcon from "./components/icons/ReactIcon";

export default function Home() {
  return (
    <main className="dark:bg-slate-950 dark:text-white">
      <NavBar/>
      <div className="max-w-3xl mx-auto pt-24 flex flex-col gap-5 p-3">
        <div className="flex justify-start items-center gap-5">
          <Image className="rounded-full" src={`/profile2.png`} alt='' width={120} height={120} />
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-2xl">Fajri Bagja Putra</h1>
            <h2 className="bg-blue-200 dark:bg-blue-700 w-fit">Fullstack Web Developer</h2>
          </div>
        </div>
        <div>
          <p>I&apos;m passionate about web development and design. Familiar with modern Front End and Back End framework such as NextJS ( ReactJS ) and Node JS using Javascript or Typescript. I&apos;m always eager to take on new challenges and collaborate on exciting projects . Let&apos;s connect and explore opportunities together.</p>
        </div>
        <SocialIcons/>
          <div className="">
            <h2 className="p-5 flex justify-center items-center">PORTFOLIO</h2>
            <div className="container bg-slate-100 dark:bg-slate-950 text-black mx-auto flex flex-col gap-7 justify-center items-center p-3 md:p-3 md:grid md:grid-cols-2 lg:grid-cols-2">
              <ProjectListCards/>
            </div>
          </div>
      <section className="flex flex-col gap-5">
        <h2>SKILLS</h2>
        <div className="flex gap-5 flex-wrap">
          <SkillIcon title="HTML">
          <HtmlIcon/>
          </SkillIcon>
          <SkillIcon title="CSS">
          <CssIcon/>
          </SkillIcon>
          <SkillIcon title="JAVASCRIPT">
          <JavascriptIcon/>
          </SkillIcon>
          <SkillIcon title="TYPESCRIPT">
          <TypescriptIcon/>
          </SkillIcon>
          <SkillIcon title="TAILWINDCSS">
          <TailwindIcon />
          </SkillIcon>
          <SkillIcon title="NODE.JS">
          <NodejsIcon />
          </SkillIcon>
          <SkillIcon title="REACT JS">
          <ReactIcon />
          </SkillIcon>
          <SkillIcon title="NEXT JS">
          <NextjsIcon />
          </SkillIcon>
        </div>
      </section>
      </div>


    {/* Projects Paginaiton Start */}
    {/* <ProjectPagination/> */}
    {/* Projects Pagination End */}

    {/* Projects List Start */}
    {/* <div className=" bg-blue-500 ">
      <div className="container mx-auto flex flex-col gap-7 justify-center items-center p-5 md:grid md:grid-cols-2 lg:grid-cols-3">
     <ProjectListCards/>
      </div>
     </div> */}
    {/* Projects List End */}
    </main>
  );
}
