import { motion } from "framer-motion";
import type { experienceType } from "../data/experience";
import type { FC } from "react";

interface CardType {
  job: experienceType;
  theme: boolean;
}

const ExperienceCards: FC<CardType> = ({ job, theme }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={`p-8 rounded-lg shadow-lg ${
        theme ? "bg-gray-800" : "bg-transparent shadow-gray-300"
      }`}
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3
            className={`text-2xl font-semibold ${
              theme ? "text-white" : "text-gray-900"
            }`}
          >
            {job.title}
          </h3>
          <p className={`text-lg ${theme ? "text-gray-400" : "text-gray-500"}`}>
            {job.company}
          </p>
        </div>
        <p className={`text-md ${theme ? "text-gray-400" : "text-gray-500"}`}>
          {job.date}
        </p>
      </div>

      <p className={`mb-4 ${theme ? "text-gray-500" : "text-gray-400"}`}>
        {job.location}
      </p>

      <ul
        className={`list-disc list-inside space-y-2 ${
          theme ? "text-gray-300" : "text-gray-800"
        }`}
      >
        {job.description.map((point: string, i: number) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceCards;
