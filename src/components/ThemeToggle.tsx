import { cn } from "../utils/cn";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export const PillToggleTheme = ({ className }: { className?: string }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cn("relative group", className)}>
      <button
        type="button"
        onClick={toggleTheme}
        className={cn(
          "group peer relative h-14 w-10 overflow-hidden transition rounded-full bg-[var(--color-card-bg)] p-2 border border-[var(--color-link)]",
          "hover:scale-110 transform-gpu transition duration-150"
        )}
      >
        <SunIcon
          className={cn(
            "size-5 text-[var(--color-text)] transition-all z-50 duration-300 absolute -translate-x-1/2 left-1/2 top-2 transform-gpu",
            theme === "light"
              ? "opacity-100 translate-y-0 scale-100 group-hover:scale-75 group-hover:opacity-90"
              : "opacity-50 -translate-y-8 scale-90 group-hover:-translate-y-3"
          )}
        />

        <MoonIcon
          className={cn(
            "size-5 text-[var(--color-text)] transition-all z-50 duration-300 absolute -translate-x-1/2 left-1/2 bottom-2 transform-gpu",
            theme === "dark"
              ? "opacity-100 translate-y-0 scale-100 group-hover:scale-75 group-hover:opacity-90"
              : "opacity-50 translate-y-8 scale-75 group-hover:translate-y-3"
          )}
        />
      </button>
    </div>
  );
};

export default PillToggleTheme;
