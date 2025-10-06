import { use } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { projects } from "../data/projects";
import Project from "./Project";

const Projects = () => {
  const theme = use(ThemeContext);
  return (
    <div
      id="projectsSection"
      className={`py-10 ${theme?.theme ? "" : "bg-transparent"}`}
    >
      <div className="sm:mt-10 flex flex-col items-center gap-10">
        <h2 className="text-center text-4xl xl:text-5xl text-[#ff6600] font-bold">
          PROJECTS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 px-5 sm:px-4 xl:px-6">
          {projects.map((project) => (
            <Project key={project.title} project={project} theme={theme} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
