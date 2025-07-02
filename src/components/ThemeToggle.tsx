import { useTheme } from "./ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded bg-[var(--color-footer)] text-[var(--color-text)]"
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
