import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { ScrollButton } from "@/components/ScrollButton";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Movie Finder",
    description:
      "A responsive movie browser built with React, TypeScript, Vite, and Bootstrap, powered by the TMDB API.",
    image: "/Movie-Finder.png",
    tags: ["React", "TypeScript", "Bootstrap", "TMDB API", "Vite"],
    link: "https://movie-finder.matthewtrefusis.com/",
    github: "https://github.com/matthewtrefusis/Movie-Finder",
  },
  {
    title: "Racing Simulator",
    description:
      "A hands-on neural network implementation in Python, built from the ground up without high-level ML frameworks.",
    image: "/Racing_Simulator.png",
    tags: ["Python", "Neural Networks", "Machine Learning"],
    github:
      "https://github.com/matthewtrefusis/racing-simulator-neural-network",
  },
  {
    title: "Budget Manager",
    description:
      "A .NET Windows Forms application for managing budgets with a Microsoft Access database and automatic setup.",
    image: "/Budget_Manager.png",
    tags: [".NET", "C#", "Windows Forms", "Microsoft Access"],
    github: "https://github.com/matthewtrefusis/BudgetManager",
  },
];

const externalLinkProps = {
  target: "_blank",
  rel: "noreferrer",
};

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Selected work.
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Software, simulations, and tools built to explore how systems work
            under the hood.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <article
              key={project.title}
              className="group glass card-border rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-surface to-card">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-8 text-center">
                    <span className="text-2xl font-serif italic text-primary/70">
                      {project.title}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300">
                  {project.link && (
                    <a
                      href={project.link}
                      {...externalLinkProps}
                      aria-label={`Open ${project.title} live demo`}
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
                    </a>
                  )}
                  <a
                    href={project.github}
                    {...externalLinkProps}
                    aria-label={`View ${project.title} on GitHub`}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <FaGithub className="w-5 h-5" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton
            href="https://github.com/matthewtrefusis?tab=repositories"
            {...externalLinkProps}
          >
            <FaGithub className="w-5 h-5" aria-hidden="true" />
            View All Projects
          </AnimatedBorderButton>
        </div>
      </div>
      <ScrollButton href="#contact" label="Contact" />
    </section>
  );
};
