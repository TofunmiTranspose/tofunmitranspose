import { use } from "react";
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
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  src: any;
  href: string;
  techStack: string[];
}
const Projects = () => {
  const theme = use(ThemeContext);
  const projects: Project[] = [
    {
      title: "Agricon",
      src: agricon,
      href: "https://agricon.com.ng/",
      description: "A platform connecting farmers with storage solutions.",
      techStack: ["React.js", "Tailwind CSS", "Firebase"],
    },
    {
      title: "SaaS Project",
      description: "A scalable B2B platform for enterprise clients.",
      src: storelink,
      href: "https://store-in-a-link.vercel.app/",
      techStack: ["React.js", "Tailwind CSS", "TypeScript"],
    },
    {
      title: "E-commerce Web App",
      description: "A modern e-commerce platform with a clean user experience.",
      src: ecommerce,
      href: "https://transpose-commerce.vercel.app/",
      techStack: ["React.js", "Tailwind CSS"],
    },
    {
      title: "Fullstack School Web App",
      description: 'A professional school website for "Holy Child"',
      src: school,
      href: "https://holy-child.vercel.app/",
      techStack: ["React.js", "Tailwind CSS", "Firebase"],
    },
    {
      title: "SailTrue shipping tracker",
      description: "A shipping tracker for cargo ships",
      src: sail,
      href: "https://sail-true.vercel.app/",
      techStack: ["React", "Tailwind CSS"],
    },
    {
      title: "Freelance Portfolio",
      description:
        "A personal portfolio showcasing professional work and skills.",
      src: chakraPortfolio,
      href: "https://crypto-dashboard-gilt-one.vercel.app/",
      techStack: ["React", "Chakra-ui", "Tailwind CSS"],
    },
    {
      title: "Crypto Dashboard App",
      description: "A dashboard to track crypto prices",
      src: dashBoard,
      href: "https://crypto-dashboard-gilt-one.vercel.app/",
      techStack: ["React", "API", "Tailwind CSS", "Chart.js"],
    },
    {
      title: "Todo App with Firebase Database",
      description: "A simple todo app with firebase as the backend",
      src: firebase,
      href: "https://tofunmitranspose.github.io/firebase-todo/",
      techStack: ["React", "Firebase"],
    },
    {
      title: "Landing Page for Branding",
      description: "A simple landing page for a branding agency",
      src: brand,
      href: "https://tofunmitranspose.github.io/brand/",
      techStack: ["HTML-5", "Tailwind CSS"],
    },
  ];
  return (
    <div
      id="projectsSection"
      className={`py-10 ${theme?.theme ? "" : "bg-transparent"}`}
    >
      <div className="sm:mt-10 flex flex-col items-center gap-10">
        <h2 className="text-center text-2xl lg:text-3xl xl:text-5xl text-[#ff6600] font-bold">
          PROJECTS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 px-5 sm:px-4 xl:px-6">
          {projects.map((project) => (
            <Project
              key={project.title}
              title={project.title}
              src={project.src}
              href={project.href}
              description={project.description}
              techStack={project.techStack}
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
  techStack,
}: {
  title: string;
  src: any;
  href: string;
  description: string;
  techStack: string[];
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const theme = use(ThemeContext);
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
          src={src}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-100"
        />
      </div>

      <div className="px-5 py-3 flex flex-col justify-between flex-grow">
        <div className="mb-4">
          {/* Project Title */}
          <h3
            className={`text-lg md:text-2xl font-semibold ${
              theme?.theme ? "text-white" : "text-black"
            } mb-2 leading-tight`}
          >
            {title}
          </h3>
          {/* Project Description */}
          <p
            className={`${
              theme?.theme ? "text-white/60" : "text-black/70"
            } font-mono text-xs font-thin md:text-base mb-4`}
          >
            {description}
          </p>

          {/* Technology Stack Tags */}
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className={` ${
                  theme?.theme ? "text-white/60 bg-gray-50/2" : "text-black/50"
                }  px-2 py-[1px] rounded-full text-[11px]
                border ${theme?.theme ? "border-white/10" : "border-black/10"}
                hover:bg-gray-700/30 hover:border-gray-400 hover:text-gray-200
                transition-all duration-300`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Call to Action Button */}
        <a
          href={href}
          className="
            mt-auto inline-flex items-center self-start
            text-green-400 font-semibold font-mono
            transition-colors duration-300 hover:text-green-300
          "
          aria-label={title + " Demo"}
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
