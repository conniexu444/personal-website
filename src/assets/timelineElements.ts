
export interface TimelineElement {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  tags?: string[];
}

const timelineElements: TimelineElement[] = [
  {
    id: "microsoft-swe2",
    title: "Software Engineer 2",
    company: "Microsoft",
    location: "New York, NY",
    startDate: "Aug 2024",
    endDate: "Present",
    description: "Working on GraphRAGs and building innovative solutions to enhance LLM capabilities with graph-based retrieval augmented generation.",
    tags: ["C#", ".NET", "Distributed Systems"],
  },
  {
    id: "microsoft-swe1",
    title: "Software Engineer",
    company: "Microsoft",
    location: "New York, NY",
    startDate: "Feb 2022",
    endDate: "Aug 2024",
    description: "to be added",
  },
  {
    id: "jpmc-intern",
    title: "Software Engineer Intern",
    company: "JPMorgan Chase",
    location: "Jersey City, NJ",
    startDate: "Month Year",
    endDate: "Month Year",
    description: "to be added",
  },
];

export default timelineElements;