import timelineElements from "../assets/timelineElements";

// Generate consistent color from string
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

export default function Timeline({ defaultColor }: { defaultColor?: string }) {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="sr-only">Experience</h2>
      {timelineElements.map((element, index) => {
        const isLast = index === timelineElements.length - 1;

        return (
          <div key={element.id} className="flex gap-6 relative min-h-[200px]">
            {/* Timeline line and dot */}
            <div className="flex flex-col items-center w-8">
              <div className="w-5 h-5 rounded-full bg-blue-500 dark:bg-blue-400 ring-4 ring-blue-500/30 dark:ring-blue-400/30 flex-shrink-0 mt-2" />
              {!isLast && (
                <div className="w-1 h-full bg-blue-500 dark:bg-blue-400 my-2" style={{ minHeight: '150px' }} />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-8 pt-2">
              <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                {element.startDate} - {element.endDate}
              </div>
              <h3 className="text-xl font-sans font-bold text-neutral-900 dark:text-neutral-100 mb-1 tracking-tight">
                {element.title}
              </h3>
              <div className="text-base text-neutral-700 dark:text-neutral-300 mb-2">
                {element.company} • {element.location}
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {element.description}
              </div>
              {element.tags && element.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {element.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${getTagColor(tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
