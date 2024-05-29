import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex gap-3">
      <a href="https://linkedin.com/in/fjribptra" target="_blank" className="text-white bg-blue-500 p-1 rounded-md">
        <FaLinkedinIn />
      </a>
      <a href="https://instagram.com/fjribptra" target="_blank" className="text-white bg-fuchsia-500 p-1 rounded-md">
      <FaInstagram />
      </a>
      <a href="https://x.com/fjribptra" target="_blank" className="text-white bg-slate-600 p-1 rounded-md">
      <FaXTwitter />
      </a>
      <a href="https://github.com/fjribptra" target="_blank" className="text-white bg-slate-800 p-1 rounded-md">
      <FaGithub />
      </a>
    </div>
  );
}
