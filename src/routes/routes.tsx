// Routes for the nav bar / menu / navigations
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import SupportUs from "../pages/SupportUs";
import Shows from "../pages/Shows";
import Archives from "../pages/Archives";

export const routes = [
    {
      title: "Home",
      href: "/",
      element: <Home />
    },
    {
      title: "Support Us",
      href: "/support",
      element: <SupportUs />
    },
    {
      title: "Contact Us",
      href: "/contact",
      element: <Contact />
    },
    {
      title: "About",
      href: "/about",
      element: <About />
    },
    {
        title: "Shows",
        href: "/shows",
        element: <Shows />
    },
    {
        title: "Archives",
        href: "/archives",
        element: <Archives />
    },
  ];