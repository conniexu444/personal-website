import { cn } from "../utils/cn";

interface ContactButtonProps {
  onClick: () => void;
  className?: string;
}

export const ContactButton = ({ onClick, className }: ContactButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "fixed top-4 left-4 z-50",
        "focus:outline-none",
        className
      )}
      aria-label="Open contact form"
    >
      <kbd className="transform-gpu cursor-pointer rounded-[16px] border border-neutral-500/50 bg-neutral-300 shadow-[-10px_0px_15px_rgba(255,255,255,1),3px_10px_12.5px_rgba(0,0,0,0.1)] outline-hidden transition-all duration-150 active:shadow-none dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-[-10px_0px_15px_rgba(0,0,0,0.3),3px_10px_12.5px_rgba(255,255,255,0.05)]">
        <span className="-translate-y-1 z-10 block size-full transform-gpu rounded-[15px] bg-neutral-100 px-3 py-1 text-neutral-500 shadow-[inset_0px_2px_4px_rgba(255,255,255,0.8)] transition-all duration-150 active:translate-y-0 active:shadow-transparent dark:bg-neutral-800 dark:text-neutral-300 dark:shadow-[inset_0px_2px_4px_rgba(255,255,255,0.05)]">
          <span className="block text-end">⌘</span>
          <span className="text-nowrap font-medium text-xs">command</span>
        </span>
      </kbd>
    </button>
  );
};