import timelineElements from "../assets/timelineElements";

export default function Timeline({ defaultColor }: { defaultColor?: string }) {
  return (
    <div className="max-w-4xl mx-auto">
      {timelineElements.map((element, index) => {
        const isLast = index === timelineElements.length - 1;

        return (
          <div key={element.id} className="flex gap-6 relative mb-8">
            {/* Timeline line and dot */}
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-400 mt-2" />
              {!isLast && <div className="w-0.5 flex-1 bg-neutral-300 dark:bg-neutral-700 mt-2" />}
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
              <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                {element.startDate} - {element.endDate}
              </div>
              <div className="text-xl font-medium text-neutral-900 dark:text-neutral-100 mb-1">
                {element.title}
              </div>
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
                      className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-button)]/20 text-[var(--color-nav)] dark:bg-[var(--color-button)]/30 dark:text-[var(--color-button)]"
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
