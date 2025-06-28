// Routes for the nav bar / menu / navigations
import Home from "../pages/Home";
import Experience from "../pages/Experience";

export const routes = [
    {
      title: "Home",
      href: "/",
      element: <Home />
    },
    {
        title: "Experience",
        href: "/Experience",
        element: <Experience />
    },
  ];