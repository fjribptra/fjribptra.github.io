import ProjectCard from "./ProjectCard";
import CssIcon from "./icons/CssIcon";
import HtmlIcon from "./icons/HtmlIcon";
import WordpressIcon from "./icons/WordpressIcon";

export default function WorksProjectList() {
  return (
    <>
      <ProjectCard image="/edunesia_landingpage.png" title="Edunesia Landing Page" linkToProject="https://www.edunesia.net">
        <WordpressIcon/>
        <CssIcon />
        <HtmlIcon/>
      </ProjectCard>
    </>
  );
}
