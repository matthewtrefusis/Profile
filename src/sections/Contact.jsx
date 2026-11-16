import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

const contactLinks = [
  {
    label: "Email me",
    href: "mailto:matthewtrefusis@sky.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com/matthewtrefusis/",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/matthew-trefusis/",
    icon: FaLinkedin,
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6">
        <div className="glass card-border rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Get in touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Let&apos;s build something useful.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            I&apos;m open to discussing software engineering opportunities,
            collaborative projects, and interesting technical challenges.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {contactLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-primary-foreground font-medium hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Icon className="w-5 h-5" aria-hidden="true" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
