import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="example flex gap-3 overflow-scroll">
      <a href="https://linkedin.com/in/fjribptra" target="_blank" className="text-white bg-blue-500 p-2 rounded-md text-sm flex justify-center items-center gap-2">
        <FaLinkedinIn />
        Connect
      </a>
      <a href="https://instagram.com/pajribp" target="_blank" className="text-white bg-fuchsia-500 p-2 rounded-md text-sm flex justify-center items-center gap-2">
      <FaInstagram />
      Follow
      </a>
      <a href="https://youtube.com/@pajribp" target="_blank" className="text-white bg-red-600 p-2 rounded-md text-sm flex justify-center items-center gap-2">
      <FaYoutube />
      Subscribe
      </a>
      <a href="https://github.com/fjribptra" target="_blank" className="text-white bg-slate-800 p-2 rounded-md text-sm flex justify-center items-center gap-2">
      <FaGithub />
      Follow
      </a>
    </div>
  );
}
