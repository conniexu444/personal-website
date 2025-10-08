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
    id: "lyrical-libations",
    title: "Lyrical Libations",
    description: "Lyrical Libations is a website I built for my intensely talented friends, Coco and Gaby. They are two artists who live in NYC. Their primary goal is to make classical music more accessible and they do a beautiful concert series in different local bars in New York City. The website is meant to be playful and fun.",
    technologies: ["TypeScript", "HTML", "CSS"],
    link: "https://lyrical-libations.vercel.app/",
    github: "https://github.com/conniexu444/lyrical-libations",
    image: "/projects/spending-tracker.svg",
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
  {
    id: "mta-wrapper",
    title: "NYC MTA API",
    description: "A Go-based API that transforms MTA's complex GTFS data into clean, readable JSON endpoints. Features include route and station-based queries, directional filtering, and intelligent 'Did you mean' suggestions for misspelled station names.",
    technologies: ["Go", "GTFS", "REST API"],
    link: "https://conniexu444.github.io/mta-wrapper/",
    github: "https://github.com/conniexu444/mta-wrapper",
    image: "/projects/mta-wrapper.svg",
  },
];

export default projectElements;
