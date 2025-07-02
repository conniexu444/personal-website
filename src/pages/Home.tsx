import { useState } from "react";
import { GradientCard } from "../components/gradient-card";
import { WavyLine } from "../components/wavy-line";
import ScrambleHover from "../components/scramble";
import { BorderTrail } from "../components/border-trail";
import ThemeToggle from "../components/ThemeToggle";
import Keyboard from "../components/keyboard";

export default function Home() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <main
      className={`min-h-screen font-[var(--font-body)] transition-colors duration-700 ${
        isUnlocked
          ? "bg-[var(--color-bg)] text-[var(--color-text)]"
          : "bg-black text-white"
      }`}
    >
      {!isUnlocked ? (
        // 🛑 Locked State: Only Keyboard Button
        <div className="min-h-screen flex items-center justify-center">
          <Keyboard onUnlock={() => setIsUnlocked(true)} />
        </div>
      ) : (
        // ✅ Unlocked State: Full Page Content
        <div className="p-6 pt-12 flex flex-col items-center justify-start relative overflow-hidden">
          {/* Sticky Theme Toggle */}
          <div className="sticky top-4 right-4 self-end z-50">
            <ThemeToggle />
          </div>

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
                Software engineer with over 4 years of experience building
                infrastructure for M365 Copilot. Currently, on a platform team
                at Microsoft.
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

            <GradientCard
              title="Projects"
              circleSize={300}
              className="w-full mt-8 bg-[var(--color-footer)] border border-[var(--color-link)]"
            >
              <p className="text-lg leading-relaxed">Projects on the side</p>
            </GradientCard>

            <div className="relative flex h-[200px] w-[300px] flex-col items-center justify-center rounded-md bg-white-200 px-5 py-2 mt-12">
              <BorderTrail
                style={{
                  boxShadow:
                    "0px 0px 60px 30px rgb(0 0 0 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
                }}
                size={100}
              />
              <output
                className="flex h-full animate-pulse flex-col items-start justify-center space-y-2"
                aria-label="Loading..."
              >
                <div className="h-1 w-4 rounded-[4px] bg-zinc-600" />
                <div className="h-1 w-10 rounded-[4px] bg-zinc-600" />
                <div className="h-1 w-12 rounded-[4px] bg-zinc-600" />
                <div className="h-1 w-12 rounded-[4px] bg-zinc-600" />
                <div className="h-1 w-12 rounded-[4px] bg-zinc-600" />
              </output>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
