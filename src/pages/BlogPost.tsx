import { useParams, Link, Navigate } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (post) {
      // Dynamically import the markdown file
      import(`../content/blog/${post.id}.md?raw`)
        .then((module) => {
          setContent(module.default);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error loading markdown:", error);
          setLoading(false);
        });
    }
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <main className="min-h-screen font-sans bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-700">
      <article className="max-w-4xl mx-auto p-6 pt-12">
        <Link
          to="/blog"
          className="inline-block mb-8 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          ← Back to Blog
        </Link>

        <header className="mb-8">
          <h1 className="text-5xl font-[var(--font-display)] mb-4">{post.title}</h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
          {post.tags && (
            <div className="flex gap-2 mt-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-neutral-200 dark:bg-neutral-800 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {loading ? (
          <div className="text-neutral-600 dark:text-neutral-400">Loading...</div>
        ) : (
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        )}
      </article>
    </main>
  );
}
