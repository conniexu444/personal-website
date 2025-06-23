import banner from "../assets/banner.png";

export default function Home() {
    return (
      <div>
        <div className="w-full">
          <img
            src={banner}
            alt="Lyrical Libations banner"
            className="w-full h-auto max-h-[300px] object-cover"
          />
        </div>
        <h1 className="text-3xl font-[var(--font-display)] mb-4">
          Welcome to Lyrical Libations
        </h1>
        <p className="text-lg">
          Home page blurb
        </p>
      </div>
    );
  }
  