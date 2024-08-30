import ProjectCard from "./ProjectCard";
import CssIcon from "./icons/CssIcon";
import HtmlIcon from "./icons/HtmlIcon";
import JavascriptIcon from "./icons/JavascriptIcon";

export default function SmallProjectList() {
  return (
    <div className="bg-black flex flex-col gap-7 justify-center items-center p-5">
      <ProjectCard image="/filedownloader.png" title="File Downloader" linkToProject="https://fjribptra.github.io/file-downloader">
      <JavascriptIcon/>
        <CssIcon />
        <HtmlIcon/>
      </ProjectCard>
      <ProjectCard image="/qrscanner.png" title="QR Scanner" linkToProject="https://fjribptra.github.io/qr-scanner">
      <JavascriptIcon/>
        <CssIcon />
        <HtmlIcon/>
      </ProjectCard>
      <ProjectCard image="/qrgenerator.png" title="QR Generator" linkToProject="https://fjribptra.github.io/qr-generator">
      <JavascriptIcon/>
        <CssIcon />
        <HtmlIcon/>
      </ProjectCard>
      <ProjectCard image="/noteapp.png" title="Note App" linkToProject="https://fjribptra.github.io/note-app">
      <JavascriptIcon/>
        <CssIcon />
        <HtmlIcon/>
      </ProjectCard>
      <ProjectCard image="/colorslider.png" title="Color RGB Slider" linkToProject="https://fjribptra.github.io/rgb-slider">
      <JavascriptIcon/>
        <CssIcon />
        <HtmlIcon/>
      </ProjectCard>
      <ProjectCard image="/passwordgenerator.png" title="Random Password Generator" linkToProject="https://fjribptra.github.io/password-generator">
      <JavascriptIcon/>
        <CssIcon />
        <HtmlIcon/>
      </ProjectCard>
      <ProjectCard image="/todolist.png" title="To-do List App" linkToProject="https://fjribptra.github.io/to-do-list">
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
      </ProjectCard>
    </div>
  );
}
