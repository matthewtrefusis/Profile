import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div
        className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="floating-dot absolute h-1 w-1 rounded-full bg-primary"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 61) % 100}%`,
              opacity: 0.2 + ((i * 7) % 5) / 10,
              animation: `slow-drift ${24 + (i % 12)}s ease-in-out infinite`,
              animationDelay: `${i % 5}s`,
            }}
          />
        ))}
      </div>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
