import ProjectCard from "./ProjectCard";
import ReactIcon from "./icons/ReactIcon";
import SupabaseIcon from "./icons/SupabaseIcon";
import TypescriptIcon from "./icons/TypescriptIcon";

export default function SideProjectList() {
  return (
    <>
      <ProjectCard image="/myfakecommerce.png" title="Nextjs FakeCommerce" linkToProject="https://myfakecommerce.vercel.app/">
        <ReactIcon />
        <TypescriptIcon />
        <SupabaseIcon />
      </ProjectCard>
    </>
  );
}
