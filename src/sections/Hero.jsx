import { Button } from "@/components/Button";
import { ScrollButton } from "@/components/ScrollButton";
import { ArrowRight } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton.jsx";

const skills = [
  "C#",
  ".NET",
  "Rust",
  "Java",
  "Python",
  "TypeScript",
  "JavaScript",
  "SQL",
  "MongoDB",
  "Node.js",
  "React",
  "Angular",
  "HTML/CSS",
  "Bootstrap",
  "Vite",
  "Linux",
  "Git",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • University of Reading
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Building <span className="text-primary glow-text">fast</span>
                <br />
                software
                <br />
                <span className="font-serif italic font-normal text-white">
                  that lasts.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                I’m Matthew Trefusis, a Computer Science student at the
                University of Reading and software engineer. I enjoy solving
                hard backend and systems problems and packaging them into fast,
                user-focused software across desktop, web, and edge
                environments.
              </p>
            </div>
            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button href="#contact" size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton href="#projects">
                View Projects
                <ArrowRight className="w-5 h-5" />
              </AnimatedBorderButton>
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="relative">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div className="profile-image-frame relative rounded-3xl border border-border/50 bg-surface/50 p-2">
                <img
                  src="/ProfilePicture-portrait.jpg"
                  alt="Matthew Trefusis"
                  className="profile-image block w-full aspect-[4/5] object-cover rounded-2xl"
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="technology-marquee relative overflow-hidden">
            <div className="flex animate-marquee">
              <div className="flex">
                {skills.map((skill) => (
                  <div key={skill} className="flex-shrink-0 px-8 py-4">
                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex" aria-hidden="true">
                {skills.map((skill) => (
                  <div key={skill} className="flex-shrink-0 px-8 py-4">
                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ScrollButton href="#about" label="About" />
        </div>
      </div>
    </section>
  );
};
