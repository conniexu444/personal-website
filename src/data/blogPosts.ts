export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "first-post",
    title: "My First Blog Post",
    date: "2025-10-06",
    excerpt: "Welcome to my blog! This is where I share my thoughts on software engineering, projects, and more.",
    tags: ["introduction", "meta"],
  },
  {
    id: "graphrags-explained",
    title: "Understanding GraphRAGs",
    date: "2025-10-05",
    excerpt: "A deep dive into GraphRAGs and how they enhance retrieval-augmented generation with graph-based context.",
    tags: ["AI", "GraphRAG", "LLM"],
  },
];
