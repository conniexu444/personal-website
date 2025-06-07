import Nav from "./components/Nav";
import Footer from "./components/Footer";
import banner from "./assets/banner.png";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)] font-[var(--font-body)]">
      <Nav />

      {/* Banner */}
      <div className="w-full">
        <img
          src={banner}
          alt="Lyrical Libations banner"
          className="w-full h-auto max-h-[300px] object-cover"
        />
      </div>

      <main className="p-6 flex-grow">
        <h1 className="text-3xl mb-4 font-[var(--font-display)]">
          Welcome to Lyrical Libations
        </h1>
        <p className="text-lg">This is a placeholder for your homepage content.</p>
      </main>

      <Footer />
    </div>
  );
}
