import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Nav() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Support Us", path: "/support" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    { name: "Shows", path: "/shows" },
    { name: "Archives", path: "/archives" },
  ];

  return (
    <header className="w-full bg-[var(--color-bg)] px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 md:flex-col">
        {/* Logo and Site Title */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Lyrical Libations logo"
            className="w-6 h-6 rounded-full object-contain"
          />
          <span className="text-xl font-bold font-[var(--font-display)]">
            Lyrical Libations
          </span>
        </div>

        {/* Desktop Nav - spread tabs */}
        <nav className="hidden md:flex justify-between w-full text-lg font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-[var(--color-link)] hover:underline underline-offset-4"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Nav - stacked links */}
        <nav className="flex flex-col md:hidden items-center gap-2 text-lg font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-[var(--color-link)] hover:underline underline-offset-4"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
