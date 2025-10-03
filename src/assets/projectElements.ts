export interface ProjectElement {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
}

const projectElements: ProjectElement[] = [
  {
    id: "mta-wrapper",
    title: "MTA GTFS Wrapper",
    description: "A Go-based API that transforms MTA's complex GTFS data into clean, readable JSON endpoints. Features include route and station-based queries, directional filtering, and intelligent 'Did you mean' suggestions for misspelled station names.",
    technologies: ["Go", "GTFS", "REST API"],
    link: "https://github.com/conniexu444/mta-wrapper",
    github: "https://github.com/conniexu444/mta-wrapper",
    image: "/projects/mta-wrapper.svg",
  },
  {
    id: "spending-tracker",
    title: "Spending Tracker",
    description: "A budget tracking web application that helps users monitor their expenses and manage their finances. Built with modern web technologies and deployed on GitHub Pages.",
    technologies: ["React", "TypeScript", "Vite"],
    link: "https://conniexu444.github.io/spending-tracker/",
    github: "https://github.com/conniexu444/spending-tracker",
    image: "/projects/spending-tracker.svg",
  },
];

export default projectElements;
