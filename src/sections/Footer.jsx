import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const currentYear = new Date().getFullYear();

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://github.com/matthewtrefusis/",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://www.linkedin.com/in/matthew-trefusis/",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="container mx-auto px-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">
            Matthew Trefusis<span className="text-primary">.</span>
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Building reliable software with intent.
          </p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap gap-5">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              {label}
            </a>
          ))}
          <a
            href="#"
            aria-label="Back to top"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 text-muted-foreground hover:border-primary/60 hover:text-primary transition-colors"
          >
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
      <p className="container mx-auto px-6 mt-6 text-xs text-muted-foreground/70">
        © {currentYear} Matthew Trefusis. All rights reserved.
      </p>
    </footer>
  );
};
