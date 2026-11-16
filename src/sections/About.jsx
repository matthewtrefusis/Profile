import { ScrollButton } from "@/components/ScrollButton";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing structured, maintainable, and scalable code built to last.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Designing low-overhead software with fast execution and minimal resource bloat.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working closely across teams to transform complex ideas into reliable software.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Choosing the right runtime, language, and architecture for the problem—not just the latest trend.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Engineering reliable systems,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a software engineer and Computer Science student at the
                University of Reading focused on building fast, dependable
                software. What started as curiosity about how software works
                under the hood has grown into hands-on experience across backend
                services, desktop applications, and tooling using C#, Rust,
                Java, Python, and TypeScript.
              </p>
              <p>
                I enjoy solving hard backend and systems problems and packaging
                them into clean, intuitive software—from low-latency services
                and compiled WebAssembly modules to practical desktop tools. My
                approach combines technical rigor with maintainable architecture
                and responsive interfaces.
              </p>
              <p>
                Outside of software engineering, you'll find me leading sessions
                as an Explorer Scout Leader, building PCs, exploring game
                development, or experimenting with new programming tools.
              </p>
            </div>

            <div className="glass card-border rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My goal is to build fast, practical software that solves real
                problems—with clean interfaces for users and maintainable
                codebases for developers."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass card-border p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ScrollButton href="#experience" label="Experience" />
    </section>
  );
};
