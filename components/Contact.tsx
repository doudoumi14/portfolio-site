import { githubUrl, profile } from "@/data/profile";

const LINK =
  "font-semibold underline decoration-line decoration-2 underline-offset-[0.3em] transition-colors hover:decoration-foreground";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <div className="border-t-2 border-foreground pt-10">
        <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Get in touch</h2>
        <p className="mt-4 max-w-xl text-muted">
          Open to conversations on technology strategy, engineering leadership, or anything in the
          projects above.
        </p>

        <p className="mt-8">
          <a
            href={`mailto:${profile.email}`}
            className="font-serif text-2xl font-semibold tracking-tight break-all underline decoration-accent decoration-2 underline-offset-[0.2em] transition-[text-decoration-thickness] hover:decoration-[3px] sm:text-3xl"
          >
            {profile.email}
          </a>
        </p>

        <p className="mt-6 flex flex-wrap gap-x-7 gap-y-2 text-[15px]">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className={LINK}>
            LinkedIn
          </a>
          <a href={githubUrl} target="_blank" rel="noreferrer" className={LINK}>
            GitHub
          </a>
        </p>
      </div>
    </section>
  );
}
