import SocialIcons from "./components/SocialIcons";
import TypeWriterEffect from "./components/TypeWriterEffect";
import ProjectPagination from "./components/ProjectsPagination";
import ProjectListCards from "./components/ProjectListCards";
import NavBar from "./components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="dark:bg-slate-950 dark:text-white">
      <NavBar/>
      <div className="max-w-3xl mx-auto mt-16 flex flex-col gap-5 p-3">
        <div className="flex justify-start items-center gap-5">
          <Image className="rounded-full" src={`/pajri.jpg`} alt='' width={120} height={120} />
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
