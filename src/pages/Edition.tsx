import { useParams } from "react-router-dom";
import timelineElements from "../assets/timelineElements";

export default function EditionPage() {
  const { id } = useParams();
  const edition = timelineElements.find((e) => e.id === id);

  if (!edition) {
    return (
      <div className="py-10 text-center">
        <h1 className="text-2xl font-semibold text-red-600">Edition not found</h1>
      </div>
    );
  }

  return (
    <div className="py-10">
      <h1 className="text-3xl font-[var(--font-display)] mb-4 text-center">
        {edition.title}
      </h1>
      {edition.poster && (
        <div className="flex justify-center mb-6">
          <img
            src={edition.poster}
            alt={`${edition.title} poster`}
            className="w-full max-w-xl rounded-md border border-[var(--color-link)]"
          />
        </div>
      )}

      <p className="text-center text-[var(--color-text)] text-lg opacity-80">
        {edition.location} — {edition.date}
      </p>
    </div>
  );
}
