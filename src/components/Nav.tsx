import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { routes } from "../routes/routes";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {/* Hamburger toggle - pinned in top right corner on mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        className="fixed top-4 right-4 z-50 md:hidden text-[var(--color-link)] bg-[var(--color-bg)] p-2 rounded-md"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <header className="w-full bg-[var(--color-bg)] px-6 pt-4 pb-2">
        <div className="max-w-7xl mx-auto flex flex-col gap-4">
          {/* Desktop Nav */}
          <nav className="hidden md:flex justify-between w-full text-lg font-[font-display]">
            {routes.map((link) => {
              const isActive = location.pathname === link.href;

              return (
                <Link
                  key={link.title}
                  to={link.href}
                  className={`text-[var(--color-link)] hover:underline underline-offset-4 ${
                    isActive ? "underline" : ""
                  }`}
                >
                  {link.title}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Nav - toggled */}
          {isOpen && (
            <nav className="md:hidden fixed top-16 left-0 w-full bg-[var(--color-bg)] p-6 flex flex-col items-center gap-4 text-lg font-medium z-40">
              {routes.map((link) => (
                <Link
                  key={link.title}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[var(--color-link)] hover:underline underline-offset-4"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
