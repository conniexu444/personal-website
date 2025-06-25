import timelineElements from "../assets/timelineElements";
import schoolIcon from "../assets/email-icon.png";
import workIcon from "../assets/email-icon.png";

export default function Timeline({ defaultColor }: { defaultColor?: string }) {
  return (
    <div>
      {timelineElements.map((element) => {
        const color = defaultColor || `bg-[var(--color-link)]`;

        return (
          <div key={element.id} className="flex m-4 relative">
            {/* Vertical lines for mobile */}
            <div
              className={`${color} w-0.5 h-6 translate-x-20 translate-y-56 opacity-60 sm:hidden`}
            ></div>
            <div
              className={`${color} w-0.5 h-6 translate-x-80 translate-y-56 opacity-60 sm:hidden`}
            ></div>

            {/* Side date & icon (desktop only) */}
            <div className="hidden items-start w-44 pt-0.5 relative sm:flex">
              <div className="w-4/5 text-[var(--color-text)]">{element.date}</div>
              <div
                className={`${color} w-px h-full translate-x-5 translate-y-10 opacity-30`}
              ></div>
              <img
                src={element.icon === "school" ? schoolIcon : workIcon}
                alt="icon"
                className="bg-[var(--color-link)] w-10 p-1 rounded-lg z-20"
              />
              <div
                className={`${color} h-px w-8 translate-y-5 opacity-30`}
              ></div>
            </div>

            {/* Main content card */}
            <div className="border border-[var(--color-link)] rounded-lg px-8 py-4 bg-[var(--color-footer)] w-full text-center z-10 sm:w-96">
              <div className="text-xl font-medium text-[var(--color-text)]">
                {element.title}
              </div>
              <div className="text-[var(--color-text)] opacity-70 mb-6 sm:mb-8 sm:text-xs">
                {element.location}
                <span className="sm:hidden"> | {element.date}</span>
              </div>

              {/* Poster image if available */}
              {element.poster && (
                <img
                  src={element.poster}
                  alt={`${element.title} poster`}
                  className="w-full rounded-md mb-6 border border-[var(--color-link)]"
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
