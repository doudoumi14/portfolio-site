import { githubUrl, profile } from "@/data/profile";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-20">
      <p className="text-[15px] text-muted">{profile.location}</p>

      <h1 className="mt-3 font-serif text-5xl leading-[1.02] font-semibold tracking-tight sm:text-7xl">
        {profile.name}, <span className="whitespace-nowrap">{profile.credential}</span>
      </h1>

      <p className="mt-6 max-w-3xl text-xl leading-snug sm:text-2xl">{profile.role}</p>

      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{profile.summary}</p>

      <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-md bg-accent px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-foreground dark:text-background dark:hover:bg-foreground"
        >
          Connect on LinkedIn
        </a>
        <a
          href="#experience"
          className="text-[15px] font-semibold underline decoration-line decoration-2 underline-offset-[0.3em] transition-colors hover:decoration-foreground"
        >
          View experience
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="text-[15px] font-semibold underline decoration-line decoration-2 underline-offset-[0.3em] transition-colors hover:decoration-foreground"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
