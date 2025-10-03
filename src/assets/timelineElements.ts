
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
    title: "Software Engineer II",
    company: "Microsoft",
    location: "New York, NY",
    startDate: "Aug 2024",
    endDate: "Present",
    description: "Currently leading development in C#/.NET and Microsoft Azure for ingestion pipelines that span multiple microservices and a NoSQL backend, processing over 10 million daily events for Microsoft services and Fortune 500 clients. I've designed and built a greenfield performance and load testing tool, coordinating across three engineering teams to measure pipeline throughput by simulating API calls across microservices, Redis cache, and NoSQL storage. My work on strengthening CI/CD pipelines in Azure DevOps has significantly improved deployment reliability, and I've implemented schema and OData indexing enhancements that reduced query latency by 25% for downstream Copilot services. I also developed KQL dashboards and observability metrics that cut incident diagnosis time from 10 hours down to 2 hours, while collaborating with the customer success team to maintain 90% SLA compliance during on-call rotations. Additionally, I mentor junior engineers on distributed systems debugging and Azure development best practices.",
    tags: ["C#", ".NET", "Azure", "Microservices", "NoSQL", "CI/CD", "KQL", "Distributed Systems"],
  },
  {
    id: "microsoft-swe1",
    title: "Software Engineer I",
    company: "Microsoft",
    location: "New York, NY",
    startDate: "Feb 2022",
    endDate: "Aug 2024",
    description: "During my time as a Software Engineer I, I focused on optimizing and modernizing large-scale data infrastructure. I reduced service latency by 20% through strategic optimization of compute-heavy model pipelines, converting thousands of floating-point operations into pre-computed constants to improve CPU efficiency and cache usage. I enhanced the reliability of distributed file processing systems by implementing standardized logging, validation layers, and schema migrations, which accelerated root cause analysis during service incidents. A major achievement was modernizing data ingestion pipelines that process millions of customer events daily, migrating them to a new architecture with reusable, modular processors that enabled faster onboarding of new data sources. I developed and owned several new service components, including processors for embedding validation and ingestion job orchestration, while ensuring correctness and observability across object storage tables and downstream indexes.",
    tags: ["C#", ".NET", "Azure", "Distributed Systems", "Performance Optimization", "Data Pipelines"],
  },
  {
    id: "stevens-cs",
    title: "B.S. Computer Science",
    company: "Stevens Institute of Technology",
    location: "Hoboken, NJ",
    startDate: "Aug 2018",
    endDate: "Dec 2021",
    description: "Graduated with a Bachelor of Science degree in Computer Science, building a strong foundation in algorithms, data structures, software engineering, and systems design.",
    tags: ["Computer Science", "Algorithms", "Data Structures", "Software Engineering"],
  },
];

export default timelineElements;