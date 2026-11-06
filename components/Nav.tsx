"use client";

import { profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { ThemeToggle } from "./ThemeToggle";

const LINKS = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
];

// "top" is tracked but has no nav link, so nothing is highlighted while the
// hero is in view instead of the highlight sticking to the last section.
const SECTION_IDS = ["top", ...LINKS.map((link) => link.id)];

export function Nav() {
  const active = useActiveSection(SECTION_IDS);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-3.5">
        <a
          href="#top"
          className="shrink-0 font-serif text-lg font-semibold tracking-tight whitespace-nowrap"
        >
          {profile.name}
        </a>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          {/* One row on a phone: the name and the theme. The page is a single
              scroll, so the section links are for wider screens. */}
          <ul className="hidden flex-wrap items-center gap-x-5 gap-y-1 text-[15px] sm:flex">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={active === link.id ? "true" : undefined}
                  className={`border-b-2 py-1 transition-colors ${
                    active === link.id
                      ? "border-accent text-foreground"
                      : "border-transparent text-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
