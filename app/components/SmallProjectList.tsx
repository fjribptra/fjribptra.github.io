import ProjectCard from "./ProjectCard";
import HtmlIcon from "./icons/HtmlIcon";
import JavascriptIcon from "./icons/JavascriptIcon";
import TailwindIcon from "./icons/TailwindIcon";

export default function SmallProjectList() {
  return (
    <>
      <ProjectCard category="Utility" image="/filedownloader.png" title="File Downloader" linkToProject="https://online-file-downloaderr.vercel.app/">
      <JavascriptIcon/>
      <TailwindIcon/>
        <HtmlIcon/>
      </ProjectCard>
      <ProjectCard category="Utility" image="/qrscanner.png" title="Fast QR Scanner" linkToProject="https://fjribptra.github.io/qr-scanner">
      <JavascriptIcon/>
      <TailwindIcon/>
        <HtmlIcon/>
      </ProjectCard>
      <ProjectCard category="Utility" image="/qrgenerator.png" title="QR Generator" linkToProject="https://qr-generatorv2.vercel.app/">
      <JavascriptIcon/>
      <TailwindIcon/>
        <HtmlIcon/>
      </ProjectCard>
      {/* <ProjectCard image="/noteapp.png" title="Note App" linkToProject="https://fjribptra.github.io/note-app">
      <JavascriptIcon/>
        <CssIcon />
        <HtmlIcon/>
      </ProjectCard>
      <ProjectCard image="/colorslider.png" title="Color RGB Slider" linkToProject="https://fjribptra.github.io/rgb-slider">
      <JavascriptIcon/>
        <CssIcon />
        <HtmlIcon/>
      </ProjectCard>*/}
      <ProjectCard category="Utility"  image="/passwordgenerator.png" title="Random Password Generator" linkToProject="https://password-generatorv2.vercel.app/">
      <JavascriptIcon/>
      <TailwindIcon/>
        <HtmlIcon/>
      </ProjectCard>
      {/*<ProjectCard image="/todolist.png" title="To-do List App" linkToProject="https://fjribptra.github.io/to-do-list">
      <JavascriptIcon/>
        <CssIcon />
        <HtmlIcon/>
      </ProjectCard>
      <ProjectCard image="/counter.png" title="Counter" linkToProject="https://fjribptra.github.io/js-counter">
      <JavascriptIcon/>
        <CssIcon />
        <HtmlIcon/>
      </ProjectCard>
      <ProjectCard image="/drawingapp.png" title="Drawing App" linkToProject="https://fjribptra.github.io/drawing-app">
      <JavascriptIcon/>
        <CssIcon />
        <HtmlIcon/>
      </ProjectCard>
      <ProjectCard image="/backgroundchanger.png" title="Background Color Changer" linkToProject="https://fjribptra.github.io/rgb">
      <JavascriptIcon/>
        <CssIcon />
        <HtmlIcon/>
      </ProjectCard> */}
    </>
  );
}
