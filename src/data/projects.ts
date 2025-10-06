import agricon from "../assets/agricon.png";
import storelink from "../assets/storelink.png";
import ecommerce from "../assets/ecommerce.png";
import school from "../assets/school.jpg";
import sail from "../assets/sail.jpg";
import chakraPortfolio from "../assets/chakraPortfolio.jpg";
import dashBoard from "../assets/dashBoard.jpg";
import firebase from "../assets/firbase.jpg";
import brand from "../assets/brand.jpg";
import type { Project } from "../types/types";

export const projects: Project[] = [
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
