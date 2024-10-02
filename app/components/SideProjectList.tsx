import ProjectCard from "./ProjectCard";
import NextjsIcon from "./icons/NextjsIcon";
import ReactIcon from "./icons/ReactIcon";
import SupabaseIcon from "./icons/SupabaseIcon";
import TypescriptIcon from "./icons/TypescriptIcon";

export default function SideProjectList() {
  return (
    <>
      <ProjectCard category="Listing Products" image="/thscatalog.png" title="Listing Product System" linkToProject="https://github.com/fjribptra/ths-catalog">
        <NextjsIcon/>
        <TypescriptIcon />
        <SupabaseIcon />
      </ProjectCard>
    </>
  );
}
