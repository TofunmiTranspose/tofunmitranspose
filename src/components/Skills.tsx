import { BiLogoTailwindCss } from "react-icons/bi";
import { FaGitAlt, FaGithub, FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { PiWebhooksLogoBold } from "react-icons/pi";
import {
  SiDaisyui,
  SiMui,
  SiNetlify,
  SiReacthookform,
  SiShadcnui,
  SiVercel,
} from "react-icons/si";
import {
  TbBrandFramerMotion,
  TbBrandNextjs,
  TbBrandRadixUi,
  TbBrandTypescript,
} from "react-icons/tb";
import { useTheme } from "../context/ThemeContext";
import rest from "../assets/restApi.png";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "#fa5c30ff" },
  { name: "CSS3", icon: <IoLogoCss3 />, color: "#1c8edfff" },
  { name: "JavaScript", icon: <IoLogoJavascript />, color: "#F7DF1E" },
  { name: "TypeScript", icon: <TbBrandTypescript />, color: "#3178C6" },
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Next Js", icon: <TbBrandNextjs />, color: "#7f8091" },
  { name: "GitHub", icon: <FaGithub />, color: "#777" },
  { name: "Git", icon: <FaGitAlt />, color: "#F05033" },
  { name: "Tailwind CSS", icon: <BiLogoTailwindCss />, color: "#06B6D4" },
  { name: "Framer Motion", icon: <TbBrandFramerMotion />, color: "#dd3dd0ff" },
  { name: "DaisyUI", icon: <SiDaisyui />, color: "#00C2BF" },
  { name: "React Hook Form", icon: <SiReacthookform />, color: "#ff619bff" },
  { name: "Shadcn UI", icon: <SiShadcnui />, color: "#4c69a7ff" },
  { name: "Radix UI", icon: <TbBrandRadixUi />, color: "#6b49a7ff" },
  { name: "Material UI", icon: <SiMui />, color: "#113cb1ff" },
  {
    name: "Zustand",
    icon: (
      <img
        src="https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg"
        className="size-16 mb-auto"
      />
    ),
  },
  { name: "Webhooks", icon: <PiWebhooksLogoBold />, color: "#4fff2cff" },
  { name: "Vercel", icon: <SiVercel />, color: "#000000" },
  { name: "Netlify", icon: <SiNetlify />, color: "#2fffc1ff" },
  {
    name: "Rest API",
    icon: <img src={rest} alt="" className="size-18 mb-auto" />,
    color: "#000000",
  },
];

const Skills = () => {
  const { theme } = useTheme();
  return (
    <div className=" min-h-scree py-12 font-inter text-white">
      <h2
        className={`text-4xl font-bold text-center mb-12 ${
          theme ? "text-white" : "text-gray-800"
        }`}
      >
        My Tech Stack
      </h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-6  rounded-lg   transition-all duration-300 transform hover:scale-105 ${
                theme
                  ? "bg-gray-900 hover:bg-gray-700 shadow-lg"
                  : "shadow text-black"
              }`}
            >
              {skill.icon.type === "img" ? (
                skill.icon
              ) : (
                <skill.icon.type
                  className="text-6xl mb-4"
                  style={{ color: skill.color || "" }}
                />
              )}
              <p className="text-sm font-medium text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
