import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import logo from "./assets/logo.png";
import { routes } from "./routes/routes";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)] font-[var(--font-body)]">
      <div className="w-full py-4 px-4">
  <div className="flex items-center gap-3">
    <Link to="/" className="flex items-center gap-3">
      <img
        src={logo}
        alt="Lyrical Libations logo"
        className="w-8 h-8 rounded-full object-contain"
      />
      <span className="text-2xl font-[font-display]">
        Lyrical Libations
      </span>
    </Link>
  </div>
</div>


        {/* Nav bar */}
        <div className="w-full px-4 py-6 sm:px-6 lg:px-12">
          <Nav />
        </div>

        {/* Main content */}
        <main className="flex-grow w-full px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <Routes>
              {routes.map(({ href, element }) => (
                <Route key={href} path={href} element={element} />
              ))}
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
