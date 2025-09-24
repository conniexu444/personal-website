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
          "bg-[var(--color-bg)] border border-[var(--color-link)] rounded-[20px]",
          "shadow-2xl transform transition-all duration-300",
          "animate-in slide-in-from-bottom-4 fade-in-0",
          className
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-[var(--color-link)]">
          <h2 className="text-3xl font-[var(--font-display)] text-[var(--color-text)]">
            Get In Touch
          </h2>
          <button
            onClick={onClose}
            className={cn(
              "w-8 h-8 flex items-center justify-center",
              "text-[var(--color-text)] hover:text-[var(--color-button)]",
              "rounded-full hover:bg-[var(--color-card-bg)]",
              "transition-colors duration-200",
              "focus:outline-none focus:ring-2 focus:ring-[var(--color-button)]"
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
          <p className="text-[var(--color-text)] text-center mb-8 opacity-80">
            Interested in working together? Have a question? I'd love to hear from you!
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};