import stars from "../assets/star.png";
import { GradientCard } from "../components/gradient-card";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] font-[var(--font-body)] p-6 pt-12 flex flex-col items-center justify-start relative overflow-hidden">
      {/* Top Right Star */}
      <img
  src={stars}
  alt="Stars"
  className="hidden sm:block absolute top-10 right-20 w-32 md:w-40 animate-shake-rotate pointer-events-none select-none"
/>

      {/* Bottom Left Star */}
      <img
        src={stars}
        alt="Stars"
        className="hidden sm:block absolute bottom-10 left-20 w-32 md:w-40 animate-bounce-slow pointer-events-none select-none"
      />

      <h1 className="text-6xl font-[var(--font-display)] mb-8 text-center">
        Connie Xu
      </h1>

      <GradientCard
        title="Welcome!"
        circleSize={300}
        className="w-full max-w-3xl mx-auto bg-[var(--color-footer)] border border-[var(--color-link)]"
      >
        <p className="text-lg leading-relaxed">
          Software engineer with over 4 years of experience building infrastructure for M365 Copilot. Currently, on a platform team at Microsoft. 
        </p>
      </GradientCard>

      <GradientCard
  title="Experience"
  circleSize={300}
  className="w-full max-w-3xl mx-auto mt-8 bg-[var(--color-footer)] border border-[var(--color-link)]"
>

        <p className="text-lg leading-relaxed">
          Software Engineer at Microsoft
        </p>
      </GradientCard>
    </main>
  );
}
