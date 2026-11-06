import { repoUrl } from "@/data/profile";
import { projects } from "@/data/projects";

const LINK =
  "font-semibold underline decoration-line decoration-2 underline-offset-[0.3em] transition-colors hover:decoration-foreground";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Side projects</h2>
      <p className="mt-3 max-w-2xl text-muted">
        Hands-on technical work outside the day job. Each one works end to end, is tested in a real
        browser, and runs in CI.
      </p>

      <ul className="mt-10 border-t-2 border-foreground">
        {projects.map((project) => (
          <li
            key={project.name}
            className="grid gap-x-10 gap-y-3 border-b border-line py-8 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
          >
            <div>
              <h3 className="font-serif text-2xl font-semibold tracking-tight">{project.name}</h3>
              <p className="mt-1 text-muted">{project.tagline}</p>
            </div>

            <div>
              <p className="max-w-2xl">{project.description}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-muted marker:text-subtle">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-subtle">{project.tech.join(", ")}</p>
              <p className="mt-5 flex flex-wrap gap-x-7 gap-y-2 text-[15px]">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className={LINK}>
                    Open the live site
                  </a>
                )}
                <a href={repoUrl(project.repo)} target="_blank" rel="noreferrer" className={LINK}>
                  Source
                </a>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
