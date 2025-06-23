import { routes } from "../routes/routes";

export const NavDesktop = () => {
  return (
    <ul className="hidden lg:flex lg:items-center gap-5 text-sm">
      {routes.map((route) => {
        return (
          <li>
            <a
              href={route.title}
              className="flex items-center gap-1 hover:text-neutral-400 transition-all"
            >
              {route.href}
            </a>
          </li>
        );
      })}
    </ul>
  );
};