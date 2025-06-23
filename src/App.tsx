import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SupportUs from "./pages/SupportUs";
import Shows from "./pages/Shows";
import Archives from "./pages/Archives";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)] font-[var(--font-body)]">
        <Nav />
        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<SupportUs />} />
            <Route path="/shows" element={<Shows />} />
            <Route path="/archives" element={<Archives />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
