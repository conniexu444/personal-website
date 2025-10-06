import { useState, useEffect } from "react";

const words = [
  "tomfoolering...",
  "thinking...",
  "hullaballoing...",
  "elucidating...",
  "pondering...",
  "scheming...",
  "daydreaming...",
];

export function TypingAnimation() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = 2000; // 2 seconds pause when word is complete

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    if (!isDeleting && currentText === currentWord) {
      setIsPaused(true);
      return;
    }

    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, isPaused, currentWordIndex]);

  return (
    <div className="text-xl text-neutral-600 dark:text-neutral-400 font-mono h-12 flex items-center justify-center">
      <div className="border border-neutral-300 dark:border-neutral-700 rounded-md px-4 py-2 bg-neutral-100/50 dark:bg-neutral-900/50 flex items-center">
        <span className="mr-2">*</span>
        {currentText}
        <span className="inline-block w-0.5 h-5 bg-neutral-600 dark:bg-neutral-400 ml-1 animate-pulse" />
      </div>
    </div>
  );
}
