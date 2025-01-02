import Image from "next/image";
import ProjectCard from "./ProjectCard";
import CssIcon from "./icons/CssIcon";
import HtmlIcon from "./icons/HtmlIcon";
import JqueryIcon from "./icons/JqueryIcon";
import WordpressIcon from "./icons/WordpressIcon";

export default function WorksProjectList() {
  return (
    <>
      {/* <ProjectCard category="Landing Page"  image="/edunesia_landingpage.png" title="Edunesia Company Profile" linkToProject="https://www.edunesia.net">
        <WordpressIcon/>
        <CssIcon />
        <HtmlIcon/>
        <JqueryIcon/>
      </ProjectCard> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-white py-5 px-2">
        <div className="">
          <Image className="w-full h-full" src="/edunesia_landingpage.png" alt="edunesia" width={400} height={400}/>
        </div>
        <div className="flex flex-col gap-3">
            <p className="text-xs bg-slate-500 text-white py-1 px-3 rounded-full w-fit uppercase">intern</p>
            <h2 className="font-bold text-sm">Edunesia Company Profile</h2>
            <p className="text-xs">The project focuses on developing a detailed and informative company profile that covers all aspects of the business, including history, core values, products/services, and team structure. The profile will cater to potential clients, investors, and partners.</p>
        </div>
      </div>
    </>
  );
}
