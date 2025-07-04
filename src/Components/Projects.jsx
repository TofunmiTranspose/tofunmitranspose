import React, { useContext } from "react";
import { assets } from "../assets/assets.jsx";
import { ThemeContext } from "../App.jsx";

const Projects = () => {
  return (
    <div>
      <div className="sm:mt-10 flex flex-col items-center gap-10">
        <h2
          id="projectsSection"
          className="text-center text-xl text-[#ff6600] font-bold"
        >
          PROJECTS
        </h2>
        <div className="flex flex-wrap gap-5 w-full items-baseline justify-center">
          <Project
            title="Fullstack School Web App"
            src={assets.school}
            href="https://holy-child.vercel.app/"
            description="React.js, Tailwind CSS, Firebase"
          />
          <Project
            title="SailTrue shipping tracker"
            src={assets.sail}
            href="https://sail-true.vercel.app/"
            description="React, Tailwind CSS"
          />
          <Project
            title="Freelance Portfolio"
            src={assets.chakraPortfolio}
            href="https://crypto-dashboard-gilt-one.vercel.app/"
            description="React, Chakra-ui, Tailwind CSS"
          />
          <Project
            title="Crypto Dashboard App"
            src={assets.dashBoard}
            href="https://crypto-dashboard-gilt-one.vercel.app/"
            description="React, API, Tailwind CSS, Chart.js"
          />
          <Project
            title="Todo App with Firebase Database"
            src={assets.firebase}
            href="https://tofunmitranspose.github.io/firebase-todo/"
            description="React, Firebase"
          />
          <Project
            title="Landing Page for Branding"
            src={assets.brand}
            href="https://tofunmitranspose.github.io/brand/"
            description="HTML-5, Tailwind CSS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

export const Project = ({ title, src, href, description }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`p-3 shadow-xl rounded-lg ${
        theme
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
