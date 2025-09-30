import { useState } from "react";
import { MainMenusGradientCard } from "../components/gradient-card";
import ScrambleHover from "../components/scramble";
import { PillToggleTheme } from "../components/ThemeToggle";
import { FlickeringGrid } from "../cuicui/flickering-pattern";
import { ContactButton } from "../components/ContactButton";
import { ContactOverlay } from "../components/ContactOverlay";
import { NavigationBlur } from "../components/NavigationBlur";
import { WeatherDisplay } from "../components/WeatherDisplay";
import { Clock } from "../components/Clock";
import { ContactMeButton } from "../components/ContactMeButton";

export default function Home() {
  const [isContactOverlayOpen, setIsContactOverlayOpen] = useState(false);

  const startDate = new Date("2022-02-01");
  const today = new Date();
  const yearsOfExperience = (
    (today.getTime() - startDate.getTime()) /
    (1000 * 60 * 60 * 24 * 365.25)
  ).toFixed(1);

  return (
    <main className="min-h-screen font-[var(--font-body)] bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-700 relative">
      {/* Navigation blur effect */}
      <NavigationBlur height={60} blurIntensity={10} />

      {/* Weather display */}
      <WeatherDisplay />

      {/* Clock display */}
      <Clock />

      {/* Theme toggle - bottom right corner */}
      <div className="fixed bottom-4 right-4 z-50">
        <PillToggleTheme />
      </div>

      {/* Contact Me button - bottom left corner */}
      <div className="fixed bottom-4 left-4 z-50">
        <ContactMeButton onClick={() => setIsContactOverlayOpen(true)} />
      </div>

      <div className="p-6 pt-12 flex flex-col items-center justify-start relative z-10 overflow-hidden">
        <div className="w-full max-w-4xl mx-auto text-center">
          <ScrambleHover
            text="Connie Xu"
            scrambleSpeed={60}
            sequential={true}
            revealDirection="center"
            useOriginalCharsOnly={true}
            className="text-6xl font-[var(--font-display)] mb-8 text-center"
          />

          <p className="text-left">
            Hey, I'm Connie, a software engineer with about {yearsOfExperience}{" "}
            years of experience. What I am really excited to share is that I am
            working on something called GraphRAGs. Are you familiar with what a
            RAG is? Training an LLM is super expensive. And once you have
            trained an LLM, you then have frozen-in-time data. So, RAGs are the
            solution to this. This helps fetch more realtime articles that give
            us more relevant and up-to-date data.
          </p>

          <p className="text-left">
            So what is GraphRAGs then? GraphRAGs is when we have a graph of say
            a project. And there are people who are also connected to this
            project. With this means that there is some correlation between what
            you are doing and what they are doing. So, let's say one of your
            team members is sending you an email. GraphRAGs can be used to give
            you more context.
          </p>

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
