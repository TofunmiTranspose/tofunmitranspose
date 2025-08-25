import { useContext } from "react";
import agricon from "../assets/agricon.png";
import storelink from "../assets/storelink.png";
import ecommerce from "../assets/ecommerce.png";
import school from "../assets/school.jpg";
import sail from "../assets/sail.jpg";
import chakraPortfolio from "../assets/chakraPortfolio.jpg";
import dashBoard from "../assets/dashBoard.jpg";
import firebase from "../assets/firbase.jpg";
import brand from "../assets/brand.jpg";
import { ThemeContext } from "../context/ThemeContext";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const projects = [
    {
      title: "Agricon - farmers/storage connect",
      src: agricon,
      href: "https://agricon.com.ng/",
      description: "React.js, Tailwind CSS",
    },
    {
      title: "SaaS project - Store in a link",
      src: storelink,
      href: "https://store-in-a-link.vercel.app/",
      description: "React.js, Tailwind CSS, TypeScript",
    },
    {
      title: "E-commerce Web App",
      src: ecommerce,
      href: "https://transpose-commerce.vercel.app/",
      description: "React.js, Tailwind CSS",
    },
    {
      title: "Fullstack School Web App",
      src: school,
      href: "https://holy-child.vercel.app/",
      description: "React.js, Tailwind CSS, Firebase",
    },
    {
      title: "SailTrue shipping tracker",
      src: sail,
      href: "https://sail-true.vercel.app/",
      description: "React, Tailwind CSS",
    },
    {
      title: "Freelance Portfolio",
      src: chakraPortfolio,
      href: "https://crypto-dashboard-gilt-one.vercel.app/",
      description: "React, Chakra-ui, Tailwind CSS",
    },
    {
      title: "Crypto Dashboard App",
      src: dashBoard,
      href: "https://crypto-dashboard-gilt-one.vercel.app/",
      description: "React, API, Tailwind CSS, Chart.js",
    },
    {
      title: "Todo App with Firebase Database",
      src: firebase,
      href: "https://tofunmitranspose.github.io/firebase-todo/",
      description: "React, Firebase",
    },
    {
      title: "Landing Page for Branding",
      src: brand,
      href: "https://tofunmitranspose.github.io/brand/",
      description: "HTML-5, Tailwind CSS",
    },
  ];
  return (
    <div className={`py-10 ${theme?.theme ? "bg-[#121212]" : "bg-[#f5f5f5]"}`}>
      <div className="sm:mt-10 flex flex-col items-center gap-10">
        <h2
          id="projectsSection"
          className="text-center text-xl text-[#ff6600] font-bold"
        >
          PROJECTS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 sm:px-0">
          {projects.map((project) => (
            <Project
              title={project.title}
              src={project.src}
              href={project.href}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

const Project = ({
  title,
  src,
  href,
  description,
}: {
  title: string;
  src: any;
  href: string;
  description: string;
}) => {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={`p-3 shadow-xl rounded-lg ${
        theme?.theme
          ? "bg-[#151515] text-[#ffffdc] shadow"
          : "bg-[#eeeedd] text-[#333333] shadow-black/50 shadow-xs"
      }
             hover:translate-y-[-5px] hover:shadow-lg
             transition-all duration-300 ease-in-out cursor-pointer`}
    >
      <img
        src={src}
        alt={title}
        className="rounded-md mb-3 object-cover w-full h-32"
      />
      <h3 className="text-lg mb-2 font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <div className="flex space-x-2 mt-3">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-green-600 font-medium hover:underline"
        >
          Live demo
        </a>
      </div>
    </div>
  );
};
