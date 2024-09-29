import ProjectCard from "./ProjectCard";
import NextjsIcon from "./icons/NextjsIcon";
import ReactIcon from "./icons/ReactIcon";
import SupabaseIcon from "./icons/SupabaseIcon";
import TypescriptIcon from "./icons/TypescriptIcon";

export default function SideProjectList() {
  return (
    <>
      <ProjectCard category="E-Commerce" image="/myfakecommerce.png" title="Nextjs FakeCommerce" linkToProject="https://github.com/fjribptra/fakecommerce-nextjs">
        <NextjsIcon/>
        <TypescriptIcon />
        <SupabaseIcon />
      </ProjectCard>
    </>
  );
}
