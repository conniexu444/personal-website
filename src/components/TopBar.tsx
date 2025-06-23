import { NavMobile } from "./NavMobile";
import { NavDesktop } from "./NavDesktop";

export const Topbar = () => {
  return (
    <div className="bg-neutral-950 border-b border-neutral-700">
      <nav className="container flex items-center justify-between py-1 lg:py-5">
        <span className="text-lg"></span>
        <NavMobile />
        <NavDesktop />
      </nav>
    </div>
  );
};