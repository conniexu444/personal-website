export interface ProjectElement {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

const projectElements: ProjectElement[] = [
  {
    id: "project-1",
    title: "Example Project",
    description: "A description of your project and what it does.",
    technologies: ["React", "TypeScript", "TailwindCSS"],
    github: "https://github.com/yourusername/project",
  },
];

export default projectElements;
