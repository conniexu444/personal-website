import { MainMenusGradientCard } from "../components/gradient-card";
import { WavyLine } from "../components/wavy-line";
import ScrambleHover from "../components/scramble";
import { BorderTrail } from "../components/border-trail";
import { PillToggleTheme } from "../components/ThemeToggle";
import { FlickeringGrid } from "../cuicui/flickering-pattern";

export default function Home() {

  return (
    <main className="min-h-screen font-[var(--font-body)] bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-700 relative">
      {/* Flickering Grid Background */}
      <div className="fixed inset-0 z-0">
        <FlickeringGrid
          squareSize={4}
          gridGap={6}
          flickerChance={0.3}
          color="var(--color-pattern)"
          maxOpacity={0.25}
          className="w-full h-full"
        />
      </div>

      <div className="p-6 pt-12 flex flex-col items-center justify-start relative z-10 overflow-hidden">
        <div className="sticky top-4 right-4 self-end z-50">
          <PillToggleTheme />
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

          <MainMenusGradientCard
            title="Welcome!"
            description="Software engineer with over 4 years of experience building infrastructure for M365 Copilot. Currently, on a platform team at Microsoft."
            circleSize={300}
            className="w-full mt-8"
          />

          <MainMenusGradientCard
            title="Experience"
            description="Software Engineer at Microsoft"
            circleSize={300}
            className="w-full mt-8"
          />

          <MainMenusGradientCard
            title="Projects"
            description="Projects on the side"
            circleSize={300}
            className="w-full mt-8"
          />

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
    </main>
  );
}
