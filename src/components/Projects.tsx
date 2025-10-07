import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectElements from "../assets/projectElements";

// Generate consistent color from string (same as Timeline)
function getTagColor(tag: string) {
  const colors = [
    { light: "bg-[var(--color-accent-1)] text-[var(--color-link)]", dark: "dark:bg-[var(--color-accent-1)]/30 dark:text-[var(--color-accent-1)]" },
    { light: "bg-[var(--color-accent-2)] text-[var(--color-link)]", dark: "dark:bg-[var(--color-accent-2)]/30 dark:text-[var(--color-accent-2)]" },
    { light: "bg-[var(--color-accent-3)] text-[var(--color-link)]", dark: "dark:bg-[var(--color-accent-3)]/30 dark:text-[var(--color-accent-3)]" },
    { light: "bg-[var(--color-accent-4)] text-[var(--color-link)]", dark: "dark:bg-[var(--color-accent-4)]/30 dark:text-[var(--color-accent-4)]" },
    { light: "bg-[var(--color-button)]/30 text-[var(--color-nav)]", dark: "dark:bg-[var(--color-button)]/30 dark:text-[var(--color-button)]" },
    { light: "bg-[var(--color-nav)]/20 text-[var(--color-nav)]", dark: "dark:bg-[var(--color-link)]/20 dark:text-[var(--color-link)]" },
  ];

  // Use tag string to generate consistent index
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash = tag.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % colors.length;

  return `${colors[index].light} ${colors[index].dark}`;
}

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [imagePosition, setImagePosition] = useState<number>(0);

  return (
    <div className="w-full relative">
      <h2 className="sr-only">Projects</h2>

      {/* Image Preview - Fixed on Right Side */}
      <AnimatePresence mode="wait">
        {hoveredProject && (
          <motion.div
            className="fixed right-4 w-48 z-40 pointer-events-none"
            style={{ top: imagePosition }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative aspect-[5/4] rounded-lg overflow-hidden">
              {/* Animated border trail */}
              <div className="absolute inset-0 rounded-lg">
                <div className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow opacity-75"
                     style={{
                       WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                       WebkitMaskComposite: 'xor',
                       maskComposite: 'exclude',
                       padding: '2px'
                     }}
                />
              </div>
              <img
                src={projectElements.find((p) => p.id === hoveredProject)?.image}
                alt={projectElements.find((p) => p.id === hoveredProject)?.title}
                className="w-full h-full object-cover relative z-10"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project List */}
      <div className="space-y-8">
        {projectElements.map((project) => (
          <div
            key={project.id}
            onMouseEnter={(e) => {
              setHoveredProject(project.id);
              const rect = e.currentTarget.getBoundingClientRect();
              setImagePosition(rect.top);
            }}
            onMouseLeave={() => setHoveredProject(null)}
            className="group"
          >
            <h3 className="text-2xl font-sans font-bold mb-3 text-neutral-900 dark:text-neutral-100 cursor-pointer transition-colors hover:text-neutral-600 dark:hover:text-neutral-400 tracking-tight">
              {project.title}
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 mb-3 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1 text-xs font-medium rounded-full ${getTagColor(tech)}`}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 text-sm">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  GitHub →
                </a>
              )}
              {project.link && project.link !== project.github && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  {project.link.includes('mta-wrapper') ? 'Documentation' : project.id === 'lyrical-libations' ? 'Live Site' : 'Live Demo'} →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
