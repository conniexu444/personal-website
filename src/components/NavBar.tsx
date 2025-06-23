import { useState } from "react";

export function NavBar() {
  const [open, setOpen] = useState(false);

  const navLinks = ["Home", "Support Us", "Shows", "Archives", "Contact", "About"];

  return (
    <header className="w-full px-6 py-4 bg-bg text-text font-display border-b border-text fixed top-0 z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl tracking-wide">Lyrical Libations</h1>
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-2xl">☰</button>
        </div>
        <nav className="hidden md:flex space-x-6 text-lg">
          {navLinks.map(link => (
            <a key={link} href="#" className="hover:text-accent">{link}</a>
          ))}
        </nav>
      </div>
      {open && (
        <div className="mt-4 flex flex-col space-y-3 md:hidden">
          {navLinks.map(link => (
            <a key={link} href="#" className="hover:text-accent">{link}</a>
          ))}
        </div>
      )}
    </header>
  );
}
