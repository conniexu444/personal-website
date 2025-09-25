import { useState } from "react";
import { MainMenusGradientCard } from "../components/gradient-card";
import ScrambleHover from "../components/scramble";
import { PillToggleTheme } from "../components/ThemeToggle";
import { FlickeringGrid } from "../cuicui/flickering-pattern";
import { ContactButton } from "../components/ContactButton";
import { ContactOverlay } from "../components/ContactOverlay";

export default function Home() {
  const [isContactOverlayOpen, setIsContactOverlayOpen] = useState(false);

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
        <ContactButton onClick={() => setIsContactOverlayOpen(true)} />

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

          <MainMenusGradientCard
            title="Software Engineer"
            circleSize={300}
            className="w-full mt-24"
          />

          <MainMenusGradientCard
            title="Experience"
            description="Software Engineer at Microsoft"
            circleSize={300}
            className="w-full mt-24"
          />

          <MainMenusGradientCard
            title="Projects"
            circleSize={300}
            className="w-full mt-24"
          />

          <MainMenusGradientCard
            title="Spending Tracker"
            description="Created a "
            circleSize={300}
            className="w-full mt-24"
          />
        </div>
      </div>

      <ContactOverlay
        isOpen={isContactOverlayOpen}
        onClose={() => setIsContactOverlayOpen(false)}
      />
    </main>
  );
}
