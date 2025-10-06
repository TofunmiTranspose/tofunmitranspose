import type { Dispatch } from "react";

export interface Project {
  title: string;
  description: string;
  src: any;
  href: string;
  techStack: string[];
}

export interface ProjectProps {
  theme: ThemeContextType | undefined;
  project: Project;
}
export type ThemeContextType = { theme: boolean; toggleTheme: Dispatch<any> };
