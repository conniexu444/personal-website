import { useState } from "react";
import { cn } from "../utils/cn";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  className?: string;
}

export const ContactForm = ({ className }: ContactFormProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: result.message,
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Failed to send message",
        });
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmitStatus({
        type: "error",
        message: "Network error. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={cn("w-full max-w-2xl mx-auto", className)}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[var(--color-text)] mb-2"
            >
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-[var(--color-card-bg)] border border-[var(--color-link)] rounded-lg text-[var(--color-card-text)] placeholder-[var(--color-card-subtext)] focus:outline-none focus:ring-2 focus:ring-[var(--color-link)] focus:border-transparent transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[var(--color-text)] mb-2"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-[var(--color-card-bg)] border border-[var(--color-link)] rounded-lg text-[var(--color-card-text)] placeholder-[var(--color-card-subtext)] focus:outline-none focus:ring-2 focus:ring-[var(--color-link)] focus:border-transparent transition-colors"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-[var(--color-text)] mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-[var(--color-card-bg)] border border-[var(--color-link)] rounded-lg text-[var(--color-card-text)] placeholder-[var(--color-card-subtext)] focus:outline-none focus:ring-2 focus:ring-[var(--color-link)] focus:border-transparent transition-colors"
            placeholder="What's this about?"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-[var(--color-text)] mb-2"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={6}
            className="w-full px-4 py-3 bg-[var(--color-card-bg)] border border-[var(--color-link)] rounded-lg text-[var(--color-card-text)] placeholder-[var(--color-card-subtext)] focus:outline-none focus:ring-2 focus:ring-[var(--color-link)] focus:border-transparent transition-colors resize-vertical"
            placeholder="Your message..."
          />
        </div>

        {submitStatus.type && (
          <div
            className={cn(
              "p-4 rounded-lg text-sm",
              submitStatus.type === "success"
                ? "bg-green-100 text-green-800 border border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800"
                : "bg-red-100 text-red-800 border border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800"
            )}
          >
            {submitStatus.message}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "w-full py-3 px-6 bg-[var(--color-button)] text-white font-medium rounded-lg transition-all duration-200",
            "hover:bg-[var(--color-button)]/90 focus:outline-none focus:ring-2 focus:ring-[var(--color-button)] focus:ring-offset-2",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            isSubmitting && "animate-pulse"
          )}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};