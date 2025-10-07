import { useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import ScrambleHover from "../components/scramble";
import { PillToggleTheme } from "../components/ThemeToggle";
import { ContactOverlay } from "../components/ContactOverlay";
import { NavigationBlur } from "../components/NavigationBlur";
import { WeatherDisplay } from "../components/WeatherDisplay";
import { Clock } from "../components/Clock";
import Timeline from "../components/Timeline";
import Projects from "../components/Projects";
import TableOfContent from "../components/TableOfContents";
import { BottomBlurOut } from "../components/bottomBlurOut";
import { TypingAnimation } from "../components/TypingAnimation";

export default function Home() {
  const [isContactOverlayOpen, setIsContactOverlayOpen] = useState(false);

  const yearsOfExperience = useMemo(() => {
    const startDate = new Date("2022-02-01");
    const today = new Date();
    return (
      (today.getTime() - startDate.getTime()) /
      (1000 * 60 * 60 * 24 * 365.25)
    ).toFixed(1);
  }, []);

  const handleOpenContact = useCallback(() => {
    setIsContactOverlayOpen(true);
  }, []);

  const handleCloseContact = useCallback(() => {
    setIsContactOverlayOpen(false);
  }, []);

  return (
    <main className="min-h-screen font-sans bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-700 relative">
      {/* Navigation blur effect */}
      <NavigationBlur height={60} blurIntensity={10} />

      {/* Bottom blur effect */}
      <BottomBlurOut />

      {/* Weather display */}
      <WeatherDisplay />

      {/* Table of Contents */}
      <div className="fixed top-32 left-4 z-40 hidden md:block">
        <TableOfContent idOfParentContainer="main-content" className="w-48 rounded-lg p-4" />
      </div>

      {/* Clock display */}
      <Clock />

      {/* Theme toggle - bottom right corner */}
      <div className="fixed bottom-4 right-4 z-50">
        <PillToggleTheme />
      </div>

      {/* Blog link - bottom left corner */}
      <div className="fixed bottom-4 left-4 z-50">
        <Link
          to="/blog"
          className="px-4 py-2 bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
        >
          Blog
        </Link>
      </div>

      <div className="p-6 pt-12 flex flex-col items-center justify-start relative z-10 overflow-hidden">
        <div id="main-content" className="w-full max-w-4xl mx-auto text-center">
          <ScrambleHover
            text="Connie Xu"
            scrambleSpeed={60}
            sequential={true}
            revealDirection="center"
            useOriginalCharsOnly={true}
            className="text-6xl font-[var(--font-display)] mb-8 text-center"
          />

          <TypingAnimation />

          <div className="mt-12">
            <h2 className="sr-only">About</h2>
            <p className="text-left text-neutral-700 dark:text-neutral-300">
              Hey, I'm Connie, a software engineer with about {yearsOfExperience}{" "}
              years of experience. What I am really excited to share is that I am
              working on something called GraphRAGs. Are you familiar with what a
              RAG is? Training an LLM is super expensive. And once you have
              trained an LLM, you then have frozen-in-time data. So, RAGs are the
              solution to this. This helps fetch more realtime articles that give
              us more relevant and up-to-date data.
            </p>

            <p className="text-left text-neutral-700 dark:text-neutral-300">
              So what is GraphRAGs then? GraphRAGs is when we have a graph of say
              a project. And there are people who are also connected to this
              project. With this means that there is some correlation between what
              you are doing and what they are doing. So, let's say one of your
              team members is sending you an email. GraphRAGs can be used to give
              you more context.
            </p>
          </div>

          <div className="w-full mt-24 text-left">
            <Projects />
          </div>

          <div className="w-full mt-24 text-left">
            <Timeline />
          </div>
        </div>
      </div>

      <ContactOverlay
        isOpen={isContactOverlayOpen}
        onClose={handleCloseContact}
      />
    </main>
  );
}
