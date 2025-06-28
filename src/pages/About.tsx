export default function About() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] font-[var(--font-body)] p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-[var(--font-display)] mb-10 text-center">
          Meet the Artists
        </h1>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Coco's Card */}
          <div className="flex-1 bg-[var(--color-dark-red)] border border-[var(--color-link)] rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-[var(--font-display)] mb-2">Coco</h2>
            <p className="text-[var(--color-text)]">
              Coco is a multidisciplinary artist whose work explores the intersection of sound, ritual, and sensory storytelling. Her performances are layered with poetry, rhythm, and community magic.
            </p>
          </div>

          {/* Gabby's Card */}
          <div className="flex-1 bg-[var(--color-dark-red)] border border-[var(--color-link)] rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-[var(--font-display)] mb-2">Gabby</h2>
            <p className="text-[var(--color-text)]">
              Gabby is a sonic explorer and producer blending analog textures with ethereal vocals. Her installations and soundscapes invite audiences into immersive worlds of emotion and memory.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
