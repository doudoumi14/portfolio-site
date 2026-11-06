import { certifications, education } from "@/data/credentials";

export function Credentials() {
  return (
    <section id="credentials" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
        Education and certifications
      </h2>

      <div className="mt-10 grid gap-x-10 gap-y-10 border-t-2 border-foreground pt-8 sm:grid-cols-2">
        <div>
          <h3 className="font-semibold text-muted">Education</h3>
          <ul className="mt-4 flex flex-col gap-5">
            {education.map((entry) => (
              <li key={entry.school}>
                <p className="font-semibold">{entry.credential}</p>
                <p className="mt-0.5 text-[15px] text-muted">
                  {entry.school}
                  {entry.period && `, ${entry.period}`}
                </p>
                {entry.note && <p className="mt-1 text-sm text-subtle">{entry.note}</p>}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-muted">Certifications</h3>
          <ul className="mt-4 flex flex-col gap-5">
            {certifications.map((cert) => (
              <li key={cert.name}>
                <p className="font-semibold">{cert.name}</p>
                <p className="mt-0.5 text-[15px] text-muted tabular-nums">
                  {cert.issuer}, {cert.year}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
