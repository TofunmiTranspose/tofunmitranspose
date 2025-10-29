export interface experienceType {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
}
export const experience: experienceType[] = [
  {
    title: "Frontend Assistant Team Lead",
    company: "InternPulse",
    location: "Remote",
    date: "May 2025 - July 2025",
    description: [
      "Led the Frontend track of 169 team members in COHORT-8, providing mentorship and technical guidance.",
      "Contributed to an intensive 8-week program covering Full-Stack development of Agricon (a web app connecting farmers with storage facilities).",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Holy Child School",
    location: "Ogun, Nigeria",
    date: "November 2024 - Present",
    description: [
      "Single-handedly developed a full-stack web application providing personalized, secure portals for students and teachers, enhancing school management, communication, and learning efficiency.",
    ],
  },
  {
    title: "Frontend Assistant Team Lead",
    company: "InternPulse",
    location: "Remote - Nigeria",
    date: "August 2025 - October 2025",
    description: [
      "Leading the Frontend track for 123 team members in COHORT-9, mentoring members and managing development tasks.",
      "Contributing to an intensive 8-week program covering Full-Stack development and leadership.",
    ],
  },
];
