import logo from "../assets/logo.png";

export default function Nav() {
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Support Us", href: "#" },
    { name: "Contact", href: "#" },
    { name: "About", href: "#" },
    { name: "Shows", href: "#" },
    { name: "Archives", href: "#" },
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
            <a
              key={link.name}
              href={link.href}
              className="text-[var(--color-link)] hover:underline underline-offset-4"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Nav - stacked links */}
        <nav className="flex flex-col md:hidden items-center gap-2 text-lg font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[var(--color-link)] hover:underline underline-offset-4"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
