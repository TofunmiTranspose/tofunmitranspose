import { motion } from "framer-motion";
import type { FC } from "react";
import type { ProjectProps } from "../types/types";

const Project: FC<ProjectProps> = ({ project, theme }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      className="
       font-sans max-w-sm mx-auto
      bg-transparent rounded-xl shadow-lg overflow-hidden
      relative

    "
    >
      {/* Project Image */}
      <div className="relative w-full aspect-[8/5] rounded-t-xl overflow-hidden">
        <img
          src={project.src}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-100"
        />
      </div>

      <div className="px-5 py-3 flex flex-col justify-between flex-grow">
        <div className="mb-4">
          {/* Project Title */}
          <h3
            className={`text-lg md:text-2xl font-semibold ${
              theme ? "text-white" : "text-black"
            } mb-2 leading-tight`}
          >
            {project.title}
          </h3>
          {/* Project Description */}
          <p
            className={`${
              theme ? "text-white/60" : "text-black/70"
            } font-mono text-xs font-thin md:text-base mb-4`}
          >
            {project.description}
          </p>

          {/* Technology Stack Tags */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className={`${
                  theme ? "text-white/60 bg-gray-50/2" : "text-black/50"
                }  px-2 py-[1px] rounded-full text-[11px]
                border ${theme ? "border-white/10" : "border-black/10"}
                hover:bg-gray-700/30 hover:border-gray-400 hover:text-gray-200
                transition-all duration-300`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <a
          href={project.href}
          className="
            mt-auto inline-flex items-center self-start
            text-green-400 font-semibold font-mono
            transition-colors duration-300 hover:text-green-300
          "
          aria-label={project.title + " Demo"}
        >
          <span
            className="
            transition-transform duration-300 group-hover:translate-x-1
          "
          >
            View Demo
          </span>
          <span className="ml-2">&#8594;</span>
        </a>
      </div>
    </motion.div>
  );
};
export default Project;
