import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { AnimatedNoise } from "./components/animated-noise";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)] font-[var(--font-body)] overflow-x-hidden">
{/* 🔊 Animated Noise Layer */}
        <AnimatedNoise opacity={0.06} className="z-0" />
        <main className="flex-grow w-full">
          <div className="max-w-7xl mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}
