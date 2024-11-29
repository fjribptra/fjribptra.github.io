import ProjectCard from "./ProjectCard";
import CssIcon from "./icons/CssIcon";
import HtmlIcon from "./icons/HtmlIcon";
import JqueryIcon from "./icons/JqueryIcon";
import WordpressIcon from "./icons/WordpressIcon";

export default function WorksProjectList() {
  return (
    <>
      <ProjectCard category="Landing Page"  image="/edunesia_landingpage.png" title="Edunesia Company Profile" linkToProject="https://www.edunesia.net">
        <WordpressIcon/>
        <CssIcon />
        <HtmlIcon/>
        <JqueryIcon/>
      </ProjectCard>
    </>
  );
}
