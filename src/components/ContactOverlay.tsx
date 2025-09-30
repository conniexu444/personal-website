import { useEffect } from "react";
import { cn } from "../utils/cn";
import { ContactForm } from "./ContactForm";

interface ContactOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const ContactOverlay = ({ isOpen, onClose, className }: ContactOverlayProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close contact form"
      />

      <div
        className={cn(
          "relative w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto",
          "bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-[20px]",
          "shadow-2xl transform transition-all duration-300",
          "animate-in slide-in-from-bottom-4 fade-in-0",
          className
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-neutral-300 dark:border-neutral-700">
          <h2 className="text-3xl font-serif text-neutral-900 dark:text-neutral-100">
            Get In Touch
          </h2>
          <button
            onClick={onClose}
            className={cn(
              "w-8 h-8 flex items-center justify-center",
              "text-neutral-900 dark:text-neutral-100 hover:text-blue-600 dark:hover:text-blue-400",
              "rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800",
              "transition-colors duration-200",
              "focus:outline-none focus:ring-2 focus:ring-blue-500"
            )}
            aria-label="Close contact form"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <p className="text-neutral-700 dark:text-neutral-300 text-center mb-8">
            Interested in working together? Have a question? I'd love to hear from you!
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};