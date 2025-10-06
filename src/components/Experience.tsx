import { useTheme } from "../context/ThemeContext";
import ExperienceCards from "./ExperienceCards";
import { experience } from "../data/experience";

const Experience = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme ? "transparent border-gray-700" : "transparent border-gray-300"
      } border-t min-h-screen py-12 font-inter text-white`}
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl font-bold text-center mb-12 ${
            theme ? "" : "text-gray-800"
          }`}
        >
          Experience
        </h2>

        <div className="flex flex-col gap-8">
          {experience.map((job, index) => (
            <ExperienceCards key={index} job={job} theme={theme} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
