import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import { routes } from "./routes/routes";
import EditionPage from "./pages/Edition";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)] font-[var(--font-body)]">
        <div className="w-full flex justify-center py-6">
  <div className="w-2/3">
    <Nav />
  </div>
</div>


        <main className="flex-grow w-full px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <Routes>
              {/* Static routes */}
              {routes.map(({ href, element }) => (
                <Route key={href} path={href} element={element} />
              ))}

              {/* Dynamic archive route */}
              <Route path="/Experience/:id" element={<EditionPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}
