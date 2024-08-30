import ProjectCard from "./ProjectCard";
import ReactIcon from "./icons/ReactIcon";
import SupabaseIcon from "./icons/SupabaseIcon";
import TypescriptIcon from "./icons/TypescriptIcon";

export default function SideProjectList() {
  return (
    <div className="bg-black flex flex-col justify-center items-center p-5 gap-7">
      <ProjectCard image="/myfakecommerce.png" title="Nextjs FakeCommerce" linkToProject="https://myfakecommerce.vercel.app/">
        <ReactIcon />
        <TypescriptIcon />
        <SupabaseIcon />
      </ProjectCard>
    </div>
  );
}
