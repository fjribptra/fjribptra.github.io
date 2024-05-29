import SocialIcons from "./components/SocialIcons";
import TypeWriterEffect from "./components/TypeWriterEffect";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-5 justify-center items-center text-center w-full px-5 bg-black min-h-screen text-white">
        <TypeWriterEffect/>
        <p className="text-sm sm:text-md md:w-1/2">I&apos;m from Indonesia, passionate about web development and design. I&apos;m always eager to take on new challenges and collaborate on exciting projects. Let&apos;s connect and explore opportunities together</p>
        <h3 className="text-xs sm:text-sm">Connect With Me:</h3>
        <SocialIcons />
      </div>
    </main>
  );
}
