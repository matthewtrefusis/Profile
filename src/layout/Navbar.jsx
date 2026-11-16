import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between relative">
        <a
          href="#"
          className="flex items-center gap-3 text-xl font-bold tracking-tight hover:text-primary"
          aria-label="Back to top"
        >
          <img
            src="/ProfilePicture-avatar.jpg"
            alt=""
            className="h-10 w-10 rounded-full object-cover border border-primary/40 transition-transform hover:scale-105"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="hidden md:block">
          <Button href="#contact" size="sm">
            Contact Me
          </Button>
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <Button href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
