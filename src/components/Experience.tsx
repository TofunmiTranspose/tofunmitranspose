import { useTheme } from "../context/ThemeContext";

const experience = [
  {
    title: "Frontend Assistant Team Lead",
    company: "InternPulse",
    location: "Remote",
    date: "May 2025 - July 2025",
    description: [
      "Led the Frontend track of 169 team members in COHORT-8, providing mentorship and technical guidance.",
      "Contributed to an intensive 8-week program covering Full-Stack development of Agricon ( a web app connecting farmers with storage facilities ).",
    ],
  },
  {
    title: "Full stack Developer",
    company: "Holy Child School",
    location: "Ogun Nigeria",
    date: "November 2024 - Present",
    description: [
      "Single-handedly developed full-stack web application providing personalized, secure portals for students and teachers, enhancing school management, communication, and learning efficiency.",
    ],
  },
  {
    title: "Frontend Assistant Team Lead",
    company: "InternPulse",
    location: "Remote - Nigeria",
    date: "August 2025 - Present (Expected Completion: October 2025)",
    description: [
      "Leading the Frontend track for 123 team members in COHORT-9, mentoriing team members.",
      "Contributing to an intensive 8-week program covering Full-Stack development and leadership.",
    ],
  },
];

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
            theme ? "" : " text-gray-800"
          }`}
        >
          Experience
        </h2>
        <div className={`flex flex-col gap-8 `}>
          {experience.map((job, index) => (
            <div
              key={index}
              className={`bg-gray-800 p-8 rounded-lg shadow-lg ${
                theme ? "" : "bg-transparent shado"
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3
                    className={`text-2xl font-semibold text-whit ${
                      theme ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {job.title}
                  </h3>
                  <p
                    className={`text-lg ${
                      theme ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {job.company}
                  </p>
                </div>
                <p
                  className={`text-md ${
                    theme ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {job.date}
                </p>
              </div>
              <p
                className={`mb-4 ${theme ? "text-gray-500" : "text-gray-400"}`}
              >
                {job.location}
              </p>
              <ul
                className={`list-disc list-inside space-y-2 text-gray-30 ${
                  theme ? "text-gray-300" : "text-gray-800"
                }`}
              >
                {job.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Experience;
