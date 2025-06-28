import { GradientCard } from "../components/gradient-card";
import { WavyLine } from "../components/wavy-line";
import ScrambleHover from "../components/scramble";

export default function Home() {
  return (
    <main className="min-h-screen text-[var(--color-text)] font-[var(--font-body)] p-6 pt-12 flex flex-col items-center justify-start relative overflow-hidden">

      {/* Centered 2/3 width container */}
      <div className="w-full max-w-4xl mx-auto text-center">
      <ScrambleHover
        text="Connie Xu"
        scrambleSpeed={60}
        sequential={true}
        revealDirection="center"
        useOriginalCharsOnly={true}
        className="text-6xl font-[var(--font-display)] mb-8 text-center"
      />

        <WavyLine className="mb-8" />

        <GradientCard
          title="Welcome!"
          circleSize={300}
          className="w-full bg-[var(--color-footer)] border border-[var(--color-link)]"
        >
          <p className="text-lg leading-relaxed">
            Software engineer with over 4 years of experience building infrastructure for M365 Copilot. Currently, on a platform team at Microsoft. 
          </p>
        </GradientCard>

        <GradientCard
          title="Experience"
          circleSize={300}
          className="w-full mt-8 bg-[var(--color-footer)] border border-[var(--color-link)]"
        >
          <p className="text-lg leading-relaxed">
            Software Engineer at Microsoft
          </p>
        </GradientCard>
      </div>
    </main>
  );
}
