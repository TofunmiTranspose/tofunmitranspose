import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { skills } from "../data/skills";
import type { Skill } from "../data/skills";

const Skills = () => {
  const { theme } = useTheme();

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 30 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 12,
      },
    },
  };

  return (
    <div id="skills" className="py-12 font-inter text-white">
      <h2
        className={`text-4xl font-bold text-center mb-12 ${
          theme ? "text-white" : "text-gray-800"
        }`}
      >
        My Tech Stack
      </h2>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill: Skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{
                  scale: 1.08,
                  boxShadow: theme
                    ? "0 0 20px rgba(64, 218, 185, 0.3)"
                    : "0 0 15px rgba(199, 162, 0, 0.53)",
                }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                  theme
                    ? "bg-gray-800 hover:bg-transparent shadow-white/10 shadow"
                    : "shadow text-black hover:bg-transparent"
                }`}
              >
                {typeof Icon.type === "string" ? (
                  Icon
                ) : (
                  <Icon.type
                    className="text-6xl mb-4 transition-transform"
                    style={{
                      color: theme
                        ? skill.color
                        : skill.color2
                        ? skill.color2
                        : skill.color || "",
                    }}
                  />
                )}
                <p className="text-sm font-medium text-center">{skill.name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
