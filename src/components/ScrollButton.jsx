import { ChevronDown } from "lucide-react";

export const ScrollButton = ({ href, label }) => {
  const handleClick = (event) => {
    const target = document.querySelector(href);

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", href);
  };

  return (
    <div className="flex justify-center pt-10 animate-fade-in">
      <a
        href={href}
        onClick={handleClick}
        aria-label={`Scroll to ${label} section`}
        className="group flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <span className="text-xs uppercase tracking-wider">Scroll</span>
        <ChevronDown
          className="h-6 w-6 animate-bounce"
          aria-hidden="true"
        />
      </a>
    </div>
  );
};
