import SocialIcons from "./components/SocialIcons";
import TypeWriterEffect from "./components/TypeWriterEffect";
import ProjectPagination from "./components/ProjectsPagination";
import ProjectListCards from "./components/ProjectListCards";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar/>
      <div className="flex flex-col gap-5 justify-center items-center text-center w-full px-5 bg-black min-h-screen text-white">
        <TypeWriterEffect/>
        <p className="text-sm sm:text-md md:w-1/2">I&apos;m passionate about web development and design. Familiar with modern Front End and Back End  framework such as NextJS ( ReactJS ) and Node JS using Javascript or Typescript. I&apos;m always eager to take on new challenges and collaborate on exciting projects . Let&apos;s connect and explore opportunities together.</p>
        <h3 className="text-xs sm:text-sm">Connect With Me:</h3>
        <SocialIcons />
      </div>

    {/* Projects Paginaiton Start */}
    <ProjectPagination/>
    {/* Projects Pagination End */}

    {/* Projects List Start */}
    <div className=" bg-black ">
      <div className="container mx-auto flex flex-col gap-7 justify-center items-center p-5 md:grid md:grid-cols-2 lg:grid-cols-3">
     <ProjectListCards/>
      </div>
     </div>
    {/* Projects List End */}
    </main>
  );
}
