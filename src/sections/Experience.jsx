import { ScrollButton } from "@/components/ScrollButton";
import {
  GraduationCap,
  Laptop,
  MessageSquare,
  Monitor,
  Users,
  Wrench,
} from "lucide-react";

const experience = [
  {
    icon: GraduationCap,
    role: "Computer Science Student",
    organization: "University of Reading",
    period: "Current",
    description:
      "Building a strong foundation in algorithms, systems architecture, and software engineering—applying core theory directly through practical projects.",
    skills: [
      "Computer Science",
      "Software Engineering",
      "Computer Architecture",
      "Systems",
    ],
  },
  {
    icon: Monitor,
    role: "Digital Technology Services – Student Assistant",
    organization: "University of Reading",
    period: "Oct 2026 – Present",
    description:
      "Providing frontline technical support across campus—diagnosing hardware, software, and network issues for students and staff while managing incident documentation.",
    skills: ["IT Support", "Troubleshooting", "Systems", "Networking"],
  },
  {
    icon: MessageSquare,
    role: "Course Representative",
    organization: "Reading Students' Union",
    period: "Oct 2026 – Present",
    description:
      "Representing Computer Science students by gathering peer feedback and collaborating with academic staff to improve lab readiness and assessment transparency.",
    skills: ["Advocacy", "Communication", "Leadership"],
  },
  {
    icon: Users,
    role: "Explorer Scout Leader",
    organization: "Volunteer Leadership",
    period: "Feb 2026 - Present",
    description:
      "Leading sessions and supporting young people through collaborative activities, practical problem-solving, and hands-on learning.",
    skills: ["Leadership", "Communication", "Mentoring"],
  },
  {
    icon: Wrench,
    role: "Engineering Work Experience",
    organization: "BAE Systems",
    period: "Nov 2024",
    description:
      "Collaborated in an eight-person engineering team to design and present a disaster relief vehicle concept for the Ministry of Defence.",
    skills: ["Systems Design", "Teamwork", "Presentation"],
  },
  {
    icon: Laptop,
    role: "Desktop Delivery Engineer (Work Experience)",
    organization: "NHS Trust",
    period: "Jul 2023",
    description:
      "Configured and deployed over 150 enterprise laptops and triaged frontline IT support tickets within Basingstoke Hospital's IT department.",
    skills: ["Windows", "Deployment", "Hardware", "IT Operations"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Learning, building,
            <span className="font-serif italic font-normal text-white">
              {" "}
              and leading.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A snapshot of the experiences shaping how I approach software,
            collaboration, and problem-solving.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div
            className="absolute left-6 top-8 bottom-8 w-px bg-border md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {experience.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <article
                  key={item.role}
                  className="relative grid md:grid-cols-2 md:gap-16 animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div
                    className={`ml-16 md:ml-0 ${
                      isEven ? "md:text-right" : "md:col-start-2"
                    }`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{item.role}</h3>
                    <p className="text-secondary-foreground mt-1">
                      {item.organization}
                    </p>
                  </div>

                  <div
                    className={`mt-4 ml-16 md:mt-0 ${
                      isEven
                        ? "md:col-start-2"
                        : "md:col-start-1 md:row-start-1"
                    }`}
                  >
                    <div className="glass card-border rounded-2xl p-6 text-left">
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4 md:justify-start">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 rounded-full bg-surface text-xs text-muted-foreground border border-border/50"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-0 top-0 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-background border border-primary/50 text-primary md:left-1/2 md:-translate-x-1/2">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
      <ScrollButton href="#projects" label="Projects" />
    </section>
  );
};
