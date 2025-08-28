import { BiLogoTailwindCss } from "react-icons/bi";
import { FaGitAlt, FaGithub, FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { TbBrandTypescript } from "react-icons/tb";

const Skills = () => {
  return (
    <div
      id="skills"
      className="pt-4 bg-black backdrop-filter backdrop-blur h-35 flex flex-col items-center gap-5"
    >
      <h2 className="text-3xl text-white font-bold">Skills</h2>
      <div className="flex justify-around w-9/10">
        <FaHtml5 className="text-4xl text-[#ffa011]" />
        <IoLogoCss3 className="text-4xl text-[#258bff]" />
        <IoLogoJavascript className="text-4xl text-[#ffff00]" />
        <TbBrandTypescript className="text-4xl text-[#157bff]" />
        <FaReact className="text-4xl text-[#ff00ff]" />
        <FaGithub className="text-4xl text-white" />
        <FaGitAlt className="text-4xl text-[#ff6600]" />
        <BiLogoTailwindCss className="text-4xl text-[#00ffff]" />
      </div>
    </div>
  );
};

export default Skills;
